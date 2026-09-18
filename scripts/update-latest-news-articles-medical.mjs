import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function updateMedicalNewsAndArticles() {
  const files = [
    path.join(rootDir, 'src', 'pages', 'Home.jsx'),
    path.join(rootDir, 'src', 'pages', 'Logo.jsx')
  ];

  files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Update Latest News titles (Medical & Nursing Entrance & Admissions)
    content = content.replace(
      /AP Inter 2026 Result Expected Release Date: Last 3 Year Trends/g,
      "NEET UG 2026 Registration Begins: Application Link, Eligibility Criteria & Exam Pattern"
    );
    content = content.replace(
      /CBSE Class 12 Computer Science Answer Key 2026 \(OUT\) LIVE : Paper Solution Ends, Detailed Exam Review/g,
      "INI CET 2026 Medical Admission Result & Counseling Schedule Announced for AIIMS & PGIMER"
    );
    content = content.replace(
      /Tamil Nadu SSLC Maths Answer Key 2026 \(OUT\) LIVE : Paper Solution Ends, Detailed Exam Review/g,
      "GPAT 2026 Pharmacy Entrance Exam Dates Out: Application Instructions & Seat Matrix"
    );
    content = content.replace(
      /JENPAS UG 2026 Registration Begins: Application Link, Instructions/g,
      "JENPAS UG 2026 Registration Begins: Nursing & Paramedical Entrance Application Link"
    );
    content = content.replace(
      /Karnataka PGCET 2026 Registration Begins: Application Link, Instructions/g,
      "NEET PG 2026 Counseling Schedule & State-Wise Medical Seat Matrix Released"
    );

    // 2. Update Latest Articles titles (Medical & Nursing & Pharmacy Guides)
    content = content.replace(
      /NSTI Panipat Skill & Tech Admissions 2026: Application Process, Eligibility & Campus Guide/g,
      "Top Medical & Nursing Colleges in India 2026: NIRF Ranks, Fees, Admission & Placements"
    );
    content = content.replace(
      /Govt\. IToT Jaipur Announces 2026 Scholarship Scheme & Placement Drives for Diploma Candidates/g,
      "Best B.Sc Nursing & GNM Colleges in North India: Course Fees, Cutoffs & Career Scope"
    );
    content = content.replace(
      /NSTI Patna Workshop & Technical Skill Cell Reports Record Placement Rates in 2026/g,
      "Best Pharmacy Colleges in India (B.Pharm / D.Pharm): Admission, Salary & Top Recruiters"
    );
    content = content.replace(
      /NSTI Mumbai Advanced Technical & Skill Certification 2026: Direct Admission Opens/g,
      "NSTI Panipat & Govt IToT Jaipur Paramedical & Health Tech Courses 2026 Complete Guide"
    );
    content = content.replace(
      /GITI Campus Aliganj Lucknow: Top Technical & Vocational Training Programs \(2026 Guide\)/g,
      "KGMU Lucknow & AIIMS Medical Admission 2026: Entrance Exam, Cutoffs & Counseling"
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Latest News & Articles to Medical content in ${path.basename(filePath)}`);
  });
}

updateMedicalNewsAndArticles();
