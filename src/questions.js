// Банк вопросов. Формат ответа: массив абзацев.
// Абзац, начинающийся с "• ", рисуется как пункт списка.
// Текст в `обратных кавычках` рисуется моноширинным шрифтом.
// code — необязательный пример кода (показывается под ответом).

export const CATEGORIES = [
  { id: 'csharp', ru: 'C#', pl: 'C#' },
  { id: 'aspnet', ru: 'ASP.NET Core', pl: 'ASP.NET Core' },
  { id: 'db', ru: 'Базы данных', pl: 'Bazy danych' },
  { id: 'patterns', ru: 'Паттерны', pl: 'Wzorce' },
];

const QUESTIONS = [
  // ───────────────────────── C# ─────────────────────────
  {
    cat: 'csharp',
    q: { ru: 'Что такое ООП в двух словах?', pl: 'Czym jest OOP w kilku słowach?' },
    a: {
      ru: [
        'Это подход, где программа собирается из объектов. Каждый объект хранит свои данные (поля, свойства) и умеет что-то делать (методы).',
        'Класс — это чертёж, объект — конкретная вещь, построенная по этому чертежу.',
        'Держится на 4 столпах: инкапсуляция, наследование, полиморфизм, абстракция.',
      ],
      pl: [
        'To podejście, w którym program składa się z obiektów. Każdy obiekt ma swoje dane (pola, właściwości) i zachowanie (metody).',
        'Klasa to projekt, a obiekt to konkretna rzecz zbudowana według tego projektu.',
        'Opiera się na 4 filarach: hermetyzacja, dziedziczenie, polimorfizm, abstrakcja.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое инкапсуляция?', pl: 'Czym jest hermetyzacja (enkapsulacja)?' },
    a: {
      ru: [
        'Прячем внутренности объекта и даём работать с ним только через понятный публичный контракт. Снаружи нельзя случайно сломать состояние.',
        'Инструменты: модификаторы `private`, `protected`, `internal`, `public` и свойства вроде `{ get; private set; }`.',
      ],
      pl: [
        'Ukrywamy wnętrze obiektu i pozwalamy z nim pracować tylko przez czytelny, publiczny kontrakt. Z zewnątrz nie da się przypadkiem zepsuć stanu.',
        'Narzędzia: modyfikatory `private`, `protected`, `internal`, `public` oraz właściwości typu `{ get; private set; }`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое наследование и какие у него ограничения в C#?', pl: 'Czym jest dziedziczenie i jakie ma ograniczenia w C#?' },
    a: {
      ru: [
        'Класс-наследник забирает поля и методы базового класса и может их дополнить или переопределить.',
        '• В C# наследоваться можно только от одного класса.',
        '• Зато интерфейсов можно реализовать сколько угодно.',
        '• `sealed` запрещает наследоваться от класса.',
      ],
      pl: [
        'Klasa pochodna przejmuje pola i metody klasy bazowej i może je rozszerzyć lub nadpisać.',
        '• W C# można dziedziczyć tylko po jednej klasie.',
        '• Za to interfejsów można implementować dowolnie wiele.',
        '• `sealed` blokuje dziedziczenie po klasie.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое полиморфизм? Какой он бывает?', pl: 'Czym jest polimorfizm? Jakie są jego rodzaje?' },
    a: {
      ru: [
        'Один интерфейс — разные реализации. Код работает с базовым типом, а реальное поведение зависит от конкретного объекта.',
        '• Динамический (runtime): `virtual`/`override`, абстрактные методы, интерфейсы.',
        '• Статический (compile-time): перегрузка методов и операторов.',
      ],
      pl: [
        'Jeden interfejs — różne implementacje. Kod pracuje na typie bazowym, a faktyczne zachowanie zależy od konkretnego obiektu.',
        '• Dynamiczny (w czasie wykonania): `virtual`/`override`, metody abstrakcyjne, interfejsy.',
        '• Statyczny (w czasie kompilacji): przeciążanie metod i operatorów.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое абстракция?', pl: 'Czym jest abstrakcja?' },
    a: {
      ru: [
        'Показываем только то, что важно для использования, а детали реализации прячем. Например, `IRepository` говорит «сохрани», но не говорит, как именно.',
        'Инструменты: `abstract class` и `interface`.',
      ],
      pl: [
        'Pokazujemy tylko to, co ważne dla użytkownika, a szczegóły implementacji ukrywamy. Np. `IRepository` mówi „zapisz”, ale nie mówi jak.',
        'Narzędzia: `abstract class` i `interface`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Чем абстрактный класс отличается от интерфейса?', pl: 'Czym różni się klasa abstrakcyjna od interfejsu?' },
    a: {
      ru: [
        '• Абстрактный класс может иметь поля, конструкторы и готовую логику. Наследовать можно только один.',
        '• Интерфейс — это контракт без состояния. Класс может реализовать несколько интерфейсов.',
        '• С C# 8 в интерфейсе могут быть default-реализации методов, но полей всё равно нет.',
        'Правило: общий код и состояние — абстрактный класс; «умеет делать X» — интерфейс.',
      ],
      pl: [
        '• Klasa abstrakcyjna może mieć pola, konstruktory i gotową logikę. Dziedziczyć można tylko po jednej.',
        '• Interfejs to kontrakt bez stanu. Klasa może implementować wiele interfejsów.',
        '• Od C# 8 interfejs może mieć domyślne implementacje metod, ale nadal nie ma pól.',
        'Zasada: wspólny kod i stan — klasa abstrakcyjna; „potrafi robić X” — interfejs.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Value types vs reference types — в чём разница?', pl: 'Typy wartościowe vs referencyjne — jaka jest różnica?' },
    a: {
      ru: [
        '• Value types (`int`, `bool`, `decimal`, `struct`, `enum`, `DateTime`) — значение лежит прямо в переменной. При присваивании копируется само значение. `null` нельзя (только `int?`).',
        '• Reference types (`class`, `string`, массивы, делегаты) — в переменной лежит ссылка, а объект живёт в куче. При присваивании копируется ссылка, и обе переменные смотрят на один объект.',
        'Все типы в итоге наследуются от `System.Object`.',
      ],
      pl: [
        '• Typy wartościowe (`int`, `bool`, `decimal`, `struct`, `enum`, `DateTime`) — wartość jest bezpośrednio w zmiennej. Przy przypisaniu kopiowana jest wartość. `null` niedozwolony (tylko `int?`).',
        '• Typy referencyjne (`class`, `string`, tablice, delegaty) — w zmiennej jest referencja, a obiekt żyje na stercie. Przy przypisaniu kopiowana jest referencja i obie zmienne wskazują ten sam obiekt.',
        'Wszystkie typy dziedziczą ostatecznie po `System.Object`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Почему string неизменяемый и зачем нужен StringBuilder?', pl: 'Dlaczego string jest niemutowalny i po co jest StringBuilder?' },
    a: {
      ru: [
        '`string` — ссылочный тип, но immutable: любая «правка» создаёт новую строку, а старая уходит в мусор.',
        'Если склеивать строки в цикле, получится куча лишних объектов. `StringBuilder` держит изменяемый буфер и собирает строку без лишних аллокаций.',
      ],
      pl: [
        '`string` to typ referencyjny, ale niemutowalny: każda „zmiana” tworzy nowy obiekt, a stary trafia do śmieci.',
        'Sklejanie stringów w pętli tworzy masę zbędnych obiektów. `StringBuilder` trzyma modyfikowalny bufor i buduje tekst bez dodatkowych alokacji.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Чем отличаются ref, out и in?', pl: 'Czym różnią się ref, out i in?' },
    a: {
      ru: [
        'Все три передают параметр по ссылке, разница в правилах:',
        '• `ref` — переменная должна быть инициализирована до вызова, метод может её менять.',
        '• `out` — метод обязан присвоить значение (типичный пример `int.TryParse`).',
        '• `in` — только для чтения, удобно передавать большие struct без копирования.',
      ],
      pl: [
        'Wszystkie trzy przekazują parametr przez referencję, różnią się zasadami:',
        '• `ref` — zmienna musi być zainicjalizowana przed wywołaniem, metoda może ją zmieniać.',
        '• `out` — metoda musi przypisać wartość (typowy przykład `int.TryParse`).',
        '• `in` — tylko do odczytu, wygodne do przekazywania dużych struct bez kopiowania.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'var vs dynamic, const vs readonly', pl: 'var vs dynamic, const vs readonly' },
    a: {
      ru: [
        '• `var` — тип выводит компилятор, дальше он строгий. Просто сокращение записи.',
        '• `dynamic` — проверка типа откладывается до выполнения, ошибки всплывут только в рантайме.',
        '• `const` — значение известно на этапе компиляции и «вшивается» в код.',
        '• `readonly` — поле можно присвоить при объявлении или в конструкторе, потом не меняется.',
      ],
      pl: [
        '• `var` — typ ustala kompilator, potem jest ściśle określony. To tylko skrót zapisu.',
        '• `dynamic` — sprawdzanie typu odkładane jest do czasu wykonania, błędy wyjdą dopiero w runtime.',
        '• `const` — wartość znana w czasie kompilacji i „wklejana” w kod.',
        '• `readonly` — pole przypisujemy przy deklaracji lub w konstruktorze, potem się nie zmienia.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое record?', pl: 'Czym jest record?' },
    a: {
      ru: [
        'Тип, заточенный под данные: два record с одинаковыми значениями считаются равными (сравнение по значению, а не по ссылке).',
        'Из коробки неизменяемый, есть красивый `ToString()` и копирование с изменением через `with { }`. Отлично подходит для DTO.',
      ],
      pl: [
        'Typ stworzony do przechowywania danych: dwa recordy z tymi samymi wartościami są równe (porównanie po wartości, nie po referencji).',
        'Domyślnie niemutowalny, ma czytelny `ToString()` i kopiowanie ze zmianą przez `with { }`. Świetny do DTO.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое boxing и unboxing? Почему это плохо?', pl: 'Czym jest boxing i unboxing? Dlaczego to źle?' },
    a: {
      ru: [
        'Boxing — value type кладётся в `object`: в куче создаётся «коробка», значение копируется туда. Unboxing — обратное явное приведение; тип должен совпасть точно, иначе `InvalidCastException`.',
        'Минусы: лишние аллокации, нагрузка на GC, копирование.',
        'Как избежать: дженерики (`List<int>` вместо `ArrayList`), перегрузки под конкретные типы.',
      ],
      pl: [
        'Boxing — typ wartościowy trafia do `object`: na stercie powstaje „pudełko” i wartość jest tam kopiowana. Unboxing — jawne rzutowanie z powrotem; typ musi się dokładnie zgadzać, inaczej `InvalidCastException`.',
        'Wady: dodatkowe alokacje, obciążenie GC, kopiowanie.',
        'Jak unikać: generyki (`List<int>` zamiast `ArrayList`), przeciążenia dla konkretnych typów.',
      ],
    },
    code: 'int x = 42;\nobject o = x;    // boxing\nint y = (int)o;  // unboxing',
  },
  {
    cat: 'csharp',
    q: { ru: 'Расскажи об иерархии интерфейсов коллекций', pl: 'Opisz hierarchię interfejsów kolekcji' },
    a: {
      ru: [
        '• `IEnumerable<T>` — можно пройти в `foreach`, только вперёд и только чтение. Основа LINQ.',
        '• `ICollection<T>` — плюс `Count`, `Add`, `Remove`, `Contains`.',
        '• `IList<T>` — плюс доступ по индексу.',
        '• `IDictionary<K,V>` — пары ключ-значение.',
        '• `IReadOnlyList<T>` / `IReadOnlyCollection<T>` — чтобы отдать коллекцию наружу без права менять.',
      ],
      pl: [
        '• `IEnumerable<T>` — można iterować w `foreach`, tylko do przodu i tylko odczyt. Podstawa LINQ.',
        '• `ICollection<T>` — dodatkowo `Count`, `Add`, `Remove`, `Contains`.',
        '• `IList<T>` — dodatkowo dostęp po indeksie.',
        '• `IDictionary<K,V>` — pary klucz-wartość.',
        '• `IReadOnlyList<T>` / `IReadOnlyCollection<T>` — żeby zwrócić kolekcję bez prawa modyfikacji.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Какую коллекцию когда выбирать?', pl: 'Kiedy jakiej kolekcji używać?' },
    a: {
      ru: [
        '• `List<T>` — динамический массив, выбор по умолчанию. O(1) по индексу, O(n) поиск по значению.',
        '• `Dictionary<K,V>` — хеш-таблица, O(1) по ключу.',
        '• `HashSet<T>` — только уникальные элементы, быстрый `Contains`.',
        '• `Queue<T>` / `Stack<T>` — FIFO / LIFO.',
        '• `SortedDictionary` — дерево, O(log n), ключи отсортированы.',
        '• `ConcurrentDictionary` — для многопоточности.',
        'Для ключей словаря важно, чтобы `GetHashCode()` и `Equals()` были реализованы корректно.',
      ],
      pl: [
        '• `List<T>` — tablica dynamiczna, domyślny wybór. O(1) po indeksie, O(n) wyszukiwanie po wartości.',
        '• `Dictionary<K,V>` — tablica haszująca, O(1) po kluczu.',
        '• `HashSet<T>` — tylko unikalne elementy, szybki `Contains`.',
        '• `Queue<T>` / `Stack<T>` — FIFO / LIFO.',
        '• `SortedDictionary` — drzewo, O(log n), klucze posortowane.',
        '• `ConcurrentDictionary` — do wielowątkowości.',
        'Dla kluczy słownika ważne są poprawne `GetHashCode()` i `Equals()`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Как работает сборщик мусора (GC)?', pl: 'Jak działa Garbage Collector?' },
    a: {
      ru: [
        'GC сам освобождает память от объектов, на которые больше никто не ссылается.',
        '1) Находит корни — статические поля, локальные переменные, регистры.',
        '2) Mark — помечает всё, до чего можно дойти от корней.',
        '3) Sweep + Compact — удаляет остальное и уплотняет память, чтобы не было дыр.',
        '`GC.Collect()` руками вызывать почти никогда не нужно.',
      ],
      pl: [
        'GC sam zwalnia pamięć z obiektów, do których nikt już nie ma referencji.',
        '1) Znajduje korzenie — pola statyczne, zmienne lokalne, rejestry.',
        '2) Mark — oznacza wszystko, do czego da się dojść od korzeni.',
        '3) Sweep + Compact — usuwa resztę i kompaktuje pamięć, żeby nie było dziur.',
        '`GC.Collect()` ręcznie prawie nigdy nie jest potrzebny.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое поколения GC и LOH?', pl: 'Czym są generacje GC i LOH?' },
    a: {
      ru: [
        'Идея: большинство объектов умирает молодыми, поэтому их выгодно проверять чаще.',
        '• Gen 0 — новые объекты, чистится чаще всего.',
        '• Gen 1 — буфер между молодыми и старыми.',
        '• Gen 2 — долгожители, чистится редко и дорого.',
        'Пережил сборку — переехал в следующее поколение.',
        'LOH (Large Object Heap) — объекты от 85 000 байт. Собираются вместе с Gen 2 и по умолчанию не уплотняются.',
      ],
      pl: [
        'Idea: większość obiektów umiera młodo, więc opłaca się sprawdzać je częściej.',
        '• Gen 0 — nowe obiekty, sprzątane najczęściej.',
        '• Gen 1 — bufor między młodymi a starymi.',
        '• Gen 2 — długo żyjące, sprzątane rzadko i kosztownie.',
        'Obiekt, który przetrwa odśmiecanie, przechodzi do kolejnej generacji.',
        'LOH (Large Object Heap) — obiekty od 85 000 bajtów. Sprzątane razem z Gen 2 i domyślnie nie są kompaktowane.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'IDisposable, using и финализатор — зачем они?', pl: 'IDisposable, using i finalizator — po co?' },
    a: {
      ru: [
        'GC управляет только памятью. Файлы, сокеты, подключения к БД — неуправляемые ресурсы, их надо закрывать явно.',
        '• `IDisposable.Dispose()` — место, где освобождаем ресурс.',
        '• `using` гарантирует вызов `Dispose()`, даже если вылетело исключение.',
        '• Финализатор `~Class()` — страховка на случай, если Dispose забыли. Но он замедляет сборку, поэтому лучше без него.',
      ],
      pl: [
        'GC zarządza tylko pamięcią. Pliki, sockety, połączenia z bazą to zasoby niezarządzane — trzeba je zamykać jawnie.',
        '• `IDisposable.Dispose()` — miejsce, gdzie zwalniamy zasób.',
        '• `using` gwarantuje wywołanie `Dispose()`, nawet gdy poleci wyjątek.',
        '• Finalizator `~Class()` — zabezpieczenie, gdy ktoś zapomni o Dispose. Spowalnia jednak GC, więc lepiej go unikać.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Бывают ли утечки памяти в .NET?', pl: 'Czy w .NET są wycieki pamięci?' },
    a: {
      ru: [
        'Да. GC не удалит объект, пока на него есть ссылка — даже если он уже не нужен.',
        '• Подписка на событие без отписки (`+=` без `-=`) — издатель держит подписчика.',
        '• Статические коллекции, в которые только добавляют.',
        '• Кеши без лимита и времени жизни.',
        '• Незакрытые неуправляемые ресурсы (забыли `Dispose`).',
      ],
      pl: [
        'Tak. GC nie usunie obiektu, dopóki istnieje do niego referencja — nawet jeśli nie jest już potrzebny.',
        '• Subskrypcja zdarzenia bez wypisania (`+=` bez `-=`) — wydawca trzyma subskrybenta.',
        '• Statyczne kolekcje, do których tylko dodajemy.',
        '• Cache bez limitu i czasu życia.',
        '• Niezwolnione zasoby niezarządzane (brak `Dispose`).',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Зачем нужен async/await?', pl: 'Po co jest async/await?' },
    a: {
      ru: [
        'Чтобы поток не простаивал, пока ждёт I/O: ответ БД, HTTP-запрос, чтение файла.',
        'Пока ждём, поток возвращается в пул и обслуживает другие запросы. Поэтому веб-приложение выдерживает гораздо больше нагрузки на тех же ресурсах.',
      ],
      pl: [
        'Żeby wątek nie stał bezczynnie, czekając na I/O: odpowiedź bazy, żądanie HTTP, odczyt pliku.',
        'W czasie oczekiwania wątek wraca do puli i obsługuje inne żądania. Dzięki temu aplikacja webowa wytrzymuje dużo większy ruch na tych samych zasobach.',
      ],
    },
    code: 'public async Task<User?> GetUserAsync(int id, CancellationToken ct)\n{\n    return await _db.Users.FirstOrDefaultAsync(u => u.Id == id, ct);\n}',
  },
  {
    cat: 'csharp',
    q: { ru: 'Как await работает «под капотом»?', pl: 'Jak await działa „pod maską”?' },
    a: {
      ru: [
        '• `async` разрешает писать `await`, а компилятор превращает метод в машину состояний (state machine).',
        '• `await` НЕ создаёт новый поток. Метод просто «ставится на паузу», а продолжение выполнится, когда задача завершится.',
        '• `Task` / `Task<T>` — обещание результата в будущем. `ValueTask<T>` — оптимизация, когда результат часто уже готов (меньше аллокаций).',
      ],
      pl: [
        '• `async` pozwala używać `await`, a kompilator zamienia metodę w maszynę stanów (state machine).',
        '• `await` NIE tworzy nowego wątku. Metoda jest „pauzowana”, a kontynuacja wykona się, gdy zadanie się zakończy.',
        '• `Task` / `Task<T>` — obietnica wyniku w przyszłości. `ValueTask<T>` — optymalizacja, gdy wynik często jest już gotowy (mniej alokacji).',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Task.WhenAll, WhenAny и CancellationToken', pl: 'Task.WhenAll, WhenAny i CancellationToken' },
    a: {
      ru: [
        '• `Task.WhenAll` — запускаем несколько задач и ждём все сразу. Быстрее, чем await по очереди.',
        '• `Task.WhenAny` — ждём первую завершившуюся (например, таймаут).',
        '• `CancellationToken` — способ вежливо отменить долгую операцию. В ASP.NET Core токен отменяется, если клиент закрыл соединение.',
      ],
      pl: [
        '• `Task.WhenAll` — uruchamiamy kilka zadań i czekamy na wszystkie naraz. Szybciej niż await po kolei.',
        '• `Task.WhenAny` — czekamy na pierwsze zakończone (np. timeout).',
        '• `CancellationToken` — sposób na grzeczne anulowanie długiej operacji. W ASP.NET Core token jest anulowany, gdy klient zamknie połączenie.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Типичные ошибки с async', pl: 'Typowe błędy z async' },
    a: {
      ru: [
        '• `async void` — исключение не поймать снаружи. Допустимо только для обработчиков событий.',
        '• `.Result` и `.Wait()` — блокируют поток, есть риск deadlock. Надо «async all the way» — асинхронно по всей цепочке.',
        '• `ConfigureAwait(false)` — не возвращаться в исходный контекст. Нужно в библиотеках; в ASP.NET Core контекста синхронизации нет.',
      ],
      pl: [
        '• `async void` — wyjątku nie da się złapać z zewnątrz. Dopuszczalne tylko w handlerach zdarzeń.',
        '• `.Result` i `.Wait()` — blokują wątek, ryzyko zakleszczenia. Zasada „async all the way” — asynchronicznie przez cały łańcuch.',
        '• `ConfigureAwait(false)` — nie wracamy do oryginalnego kontekstu. Przydatne w bibliotekach; w ASP.NET Core nie ma kontekstu synchronizacji.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Асинхронность и многопоточность — это одно и то же?', pl: 'Czy asynchroniczność to to samo co wielowątkowość?' },
    a: {
      ru: [
        'Нет.',
        '• Асинхронность — про то, чтобы ждать без блокировки (I/O). Может работать вообще на одном потоке.',
        '• Многопоточность — про то, чтобы считать параллельно на нескольких потоках (CPU-задачи).',
        'Аналогия: официант принимает заказы, пока кухня готовит (async) vs несколько поваров готовят одновременно (многопоточность).',
      ],
      pl: [
        'Nie.',
        '• Asynchroniczność — czekanie bez blokowania (I/O). Może działać nawet na jednym wątku.',
        '• Wielowątkowość — równoległe liczenie na kilku wątkach (zadania CPU).',
        'Analogia: kelner przyjmuje zamówienia, gdy kuchnia gotuje (async) vs kilku kucharzy gotuje naraz (wielowątkowość).',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Процесс vs поток. Thread, ThreadPool, Task.Run', pl: 'Proces vs wątek. Thread, ThreadPool, Task.Run' },
    a: {
      ru: [
        'Процесс — изолированная программа со своей памятью. Поток — единица выполнения внутри процесса; потоки одного процесса делят память.',
        '• `Thread` — «сырой» поток, создавать дорого.',
        '• `ThreadPool` — пул готовых потоков для переиспользования.',
        '• `Task.Run` — основной способ запустить работу в пуле.',
        '• `Parallel.ForEach`, PLINQ (`AsParallel()`) — параллельная обработка данных.',
      ],
      pl: [
        'Proces to izolowany program z własną pamięcią. Wątek to jednostka wykonania w procesie; wątki jednego procesu współdzielą pamięć.',
        '• `Thread` — „surowy” wątek, kosztowny w tworzeniu.',
        '• `ThreadPool` — pula gotowych wątków do ponownego użycia.',
        '• `Task.Run` — główny sposób uruchomienia pracy w puli.',
        '• `Parallel.ForEach`, PLINQ (`AsParallel()`) — równoległe przetwarzanie danych.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое race condition и deadlock?', pl: 'Czym jest race condition i deadlock?' },
    a: {
      ru: [
        '• Race condition (гонка) — несколько потоков лезут в общие данные, и результат зависит от того, кто успел первым. Классика: `count++` из двух потоков теряет инкременты.',
        '• Deadlock — два потока ждут друг друга вечно: первый держит A и хочет B, второй держит B и хочет A.',
        '• Starvation — поток так и не получает ресурс, потому что его постоянно перехватывают другие.',
      ],
      pl: [
        '• Race condition (wyścig) — kilka wątków korzysta ze wspólnych danych i wynik zależy od tego, kto był pierwszy. Klasyka: `count++` z dwóch wątków gubi inkrementacje.',
        '• Deadlock (zakleszczenie) — dwa wątki czekają na siebie w nieskończoność: pierwszy trzyma A i chce B, drugi trzyma B i chce A.',
        '• Starvation (zagłodzenie) — wątek nigdy nie dostaje zasobu, bo ciągle przejmują go inne.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Какие есть способы синхронизации потоков?', pl: 'Jakie są sposoby synchronizacji wątków?' },
    a: {
      ru: [
        '• `lock` — пускает в блок только один поток (под капотом `Monitor`).',
        '• `Interlocked` — атомарные операции без блокировки (`Increment`, `CompareExchange`).',
        '• `SemaphoreSlim` — пускает N потоков и умеет `WaitAsync`. Внутри `lock` нельзя писать `await`, поэтому в async-коде используют его.',
        '• `Mutex` — работает между процессами.',
        '• `ReaderWriterLockSlim` — много читателей или один писатель.',
      ],
      pl: [
        '• `lock` — wpuszcza do bloku tylko jeden wątek (pod spodem `Monitor`).',
        '• `Interlocked` — operacje atomowe bez blokady (`Increment`, `CompareExchange`).',
        '• `SemaphoreSlim` — wpuszcza N wątków i ma `WaitAsync`. W `lock` nie można użyć `await`, więc w kodzie async używamy jego.',
        '• `Mutex` — działa między procesami.',
        '• `ReaderWriterLockSlim` — wielu czytelników albo jeden pisarz.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Потокобезопасные коллекции и volatile', pl: 'Kolekcje bezpieczne wątkowo i volatile' },
    a: {
      ru: [
        '• `ConcurrentDictionary`, `ConcurrentQueue`, `BlockingCollection` — можно безопасно использовать из нескольких потоков без своего lock.',
        '• `Channel<T>` — удобная асинхронная очередь producer/consumer.',
        '• `volatile` — запрещает потоку кешировать значение поля, каждый раз читается актуальное.',
      ],
      pl: [
        '• `ConcurrentDictionary`, `ConcurrentQueue`, `BlockingCollection` — można ich bezpiecznie używać z wielu wątków bez własnego locka.',
        '• `Channel<T>` — wygodna asynchroniczna kolejka producent/konsument.',
        '• `volatile` — wątek nie cache’uje wartości pola, zawsze czyta aktualną.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое LINQ и отложенное выполнение?', pl: 'Czym jest LINQ i wykonanie odroczone?' },
    a: {
      ru: [
        'LINQ — единый синтаксис запросов к коллекциям, БД и XML. Есть method-синтаксис (`.Where().Select()`) и query-синтаксис (`from x in ... select`).',
        'Отложенное выполнение: `Where`, `Select`, `OrderBy` лишь описывают запрос и ничего не делают, пока по результату не начнут итерироваться.',
        'Сразу выполняют: `ToList()`, `ToArray()`, `Count()`, `First()`, `Any()`, `Sum()`.',
      ],
      pl: [
        'LINQ to jednolita składnia zapytań do kolekcji, baz danych i XML. Jest składnia metod (`.Where().Select()`) i składnia zapytań (`from x in ... select`).',
        'Wykonanie odroczone: `Where`, `Select`, `OrderBy` tylko opisują zapytanie i nic nie robią, dopóki nie zaczniemy iterować wyniku.',
        'Natychmiast wykonują: `ToList()`, `ToArray()`, `Count()`, `First()`, `Any()`, `Sum()`.',
      ],
    },
    code: 'var names = users.Where(u => u.Age > 18)\n                 .OrderBy(u => u.Name)\n                 .Select(u => u.Name)\n                 .ToList();',
  },
  {
    cat: 'csharp',
    q: { ru: 'IEnumerable vs IQueryable', pl: 'IEnumerable vs IQueryable' },
    a: {
      ru: [
        '• `IEnumerable` — фильтрация в памяти приложения. Данные уже загружены, LINQ просто перебирает их.',
        '• `IQueryable` — запрос хранится как дерево выражений (expression tree), EF Core переводит его в SQL, и фильтрация идёт в базе.',
        'Ловушка: вызвать `.ToList()` или `AsEnumerable()` слишком рано — и вся таблица уедет в память, а `Where` выполнится уже на клиенте.',
      ],
      pl: [
        '• `IEnumerable` — filtrowanie w pamięci aplikacji. Dane są już załadowane, LINQ tylko je przegląda.',
        '• `IQueryable` — zapytanie jest drzewem wyrażeń (expression tree), EF Core tłumaczy je na SQL i filtrowanie odbywa się w bazie.',
        'Pułapka: za wczesne `.ToList()` lub `AsEnumerable()` — cała tabela ląduje w pamięci, a `Where` wykonuje się po stronie aplikacji.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'First vs FirstOrDefault vs Single. Что такое multiple enumeration?', pl: 'First vs FirstOrDefault vs Single. Czym jest multiple enumeration?' },
    a: {
      ru: [
        '• `First()` — бросит исключение, если элементов нет.',
        '• `FirstOrDefault()` — вернёт `default` (например `null`).',
        '• `Single()` — бросит исключение, если элементов не ровно один.',
        'Multiple enumeration: если дважды перебрать один и тот же `IEnumerable`, запрос выполнится дважды (например, два похода в БД). Лечится материализацией через `ToList()`.',
        'Полезные методы: `SelectMany` (раскрыть вложенные списки), `GroupBy`, `Join`, `Skip/Take` (пагинация), `Distinct`.',
      ],
      pl: [
        '• `First()` — rzuca wyjątek, gdy nie ma elementów.',
        '• `FirstOrDefault()` — zwraca `default` (np. `null`).',
        '• `Single()` — rzuca wyjątek, gdy elementów nie ma dokładnie jednego.',
        'Multiple enumeration: dwukrotne przejście po tym samym `IEnumerable` wykona zapytanie dwa razy (np. dwa zapytania do bazy). Rozwiązanie — materializacja przez `ToList()`.',
        'Przydatne metody: `SelectMany` (spłaszcza zagnieżdżone listy), `GroupBy`, `Join`, `Skip/Take` (paginacja), `Distinct`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое делегат? Func, Action, Predicate', pl: 'Czym jest delegat? Func, Action, Predicate' },
    a: {
      ru: [
        'Делегат — типобезопасная ссылка на метод. Метод можно положить в переменную и передать как параметр.',
        '• `Func<T, TResult>` — возвращает значение.',
        '• `Action<T>` — ничего не возвращает.',
        '• `Predicate<T>` — возвращает `bool`.',
      ],
      pl: [
        'Delegat to bezpieczna typowo referencja do metody. Metodę można zapisać w zmiennej i przekazać jako parametr.',
        '• `Func<T, TResult>` — zwraca wartość.',
        '• `Action<T>` — nic nie zwraca.',
        '• `Predicate<T>` — zwraca `bool`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Чем событие (event) отличается от делегата? Что такое замыкание?', pl: 'Czym różni się zdarzenie (event) od delegata? Czym jest domknięcie?' },
    a: {
      ru: [
        '• `event` — это делегат с ограничением: снаружи можно только подписаться (`+=`) или отписаться (`-=`). Вызвать событие или затереть подписчиков может только сам класс.',
        '• Замыкание (closure) — лямбда «захватывает» внешние переменные и видит их актуальные значения, даже когда вызывается позже.',
      ],
      pl: [
        '• `event` to delegat z ograniczeniem: z zewnątrz można tylko subskrybować (`+=`) lub się wypisać (`-=`). Wywołać zdarzenie lub wyczyścić subskrybentów może tylko sama klasa.',
        '• Domknięcie (closure) — lambda „przechwytuje” zmienne zewnętrzne i widzi ich aktualne wartości, nawet gdy jest wywołana później.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Дженерики: ограничения, ковариантность и контравариантность', pl: 'Generyki: ograniczenia, kowariancja i kontrawariancja' },
    a: {
      ru: [
        'Дженерики — код, который работает с любым типом, но остаётся типобезопасным (`List<T>`).',
        '• Ограничения: `where T : class`, `struct`, `new()`, `IComparable<T>` и т.д.',
        '• Ковариантность (`out T`) — `IEnumerable<string>` можно использовать как `IEnumerable<object>`.',
        '• Контравариантность (`in T`) — наоборот: `Action<object>` подходит туда, где ждут `Action<string>`.',
      ],
      pl: [
        'Generyki — kod działający z dowolnym typem, ale nadal bezpieczny typowo (`List<T>`).',
        '• Ograniczenia: `where T : class`, `struct`, `new()`, `IComparable<T>` itd.',
        '• Kowariancja (`out T`) — `IEnumerable<string>` można użyć jako `IEnumerable<object>`.',
        '• Kontrawariancja (`in T`) — odwrotnie: `Action<object>` pasuje tam, gdzie oczekiwany jest `Action<string>`.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'throw vs throw ex', pl: 'throw vs throw ex' },
    a: {
      ru: [
        '• `throw;` — пробрасывает исключение дальше и сохраняет оригинальный стек вызовов.',
        '• `throw ex;` — сбрасывает стек, и потом не видно, где на самом деле упало.',
        'Свои исключения наследуются от `Exception`. `finally` выполняется всегда — там освобождают ресурсы.',
      ],
      pl: [
        '• `throw;` — rzuca wyjątek dalej i zachowuje oryginalny stos wywołań.',
        '• `throw ex;` — resetuje stos i potem nie widać, gdzie naprawdę był błąd.',
        'Własne wyjątki dziedziczą po `Exception`. `finally` wykonuje się zawsze — tam zwalniamy zasoby.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: '== vs Equals', pl: '== vs Equals' },
    a: {
      ru: [
        '• Для ссылочных типов `==` по умолчанию сравнивает ссылки — это один и тот же объект?',
        '• `Equals` можно переопределить, чтобы сравнивать по значению. Переопределяешь `Equals` — обязательно переопредели и `GetHashCode`, иначе сломаются `Dictionary` и `HashSet`.',
        'Исключение: у `string` и `record` `==` уже сравнивает по значению.',
      ],
      pl: [
        '• Dla typów referencyjnych `==` domyślnie porównuje referencje — czy to ten sam obiekt?',
        '• `Equals` można nadpisać, żeby porównywać po wartości. Nadpisujesz `Equals` — musisz nadpisać też `GetHashCode`, inaczej zepsują się `Dictionary` i `HashSet`.',
        'Wyjątek: dla `string` i `record` `==` już porównuje po wartości.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'static и extension methods', pl: 'static i metody rozszerzające' },
    a: {
      ru: [
        '• Статические члены принадлежат типу, а не объекту. Статический класс нельзя создать через `new`.',
        '• Extension method — статический метод в статическом классе, у первого параметра стоит `this`. Позволяет «добавить» метод к чужому типу, не меняя его. Весь LINQ сделан так.',
      ],
      pl: [
        '• Składowe statyczne należą do typu, a nie do obiektu. Klasy statycznej nie da się utworzyć przez `new`.',
        '• Metoda rozszerzająca — statyczna metoda w statycznej klasie z `this` przy pierwszym parametrze. Pozwala „dodać” metodę do cudzego typu bez jego zmiany. Tak zbudowany jest cały LINQ.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: 'Что такое CLR, IL и JIT?', pl: 'Czym są CLR, IL i JIT?' },
    a: {
      ru: [
        '• C# компилируется не в машинный код, а в промежуточный IL.',
        '• CLR — среда выполнения: управляет памятью (GC), исключениями, безопасностью типов.',
        '• JIT — во время работы переводит IL в машинный код под конкретный процессор.',
      ],
      pl: [
        '• C# kompiluje się nie do kodu maszynowego, ale do pośredniego IL.',
        '• CLR — środowisko uruchomieniowe: zarządza pamięcią (GC), wyjątkami, bezpieczeństwem typów.',
        '• JIT — w czasie działania tłumaczy IL na kod maszynowy dla konkretnego procesora.',
      ],
    },
  },
  {
    cat: 'csharp',
    q: { ru: '.NET Framework vs .NET (Core)', pl: '.NET Framework vs .NET (Core)' },
    a: {
      ru: [
        '• .NET Framework — старая платформа, только Windows, новых фич не получает.',
        '• .NET 8/9/10 — современный, кроссплатформенный (Windows, Linux, macOS), open-source и заметно быстрее. Все новые проекты пишут на нём.',
      ],
      pl: [
        '• .NET Framework — stara platforma, tylko Windows, nie dostaje nowych funkcji.',
        '• .NET 8/9/10 — nowoczesny, wieloplatformowy (Windows, Linux, macOS), open-source i wyraźnie szybszy. Wszystkie nowe projekty pisze się w nim.',
      ],
    },
  },

  // ───────────────────────── ASP.NET Core ─────────────────────────
  {
    cat: 'aspnet',
    q: { ru: 'Что такое ASP.NET Core и Kestrel?', pl: 'Czym jest ASP.NET Core i Kestrel?' },
    a: {
      ru: [
        'ASP.NET Core — кроссплатформенный open-source фреймворк для веб-приложений и API.',
        'Kestrel — встроенный быстрый веб-сервер. В проде его обычно ставят за reverse proxy (Nginx, IIS), который берёт на себя SSL, балансировку и т.п.',
      ],
      pl: [
        'ASP.NET Core to wieloplatformowy framework open-source do aplikacji webowych i API.',
        'Kestrel to wbudowany, szybki serwer WWW. Na produkcji zwykle stoi za reverse proxy (Nginx, IIS), który zajmuje się SSL, równoważeniem obciążenia itp.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как стартует приложение? Что происходит в Program.cs?', pl: 'Jak startuje aplikacja? Co dzieje się w Program.cs?' },
    a: {
      ru: [
        'Две фазы:',
        '1) До `builder.Build()` — регистрируем сервисы в DI-контейнере: `builder.Services.Add...()`.',
        '2) После `Build()` — собираем конвейер middleware: `app.Use...()`, `app.Map...()`, и в конце `app.Run()`.',
      ],
      pl: [
        'Dwie fazy:',
        '1) Przed `builder.Build()` — rejestrujemy serwisy w kontenerze DI: `builder.Services.Add...()`.',
        '2) Po `Build()` — budujemy potok middleware: `app.Use...()`, `app.Map...()`, a na końcu `app.Run()`.',
      ],
    },
    code: 'var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nbuilder.Services.AddScoped<IUserService, UserService>();\n\nvar app = builder.Build();\napp.UseExceptionHandler("/error");\napp.UseAuthentication();\napp.UseAuthorization();\napp.MapControllers();\napp.Run();',
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое Dependency Injection и зачем он нужен?', pl: 'Czym jest Dependency Injection i po co?' },
    a: {
      ru: [
        'Класс не создаёт свои зависимости сам через `new`, а получает их снаружи — обычно через конструктор. Кто и что подставит, решает DI-контейнер.',
        'Это реализация буквы D из SOLID (инверсия зависимостей).',
        'Плюсы: слабая связность, легко подменить реализацию, легко писать юнит-тесты с моками.',
      ],
      pl: [
        'Klasa nie tworzy swoich zależności przez `new`, tylko dostaje je z zewnątrz — zwykle przez konstruktor. Co zostanie podstawione, decyduje kontener DI.',
        'To realizacja litery D z SOLID (odwrócenie zależności).',
        'Zalety: luźne powiązania, łatwa podmiana implementacji, łatwe testy jednostkowe z mockami.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Transient, Scoped, Singleton — в чём разница?', pl: 'Transient, Scoped, Singleton — jaka jest różnica?' },
    a: {
      ru: [
        '• `AddTransient` — новый экземпляр каждый раз, когда его просят. Для лёгких сервисов без состояния.',
        '• `AddScoped` — один экземпляр на HTTP-запрос. Типичный пример — `DbContext`, бизнес-сервисы.',
        '• `AddSingleton` — один экземпляр на всё приложение. Кеш, конфигурация. Должен быть потокобезопасным.',
      ],
      pl: [
        '• `AddTransient` — nowa instancja przy każdym pobraniu. Dla lekkich serwisów bez stanu.',
        '• `AddScoped` — jedna instancja na żądanie HTTP. Typowy przykład — `DbContext`, serwisy biznesowe.',
        '• `AddSingleton` — jedna instancja na całą aplikację. Cache, konfiguracja. Musi być bezpieczny wątkowo.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое captive dependency?', pl: 'Czym jest captive dependency?' },
    a: {
      ru: [
        'Это когда сервис с коротким временем жизни внедряют в долгоживущий. Классика — Scoped в Singleton.',
        'Scoped-сервис «застревает» навсегда: например, один `DbContext` на все запросы, а он не потокобезопасен — получаем странные баги.',
        'Решение: в Singleton создавать scope вручную через `IServiceScopeFactory`.',
      ],
      pl: [
        'To sytuacja, gdy serwis o krótkim czasie życia wstrzykujemy do długo żyjącego. Klasyka — Scoped w Singletonie.',
        'Serwis Scoped „utyka” na zawsze: np. jeden `DbContext` dla wszystkich żądań, a on nie jest bezpieczny wątkowo — pojawiają się dziwne błędy.',
        'Rozwiązanie: w Singletonie tworzymy scope ręcznie przez `IServiceScopeFactory`.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое middleware?', pl: 'Czym jest middleware?' },
    a: {
      ru: [
        'Звено в конвейере (pipeline), через который проходит каждый HTTP-запрос.',
        'Middleware может сделать что-то до, вызвать следующее звено (`await next()`) и сделать что-то после. Или прервать цепочку и сразу вернуть ответ (short-circuit).',
        'Запрос идёт по цепочке вперёд, ответ возвращается в обратном порядке — как матрёшка.',
      ],
      pl: [
        'Ogniwo w potoku (pipeline), przez który przechodzi każde żądanie HTTP.',
        'Middleware może zrobić coś przed, wywołać kolejne ogniwo (`await next()`) i zrobić coś po. Albo przerwać łańcuch i od razu zwrócić odpowiedź (short-circuit).',
        'Żądanie idzie łańcuchem w przód, a odpowiedź wraca w odwrotnej kolejności — jak matrioszka.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Use vs Run vs Map. Важен ли порядок middleware?', pl: 'Use vs Run vs Map. Czy kolejność middleware ma znaczenie?' },
    a: {
      ru: [
        '• `app.Use` — делает своё и передаёт дальше.',
        '• `app.Run` — терминальный, дальше не передаёт.',
        '• `app.Map` — ветвление по пути.',
        'Порядок очень важен. Типичный: ExceptionHandler → HSTS → HttpsRedirection → StaticFiles → Routing → CORS → Authentication → Authorization → свои middleware → Endpoints.',
        'Аутентификация всегда раньше авторизации — сначала узнаём, кто ты, потом проверяем права.',
      ],
      pl: [
        '• `app.Use` — robi swoje i przekazuje dalej.',
        '• `app.Run` — końcowy, nie przekazuje dalej.',
        '• `app.Map` — rozgałęzienie po ścieżce.',
        'Kolejność jest bardzo ważna. Typowa: ExceptionHandler → HSTS → HttpsRedirection → StaticFiles → Routing → CORS → Authentication → Authorization → własne middleware → Endpoints.',
        'Uwierzytelnianie zawsze przed autoryzacją — najpierw ustalamy, kim jesteś, potem sprawdzamy uprawnienia.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как написать свой middleware?', pl: 'Jak napisać własne middleware?' },
    a: {
      ru: [
        'Класс с конструктором, принимающим `RequestDelegate next`, и методом `InvokeAsync(HttpContext context)`. Подключается через `app.UseMiddleware<T>()`.',
        'Примеры из жизни: глобальная обработка исключений, логирование запросов, замер времени, correlation ID.',
      ],
      pl: [
        'Klasa z konstruktorem przyjmującym `RequestDelegate next` i metodą `InvokeAsync(HttpContext context)`. Rejestrowana przez `app.UseMiddleware<T>()`.',
        'Przykłady z życia: globalna obsługa wyjątków, logowanie żądań, pomiar czasu, correlation ID.',
      ],
    },
    code: 'public class TimingMiddleware\n{\n    private readonly RequestDelegate _next;\n    public TimingMiddleware(RequestDelegate next) => _next = next;\n\n    public async Task InvokeAsync(HttpContext ctx)\n    {\n        var sw = Stopwatch.StartNew();\n        await _next(ctx);\n        Console.WriteLine($"{ctx.Request.Path}: {sw.ElapsedMilliseconds} ms");\n    }\n}',
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое REST?', pl: 'Czym jest REST?' },
    a: {
      ru: [
        'Архитектурный стиль для API:',
        '• Всё — ресурсы с понятными URL (`/users/5`).',
        '• Действия выражаются HTTP-методами (GET, POST, PUT, DELETE).',
        '• Stateless — сервер не помнит клиента между запросами, всё нужное приходит в самом запросе.',
      ],
      pl: [
        'Styl architektury dla API:',
        '• Wszystko to zasoby z czytelnymi URL (`/users/5`).',
        '• Operacje wyrażamy metodami HTTP (GET, POST, PUT, DELETE).',
        '• Bezstanowość — serwer nie pamięta klienta między żądaniami, wszystko potrzebne jest w samym żądaniu.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'HTTP-методы и идемпотентность', pl: 'Metody HTTP i idempotentność' },
    a: {
      ru: [
        '• GET — прочитать.',
        '• POST — создать.',
        '• PUT — заменить целиком.',
        '• PATCH — изменить частично.',
        '• DELETE — удалить.',
        'Идемпотентный = повторный вызов даёт тот же результат. GET, PUT, DELETE — идемпотентны. POST — нет: два вызова создадут две записи.',
      ],
      pl: [
        '• GET — odczyt.',
        '• POST — tworzenie.',
        '• PUT — pełna zamiana.',
        '• PATCH — częściowa zmiana.',
        '• DELETE — usunięcie.',
        'Idempotentna = ponowne wywołanie daje ten sam efekt. GET, PUT, DELETE są idempotentne. POST nie: dwa wywołania utworzą dwa rekordy.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Основные HTTP статус-коды. 401 vs 403?', pl: 'Najważniejsze kody statusu HTTP. 401 vs 403?' },
    a: {
      ru: [
        '• 200 OK, 201 Created, 204 No Content.',
        '• 400 Bad Request — кривые данные от клиента.',
        '• 401 Unauthorized — мы не знаем, кто ты (не залогинен).',
        '• 403 Forbidden — знаем, кто ты, но тебе сюда нельзя.',
        '• 404 Not Found, 409 Conflict.',
        '• 500 Internal Server Error — упал сервер.',
      ],
      pl: [
        '• 200 OK, 201 Created, 204 No Content.',
        '• 400 Bad Request — błędne dane od klienta.',
        '• 401 Unauthorized — nie wiemy, kim jesteś (brak logowania).',
        '• 403 Forbidden — wiemy, kim jesteś, ale nie masz tu dostępu.',
        '• 404 Not Found, 409 Conflict.',
        '• 500 Internal Server Error — błąd serwera.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Контроллеры vs Minimal API', pl: 'Kontrolery vs Minimal API' },
    a: {
      ru: [
        '• Контроллеры: класс от `ControllerBase` с `[ApiController]` — даёт автоматическую валидацию модели (сразу 400) и биндинг из body. Атрибуты: `[Route]`, `[HttpGet("{id}")]`, `[FromBody]`, `[FromQuery]`.',
        '• Возвращаем `ActionResult<T>`: `Ok()`, `NotFound()`, `CreatedAtAction()`, `BadRequest()`.',
        '• Minimal API: `app.MapGet("/users/{id}", ...)` — меньше кода, хорошо для небольших сервисов и микросервисов.',
      ],
      pl: [
        '• Kontrolery: klasa z `ControllerBase` i `[ApiController]` — daje automatyczną walidację modelu (od razu 400) i bindowanie z body. Atrybuty: `[Route]`, `[HttpGet("{id}")]`, `[FromBody]`, `[FromQuery]`.',
        '• Zwracamy `ActionResult<T>`: `Ok()`, `NotFound()`, `CreatedAtAction()`, `BadRequest()`.',
        '• Minimal API: `app.MapGet("/users/{id}", ...)` — mniej kodu, dobre dla małych serwisów i mikroserwisów.',
      ],
    },
    code: '[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase\n{\n    [HttpGet("{id}")]\n    public async Task<ActionResult<UserDto>> Get(int id)\n    {\n        var user = await _service.GetAsync(id);\n        return user is null ? NotFound() : Ok(user);\n    }\n}',
  },
  {
    cat: 'aspnet',
    q: { ru: 'Зачем нужны DTO? Как валидировать входные данные?', pl: 'Po co są DTO? Jak walidować dane wejściowe?' },
    a: {
      ru: [
        'DTO — отдельные модели для входа и выхода API. Не отдаём наружу сущности БД напрямую: не светим лишние поля, не ловим циклические ссылки, API не ломается при изменении схемы.',
        'Маппинг — руками или через AutoMapper / Mapster.',
        'Валидация: DataAnnotations (`[Required]`, `[MaxLength]`) или FluentValidation. Документация — Swagger / OpenAPI, версионирование — `/api/v1/...`.',
      ],
      pl: [
        'DTO to osobne modele wejścia i wyjścia API. Nie zwracamy encji bazy bezpośrednio: nie ujawniamy zbędnych pól, unikamy cyklicznych referencji, API nie psuje się przy zmianie schematu.',
        'Mapowanie — ręcznie lub przez AutoMapper / Mapster.',
        'Walidacja: DataAnnotations (`[Required]`, `[MaxLength]`) lub FluentValidation. Dokumentacja — Swagger / OpenAPI, wersjonowanie — `/api/v1/...`.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Чем фильтры отличаются от middleware?', pl: 'Czym różnią się filtry od middleware?' },
    a: {
      ru: [
        'Middleware работает для любого запроса и ничего не знает про контроллеры.',
        'Фильтры работают внутри MVC, уже после выбора эндпоинта — у них есть доступ к контексту действия, аргументам и модели.',
        'Порядок фильтров: Authorization → Resource → Action → Exception → Result.',
      ],
      pl: [
        'Middleware działa dla każdego żądania i nic nie wie o kontrolerach.',
        'Filtry działają wewnątrz MVC, już po wybraniu endpointu — mają dostęp do kontekstu akcji, argumentów i modelu.',
        'Kolejność filtrów: Authorization → Resource → Action → Exception → Result.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как устроена конфигурация? Что такое Options pattern?', pl: 'Jak działa konfiguracja? Czym jest Options pattern?' },
    a: {
      ru: [
        'Источники: `appsettings.json` → `appsettings.{Environment}.json` → User Secrets → переменные окружения → Key Vault. Кто позже — тот и прав (переопределяет).',
        'Options pattern — привязываем секцию конфига к классу:',
        '• `IOptions<T>` — читается один раз.',
        '• `IOptionsSnapshot<T>` — заново на каждый запрос.',
        '• `IOptionsMonitor<T>` — отслеживает изменения на лету.',
      ],
      pl: [
        'Źródła: `appsettings.json` → `appsettings.{Environment}.json` → User Secrets → zmienne środowiskowe → Key Vault. Późniejsze źródło nadpisuje wcześniejsze.',
        'Options pattern — wiążemy sekcję konfiguracji z klasą:',
        '• `IOptions<T>` — czytane raz.',
        '• `IOptionsSnapshot<T>` — od nowa przy każdym żądaniu.',
        '• `IOptionsMonitor<T>` — śledzi zmiany na bieżąco.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Логирование, фоновые задачи и кеширование', pl: 'Logowanie, zadania w tle i cache' },
    a: {
      ru: [
        '• Логи: `ILogger<T>`, уровни Trace → Debug → Information → Warning → Error → Critical. Часто Serilog/NLog со структурным логированием.',
        '• Фоновые задачи: `IHostedService` / `BackgroundService`. По расписанию — Hangfire или Quartz.',
        '• Кеш: `IMemoryCache` (в памяти одного сервера), `IDistributedCache` (Redis, общий для нескольких серверов), output caching.',
      ],
      pl: [
        '• Logi: `ILogger<T>`, poziomy Trace → Debug → Information → Warning → Error → Critical. Często Serilog/NLog z logowaniem strukturalnym.',
        '• Zadania w tle: `IHostedService` / `BackgroundService`. Według harmonogramu — Hangfire lub Quartz.',
        '• Cache: `IMemoryCache` (w pamięci jednego serwera), `IDistributedCache` (Redis, wspólny dla wielu serwerów), output caching.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Аутентификация vs авторизация', pl: 'Uwierzytelnianie vs autoryzacja' },
    a: {
      ru: [
        '• Аутентификация — «кто ты?». Проверяем личность (логин, токен).',
        '• Авторизация — «что тебе можно?». Проверяем права.',
        'Способы аутентификации: cookies (классические сайты), JWT (API), OAuth 2.0 / OpenID Connect (вход через Entra ID, Google, Keycloak), ASP.NET Core Identity — готовое управление пользователями.',
      ],
      pl: [
        '• Uwierzytelnianie — „kim jesteś?”. Sprawdzamy tożsamość (login, token).',
        '• Autoryzacja — „co możesz zrobić?”. Sprawdzamy uprawnienia.',
        'Sposoby uwierzytelniania: cookies (klasyczne strony), JWT (API), OAuth 2.0 / OpenID Connect (logowanie przez Entra ID, Google, Keycloak), ASP.NET Core Identity — gotowe zarządzanie użytkownikami.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как работает JWT?', pl: 'Jak działa JWT?' },
    a: {
      ru: [
        'Токен из трёх частей: `header.payload.signature`. В payload лежат claims (id, роли), подпись защищает от подделки.',
        'Сервер не хранит сессию — просто проверяет подпись. Поэтому легко масштабироваться.',
        'Передаётся в заголовке `Authorization: Bearer <token>`. Access-токен живёт недолго, для продления используют refresh token.',
      ],
      pl: [
        'Token z trzech części: `header.payload.signature`. W payload są claims (id, role), podpis chroni przed podrobieniem.',
        'Serwer nie przechowuje sesji — tylko weryfikuje podpis. Dzięki temu łatwo skalować.',
        'Przesyłany w nagłówku `Authorization: Bearer <token>`. Access token żyje krótko, do odświeżania służy refresh token.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как настроить авторизацию в ASP.NET Core? Что такое CORS?', pl: 'Jak skonfigurować autoryzację w ASP.NET Core? Czym jest CORS?' },
    a: {
      ru: [
        '• `[Authorize]` — только для залогиненных.',
        '• `[Authorize(Roles = "Admin")]` — по ролям.',
        '• `[Authorize(Policy = "...")]` — по политикам на основе claims (гибче ролей).',
        '• `[AllowAnonymous]` — открыть доступ всем.',
        'CORS — механизм браузера: разрешает фронту с другого домена вызывать наш API. Настраивается на сервере.',
      ],
      pl: [
        '• `[Authorize]` — tylko dla zalogowanych.',
        '• `[Authorize(Roles = "Admin")]` — według ról.',
        '• `[Authorize(Policy = "...")]` — według polityk opartych na claims (elastyczniejsze niż role).',
        '• `[AllowAnonymous]` — dostęp dla wszystkich.',
        'CORS — mechanizm przeglądarki: pozwala frontendowi z innej domeny wywoływać nasze API. Konfigurujemy go na serwerze.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое EF Core и DbContext?', pl: 'Czym jest EF Core i DbContext?' },
    a: {
      ru: [
        'EF Core — ORM: работаем с базой через C#-классы и LINQ вместо ручного SQL.',
        '• `DbContext` — сессия с БД, по сути Unit of Work.',
        '• `DbSet<T>` — таблица, по сути Repository.',
        '• `SaveChanges()` сохраняет все накопленные изменения одной транзакцией.',
      ],
      pl: [
        'EF Core to ORM: pracujemy z bazą przez klasy C# i LINQ zamiast ręcznego SQL.',
        '• `DbContext` — sesja z bazą, w praktyce Unit of Work.',
        '• `DbSet<T>` — tabela, w praktyce Repository.',
        '• `SaveChanges()` zapisuje wszystkie zebrane zmiany w jednej transakcji.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Code First vs Database First. Как работают миграции?', pl: 'Code First vs Database First. Jak działają migracje?' },
    a: {
      ru: [
        '• Code First — пишем классы, из них генерируются миграции, из миграций — база.',
        '• Database First — база уже есть, генерируем классы через scaffold.',
        'Миграции: `dotnet ef migrations add Name` создаёт миграцию, `dotnet ef database update` применяет её к БД.',
      ],
      pl: [
        '• Code First — piszemy klasy, z nich generują się migracje, a z migracji baza.',
        '• Database First — baza już istnieje, generujemy klasy przez scaffold.',
        'Migracje: `dotnet ef migrations add Name` tworzy migrację, `dotnet ef database update` stosuje ją w bazie.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое Change Tracker и AsNoTracking?', pl: 'Czym jest Change Tracker i AsNoTracking?' },
    a: {
      ru: [
        'Change Tracker следит за загруженными сущностями и помнит их состояние: Added, Modified, Deleted, Unchanged. По нему `SaveChanges()` понимает, какой SQL сгенерировать.',
        'Если данные нужны только для чтения, `AsNoTracking()` отключает отслеживание — меньше памяти и быстрее.',
      ],
      pl: [
        'Change Tracker śledzi załadowane encje i pamięta ich stan: Added, Modified, Deleted, Unchanged. Na tej podstawie `SaveChanges()` wie, jaki SQL wygenerować.',
        'Jeśli dane są tylko do odczytu, `AsNoTracking()` wyłącza śledzenie — mniej pamięci i szybciej.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как EF Core загружает связанные данные?', pl: 'Jak EF Core ładuje powiązane dane?' },
    a: {
      ru: [
        '• Eager — сразу вместе с основной сущностью: `.Include(x => x.Orders)`.',
        '• Explicit — догружаем явно, когда нужно: `Entry(x).Collection(...).Load()`.',
        '• Lazy — подгружается само при обращении к свойству (через прокси). Удобно, но легко нарваться на N+1, поэтому осторожно.',
      ],
      pl: [
        '• Eager — od razu z główną encją: `.Include(x => x.Orders)`.',
        '• Explicit — doładowujemy jawnie, gdy trzeba: `Entry(x).Collection(...).Load()`.',
        '• Lazy — ładuje się samo przy odwołaniu do właściwości (przez proxy). Wygodne, ale łatwo o N+1, więc ostrożnie.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое проблема N+1?', pl: 'Czym jest problem N+1?' },
    a: {
      ru: [
        'Один запрос достаёт список (например, 100 заказов), а потом для каждого элемента летит отдельный запрос за связанными данными. Итого 1 + 100 запросов вместо одного.',
        'Лечится через `Include` или проекцию в `Select`, чтобы всё пришло одним запросом.',
      ],
      pl: [
        'Jedno zapytanie pobiera listę (np. 100 zamówień), a potem dla każdego elementu leci osobne zapytanie o dane powiązane. Razem 1 + 100 zapytań zamiast jednego.',
        'Rozwiązanie: `Include` lub projekcja w `Select`, żeby wszystko przyszło jednym zapytaniem.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'EF Core vs Dapper', pl: 'EF Core vs Dapper' },
    a: {
      ru: [
        '• EF Core — полноценный ORM: LINQ, Change Tracker, миграции. Удобно, но с накладными расходами.',
        '• Dapper — micro-ORM: пишешь SQL руками, он только мапит результат на объекты. Быстрее и полный контроль над запросом.',
        'Часто их совмещают: EF для обычного CRUD, Dapper для тяжёлых отчётов. В самом EF тоже можно сырой SQL: `FromSql`, `ExecuteSql`.',
      ],
      pl: [
        '• EF Core — pełny ORM: LINQ, Change Tracker, migracje. Wygodny, ale z narzutem.',
        '• Dapper — micro-ORM: SQL piszesz ręcznie, on tylko mapuje wynik na obiekty. Szybszy i daje pełną kontrolę nad zapytaniem.',
        'Często się je łączy: EF do zwykłego CRUD, Dapper do ciężkich raportów. W EF też da się użyć surowego SQL: `FromSql`, `ExecuteSql`.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое Clean Architecture?', pl: 'Czym jest Clean Architecture?' },
    a: {
      ru: [
        'Делим приложение на слои, и все зависимости смотрят внутрь, к домену:',
        '• Domain — сущности и бизнес-правила, ни от чего не зависит.',
        '• Application — сценарии использования и интерфейсы (например, `IUserRepository`).',
        '• Infrastructure — реализация: БД, внешние сервисы.',
        '• API — контроллеры.',
        'Смысл: бизнес-логика не знает про базу и фреймворк, её легко тестировать и менять обвязку.',
      ],
      pl: [
        'Dzielimy aplikację na warstwy, a wszystkie zależności wskazują do środka, w stronę domeny:',
        '• Domain — encje i reguły biznesowe, od niczego nie zależy.',
        '• Application — przypadki użycia i interfejsy (np. `IUserRepository`).',
        '• Infrastructure — implementacje: baza, zewnętrzne serwisy.',
        '• API — kontrolery.',
        'Sens: logika biznesowa nie wie nic o bazie i frameworku, łatwo ją testować i wymieniać otoczkę.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Что такое CQRS?', pl: 'Czym jest CQRS?' },
    a: {
      ru: [
        'Разделяем операции на команды (изменяют данные) и запросы (только читают). У каждой стороны свои модели и обработчики.',
        'Чтение можно оптимизировать отдельно от записи. Часто реализуют через MediatR.',
      ],
      pl: [
        'Rozdzielamy operacje na komendy (zmieniają dane) i zapytania (tylko czytają). Każda strona ma własne modele i handlery.',
        'Odczyt można optymalizować niezależnie od zapisu. Często implementowane przez MediatR.',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Монолит vs микросервисы', pl: 'Monolit vs mikroserwisy' },
    a: {
      ru: [
        '• Монолит — одно приложение, один деплой. Проще разрабатывать и дебажить.',
        '• Микросервисы — независимые сервисы: каждый деплоится и масштабируется отдельно. Но появляется сеть, распределённые транзакции, сложнее мониторинг.',
        'Общение между сервисами: синхронно (HTTP, gRPC) или асинхронно через очереди (RabbitMQ, Kafka, Azure Service Bus).',
      ],
      pl: [
        '• Monolit — jedna aplikacja, jedno wdrożenie. Prościej rozwijać i debugować.',
        '• Mikroserwisy — niezależne serwisy: każdy wdraża się i skaluje osobno. Ale dochodzi sieć, transakcje rozproszone, trudniejszy monitoring.',
        'Komunikacja: synchronicznie (HTTP, gRPC) lub asynchronicznie przez kolejki (RabbitMQ, Kafka, Azure Service Bus).',
      ],
    },
  },
  {
    cat: 'aspnet',
    q: { ru: 'Как тестировать .NET-приложение?', pl: 'Jak testować aplikację .NET?' },
    a: {
      ru: [
        '• Юнит-тесты: xUnit / NUnit / MSTest, зависимости подменяем моками (Moq, NSubstitute). Структура Arrange → Act → Assert.',
        '• Интеграционные: `WebApplicationFactory` поднимает приложение в памяти, Testcontainers — настоящую БД в Docker.',
        'DevOps-минимум, который ждут: Git, Docker, CI/CD (GitHub Actions, Azure DevOps).',
      ],
      pl: [
        '• Testy jednostkowe: xUnit / NUnit / MSTest, zależności zastępujemy mockami (Moq, NSubstitute). Schemat Arrange → Act → Assert.',
        '• Integracyjne: `WebApplicationFactory` uruchamia aplikację w pamięci, Testcontainers — prawdziwą bazę w Dockerze.',
        'Minimum DevOps, którego się oczekuje: Git, Docker, CI/CD (GitHub Actions, Azure DevOps).',
      ],
    },
  },

  // ───────────────────────── Базы данных ─────────────────────────
  {
    cat: 'db',
    q: { ru: 'Реляционные БД vs NoSQL', pl: 'Relacyjne bazy danych vs NoSQL' },
    a: {
      ru: [
        '• SQL (SQL Server, PostgreSQL, MySQL) — таблицы со строгой схемой, связи через ключи, транзакции ACID.',
        '• NoSQL — гибкая схема, проще масштабировать горизонтально (добавляя серверы), но часто только eventual consistency — данные согласуются «со временем».',
      ],
      pl: [
        '• SQL (SQL Server, PostgreSQL, MySQL) — tabele o sztywnym schemacie, relacje przez klucze, transakcje ACID.',
        '• NoSQL — elastyczny schemat, łatwiej skalować poziomo (dokładając serwery), ale często tylko eventual consistency — dane stają się spójne „z czasem”.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Какие бывают NoSQL базы?', pl: 'Jakie są rodzaje baz NoSQL?' },
    a: {
      ru: [
        '• Документные (MongoDB, Cosmos DB) — JSON-документы, гибкие структуры.',
        '• Ключ-значение (Redis) — кеш, сессии.',
        '• Колоночные (Cassandra) — огромные объёмы записи.',
        '• Графовые (Neo4j) — связи: соцсети, рекомендации.',
      ],
      pl: [
        '• Dokumentowe (MongoDB, Cosmos DB) — dokumenty JSON, elastyczne struktury.',
        '• Klucz-wartość (Redis) — cache, sesje.',
        '• Kolumnowe (Cassandra) — ogromne wolumeny zapisu.',
        '• Grafowe (Neo4j) — relacje: sieci społecznościowe, rekomendacje.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое CAP-теорема?', pl: 'Czym jest twierdzenie CAP?' },
    a: {
      ru: [
        'C — Consistency (согласованность), A — Availability (доступность), P — Partition tolerance (устойчивость к разделению сети).',
        'Когда сеть между узлами рвётся (P неизбежно), распределённая система должна выбрать: либо всегда отдавать согласованные данные (C), либо всегда отвечать (A). Оба сразу не получится.',
      ],
      pl: [
        'C — Consistency (spójność), A — Availability (dostępność), P — Partition tolerance (odporność na podział sieci).',
        'Gdy sieć między węzłami się rozpada (P jest nieuniknione), system rozproszony musi wybrać: albo zawsze spójne dane (C), albo zawsze odpowiedź (A). Obu naraz się nie da.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Primary Key, Foreign Key, Unique — в чём разница?', pl: 'Primary Key, Foreign Key, Unique — jaka jest różnica?' },
    a: {
      ru: [
        '• Primary Key — уникально определяет строку, не может быть NULL, один на таблицу (может быть составным).',
        '• Foreign Key — ссылка на PK другой таблицы, следит за ссылочной целостностью (`ON DELETE CASCADE` и т.д.).',
        '• Unique — значения уникальны, но NULL допускается. Ещё ограничения: NOT NULL, CHECK, DEFAULT.',
        'Ключ бывает естественным (PESEL) или суррогатным (искусственный `Id INT IDENTITY` или GUID).',
      ],
      pl: [
        '• Primary Key — jednoznacznie identyfikuje wiersz, nie może być NULL, jeden na tabelę (może być złożony).',
        '• Foreign Key — odwołanie do PK innej tabeli, pilnuje integralności referencyjnej (`ON DELETE CASCADE` itd.).',
        '• Unique — wartości są unikalne, ale NULL jest dozwolony. Inne ograniczenia: NOT NULL, CHECK, DEFAULT.',
        'Klucz może być naturalny (PESEL) lub sztuczny (`Id INT IDENTITY` albo GUID).',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Какие бывают связи между таблицами?', pl: 'Jakie są relacje między tabelami?' },
    a: {
      ru: [
        '• 1:1 — один к одному (пользователь и его профиль).',
        '• 1:N — один ко многим (клиент и его заказы). FK стоит на стороне «многих».',
        '• N:M — многие ко многим (студенты и курсы). Делается через промежуточную таблицу.',
      ],
      pl: [
        '• 1:1 — jeden do jednego (użytkownik i jego profil).',
        '• 1:N — jeden do wielu (klient i jego zamówienia). FK jest po stronie „wielu”.',
        '• N:M — wiele do wielu (studenci i kursy). Realizowane przez tabelę pośredniczącą.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое нормализация? Объясни 1NF, 2NF, 3NF', pl: 'Czym jest normalizacja? Wyjaśnij 1NF, 2NF, 3NF' },
    a: {
      ru: [
        'Раскладываем данные по таблицам, чтобы не было дублей и аномалий при вставке, обновлении и удалении.',
        '• 1NF — в ячейке одно значение (никаких списков), есть первичный ключ.',
        '• 2NF — 1NF + каждый неключевой столбец зависит от всего составного ключа, а не от его части.',
        '• 3NF — 2NF + неключевые столбцы не зависят друг от друга. Пример: в заказе храним `CustomerId`, а не адрес клиента.',
        '• BCNF — усиленная 3NF: каждый детерминант — потенциальный ключ.',
      ],
      pl: [
        'Rozkładamy dane na tabele, żeby nie było duplikatów i anomalii przy wstawianiu, aktualizacji i usuwaniu.',
        '• 1NF — w komórce jedna wartość (żadnych list), jest klucz główny.',
        '• 2NF — 1NF + każda kolumna niekluczowa zależy od całego klucza złożonego, a nie od jego części.',
        '• 3NF — 2NF + kolumny niekluczowe nie zależą od siebie nawzajem. Przykład: w zamówieniu trzymamy `CustomerId`, a nie adres klienta.',
        '• BCNF — wzmocniona 3NF: każdy wyznacznik jest kluczem kandydującym.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое денормализация и когда она оправдана?', pl: 'Czym jest denormalizacja i kiedy ma sens?' },
    a: {
      ru: [
        'Намеренно дублируем данные, чтобы читать быстрее — без кучи JOIN.',
        'Оправдано в отчётах, аналитике и хранилищах данных, где чтений намного больше, чем записей. Цена — сложнее поддерживать данные в согласованном состоянии.',
      ],
      pl: [
        'Celowo powielamy dane, żeby czytać szybciej — bez wielu JOIN-ów.',
        'Ma sens w raportach, analityce i hurtowniach danych, gdzie odczytów jest dużo więcej niż zapisów. Koszt — trudniej utrzymać spójność danych.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'DDL, DML, DCL, TCL — что это?', pl: 'DDL, DML, DCL, TCL — co to jest?' },
    a: {
      ru: [
        '• DDL — структура: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.',
        '• DML — данные: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.',
        '• DCL — права: `GRANT`, `REVOKE`.',
        '• TCL — транзакции: `BEGIN TRAN`, `COMMIT`, `ROLLBACK`.',
      ],
      pl: [
        '• DDL — struktura: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.',
        '• DML — dane: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.',
        '• DCL — uprawnienia: `GRANT`, `REVOKE`.',
        '• TCL — transakcje: `BEGIN TRAN`, `COMMIT`, `ROLLBACK`.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'В каком порядке выполняется SELECT?', pl: 'W jakiej kolejności wykonuje się SELECT?' },
    a: {
      ru: [
        'Логический порядок не совпадает с тем, как мы пишем запрос:',
        'FROM / JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → TOP / LIMIT / OFFSET.',
        'Поэтому алиас из SELECT нельзя использовать в WHERE, но можно в ORDER BY.',
      ],
      pl: [
        'Kolejność logiczna różni się od tego, jak piszemy zapytanie:',
        'FROM / JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → TOP / LIMIT / OFFSET.',
        'Dlatego aliasu z SELECT nie można użyć w WHERE, ale można w ORDER BY.',
      ],
    },
    code: "SELECT c.Name, COUNT(o.Id) AS OrdersCount\nFROM Customers c\nLEFT JOIN Orders o ON o.CustomerId = c.Id\nWHERE c.Country = 'PL'\nGROUP BY c.Name\nHAVING COUNT(o.Id) > 5\nORDER BY OrdersCount DESC;",
  },
  {
    cat: 'db',
    q: { ru: 'WHERE vs HAVING', pl: 'WHERE vs HAVING' },
    a: {
      ru: [
        '• WHERE фильтрует отдельные строки до группировки.',
        '• HAVING фильтрует уже готовые группы после `GROUP BY`, поэтому в нём можно использовать агрегаты: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.',
      ],
      pl: [
        '• WHERE filtruje pojedyncze wiersze przed grupowaniem.',
        '• HAVING filtruje gotowe grupy po `GROUP BY`, więc można w nim używać agregatów: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'DELETE vs TRUNCATE vs DROP', pl: 'DELETE vs TRUNCATE vs DROP' },
    a: {
      ru: [
        '• DELETE — удаляет строки по условию, каждая строка логируется. Медленно, но можно с WHERE.',
        '• TRUNCATE — удаляет все строки разом, быстро, сбрасывает счётчик IDENTITY.',
        '• DROP — удаляет таблицу целиком вместе со структурой.',
      ],
      pl: [
        '• DELETE — usuwa wiersze według warunku, każdy wiersz jest logowany. Wolniej, ale z WHERE.',
        '• TRUNCATE — usuwa wszystkie wiersze naraz, szybko, resetuje licznik IDENTITY.',
        '• DROP — usuwa całą tabelę razem ze strukturą.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'UNION vs UNION ALL. Как работать с NULL?', pl: 'UNION vs UNION ALL. Jak pracować z NULL?' },
    a: {
      ru: [
        '• UNION объединяет результаты и убирает дубликаты — поэтому медленнее.',
        '• UNION ALL просто склеивает всё как есть — быстрее.',
        'NULL нельзя сравнивать через `=`, только `IS NULL` / `IS NOT NULL`. `COALESCE(x, 0)` подставит значение по умолчанию.',
      ],
      pl: [
        '• UNION łączy wyniki i usuwa duplikaty — dlatego jest wolniejszy.',
        '• UNION ALL po prostu skleja wszystko tak jak jest — szybciej.',
        'NULL nie porównujemy przez `=`, tylko `IS NULL` / `IS NOT NULL`. `COALESCE(x, 0)` podstawi wartość domyślną.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Какие бывают JOIN?', pl: 'Jakie są rodzaje JOIN?' },
    a: {
      ru: [
        '• INNER — только строки, у которых есть пара в обеих таблицах.',
        '• LEFT — все строки слева + совпадения справа (нет пары — NULL).',
        '• RIGHT — то же, но наоборот.',
        '• FULL OUTER — все строки обеих таблиц, где нет пары — NULL.',
        '• CROSS — каждая строка с каждой (декартово произведение).',
        '• SELF — таблица с самой собой (сотрудник → его начальник).',
      ],
      pl: [
        '• INNER — tylko wiersze, które mają parę w obu tabelach.',
        '• LEFT — wszystkie wiersze z lewej + dopasowane z prawej (brak pary — NULL).',
        '• RIGHT — to samo, ale odwrotnie.',
        '• FULL OUTER — wszystkie wiersze z obu tabel, brak pary — NULL.',
        '• CROSS — każdy wiersz z każdym (iloczyn kartezjański).',
        '• SELF — tabela sama ze sobą (pracownik → jego przełożony).',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое CTE, оконные функции, представления и процедуры?', pl: 'Czym są CTE, funkcje okna, widoki i procedury?' },
    a: {
      ru: [
        '• CTE (`WITH x AS (...)`) — именованный подзапрос, делает сложный SQL читаемым, умеет рекурсию.',
        '• Оконные функции (`ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)`, `RANK`) — считают по группе строк, но не схлопывают их, как GROUP BY.',
        '• VIEW — сохранённый запрос, к которому обращаются как к таблице.',
        '• Хранимые процедуры, функции, триггеры — логика внутри БД.',
      ],
      pl: [
        '• CTE (`WITH x AS (...)`) — nazwane podzapytanie, czyni złożony SQL czytelnym, obsługuje rekurencję.',
        '• Funkcje okna (`ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)`, `RANK`) — liczą po grupie wierszy, ale ich nie zwijają jak GROUP BY.',
        '• VIEW — zapisane zapytanie, używane jak tabela.',
        '• Procedury składowane, funkcje, wyzwalacze (triggery) — logika wewnątrz bazy.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое индекс? Кластерный vs некластерный', pl: 'Czym jest indeks? Klastrowany vs nieklastrowany' },
    a: {
      ru: [
        'Индекс — структура (обычно B-дерево), которая ускоряет поиск. Как оглавление в книге: не листаешь всё подряд.',
        '• Кластерный — сами строки физически хранятся в порядке индекса. Поэтому он один на таблицу (в SQL Server по умолчанию на PK).',
        '• Некластерный — отдельная структура со ссылками на строки, их может быть много.',
        '• Covering index (`INCLUDE`) — содержит все столбцы, нужные запросу, и в таблицу лезть не надо.',
      ],
      pl: [
        'Indeks to struktura (zwykle B-drzewo), która przyspiesza wyszukiwanie. Jak spis treści w książce: nie trzeba kartkować wszystkiego.',
        '• Klastrowany — wiersze są fizycznie przechowywane w kolejności indeksu. Dlatego jest jeden na tabelę (w SQL Server domyślnie na PK).',
        '• Nieklastrowany — osobna struktura z odwołaniami do wierszy, może być ich wiele.',
        '• Indeks pokrywający (`INCLUDE`) — zawiera wszystkie kolumny potrzebne zapytaniu, więc nie trzeba sięgać do tabeli.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Когда ставить индекс и когда он не поможет?', pl: 'Kiedy zakładać indeks i kiedy nie pomoże?' },
    a: {
      ru: [
        'Ставим на столбцы из WHERE, JOIN, ORDER BY и на FK — особенно с высокой селективностью (много разных значений).',
        '• Составной индекс работает по левому префиксу — порядок столбцов важен.',
        '• Не сработает, если на столбец накинута функция (`YEAR(Date) = 2024`) или `LIKE \'%abc\'`.',
        '• Минусы: занимают место и замедляют INSERT / UPDATE / DELETE.',
        'Проверяем в execution plan: Index Seek — хорошо, Index/Table Scan — часто плохо.',
      ],
      pl: [
        'Zakładamy na kolumny z WHERE, JOIN, ORDER BY i na FK — zwłaszcza o wysokiej selektywności (dużo różnych wartości).',
        '• Indeks złożony działa po lewym prefiksie — kolejność kolumn ma znaczenie.',
        '• Nie zadziała, gdy na kolumnie jest funkcja (`YEAR(Date) = 2024`) albo `LIKE \'%abc\'`.',
        '• Wady: zajmują miejsce i spowalniają INSERT / UPDATE / DELETE.',
        'Sprawdzamy w planie wykonania: Index Seek — dobrze, Index/Table Scan — często źle.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое транзакция и ACID?', pl: 'Czym jest transakcja i ACID?' },
    a: {
      ru: [
        'Транзакция — пачка операций, которая выполняется целиком или не выполняется вообще. Классика — перевод денег: списали с одного счёта и зачислили на другой, или ничего.',
        '• A — Atomicity: всё или ничего.',
        '• C — Consistency: из одного корректного состояния в другое, все ограничения соблюдены.',
        '• I — Isolation: параллельные транзакции не мешают друг другу.',
        '• D — Durability: после COMMIT данные не потеряются даже при сбое.',
      ],
      pl: [
        'Transakcja to paczka operacji wykonywana w całości albo wcale. Klasyka — przelew: pobrano z jednego konta i dodano na drugie, albo nic.',
        '• A — Atomowość: wszystko albo nic.',
        '• C — Spójność: z jednego poprawnego stanu w inny, wszystkie ograniczenia zachowane.',
        '• I — Izolacja: równoległe transakcje sobie nie przeszkadzają.',
        '• D — Trwałość: po COMMIT dane nie zginą nawet przy awarii.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Какие аномалии бывают и какие есть уровни изоляции?', pl: 'Jakie są anomalie i poziomy izolacji?' },
    a: {
      ru: [
        'Аномалии:',
        '• Dirty read — прочитали то, что ещё не закоммичено.',
        '• Non-repeatable read — перечитали строку, а она уже другая.',
        '• Phantom read — повторили запрос, а там появились новые строки.',
        'Уровни (от слабого к строгому):',
        '• Read Uncommitted — возможно всё.',
        '• Read Committed (по умолчанию в SQL Server и PostgreSQL) — нет dirty read.',
        '• Repeatable Read — ещё и нет non-repeatable read.',
        '• Serializable — нет ничего, но больше всего блокировок.',
        '• Snapshot — версии строк, чтение не блокирует запись.',
      ],
      pl: [
        'Anomalie:',
        '• Dirty read (brudny odczyt) — odczyt danych jeszcze niezatwierdzonych.',
        '• Non-repeatable read — ponowny odczyt wiersza daje inną wartość.',
        '• Phantom read — ponowne zapytanie zwraca nowe wiersze.',
        'Poziomy (od najsłabszego):',
        '• Read Uncommitted — możliwe wszystko.',
        '• Read Committed (domyślny w SQL Server i PostgreSQL) — brak dirty read.',
        '• Repeatable Read — dodatkowo brak non-repeatable read.',
        '• Serializable — brak wszystkich anomalii, ale najwięcej blokad.',
        '• Snapshot — wersjonowanie wierszy, odczyt nie blokuje zapisu.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Блокировки: оптимистичная vs пессимистичная. Deadlock в БД', pl: 'Blokady: optymistyczna vs pesymistyczna. Deadlock w bazie' },
    a: {
      ru: [
        '• Shared-блокировка — на чтение, exclusive — на запись.',
        '• Пессимистичная — блокируем строку заранее, «вдруг кто-то тоже полезет».',
        '• Оптимистичная — не блокируем, а при записи проверяем версию строки (`rowversion`, `[Timestamp]` в EF Core). Если кто-то успел изменить — конфликт.',
        'Deadlock в БД сервер разруливает сам: одну из транзакций откатывает.',
      ],
      pl: [
        '• Blokada shared — do odczytu, exclusive — do zapisu.',
        '• Pesymistyczna — blokujemy wiersz z góry, „na wypadek, gdyby ktoś też chciał”.',
        '• Optymistyczna — nie blokujemy, tylko przy zapisie sprawdzamy wersję wiersza (`rowversion`, `[Timestamp]` w EF Core). Jeśli ktoś zdążył zmienić — konflikt.',
        'Deadlock w bazie serwer rozwiązuje sam: wycofuje jedną z transakcji.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Что такое SQL-инъекция и как защититься?', pl: 'Czym jest SQL Injection i jak się chronić?' },
    a: {
      ru: [
        'Это когда пользовательский ввод склеивается со строкой SQL, и злоумышленник подсовывает свой код — например, `\' OR 1=1 --`.',
        'Защита — параметризованные запросы: `SqlParameter`, EF Core, Dapper с параметрами. Никогда не собирать SQL конкатенацией.',
      ],
      pl: [
        'To sytuacja, gdy dane od użytkownika są sklejane z tekstem SQL i atakujący wstrzykuje własny kod — np. `\' OR 1=1 --`.',
        'Ochrona — zapytania parametryzowane: `SqlParameter`, EF Core, Dapper z parametrami. Nigdy nie budujemy SQL przez konkatenację.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Как оптимизировать медленный запрос?', pl: 'Jak zoptymalizować wolne zapytanie?' },
    a: {
      ru: [
        '• Смотрим execution plan — где Scan вместо Seek.',
        '• Выбираем только нужные столбцы, без `SELECT *`.',
        '• Добавляем подходящие индексы.',
        '• Пагинация вместо выгрузки всего.',
        '• Убираем N+1.',
        '• Кешируем то, что часто читается и редко меняется.',
      ],
      pl: [
        '• Analizujemy plan wykonania — gdzie jest Scan zamiast Seek.',
        '• Wybieramy tylko potrzebne kolumny, bez `SELECT *`.',
        '• Dodajemy odpowiednie indeksy.',
        '• Paginacja zamiast pobierania wszystkiego.',
        '• Eliminujemy N+1.',
        '• Cache’ujemy to, co często czytane i rzadko zmieniane.',
      ],
    },
  },
  {
    cat: 'db',
    q: { ru: 'Как масштабируют БД? OLTP vs OLAP', pl: 'Jak skaluje się bazy? OLTP vs OLAP' },
    a: {
      ru: [
        '• Репликация — один master для записи + реплики для чтения.',
        '• Шардинг — данные разносятся по разным серверам (например, по региону клиента).',
        '• Партиционирование — большая таблица делится на части внутри одного сервера.',
        'OLTP — много коротких транзакций (интернет-магазин). OLAP — тяжёлые аналитические запросы по большим объёмам (хранилища данных).',
      ],
      pl: [
        '• Replikacja — jeden master do zapisu + repliki do odczytu.',
        '• Sharding — dane rozkładane na różne serwery (np. według regionu klienta).',
        '• Partycjonowanie — duża tabela dzielona na części w obrębie jednego serwera.',
        'OLTP — wiele krótkich transakcji (sklep internetowy). OLAP — ciężkie zapytania analityczne na dużych wolumenach (hurtownie danych).',
      ],
    },
  },

  // ───────────────────────── Паттерны ─────────────────────────
  {
    cat: 'patterns',
    q: { ru: 'Что такое паттерны проектирования и GoF?', pl: 'Czym są wzorce projektowe i GoF?' },
    a: {
      ru: [
        'Паттерн — проверенное типовое решение частой задачи проектирования. Общий словарь: сказал «декоратор» — и все поняли идею.',
        'GoF (Gang of Four) — 23 паттерна из книги 1994 года, три группы:',
        '• Порождающие (5) — как создавать объекты.',
        '• Структурные (7) — как собирать объекты в более крупные структуры.',
        '• Поведенческие (11) — как объекты общаются и делят обязанности.',
      ],
      pl: [
        'Wzorzec to sprawdzone, typowe rozwiązanie częstego problemu projektowego. Wspólny słownik: mówisz „dekorator” i wszyscy rozumieją ideę.',
        'GoF (Gang of Four) — 23 wzorce z książki z 1994 roku, trzy grupy:',
        '• Kreacyjne (5) — jak tworzyć obiekty.',
        '• Strukturalne (7) — jak składać obiekty w większe struktury.',
        '• Behawioralne (11) — jak obiekty się komunikują i dzielą odpowiedzialność.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Singleton — что это и почему его ругают?', pl: 'Singleton — co to jest i dlaczego bywa krytykowany?' },
    a: {
      ru: [
        'Гарантирует, что у класса ровно один экземпляр, и даёт к нему глобальную точку доступа.',
        'Ругают за глобальное состояние и плохую тестируемость (сложно подменить моком). В ASP.NET Core лучше просто зарегистрировать сервис через `AddSingleton` в DI.',
        'Если всё-таки руками — потокобезопасно через `Lazy<T>`.',
      ],
      pl: [
        'Gwarantuje, że klasa ma dokładnie jedną instancję, i daje do niej globalny punkt dostępu.',
        'Krytykowany za stan globalny i słabą testowalność (trudno podmienić mockiem). W ASP.NET Core lepiej po prostu zarejestrować serwis przez `AddSingleton` w DI.',
        'Jeśli jednak ręcznie — bezpiecznie wątkowo przez `Lazy<T>`.',
      ],
    },
    code: 'public sealed class AppConfig\n{\n    private static readonly Lazy<AppConfig> _instance =\n        new(() => new AppConfig());\n    public static AppConfig Instance => _instance.Value;\n    private AppConfig() { }\n}',
  },
  {
    cat: 'patterns',
    q: { ru: 'Factory Method vs Abstract Factory', pl: 'Factory Method vs Abstract Factory' },
    a: {
      ru: [
        '• Factory Method — создание объекта вынесено в метод, и подклассы решают, что именно создать. Пример: `ILoggerFactory.CreateLogger`.',
        '• Abstract Factory — фабрика целого семейства связанных объектов, без привязки к конкретным классам. Пример: `DbProviderFactory` создаёт connection, command и т.д. под нужную БД.',
      ],
      pl: [
        '• Factory Method — tworzenie obiektu jest w metodzie, a podklasy decydują, co dokładnie utworzyć. Przykład: `ILoggerFactory.CreateLogger`.',
        '• Abstract Factory — fabryka całej rodziny powiązanych obiektów, bez wiązania z konkretnymi klasami. Przykład: `DbProviderFactory` tworzy connection, command itd. dla danej bazy.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Builder и Prototype', pl: 'Builder i Prototype' },
    a: {
      ru: [
        '• Builder — собираем сложный объект пошагово, вместо конструктора с 15 параметрами. Примеры: `StringBuilder`, `WebApplication.CreateBuilder`.',
        '• Prototype — новый объект создаётся копированием существующего. Примеры: `ICloneable`, `record` с `with { }`.',
      ],
      pl: [
        '• Builder — budujemy złożony obiekt krok po kroku, zamiast konstruktora z 15 parametrami. Przykłady: `StringBuilder`, `WebApplication.CreateBuilder`.',
        '• Prototype — nowy obiekt powstaje przez skopiowanie istniejącego. Przykłady: `ICloneable`, `record` z `with { }`.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Adapter vs Decorator vs Proxy vs Facade', pl: 'Adapter vs Decorator vs Proxy vs Facade' },
    a: {
      ru: [
        'Любимый вопрос на собесе. Главное — что происходит с интерфейсом:',
        '• Adapter — меняет интерфейс под ожидаемый клиентом (обёртка над сторонним API).',
        '• Decorator — интерфейс тот же, добавляет поведение (`BufferedStream` над `FileStream`, кеширующий репозиторий).',
        '• Proxy — интерфейс тот же, контролирует доступ (lazy loading в EF Core).',
        '• Facade — новый простой интерфейс к нескольким сложным классам (сервис оформления заказа).',
      ],
      pl: [
        'Ulubione pytanie na rozmowach. Kluczowe jest to, co dzieje się z interfejsem:',
        '• Adapter — zmienia interfejs na oczekiwany przez klienta (opakowanie zewnętrznego API).',
        '• Decorator — ten sam interfejs, dodaje zachowanie (`BufferedStream` na `FileStream`, repozytorium z cache).',
        '• Proxy — ten sam interfejs, kontroluje dostęp (lazy loading w EF Core).',
        '• Facade — nowy, prosty interfejs do kilku złożonych klas (serwis składania zamówienia).',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Composite, Bridge, Flyweight', pl: 'Composite, Bridge, Flyweight' },
    a: {
      ru: [
        '• Composite — дерево, где с отдельным элементом и группой работают одинаково (файлы и папки, меню).',
        '• Bridge — разделяет абстракцию и реализацию, чтобы менять их независимо (тип уведомления × канал: email, SMS).',
        '• Flyweight — общее состояние разделяется между многими объектами ради экономии памяти (string interning).',
      ],
      pl: [
        '• Composite — drzewo, w którym pojedynczy element i grupę traktujemy tak samo (pliki i foldery, menu).',
        '• Bridge — oddziela abstrakcję od implementacji, żeby zmieniać je niezależnie (typ powiadomienia × kanał: email, SMS).',
        '• Flyweight — wspólny stan współdzielony przez wiele obiektów dla oszczędności pamięci (string interning).',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Что такое Strategy?', pl: 'Czym jest Strategy?' },
    a: {
      ru: [
        'Семейство взаимозаменяемых алгоритмов за общим интерфейсом. Нужный выбирается во время выполнения — вместо большого `switch`.',
        'Примеры: способы оплаты (карта, BLIK, PayPal), `IComparer<T>` для сортировки.',
      ],
      pl: [
        'Rodzina wymiennych algorytmów za wspólnym interfejsem. Właściwy wybieramy w czasie działania — zamiast dużego `switch`.',
        'Przykłady: metody płatności (karta, BLIK, PayPal), `IComparer<T>` do sortowania.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Что такое Observer?', pl: 'Czym jest Observer?' },
    a: {
      ru: [
        'Подписчики автоматически узнают, когда у объекта что-то изменилось. Издатель не знает, кто именно подписан.',
        'В .NET: `event`, `IObservable<T>`, Rx.',
      ],
      pl: [
        'Subskrybenci są automatycznie powiadamiani, gdy w obiekcie coś się zmieni. Wydawca nie wie, kto konkretnie subskrybuje.',
        'W .NET: `event`, `IObservable<T>`, Rx.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Command и Mediator', pl: 'Command i Mediator' },
    a: {
      ru: [
        '• Command — запрос упаковывается в объект. Его можно положить в очередь, залогировать, отменить (undo). Примеры: `ICommand` в WPF, команды MediatR.',
        '• Mediator — объекты общаются не напрямую, а через посредника. Меньше связей между классами. Пример: MediatR.',
      ],
      pl: [
        '• Command — żądanie jest opakowane w obiekt. Można je wrzucić do kolejki, zalogować, cofnąć (undo). Przykłady: `ICommand` w WPF, komendy MediatR.',
        '• Mediator — obiekty komunikują się nie bezpośrednio, tylko przez pośrednika. Mniej powiązań między klasami. Przykład: MediatR.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Что такое Chain of Responsibility?', pl: 'Czym jest Chain of Responsibility?' },
    a: {
      ru: [
        'Запрос передаётся по цепочке обработчиков. Каждый решает: обработать самому, передать дальше или остановить цепочку.',
        'Самый наглядный пример в .NET — конвейер middleware в ASP.NET Core.',
      ],
      pl: [
        'Żądanie przechodzi przez łańcuch handlerów. Każdy decyduje: obsłużyć samemu, przekazać dalej albo zatrzymać łańcuch.',
        'Najlepszy przykład w .NET — potok middleware w ASP.NET Core.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Template Method, State, Iterator', pl: 'Template Method, State, Iterator' },
    a: {
      ru: [
        '• Template Method — скелет алгоритма в базовом классе, а отдельные шаги переопределяют наследники (`BackgroundService.ExecuteAsync`).',
        '• State — поведение объекта меняется вместе с его состоянием (статусы заказа: новый, оплачен, отправлен).',
        '• Iterator — последовательный обход коллекции, не раскрывая её устройство (`IEnumerable`, `yield return`).',
        'Реже спрашивают: Visitor, Memento (снимок состояния для undo), Interpreter.',
      ],
      pl: [
        '• Template Method — szkielet algorytmu w klasie bazowej, a poszczególne kroki nadpisują podklasy (`BackgroundService.ExecuteAsync`).',
        '• State — zachowanie obiektu zmienia się razem z jego stanem (statusy zamówienia: nowe, opłacone, wysłane).',
        '• Iterator — sekwencyjne przechodzenie po kolekcji bez ujawniania jej budowy (`IEnumerable`, `yield return`).',
        'Rzadziej pytają: Visitor, Memento (migawka stanu do undo), Interpreter.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'SOLID: S — Single Responsibility', pl: 'SOLID: S — Single Responsibility' },
    a: {
      ru: [
        'У класса должна быть одна причина для изменения. Класс, который и считает скидку, и пишет в БД, и шлёт email, — нарушает принцип.',
      ],
      pl: [
        'Klasa powinna mieć jeden powód do zmiany. Klasa, która liczy rabat, zapisuje do bazy i wysyła maile, łamie tę zasadę.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'SOLID: O — Open/Closed', pl: 'SOLID: O — Open/Closed' },
    a: {
      ru: [
        'Класс открыт для расширения, но закрыт для изменения. Новое поведение — это новый класс (например, новая стратегия), а не ещё один `if` в старом коде.',
      ],
      pl: [
        'Klasa otwarta na rozszerzenia, ale zamknięta na modyfikacje. Nowe zachowanie to nowa klasa (np. nowa strategia), a nie kolejny `if` w starym kodzie.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'SOLID: L — Liskov Substitution', pl: 'SOLID: L — Liskov Substitution' },
    a: {
      ru: [
        'Наследника можно подставить вместо базового класса, и программа не сломается.',
        'Классический контрпример: `Square` наследует `Rectangle`. Меняешь ширину квадрата — меняется и высота, и код, который рассчитывал на прямоугольник, ведёт себя неожиданно.',
      ],
      pl: [
        'Klasę pochodną można podstawić zamiast bazowej i program się nie zepsuje.',
        'Klasyczny kontrprzykład: `Square` dziedziczy po `Rectangle`. Zmieniasz szerokość kwadratu — zmienia się też wysokość, a kod oczekujący prostokąta zachowuje się nieoczekiwanie.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'SOLID: I — Interface Segregation', pl: 'SOLID: I — Interface Segregation' },
    a: {
      ru: [
        'Лучше несколько маленьких интерфейсов, чем один «толстый». Класс не должен реализовывать методы, которые ему не нужны (и бросать в них `NotImplementedException`).',
      ],
      pl: [
        'Lepiej kilka małych interfejsów niż jeden „gruby”. Klasa nie powinna implementować metod, których nie potrzebuje (i rzucać w nich `NotImplementedException`).',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'SOLID: D — Dependency Inversion', pl: 'SOLID: D — Dependency Inversion' },
    a: {
      ru: [
        'Модули зависят от абстракций (интерфейсов), а не от конкретных классов. Сервис знает про `IEmailSender`, а не про `SmtpEmailSender`.',
        'На практике реализуется через DI-контейнер.',
      ],
      pl: [
        'Moduły zależą od abstrakcji (interfejsów), a nie od konkretnych klas. Serwis zna `IEmailSender`, a nie `SmtpEmailSender`.',
        'W praktyce realizowane przez kontener DI.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Repository и Unit of Work', pl: 'Repository i Unit of Work' },
    a: {
      ru: [
        '• Repository — доступ к данным, как к обычной коллекции (`IUserRepository.GetById`). Прячет детали БД от бизнес-логики.',
        '• Unit of Work — собирает изменения и сохраняет их одной транзакцией.',
        'Нюанс: `DbContext` в EF Core уже реализует оба паттерна, поэтому свой репозиторий поверх него — спорный вопрос.',
      ],
      pl: [
        '• Repository — dostęp do danych jak do zwykłej kolekcji (`IUserRepository.GetById`). Ukrywa szczegóły bazy przed logiką biznesową.',
        '• Unit of Work — zbiera zmiany i zapisuje je w jednej transakcji.',
        'Niuans: `DbContext` w EF Core już realizuje oba wzorce, więc własne repozytorium na nim to kwestia dyskusyjna.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'DRY, KISS, YAGNI', pl: 'DRY, KISS, YAGNI' },
    a: {
      ru: [
        '• DRY (Don’t Repeat Yourself) — не копипасть логику, выноси общее.',
        '• KISS (Keep It Simple) — самое простое рабочее решение обычно лучшее.',
        '• YAGNI (You Aren’t Gonna Need It) — не пиши то, что «может пригодиться потом».',
        'И ещё: композиция вместо наследования — собирать поведение из объектов гибче, чем строить глубокие иерархии.',
      ],
      pl: [
        '• DRY (Don’t Repeat Yourself) — nie kopiuj logiki, wydzielaj część wspólną.',
        '• KISS (Keep It Simple) — najprostsze działające rozwiązanie jest zwykle najlepsze.',
        '• YAGNI (You Aren’t Gonna Need It) — nie pisz tego, co „może się kiedyś przydać”.',
        'I jeszcze: kompozycja zamiast dziedziczenia — składanie zachowań z obiektów jest elastyczniejsze niż głębokie hierarchie.',
      ],
    },
  },
  {
    cat: 'patterns',
    q: { ru: 'Какие знаешь антипаттерны? Какие ещё архитектурные паттерны?', pl: 'Jakie znasz antywzorce? Jakie jeszcze wzorce architektoniczne?' },
    a: {
      ru: [
        'Антипаттерны:',
        '• God Object — класс, который знает и делает всё.',
        '• Service Locator — зависимости достают из контейнера вручную, они скрыты.',
        '• Спагетти-код, магические числа.',
        'Другие паттерны: MVC (веб), MVVM (WPF, MAUI), Options pattern, Result pattern — возвращаем результат с ошибкой вместо исключений.',
      ],
      pl: [
        'Antywzorce:',
        '• God Object — klasa, która wie i robi wszystko.',
        '• Service Locator — zależności pobierane ręcznie z kontenera, są ukryte.',
        '• Kod spaghetti, magiczne liczby.',
        'Inne wzorce: MVC (web), MVVM (WPF, MAUI), Options pattern, Result pattern — zwracamy wynik z błędem zamiast wyjątków.',
      ],
    },
  },
];

export default QUESTIONS.map((item, i) => ({ id: i + 1, ...item }));
