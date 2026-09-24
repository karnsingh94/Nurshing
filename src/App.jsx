import { useCallback, useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import TopProgressBar from './components/TopProgressBar.jsx';
import ApplyModal from './components/ApplyModal.jsx';
import CollegeDetailsModal from './components/CollegeDetailsModal.jsx';
import CityCollegesModal from './components/CityCollegesModal.jsx';
import {
  pageList,
  findPageInfoByPath,
  findPageLoaderByPath,
  getCachedPageModule,
  cachePageModule,
  prefetchPage,
  prefetchAllPages,
} from './pages/index.jsx';

function normalizeRoute(path) {
  if (!path || path === '/') return '/home';
  return path.startsWith('/') ? path : `/${path}`;
}

function LoadingPage() {
  return (
    <main className="react-page-fallback">
      <div className="flex flex-col items-center justify-center min-h-[50vh] py-16">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-100 border-t-[#0966c2] rounded-full animate-spin"></div>
          <div className="absolute w-6 h-6 rounded-full bg-blue-50"></div>
        </div>
        <p className="text-slate-600 font-semibold text-sm mt-4 tracking-wide">Loading admission details...</p>
      </div>
    </main>
  );
}

function PageLoadError({ page, onRetry }) {
  return (
    <main className="react-page-fallback">
      <div className="text-center py-16 px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">{page?.name || 'Page'} Content Notice</h1>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          We encountered an issue opening this page content. Please try again.
        </p>
        <button
          type="button"
          className="px-6 py-2.5 bg-[#0966c2] hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
          onClick={onRetry}
        >
          Reload Page
        </button>
      </div>
    </main>
  );
}

function HomeFallback({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <main className="react-page-fallback">
        <h1>Page not available yet</h1>
        <p>This page is not included in this website yet. Choose an available page below.</p>
        <div className="react-page-list">
          {pageList.map((page) => (
            <a
              key={page.slug}
              href={`/${page.slug}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(`/${page.slug}`);
              }}
            >
              {page.title || page.name}
            </a>
          ))}
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
      <ApplyModal />
      <CollegeDetailsModal />
      <CityCollegesModal />
    </>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(() => {
    return window.location.pathname + window.location.search || '/home';
  });
  const [navigationKey, setNavigationKey] = useState(0);
  const [pageModule, setPageModule] = useState(() => getCachedPageModule(pathname));
  const [pageLoadError, setPageLoadError] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const isNavigatingRef = useRef(false);

  const currentPageInfo = findPageInfoByPath(pathname);
  const pageLoader = findPageLoaderByPath(pathname);

  const navigate = useCallback((nextPath) => {
    const normalizedPath = normalizeRoute(nextPath);
    const currentFull = window.location.pathname + window.location.search;

    if (currentFull !== normalizedPath) {
      window.history.pushState({}, '', normalizedPath);
    }

    const isCached = Boolean(getCachedPageModule(normalizedPath));
    if (!isCached) {
      setIsNavigating(true);
      isNavigatingRef.current = true;
    }

    setPathname(normalizedPath);
    setNavigationKey((key) => key + 1);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const current = window.location.pathname + window.location.search;
      setPathname(current);
      setNavigationKey((key) => key + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global hover/touch prefetching across ALL links on the page
  useEffect(() => {
    const handleGlobalPrefetch = (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && (href.startsWith('/') || href.startsWith('./'))) {
        prefetchPage(href);
      }
    };

    document.addEventListener('mouseover', handleGlobalPrefetch, { passive: true });
    document.addEventListener('touchstart', handleGlobalPrefetch, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleGlobalPrefetch);
      document.removeEventListener('touchstart', handleGlobalPrefetch);
    };
  }, []);

  // Background prefetching for all remaining pages during idle browser time
  useEffect(() => {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    const handle = idleCallback(() => {
      prefetchAllPages();
    });

    return () => {
      if (window.cancelIdleCallback && typeof handle === 'number') {
        window.cancelIdleCallback(handle);
      }
    };
  }, []);

  // Module loading effect with smooth transition state
  useEffect(() => {
    let isCurrent = true;
    const cached = getCachedPageModule(pathname);

    if (cached) {
      setPageModule(cached);
      setPageLoadError(null);
      setIsNavigating(false);
      isNavigatingRef.current = false;
      return () => {
        isCurrent = false;
      };
    }

    if (!pageLoader) {
      setPageModule(null);
      setPageLoadError(null);
      setIsNavigating(false);
      isNavigatingRef.current = false;
      return () => {
        isCurrent = false;
      };
    }

    setIsNavigating(true);
    isNavigatingRef.current = true;
    setPageLoadError(null);

    pageLoader()
      .then((module) => {
        if (!isCurrent) return;
        cachePageModule(pathname, module);
        setPageModule(module);
        setIsNavigating(false);
        isNavigatingRef.current = false;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      })
      .catch((error) => {
        if (!isCurrent) return;
        console.error('Failed to load page content', error);
        setPageLoadError(error);
        setIsNavigating(false);
        isNavigatingRef.current = false;
      });

    return () => {
      isCurrent = false;
    };
  }, [pageLoader, pathname, reloadKey]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (currentPageInfo?.title) {
      document.title = currentPageInfo.title;
    }
  }, [pathname, pageModule, currentPageInfo]);

  if (!pageLoader && !pageModule) {
    return <HomeFallback onNavigate={navigate} />;
  }

  const CurrentPage = pageModule?.default;

  return (
    <>
      <TopProgressBar isLoading={isNavigating} />
      <Navbar activeSlug={currentPageInfo?.slug} onNavigate={navigate} />
      <main className="converted-page-shell">
        {pageLoadError ? (
          <PageLoadError page={currentPageInfo} onRetry={() => setReloadKey((key) => key + 1)} />
        ) : CurrentPage ? (
          <div key={`${pathname}:${navigationKey}`} className="page-transition-enter">
            <CurrentPage onNavigate={navigate} />
          </div>
        ) : (
          <LoadingPage />
        )}
      </main>
      <Footer onNavigate={navigate} />
      <ApplyModal />
      <CollegeDetailsModal />
      <CityCollegesModal />
    </>
  );
}
