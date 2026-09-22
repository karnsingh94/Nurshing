import CollegeImage from './CollegeImage.jsx';
import CollegeLogo from './CollegeLogo.jsx';
import { useState, useEffect } from 'react';
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

// Aliases for major Indian cities
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

export default function CityCollegesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [cityName, setCityName] = useState('');
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleOpenCity = (event) => {
      const detail = event.detail || {};
      const targetCity = detail.cityName || 'Top Colleges';
      setCityName(targetCity);
      setSearchQuery('');

      const normalizedQuery = targetCity.toLowerCase().trim();
      const aliasList = cityAliases[normalizedQuery] || [normalizedQuery];

      const matched = collegesData.filter(c => {
        const cCity = (c.city || '').toLowerCase().trim();
        const cDistrict = (c.district || '').toLowerCase().trim();
        const cAddr = (c.address || '').toLowerCase().trim();
        const cName = (c.name || '').toLowerCase().trim();

        return aliasList.some(alias =>
          cCity.includes(alias) || alias.includes(cCity) ||
          cDistrict === alias ||
          cAddr.includes(` ${alias}`) || cAddr.endsWith(alias) ||
          cName.includes(`(${alias})`) || cName.includes(` ${alias}`)
        );
      });

      setColleges(matched);
      setIsOpen(true);
    };

    window.addEventListener('open-city-modal', handleOpenCity);

    // Global click listener for city cards & city links -> Navigate to dedicated route
    const handleGlobalClick = (e) => {
      const card = e.target.closest('.sliderCard, [data-city], .cityCardLink, .cityName');
      if (card) {
        const extractedCity = card.getAttribute('data-city') ||
          card.querySelector('.cityName')?.textContent?.trim() ||
          card.textContent?.trim() || '';

        if (extractedCity) {
          e.preventDefault();
          e.stopPropagation();
          const targetUrl = `/city-colleges?city=${encodeURIComponent(extractedCity)}`;
          window.history.pushState({}, '', targetUrl);
          window.dispatchEvent(new Event('popstate'));
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('open-city-modal', handleOpenCity);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApplyNow = (college) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: college.name }
    }));
  };

  const handleViewDetails = (college) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('open-details-modal', {
      detail: { collegeId: college.id, collegeName: college.name }
    }));
  };

  const filteredColleges = colleges.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.city || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.sector || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-[840px] bg-white rounded-[28px] shadow-2xl p-6 sm:p-8 transform transition-all overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-left mb-5 pb-4 border-b border-gray-100 shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
            <div>
              <span className="inline-block px-3.5 py-0.5 bg-red-50 text-red-600 font-extrabold text-[11px] tracking-wider uppercase rounded-full mb-1">
                📍 CITY SEARCH RESULT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Top Colleges in <span className="text-[#e5383b]">{cityName}</span>
              </h2>
            </div>
            <span className="px-3.5 py-1 bg-gray-100 text-gray-700 font-bold text-xs rounded-full">
              {colleges.length} Colleges Available
            </span>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder={`Search colleges in ${cityName}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all"
            />
          </div>
        </div>

        {/* Colleges List Body */}
        <div className="overflow-y-auto pr-1 space-y-4 flex-1 modal-no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filteredColleges.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="text-lg font-semibold">No colleges found matching "{searchQuery}"</p>
              <p className="text-xs text-gray-400 mt-1">Try searching with a different name or clear your search.</p>
            </div>
          ) : (
            filteredColleges.map((item, index) => {
              const stateName = stateMap[item.state] || item.state || '';
              const locationStr = [item.city || item.district, stateName].filter(Boolean).join(', ');

              return (
                <div
                  key={item.id || index}
                  className="p-4 sm:p-5 rounded-2xl border border-gray-150 bg-white hover:border-red-200 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <CollegeLogo college={item}
                      size={60}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 font-bold text-[10px] rounded-md uppercase">
                          {item.sector || "Private"}
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[10px] rounded-md uppercase">
                          {item.genderAcceptance || "Co-ed"}
                        </span>
                        {item.code && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 font-semibold text-[10px] rounded-md">
                            Code: {item.code}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                        📍 {locationStr}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    <button
                      type="button"
                      onClick={() => handleApplyNow(item)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-xl border-1.8 border-[#e5383b] text-[#e5383b] hover:bg-[#fff5f5] font-bold text-xs transition-all text-center"
                    >
                      Apply Now
                    </button>
                    <button
                      type="button"
                      onClick={() => handleViewDetails(item)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#e5383b] hover:bg-[#c92a37] text-white font-bold text-xs transition-all text-center shadow-2xs"
                    >
                      View College
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
