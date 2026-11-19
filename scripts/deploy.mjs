// Публикует dist/ в ветку gh-pages того же репозитория (origin).
import { execSync } from 'node:child_process';
import { rmSync } from 'node:fs';
const sh = (c, o = {}) => execSync(c, { stdio: 'inherit', ...o });
const remote = execSync('git remote get-url origin').toString().trim();
rmSync('dist/.git', { recursive: true, force: true });
sh('git -c core.longpaths=true init -q -b gh-pages', { cwd: 'dist' });
sh('git -c core.longpaths=true add -A', { cwd: 'dist' });
sh('git -c core.longpaths=true commit -q -m "Deploy"', { cwd: 'dist' });
sh(`git -c core.longpaths=true push -f "${remote}" gh-pages`, { cwd: 'dist' });
rmSync('dist/.git', { recursive: true, force: true });
console.log('Deployed to gh-pages');
