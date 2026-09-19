import { useEffect, useRef } from 'react';
import { getDropdownSelection, matchesFilter } from './navMenus.js';
import { localLink } from './linkPolicy.js';
import { fetchMedicalNews, fallbackArticles } from './services/newsApi.js';

const MANAGED_ATTR = 'data-nurshing-managed';
const LOCAL_BASE = 'https://site.invalid';

function ensureCompatibilityGlobals() {
  window.gmu = window.gmu || {};
  window.gmu.url = window.gmu.url || {};
  const navigate = (url) => {
    const destination = localLink(url);
    if (destination) window.location.assign(destination);
    return false;
  };
  window.gmu.url.goto = navigate;
  window.menuNavigate = navigate;
}

function getLocalRoute(href) {
  if (/^(mailto|tel):/i.test(href || '')) return null;
  return localLink(href) || '#';
}

function getStylesheetHref(href) {
  if (!href) return null;

  try {
    const url = new URL(href, LOCAL_BASE);
    const isGetMyUniAsset = ['site.invalid', 'www.getmyuni.com', 'getmyuni.com'].includes(url.hostname)
      && url.pathname.startsWith('/yas/css/');

    if (isGetMyUniAsset) {
      return `${url.pathname}${url.search}`;
    }

    if (
      url.protocol === 'https:'
      && ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net'].includes(url.hostname)
    ) {
      return url.href;
    }
  } catch {
    return null;
  }

  return null;
}

function promoteLazyImages(root) {
  root.querySelectorAll('img').forEach((image) => {
    const dataSrc = image.getAttribute('data-src');
    const hasUsableSrc = image.getAttribute('src') && image.getAttribute('src') !== '#';

    if (dataSrc && !hasUsableSrc) {
      image.setAttribute('src', dataSrc);
    }

    if (!image.hasAttribute('loading')) {
      image.setAttribute('loading', image.getAttribute('fetchpriority') === 'high' ? 'eager' : 'lazy');
    }
  });
}

function rewriteStaticLinks(root) {
  root.querySelectorAll('a[href]').forEach((anchor) => {
    const destination = localLink(anchor.getAttribute('href'));
    if (destination) anchor.setAttribute('href', destination);
    else {
      anchor.removeAttribute('href');
      anchor.setAttribute('aria-disabled', 'true');
    }
    anchor.removeAttribute('ping');
  });
}

function activateTab(root, trigger) {
  const targetSelector = trigger.getAttribute('data-target');
  if (!targetSelector) return false;

  const target = root.querySelector(targetSelector);
  if (!target) return false;

  const triggerGroup = trigger.closest('ul, .bannerTabButtons, .tabButtons') || trigger.parentElement;
  triggerGroup?.querySelectorAll('[data-target]').forEach((item) => {
    item.classList.remove('tabLink', 'activeLink', 'active');
  });
  trigger.classList.add('tabLink', 'activeLink', 'active');

  const panelGroup = target.parentElement;
  panelGroup?.querySelectorAll('.tab-content').forEach((panel) => {
    panel.classList.remove('activeTab');
  });
  target.classList.add('activeTab');

  return true;
}

function revealMoreCards(button) {
  const section = button.closest('.tab-content, section, .exploreCategoryContent, .indexSection');
  if (!section) return false;

  section.classList.add('show-all-cards');
  section.querySelectorAll('.dataCard, .displayCard, .collegeCard, .sliderCard').forEach((card) => {
    card.style.display = '';
  });
  button.setAttribute('hidden', '');
  return true;
}

function getSliderParts(control) {
  const wrapper = control.closest('.customSlider, .articleRelataedLinks');
  if (!wrapper) return null;

  const scroller = wrapper.querySelector('.customSliderCards, .customSliderList, ul');
  return scroller ? { wrapper, scroller } : null;
}

function updateSliderButtons(wrapper, scroller) {
  const left = wrapper.querySelector('.scrollLeft, .btn_left');
  const right = wrapper.querySelector('.scrollRight, .btn_right');
  const canScroll = scroller.scrollWidth > scroller.clientWidth + 2;
  const atStart = scroller.scrollLeft <= 2;
  const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;

  left?.classList.toggle('over', !canScroll || atStart);
  right?.classList.toggle('over', !canScroll || atEnd);
}

function initializeHorizontalScrollers(root) {
  const sliders = Array.from(root.querySelectorAll('.customSlider, .articleRelataedLinks'))
    .map((wrapper) => {
      const scroller = wrapper.querySelector('.customSliderCards, .customSliderList, ul');
      return scroller ? { wrapper, scroller } : null;
    })
    .filter(Boolean);

  const refresh = () => {
    sliders.forEach(({ wrapper, scroller }) => updateSliderButtons(wrapper, scroller));
  };

  sliders.forEach(({ scroller }) => {
    scroller.addEventListener('scroll', refresh, { passive: true });
  });

  window.addEventListener('resize', refresh, { passive: true });
  window.requestAnimationFrame(refresh);

  return () => {
    sliders.forEach(({ scroller }) => {
      scroller.removeEventListener('scroll', refresh);
    });
    window.removeEventListener('resize', refresh);
  };
}

function scrollHorizontalSlider(control) {
  const parts = getSliderParts(control);
  if (!parts) return false;

  const { wrapper, scroller } = parts;
  const direction = control.matches('.scrollLeft, .btn_left') ? -1 : 1;
  const distance = Math.max(240, Math.round(scroller.clientWidth * 0.86));

  scroller.scrollBy({ left: direction * distance, behavior: 'smooth' });
  window.setTimeout(() => updateSliderButtons(wrapper, scroller), 360);
  return true;
}

function normalizeText(value) {
  return (value || '').replace(/\s+/g, ' ').trim();
}

function getText(root, selector) {
  return normalizeText(root.querySelector(selector)?.textContent);
}

function parseLocation(location) {
  const parts = normalizeText(location)
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return { city: parts[0] || '', state: parts[0] || '' };
  }

  return {
    city: parts[0],
    state: parts.slice(1).join(', '),
  };
}

function getHighlight(card, labelPattern) {
  for (const item of Array.from(card.querySelectorAll('.highlight__div'))) {
    const label = getText(item, '.highlight__name');

    if (labelPattern.test(label)) {
      return item;
    }
  }

  return null;
}

function parseFirstNumber(value) {
  const match = normalizeText(value).replace(/,/g, '').match(/[\d.]+/);
  return match ? Number(match[0]) : null;
}

function parseFeeValue(value) {
  const matches = Array.from(normalizeText(value).replace(/,/g, '').matchAll(/([\d.]+)\s*(cr|crore|l|lac|lakh|k)?/gi));
  const numbers = matches
    .map((match) => {
      const amount = Number(match[1]);
      const unit = (match[2] || '').toLowerCase();

      if (!Number.isFinite(amount)) return null;
      if (unit === 'cr' || unit === 'crore') return amount * 100;
      if (unit === 'k') return amount / 100;
      return amount;
    })
    .filter((amount) => amount !== null);

  return numbers.length ? Math.max(...numbers) : null;
}

function feeBucket(feeValue) {
  if (feeValue === null) return 'Fee not listed';
  if (feeValue < 1) return 'Under 1L';
  if (feeValue <= 5) return '1L - 5L';
  if (feeValue <= 10) return '5L - 10L';
  return 'Above 10L';
}

function courseBucket(courseCount) {
  if (courseCount === null) return 'Courses not listed';
  if (courseCount <= 5) return '1 - 5 courses';
  if (courseCount <= 15) return '6 - 15 courses';
  return '16+ courses';
}

function extractCardData(card, index) {
  const name = getText(card, '.college__name a') || `College ${index + 1}`;
  const location = getText(card, '.college__location');
  const { city, state } = parseLocation(location);
  const ownership = getText(card, '.college__affiliation');
  const rank = parseFirstNumber(getText(card, '.college__rank'));
  const courseText = normalizeText(getHighlight(card, /courses?/i)?.textContent);
  const feeText = normalizeText(getHighlight(card, /fees?/i)?.textContent);
  const examHighlight = getHighlight(card, /exam/i);
  const exams = Array.from(examHighlight?.querySelectorAll('a') || [])
    .map((exam) => normalizeText(exam.textContent))
    .filter(Boolean);
  const courseCount = parseFirstNumber(courseText);
  const feeValue = parseFeeValue(feeText);
  const stream = card.getAttribute('data-stream') || card.dataset.stream || '';
  const searchText = [stream, name, location, ownership, courseText, feeText, exams.join(' '), card.textContent]
    .join(' ')
    .toLowerCase();

  card.dataset.reactFilterIndex = String(index);

  return {
    card,
    index,
    name,
    location,
    city,
    state,
    ownership,
    rank,
    stream,
    courseCount,
    courseBucket: courseBucket(courseCount),
    feeValue,
    feeBucket: feeBucket(feeValue),
    exams,
    searchText,
  };
}

function getCountedOptions(values, extraCounts = new Map()) {
  const counts = new Map(extraCounts);

  values.filter(Boolean).forEach((value) => {
    if (extraCounts.has(value)) return;
    counts.set(value, (counts.get(value) || 0) + 1);
  });

  return Array.from(counts, ([value, count]) => ({ value, count }))
    .filter((option) => option.value)
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
}

function getSuggestedCityCounts(root) {
  const counts = new Map();

  root.querySelectorAll('.filter__by__exam .exam__list li').forEach((item) => {
    const text = normalizeText(item.textContent);
    const match = text.match(/^(.+?)\s*\((\d+)\)$/);

    if (match) {
      counts.set(match[1].trim(), Number(match[2]));
    }
  });

  return counts;
}

function createFilterGroup(title, groupName, options) {
  if (!options.length) return null;

  const group = document.createElement('section');
  group.className = 'react-filter-group';
  group.dataset.filterGroupWrap = groupName;

  const heading = document.createElement('h3');
  heading.textContent = title;
  group.appendChild(heading);

  const list = document.createElement('div');
  list.className = 'react-filter-options';

  options.forEach(({ value, count }) => {
    const label = document.createElement('label');
    label.className = 'react-filter-option';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = value;
    input.dataset.filterGroup = groupName;

    const text = document.createElement('span');
    text.textContent = value;

    const total = document.createElement('small');
    total.textContent = String(count);

    label.append(input, text, total);
    list.appendChild(label);
  });

  group.appendChild(list);
  return group;
}

function buildCollegeFilterPanel(root, records) {
  const sidebar = root.querySelector('.all-college-ajax');
  if (!sidebar || !records.length) return null;

  sidebar.innerHTML = '';
  sidebar.classList.add('react-filter-sidebar');
  sidebar.closest('.row')?.classList.add('react-filter-layout');

  // Create mobile trigger button
  const mobileToggle = document.createElement('button');
  mobileToggle.type = 'button';
  mobileToggle.className = 'mobile-filter-trigger-btn';
  mobileToggle.innerHTML = '<span>⚡ Filter Colleges & Courses</span><span class="filter-badge">Tap to Filter</span>';

  const panel = document.createElement('aside');
  panel.className = 'react-filter-panel';
  panel.setAttribute('aria-label', 'College filters');

  const header = document.createElement('div');
  header.className = 'react-filter-header';

  const title = document.createElement('h2');
  title.textContent = 'Filters';

  const headerRight = document.createElement('div');
  headerRight.style.display = 'flex';
  headerRight.style.alignItems = 'center';
  headerRight.style.gap = '8px';

  const clear = document.createElement('button');
  clear.type = 'button';
  clear.textContent = 'Clear All';
  clear.dataset.reactFilterClear = 'true';

  const closeMobile = document.createElement('button');
  closeMobile.type = 'button';
  closeMobile.className = 'mobile-filter-close-btn';
  closeMobile.textContent = '✕ Close';

  headerRight.append(clear, closeMobile);
  header.append(title, headerRight);
  panel.appendChild(header);

  const searchLabel = document.createElement('label');
  searchLabel.className = 'react-filter-search';

  const searchText = document.createElement('span');
  searchText.textContent = 'College Name';

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = 'Search college, city';
  searchInput.autocomplete = 'off';
  searchInput.dataset.reactFilterSearch = 'true';

  searchLabel.append(searchText, searchInput);
  panel.appendChild(searchLabel);

  const groups = [
    createFilterGroup('Stream / Category', 'stream', getCountedOptions(records.map((record) => record.stream))),
    createFilterGroup('State Wise', 'state', getCountedOptions(records.map((record) => record.state))),
    createFilterGroup('City Wise', 'city', getCountedOptions(records.map((record) => record.city), getSuggestedCityCounts(root))),
    createFilterGroup('Ownership', 'ownership', getCountedOptions(records.map((record) => record.ownership))),
  ].filter(Boolean);

  panel.append(...groups);

  const mobileApplyBtn = document.createElement('button');
  mobileApplyBtn.type = 'button';
  mobileApplyBtn.className = 'mobile-filter-apply-btn';
  mobileApplyBtn.textContent = 'Apply Filters';
  panel.appendChild(mobileApplyBtn);

  const openDrawer = () => {
    panel.classList.add('mobile-drawer-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    panel.classList.remove('mobile-drawer-open');
    document.body.style.overflow = '';
  };

  mobileToggle.addEventListener('click', openDrawer);
  closeMobile.addEventListener('click', closeDrawer);
  mobileApplyBtn.addEventListener('click', closeDrawer);

  sidebar.appendChild(mobileToggle);
  sidebar.appendChild(panel);

  return panel;
}

function labelForGroup(group) {
  return {
    stream: 'Stream',
    program: 'Course',
    specialization: 'Specialisation',
    city: 'City',
    college: 'College',
    course: 'Courses',
    exam: 'Exam',
    fee: 'Fees',
    ownership: 'Ownership',
    state: 'State',
  }[group] || group;
}

function hydrateActionButtons(root) {
  root.querySelectorAll('.leadFilterData, .download__brochure, .primaryBtn, [data-title*="Download"]').forEach((button) => {
    const title = (button.getAttribute('data-title') || '').toLowerCase();
    const currentText = (button.textContent || '').trim().toLowerCase();

    if (currentText.includes('download') || title.includes('download')) {
      button.textContent = 'View College';
      button.setAttribute('data-title', 'View College');
      button.classList.add('view-details-btn');
    } else if (!normalizeText(button.textContent)) {
      const text = title.includes('counselling') || title.includes('counsel')
        ? 'Talk to Experts'
        : 'Apply Now';
      button.textContent = text;
    }

    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
  });
}

function findHomeSection(root, headingText) {
  const requested = headingText.toLowerCase();

  return Array.from(root.querySelectorAll('.indexSection')).find((section) => {
    return normalizeText(section.querySelector('h2')?.textContent).toLowerCase() === requested;
  });
}

function getPreviewItems(section, limit = 5) {
  if (!section) return [];

  return Array.from(section.querySelectorAll('.displayCard'))
    .map((card) => {
      const link = card.matches('a') ? card : card.querySelector('a');
      const image = card.querySelector('img');
      const title = getText(card, '.widgetCardHeading') || normalizeText(link?.textContent);
      const href = link?.getAttribute('href');

      if (!title) return null;

      return {
        href,
        title,
        imageAlt: image?.getAttribute('alt') || title,
        imageSrc: image?.getAttribute('src') || image?.getAttribute('data-src') || '',
      };
    })
    .filter(Boolean)
    .slice(0, limit);
}

let liveNewsArticles = fallbackArticles;

if (typeof window !== 'undefined') {
  fetchMedicalNews().then((data) => {
    if (data && data.length > 0) {
      liveNewsArticles = data;
    }
  });
}

const STREAM_COLLEGE_ARTICLES = {
  nursing: {
    recent: [
      { title: "Top B.Sc Nursing & GNM Admissions 2026: Entrance Exams, Seat Matrix & Counseling", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp" },
      { title: "AIIMS Nursing B.Sc & M.Sc Entrance Schedule & Eligibility Matrix 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-09ff18767cf68d1ea75c62511e3b8320.webp" },
      { title: "Post Basic B.Sc Nursing College Selection & Placements Guide 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-c19be755c26cda9c24594f6e7e42e8ac.webp" }
    ],
    popular: [
      { title: "Top Govt & Private Nursing Colleges NIRF Ranking & Fee Structure 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-f2a90f000a8fdc33d2773231b003ef83.webp" },
      { title: "Military Nursing Service (MNS) B.Sc Nursing Entrance Cutoffs 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a9a300edebee2f25421a5b75f9060e45.webp" },
      { title: "B.Sc Nursing Clinical Training & Hospital Internship Opportunities", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-beea85bdef2068ddecd646eea1cf4313.webp" }
    ]
  },
  pharmacy: {
    recent: [
      { title: "B.Pharm & D.Pharm Admissions 2026: GPAT Cutoffs, Seat Matrix & Top Colleges", imageSrc: "/images/imported/fbfbaccac2b741ff.webp" },
      { title: "NIPER JEE & Top Pharmacy Institutes Application Process & Placement Reports", imageSrc: "/images/imported/98e8e98295e59373.webp" },
      { title: "Best Pharmacy Colleges in India (B.Pharm/Pharm.D) Fee Structure 2026", imageSrc: "/images/imported/92f6ffad5178c5f8.webp" }
    ],
    popular: [
      { title: "Pharm.D (Doctor of Pharmacy) Scope, Career & Top Recruiters 2026", imageSrc: "/images/imported/7061b910b4652e09.webp" },
      { title: "State-Wise Pharmacy Entrance Exams (MHT CET, WBJEE, KCET) Schedule 2026", imageSrc: "/images/imported/eee6182bd9898f1f.webp" },
      { title: "Pharmaceutical Quality Control & Regulatory Affairs Scope 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-beea85bdef2068ddecd646eea1cf4313.webp" }
    ]
  },
  paramedical: {
    recent: [
      { title: "Top Paramedical & Allied Health Science Degree Courses Admission Guide 2026", imageSrc: "/images/imported/f1b15d21bc33e73d.webp" },
      { title: "B.Sc MLT, Radiology & Physiotherapy Top Colleges & Entrance Exams 2026", imageSrc: "/images/imported/72eff45e80034839.webp" },
      { title: "JENPAS UG Paramedical Counseling, Cutoff Ranks & Seat Matrix 2026", imageSrc: "/images/imported/e662b48122882619.webp" }
    ],
    popular: [
      { title: "Diploma in Dialysis, OT Technology & Anaesthesia Career Scope 2026", imageSrc: "/images/imported/1bf1a0a37f7329b2.webp" },
      { title: "AIIMS Paramedical Courses Entrance Result & Counseling Schedule 2026", imageSrc: "/images/imported/c0a0e409ad0ae8ea.webp" },
      { title: "Emergency Medical Tech & Cardiac Care Technology Certification 2026", imageSrc: "/images/imported/71ebeddfa18aa7dd.webp" }
    ]
  },
  yoga: {
    recent: [
      { title: "BNYS & B.Sc Yoga Sciences Top Colleges & Admissions 2026", imageSrc: "/images/imported/7a90189c45f042e2.webp" },
      { title: "Naturopathy & Yoga Therapy Diploma Courses, Fees & Placement Guide 2026", imageSrc: "/images/imported/702b915ebaadfeab.webp" },
      { title: "Morarji Desai National Institute of Yoga Admission & Certification Matrix", imageSrc: "/images/imported/11a15dfd01cfbcdd.webp" }
    ],
    popular: [
      { title: "Ayush & Naturopathy Central Counseling (AACCC) Cutoffs 2026", imageSrc: "/images/imported/dd9f141020014495.webp" },
      { title: "Career Opportunities & International Yoga Certification Scope 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-a4aa352f93c52324ede743032aa4e62f.webp" },
      { title: "Yoga Instructor & Holistic Healthcare Specialist Course Guide 2026", imageSrc: "https://media.getmyuni.com/assets/images/articles/articles-3f9bc8b793b7e678d3cdd509ee7c412f.webp" }
    ]
  }
};

function fillHomeArticleList(list, items, clearExisting = false) {
  if (!list || !items || !items.length) return;

  if (clearExisting || list.children.length) {
    list.innerHTML = '';
  }

  items.forEach((item) => {
    const entry = document.createElement('li');
    const link = document.createElement('a');
    const title = document.createElement('h3');

    const href = item.href || item.url || '#';
    link.href = href;
    if (item.url) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    title.textContent = item.title;

    const imgSrc = item.urlToImage || item.imageSrc;
    if (imgSrc) {
      const image = document.createElement('img');
      image.src = imgSrc;
      image.alt = item.title;
      image.loading = 'lazy';
      image.onerror = () => {
        image.remove();
      };
      link.appendChild(image);
    }

    link.appendChild(title);
    entry.appendChild(link);
    list.appendChild(entry);
  });
}

function getStreamArticles(tabKey, tabTitle) {
  const normalizedKey = (tabKey || tabTitle || '').toLowerCase().trim();
  
  if (liveNewsArticles && liveNewsArticles.length >= 6) {
    const total = liveNewsArticles.length;
    let offset = 0;
    if (normalizedKey.includes('pharm')) offset = 2;
    else if (normalizedKey.includes('para')) offset = 4;
    else if (normalizedKey.includes('yoga')) offset = 6;
    
    const recent = [];
    const popular = [];
    for (let i = 0; i < 3; i++) {
      const idxR = (offset + i) % total;
      const idxP = (offset + i + 3) % total;
      const fallbackRecImg = STREAM_COLLEGE_ARTICLES[normalizedKey]?.recent[i]?.imageSrc;
      const fallbackPopImg = STREAM_COLLEGE_ARTICLES[normalizedKey]?.popular[i]?.imageSrc;
      
      recent.push({
        title: liveNewsArticles[idxR].title,
        imageSrc: liveNewsArticles[idxR].urlToImage || fallbackRecImg,
        href: liveNewsArticles[idxR].url
      });
      popular.push({
        title: liveNewsArticles[idxP].title,
        imageSrc: liveNewsArticles[idxP].urlToImage || fallbackPopImg,
        href: liveNewsArticles[idxP].url
      });
    }
    return { recent, popular };
  }

  if (STREAM_COLLEGE_ARTICLES[normalizedKey]) {
    return STREAM_COLLEGE_ARTICLES[normalizedKey];
  }

  return STREAM_COLLEGE_ARTICLES.nursing;
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
  const articles = getStreamArticles('nursing', 'Nursing');
  fillHomeArticleList(root.querySelector('#recentArticleHome'), articles.recent, true);
  fillHomeArticleList(root.querySelector('#popularArticleHome'), articles.popular, true);
}

function normalizeStudyAbroadLayout(root) {
  const map = root.querySelector('#worldmap');
  if (!map || map.children.length || normalizeText(map.textContent)) return;

  const mapColumn = map.closest('.col-md-6');
  const row = mapColumn?.parentElement;
  const contentColumn = Array.from(row?.children || []).find((child) => child !== mapColumn);

  if (mapColumn) {
    mapColumn.hidden = true;
  }

  contentColumn?.classList.add('react-full-width-study');
}

function initializeCollegeFilters(root) {
  const cards = Array.from(root.querySelectorAll('.filtered__colleges__list .college__card__new'));
  const records = cards.map((card, index) => extractCardData(card, index));
  const panel = buildCollegeFilterPanel(root, records);

  if (!panel) return undefined;

  const selected = {
    stream: new Set(),
    program: new Set(),
    specialization: new Set(),
    city: new Set(),
    college: new Set(),
    course: new Set(),
    exam: new Set(),
    state: new Set(),
    ownership: new Set(),
    fee: new Set(),
  };

  const urlParams = new URLSearchParams(window.location.search);
  const initialSearchParam = (urlParams.get('search') || urlParams.get('q') || urlParams.get('college') || '').trim();
  let query = initialSearchParam.toLowerCase();

  const externalSearch = root.querySelector('.search-listing');
  if (initialSearchParam) {
    if (externalSearch) externalSearch.value = initialSearchParam;
    const panelSearch = panel.querySelector('[data-react-filter-search]');
    if (panelSearch) panelSearch.value = initialSearchParam;
  }
  const selectedContainer = root.querySelector('.filter__selected__container #selectedFilters');
  const countHeading = root.querySelector('.filtered__college_count');
  const sortSelect = root.querySelector('#college-sort');
  const noResults = document.createElement('div');
  noResults.className = 'react-filter-empty';
  noResults.innerHTML = `
    <div style="font-size: 32px; margin-bottom: 6px;">🔍</div>
    <div style="font-size: 16px; font-weight: 700; color: #1f2937; margin-bottom: 4px;">No colleges match your search</div>
    <div style="font-size: 13px; color: #6b7280; font-weight: 500;">Try checking for typos or searching with another keyword.</div>
  `;
  noResults.hidden = true;
  root.querySelector('.searchedcollegeList')?.appendChild(noResults);

  if (countHeading) {
    countHeading.textContent = `Showing ${records.length} Colleges`;
    countHeading.dataset.originalText = `Showing ${records.length} Colleges`;
  }

  function hasActiveFilters() {
    return Boolean(query) || Object.values(selected).some((values) => values?.size > 0);
  }

  function renderSelectedChips() {
    selectedContainer?.querySelectorAll('[data-react-filter-chip]').forEach((chip) => chip.remove());

    if (!selectedContainer) return;

    Object.entries(selected).forEach(([group, values]) => {
      values?.forEach((value) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'filter__selected react-filter-chip';
        chip.dataset.reactFilterChip = 'true';
        chip.dataset.filterGroup = group;
        chip.value = value;
        chip.textContent = `${labelForGroup(group)}: ${value}`;

        const close = document.createElement('i');
        close.className = 'spriteIcon small__close__icon remove-college-filter';
        chip.appendChild(close);
        selectedContainer.appendChild(chip);
      });
    });
  }

  function recordMatches(record) {
    if (query && !record.searchText.includes(query.toLowerCase())) return false;
    if (selected.stream?.size && ![...selected.stream].some(v => matchesFilter(record, 'stream', v))) return false;
    for (const group of ['program', 'specialization']) {
      if (selected[group]?.size && ![...selected[group]].some(v => matchesFilter(record, group, v))) return false;
    }
    if (selected.state?.size && ![...selected.state].some(v => matchesFilter(record, 'state', v))) return false;
    if (selected.city?.size && ![...selected.city].some(v => matchesFilter(record, 'city', v))) return false;
    if (selected.college?.size && ![...selected.college].some(v => matchesFilter(record, 'college', v))) return false;
    if (selected.ownership?.size && !selected.ownership.has(record.ownership)) return false;
    if (selected.exam?.size && ![...selected.exam].some(v => matchesFilter(record, 'exam', v))) return false;
    if (selected.course?.size && !selected.course.has(record.courseBucket)) return false;
    if (selected.fee?.size && !selected.fee.has(record.feeBucket)) return false;
    return true;
  }

  function updateCityGroupState() {
    const cityGroup = panel.querySelector('[data-filter-group-wrap="city"]');
    if (!cityGroup) return;

    const hasStateSelected = Boolean(selected.state?.size > 0);
    const selectedStates = Array.from(selected.state || []).map(s => s.toLowerCase());

    let note = cityGroup.querySelector('.city-state-lock-note');
    if (!note) {
      note = document.createElement('div');
      note.className = 'city-state-lock-note';
      note.style.fontSize = '12px';
      note.style.fontWeight = '600';
      note.style.marginBottom = '8px';
      cityGroup.insertBefore(note, cityGroup.querySelector('.react-filter-options'));
    }

    if (!hasStateSelected) {
      note.textContent = '🔒 Select a State first to unlock cities';
      note.style.color = '#d97706';
      selected.city.clear();
      cityGroup.querySelectorAll('input[data-filter-group="city"]').forEach((input) => {
        input.disabled = true;
        input.checked = false;
        const label = input.closest('label');
        if (label) {
          label.style.opacity = '0.45';
          label.style.cursor = 'not-allowed';
        }
      });
    } else {
      note.textContent = `Unlocked cities for: ${Array.from(selected.state).join(', ')}`;
      note.style.color = '#059669';
      cityGroup.querySelectorAll('input[data-filter-group="city"]').forEach((input) => {
        const optionCity = input.value.toLowerCase();
        const matchesSelectedState = records.some((r) => {
          if (!r.state || !r.city) return false;
          return selectedStates.some((s) => r.state.toLowerCase().includes(s) || s.includes(r.state.toLowerCase())) &&
            r.city.toLowerCase().includes(optionCity);
        });

        const label = input.closest('label');
        if (matchesSelectedState || !selectedStates.length) {
          input.disabled = false;
          if (label) {
            label.style.display = 'grid';
            label.style.opacity = '1';
            label.style.cursor = 'pointer';
          }
        } else {
          input.disabled = true;
          input.checked = false;
          selected.city.delete(input.value);
          if (label) {
            label.style.display = 'none';
          }
        }
      });
    }
  }

  let isLimit6 = true;

  // Use pre-existing bottom Load More button (or create single bottom button if missing)
  let loadMoreBtn = root.querySelector('.load__more__button, .loadMoreList');

  if (!loadMoreBtn) {
    loadMoreBtn = document.createElement('div');
    loadMoreBtn.className = 'load__more__button loadMoreList';
    root.querySelector('.searchedcollegeList')?.appendChild(loadMoreBtn);
  }

  if (loadMoreBtn) {
    loadMoreBtn.style.cursor = 'pointer';
    loadMoreBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      isLimit6 = !isLimit6;
      applyFilters();
    };
  }

  function applyFilters() {
    updateCityGroupState();
    const active = hasActiveFilters();

    const matchingRecords = records.filter((r) => recordMatches(r));
    const totalMatching = matchingRecords.length;

    records.forEach((r) => {
      r.card.hidden = true;
      r.card.classList.add('react-filter-hidden');
    });

    const displayLimit = isLimit6 ? 6 : totalMatching;

    matchingRecords.forEach((r, idx) => {
      const isVisible = idx < displayLimit;
      r.card.hidden = !isVisible;
      r.card.classList.toggle('react-filter-hidden', !isVisible);
    });

    root.querySelectorAll('.filter__by__exam').forEach((widget) => {
      widget.hidden = active;
    });

    if (countHeading) {
      if (isLimit6 && totalMatching > 6) {
        countHeading.textContent = `Showing Top 6 of ${totalMatching} Colleges`;
      } else {
        countHeading.textContent = active
          ? `Showing ${totalMatching} Matching Colleges`
          : countHeading.dataset.originalText || `Showing ${totalMatching} Colleges`;
      }
    }

    if (loadMoreBtn) {
      if (totalMatching > 6) {
        loadMoreBtn.hidden = false;
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.innerHTML = isLimit6
          ? `<span>Load More Colleges (${totalMatching})</span> <span style="font-size: 14px; margin-left: 6px;">▾</span>`
          : `<span>Show Top 6 Colleges Only</span> <span style="font-size: 14px; margin-left: 6px;">▴</span>`;
      } else {
        loadMoreBtn.hidden = true;
        loadMoreBtn.style.display = 'none';
      }
    }

    noResults.hidden = totalMatching > 0;
    renderSelectedChips();
  }

  function clearFilters() {
    query = '';
    Object.values(selected).forEach((values) => values.clear());
    panel.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.checked = false;
    });
    panel.querySelectorAll('input[type="search"]').forEach((input) => {
      input.value = '';
    });

    if (externalSearch) externalSearch.value = '';
    if (sortSelect) sortSelect.value = 'position';
    applyFilters();
  }

  function selectValue(group, value) {
    if (!selected[group] || !value) return;

    selected[group].add(value);
    panel.querySelectorAll(`input[data-filter-group="${group}"]`).forEach((input) => {
      input.checked = input.value === value || input.checked;
    });
    applyFilters();
  }

  function sortCards() {
    const container = root.querySelector('.searchedcollegeList');
    if (!container || !sortSelect) return;

    const sortValue = sortSelect.value;
    const sortedRecords = [...records].sort((a, b) => {
      if (sortValue === 'rank') return (a.rank ?? Number.MAX_SAFE_INTEGER) - (b.rank ?? Number.MAX_SAFE_INTEGER);
      if (sortValue === 'highest_fee') return (b.feeValue ?? -1) - (a.feeValue ?? -1);
      if (sortValue === 'lowest_fee') return (a.feeValue ?? Number.MAX_SAFE_INTEGER) - (b.feeValue ?? Number.MAX_SAFE_INTEGER);
      return a.index - b.index;
    });

    sortedRecords.forEach((record) => container.appendChild(record.card));
    container.appendChild(noResults);
  }

  function handlePanelInput(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.matches('[data-react-filter-search]')) return;

    query = normalizeText(target.value).toLowerCase();
    if (externalSearch && externalSearch.value !== target.value) externalSearch.value = target.value;
    applyFilters();
  }

  function handlePanelChange(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.dataset.filterGroup) return;

    const values = selected[target.dataset.filterGroup];
    if (!values) return;

    if (target.checked) {
      values.add(target.value);
    } else {
      values.delete(target.value);
    }

    applyFilters();
  }

  function handleExternalSearch(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    query = normalizeText(target.value).toLowerCase();
    const panelSearch = panel.querySelector('[data-react-filter-search]');
    if (panelSearch && panelSearch.value !== target.value) panelSearch.value = target.value;
    applyFilters();
  }

  function handleSortChange() {
    sortCards();
    applyFilters();
  }

  function handleFilterClick(event) {
    const clicked = event.target;
    if (!(clicked instanceof Element)) return;

    const clearButton = clicked.closest('[data-react-filter-clear], #clearAllClg');
    if (clearButton && root.contains(clearButton)) {
      event.preventDefault();
      event.stopPropagation();
      clearFilters();
      return;
    }

    const chip = clicked.closest('[data-react-filter-chip]');
    if (chip && root.contains(chip)) {
      event.preventDefault();
      event.stopPropagation();
      const group = chip.getAttribute('data-filter-group');
      const value = chip.value;

      if (selected[group]) {
        selected[group].delete(value);
        panel.querySelectorAll(`input[data-filter-group="${group}"]`).forEach((input) => {
          if (input.value === value) input.checked = false;
        });
        applyFilters();
      }
      return;
    }

    const staticChip = clicked.closest('#selectedFilters button, .filter__selected');
    if (staticChip && root.contains(staticChip) && (clicked.classList?.contains('remove-college-filter') || clicked.closest('.remove-college-filter') || clicked === staticChip)) {
      event.preventDefault();
      event.stopPropagation();
      staticChip.style.display = 'none';
      return;
    }

    const removeSearch = clicked.closest('.search-remove');
    if (removeSearch && root.contains(removeSearch)) {
      event.preventDefault();
      event.stopPropagation();
      query = '';
      if (externalSearch) externalSearch.value = '';
      const panelSearch = panel.querySelector('[data-react-filter-search]');
      if (panelSearch) panelSearch.value = '';
      applyFilters();
      return;
    }

    const citySuggestion = clicked.closest('.filter__by__exam a');
    if (citySuggestion && root.contains(citySuggestion)) {
      const city = normalizeText(citySuggestion.textContent).replace(/\s*\(\d+\)\s*$/, '');

      event.preventDefault();
      event.stopPropagation();
      selectValue('city', city);
    }
  }

  const initial = getDropdownSelection(window.location.href).filter;
  if (initial && selected[initial.group]) {
    const { group, value } = initial;
    const inputs = [...panel.querySelectorAll('input[data-filter-group]')];
    if (!inputs.some(input => input.dataset.filterGroup === group && input.value === value)) {
      const optionGroup = createFilterGroup(labelForGroup(group), group, [{ value, count: records.filter(record => matchesFilter(record, group, value)).length }]);
      const existing = panel.querySelector(`[data-filter-group-wrap="${group}"] .react-filter-options`);
      if (existing) existing.append(...optionGroup.querySelector('.react-filter-options').children);
      else panel.appendChild(optionGroup);
    }
    selectValue(group, value);
  }

  panel.addEventListener('input', handlePanelInput);
  panel.addEventListener('change', handlePanelChange);
  externalSearch?.addEventListener('input', handleExternalSearch);
  sortSelect?.addEventListener('change', handleSortChange);
  root.addEventListener('click', handleFilterClick, true);
  applyFilters();

  if (query || window.location.hash) {
    window.setTimeout(() => {
      let targetCard = null;
      if (window.location.hash) {
        try {
          targetCard = root.querySelector(window.location.hash);
        } catch {
          // fallback
        }
      }
      if (!targetCard) {
        targetCard = root.querySelector('.college__card__new:not([hidden])');
      }
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        targetCard.style.borderColor = '#0966c2';
        targetCard.style.boxShadow = '0 0 0 4px rgba(9, 102, 194, 0.25)';
      }
    }, 280);
  }

  return () => {
    panel.removeEventListener('input', handlePanelInput);
    panel.removeEventListener('change', handlePanelChange);
    externalSearch?.removeEventListener('input', handleExternalSearch);
    sortSelect?.removeEventListener('change', handleSortChange);
    root.removeEventListener('click', handleFilterClick, true);
  };
}

function resetPageOverflow() {
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowY = 'auto';
  document.body.style.position = '';
}

function resetManagedHead() {
  document.querySelectorAll(`[${MANAGED_ATTR}]`).forEach((node) => node.remove());
}

function appendHead(page) {
  resetManagedHead();

  document.title = page.title || page.name || 'Nurshing Azz';

  page.head?.meta?.forEach((attributes) => {
    if (String(attributes['http-equiv'] || '').toLowerCase() === 'refresh') return;
    const meta = document.createElement('meta');

    Object.entries(attributes).forEach(([name, value]) => {
      if (/^on/i.test(name) || value == null) return;
      meta.setAttribute(name, String(value));
    });

    meta.setAttribute(MANAGED_ATTR, 'true');
    document.head.appendChild(meta);
  });

  page.head?.links?.forEach((attributes) => {
    const rel = String(attributes.rel || '').toLowerCase();
    const stylesheetHref = rel === 'stylesheet' ? getStylesheetHref(attributes.href) : null;

    if (rel === 'stylesheet' && !stylesheetHref) return;

    const link = document.createElement('link');

    Object.entries(attributes).forEach(([name, value]) => {
      if (/^on/i.test(name) || value == null) return;
      link.setAttribute(name, String(value));
    });

    if (stylesheetHref) {
      link.setAttribute('href', stylesheetHref);
    }

    if (link.getAttribute('rel') === 'stylesheet' && link.getAttribute('media') === 'print') {
      link.setAttribute('media', 'all');
    }

    link.setAttribute(MANAGED_ATTR, 'true');
    document.head.appendChild(link);
  });

  page.head?.styles?.forEach((css) => {
    const style = document.createElement('style');

    style.textContent = css;
    style.setAttribute(MANAGED_ATTR, 'true');
    document.head.appendChild(style);
  });
}

export default function PageRenderer({ page, onNavigate, children }) {
  const pageRef = useRef(null);

  useEffect(() => {
    let cleanupFilters;
    let cleanupScrollers;

    ensureCompatibilityGlobals();
    appendHead(page);
    resetPageOverflow();

    if (pageRef.current) {
      promoteLazyImages(pageRef.current);
      rewriteStaticLinks(pageRef.current);
      hydrateActionButtons(pageRef.current);
      hydrateHomeArticleLists(pageRef.current);
      normalizeStudyAbroadLayout(pageRef.current);
      cleanupScrollers = initializeHorizontalScrollers(pageRef.current);
      cleanupFilters = initializeCollegeFilters(pageRef.current);
    }

    return () => {
      cleanupFilters?.();
      cleanupScrollers?.();
      resetManagedHead();
      resetPageOverflow();
    };
  }, [page]);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const handleClick = (event) => {
      const clicked = event.target;
      if (!(clicked instanceof Element)) return;

      const sliderControl = clicked.closest('.scrollLeft, .scrollRight, .btn_left, .btn_right');
      if (sliderControl && root.contains(sliderControl) && scrollHorizontalSlider(sliderControl)) {
        event.preventDefault();
        return;
      }

      const scrollTopButton = clicked.closest('.scrollToTop');
      if (scrollTopButton && root.contains(scrollTopButton)) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const articleTab = clicked.closest('.homePageArticle a, li.homePageArticle');
      if (articleTab && root.contains(articleTab)) {
        event.preventDefault();
        handleArticleTabClick(root, articleTab);
        return;
      }

      const moreButton = clicked.closest('.viewMoreCards');
      if (moreButton && root.contains(moreButton) && revealMoreCards(moreButton)) {
        event.preventDefault();
        return;
      }

      const tabTrigger = clicked.closest('[data-target]');
      if (tabTrigger && root.contains(tabTrigger) && activateTab(root, tabTrigger)) {
        event.preventDefault();
        return;
      }

      const anchor = clicked.closest('a[href]');
      if (!anchor || !root.contains(anchor)) return;

      const href = anchor.getAttribute('href') || '';
      if (href.includes('/college/') || anchor.closest('.displayCard, .college__card__new, .collegeCard')) {
        // Avoid intercepting if it's the Apply Now button
        const isApplyBtn = clicked.closest('.lead-cta-college-filter-1, [data-title*="Apply"]') ||
          (clicked.textContent || '').toLowerCase().includes('apply');

        if (!isApplyBtn) {
          event.preventDefault();
          event.stopPropagation();

          const card = anchor.closest('.displayCard, .college__card__new, .collegeCard, .dataCard') || anchor;
          const collegeId = anchor.getAttribute('data-college-id') || href.replace(/.*\/college\//, '');

          const targetUrl = `/college-details?id=${encodeURIComponent(collegeId)}`;
          if (onNavigate) {
            onNavigate(targetUrl);
          } else {
            window.history.pushState({}, '', targetUrl);
            window.dispatchEvent(new Event('popstate'));
          }
          return;
        }
      }

      const localRoute = getLocalRoute(href);

      if (localRoute === '#') {
        event.preventDefault();
        return;
      }

      if (localRoute && onNavigate && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
        onNavigate(localRoute);
      }
    };

    root.addEventListener('click', handleClick);
    return () => root.removeEventListener('click', handleClick);
  }, [onNavigate, page]);

  return (
    <div className="converted-page" ref={pageRef}>
      {children}
    </div>
  );
}
