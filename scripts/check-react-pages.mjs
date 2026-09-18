import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pageDir = path.join(root, 'src', 'pages');
const pageFiles = fs
  .readdirSync(pageDir)
  .filter((file) => file.endsWith('.jsx') && file !== 'index.jsx')
  .sort();

const legacyPatterns = [
  ['legacy body HTML field', 'body' + 'Html'],
  ['legacy head HTML field', 'head' + 'Html'],
  ['HTML injection renderer', 'dangerously' + 'SetInnerHTML'],
];

const scanDirs = ['src', 'scripts'];
const failures = [];

for (const dir of scanDirs) {
  const start = path.join(root, dir);
  if (!fs.existsSync(start)) continue;

  const stack = [start];
  while (stack.length) {
    const current = stack.pop();
    const stat = fs.statSync(current);

    if (stat.isDirectory()) {
      fs.readdirSync(current).forEach((entry) => stack.push(path.join(current, entry)));
      continue;
    }

    if (!/\.(jsx?|tsx?|mjs|css|md)$/.test(current)) continue;
    const source = fs.readFileSync(current, 'utf8');
    legacyPatterns.forEach(([label, pattern]) => {
      if (source.includes(pattern)) failures.push(`${path.relative(root, current)} contains ${label}`);
    });
  }
}

if (pageFiles.length !== 19) {
  failures.push(`Expected 19 React page files, found ${pageFiles.length}.`);
}

pageFiles.forEach((file) => {
  const source = fs.readFileSync(path.join(pageDir, file), 'utf8');
  if (!source.includes('<PageRenderer')) failures.push(`${file} does not use PageRenderer.`);
  if (!source.includes('function ') || !source.includes('Content()')) failures.push(`${file} is missing JSX content component.`);
});

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${pageFiles.length} React page files with JSX content.`);
