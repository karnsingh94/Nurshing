import fs from 'fs';

const homePath = './src/pages/Home.jsx';
const logoPath = './src/pages/Logo.jsx';

function updateDynamicCounts(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');

  // Ensure collegesData is imported
  if (!code.includes("import { collegesData } from '../data/collegesData.js';")) {
    code = "import { collegesData } from '../data/collegesData.js';\n" + code;
  }

  // Replace fake hardcoded count strings with dynamic count from collegesData.length
  const countRegex = /<p className=\{"count"\} >\s*\{"[0-[#a-zA-Z0-9\s]+"\}\s*<\/p>/g;

  // Replace specific hardcoded counts in colleges-category section
  const replacements = [
    { target: '{"4654 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"3151 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"3163 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"4780 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"4151 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"5538 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"879 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"4324 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"937 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"360 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"426 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"340 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"289 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"764 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"365 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"253 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"50 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"5 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"12 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"4 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
    { target: '{"333 Colleges"}', replacement: '{\`${collegesData.length} Colleges\`}' },
  ];

  let count = 0;
  replacements.forEach(({ target, replacement }) => {
    if (code.includes(target)) {
      code = code.replaceAll(target, replacement);
      count++;
    }
  });

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Updated ${count} count targets in ${filePath}`);
}

updateDynamicCounts(homePath);
updateDynamicCounts(logoPath);
