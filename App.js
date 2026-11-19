import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import QUESTIONS, { CATEGORIES } from './src/questions';

const C = {
  bg: '#0f1420',
  card: '#1a2233',
  cardBack: '#1d2740',
  border: '#2a3550',
  text: '#e8ecf4',
  muted: '#8b96ad',
  accent: '#6c8cff',
  accentSoft: '#26305a',
  code: '#0b0f18',
  codeText: '#a6e3a1',
  inline: '#f5c27a',
};

const MONO = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'Consolas, Menlo, monospace' });

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Текст с `inline code`
function RichText({ text, style }) {
  const parts = text.split('`');
  return (
    <Text style={style}>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <Text key={i} style={styles.inlineCode}>{p}</Text>
        ) : (
          p
        )
      )}
    </Text>
  );
}

function Answer({ paragraphs }) {
  return paragraphs.map((p, i) =>
    p.startsWith('• ') ? (
      <View key={i} style={styles.bulletRow}>
        <Text style={styles.bulletDot}>•</Text>
        <RichText text={p.slice(2)} style={[styles.answerText, { flex: 1 }]} />
      </View>
    ) : (
      <RichText key={i} text={p} style={[styles.answerText, styles.paragraph]} />
    )
  );
}

function LangToggle({ lang, onChange }) {
  return (
    <View style={styles.toggle}>
      {['ru', 'pl'].map((l) => (
        <Pressable
          key={l}
          onPress={() => onChange(l)}
          style={[styles.toggleBtn, lang === l && styles.toggleBtnActive]}
          hitSlop={6}
        >
          <Text style={[styles.toggleText, lang === l && styles.toggleTextActive]}>
            {l === 'ru' ? '🇷🇺 RU' : '🇵🇱 PL'}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

function Main() {
  const { width } = useWindowDimensions();
  const cardWidth = Math.min(width - 32, 520);

  const [category, setCategory] = useState('all');
  const [shuffled, setShuffled] = useState(true);
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [lang, setLang] = useState('ru');

  const deck = useMemo(() => {
    const list = category === 'all' ? QUESTIONS : QUESTIONS.filter((q) => q.cat === category);
    return shuffled ? shuffle(list) : list;
    // seed нужен, чтобы перемешать заново по кнопке
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, shuffled, seed]);

  const card = deck[index] ?? deck[0];
  const catLabel = CATEGORIES.find((c) => c.id === card?.cat)?.ru;

  const translateX = useRef(new Animated.Value(0)).current;
  const flip = useRef(new Animated.Value(1)).current; // scaleX для эффекта переворота
  const busy = useRef(false);

  const resetCard = useCallback(() => {
    setShowAnswer(false);
    setLang('ru');
  }, []);

  const go = useCallback(
    (dir) => {
      if (busy.current || deck.length === 0) return;
      busy.current = true;
      const off = width + 40;
      Animated.timing(translateX, {
        toValue: dir > 0 ? -off : off,
        duration: 180,
        useNativeDriver: Platform.OS !== 'web',
      }).start(() => {
        setIndex((i) => (i + dir + deck.length) % deck.length);
        resetCard();
        translateX.setValue(dir > 0 ? off * 0.6 : -off * 0.6);
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: Platform.OS !== 'web',
          bounciness: 4,
          speed: 18,
        }).start(() => {
          busy.current = false;
        });
      });
    },
    [deck.length, width, translateX, resetCard]
  );

  const toggleFlip = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    const nd = Platform.OS !== 'web';
    Animated.timing(flip, { toValue: 0, duration: 120, useNativeDriver: nd }).start(() => {
      setShowAnswer((s) => !s);
      Animated.timing(flip, { toValue: 1, duration: 140, useNativeDriver: nd }).start(() => {
        busy.current = false;
      });
    });
  }, [flip]);

  // refs, чтобы PanResponder всегда видел актуальные функции
  const goRef = useRef(go);
  goRef.current = go;

  const pan = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_, g) =>
          Math.abs(g.dx) > 12 && Math.abs(g.dx) > Math.abs(g.dy) * 1.5,
        onPanResponderMove: (_, g) => {
          if (!busy.current) translateX.setValue(g.dx);
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderRelease: (_, g) => {
          if (busy.current) return;
          if (g.dx < -80 || g.vx < -0.5) goRef.current(1);
          else if (g.dx > 80 || g.vx > 0.5) goRef.current(-1);
          else
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: Platform.OS !== 'web',
            }).start();
        },
      }),
    [translateX]
  );

  // Клавиатура для теста на ноуте: ← → и пробел
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleFlip();
      } else if (e.key.toLowerCase() === 'l' && showAnswer) setLang((l) => (l === 'ru' ? 'pl' : 'ru'));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, toggleFlip, showAnswer]);

  const pickCategory = (id) => {
    setCategory(id);
    setIndex(0);
    resetCard();
  };

  const rotate = translateX.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: ['-8deg', '0deg', '8deg'],
    extrapolate: 'clamp',
  });

  if (!card) return null;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>.NET собес</Text>
        <Pressable
          onPress={() => {
            if (shuffled) setSeed((s) => s + 1);
            else setShuffled(true);
            setIndex(0);
            resetCard();
          }}
          onLongPress={() => {
            setShuffled(false);
            setIndex(0);
            resetCard();
          }}
          style={styles.iconBtn}
        >
          <Text style={styles.iconBtnText}>{shuffled ? '🔀 Перемешать' : '🔢 По порядку'}</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsScroll}
        contentContainerStyle={styles.chips}
      >
        {[{ id: 'all', ru: 'Все' }, ...CATEGORIES].map((c) => {
          const count = c.id === 'all' ? QUESTIONS.length : QUESTIONS.filter((q) => q.cat === c.id).length;
          const active = category === c.id;
          return (
            <Pressable key={c.id} onPress={() => pickCategory(c.id)} style={[styles.chip, active && styles.chipActive]}>
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {c.ru} · {count}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.progressWrap}>
        <View style={[styles.progressBar, { width: `${((index + 1) / deck.length) * 100}%` }]} />
      </View>
      <Text style={styles.counter}>
        {index + 1} / {deck.length}
      </Text>

      <View style={styles.cardArea} {...pan.panHandlers}>
        <Animated.View
          style={[
            styles.card,
            showAnswer && styles.cardBack,
            { width: cardWidth, transform: [{ translateX }, { rotate }, { scaleX: flip }] },
          ]}
        >
          <Pressable onPress={toggleFlip} style={styles.cardPress}>
            <View style={styles.cardTop}>
              <Text style={styles.catLabel}>{catLabel}</Text>
              {showAnswer && <LangToggle lang={lang} onChange={setLang} />}
            </View>

            {!showAnswer ? (
              <View style={styles.front}>
                <Text style={styles.question}>{card.q.ru}</Text>
                <Text style={styles.hint}>Нажми, чтобы увидеть ответ</Text>
              </View>
            ) : (
              <ScrollView style={styles.backScroll} contentContainerStyle={{ paddingBottom: 12 }}>
                <Text style={styles.questionSmall}>{card.q[lang]}</Text>
                <Answer paragraphs={card.a[lang]} />
                {card.code && (
                  <ScrollView horizontal style={styles.codeBox} nestedScrollEnabled>
                    <Text style={styles.codeText}>{card.code}</Text>
                  </ScrollView>
                )}
              </ScrollView>
            )}
          </Pressable>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={() => go(-1)} style={styles.navBtn}>
          <Text style={styles.navText}>←</Text>
        </Pressable>
        <Text style={styles.footerHint}>свайп ← → для смены вопроса</Text>
        <Pressable onPress={() => go(1)} style={styles.navBtn}>
          <Text style={styles.navText}>→</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: { color: C.text, fontSize: 22, fontWeight: '700' },
  iconBtn: { backgroundColor: C.card, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: C.border },
  iconBtnText: { color: C.text, fontSize: 13 },
  chipsScroll: { flexGrow: 0, marginTop: 12 },
  chips: { paddingHorizontal: 16, gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: C.card, borderWidth: 1, borderColor: C.border },
  chipActive: { backgroundColor: C.accent, borderColor: C.accent },
  chipText: { color: C.muted, fontSize: 13, fontWeight: '600' },
  chipTextActive: { color: '#fff' },
  progressWrap: { height: 4, backgroundColor: C.card, marginHorizontal: 16, marginTop: 14, borderRadius: 2, overflow: 'hidden' },
  progressBar: { height: 4, backgroundColor: C.accent },
  counter: { color: C.muted, textAlign: 'center', marginTop: 6, fontSize: 12 },
  cardArea: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
  card: {
    flex: 1,
    backgroundColor: C.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    overflow: 'hidden',
  },
  cardBack: { backgroundColor: C.cardBack },
  cardPress: { flex: 1, padding: 20 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 34 },
  catLabel: { color: C.accent, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  front: { flex: 1, justifyContent: 'center' },
  question: { color: C.text, fontSize: 26, fontWeight: '700', lineHeight: 34, textAlign: 'center' },
  hint: { color: C.muted, textAlign: 'center', marginTop: 24, fontSize: 13 },
  backScroll: { flex: 1, marginTop: 10 },
  questionSmall: { color: C.muted, fontSize: 15, fontWeight: '600', marginBottom: 14, lineHeight: 21 },
  answerText: { color: C.text, fontSize: 16, lineHeight: 24 },
  paragraph: { marginBottom: 10 },
  bulletRow: { flexDirection: 'row', marginBottom: 8, paddingLeft: 2 },
  bulletDot: { color: C.accent, fontSize: 16, lineHeight: 24, width: 16 },
  inlineCode: { fontFamily: MONO, color: C.inline, fontSize: 14 },
  codeBox: { backgroundColor: C.code, borderRadius: 12, padding: 12, marginTop: 6, flexGrow: 0 },
  codeText: { fontFamily: MONO, color: C.codeText, fontSize: 12, lineHeight: 18 },
  toggle: { flexDirection: 'row', backgroundColor: C.bg, borderRadius: 10, padding: 3, borderWidth: 1, borderColor: C.border },
  toggleBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  toggleBtnActive: { backgroundColor: C.accent },
  toggleText: { color: C.muted, fontSize: 13, fontWeight: '700' },
  toggleTextActive: { color: '#fff' },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  navBtn: { width: 52, height: 52, borderRadius: 26, backgroundColor: C.card, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: C.border },
  navText: { color: C.text, fontSize: 22 },
  footerHint: { color: C.muted, fontSize: 12 },
});
