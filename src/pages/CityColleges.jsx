import CollegeImage from '../components/CollegeImage.jsx';
import CollegeLogo from '../components/CollegeLogo.jsx';
import Pagination from '../components/Pagination.jsx';
import { useState, useEffect, useMemo, useRef } from 'react';
import { collegesData } from '../data/collegesData.js';
import { allowedLink } from '../linkPolicy.js';
import { getCollegeStreamRoute } from './Home.jsx';

const stateMap = {
  'HR': 'Haryana',
  'RJ': 'Rajasthan',
  'TG': 'Telangana',
  'OR': 'Odisha',
  'JK': 'Jammu & Kashmir',
  'KA': 'Karnataka',
  'BR': 'Bihar',
  'ML': 'Meghalaya',
  'UP': 'Uttar Pradesh',
  'PB': 'Punjab',
  'MH': 'Maharashtra',
  'WB': 'West Bengal',
  'TR': 'Tripura',
  'HP': 'Himachal Pradesh',
  'JH': 'Jharkhand',
  'CT': 'Chhattisgarh',
  'AP': 'Andhra Pradesh',
  'GJ': 'Gujarat',
  'GA': 'Goa',
  'TN': 'Tamil Nadu',
  'MP': 'Madhya Pradesh',
  'KL': 'Kerala',
  'UT': 'Uttarakhand',
  'DL': 'Delhi',
  'CH': 'Chandigarh',
  'PY': 'Puducherry',
  'AS': 'Assam'
};

const cityAliases = {
  'bangalore': ['bangalore', 'bengaluru', 'bangalore urban', 'bangalore rural'],
  'bengaluru': ['bangalore', 'bengaluru', 'bangalore urban', 'bangalore rural'],
  'delhi': ['delhi', 'new delhi', 'north delhi', 'south delhi', 'east delhi', 'west delhi'],
  'new delhi': ['delhi', 'new delhi', 'north delhi', 'south delhi', 'east delhi', 'west delhi'],
  'mumbai': ['mumbai', 'mumbai city', 'mumbai suburban', 'navi mumbai', 'thane'],
  'chennai': ['chennai', 'madras'],
  'kolkata': ['kolkata', 'howrah', 'calcutta'],
  'hyderabad': ['hyderabad', 'secunderabad', 'cyberabad'],
  'pune': ['pune', 'pimpri-chinchwad'],
  'jaipur': ['jaipur'],
  'panipat': ['panipat'],
  'chandigarh': ['chandigarh', 'mohali', 'panchkula'],
  'lucknow': ['lucknow'],
  'ahmedabad': ['ahmedabad', 'gandhinagar'],
  'kochi': ['kochi', 'cochin', 'ernakulam'],
  'patna': ['patna'],
  'ranchi': ['ranchi'],
  'bhopal': ['bhopal'],
  'indore': ['indore'],
  'dehradun': ['dehradun']
};

const STATE_CITIES_MAP = {
  "Haryana": ["Ambala", "Sirsa", "Panipat", "Hisar", "Rohtak", "Gurugram", "Faridabad"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Dausa", "Chittorgarh", "Kota", "Udaipur", "Ajmer", "Bikaner", "Pilani"],
  "Telangana": ["Hyderabad", "Nizamabad", "Warangal", "Mancherial"],
  "Odisha": ["Jharsuguda", "Cuttack", "Bhubaneshwar", "Berhampur", "Rourkela"],
  "Punjab": ["Ludhiana", "Patiala", "Bathinda", "Hoshiarpur", "Jalandhar", "Amritsar", "Fazilka", "Mohali", "Phagwara"],
  "Maharashtra": ["Mumbai", "Nashik", "Pune", "Nagpur", "Aurangabad", "Amravati", "Nanded"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Noida", "Allahabad", "Bareilly", "Gorakhpur"],
  "Karnataka": ["Bengaluru", "Bangalore", "Davangere", "Honnavar", "Mandya", "Mangalore", "Mysore", "Manipal"],
  "Himachal Pradesh": ["Mandi", "Solan", "Kangra", "Kullu", "Bilaspur", "Shimla"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "Delhi"],
  "Gujarat": ["Vadodara", "Ahmedabad", "Surat", "Rajkot"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
  "Kerala": ["Calicut", "Thiruvananthapuram", "Kochi", "Ernakulam"],
  "Jharkhand": ["Ranchi", "Latehar", "Jamshedpur", "Hazaribagh"],
  "Jammu & Kashmir": ["Kathua", "Anantnag", "Jammu", "Srinagar", "Badgam"],
  "Tripura": ["West Tripura", "Khumulwang", "Kamalpur"],
  "West Bengal": ["Kolkata", "Howrah"],
  "Meghalaya": ["Tura", "Shillong"],
  "Goa": ["Goa Velha", "Panaji"],
  "Tamil Nadu": ["Chennai", "Vellore", "Coimbatore", "Madurai", "Tiruchirappalli"],
  "Chandigarh": ["Chandigarh"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"]
};

const popularCities = [
  { name: 'Bangalore', image: 'https://media.getmyuni.com/assets/images/city-logos/bangalore-bengaluru.webp' },
  { name: 'Chennai', image: 'https://media.getmyuni.com/assets/images/city-logos/chennai.webp' },
  { name: 'Delhi', image: 'https://media.getmyuni.com/assets/images/city-logos/delhi.webp' },
  { name: 'Mumbai', image: 'https://media.getmyuni.com/assets/images/city-logos/mumbai.webp' },
  { name: 'Pune', image: 'https://media.getmyuni.com/assets/images/city-logos/pune.webp' },
  { name: 'Jaipur', image: 'https://media.getmyuni.com/assets/images/city-logos/jaipur.webp' },
  { name: 'Hyderabad', image: 'https://media.getmyuni.com/assets/images/city-logos/hyderabad.webp' },
  { name: 'Kolkata', image: 'https://media.getmyuni.com/assets/images/city-logos/kolkata.webp' },
  { name: 'Lucknow', image: 'https://media.getmyuni.com/assets/images/city-logos/lucknow.webp' },
  { name: 'Chandigarh', image: 'https://media.getmyuni.com/assets/images/city-logos/chandigarh.webp' }
];

const PAGE_SIZE = 20;

function getInitialFiltersFromUrl() {
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const querySearch = searchParams.get('search') || searchParams.get('q') || '';
  const queryCity = searchParams.get('city') || '';
  const queryState = searchParams.get('state') || '';
  const queryCategory = searchParams.get('category') || searchParams.get('stream') || '';

  let pathCity = '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const pathParts = pathname.split('/').filter(Boolean);
  if (pathParts.length >= 2 && pathParts[0] === 'city') {
    const rawCity = pathParts[1].replace(/-/g, ' ');
    pathCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
  }

  const pathSlug = (pathParts[0] || '').toLowerCase();
  const streamCandidate = queryCategory || pathSlug;
  let initialStream = 'ALL';
  if (['nursing', 'pharmacy', 'paramedical', 'yoga'].includes(streamCandidate.toLowerCase())) {
    initialStream = streamCandidate.charAt(0).toUpperCase() + streamCandidate.slice(1).toLowerCase();
  }

  const effectiveCity = queryCity || pathCity;
  let initialNextState = '';
  if (queryState) {
    initialNextState = queryState;
  } else if (effectiveCity) {
    for (const [st, cities] of Object.entries(STATE_CITIES_MAP)) {
      if (cities.some(c => c.toLowerCase() === effectiveCity.toLowerCase())) {
        initialNextState = st;
        break;
      }
    }
  }

  return {
    selectedState: initialNextState,
    selectedCity: effectiveCity,
    selectedStream: initialStream,
    searchQuery: querySearch
  };
}

export default function CityColleges({ onNavigate }) {
  const [selectedState, setSelectedState] = useState(() => getInitialFiltersFromUrl().selectedState);
  const [selectedCity, setSelectedCity] = useState(() => getInitialFiltersFromUrl().selectedCity);
  const [selectedStream, setSelectedStream] = useState(() => getInitialFiltersFromUrl().selectedStream);
  const [searchQuery, setSearchQuery] = useState(() => getInitialFiltersFromUrl().searchQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [sectorFilter, setSectorFilter] = useState('ALL');

  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sync with URL parameters dynamically
  useEffect(() => {
    const handleUrlSync = () => {
      const parsed = getInitialFiltersFromUrl();
      setSelectedState(parsed.selectedState);
      setSelectedCity(parsed.selectedCity);
      setSelectedStream(parsed.selectedStream);
      setSearchQuery(parsed.searchQuery);
      setCurrentPage(1);
    };

    handleUrlSync();
    window.addEventListener('popstate', handleUrlSync);
    return () => window.removeEventListener('popstate', handleUrlSync);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsStateOpen(false);
        setIsCityOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const availableCities = useMemo(() => {
    if (selectedState && STATE_CITIES_MAP[selectedState]) {
      return STATE_CITIES_MAP[selectedState];
    }
    const allCitiesSet = new Set();
    Object.values(STATE_CITIES_MAP).forEach(cities => {
      cities.forEach(c => allCitiesSet.add(c));
    });
    return Array.from(allCitiesSet).sort();
  }, [selectedState]);

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    setCurrentPage(1);
    if (cityName) {
      for (const [st, cities] of Object.entries(STATE_CITIES_MAP)) {
        if (cities.some(c => c.toLowerCase() === cityName.toLowerCase())) {
          setSelectedState(st);
          break;
        }
      }
    }
    setIsCityOpen(false);
  };

  const filteredColleges = useMemo(() => {
    return collegesData.filter(c => {
      // 0. Stream Filter Check (Nursing, Pharmacy, Paramedical, Yoga)
      if (selectedStream && selectedStream !== 'ALL') {
        const streamKey = selectedStream.toLowerCase();
        const cDataStr = `${c.name || ''} ${c.summary || ''} ${c.courses || ''} ${c.stream || ''}`.toLowerCase();
        let matchesStream = cDataStr.includes(streamKey);
        if (streamKey === 'paramedical') {
          matchesStream = matchesStream || cDataStr.includes('mlt') || cDataStr.includes('radiology') || cDataStr.includes('physiotherapy') || cDataStr.includes('bpt');
        } else if (streamKey === 'nursing') {
          matchesStream = matchesStream || cDataStr.includes('gnm') || cDataStr.includes('anm') || cDataStr.includes('nurse');
        } else if (streamKey === 'pharmacy') {
          matchesStream = matchesStream || cDataStr.includes('pharm') || cDataStr.includes('d.pharm') || cDataStr.includes('b.pharm');
        } else if (streamKey === 'yoga') {
          matchesStream = matchesStream || cDataStr.includes('naturopathy') || cDataStr.includes('bnys') || cDataStr.includes('yogic');
        }
        if (!matchesStream) return false;
      }

      // 1. State Filter Check
      if (selectedState) {
        const cState = (c.stateName || c.state || '').toLowerCase();
        const reqState = selectedState.toLowerCase();
        const matchesState = cState.includes(reqState) || reqState.includes(cState) || (stateMap[c.state] || '').toLowerCase() === reqState;
        if (!matchesState) return false;
      }

      // 2. City Filter Check (Strictly matches the college's district or city)
      if (selectedCity) {
        const cCity = (c.city || '').toLowerCase().trim().replace(/\s*\(location\)$/i, '');
        const cDistrict = (c.district || '').toLowerCase().trim().replace(/\s*\(location\)$/i, '');
        const reqCity = selectedCity.toLowerCase().trim();
        const aliasList = cityAliases[reqCity] || [reqCity];

        const matchesCity = aliasList.some(alias =>
          cDistrict === alias ||
          cCity === alias ||
          cDistrict.includes(alias) ||
          cCity.includes(alias)
        );
        if (!matchesCity) return false;
      }

      // 3. Search Query Check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = (c.name || '').toLowerCase().includes(q) ||
          (c.city || '').toLowerCase().includes(q) ||
          (c.district || '').toLowerCase().includes(q) ||
          (c.stateName || '').toLowerCase().includes(q) ||
          (c.sector || '').toLowerCase().includes(q) ||
          (c.summary || '').toLowerCase().includes(q) ||
          (c.courses || '').toLowerCase().includes(q) ||
          (c.stream || '').toLowerCase().includes(q) ||
          (c.details || '').toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // 4. Sector Filter Check
      if (sectorFilter !== 'ALL' && (c.sector || '').toUpperCase() !== sectorFilter.toUpperCase()) {
        return false;
      }

      return true;
    });
  }, [selectedStream, selectedState, selectedCity, searchQuery, sectorFilter]);

  const displayedColleges = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredColleges.slice(start, start + PAGE_SIZE);
  }, [filteredColleges, currentPage]);

  const handleApplyNow = (collegeName) => {
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: collegeName || 'College Admission' }
    }));
  };

  const handleSwitchCity = (cityName) => {
    handleSelectCity(cityName);
    const targetUrl = allowedLink(`/city-colleges?city=${encodeURIComponent(cityName)}`);
    if (onNavigate) {
      onNavigate(targetUrl);
    } else {
      window.history.pushState({}, '', targetUrl);
      window.scrollTo(0, 0);
    }
  };

  const handleResetFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSearchQuery('');
    setSelectedStream('ALL');
    setSectorFilter('ALL');
    setCurrentPage(1);
    const newUrl = window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const activeTargetLocation = selectedCity || selectedState || 'India';

  return (
    <div className="converted-page min-h-screen bg-[#f8fafc] pb-16 font-sans" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Hero Header Banner */}
      <div className="bg-[#0966c2] text-white pt-8 pb-10 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-white/80 mb-3 flex items-center gap-2">
            <a 
              href={allowedLink("/home")} 
              onClick={(e) => { 
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault(); 
                onNavigate?.(allowedLink("/home")); 
              }}
              className="hover:underline text-white/90 font-medium"
            >
              Home
            </a>
            <span>›</span>
            <span className="text-white/90">Colleges</span>
            {selectedState && (
              <>
                <span>›</span>
                <span className="text-white/90">{selectedState}</span>
              </>
            )}
            {selectedCity && (
              <>
                <span>›</span>
                <span className="font-bold text-white">{selectedCity}</span>
              </>
            )}
          </nav>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 leading-tight">
            Top {selectedStream !== 'ALL' ? `${selectedStream} ` : ''}Colleges in <span className="text-amber-300">{activeTargetLocation}</span> 2026
          </h1>
          <p className="text-xs sm:text-sm text-white/90 max-w-3xl leading-relaxed mb-6 font-medium">
            Explore verified colleges in {activeTargetLocation} across Nursing, Pharmacy, Paramedical, Yoga, and Medical streams with courses, seat matrix, rankings, and direct counseling admission guide.
          </p>

          {/* Search & Filter Bar Container */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder={`Search colleges in ${activeTargetLocation}...`}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 text-xs sm:text-sm font-medium placeholder-gray-400 border border-transparent focus:border-blue-400 outline-none shadow-xs"
                />
                <span className="absolute left-3.5 top-3.5 text-gray-400 text-sm select-none">🔍</span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xs font-bold w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Custom Filter Dropdowns: State -> City */}
              <div ref={dropdownRef} className="flex flex-wrap gap-2 w-full sm:w-auto relative">
                {/* State Dropdown */}
                <div className="relative flex-1 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      setIsStateOpen(!isStateOpen);
                      setIsCityOpen(false);
                    }}
                    className="w-full min-w-[140px] px-4 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs border border-transparent outline-none cursor-pointer shadow-xs flex items-center justify-between gap-2"
                  >
                    <span className="truncate">{selectedState || 'Select State'}</span>
                    <span className="text-[10px] text-gray-500">▼</span>
                  </button>

                  {isStateOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-56 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 z-50 max-h-60 overflow-y-auto py-1">
                      <div
                        onClick={() => {
                          setSelectedState('');
                          setSelectedCity('');
                          setIsStateOpen(false);
                          setCurrentPage(1);
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer font-bold text-xs text-gray-500 border-b border-gray-100"
                      >
                        All States
                      </div>
                      {Object.keys(STATE_CITIES_MAP).map((st) => (
                        <div
                          key={st}
                          onClick={() => {
                            setSelectedState(st);
                            setSelectedCity('');
                            setIsStateOpen(false);
                            setCurrentPage(1);
                          }}
                          className={`px-4 py-2.5 hover:bg-blue-50 cursor-pointer font-semibold text-xs ${
                            selectedState === st ? 'bg-blue-50 text-[#0966c2] font-bold' : 'text-gray-700'
                          }`}
                        >
                          {st}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* City Dropdown */}
                <div className="relative flex-1 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCityOpen(!isCityOpen);
                      setIsStateOpen(false);
                    }}
                    className="w-full min-w-[140px] px-4 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs border border-transparent outline-none cursor-pointer shadow-xs flex items-center justify-between gap-2"
                  >
                    <span className="truncate">{selectedCity || 'Select City'}</span>
                    <span className="text-[10px] text-gray-500">▼</span>
                  </button>

                  {isCityOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-56 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 z-50 max-h-60 overflow-y-auto py-1">
                      <div
                        onClick={() => {
                          setSelectedCity('');
                          setIsCityOpen(false);
                          setCurrentPage(1);
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer font-bold text-xs text-gray-500 border-b border-gray-100"
                      >
                        All Cities
                      </div>
                      {availableCities.map((ct) => (
                        <div
                          key={ct}
                          onClick={() => handleSelectCity(ct)}
                          className={`px-4 py-2.5 hover:bg-blue-50 cursor-pointer font-semibold text-xs ${
                            selectedCity === ct ? 'bg-blue-50 text-[#0966c2] font-bold' : 'text-gray-700'
                          }`}
                        >
                          {ct}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Stream Filter Pills (Nursing, Pharmacy, Paramedical, Yoga) */}
            <div className="w-full flex flex-wrap items-center gap-2 pt-2 border-t border-white/20">
              <span className="text-[11px] font-bold text-white/90 mr-1 uppercase tracking-wider">Stream:</span>
              {['ALL', 'Nursing', 'Pharmacy', 'Paramedical', 'Yoga'].map((stream) => (
                <button
                  key={stream}
                  type="button"
                  onClick={() => {
                    setSelectedStream(stream);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedStream.toUpperCase() === stream.toUpperCase()
                      ? 'bg-white text-[#0966c2] shadow-md scale-105'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  {stream === 'ALL' ? 'All Streams' : stream}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Colleges List */}
          <div className="w-full flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-200">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Showing <span className="text-[#0966c2]">{filteredColleges.length}</span> {selectedStream !== 'ALL' ? `${selectedStream} ` : ''}Colleges {selectedCity ? `in ${selectedCity}` : selectedState ? `in ${selectedState}` : 'Across India'}
              </h2>
              {(selectedState || selectedCity || searchQuery || selectedStream !== 'ALL') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer self-start sm:self-auto"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Colleges Cards Grid */}
            {displayedColleges.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xs border border-slate-200/90">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-base font-bold text-slate-800 mb-1">No colleges found matching your filter</h3>
                <p className="text-xs text-slate-500 mb-4 max-w-md mx-auto">
                  Try clearing the search query or selecting a different city/state.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#0966c2] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#07519a] transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {displayedColleges.map((college) => {
                  const stateFullName = college.stateName || stateMap[college.state] || college.state || '';
                  const locationStr = [college.district || college.city || 'District', stateFullName].filter(Boolean).join(', ');
                  const targetCollegeRoute = allowedLink(`${getCollegeStreamRoute(college)}?search=${encodeURIComponent(college.name)}`);

                  return (
                    <div
                      key={college.id}
                      className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        {/* Left: Logo & Info */}
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <CollegeLogo
                            college={college}
                            size={56}
                            className="w-14 h-14 rounded-xl shadow-xs shrink-0 border border-slate-100 mt-1"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                              <span className="px-2.5 py-0.5 bg-blue-50 text-[#0966c2] font-bold text-[11px] rounded-full border border-blue-100 uppercase">
                                {college.stream || 'Healthcare'}
                              </span>
                              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[11px] rounded-full border border-emerald-100">
                                {college.approvedBy || 'Approved Institute'}
                              </span>
                              <span className="px-2 py-0.5 bg-amber-50 text-amber-800 font-extrabold text-[11px] rounded-full border border-amber-200">
                                ★ {college.rating || '4.5'}
                              </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#0966c2] transition-colors leading-snug">
                              <a
                                href={targetCollegeRoute}
                                onClick={(e) => {
                                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                                  if (onNavigate) {
                                    e.preventDefault();
                                    onNavigate(targetCollegeRoute);
                                  }
                                }}
                              >
                                {college.name}
                              </a>
                            </h3>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 font-medium">
                              <span className="flex items-center gap-1">
                                📍 <strong className="text-slate-700 font-semibold">{college.district || college.city || 'District'}</strong>, {stateFullName}
                              </span>
                              <span className="flex items-center gap-1">
                                🎓 <strong className="text-slate-700 font-semibold">{college.courses || 'Degree & Diploma Programs'}</strong>
                              </span>
                            </div>

                            {college.details && (
                              <div className="mt-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                                <span className="font-bold text-slate-700">Official Details: </span>
                                {college.details}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right: Action Buttons */}
                        <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                          <button
                            type="button"
                            onClick={() => handleApplyNow(college.name)}
                            className="flex-1 sm:flex-none w-full px-5 py-2.5 bg-[#0966c2] hover:bg-[#07519a] text-white text-xs font-bold rounded-xl shadow-xs transition-all text-center cursor-pointer"
                          >
                            Apply Now
                          </button>
                          <a
                            href={targetCollegeRoute}
                            onClick={(e) => {
                              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                              if (onNavigate) {
                                e.preventDefault();
                                onNavigate(targetCollegeRoute);
                              }
                            }}
                            className="flex-1 sm:flex-none w-full px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all text-center no-underline hover:no-underline cursor-pointer"
                            style={{ textDecoration: 'none' }}
                          >
                            View College
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              totalItems={filteredColleges.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Right Sidebar: Popular Cities Navigation */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <h3 className="text-sm font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                🏙️ Popular Cities in India
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {popularCities.map(city => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleSwitchCity(city.name)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                      selectedCity.toLowerCase() === city.name.toLowerCase()
                        ? 'bg-[#0966c2] text-white border-[#0966c2] shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80'
                    }`}
                  >
                    📍 {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Admission Counseling Card */}
            <div className="bg-gradient-to-br from-[#0966c2] to-blue-800 text-white rounded-2xl p-6 shadow-md text-center">
              <span className="text-3xl mb-2 block">🎓</span>
              <h4 className="text-base font-extrabold mb-1">Need Admission Help?</h4>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                Connect with our certified academic advisors for cut-off evaluation, fee verification, and choice filling in {activeTargetLocation}.
              </p>
              <button
                type="button"
                onClick={() => handleApplyNow(`General Counseling - ${activeTargetLocation}`)}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-[#0966c2] font-extrabold text-xs shadow-sm hover:bg-blue-50 transition-all uppercase tracking-wider cursor-pointer"
              >
                Request Free Callback
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
