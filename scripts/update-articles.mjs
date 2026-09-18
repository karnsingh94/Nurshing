import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Colleges from collegesData.js reference:
// NSTI Panipat, Govt IToT Jaipur, NSTI Patna, NSTI Mumbai, Syadwad IToT Baghpat, GITI Aliganj Lucknow, NSTI Calicut, NSTI Jodhpur, NSTI Kolkata, Govt IToT Nashik, Govt IToT Davangere, etc.

const articleUpdates = [
  {
    title: "NSTI Panipat Skill & Tech Admissions 2026: Application Process, Eligibility & Campus Guide",
    author: "AdmitDesk Team"
  },
  {
    title: "Govt. IToT Jaipur Announces 2026 Scholarship Scheme & Placement Drives for Diploma Candidates",
    author: "Amanpreet Kaur"
  },
  {
    title: "NSTI Patna Workshop & Technical Skill Cell Reports Record Placement Rates in 2026",
    author: "Ashish Singh"
  },
  {
    title: "NSTI Mumbai Advanced Technical & Skill Certification 2026: Direct Admission Opens",
    author: "Neha Sharma"
  },
  {
    title: "GITI Campus Aliganj Lucknow: Top Technical & Vocational Training Programs (2026 Guide)",
    author: "Priya Verma"
  },
  {
    title: "Syadwad IToT Baghpat & Govt. IToT Saket-Meerut: Complete Course & Fee Details 2026",
    author: "Rahul Mehta"
  },
  {
    title: "NSTI Calicut & Jodhpur Campus Upgrades: New Smart Labs & Industry Partnerships Announced",
    author: "Ashish Singh"
  },
  {
    title: "Govt. IToT Nashik & Amravati: Entrance Exam Cutoffs, Seat Matrix & Counseling Schedule 2026",
    author: "Anjali Gupta"
  },
  {
    title: "Govt. IToT Davangere & Honnavar: Top Diploma & Technical Skill Programs Overview",
    author: "Vikram R."
  },
  {
    title: "NSTI Kolkata & Tura Women's Campus Admissions 2026: Direct Application & Merit List",
    author: "Suman Das"
  }
];

function updateHomeAndLogoArticles() {
  const files = [
    path.join(rootDir, 'src', 'pages', 'Home.jsx'),
    path.join(rootDir, 'src', 'pages', 'Logo.jsx')
  ];

  files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace generic headings in Latest Articles / Latest News
    content = content.replace(
      /A National Leadership Recognises IIBS Bengaluru’s Academic Culture of Management Excellence/g,
      "NSTI Panipat Skill & Tech Admissions 2026: Application Process, Eligibility & Campus Guide"
    );
    content = content.replace(
      /IIBS Bengaluru Announces Flat 50% MBA Scholarship For K-PGCET Students/g,
      "Govt. IToT Jaipur Announces 2026 Scholarship Scheme & Placement Drives for Diploma Candidates"
    );
    content = content.replace(
      /Chandigarh University Signs Strategic MoUs with Mozambique, Ecuador and Botswana to Strengthen Global Academic Collaboration!/g,
      "NSTI Patna Workshop & Technical Skill Cell Reports Record Placement Rates in 2026"
    );
    content = content.replace(
      /Glasgow 2026 Commonwealth Games: Chandigarh University Student-Athletes Help India Secure 39 Medals \(13 Gold, 17 Silver, and 9 Bronze\)/g,
      "NSTI Mumbai Advanced Technical & Skill Certification 2026: Direct Admission Opens"
    );
    content = content.replace(
      /Parul University Hosts ICGCV 2026, Bringing Global Experts Together to Advance Conversations on Criminology, Victimology and Justice/g,
      "GITI Campus Aliganj Lucknow: Top Technical & Vocational Training Programs (2026 Guide)"
    );

    // Clean up className="href=\"javascript:;\"" on homePageArticle links
    content = content.replace(/className=\{"href=\\\"javascript:;\\\""\}/g, 'className={""}');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated articles in ${path.basename(filePath)}`);
  });
}

updateHomeAndLogoArticles();
