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

export default function CollegeDetailsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const handleOpenDetails = (event) => {
      const detail = event.detail || {};
      const targetId = detail.collegeId;
      const targetName = detail.collegeName || '';

      let found = null;
      if (targetId) {
        found = collegesData.find(c => String(c.id) === String(targetId));
      }
      if (!found && targetName) {
        found = collegesData.find(c => c.name?.toLowerCase().includes(targetName.toLowerCase()) || targetName.toLowerCase().includes(c.name?.toLowerCase()));
      }

      if (!found) {
        // Fallback fallback detail object if not in dataset
        found = {
          name: targetName || 'College Information',
          code: 'COL-INFO',
          sector: 'Private',
          genderAcceptance: 'Co-ed',
          state: detail.state || '',
          city: detail.city || '',
          address: detail.location || 'Location details available on request',
          affiliation: targetName || 'Recognized Institute',
          coursesCount: 4,
          facilities: ['Library', 'Laboratory', 'Sports Ground', 'Hostel', 'Transport'],
          thumbnail: null
        };
      }

      setCollege(found);
      setIsOpen(true);
    };

    window.addEventListener('open-details-modal', handleOpenDetails);

    // Global listener for "View College" / "View Details" / "Download Brochure" buttons
    const handleGlobalClick = (e) => {
      const target = e.target.closest('.view-details-btn, [data-title="View Details"], [data-title="View College"], [data-title="Download Brochure"], .lead-cta-college-filter-1');
      if (target) {
        // Avoid intercepting if it's the Apply Now button
        const text = (target.textContent || target.getAttribute('data-title') || '').toLowerCase();
        if (text.includes('apply') && !text.includes('view')) return;

        e.preventDefault();
        e.stopPropagation();

        const card = target.closest('.college__card__new, .displayCard, .collegeCard, .dataCard');
        const collegeId = target.getAttribute('data-college-id') || '';
        const collegeName = target.getAttribute('data-description') ||
          card?.querySelector('.college__name a, .widgetCardHeading, h2, h3')?.textContent?.trim() || '';

        window.dispatchEvent(new CustomEvent('open-details-modal', {
          detail: { collegeId, collegeName }
        }));
      }
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('open-details-modal', handleOpenDetails);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  if (!isOpen || !college) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApplyNow = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: college.name }
    }));
  };

  const stateFullName = stateMap[college.state] || college.state || '';
  const locationDisplay = [college.address || college.city, college.district, stateFullName].filter(Boolean).join(', ');

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-[620px] bg-white rounded-[24px] shadow-2xl p-6 sm:p-8 transform transition-all overflow-hidden border border-gray-100 max-h-[90vh] overflow-y-auto modal-no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 pb-5 border-b border-gray-100">
          <CollegeLogo college={college} size={72}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-sm shrink-0" />

          <div className="flex-1 pr-6">
            <div className="flex flex-wrap gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-blue-50 text-[#0966c2] font-bold text-[11px] rounded-full uppercase tracking-wider">
                {college.sector || 'Private'}
              </span>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[11px] rounded-full uppercase tracking-wider">
                {college.genderAcceptance || 'Co-ed'}
              </span>
              {college.code && (
                <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 font-semibold text-[11px] rounded-full">
                  Code: {college.code}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
              {college.name}
            </h2>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              📍 {locationDisplay}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                Affiliation / University
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {college.affiliation || college.name}
              </span>
            </div>

            <div className="p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                Courses Offered
              </span>
              <span className="text-sm font-semibold text-[#0966c2]">
                {college.coursesCount ? `${college.coursesCount}+ Accredited Programs` : 'B.Sc, GNM, ANM, B.Pharm & More'}
              </span>
            </div>

            <div className="p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                Approved By / Recognitions
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {college.approvedBy || 'INC, PCI & Govt. Approved'}
              </span>
            </div>

            <div className="p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                Overall Rating
              </span>
              <span className="text-sm font-bold text-amber-600 flex items-center gap-1">
                ⭐ 4.5 / 5 (Student Reviews)
              </span>
            </div>
          </div>

          {/* Full Address */}
          {college.address && (
            <div className="p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                Campus Location
              </span>
              <p className="text-xs text-gray-700 leading-relaxed">
                {college.address}
              </p>
            </div>
          )}

          {/* Key Campus Facilities */}
          <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-100/70">
            <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-2">
              Campus Facilities & Highlights
            </span>
            <div className="flex flex-wrap gap-2">
              {['Hostel Facility', 'Modern Labs', 'Central Library', 'Placement Cell', 'Sports Complex', 'Transport'].map((facility, i) => (
                <span key={i} className="px-3 py-1 bg-white text-gray-700 font-medium text-xs rounded-lg border border-gray-200/60 shadow-2xs flex items-center gap-1">
                  <span className="text-[#0966c2] font-bold">✓</span> {facility}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleApplyNow}
            className="flex-1 py-3.5 px-6 rounded-full bg-[#0966c2] hover:bg-[#07519a] active:bg-[#06427d] text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
          >
            Apply Now For Admission
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="py-3.5 px-6 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold text-sm transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
