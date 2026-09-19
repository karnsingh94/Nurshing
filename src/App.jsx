import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ApplyModal from './components/ApplyModal.jsx';
import CollegeDetailsModal from './components/CollegeDetailsModal.jsx';
import CityCollegesModal from './components/CityCollegesModal.jsx';
import { pageList, findPageInfoByPath, findPageLoaderByPath } from './pages/index.jsx';

function normalizeRoute(path) {
  if (!path || path === '/') return '/home';
  return path.startsWith('/') ? path : `/${path}`;
}

function LoadingPage() {
  return (
    <main className="react-page-fallback">
      <h1>Loading page</h1>
      <p>Please wait while the content opens.</p>
    </main>
  );
}

function PageLoadError({ page, onRetry }) {
  return (
    <main className="react-page-fallback">
      <h1>{page?.name || 'Page'} content could not open</h1>
      <p>The page content is available in React, but the browser could not load it on this try.</p>
      <button type="button" className="react-page-retry" onClick={onRetry}>
        Try again
      </button>
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
    if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
      window.history.replaceState({}, '', '/home');
      return '/home';
    }
    return window.location.pathname + window.location.search;
  });
  const [navigationKey, setNavigationKey] = useState(0);
  const [pageModule, setPageModule] = useState(null);
  const [pageLoadError, setPageLoadError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const currentPageInfo = findPageInfoByPath(pathname);
  const pageLoader = findPageLoaderByPath(pathname);

  const navigate = useCallback((nextPath) => {
    const normalizedPath = normalizeRoute(nextPath);

    if ((window.location.pathname + window.location.search) !== normalizedPath) {
      window.history.pushState({}, '', normalizedPath);
    }

    setPathname(normalizedPath);
    setNavigationKey(key => key + 1);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname + window.location.search);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    let isCurrent = true;

    if (!pageLoader) {
      setPageModule(null);
      setPageLoadError(null);
      return () => {
        isCurrent = false;
      };
    }

    setPageModule(null);
    setPageLoadError(null);
    pageLoader()
      .then((module) => {
        if (isCurrent) setPageModule(module);
      })
      .catch((error) => {
        if (!isCurrent) return;
        console.error('Failed to load page content', error);
        setPageLoadError(error);
      });

    return () => {
      isCurrent = false;
    };
  }, [pageLoader, reloadKey]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    if (currentPageInfo?.title) {
      document.title = currentPageInfo.title;
    }
  }, [pathname, pageModule, currentPageInfo]);

  if (!pageLoader) {
    return <HomeFallback onNavigate={navigate} />;
  }

  const CurrentPage = pageModule?.default;

  return (
    <>
      <Navbar activeSlug={currentPageInfo?.slug} onNavigate={navigate} />
      <main className="converted-page-shell">
        {pageLoadError ? (
          <PageLoadError page={currentPageInfo} onRetry={() => setReloadKey((key) => key + 1)} />
        ) : CurrentPage ? (
          <CurrentPage key={`${pathname}:${navigationKey}`} onNavigate={navigate} />
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
