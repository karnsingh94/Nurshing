import CollegeImage from '../components/CollegeImage.jsx';
import CollegeLogo from '../components/CollegeLogo.jsx';
import { useState, useEffect, useMemo, useRef } from 'react';
import { collegesData } from '../data/collegesData.js';

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
};

const cityAliases = {
  'bangalore': ['bangalore', 'bengaluru', 'bangalore urban'],
  'bengaluru': ['bangalore', 'bengaluru', 'bangalore urban'],
  'delhi': ['delhi', 'new delhi', 'north delhi', 'south delhi'],
  'new delhi': ['delhi', 'new delhi', 'north delhi', 'south delhi'],
  'mumbai': ['mumbai'],
  'chennai': ['chennai'],
  'kolkata': ['kolkata', 'howrah'],
  'hyderabad': ['hyderabad'],
  'pune': ['pune'],
  'jaipur': ['jaipur'],
  'panipat': ['panipat'],
};

const STATE_CITIES_MAP = {
  "Haryana": ["Ambala", "Sirsa", "Panipat", "Hisar", "Rohtak", "Gurugram", "Faridabad"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Dausa", "Chittorgarh", "Kota", "Udaipur", "Ajmer", "Bikaner", "Pilani"],
  "Telangana": ["Hyderabad", "Nizamabad", "Warangal", "Mancherial"],
  "Odisha": ["Jharsuguda", "Cuttack", "Bhubaneshwar", "Berhampur", "Rourkela"],
  "Punjab": ["Ludhiana", "Patiala", "Bathinda", "Hoshiarpur", "Jalandhar", "Amritsar", "Fazilka", "Mohali", "Phagwara"],
  "Maharashtra": ["Mumbai", "Nashik", "Pune", "Nagpur", "Aurangabad", "Amravati", "Nanded"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Noida", "Allahabad", "Bareilly", "Gorakhpur"],
  "Karnataka": ["Bengaluru", "Bangalore", "Davangere", "Honnavar", "Mandya"],
  "Himachal Pradesh": ["Mandi", "Solan", "Kangra", "Kullu", "Bilaspur", "Shimla"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "Delhi"],
  "Gujarat": ["Vadodara", "Ahmedabad", "Surat", "Rajkot"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
  "Kerala": ["Calicut", "Thiruvananthapuram", "Kochi"],
  "Jharkhand": ["Ranchi", "Latehar", "Jamshedpur", "Hazaribagh"],
  "Jammu & Kashmir": ["Kathua", "Anantnag", "Jammu", "Srinagar", "Badgam"],
  "Tripura": ["West Tripura", "Khumulwang", "Kamalpur"],
  "West Bengal": ["Kolkata", "Howrah"],
  "Meghalaya": ["Tura", "Shillong"],
  "Goa": ["Goa Velha", "Panaji"],
  "Tamil Nadu": ["Chennai", "Vellore", "Coimbatore", "Madurai", "Tiruchirappalli"]
};

const popularCities = [
  { name: 'Bangalore', image: 'https://media.getmyuni.com/assets/images/city-logos/bangalore-bengaluru.webp' },
  { name: 'Chennai', image: 'https://media.getmyuni.com/assets/images/city-logos/chennai.webp' },
  { name: 'Delhi', image: 'https://media.getmyuni.com/assets/images/city-logos/delhi.webp' },
  { name: 'Mumbai', image: 'https://media.getmyuni.com/assets/images/city-logos/mumbai.webp' },
  { name: 'Pune', image: 'https://media.getmyuni.com/assets/images/city-logos/pune.webp' },
  { name: 'Jaipur', image: 'https://media.getmyuni.com/assets/images/city-logos/jaipur.webp' },
  { name: 'Hyderabad', image: 'https://media.getmyuni.com/assets/images/city-logos/hyderabad.webp' },
  { name: 'Panipat', image: 'https://media.getmyuni.com/assets/images/city-logos/panipat.webp' },
];

export default function CityColleges({ onNavigate }) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStream, setSelectedStream] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sectorFilter, setSectorFilter] = useState('ALL');
  const [genderFilter, setGenderFilter] = useState('ALL');

  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const querySearch = searchParams.get('search') || searchParams.get('q') || '';
    const queryCity = searchParams.get('city') || '';
    const queryState = searchParams.get('state') || '';
    const queryCategory = searchParams.get('category') || searchParams.get('stream') || '';

    let pathCity = '';
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (pathParts.length >= 2 && pathParts[0] === 'city') {
      const rawCity = pathParts[1].replace(/-/g, ' ');
      pathCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
    }

    const pathSlug = (pathParts[0] || '').toLowerCase();
    const streamCandidate = queryCategory || pathSlug;
    if (['nursing', 'pharmacy', 'paramedical', 'yoga'].includes(streamCandidate.toLowerCase())) {
      setSelectedStream(streamCandidate.charAt(0).toUpperCase() + streamCandidate.slice(1).toLowerCase());
    } else {
      setSelectedStream('ALL');
    }

    const effectiveCity = queryCity || pathCity;

    setSearchQuery(querySearch);
    setSelectedCity(effectiveCity);

    if (queryState) {
      setSelectedState(queryState);
    } else if (effectiveCity) {
      let foundState = '';
      for (const [st, cities] of Object.entries(STATE_CITIES_MAP)) {
        if (cities.some(c => c.toLowerCase() === effectiveCity.toLowerCase())) {
          foundState = st;
          break;
        }
      }
      setSelectedState(foundState);
    } else {
      setSelectedState('');
    }

    window.scrollTo(0, 0);
  }, [window.location.search, window.location.pathname]);

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

      // 2. City Filter Check (Only checked when city is selected)
      if (selectedCity) {
        const cCity = (c.city || c.district || '').toLowerCase().trim();
        const cAddr = (c.address || '').toLowerCase().trim();
        const cName = (c.name || '').toLowerCase().trim();
        const reqCity = selectedCity.toLowerCase().trim();
        const aliasList = cityAliases[reqCity] || [reqCity];

        const matchesCity = aliasList.some(alias =>
          cCity.includes(alias) || alias.includes(cCity) ||
          cAddr.includes(` ${alias}`) || cAddr.endsWith(alias) ||
          cName.includes(`(${alias})`) || cName.includes(` ${alias}`)
        );
        if (!matchesCity) return false;
      }

      // 3. Search Query Check
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = (c.name || '').toLowerCase().includes(q) ||
          (c.city || '').toLowerCase().includes(q) ||
          (c.stateName || '').toLowerCase().includes(q) ||
          (c.sector || '').toLowerCase().includes(q) ||
          (c.summary || '').toLowerCase().includes(q) ||
          (c.courses || '').toLowerCase().includes(q) ||
          (c.stream || '').toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // 4. Sector & Gender Check
      if (sectorFilter !== 'ALL' && (c.sector || '').toUpperCase() !== sectorFilter.toUpperCase()) {
        return false;
      }
      if (genderFilter !== 'ALL' && !(c.genderAcceptance || '').toUpperCase().includes(genderFilter.toUpperCase())) {
        return false;
      }

      return true;
    });
  }, [selectedStream, selectedState, selectedCity, searchQuery, sectorFilter, genderFilter]);

  const handleApplyNow = (college) => {
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: college.name }
    }));
  };

  const handleViewDetails = (college) => {
    window.dispatchEvent(new CustomEvent('open-details-modal', {
      detail: { collegeId: college.id, collegeName: college.name }
    }));
  };

  const handleSwitchCity = (cityName) => {
    handleSelectCity(cityName);
    if (onNavigate) {
      onNavigate(`/city-colleges?city=${encodeURIComponent(cityName)}`);
    } else {
      window.history.pushState({}, '', `/city-colleges?city=${encodeURIComponent(cityName)}`);
      window.scrollTo(0, 0);
    }
  };

  const activeTargetLocation = selectedCity || selectedState || 'India';

  return (
    <div className="converted-page min-h-screen bg-[#f4f5f7] pb-16" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Hero Header Banner */}
      <div className="bg-[#0966c2] text-white pt-8 pb-12 px-4 sm:px-6 shadow-md">
        <div className="max-w-[1240px] mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-white/80 mb-3 flex items-center gap-2">
            <a 
              href="/home" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('/home'); }}
              className="hover:underline text-white/90"
            >
              Home
            </a>
            <span>›</span>
            <span>Colleges</span>
            {selectedState && (
              <>
                <span>›</span>
                <span>{selectedState}</span>
              </>
            )}
            {selectedCity && (
              <>
                <span>›</span>
                <span className="font-bold text-white">{selectedCity}</span>
              </>
            )}
          </nav>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Top {selectedStream !== 'ALL' ? `${selectedStream} ` : ''}Colleges in <span className="text-[#a5f3fc]">{activeTargetLocation}</span> 2026
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-3xl leading-relaxed mb-6">
            Find and compare top accredited colleges in {activeTargetLocation} with details on course fees, rankings, admission cut-offs, review ratings, and placement records.
          </p>

          {/* Search & Filter Bar Container */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder={`Search colleges in ${activeTargetLocation}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 text-sm font-medium placeholder-gray-400 border border-transparent focus:border-white outline-none shadow-sm"
                />
                <span className="absolute left-3.5 top-3.5 text-gray-400 text-base">🔍</span>
              </div>

              {/* Custom Filter Dropdowns: State -> City */}
              <div ref={dropdownRef} className="flex flex-wrap gap-2 w-full sm:w-auto relative">
                {/* Custom State Dropdown */}
                <div className="relative flex-1 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      setIsStateOpen(!isStateOpen);
                      setIsCityOpen(false);
                    }}
                    className="w-full min-w-[140px] px-4 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs border border-transparent outline-none cursor-pointer shadow-sm flex items-center justify-between gap-2"
                  >
                    <span className="truncate">{selectedState || 'Select State'}</span>
                    <span className="text-[10px] text-gray-500">▼</span>
                  </button>

                  {isStateOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-52 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 z-50 max-h-60 overflow-y-auto py-1">
                      <div
                        onClick={() => {
                          setSelectedState('');
                          setSelectedCity('');
                          setIsStateOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer font-bold text-xs text-gray-500 border-b border-gray-100"
                      >
                        Select State (All)
                      </div>
                      {Object.keys(STATE_CITIES_MAP).map((st) => (
                        <div
                          key={st}
                          onClick={() => {
                            setSelectedState(st);
                            setSelectedCity('');
                            setIsStateOpen(false);
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

                {/* Custom City Dropdown */}
                <div className="relative flex-1 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCityOpen(!isCityOpen);
                      setIsStateOpen(false);
                    }}
                    className="w-full min-w-[140px] px-4 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs border border-transparent outline-none cursor-pointer shadow-sm flex items-center justify-between gap-2"
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
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer font-bold text-xs text-gray-500 border-b border-gray-100"
                      >
                        Select City (All)
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
            <div className="w-full flex flex-wrap items-center gap-2 pt-3 border-t border-white/20">
              <span className="text-xs font-bold text-white/90 mr-1 uppercase tracking-wider">Stream:</span>
              {['ALL', 'Nursing', 'Pharmacy', 'Paramedical', 'Yoga'].map((stream) => (
                <button
                  key={stream}
                  type="button"
                  onClick={() => {
                    setSelectedStream(stream);
                    const searchParams = new URLSearchParams(window.location.search);
                    if (stream === 'ALL') {
                      searchParams.delete('category');
                      searchParams.delete('stream');
                    } else {
                      searchParams.set('category', stream);
                    }
                    const newSearch = searchParams.toString();
                    const newUrl = `${window.location.pathname}${newSearch ? `?${newSearch}` : ''}`;
                    window.history.replaceState({}, '', newUrl);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left / Main Colleges List */}
          <div className="w-full flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Showing {filteredColleges.length} {selectedStream !== 'ALL' ? `${selectedStream} ` : ''}Colleges {selectedCity ? `in ${selectedCity}` : selectedState ? `in ${selectedState}` : 'in India'}
              </h2>
              {(selectedState || selectedCity || searchQuery || selectedStream !== 'ALL') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedState('');
                    setSelectedCity('');
                    setSearchQuery('');
                    setSelectedStream('ALL');
                    const searchParams = new URLSearchParams(window.location.search);
                    searchParams.delete('category');
                    searchParams.delete('stream');
                    searchParams.delete('search');
                    searchParams.delete('city');
                    searchParams.delete('state');
                    const newSearch = searchParams.toString();
                    window.history.replaceState({}, '', `${window.location.pathname}${newSearch ? `?${newSearch}` : ''}`);
                  }}
                  className="text-xs font-bold text-[#e5383b] hover:underline cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Colleges Grid */}
            {filteredColleges.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xs border border-gray-200">
                <p className="text-lg font-semibold text-gray-700">No colleges match your search criteria</p>
                <p className="text-xs text-gray-400 mt-1">Try clearing your filters or searching for another term.</p>
              </div>
            ) : (
              <div className="searchedcollegeList space-y-4">
                {filteredColleges.map((item, index) => {
                  const stateName = stateMap[item.state] || item.state || '';
                  const locationStr = [item.city || item.district, stateName].filter(Boolean).join(', ');

                  return (
                    <div
                      className="college__card__new bg-white rounded-2xl p-5 border border-gray-200 shadow-xs hover:shadow-md transition-all"
                      key={item.id || index}
                    >
                      <div className="card__header__row flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="college__detail__grid flex items-start gap-4">
                          <CollegeLogo college={item}
                            size={64}
                            className="college__image rounded-xl shrink-0"
                          />
                          <div className="college__detail__row min-w-0">
                            <h2 className="college__name text-lg font-bold text-gray-900 hover:text-[#0966c2]">
                              <a href={`/college/${item.id}`} title={item.name}>
                                {item.name}
                              </a>
                            </h2>
                            <div className="detail__list__mobile flex flex-wrap items-center gap-2 mt-1.5 text-xs text-gray-500">
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-700 font-semibold rounded-md">
                                📍 {locationStr}
                              </span>
                              <span className="px-2 py-0.5 bg-red-50 text-red-600 font-bold rounded-md uppercase">
                                {item.sector || "Private"}
                              </span>
                              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold rounded-md uppercase">
                                {item.genderAcceptance || "Co-ed"}
                              </span>
                              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 font-bold rounded-md">
                                ⭐ 4.5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="summary-text my-3">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {`${item.name} is a leading ${item.sector || 'Private'} educational institute located in ${locationStr}. Code: ${item.code || 'N/A'}. Affiliated with ${item.affiliation || item.name}.`}
                        </p>
                      </div>

                      <div className="highlight__cta__row flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-gray-100">
                        <div className="highlights__grid flex flex-wrap gap-4 text-xs">
                          <div>
                            <span className="text-gray-400 font-semibold block">Courses</span>
                            <span className="font-bold text-gray-800">{item.coursesCount || 6}+ Programs</span>
                          </div>
                          <div>
                            <span className="text-gray-400 font-semibold block">Entrance</span>
                            <span className="font-bold text-gray-800">Neet / Merit</span>
                          </div>
                          <div>
                            <span className="text-gray-400 font-semibold block">Rating</span>
                            <span className="font-bold text-amber-600">4.5 / 5 ★</span>
                          </div>
                        </div>

                        <div className="cta__grid flex items-center gap-2.5 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={() => handleApplyNow(item)}
                            className="cta__div lead-cta-college-filter-2 apply-now-btn flex-1 sm:flex-none px-5 py-2.5 rounded-xl border-1.8 border-[#e5383b] text-[#e5383b] hover:bg-[#fff5f5] font-bold text-xs transition-all text-center"
                          >
                            Apply Now
                          </button>
                          <button
                            type="button"
                            onClick={() => handleViewDetails(item)}
                            className="cta__div lead-cta-college-filter-1 view-details-btn flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#e5383b] hover:bg-[#c92a37] text-white font-bold text-xs transition-all text-center shadow-2xs"
                          >
                            View College
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Sidebar: Popular Cities Navigation */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs">
              <h3 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                🏙️ Popular Cities
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {popularCities.map(city => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleSwitchCity(city.name)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                      selectedCity.toLowerCase() === city.name.toLowerCase()
                        ? 'bg-[#e5383b] text-white border-[#e5383b] shadow-xs'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200/80'
                    }`}
                  >
                    📍 {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Help / Counseling Card */}
            <div className="bg-gradient-to-br from-[#0966c2] to-[#04478a] text-white rounded-2xl p-6 shadow-md text-center">
              <span className="text-2xl mb-2 block">🎓</span>
              <h4 className="text-base font-bold mb-1">Need Admission Help?</h4>
              <p className="text-xs text-white/80 mb-4">Get free expert 1-on-1 counseling for top colleges in {selectedCity}.</p>
              <button
                type="button"
                onClick={() => handleApplyNow({ name: `General Counseling - ${selectedCity}` })}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-[#0966c2] font-extrabold text-xs shadow-sm hover:bg-gray-50 transition-all"
              >
                Talk to Admission Expert
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
