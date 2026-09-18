import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pageRendererPath = path.resolve(__dirname, '../src/PageRenderer.jsx');

let code = fs.readFileSync(pageRendererPath, 'utf8');

// Replace fillHomeArticleList and hydrateHomeArticleLists
const oldArticleLogic = `function fillHomeArticleList(list, items) {
  if (!list || list.children.length || normalizeText(list.textContent) || !items.length) return;

  items.forEach((item) => {
    const entry = document.createElement('li');
    const link = document.createElement('a');
    const title = document.createElement('h3');

    if (item.href) link.href = item.href;
    title.textContent = item.title;

    if (item.imageSrc) {
      const image = document.createElement('img');
      image.src = item.imageSrc;
      image.alt = item.imageAlt;
      image.loading = 'lazy';
      link.appendChild(image);
    }

    link.appendChild(title);
    entry.appendChild(link);
    list.appendChild(entry);
  });
}

function hydrateHomeArticleLists(root) {
  fillHomeArticleList(
    root.querySelector('#recentArticleHome'),
    getPreviewItems(findHomeSection(root, 'Latest Articles')),
  );
  fillHomeArticleList(
    root.querySelector('#popularArticleHome'),
    getPreviewItems(findHomeSection(root, 'Latest News')),
  );
}`;

const newArticleLogic = `const STREAM_COLLEGE_ARTICLES = {
  agriculture: {
    recent: [
      { title: "Govt. IToT Jaipur Agri-Tech & Skill Training Admissions 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp" },
      { title: "NSTI Panipat Agricultural Skill & Technology Workshop Schedule 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-09ff18767cf68d1ea75c62511e3b8320.webp" },
      { title: "Govt. IToT Dausa & Karauli Agri-Business Counseling Matrix 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-c19be755c26cda9c24594f6e7e42e8ac.webp" }
    ],
    popular: [
      { title: "Govt. IToT Malkangiri & Jharsuguda Agri-Tech Placement Drives", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-f2a90f000a8fdc33d2773231b003ef83.webp" },
      { title: "NSTI Jodhpur Agriculture Technology & Equipment Guide 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a9a300edebee2f25421a5b75f9060e45.webp" }
    ]
  },
  medical: {
    recent: [
      { title: "NSTI Panipat Medical Tech & Healthcare Skill Admissions 2026 Guide", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp" },
      { title: "Govt. IToT Jaipur Medical Equipment & Healthcare Skill Diploma", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-09ff18767cf68d1ea75c62511e3b8320.webp" },
      { title: "NSTI Patna Medical Skill Training Center: Seat Matrix & Dates 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-c19be755c26cda9c24594f6e7e42e8ac.webp" }
    ],
    popular: [
      { title: "Syadwad IToT Baghpat Paramedical & Health Science Fee Structure", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-f2a90f000a8fdc33d2773231b003ef83.webp" },
      { title: "Govt IToT Udhampur & Anantnag Medical Tech Cutoffs 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a9a300edebee2f25421a5b75f9060e45.webp" }
    ]
  },
  pharmacy: {
    recent: [
      { title: "Govt. IToT Nashik & Amravati Diploma in Pharmacy Tech Admissions 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp" },
      { title: "NSTI Mumbai Advanced Pharmacy & Skill Certification Open 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-09ff18767cf68d1ea75c62511e3b8320.webp" },
      { title: "GITI Aliganj Lucknow Pharmacy Tech Placement Reports 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-beea85bdef2068ddecd646eea1cf4313.webp" }
    ],
    popular: [
      { title: "NSTI Calicut & Jodhpur Pharma Tech Lab Assistant Certification", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-f2a90f000a8fdc33d2773231b003ef83.webp" },
      { title: "Govt. IToT Lalru & Fazilka Pharmacy Counseling Matrix 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a9a300edebee2f25421a5b75f9060e45.webp" }
    ]
  },
  engineering: {
    recent: [
      { title: "NSTI Panipat Advanced Technical & Engineering Skill Diploma 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp" },
      { title: "Govt. IToT Jaipur Computer Science & Tech Certification Programs", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-09ff18767cf68d1ea75c62511e3b8320.webp" },
      { title: "NSTI Patna Workshop & Technical Skill Cell Record Placements 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-c19be755c26cda9c24594f6e7e42e8ac.webp" }
    ],
    popular: [
      { title: "NSTI Jodhpur & Kolkata Technical Skills & Engineering Placements 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-f2a90f000a8fdc33d2773231b003ef83.webp" },
      { title: "Jain IToT Fazilka & Govt IToT Saket-Meerut Cutoff Matrix 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a9a300edebee2f25421a5b75f9060e45.webp" }
    ]
  }
};

function fillHomeArticleList(list, items, clearExisting = false) {
  if (!list || !items || !items.length) return;

  if (clearExisting || !list.children.length) {
    list.innerHTML = '';
  } else if (list.children.length && !clearExisting) {
    return;
  }

  items.forEach((item) => {
    const entry = document.createElement('li');
    const link = document.createElement('a');
    const title = document.createElement('h3');

    link.href = item.href || '#';
    title.textContent = item.title;

    if (item.imageSrc) {
      const image = document.createElement('img');
      image.src = item.imageSrc;
      image.alt = item.title;
      image.loading = 'lazy';
      link.appendChild(image);
    }

    link.appendChild(title);
    entry.appendChild(link);
    list.appendChild(entry);
  });
}

function getStreamArticles(tabKey, tabTitle) {
  const normalizedKey = (tabKey || tabTitle || '').toLowerCase().trim();
  if (STREAM_COLLEGE_ARTICLES[normalizedKey]) {
    return STREAM_COLLEGE_ARTICLES[normalizedKey];
  }

  const titleText = tabTitle || tabKey || 'General';
  return {
    recent: [
      { title: \`NSTI Panipat \${titleText} Tech & Skill Admissions 2026: Application Process\`, imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp" },
      { title: \`Govt. IToT Jaipur \${titleText} Diploma & Scholarship Scheme 2026\`, imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-09ff18767cf68d1ea75c62511e3b8320.webp" },
      { title: \`NSTI Patna \${titleText} Workshop & Placement Cell Reports 2026\`, imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-c19be755c26cda9c24594f6e7e42e8ac.webp" }
    ],
    popular: [
      { title: \`NSTI Mumbai & GITI Lucknow \${titleText} Advanced Certification 2026\`, imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-f2a90f000a8fdc33d2773231b003ef83.webp" },
      { title: \`NSTI Jodhpur & Calicut \${titleText} Cutoffs & Counseling Matrix 2026\`, imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a9a300edebee2f25421a5b75f9060e45.webp" }
    ]
  };
}

function handleArticleTabClick(root, tabElement) {
  const triggerGroup = tabElement.closest('ul') || tabElement.parentElement;
  triggerGroup?.querySelectorAll('a, li').forEach((el) => el.classList.remove('activeLink', 'active'));
  
  const anchor = tabElement.closest('a') || tabElement.querySelector('a') || tabElement;
  anchor.classList.add('activeLink', 'active');
  if (anchor.parentElement && anchor.parentElement.tagName === 'LI') {
    anchor.parentElement.classList.add('active');
  }

  const tabKey = anchor.getAttribute('data-tab') || '';
  const tabTitle = anchor.getAttribute('title') || anchor.textContent || '';
  const articles = getStreamArticles(tabKey, tabTitle);

  fillHomeArticleList(root.querySelector('#recentArticleHome'), articles.recent, true);
  fillHomeArticleList(root.querySelector('#popularArticleHome'), articles.popular, true);
}

function hydrateHomeArticleLists(root) {
  const defaultRecent = getPreviewItems(findHomeSection(root, 'Latest Articles'));
  const defaultPopular = getPreviewItems(findHomeSection(root, 'Latest News'));

  if (defaultRecent.length) {
    fillHomeArticleList(root.querySelector('#recentArticleHome'), defaultRecent, true);
  } else {
    fillHomeArticleList(root.querySelector('#recentArticleHome'), getStreamArticles('agriculture').recent, true);
  }

  if (defaultPopular.length) {
    fillHomeArticleList(root.querySelector('#popularArticleHome'), defaultPopular, true);
  } else {
    fillHomeArticleList(root.querySelector('#popularArticleHome'), getStreamArticles('agriculture').popular, true);
  }
}`;

code = code.replace(oldArticleLogic, newArticleLogic);

// Inject handleArticleTabClick into handleClick in PageRenderer
const clickTarget = `const moreButton = clicked.closest('.viewMoreCards');`;
const clickReplacement = `const articleTab = clicked.closest('.homePageArticle a, li.homePageArticle');
      if (articleTab && root.contains(articleTab)) {
        event.preventDefault();
        handleArticleTabClick(root, articleTab);
        return;
      }

      const moreButton = clicked.closest('.viewMoreCards');`;

if (!code.includes('handleArticleTabClick(root, articleTab)')) {
  code = code.replace(clickTarget, clickReplacement);
}

fs.writeFileSync(pageRendererPath, code, 'utf8');
console.log('Successfully patched PageRenderer.jsx with dynamic college article tab handlers!');
