// Публикует dist/ в ветку gh-pages того же репозитория (origin).
import { execSync } from 'node:child_process';
import { rmSync } from 'node:fs';
const sh = (c, o = {}) => execSync(c, { stdio: 'inherit', ...o });
const remote = execSync('git remote get-url origin').toString().trim();
rmSync('dist/.git', { recursive: true, force: true });
sh('git init -q -b gh-pages', { cwd: 'dist' });
sh('git add -A', { cwd: 'dist' });
sh('git commit -q -m "Deploy"', { cwd: 'dist' });
sh(`git push -f "${remote}" gh-pages`, { cwd: 'dist' });
rmSync('dist/.git', { recursive: true, force: true });
console.log('Deployed to gh-pages');
