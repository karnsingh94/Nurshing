import { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CollegeImage from '../components/CollegeImage.jsx';
import CollegeLogo from '../components/CollegeLogo.jsx';
import {
  collegesData,
  nursingCollegesData,
  pharmacyCollegesData,
  paramedicalCollegesData,
  yogaCollegesData
} from '../data/collegesData.js';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';
import { fetchMedicalNews, fallbackArticles } from '../services/newsApi.js';

export const page = {
  name: "Home",
  sourceFile: "home.html",
  slug: "home",
  title: "Career Sarathi - Explore Top Colleges, Courses, Fees and Exams",
  head: {
    "meta": [
      {
        "charset": "UTF-8"
      },
      {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge"
      },
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      },
      {
        "name": "theme-color",
        "content": "#545ebd"
      },
      {
        "name": "description",
        "content": "Explore top colleges, universities, courses, fee structures, cutoff predictor and exams across India on Career Sarathi"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Career Sarathi - Explore Top Colleges, Courses, Fees and Exams"
      },
      {
        "property": "og:url",
        "content": "/"
      },
      {
        "property": "og:site_name",
        "content": "Career Sarathi"
      },
      {
        "property": "og:description",
        "content": "Explore top colleges, universities, courses, fee structures, cutoff predictor and exams across India on Career Sarathi"
      },
      {
        "property": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "property": "twitter:site",
        "content": "Career Sarathi"
      },
      {
        "property": "twitter:creator",
        "content": "@careersarathi"
      },
      {
        "property": "twitter:url",
        "content": "/"
      },
      {
        "property": "twitter:title",
        "content": "Career Sarathi - Explore Top Colleges, Courses, Fees and Exams"
      },
      {
        "property": "twitter:description",
        "content": "Explore top colleges, universities, courses, fee structures, cutoff predictor and exams across India on Career Sarathi"
      },
      {
        "property": "og:image",
        "content": "/images/imported/69670b806b84500c.webp"
      },
      {
        "property": "twitter:image",
        "content": "/images/imported/69670b806b84500c.webp"
      }
    ],
    "links": [
      {
        "rel": "dns-prefetch",
        "href": "//www.googletagmanager.com"
      },
      {
        "rel": "preconnect",
        "href": "https://www.googletagmanager.com/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "//www.google-analytics.com"
      },
      {
        "rel": "preconnect",
        "href": "https://securepubads.g.doubleclick.net"
      },
      {
        "rel": "dns-prefetch",
        "href": "//www.google-analytics.com"
      },
      {
        "rel": "dns-prefetch",
        "href": "https://securepubads.g.doubleclick.net"
      },
      {
        "rel": "shortcut icon",
        "type": "image/png",
        "href": "/brand-logo.svg"
      },
      {
        "rel": "icon",
        "href": "/brand-logo.svg",
        "type": "image/x-icon"
      },
      {
        "rel": "stylesheet",
        "href": "/yas/css/version2/jquery-ui.min.css",
        "media": "print",
        "onload": "this.media='all'"
      },
      {
        "rel": "preconnect",
        "href": "https://a.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://b.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://c.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://d.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://c.amazon-adsystem.com",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://s.amazon-adsystem.com",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://btloader.com/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://api.btloader.com/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://cdn.confiant-integrations.net",
        "crossorigin": ""
      },
      {
        "rel": "stylesheet",
        "href": "https://a.pub.network/getmyuni-com/cls.css"
      },
      {
        "href": "/site/index",
        "rel": "canonical"
      },
      {
        "href": "/yas/css/version2/min/style.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/lead_form_v4.css?v=1777964298",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/header.css?v=1777964298",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/search.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/home_new.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdnjs.cloudflare.com/ajax/libs/jqvmap/1.5.1/jqvmap.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",
        "rel": "stylesheet"
      }
    ],
    "styles": [

    ]
  },
};

// Commented out old sample dummy data as requested (Only using Nursing, Pharmacy, Yoga, Paramedical datasets)
/*
const sampleColleges = [
  { id: '1', name: 'IIT Bombay - Indian Institute of Technology', city: 'Mumbai', state: 'Maharashtra', stream: 'Engineering', sector: 'Government', rating: '4.9', fee: '₹2.2L / Year' },
  { id: '2', name: 'IIT Delhi - Indian Institute of Technology', city: 'New Delhi', state: 'Delhi', stream: 'Engineering', sector: 'Government', rating: '4.9', fee: '₹2.1L / Year' },
  { id: '3', name: 'IIT Madras - Indian Institute of Technology', city: 'Chennai', state: 'Tamil Nadu', stream: 'Engineering', sector: 'Government', rating: '4.9', fee: '₹2.0L / Year' },
  { id: '4', name: 'AIIMS New Delhi - All India Institute of Medical Sciences', city: 'New Delhi', state: 'Delhi', stream: 'Medical', sector: 'Government', rating: '4.9', fee: '₹1.6K / Year' },
  { id: '5', name: 'IIM Ahmedabad - Indian Institute of Management', city: 'Ahmedabad', state: 'Gujarat', stream: 'Management', sector: 'Government', rating: '4.9', fee: '₹25L (Total)' },
  { id: '6', name: 'VIT Vellore - Vellore Institute of Technology', city: 'Vellore', state: 'Tamil Nadu', stream: 'Engineering', sector: 'Private', rating: '4.6', fee: '₹1.9L / Year' },
  { id: '7', name: 'Chandigarh University (CU)', city: 'Mohali', state: 'Punjab', stream: 'Engineering', sector: 'Private', rating: '4.5', fee: '₹1.6L / Year' },
  { id: '8', name: 'Lovely Professional University (LPU)', city: 'Jalandhar', state: 'Punjab', stream: 'Management', sector: 'Private', rating: '4.5', fee: '₹1.4L / Year' },
  { id: '9', name: 'BITS Pilani - Birla Institute of Technology and Science', city: 'Pilani', state: 'Rajasthan', stream: 'Engineering', sector: 'Private', rating: '4.8', fee: '₹4.5L / Year' },
  { id: '10', name: 'Manipal Academy of Higher Education (MAHE)', city: 'Manipal', state: 'Karnataka', stream: 'Medical', sector: 'Private', rating: '4.6', fee: '₹3.8L / Year' },
  { id: '11', name: 'CMC Vellore - Christian Medical College', city: 'Vellore', state: 'Tamil Nadu', stream: 'Medical', sector: 'Private', rating: '4.8', fee: '₹50K / Year' },
  { id: '12', name: 'NIFD National Institute of Fashion Design', city: 'Mumbai', state: 'Maharashtra', stream: 'Design', sector: 'Private', rating: '4.4', fee: '₹1.8L / Year' },
  { id: '13', name: 'IIM Bangalore - Indian Institute of Management', city: 'Bangalore', state: 'Karnataka', stream: 'Management', sector: 'Government', rating: '4.9', fee: '₹24L (Total)' },
  { id: '14', name: 'JIPMER Puducherry - Jawaharlal Institute of Postgraduate Medical Education', city: 'Puducherry', state: 'Puducherry', stream: 'Medical', sector: 'Government', rating: '4.8', fee: '₹12K / Year' },
  { id: '15', name: 'Jamia Millia Islamia, New Delhi', city: 'New Delhi', state: 'Delhi', stream: 'Arts & Science', sector: 'Government', rating: '4.6', fee: '₹15K / Year' }
];

const sampleCourses = [
  { id: 'c1', name: 'B.Tech Computer Science and Engineering (CSE)', stream: 'Engineering', duration: '4 Years', avgFee: '₹1.5L - ₹4.5L / Year', popularIn: 'IITs, NITs, VIT, CU, LPU' },
  { id: 'c2', name: 'MBA - Master of Business Administration', stream: 'Management', duration: '2 Years', avgFee: '₹3.0L - ₹12L / Year', popularIn: 'IIMs, XLRI, FMS, ISB, JIMS' },
  { id: 'c3', name: 'MBBS - Bachelor of Medicine and Bachelor of Surgery', stream: 'Medical', duration: '5.5 Years', avgFee: '₹50K - ₹15L / Year', popularIn: 'AIIMS, CMC, JIPMER, KGMU' },
  { id: 'c4', name: 'B.Pharm - Bachelor of Pharmacy', stream: 'Pharmacy', duration: '4 Years', avgFee: '₹80K - ₹2.5L / Year', popularIn: 'Jamia Hamdard, NIPER, BITS' },
  { id: 'c5', name: 'BCA - Bachelor of Computer Applications', stream: 'Computer Application', duration: '3 Years', avgFee: '₹60K - ₹1.8L / Year', popularIn: 'Christ Univ, Symbiosis, CU' },
  { id: 'c6', name: 'B.Arch - Bachelor of Architecture', stream: 'Architecture', duration: '5 Years', avgFee: '₹1.2L - ₹3.5L / Year', popularIn: 'SPA Delhi, IIT Roorkee, CEPT' },
  { id: 'c7', name: 'BA LLB (Hons) - Integrated Law', stream: 'Law', duration: '5 Years', avgFee: '₹1.5L - ₹4.0L / Year', popularIn: 'NLSIU Bangalore, NALSAR, WBNUJS' },
  { id: 'c8', name: 'B.Sc Nursing - Bachelor of Science in Nursing', stream: 'Paramedical', duration: '4 Years', avgFee: '₹40K - ₹1.5L / Year', popularIn: 'AIIMS, PGIMER, CMC Vellore' },
  { id: 'c9', name: 'B.Des - Bachelor of Design (UI/UX / Fashion)', stream: 'Design', duration: '4 Years', avgFee: '₹2.0L - ₹4.5L / Year', popularIn: 'NIFT, NID, Pearl Academy' },
  { id: 'c10', name: 'B.Com (Hons) - Bachelor of Commerce', stream: 'Commerce', duration: '3 Years', avgFee: '₹30K - ₹1.5L / Year', popularIn: 'SRCC Delhi, Loyola, St. Xaviers' }
];
*/

// Exact datasets from active routes: Nursing, Pharmacy, Yoga, Paramedical
const categoryCollegesData = [
  ...nursingCollegesData,
  ...pharmacyCollegesData,
  ...paramedicalCollegesData,
  ...yogaCollegesData
];

const categoryCoursesData = [
  { id: 'nc1', name: 'B.Sc Nursing - Bachelor of Science in Nursing', stream: 'Nursing', duration: '4 Years', avgFee: '₹40K - ₹1.5L / Year', popularIn: 'Nursing Colleges' },
  { id: 'nc2', name: 'General Nursing & Midwifery (GNM)', stream: 'Nursing', duration: '3 Years', avgFee: '₹30K - ₹1.2L / Year', popularIn: 'Nursing Institutes' },
  { id: 'nc3', name: 'Auxiliary Nurse Midwife (ANM)', stream: 'Nursing', duration: '2 Years', avgFee: '₹20K - ₹80K / Year', popularIn: 'Nursing Institutes' },
  { id: 'nc4', name: 'Post Basic B.Sc Nursing', stream: 'Nursing', duration: '2 Years', avgFee: '₹35K - ₹1.2L / Year', popularIn: 'Nursing Colleges' },
  { id: 'nc5', name: 'M.Sc Nursing', stream: 'Nursing', duration: '2 Years', avgFee: '₹50K - ₹2.0L / Year', popularIn: 'Nursing Colleges' },
  { id: 'pc1', name: 'Bachelor of Pharmacy (B.Pharm)', stream: 'Pharmacy', duration: '4 Years', avgFee: '₹60K - ₹2.5L / Year', popularIn: 'Pharmacy Colleges' },
  { id: 'pc2', name: 'Diploma in Pharmacy (D.Pharm)', stream: 'Pharmacy', duration: '2 Years', avgFee: '₹40K - ₹1.5L / Year', popularIn: 'Pharmacy Institutes' },
  { id: 'pc3', name: 'Doctor of Pharmacy (Pharm.D)', stream: 'Pharmacy', duration: '6 Years', avgFee: '₹1.0L - ₹3.5L / Year', popularIn: 'Pharmacy Colleges' },
  { id: 'pc4', name: 'Master of Pharmacy (M.Pharm)', stream: 'Pharmacy', duration: '2 Years', avgFee: '₹80K - ₹2.8L / Year', popularIn: 'Pharmacy Colleges' },
  { id: 'pm1', name: 'Bachelor of Medical Laboratory Technology (BMLT)', stream: 'Paramedical', duration: '3 Years', avgFee: '₹45K - ₹1.8L / Year', popularIn: 'Paramedical Colleges' },
  { id: 'pm2', name: 'Diploma in Medical Laboratory Technology (DMLT)', stream: 'Paramedical', duration: '2 Years', avgFee: '₹30K - ₹1.2L / Year', popularIn: 'Paramedical Institutes' },
  { id: 'pm3', name: 'Bachelor of Physiotherapy (BPT)', stream: 'Paramedical', duration: '4.5 Years', avgFee: '₹50K - ₹2.2L / Year', popularIn: 'Paramedical Colleges' },
  { id: 'pm4', name: 'B.Sc Operation Theatre Technology (OTT)', stream: 'Paramedical', duration: '3 Years', avgFee: '₹40K - ₹1.6L / Year', popularIn: 'Paramedical Colleges' },
  { id: 'yg1', name: 'Bachelor of Naturopathy & Yogic Sciences (BNYS)', stream: 'Yoga', duration: '5.5 Years', avgFee: '₹50K - ₹2.0L / Year', popularIn: 'Yoga & Naturopathy Colleges' },
  { id: 'yg2', name: 'B.Sc Yogic Science / Yoga Therapy', stream: 'Yoga', duration: '3 Years', avgFee: '₹30K - ₹1.2L / Year', popularIn: 'Yoga Institutes' },
  { id: 'yg3', name: 'Diploma in Yoga Science (DYSc)', stream: 'Yoga', duration: '1 Year', avgFee: '₹15K - ₹60K / Year', popularIn: 'Yoga Institutes' }
];

function HomeContent({ onNavigate }) {
  const [activeSearchTab, setActiveSearchTab] = useState('colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newsArticles, setNewsArticles] = useState(fallbackArticles);
  const featuredSliderRef = useRef(null);
  const isHoveredRef = useRef(false);
  const modalInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    fetchMedicalNews().then((articles) => {
      if (articles && articles.length > 0) {
        setNewsArticles(articles);
      }
    });
  }, []);

  // Prevent ANY page scroll jump when Search Popup Modal opens
  useEffect(() => {
    if (isPopupOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const timer = setTimeout(() => {
        if (modalInputRef.current) {
          modalInputRef.current.focus({ preventScroll: true });
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isPopupOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (featuredSliderRef.current && !isHoveredRef.current) {
        const el = featuredSliderRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScrollLeft - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const allColleges = useMemo(() => {
    return categoryCollegesData.map((c) => ({
      id: c.id,
      name: c.name,
      city: c.district || c.city || 'District',
      state: c.stateName || c.state || '',
      stream: c.stream || 'Nursing / Pharmacy / Yoga / Paramedical',
      sector: c.approvedBy || c.sector || 'Recognized',
      rating: c.rating || '4.5',
      fee: c.fee || c.avgFee || '₹1.5L / Year',
      courses: c.courses || '',
      details: c.details || ''
    }));
  }, []);

  const matchingColleges = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allColleges.slice(0, 16);
    const keywords = q.split(/\s+/).filter(Boolean);
    return allColleges.filter((item) => {
      const targetText = `${item.name} ${item.city} ${item.state} ${item.stream} ${item.courses} ${item.details}`.toLowerCase();
      return keywords.every(kw => targetText.includes(kw));
    }).slice(0, 50);
  }, [searchQuery, allColleges]);

  const matchingCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categoryCoursesData.slice(0, 10);
    const keywords = q.split(/\s+/).filter(Boolean);
    return categoryCoursesData.filter((item) => {
      const targetText = `${item.name} ${item.stream} ${item.popularIn}`.toLowerCase();
      return keywords.every(kw => targetText.includes(kw));
    });
  }, [searchQuery]);

  const currentDisplayList = activeSearchTab === 'colleges' ? matchingColleges : matchingCourses;

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      {/* Search Results Popup Overlay (Portaled to Body for Zero Scroll Jump & Top Alignment) */}
      {isPopupOpen && createPortal(
        <div
          className="fixed inset-0 z-[999999] flex items-start justify-center pt-6 sm:pt-12 p-3 sm:p-5 bg-slate-950/65 backdrop-blur-md transition-all duration-200"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-gray-100 animate-in fade-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Live Search Input */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-4 bg-[#007f8c] text-white">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xl select-none">
                  {activeSearchTab === 'colleges' ? '🎓' : '📚'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {searchQuery.trim()
                      ? `Searching "${searchQuery}"`
                      : `Explore ${activeSearchTab === 'colleges' ? 'Colleges' : 'Courses'}`}
                  </h3>
                  <p className="text-xs text-white/80 font-medium mt-0.5">
                    {activeSearchTab === 'colleges' ? matchingColleges.length : matchingCourses.length} {activeSearchTab} found
                  </p>
                </div>
              </div>

              {/* Top Search Input inside Popup Header */}
              <div className="relative flex-1 max-w-md mx-2">
                <input
                  ref={modalInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeSearchTab === 'colleges' ? 'Colleges (e.g. AIIMS, Nursing, Pharmacy)...' : 'Courses (e.g. B.Sc Nursing, B.Pharm)...'}`}
                  className="w-full pl-9 pr-8 py-2 text-xs md:text-sm border border-white/20 rounded-full outline-none focus:bg-white focus:text-gray-900 bg-white text-gray-900 placeholder-gray-500 shadow-inner transition-all font-medium"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none">🔍</span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className="w-9 h-9 rounded-full bg-[#00636d] hover:bg-[#005159] flex items-center justify-center text-white text-lg font-bold transition-all cursor-pointer shrink-0 ml-auto md:ml-0"
                aria-label="Close search popup"
              >
                ✕
              </button>
            </div>

            {/* Modal Filter Tabs inside Popup */}
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-b border-gray-200/80">
              <button
                type="button"
                onClick={() => setActiveSearchTab('colleges')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeSearchTab === 'colleges'
                    ? 'bg-[#0d6efd] text-white shadow-sm'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🎓 Colleges ({matchingColleges.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveSearchTab('courses')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeSearchTab === 'courses'
                    ? 'bg-[#0d6efd] text-white shadow-sm'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                📚 Courses ({matchingCourses.length})
              </button>
            </div>

            {/* Modal Body / 2-Column Grid */}
            <div className="p-6 overflow-y-auto max-h-[62vh] bg-slate-50/50">
              {currentDisplayList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentDisplayList.map((item) => (
                    <div
                      key={item.id || item.name}
                      className="bg-white p-4.5 rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0966c2]/40 text-left"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-[#0966c2] transition-colors leading-snug">
                            {activeSearchTab === 'colleges' ? (
                              <a
                                href={allowedLink(`/college/${item.id}`)}
                                onClick={(e) => {
                                  setIsPopupOpen(false);
                                  if (onNavigate) {
                                    e.preventDefault();
                                    onNavigate(allowedLink(`/college/${item.id}`));
                                  }
                                }}
                              >
                                {item.name}
                              </a>
                            ) : (
                              item.name
                            )}
                          </h4>
                          {activeSearchTab === 'colleges' && (
                            <span className="shrink-0 text-[11px] font-extrabold text-amber-800 bg-amber-100/90 border border-amber-200/90 px-2 py-0.5 rounded-md flex items-center gap-0.5 shadow-2xs">
                              ★ {item.rating || '4.5'}
                            </span>
                          )}
                        </div>

                        {activeSearchTab === 'colleges' ? (
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
                            <span className="bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded">
                              📍 {item.city}{item.state ? `, ${item.state}` : ''}
                            </span>
                            {item.stream && (
                              <span className="bg-teal-50 text-teal-700 font-medium px-2 py-0.5 rounded">
                                🏷️ {item.stream}
                              </span>
                            )}
                            {item.sector && (
                              <span className="bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded">
                                🏛️ {item.sector}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
                            <span className="bg-teal-50 text-teal-700 font-medium px-2 py-0.5 rounded">
                              ⏱️ {item.duration}
                            </span>
                            <span className="bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded">
                              🏷️ Stream: {item.stream}
                            </span>
                            <span className="bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded">
                              💰 Fee: {item.avgFee}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500 truncate max-w-[200px]">
                          {activeSearchTab === 'colleges'
                            ? (item.courses ? `Courses: ${item.courses}` : 'Recognized')
                            : `Top: ${item.popularIn}`}
                        </span>

                        {activeSearchTab === 'colleges' ? (
                          <a
                            href={allowedLink(`/college/${item.id}`)}
                            onClick={(e) => {
                              setIsPopupOpen(false);
                              if (onNavigate) {
                                e.preventDefault();
                                onNavigate(allowedLink(`/college/${item.id}`));
                              }
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0966c2] hover:text-[#084e96] hover:underline cursor-pointer"
                          >
                            View College →
                          </a>
                        ) : (
                          <a
                            href={allowedLink(`/${(item.stream || 'nursing').toLowerCase().split(' ')[0]}`)}
                            onClick={(e) => {
                              setIsPopupOpen(false);
                              const st = (item.stream || '').toLowerCase();
                              const targetRoute = st.includes('pharmacy') ? '/pharmacy'
                                : st.includes('yoga') ? '/yoga'
                                : st.includes('paramedical') ? '/paramedical'
                                : '/nursing';
                              if (onNavigate) {
                                e.preventDefault();
                                onNavigate(allowedLink(targetRoute));
                              }
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0966c2] hover:text-[#084e96] hover:underline cursor-pointer"
                          >
                            Explore Colleges →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 px-4">
                  <div className="text-4xl mb-3">🔍</div>
                  <h4 className="text-base font-bold text-gray-800 mb-1">
                    No {activeSearchTab} found matching "{searchQuery}"
                  </h4>
                  <p className="text-xs text-gray-500 mb-4 max-w-md mx-auto">
                    Try searching with keywords like Nursing, Pharmacy, Jaipur, or AIIMS.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 bg-[#0966c2] text-white text-xs font-semibold rounded-lg shadow hover:bg-[#084e96] transition-all cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      <div className={"indexPage"}>
        <section className={"indexSection p-0"}>
          <div className={"carouselSection"}>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/69670b806b84500c.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Chandigarh University, Uttar Pradesh"} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about Chandigarh University, Uttar Pradesh"} rel={"nofollow"}>
                {"Chandigarh University, Uttar Pradesh"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/d12f408d72312ebd.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Parul University, Vadodara"} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about Parul University, Vadodara"} rel={"nofollow"}>
                {"Parul University, Vadodara"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/819f4fbbe542300f.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Lovely Professional University- LPU Jalandhar"} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about Lovely Professional University- LPU Jalandhar"} rel={"nofollow"}>
                {"Lovely Professional University- LPU Jalandhar"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/54ff4d90c55f7d73.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Indian Institute of Technology, [IIT] Guwahati "} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about Indian Institute of Technology, [IIT] Guwahati "}>
                {"Indian Institute of Technology, [IIT] Guwahati"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/da3ee65d3100f65f.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Galgotias University, Noida"} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about Galgotias University, Noida"} rel={"nofollow"}>
                {"Galgotias University, Noida"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/f93e5ff5f38453a0.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Indian Institute of Science, [IIS] Bangalore"} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about Indian Institute of Science, [IIS] Bangalore"}>
                {"Indian Institute of Science, [IIS] Bangalore"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/90d71934e6024c4c.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"IIM Lucknow - Indian Institute of Management"} decoding={"async"} fetchPriority={"high"} />
              <a className={"sliderName"} aria-label={"Read more about IIM Lucknow - Indian Institute of Management"}>
                {"IIM Lucknow - Indian Institute of Management"}
              </a>
            </div>
          </div>
          <div className={"bannerContent"}>
            <h1>
              {"Career Sarathi - Where Educational Choices Are Made Easy"}
            </h1>
            <div className={"searchSection"}>
              <div>
                <ul className={"bannerTabButtons"}>
                  <li
                    className={`tab-nav-link ${activeSearchTab === 'colleges' ? 'activeTab tabLink' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => { setActiveSearchTab('colleges'); setSearchQuery(''); }}
                  >
                    {"Colleges"}
                  </li>
                  <li
                    className={`tab-nav-link ${activeSearchTab === 'courses' ? 'activeTab tabLink' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => { setActiveSearchTab('courses'); setSearchQuery(''); }}
                  >
                    {"Courses"}
                  </li>
                </ul>
              </div>
              <div ref={searchContainerRef} className={"inputSection relative"}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsPopupOpen(true);
                  }}
                  className={"tab-content activeTab m-0"}
                >
                  <div className={"search-input-wrapper flex items-stretch w-full rounded-r-md rounded-bl-md shadow-lg bg-white overflow-hidden border border-slate-200"}>
                    <input
                      type={"text"}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (e.target.value.trim()) {
                          setIsPopupOpen(true);
                        }
                      }}
                      onFocus={() => {
                        if (searchQuery.trim()) {
                          setIsPopupOpen(true);
                        }
                      }}
                      placeholder={
                        activeSearchTab === 'colleges'
                          ? "Enter College Name, City or Stream (e.g. AIIMS, Nursing, Pharmacy)..."
                          : "Enter Course Name (e.g. B.Sc Nursing, B.Pharm, BNYS)..."
                      }
                      spellCheck={"false"}
                      className={"college-name-text-box foucus-search flex-1 text-slate-800 font-medium"}
                      autoComplete={"off"}
                    />
                    <button
                      type="submit"
                      className={"primaryBtn searchIcon-home"}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsPopupOpen(true);
                      }}
                    >
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly font-semibold text-white"}>
                        {"Search"}
                      </span>
                    </button>
                  </div>
                </form>
                <div className={"trending"}></div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection pb-4 sm:pb-6 w-full"}>
          <div className={"w-full px-3 sm:px-6 md:px-10"}>
            <div className="max-w-[1236px] mx-auto">
              <h2>
                {"Trending Now"}
              </h2>
            </div>
            <div className={"trendingTopicsList relative overflow-hidden py-3 bg-[#f3f4f6] rounded-xl border border-slate-200/80 my-3 w-full shadow-2xs"}>
              <div className={"trending-slider-track flex items-center whitespace-nowrap animate-trending-scroll hover:[animation-play-state:paused] gap-10 font-semibold text-[15px] text-[#0966c2]"}>
                {[
                  { text: "Top Nursing Colleges", link: "/nursing" },
                  { text: "Top Pharmacy Colleges", link: "/pharmacy" },
                  { text: "Top Paramedical Colleges", link: "/paramedical" },
                  { text: "Top Yoga Colleges", link: "/yoga" },
                  // Duplicated array for seamless infinite looping
                  { text: "Top Nursing Colleges", link: "/nursing" },
                  { text: "Top Pharmacy Colleges", link: "/pharmacy" },
                  { text: "Top Paramedical Colleges", link: "/paramedical" },
                  { text: "Top Yoga Colleges", link: "/yoga" },
                  { text: "Top Nursing Colleges", link: "/nursing" },
                  { text: "Top Pharmacy Colleges", link: "/pharmacy" },
                  { text: "Top Paramedical Colleges", link: "/paramedical" },
                  { text: "Top Yoga Colleges", link: "/yoga" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                      e.preventDefault();
                      onNavigate(item.link);
                    }}
                    className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg hover:bg-white/80 hover:shadow-xs hover:text-[#07519a] transition-all shrink-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0966c2] animate-pulse"></span>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-14 bg-[#fbf9f4] border-y border-[#ede7db]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              {"Featured Colleges"}
            </h2>
            <div className={"customSlider four-cardDisplay"} style={{ position: 'relative' }}>
              <button
                type="button"
                aria-label="Scroll left"
                className="featured-slider-arrow featured-slider-prev"
                onClick={() => {
                  const el = document.querySelector('.homeFeaturedCollege');
                  if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                className="featured-slider-arrow featured-slider-next"
                onClick={() => {
                  const el = document.querySelector('.homeFeaturedCollege');
                  if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div
                ref={featuredSliderRef}
                className={"customSliderCards homeFeaturedCollege"}
                onMouseEnter={() => { isHoveredRef.current = true; }}
                onMouseLeave={() => { isHoveredRef.current = false; }}
              >
                {collegesData.filter(item => item.sector === 'Government').slice(0, 16).map((item, index) => {
                  const stateName = { "HR": "Haryana", "RJ": "Rajasthan", "TG": "Telangana", "OR": "Odisha", "JK": "Jammu & Kashmir", "KA": "Karnataka", "BR": "Bihar", "ML": "Meghalaya", "UP": "Uttar Pradesh", "PB": "Punjab", "MH": "Maharashtra", "WB": "West Bengal", "TR": "Tripura", "HP": "Himachal Pradesh", "JH": "Jharkhand", "CT": "Chhattisgarh", "AP": "Andhra Pradesh", "GJ": "Gujarat", "GA": "Goa", "TN": "Tamil Nadu", "MP": "Madhya Pradesh", "KL": "Kerala", "UT": "Uttarakhand" }[item.state] || item.state || '';
                  const locationStr = `${item.city || item.district || ''}${(item.city || item.district) && stateName ? ', ' : ''}${stateName}`;
                  return (
                    <a className={"displayCard"} key={item.id || index} href={allowedLink(`/college/${item.id}`)}>
                      <figure>
                        <CollegeImage college={item}
                          loading={"lazy"}
                          alt={item.name}
                          width={"275"}
                          height={"206"}
                          style={{ objectFit: 'cover', height: '160px', width: '100%' }}
                        />
                      </figure>
                      <div className={"textDiv pt-0"}>
                        <CollegeLogo college={item} className={"collegeLogo"} size={56} />
                        <p className={"widgetCardHeading"}>
                          {item.name}
                        </p>
                        <p className={"subText"}>
                          <span className={"spriteIcon locationIcon"}></span>
                          {locationStr}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection pt-0"}>
          <div className={"container"}>
            <h2>
              {"Select Your Dream College In Your Desired City"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>

              <button
                type="button"
                aria-label="Scroll left"
                className="featured-slider-arrow featured-slider-prev"
                onClick={(e) => {
                  e.currentTarget.parentElement
                    .querySelector('.customSliderList')
                    ?.scrollBy({ left: -280, behavior: 'smooth' });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Scroll right"
                className="featured-slider-arrow featured-slider-next"
                onClick={(e) => {
                  e.currentTarget.parentElement
                    .querySelector('.customSliderList')
                    ?.scrollBy({ left: 280, behavior: 'smooth' });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className={"customSliderList"} style={{ scrollBehavior: 'smooth' }}>
                <a className={"sliderCard"} href="/city-colleges?city=Bangalore" data-city="Bangalore" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/046d9cf7e2d349b9.webp"} width={"276"} height={"207"} alt={"Bangalore"} />
                  <p className={"cityName"}>
                    {"Bangalore"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Chennai" data-city="Chennai" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/d1cbdd6277777130.webp"} width={"276"} height={"207"} alt={"Chennai"} />
                  <p className={"cityName"}>
                    {"Chennai"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Delhi" data-city="Delhi" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/116e4c7edefec305.webp"} width={"276"} height={"207"} alt={"Delhi"} />
                  <p className={"cityName"}>
                    {"Delhi"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Mumbai" data-city="Mumbai" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/7e5f71ce8f040395.webp"} width={"276"} height={"207"} alt={"Mumbai"} />
                  <p className={"cityName"}>
                    {"Mumbai"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Pune" data-city="Pune" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/90e00f695743c668.webp"} width={"276"} height={"207"} alt={"Pune"} />
                  <p className={"cityName"}>
                    {"Pune"}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Explore Colleges, Courses & Exams That Are Curated For You"}
            </h2>
            <div className={"collegesWithCategory"}>
              <ul>
                <li className={"tab-nav-link tabLink"} data-target={"#colleges-category"}>
                  {"Colleges"}
                </li>
                {/* <li className={"tab-nav-link"} data-target={"#exams-category"}>
                  {"Exams"}
                </li> */}
                <li className={"tab-nav-link"} data-target={"#courses-category"}>
                  {"Courses"}
                </li>
              </ul>
            </div>
            <div className={"collegesWithCategoryData"}>
              <div id={"colleges-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards"}>
                  {/* Active 4 Fields: Nursing, Pharmacy, Paramedical, Yoga */}
                  <a href={allowedLink("/nursing")} className={"dataCard"}>
                    <span title={"Nursing Colleges"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Nursing"}</p>
                      <p className={"count"}>{"48 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/pharmacy")} className={"dataCard"}>
                    <span title={"Pharmacy Colleges"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Pharmacy"}</p>
                      <p className={"count"}>{"40 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/paramedical")} className={"dataCard"}>
                    <span title={"Paramedical Colleges"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Paramedical"}</p>
                      <p className={"count"}>{"36 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/yoga")} className={"dataCard"}>
                    <span title={"Yoga Colleges"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Yoga"}</p>
                      <p className={"count"}>{"25 Colleges"}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id={"courses-category"} className={"tab-content"}>
                <div className={"row limitCards"}>
                  {/* Nursing Courses */}
                  <a href={allowedLink("/colleges?search=B.Sc.+Nursing")} className={"dataCard"}>
                    <span title={"B.Sc. Nursing"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"B.SC. NURSING"}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=Post+Basic+B.Sc+Nursing")} className={"dataCard"}>
                    <span title={"Post Basic B.Sc Nursing"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"POST BASIC B.SC NURSING"}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=GNM")} className={"dataCard"}>
                    <span title={"G.N.M."} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"G.N.M."}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=ANM")} className={"dataCard"}>
                    <span title={"A.N.M."} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"A.N.M."}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>

                  {/* Pharmacy Courses */}
                  <a href={allowedLink("/colleges?search=B.+Pharmacy")} className={"dataCard"}>
                    <span title={"B. Pharmacy"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"B. PHARMACY"}</p>
                      <p className={"count"}>{"Pharmacy Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=D.+Pharmacy")} className={"dataCard"}>
                    <span title={"D. Pharmacy"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"D. PHARMACY"}</p>
                      <p className={"count"}>{"Pharmacy Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=M.+Pharmacy")} className={"dataCard"}>
                    <span title={"M. Pharmacy"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"M. PHARMACY"}</p>
                      <p className={"count"}>{"Pharmacy Course"}</p>
                    </div>
                  </a>

                  {/* Paramedical Courses */}
                  <a href={allowedLink("/colleges?search=DMLT")} className={"dataCard"}>
                    <span title={"DMLT"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"DMLT"}</p>
                      <p className={"count"}>{"Paramedical Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=DRT")} className={"dataCard"}>
                    <span title={"DRT"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"DRT"}</p>
                      <p className={"count"}>{"Paramedical Course"}</p>
                    </div>
                  </a>

                  {/* Yoga Courses */}
                  <a href={allowedLink("/colleges?search=Yogic+Science")} className={"dataCard"}>
                    <span title={"B.Sc. in Yogic Science"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"B.SC. IN YOGIC SCIENCE"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=Diploma+in+Yoga")} className={"dataCard"}>
                    <span title={"Diploma in Yoga"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"DIPLOMA IN YOGA"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=PG+Diploma+in+Yoga")} className={"dataCard"}>
                    <span title={"PG Diploma in Yoga"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"PG DIPLOMA IN YOGA"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=Certificate+in+Yoga")} className={"dataCard"}>
                    <span title={"Certificate in Yoga"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"CERTIFICATE IN YOGA"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection articleIndexBox"}>
          <div className={"container"}>
            <div className={"articleRelataedLinks"}>
              <p className={"btn_left over"}>
                <i className={"spriteIcon left_angle"}></i>
              </p>
              <p className={"btn_right"}>
                <i className={"spriteIcon right_angle"}></i>
              </p>
              <ul>
                <li className={"homePageArticle active"}>
                  <a className={"activeLink"} data-tab={"nursing"} title={"Nursing"}>
                    {"Nursing"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"pharmacy"} title={"Pharmacy"}>
                    {"Pharmacy"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"paramedical"} title={"Paramedical"}>
                    {"Paramedical"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"yoga"} title={"Yoga"}>
                    {"Yoga"}
                  </a>
                </li>
              </ul>
            </div>
            <div className={"articleRelatedCtn"}>
              <div className={"quickLinks"}>
                <h2>
                  {"Recent Article"}
                </h2>
                <div className={"loader"} style={{ display: "none" }}>
                  <ul id={"recentArticleHome1"}>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul id={"recentArticleHome"}></ul>
              </div>
              <div className={"verticalLine"}></div>
              <div className={"quickLinks"}>
                <h2>
                  {"Popular Article"}
                </h2>
                <div className={"loader"} style={{ display: "none" }}>
                  <ul id={"popularArticleHome1"}>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul id={"popularArticleHome"}></ul>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection "}>
          <div className={"container"}>
            <h2>
              {"Trending Courses"}
            </h2>
            <div className={"trendingSliderWrapper"}>
              <button
                type="button"
                aria-label="Scroll left"
                className="trending-slider-arrow trending-slider-prev"
                onClick={() => {
                  const el = document.querySelector('.trendingBtnSection');
                  if (el) el.scrollBy({ left: -240, behavior: 'smooth' });
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>

              </button>
              <div className={"trendingBtnSection"}>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Sc Nursing"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"GNM Nursing"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"ANM Nursing"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Pharm"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"D.Pharm"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"Pharm.D"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Sc MLT"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"BPT Physiotherapy"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"BNYS Yoga"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Sc Yoga"}
                </button>
              </div>
              <button
                type="button"
                aria-label="Scroll right"
                className="trending-slider-arrow trending-slider-next"
                onClick={() => {
                  const el = document.querySelector('.trendingBtnSection');
                  if (el) el.scrollBy({ left: 240, behavior: 'smooth' });
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>


              </button>
            </div>
          </div>
          <div className={"container mt-5"}>
            <div className={"collegesWithCategoryData"}>
              <div id={"entity-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards trendingCourseCardList"}>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Nursing Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Nursing Syllabus & Fees"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Nursing Jobs & Career"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"GNM Nursing Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Pharm Admission & Cutoff"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Pharm Syllabus & Subjects"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"D.Pharm Course & Eligibility"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"Pharm.D Scope & Placements"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"Paramedical B.Sc MLT Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"BPT Physiotherapy Course"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Radiology & Imaging"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"OT Technology Diploma"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"BNYS Naturopathy & Yoga"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Yoga Course & Syllabus"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"Diploma in Yoga Therapy"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"M.Sc Nursing Specialization"}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Explore Scholarships"}
            </h2>
            <p className={"sectionSubheading"}>
              {"Search among 500+ government, and competitive entrance exams"}
            </p>
            <div className={"exploreScholorshipDiv row"}>
              <a title={"State Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon stateScholarships"}></i>
                <p>
                  {"State Wise Scholarships"}
                </p>
              </a>
              <a title={"Class Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon classScholarships"}></i>
                <p>
                  {"Class Wise Scholarships"}
                </p>
              </a>
              <a title={"Discipline Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon disciplineScholarships"}></i>
                <p>
                  {"Discipline Wise Scholarships"}
                </p>
              </a>
              <a title={"Course Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon courseScholarships"}></i>
                <p>
                  {"Course Wise Scholarships"}
                </p>
              </a>
              <a title={"Category Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon categoryScholarships"}></i>
                <p>
                  {"Category Wise Scholarships"}
                </p>
              </a>
              <a title={"Type Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon typeScholarships"}></i>
                <p>
                  {"Type Wise Scholarships"}
                </p>
              </a>
              <a title={"Gender Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon genderScholarships"}></i>
                <p>
                  {"Gender Wise Scholarships"}
                </p>
              </a>
              <a title={"Country Wise Scholarships"} className={"scholorshipCard"}>
                <i className={"spriteIcon countryScholarships"}></i>
                <p>
                  {"Country Wise Scholarships"}
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"} style={{ padding: '20px 0 10px 0' }}>
          <div className={"container"}>
            <h2 style={{ marginBottom: '14px' }}>
              {"Latest News"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <div className={"customSliderCards"}>
                {newsArticles.slice(0, 4).map((article, idx) => (
                  <a key={idx} className={"displayCard group block no-underline"} href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <figure style={{ overflow: 'hidden', height: '140px', background: '#e2e8f0', margin: 0 }}>
                      <img loading={"lazy"} src={article.urlToImage || "/images/imported/1bf1a0a37f7329b2.webp"} alt={article.title || "News"} className="transition-transform duration-300 group-hover:scale-105" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </figure>
                    <div className={"textDiv"} style={{ padding: '12px' }}>
                      <p className={"widgetCardHeading group-hover:text-[#0966c2] transition-colors"} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.5em', fontSize: '14px', fontWeight: '600', lineHeight: '1.3', textDecoration: 'none' }}>
                        {article.title}
                      </p>
                      <p className={"subText"} style={{ marginTop: '8px', color: '#64748b', fontSize: '12px', textDecoration: 'none' }}>
                        {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : (article.source?.name || 'Medical News')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"} style={{ padding: '10px 0 20px 0' }}>
          <div className={"container"}>
            <h2 style={{ marginBottom: '14px' }}>
              {"Latest Articles"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <div className={"customSliderCards"}>
                {(newsArticles.length > 4 ? newsArticles.slice(4, 10) : newsArticles).map((article, idx) => (
                  <div key={idx} className={"displayCard group flex flex-col justify-between"}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="no-underline block" style={{ textDecoration: 'none' }}>
                      <figure style={{ overflow: 'hidden', height: '140px', background: '#e2e8f0', margin: 0 }}>
                        <img loading={"lazy"} src={article.urlToImage || "/images/imported/702b915ebaadfeab.webp"} alt={article.title || "Article"} className="transition-transform duration-300 group-hover:scale-105" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </figure>
                      <div className={"textDiv"} style={{ padding: '12px' }}>
                        <p className={"widgetCardHeading group-hover:text-[#0966c2] transition-colors"} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.5em', fontSize: '14px', fontWeight: '600', lineHeight: '1.3', textDecoration: 'none' }}>
                          {article.title}
                        </p>
                      </div>
                    </a>
                    <a className={"authorName no-underline block hover:no-underline"} href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0 12px 12px 12px', textDecoration: 'none' }}>
                      <p className={"subText group-hover:text-[#0753a3] transition-colors"} style={{ color: '#0966c2', fontSize: '12px', fontWeight: '500', margin: 0, textDecoration: 'none' }}>
                        ✍️ {article.author || article.source?.name || "Healthcare Desk"}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className={"aboutUsSection"}>
          <div className={"container"}>
            <div className={"mobileOnly"}>
              <h2>
                {"Career Sarathi - Top Education Search Platform."}
              </h2>
              <p className={"sectionSubheading"}>
                {"Your dreams are valuable, let the experts guide to achieve them."}
              </p>
            </div>
            <div className={"row m-0"}>
              <div className={"col-md-6"}>
                <div className={"row m-0"}>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon reviewIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Reviews"}
                    </p>
                    <p className={"totalCount"}>
                      {"248,621"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon ratingIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Ratings"}
                    </p>
                    <p className={"totalCount"}>
                      {"59,829"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon collegeIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Colleges"}
                    </p>
                    <p className={"totalCount"}>
                      {"42,090"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon usersIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Users"}
                    </p>
                    <p className={"totalCount"}>
                      {"1,821,956"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon questionsIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Questions"}
                    </p>
                    <p className={"totalCount"}>
                      {"202"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon competitionsIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Competitions"}
                    </p>
                    <p className={"totalCount"}>
                      {"50+"}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-md-6"}>
                <img className={"websiteImg desktopOnly"} src={"/images/imported/e76db46cba7697ec.webp"} loading={"lazy"} alt={"img"} width={"660"} height={"450"} />
              </div>
            </div>
          </div>
        </div>
        <section className={"indexSection student-testimonial-section"}>
          <div className={"container"}>
            <h2>
              {"Our Students Say"}
            </h2>
            <div className={"customSlider student-testimonial"} style={{ position: 'relative' }}>
              <button
                type="button"
                aria-label="Scroll left"
                className="custom-slider-arrow custom-slider-prev"
                onClick={(e) => {
                  const cardContainer = e.currentTarget.parentElement.querySelector('.customSliderCards');
                  if (cardContainer) cardContainer.scrollBy({ left: -320, behavior: 'smooth' });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Scroll right"
                className="custom-slider-arrow custom-slider-next"
                onClick={(e) => {
                  const cardContainer = e.currentTarget.parentElement.querySelector('.customSliderCards');
                  if (cardContainer) cardContainer.scrollBy({ left: 320, behavior: 'smooth' });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div className={"customSliderCards"}>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Muskan Bebele"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Muskan Bebele"}
                  </span>
                  <p className={"subText"}>
                    {"B.Tech CSE,"}
                  </p>
                  <p className={"subText"}>
                    {"Sharda University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I am Muskan Babele from Jhansi, Uttar Pradesh. My experience at Sharda University, Greater Noida, in the B.Tech CSE course, is excellent. I got admission in June 2022. Thank you, Career Sarathi, for making my career better."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Liya Dominic"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Liya Dominic"}
                  </span>
                  <p className={"subText"}>
                    {"B.Des,"}
                  </p>
                  <p className={"subText"}>
                    {"Presidency University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"This portal has allowed me to enhance my design skills and enrich my knowledge. Presidency University has dependent teachers who make everyone thrilled about future classes. Thanks to Career Sarathi for assisting me."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Vikas"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Vikas"}
                  </span>
                  <p className={"subText"}>
                    {"UG,"}
                  </p>
                  <p className={"subText"}>
                    {"Sharda University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I am Vikash from Samastipur, Bihar. When I was connected with Career Sarathi for my future career in Computer Applications, they were more than happy to help me select the best college according to my financial preferences."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Gaurav Sanjay Kumavat"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Gaurav Sanjay Kumavat"}
                  </span>
                  <p className={"subText"}>
                    {"UG,"}
                  </p>
                  <p className={"subText"}>
                    {"NIMS"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"Career Sarathi helped me to find my dream university, and I am thankful to them. Parul University of technology, Gujarat, is among the best colleges for knowledge and learning. Career Sarathi's support team helped me a lot."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Ashish Patidar"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Ashish Patidar"}
                  </span>
                  <p className={"subText"}>
                    {"M. Sc,"}
                  </p>
                  <p className={"subText"}>
                    {"SAGE UNIVERSITY INDORE"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I am thankful for the assistance and guidance from Career Sarathi counsellors while choosing the best and budget-friendly college from the never-ending list of colleges."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Bhumika"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Bhumika"}
                  </span>
                  <p className={"subText"}>
                    {"B.Tech CSE,"}
                  </p>
                  <p className={"subText"}>
                    {"Lovely Professional University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"Career Sarathi provided the best academic assistance. Here, counsellors are very supportive and helpful. When I completed 12th, I was confused about my career, but I got proper guidance in every field, so my path was clearer."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/testimonials/student-avatar.svg"} alt={"Tanvi Sharma"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Tanvi Sharma"}
                  </span>
                  <p className={"subText"}>
                    {"PGDM,"}
                  </p>
                  <p className={"subText"}>
                    {"Lexicon Mile"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I got to know a lot about LEXICON MILE from Career Sarathi. The website provided information about campus placement, courses etc. I got a call from their consultant, which greatly helped me. Thank you."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-6 text-xl md:text-2xl font-bold text-slate-900">
              {"Career Sarathi in Media"}
            </h2>
            <div className={"featuredBrandWrapper"}>
              <div className={"featuredBrandTrack"}>
                {/* First Set of Media Cards */}
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-6 h-6 rounded bg-[#1f3a60] flex items-center justify-center text-white text-[10px] font-black border border-cyan-400">
                      TP
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-[#1f3a60] text-sm tracking-tight">Tropical</span>
                      <span className="font-bold text-cyan-500 text-sm tracking-tight">Post</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-3.5 py-1.5 rounded-xs flex flex-col items-center justify-center leading-none text-white shadow-2xs select-none">
                    <span className="font-black tracking-widest text-[11px] leading-tight uppercase">YOUR</span>
                    <span className="font-black tracking-wider text-[11px] leading-tight uppercase">STORY</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1 select-none">
                    <span className="font-black text-[#e50914] text-sm tracking-tighter">BW</span>
                    <span className="font-black text-slate-900 text-sm tracking-tight">DISRUPT</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-4 py-1.5 rounded-xs flex items-center justify-center shadow-2xs select-none">
                    <span className="font-serif font-black text-white text-xl tracking-tighter italic">ET</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="12" cy="12" r="2.5" />
                      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
                    </svg>
                    <span className="font-bold text-slate-900 text-sm tracking-tight">iam<span className="font-extrabold text-teal-600">wire</span></span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center select-none">
                    <span className="font-black text-slate-900 text-base tracking-tight">Inc</span>
                    <span className="font-black text-[#e50914] text-base tracking-tight">42</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-black shadow-2xs">
                      🐞
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-slate-900 text-xs tracking-tight">News</span>
                      <span className="font-bold text-rose-600 text-xs tracking-tight">Bugz</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#e50914]"></div>
                    <span className="font-black text-slate-900 text-[11px] tracking-wider uppercase">TECH IN ASIA</span>
                  </div>
                </div>

                {/* Duplicated set for seamless 100% infinite scroll animation */}
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-6 h-6 rounded bg-[#1f3a60] flex items-center justify-center text-white text-[10px] font-black border border-cyan-400">
                      TP
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-[#1f3a60] text-sm tracking-tight">Tropical</span>
                      <span className="font-bold text-cyan-500 text-sm tracking-tight">Post</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-3.5 py-1.5 rounded-xs flex flex-col items-center justify-center leading-none text-white shadow-2xs select-none">
                    <span className="font-black tracking-widest text-[11px] leading-tight uppercase">YOUR</span>
                    <span className="font-black tracking-wider text-[11px] leading-tight uppercase">STORY</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1 select-none">
                    <span className="font-black text-[#e50914] text-sm tracking-tighter">BW</span>
                    <span className="font-black text-slate-900 text-sm tracking-tight">DISRUPT</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-4 py-1.5 rounded-xs flex items-center justify-center shadow-2xs select-none">
                    <span className="font-serif font-black text-white text-xl tracking-tighter italic">ET</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="12" cy="12" r="2.5" />
                      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
                    </svg>
                    <span className="font-bold text-slate-900 text-sm tracking-tight">iam<span className="font-extrabold text-teal-600">wire</span></span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center select-none">
                    <span className="font-black text-slate-900 text-base tracking-tight">Inc</span>
                    <span className="font-black text-[#e50914] text-base tracking-tight">42</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-black shadow-2xs">
                      🐞
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-slate-900 text-xs tracking-tight">News</span>
                      <span className="font-bold text-rose-600 text-xs tracking-tight">Bugz</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#e50914]"></div>
                    <span className="font-black text-slate-900 text-[11px] tracking-wider uppercase">TECH IN ASIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <img src={"/yas/images/scroll_to_top.webp"} className={"scrollToTop"} loading={"lazy"} />
      <div id={"lead-form-js-new"} style={{ display: "none" }}></div>
      <div id={"login-form-js"} style={{ display: "none" }}></div>
      <div id={"fees-breakup"} style={{ display: "none" }}></div>
      <div className={"pageLoader"} id={"filter-loader"}>
        <div className={"pageLoaderDiv"}>
          <div className={"circle"}></div>
          <p className={"loadText"}>
            {"Loading..."}
          </p>
        </div>
      </div>
    </>
  );
}

export default function HomePage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <HomeContent onNavigate={onNavigate} />
    </PageRenderer>
  );
}
