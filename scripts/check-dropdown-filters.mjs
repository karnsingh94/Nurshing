import assert from 'node:assert/strict';
import { megaMenus, getDropdownSelection, matchesFilter } from '../src/navMenus.js';
let total = 0;
for (const [slug, menu] of Object.entries(megaMenus)) {
  for (const column of menu.columns) {
    for (const [label, path] of [...column.items, ...(column.secondItems || [])]) {
      const result = getDropdownSelection(`${path}?category=${slug}`);
      assert.equal(result.slug, slug, `${slug}: ${label}`);
      if (!/^All .*Exams/.test(label) && path !== '/study-abroad') assert(result.filter, label);
      total++;
    }
  }
}
assert.deepEqual(getDropdownSelection('/engineering-colleges/maharashtra?category=engineering').filter, {group:'state',value:'Maharashtra'});
assert.equal(getDropdownSelection('/exams/cuet?category=education').slug, 'education');
assert.equal(getDropdownSelection('/exams/cuet?category=commerce').slug, 'commerce');
assert.equal(getDropdownSelection('/btech-colleges?category=engineering').filter.group, 'program');
assert.equal(getDropdownSelection('/engineering-colleges/civil-engineering?category=engineering').filter.group, 'specialization');
const record = {city:'Bengaluru', state:'Karnataka', name:'IIT Delhi', exams:['JEE Main'], searchText:'B.Tech Civil Engineering'};
assert(matchesFilter(record,'city','Bangalore'));
assert(!matchesFilter(record,'city','Mumbai'));
assert(matchesFilter(record,'exam','JEE Main'));
assert(!matchesFilter(record,'exam','NEET'));
assert(matchesFilter(record,'program','B.Tech'));
assert(matchesFilter(record,'specialization','B.Tech Civil Engineering'));
assert(!matchesFilter(record,'program','M.Tech'));
console.log(`Verified ${total} menu selections, category context, and filter matching.`);
