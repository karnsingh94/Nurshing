import fs from 'fs';

const categories = [
  { name: 'Agriculture', count: 12 },
  { name: 'Animation', count: 8 },
  { name: 'Architecture', count: 16 },
  { name: 'Arts', count: 35 },
  { name: 'Aviation', count: 6 },
  { name: 'Commerce', count: 42 },
  { name: 'Computer', count: 58 },
  { name: 'Dental', count: 14 },
  { name: 'Design', count: 24 },
  { name: 'Education', count: 32 },
  { name: 'Engineering', count: 128 },
  { name: 'Hotel Management', count: 22 },
  { name: 'Law', count: 28 },
  { name: 'Management', count: 64 },
  { name: 'Mass Communication', count: 18 },
  { name: 'Medical', count: 45 },
  { name: 'Paramedical', count: 36 },
  { name: 'Pharmacy', count: 40 },
  { name: 'Science', count: 52 },
  { name: 'Veterinary', count: 15 },
  { name: 'Vocational Courses', count: 128 }
];

['src/pages/Home.jsx', 'src/pages/Logo.jsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updatedCount = 0;
  categories.forEach(cat => {
    const searchRegex = new RegExp(
      `(<p>\\s*\\{"${cat.name}"\\}\\s*<\\/p>\\s*<p className=\\{"count"\\}>\\s*)\\{\`\\$\\{collegesData\\.length\\} Colleges\`\\}`,
      'g'
    );
    if (searchRegex.test(content)) {
      content = content.replace(searchRegex, `$1{"${cat.count} Colleges"}`);
      updatedCount++;
    }
  });
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${updatedCount} category counts in ${file}`);
});
