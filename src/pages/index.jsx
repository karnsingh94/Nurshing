import { dropdownPages, getDropdownSelection } from '../navMenus.js';

export const pageInfo = {
  "architecture": {
    "name": "Architecture",
    "sourceFile": "Architecture.html",
    "slug": "architecture",
    "title": "Top Architecture Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "arts": {
    "name": "Arts",
    "sourceFile": "Arts.html",
    "slug": "arts",
    "title": "Top Arts Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "commerce": {
    "name": "Commerce",
    "sourceFile": "Commerce .html",
    "slug": "commerce",
    "title": "Top Commerce College in India 2025: Ranking, Courses, Fees & Placements"
  },
  "computer": {
    "name": "Computer",
    "sourceFile": "Computer.html",
    "slug": "computer",
    "title": "Top Computer Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "dental": {
    "name": "Dental",
    "sourceFile": "Dental.html",
    "slug": "dental",
    "title": "Top Dental Colleges in India 2025 2025: Ranking, Courses, Fees & Placements"
  },
  "design": {
    "name": "Design",
    "sourceFile": "Design.html",
    "slug": "design",
    "title": "Top Design Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "education": {
    "name": "Education",
    "sourceFile": "Education.html",
    "slug": "education",
    "title": "Top Education Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "colleges": {
    "name": "Colleges",
    "sourceFile": "Colleges.jsx",
    "slug": "colleges",
    "title": "Top Colleges in India 2026: Compare All Streams, Courses, Fees, Ranking & Admissions"
  },
  "engineering": {
    "name": "Engineering",
    "sourceFile": "Engineering.html",
    "slug": "engineering",
    "title": "Top Engineering Colleges in India 2026 — NIRF Ranks, Fees, Cutoffs & Placements"
  },
  "home": {
    "name": "Home",
    "sourceFile": "home.html",
    "slug": "home",
    "title": "citsAdmission.com - Explore Top Colleges, Courses, Fees and Exams"
  },
  "hospitality": {
    "name": "Hospitality",
    "sourceFile": "Hospitality.html",
    "slug": "hospitality",
    "title": "Top Hotel Management Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "law": {
    "name": "Law",
    "sourceFile": "Law.html",
    "slug": "law",
    "title": "Top Law Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "logo": {
    "name": "Logo",
    "sourceFile": "logo.html",
    "slug": "logo",
    "title": "citsAdmission.com - Explore Top Colleges, Courses, Fees and Exams"
  },
  "management": {
    "name": "Management",
    "sourceFile": "Management.html",
    "slug": "management",
    "title": "Top MBA Colleges in India 2026: Rankings, Fees, Placements & Admission Guide"
  },
  "medical": {
    "name": "Medical",
    "sourceFile": "Medical.html",
    "slug": "medical",
    "title": "Top Medical Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "paramedical": {
    "name": "Paramedical",
    "sourceFile": "Paramedical.html",
    "slug": "paramedical",
    "title": "Top Paramedical Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "pharmacy": {
    "name": "Pharmacy",
    "sourceFile": "Pharmacy.html",
    "slug": "pharmacy",
    "title": "Top Pharmacy Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "science": {
    "name": "Science",
    "sourceFile": "Science .html",
    "slug": "science",
    "title": "Top Science Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "veterinary": {
    "name": "Veterinary",
    "sourceFile": "Veterinary.html",
    "slug": "veterinary",
    "title": "Top Veterinary (BVSc) Colleges in India 2026 — Ranking, Fees, NEET Cutoff & Admissions"
  },
  "vocational": {
    "name": "Vocational",
    "sourceFile": "Vocational.html",
    "slug": "vocational",
    "title": "Top Vocational Courses Colleges in India 2025: Ranking, Courses, Fees & Placements"
  },
  "citycolleges": {
    "name": "City Colleges",
    "sourceFile": "CityColleges.jsx",
    "slug": "citycolleges",
    "title": "Top Colleges in Desired City 2026: Ranking, Courses, Fees & Admissions"
  },
  "collegedetails": {
    "name": "College Details",
    "sourceFile": "CollegeDetails.jsx",
    "slug": "collegedetails",
    "title": "Institute Information & Seat Matrix — CITS Admissions 2026"
  },
  "nursing": {
    "name": "Nursing",
    "sourceFile": "Nursing.jsx",
    "slug": "nursing",
    "title": "Top Nursing Colleges in India 2026: Ranking, Courses, Fees & Placements"
  },
  "yoga": {
    "name": "Yoga",
    "sourceFile": "Yoga.jsx",
    "slug": "yoga",
    "title": "Top Yoga & Naturopathy Colleges in India 2026: Ranking, Courses, Fees & Placements"
  },
  "about-us": {
    "name": "About Us",
    "sourceFile": "AboutUs.jsx",
    "slug": "about-us",
    "title": "About Us — citsAdmission.com | College Discovery & Admission Advisory"
  },
  "contact-us": {
    "name": "Contact Us",
    "sourceFile": "ContactUs.jsx",
    "slug": "contact-us",
    "title": "Contact Us — citsAdmission.com | Student Counseling & Helpdesk"
  },
  "privacy-policy": {
    "name": "Privacy Policy",
    "sourceFile": "PrivacyPolicy.jsx",
    "slug": "privacy-policy",
    "title": "Privacy Policy — citsAdmission.com | Student Data Protection"
  },
  "terms-conditions": {
    "name": "Terms & Conditions",
    "sourceFile": "TermsConditions.jsx",
    "slug": "terms-conditions",
    "title": "Terms & Conditions — citsAdmission.com | User Agreement"
  }
};

export const pageLoaders = {
  "architecture": () => import('./Architecture.jsx'),
  "arts": () => import('./Arts.jsx'),
  "colleges": () => import('./CityColleges.jsx'),
  "commerce": () => import('./Commerce.jsx'),
  "computer": () => import('./Computer.jsx'),
  "dental": () => import('./Dental.jsx'),
  "design": () => import('./Design.jsx'),
  "education": () => import('./Education.jsx'),
  "engineering": () => import('./Engineering.jsx'),
  "home": () => import('./Home.jsx'),
  "hospitality": () => import('./Hospitality.jsx'),
  "law": () => import('./Law.jsx'),
  "logo": () => import('./Logo.jsx'),
  "management": () => import('./Management.jsx'),
  "medical": () => import('./Medical.jsx'),
  "paramedical": () => import('./Paramedical.jsx'),
  "pharmacy": () => import('./Pharmacy.jsx'),
  "science": () => import('./Science.jsx'),
  "veterinary": () => import('./Veterinary.jsx'),
  "vocational": () => import('./Vocational.jsx'),
  "citycolleges": () => import('./CityColleges.jsx'),
  "collegedetails": () => import('./CollegeDetails.jsx'),
  "nursing": () => import('./Nursing.jsx'),
  "yoga": () => import('./Yoga.jsx'),
  "about-us": () => import('./AboutUs.jsx'),
  "contact-us": () => import('./ContactUs.jsx'),
  "privacy-policy": () => import('./PrivacyPolicy.jsx'),
  "terms-conditions": () => import('./TermsConditions.jsx'),
};

export const pageList = Object.values(pageInfo);

const pathAliases = {
  "": "home",
  "site/index": "home",
  "colleges": "colleges",
  "all-colleges": "colleges",
  "city-colleges": "citycolleges",
  "citycolleges": "citycolleges",
  "college-details": "collegedetails",
  "collegedetails": "collegedetails",
  "nursing": "nursing",
  "nursing-colleges": "nursing",
  "yoga": "yoga",
  "yoga-colleges": "yoga",
  "about": "about-us",
  "about-us": "about-us",
  "aboutus": "about-us",
  "contact": "contact-us",
  "contact-us": "contact-us",
  "contactus": "contact-us",
  "privacy": "privacy-policy",
  "privacy-policy": "privacy-policy",
  "privacypolicy": "privacy-policy",
  "terms": "terms-conditions",
  "terms-conditions": "terms-conditions",
  "termsconditions": "terms-conditions",
  "terms-and-conditions": "terms-conditions",
  "terms-and-condition": "terms-conditions",
  "architecture-colleges": "architecture",
  "arts-colleges": "arts",
  "commerce-colleges": "commerce",
  "computer-colleges": "computer",
  "dental-colleges": "dental",
  "design-colleges": "design",
  "education-colleges": "education",
  "engineering-colleges": "engineering",
  "hotel-management-colleges": "hospitality",
  "hospitality-colleges": "hospitality",
  "law-colleges": "law",
  "management-colleges": "management",
  "medical-colleges": "medical",
  "paramedical-colleges": "paramedical",
  "pharmacy-colleges": "pharmacy",
  "science-colleges": "science",
  "veterinary-colleges": "veterinary",
  "vocational-courses-colleges": "vocational",
};

function normalizePath(pathname) {
  return decodeURIComponent(new URL(pathname, 'https://site.invalid').pathname)
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.html$/i, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export function slugFromPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath.startsWith('city/') || normalizedPath.startsWith('city-colleges') || normalizedPath.startsWith('colleges-in-')) {
    return 'citycolleges';
  }
  if (normalizedPath.startsWith('college/') || normalizedPath.startsWith('college-details') || normalizedPath.startsWith('collegedetails')) {
    return 'collegedetails';
  }
  const selection = getDropdownSelection(pathname);
  if (selection.slug) return selection.slug;
  return pathAliases[normalizedPath] || (pageInfo[normalizedPath] ? normalizedPath : dropdownPages.get(`/${normalizedPath}`)) || normalizedPath;
}

export function findPageLoaderByPath(pathname) {
  const slug = slugFromPath(pathname);
  return pageLoaders[slug] || null;
}

export function findPageInfoByPath(pathname) {
  const slug = slugFromPath(pathname);
  return pageInfo[slug] || null;
}
