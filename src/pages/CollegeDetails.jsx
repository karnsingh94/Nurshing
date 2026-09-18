import CollegeImage from '../components/CollegeImage.jsx';
import CollegeLogo from '../components/CollegeLogo.jsx';
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

export default function CollegeDetails({ onNavigate }) {
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const parseCollegeFromUrl = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const queryId = searchParams.get('id');

      const pathParts = window.location.pathname.split('/').filter(Boolean);
      const pathId = pathParts.length >= 2 && pathParts[0] === 'college' ? decodeURIComponent(pathParts[1]) : '';

      const targetId = queryId || pathId;

      if (targetId) {
        let found = collegesData.find(c => String(c.id) === String(targetId));
        if (!found) {
          found = collegesData.find(c => c.name?.toLowerCase().includes(targetId.toLowerCase()) || targetId.toLowerCase().includes(c.name?.toLowerCase()));
        }
        if (found) return found;
      }

      return collegesData[0];
    };

    setCollege(parseCollegeFromUrl());
    window.scrollTo(0, 0);
  }, [window.location.search, window.location.pathname]);

  if (!college) return null;

  const handleApplyNow = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: college.name }
    }));
  };

  const stateFullName = stateMap[college.state] || college.stateName || college.state || '';
  const locationDisplay = [college.address || college.city, college.district, stateFullName].filter(Boolean).join(', ');

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 font-sans" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors bg-white px-4 py-2 rounded-xl shadow-2xs border border-gray-200"
        >
          ← Back to Colleges
        </button>

        {/* Main Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-150 p-6 sm:p-8 mb-6 overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-6 pb-6 border-b border-gray-100">
            <CollegeLogo
              college={college}
              size={96}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-md shrink-0 border-2 border-white"
            />
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 bg-red-50 text-red-600 font-extrabold text-xs rounded-full uppercase tracking-wider">
                  {college.sector || 'Government'}
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full uppercase tracking-wider">
                  {college.genderAcceptance || 'Co-ed'}
                </span>
                {college.code && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 font-bold text-xs rounded-full">
                    Code: {college.code}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                {college.name}
              </h1>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1.5">
                📍 {locationDisplay}
              </p>
            </div>
            <button
              type="button"
              onClick={handleApplyNow}
              className="w-full md:w-auto px-6 py-3.5 bg-[#e5383b] hover:bg-[#c92a37] text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all text-center shrink-0"
            >
              Apply For Admission 2026
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Total Seats</span>
              <span className="text-xl font-extrabold text-gray-900">{college.totalSeats || college.studentsCount || 'N/A'}</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Approved By</span>
              <span className="text-sm font-bold text-gray-800">{college.approvedBy || 'DGT / NCVT'}</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Programs</span>
              <span className="text-sm font-bold text-[#e5383b]">{college.coursesCount ? `${college.coursesCount} Trades Offered` : 'Certified CITS Courses'}</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Rating</span>
              <span className="text-sm font-bold text-amber-600">⭐ 4.6 / 5.0</span>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info Columns */}
          <div className="md:col-span-2 space-y-6">
            {/* Campus Address & Contact Info */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                🏛️ Institute Contact & Address Information
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 shrink-0">Address:</span>
                  <span>{college.address || `${college.city}, ${stateFullName}`}</span>
                </div>
                {college.contact && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 shrink-0">Phone:</span>
                    <a href={`tel:${college.contact}`} className="text-red-600 font-semibold hover:underline">{college.contact}</a>
                  </div>
                )}
                {college.email && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 shrink-0">Email:</span>
                    <a href={`mailto:${college.email}`} className="text-red-600 font-semibold hover:underline">{college.email}</a>
                  </div>
                )}
              </div>
            </div>

            {/* Seat Matrix Breakdown (if available) */}
            {college.seatMatrix && Object.keys(college.seatMatrix).length > 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150">
                <h2 className="text-lg font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  📊 Trade-Wise Seat Matrix (Actual Seat Allocations)
                </h2>
                <div className="divide-y divide-gray-100">
                  {Object.entries(college.seatMatrix).map(([trade, seats], i) => (
                    <div key={i} className="py-2.5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-800">{trade}</span>
                      <span className="px-3 py-1 bg-red-50 text-[#e5383b] font-extrabold text-xs rounded-lg">{seats} Seats</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Highlights */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150">
              <h2 className="text-base font-extrabold text-gray-900 mb-3">
                ✨ Campus Facilities
              </h2>
              <div className="flex flex-wrap gap-2">
                {(college.facilities || ['Library', 'Laboratory', 'Sports Ground', 'Hostel', 'Transport']).map((f, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl">
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-6 text-white text-center shadow-lg">
              <h3 className="text-lg font-extrabold mb-2">Need Guidance?</h3>
              <p className="text-xs text-red-100 mb-4">Get direct assistance on seat availability, admission dates, & trade eligibility.</p>
              <button
                type="button"
                onClick={handleApplyNow}
                className="w-full py-3 bg-white text-red-600 font-extrabold text-xs rounded-xl shadow-md hover:bg-red-50 transition-all uppercase tracking-wider"
              >
                Request Free Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
