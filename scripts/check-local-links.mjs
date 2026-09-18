import assert from 'node:assert/strict';
import fs from 'node:fs';
import { localLink } from '../src/linkPolicy.js';
for (const origin of ['https://www.getmyuni.com', 'http://getmyuni.com', '//www.getmyuni.com', 'https://media.getmyuni.com']) {
  assert.equal(localLink(`${origin}/engineering-colleges`), '/engineering');
  assert.equal(localLink(`${origin}/study-abroad`), '/study-abroad');
  assert.equal(localLink(`${origin}/college/example?tab=fees#details`), '/college/example?tab=fees#details');
}
assert.equal(localLink('/engineering-colleges/maharashtra?category=engineering'), '/engineering-colleges/maharashtra?category=engineering');
assert.equal(localLink('#details'), '#details');
assert.equal(localLink('tel:+911234567890'), 'tel:+911234567890');
for (const input of ['javascript:alert(1)', 'data:text/html,test', 'https://example.com', '//example.com', '/%2fexample.com', 'https://getmyuni.com//example.com']) assert.equal(localLink(input), undefined, input);
let count = 0;
for (const file of fs.readdirSync('src/pages').filter(f => f.endsWith('.jsx') && f !== 'index.jsx')) {
  const source = fs.readFileSync(`src/pages/${file}`, 'utf8');
  assert(!/https?:\/\/(?:www\.)?getmyuni\.com/i.test(source), `${file}: old website URL`);
  assert(!source.includes('gmulogo.png'), `${file}: old logo`);
  for (const match of source.matchAll(/href=\{allowedLink\(("(?:[^"\\]|\\.)*")\)\}/g)) {
    const result = localLink(JSON.parse(match[1]));
    assert(!result || !/^https?:|^\/\//i.test(result), `${file}: external navigation ${result}`);
    count++;
  }
}
console.log(`Verified ${count} page links and legacy URL, Study Abroad, query, hash, and unsafe URL cases.`);
