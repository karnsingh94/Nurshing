import { useEffect, useMemo, useRef, useState } from 'react';
import { pageInfo } from '../pages/index.jsx';
import { abroadMenu, megaMenus } from '../navMenus.js';


const labels = {
  home: 'Home',
  colleges: 'Colleges',
  logo: 'Logo Page',
  medical: 'Medical',
  engineering: 'Engineering',
  commerce: 'Commerce',
  science: 'Science',
  management: 'Management',
  computer: 'Computer Application',
  pharmacy: 'Pharmacy',
  architecture: 'Architecture',
  arts: 'Arts',
  dental: 'Dental',
  design: 'Design',
  education: 'Education',
  hospitality: 'Hospitality',
  law: 'Law',
  paramedical: 'Paramedical',
  veterinary: 'Veterinary Science',
  vocational: 'Vocational Courses',
};

const localMenuOrder = ['home', 'colleges', 'engineering', 'management', 'medical', 'science', 'commerce', 'pharmacy'];

const morePageOrder = [
  'paramedical',
  'architecture',
  'design',
  'hospitality',
  'law',
  'veterinary',
  'vocational',
  'arts',
  'computer',
  'dental',
  'education',
  'logo',
];

function getPage(slug) {
  return pageInfo[slug] ? { ...pageInfo[slug], label: labels[slug] || pageInfo[slug].name } : null;
}

// Navbar destinations always stay in this application's shared layout.
function navUrl(path) {
  if (!path) return '/home';
  const url = new URL(path, 'https://site.invalid');
  return `${url.pathname}${url.search}${url.hash}`;
}

function MenuLink({ item, category, className = '' }) {
  const [label, href] = item;
  return (
    <a className={className} href={`${navUrl(href)}?category=${category}`}>
      {label}
    </a>
  );
}

function MegaMenuPanel({ menu, category }) {
  if (!menu?.columns?.length) return null;

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeColumn = menu.columns[activeTabIdx] || menu.columns[0];

  const featuredCollegesMap = {
    engineering: [
      { name: 'NHCE Bangalore - New Horizon College of Engineering', href: '/college/bms-college-of-engineering-bangalore' },
      { name: 'Jain Deemed -to- be University, Faculty of Engineering and Technology', href: '/colleges?search=Jain' },
      { name: 'Chandigarh University (CU)', href: '/colleges?search=Chandigarh' }
    ],
    management: [
      { name: 'International Institute of Management Studies (IIMS Pune)', href: '/colleges?search=IIMS' },
      { name: 'Jagan Institute of Management Studies, Rohini', href: '/colleges?search=JIMS' },
      { name: 'Chandigarh University (CU)', href: '/colleges?search=Chandigarh' }
    ],
    medical: [
      { name: 'AIIMS New Delhi - All India Institute of Medical Sciences', href: '/colleges?search=AIIMS' },
      { name: 'PGIMER Chandigarh', href: '/colleges?search=PGIMER' },
      { name: 'CMC Vellore - Christian Medical College', href: '/colleges?search=CMC' }
    ]
  };

  const featuredColleges = featuredCollegesMap[category] || [
    { name: 'NHCE Bangalore - New Horizon College of Engineering', href: '/colleges?search=Engineering' },
    { name: 'Jain Deemed -to- be University, Faculty of Engineering and Technology', href: '/colleges?search=Jain' },
    { name: 'Chandigarh University (CU)', href: '/colleges?search=Chandigarh' }
  ];

  const itemsCount = activeColumn?.items?.length || 0;
  const isMultiCol = itemsCount > 9;

  return (
    <div className="tabbed-mega-container flex bg-white text-gray-800 rounded-b-xl shadow-2xl overflow-hidden border border-gray-200/90 max-h-[calc(100vh-70px)] h-fit min-h-[380px] w-full">
      {/* Left Sidebar Category Tabs */}
      <div className="w-[275px] shrink-0 bg-white border-r border-gray-200/80 py-2.5 pb-10 overflow-y-auto max-h-[calc(100vh-70px)]">
        {menu.columns.map((col, idx) => {
          const isActive = idx === activeTabIdx;
          return (
            <button
              key={col.title}
              type="button"
              onMouseEnter={() => setActiveTabIdx(idx)}
              onClick={() => setActiveTabIdx(idx)}
              className={`w-full flex items-center justify-between px-5 py-2.5 text-[13.5px] text-left transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#f0fbf9] text-[#008080] font-semibold'
                  : 'text-[#4a5568] hover:bg-gray-50 hover:text-gray-900 font-normal'
              }`}
            >
              <span className="truncate pr-2">{col.title}</span>
              <span className={`text-[12px] shrink-0 ${isActive ? 'text-[#008080] font-bold' : 'text-gray-300'}`}>❯</span>
            </button>
          );
        })}
      </div>

      {/* Middle & Right Content Panel (Soft mint background #f5fbf9) */}
      <div className="flex-1 grid grid-cols-[minmax(0,1fr)_320px] p-6 px-8 pb-12 gap-8 overflow-y-auto max-h-[calc(100vh-70px)] bg-[#f5fbf9]">
        {/* Middle Column: Active Tab Links */}
        <div className="py-1 pb-6">
          {activeColumn ? (
            <div className="flex flex-col gap-2.5">
              {activeColumn.items?.map((item) => {
                if (!item || !Array.isArray(item)) return null;
                return (
                  <a
                    key={item[0]}
                    href={`${navUrl(item[1])}?category=${category}`}
                    className="text-[13.5px] font-normal text-[#4a5568] hover:text-[#008080] transition-colors py-0.5 block truncate"
                  >
                    {item[0]}
                  </a>
                );
              })}

              {activeColumn.secondTitle && (
                <div className="col-span-full mt-4 pt-3 border-t border-teal-100/60">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">
                    {activeColumn.secondTitle}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {activeColumn.secondItems?.map((item) => {
                      if (!item || !Array.isArray(item)) return null;
                      return (
                        <a
                          key={item[0]}
                          href={`${navUrl(item[1])}?category=${category}`}
                          className="text-[13px] font-normal text-gray-600 hover:text-[#008080] py-0.5 block truncate"
                        >
                          {item[0]}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-xs text-gray-400 py-8">Select a category from the left menu</div>
          )}
        </div>

        {/* Right Column: Featured Colleges */}
        <div className="pl-4 border-l border-teal-100/60 h-fit py-1 pb-6">
          <h3 className="text-[14px] font-bold text-[#1a202c] mb-3.5">
            Featured Colleges
          </h3>
          <div className="flex flex-col gap-3.5">
            {featuredColleges.map((fc) => (
              <a
                key={fc.name}
                href={fc.href}
                className="text-[13.5px] font-normal text-[#4a5568] hover:text-[#008080] leading-snug transition-colors py-0.5 block"
              >
                {fc.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PageNavLink({ page, activeSlug, onNavigate, withCaret = false }) {
  const isActive = activeSlug === page.slug;

  return (
    <a
      className={isActive ? 'active' : ''}
      href={`/${page.slug}`}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onNavigate(`/${page.slug}`);
      }}
    >
      {page.label}
      {withCaret ? <span className="site-nav__caret">⌄</span> : null}
    </a>
  );
}

function DropdownNavItem({ page, activeSlug, onNavigate }) {
  const menu = megaMenus[page.slug];
  const [touchOpen, setTouchOpen] = useState(false);

  return (
    <div className={`site-nav__item${touchOpen ? " touch-open" : ""}`}>
      <PageNavLink page={page} activeSlug={activeSlug} onNavigate={onNavigate} withCaret={Boolean(menu)} />
      {menu ? <button type="button" className="nav-expand" aria-label={`Toggle ${page.label} menu`} aria-expanded={touchOpen} onClick={() => setTouchOpen(open => !open)}>⌄</button> : null}
      {menu ? (
        <div className="site-nav__mega" role="menu">
          <MegaMenuPanel menu={menu} category={page.slug} />
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar({ activeSlug, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [abroadOpen, setAbroadOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeMoreSlug, setActiveMoreSlug] = useState(() => (
    morePageOrder.includes(activeSlug) ? activeSlug : morePageOrder[0]
  ));
  const moreRef = useRef(null);
  const visiblePages = useMemo(() => localMenuOrder.map(getPage).filter(Boolean), []);
  const morePages = useMemo(() => morePageOrder.map(getPage).filter(Boolean), []);
  const moreIsActive = morePages.some((page) => page.slug === activeSlug);
  const moreMenu = megaMenus[activeMoreSlug] || megaMenus[morePageOrder[0]];

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!moreRef.current?.contains(event.target)) setMoreOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') { setMoreOpen(false); setMobileOpen(false); setDismissed(true); }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    if (morePageOrder.includes(activeSlug)) {
      setActiveMoreSlug(activeSlug);
    }
  }, [activeSlug]);

  return (
    <header
      className={`site-nav${dismissed ? ' menus-dismissed' : ''}${mobileOpen ? ' mobile-menu-open' : ''}`}
      onPointerOver={(event) => {
        const item = event.target.closest('.site-nav__item');
        if (item && !item.contains(event.relatedTarget)) setDismissed(false);
      }}
      onClickCapture={(event) => {
        if (event.target.closest('.nav-expand, .site-nav__item--more > button')) {
          setDismissed(false);
          return;
        }
        if (event.target.closest('a, .site-nav__more-list button')) {
          setDismissed(true);
          setMoreOpen(false);
          setMobileOpen(false);
          document.activeElement?.blur();
        }
      }}
    >
      <div className="site-nav__inner">
        <a
          className="site-nav__brand"
          href="/home"
          aria-label="citsAdmission.com home"
          onClick={(event) => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            onNavigate('/home');
          }}
        >
          <img src="/brand-logo.svg" alt="citsAdmission.com" style={{ height: '42px', width: 'auto', display: 'block' }} />
        </a>

        <button type="button" className="mobile-nav-toggle" aria-controls="main-navigation" aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => { setMobileOpen(open => !open); setDismissed(false); }}>
          <span aria-hidden="true">{mobileOpen ? '✕' : '☰'}</span> Menu
        </button>
        <nav
          id="main-navigation"
          className="site-nav__links"
          aria-label="Main pages"
          onClick={(event) => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const link = event.target.closest('a[href]');
            if (!link || !event.currentTarget.contains(link)) return;
            event.preventDefault();
            onNavigate(link.getAttribute('href'));
            setMoreOpen(false);
          }}
        >
          {visiblePages.map((page) => (
            <DropdownNavItem key={page.slug} page={page} activeSlug={activeSlug} onNavigate={onNavigate} />
          ))}

          <div className={`site-nav__item${abroadOpen ? " touch-open" : ""}`}>
            <a href={navUrl('/study-abroad')}>
              Go Abroad
              <span className="site-nav__caret">⌄</span>
            </a>
            <button type="button" className="nav-expand" aria-label="Toggle Go Abroad menu" aria-expanded={abroadOpen} onClick={() => setAbroadOpen(open => !open)}>⌄</button>
            <div className="site-nav__mega site-nav__mega--abroad" role="menu">
              <MegaMenuPanel menu={abroadMenu} category="logo" />
            </div>
          </div>

          <div className="site-nav__item site-nav__item--more" ref={moreRef}>
            <button
              type="button"
              className={moreIsActive ? 'active' : ''}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((open) => !open)}
            >
              More
              <span className="site-nav__caret">⌄</span>
            </button>
            <div className={`site-nav__mega site-nav__mega--more${moreOpen ? ' open' : ''}`} role="menu">
              <aside className="site-nav__more-list" aria-label="More pages">
                {morePages.map((page) => (
                  <button
                    type="button"
                    key={page.slug}
                    className={activeMoreSlug === page.slug ? 'active' : ''}
                    onMouseEnter={() => setActiveMoreSlug(page.slug)}
                    onFocus={() => setActiveMoreSlug(page.slug)}
                    onClick={() => {
                      setMoreOpen(false);
                      onNavigate(`/${page.slug}`);
                    }}
                  >
                    {page.label}
                  </button>
                ))}
              </aside>
              <MegaMenuPanel menu={moreMenu} category={activeMoreSlug} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
