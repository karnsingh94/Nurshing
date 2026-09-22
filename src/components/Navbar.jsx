import { useEffect, useMemo, useRef, useState } from 'react';
import { pageInfo } from '../pages/index.jsx';
import { abroadMenu, megaMenus } from '../navMenus.js';


const labels = {
  home: 'Home',
  colleges: 'Colleges',
  logo: 'Logo Page',
  nursing: 'Nursing',
  pharmacy: 'Pharmacy',
  paramedical: 'Paramedical',
  yoga: 'Yoga',
  /* Commented out other categories (code preserved):
  medical: 'Medical',
  engineering: 'Engineering',
  commerce: 'Commerce',
  science: 'Science',
  management: 'Management',
  computer: 'Computer Application',
  architecture: 'Architecture',
  arts: 'Arts',
  dental: 'Dental',
  design: 'Design',
  education: 'Education',
  hospitality: 'Hospitality',
  law: 'Law',
  veterinary: 'Veterinary Science',
  vocational: 'Vocational Courses',
  */
};

function ChevronCaret({ className = "site-nav__caret" }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// Navbar links requested: logo, Home, Colleges, nursing, pharmacy, paramedical, yoga
const localMenuOrder = ['home', /*'colleges',*/ 'nursing', 'pharmacy', 'paramedical', 'yoga'];

/* Commented out original localMenuOrder (code preserved):
const localMenuOrder = ['home', 'colleges', 'engineering', 'management', 'medical', 'science', 'commerce', 'pharmacy'];
*/

const morePageOrder = [];

/* Commented out original morePageOrder (code preserved):
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
*/

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

function MegaMenuPanel({ menu, category, onNavigate }) {
  if (!menu?.columns?.length) return null;

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="mega-menu-clean bg-white text-gray-900 rounded-xl shadow-2xl p-6 px-7 border border-gray-100 min-w-[500px] w-max max-w-[94vw] flex gap-10">
      {menu.columns.map((col) => (
        <div key={col.title} className="flex flex-col justify-between min-w-[220px] flex-1">
          <div>
            <h3 className="text-[12.5px] font-extrabold text-gray-900 uppercase tracking-wider mb-3.5 pb-1 border-b border-gray-200/80">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2 p-0 m-0 list-none">
              {col.items?.map((item) => {
                if (!item || !Array.isArray(item)) return null;
                const targetUrl = navUrl(item[1]);
                return (
                  <li key={item[0]}>
                    <a
                      href={targetUrl}
                      onClick={(e) => handleLinkClick(e, targetUrl)}
                      className="mega-menu-link text-[13.5px] font-semibold text-gray-900 hover:text-[#0966c2] transition-colors py-0.5 block"
                    >
                      {item[0]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {col.viewMoreUrl && (() => {
            const targetUrl = navUrl(col.viewMoreUrl);
            return (
              <a
                href={targetUrl}
                onClick={(e) => handleLinkClick(e, targetUrl)}
                className="view-more-btn mt-5 inline-flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg bg-gray-50 hover:bg-[#0966c2] text-[#111827] hover:text-white font-bold text-xs transition-all duration-200 border border-gray-200/90 hover:border-[#0966c2] shadow-xs group"
              >
                <span>{col.viewMoreLabel || 'View More'}</span>
                <span className="transform transition-transform group-hover:translate-x-1.5 font-bold">→</span>
              </a>
            );
          })()}
        </div>
      ))}
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
      {withCaret ? <ChevronCaret /> : null}
    </a>
  );
}

function DropdownNavItem({ page, activeSlug, onNavigate, isLast = false }) {
  const menu = page.slug === 'colleges' ? null : megaMenus[page.slug];
  const [touchOpen, setTouchOpen] = useState(false);

  return (
    <div className={`site-nav__item${touchOpen ? " touch-open" : ""}`}>
      <PageNavLink page={page} activeSlug={activeSlug} onNavigate={onNavigate} withCaret={Boolean(menu)} />
      {menu ? <button type="button" className="nav-expand" aria-label={`Toggle ${page.label} menu`} aria-expanded={touchOpen} onClick={() => setTouchOpen(open => !open)}><ChevronCaret /></button> : null}
      {menu ? (
        <div className={`site-nav__mega${isLast ? " site-nav__mega--right" : ""}`} role="menu">
          <MegaMenuPanel menu={menu} category={page.slug} onNavigate={onNavigate} />
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
        <div className="site-nav__right flex items-center gap-3 ml-auto h-full">
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
            {visiblePages.map((page, idx) => (
              <DropdownNavItem
                key={page.slug}
                page={page}
                activeSlug={activeSlug}
                onNavigate={onNavigate}
                isLast={['pharmacy', 'paramedical', 'yoga'].includes(page.slug)}
              />
            ))}

            {/* Go Abroad menu item commented out (code preserved): */}
            {/*
            <div className={`site-nav__item${abroadOpen ? " touch-open" : ""}`}>
              <a href={navUrl('/study-abroad')}>
                Go Abroad
                <ChevronCaret />
              </a>
              <button type="button" className="nav-expand" aria-label="Toggle Go Abroad menu" aria-expanded={abroadOpen} onClick={() => setAbroadOpen(open => !open)}><ChevronCaret /></button>
              <div className="site-nav__mega site-nav__mega--abroad" role="menu">
                <MegaMenuPanel menu={abroadMenu} category="logo" />
              </div>
            </div>
            */}

            {/* More dropdown menu item commented out (code preserved): */}
            {/*
            <div className="site-nav__item site-nav__item--more" ref={moreRef}>
              <button
                type="button"
                className={moreIsActive ? 'active' : ''}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                onClick={() => setMoreOpen((open) => !open)}
              >
                More
                <ChevronCaret />
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
            */}
          </nav>

          <div className="site-nav__actions hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal', { detail: { collegeName: 'Enquiry Now' } }))}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs md:text-sm px-4.5 py-2 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer shrink-0 ml-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
