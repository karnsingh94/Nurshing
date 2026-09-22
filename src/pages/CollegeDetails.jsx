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
  'AS': 'Assam',
  'DL': 'Delhi',
  'CH': 'Chandigarh',
  'PY': 'Puducherry',
  'SK': 'Sikkim',
  'MN': 'Manipur',
  'NL': 'Nagaland',
  'AR': 'Arunachal Pradesh',
  'DN': 'Dadra and Nagar Haveli',
  'DD': 'Daman and Diu'
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
        let found = collegesData.find(c => String(c.id).toLowerCase() === String(targetId).toLowerCase());
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

  const stateFullName = college.stateName || stateMap[college.state] || college.state || '';
  const locationDisplay = [college.district || college.city || college.address, stateFullName].filter(Boolean).join(', ');

  return (
    <div className="min-h-screen bg-slate-50/60 py-8 px-4 sm:px-6 lg:px-8 font-sans" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-slate-700 hover:text-[#0966c2] transition-colors bg-white px-4 py-2 rounded-xl shadow-xs border border-slate-200 cursor-pointer"
        >
          ← Back to Nursing Colleges
        </button>

        {/* Main Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 sm:p-8 mb-6 overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-6 pb-6 border-b border-slate-100">
            <CollegeLogo
              college={college}
              size={96}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-md shrink-0 border-2 border-white"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-3 py-1 bg-blue-50 text-[#0966c2] font-extrabold text-xs rounded-full uppercase tracking-wider border border-blue-100">
                  {college.stream || 'Nursing'}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-full uppercase tracking-wider">
                  {college.sector || 'Recognized Institute'}
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-100">
                  INC / State Council Approved
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {college.name}
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-2.5 flex items-center gap-1.5">
                📍 <span>{locationDisplay}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleApplyNow}
              className="w-full md:w-auto px-7 py-3.5 bg-[#0966c2] hover:bg-[#07519a] text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all text-center shrink-0 cursor-pointer"
            >
              Apply For Admission 2026
            </button>
          </div>

          {/* Quick Verified Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">State / UT</span>
              <span className="text-base font-extrabold text-slate-900">{stateFullName || 'India'}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">District / Location</span>
              <span className="text-base font-extrabold text-slate-900">{college.district || college.city || 'District Headquarters'}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Target Stream</span>
              <span className="text-base font-extrabold text-[#0966c2]">Nursing Science</span>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info Columns */}
          <div className="md:col-span-2 space-y-6">
            {/* Institute Details / Location Information */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                🏛️ Institute Location & Record Details
              </h2>
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">Institution Name:</span>
                  <span className="font-semibold text-slate-800">{college.name}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">District / Location:</span>
                  <span>{college.district || college.city || 'Location available in counseling brochure'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">State / Territory:</span>
                  <span>{stateFullName}</span>
                </div>
                {college.details && college.details.trim() && (
                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 shrink-0">Official Address Note:</span>
                    <span className="text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex-1">{college.details}</span>
                  </div>
                )}
                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-900 shrink-0">Regulatory Recognition:</span>
                  <span className="text-emerald-700 font-semibold">Indian Nursing Council (INC) & Respective State Nursing Registration Board</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">Eligible Courses:</span>
                  <span className="text-slate-700">B.Sc Nursing, General Nursing & Midwifery (GNM), Auxiliary Nurse Midwife (ANM), Post Basic B.Sc & M.Sc Nursing</span>
                </div>
              </div>
            </div>

            {/* Admission Counseling Assistance Card */}
            <div className="bg-blue-50/60 rounded-3xl p-6 border border-blue-100">
              <h3 className="text-base font-extrabold text-[#0966c2] mb-2">
                🎓 2026 Nursing Admission Guidelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Admissions for this institution are conducted based on merit in 10+2 (Physics, Chemistry, Biology & English) or state/national level nursing entrance examinations. Counseling choice filling and seat allotment support is provided through citsAdmission.
              </p>
              <button
                type="button"
                onClick={handleApplyNow}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0966c2] hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Inquire For This College
              </button>
            </div>
          </div>

          {/* Sidebar Highlights */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <h2 className="text-base font-extrabold text-slate-900 mb-3">
                ✨ Campus & Clinical Facilities
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Clinical Hospital Training', 'Anatomy & Nursing Labs', 'Modern Library', 'Hostel Facility', 'Transport Support'].map((f, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl">
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0966c2] to-blue-800 rounded-3xl p-6 text-white text-center shadow-lg">
              <h3 className="text-lg font-extrabold mb-2">Need Admission Help?</h3>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                Connect with our certified academic advisors for cut-off evaluation, fee verification, and application assistance.
              </p>
              <button
                type="button"
                onClick={handleApplyNow}
                className="w-full py-3 bg-white text-[#0966c2] font-extrabold text-xs rounded-xl shadow-md hover:bg-blue-50 transition-all uppercase tracking-wider cursor-pointer"
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

