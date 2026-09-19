import { useState, useEffect } from 'react';

const STATES_CITIES = {
  "Haryana": ["Panipat", "Hisar", "Ambala", "Rohtak", "Gurugram", "Faridabad"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Dausa", "Chittorgarh", "Kota", "Udaipur", "Ajmer", "Bikaner"],
  "Telangana": ["Hyderabad", "Nizamabad", "Warangal", "Mancherial"],
  "Odisha": ["Jharsuguda", "Cuttack", "Bhubaneshwar", "Berhampur", "Rourkela"],
  "Punjab": ["Ludhiana", "Patiala", "Bathinda", "Hoshiarpur", "Jalandhar", "Amritsar", "Fazilka"],
  "Maharashtra": ["Mumbai", "Nashik", "Pune", "Nagpur", "Aurangabad", "Amravati", "Nanded"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Noida", "Allahabad", "Bareilly", "Gorakhpur"],
  "Karnataka": ["Bengaluru", "Davangere", "Honnavar", "Mandya"],
  "Himachal Pradesh": ["Mandi", "Solan", "Kangra", "Kullu", "Bilaspur", "Shimla"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
  "Gujarat": ["Vadodara", "Ahmedabad", "Surat", "Rajkot"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
  "Kerala": ["Calicut", "Thiruvananthapuram", "Kochi"],
  "Jharkhand": ["Ranchi", "Latehar", "Jamshedpur", "Hazaribagh"],
  "Jammu & Kashmir": ["Kathua", "Anantnag", "Jammu", "Srinagar", "Badgam"],
  "Tripura": ["West Tripura", "Khumulwang", "Kamalpur"],
  "West Bengal": ["Kolkata", "Howrah"],
  "Meghalaya": ["Tura", "Shillong"],
  "Goa": ["Goa Velha", "Panaji"]
};

const COURSES = [
  "B.Sc Nursing",
  "General Nursing & Midwifery (GNM)",
  "Auxiliary Nurse Midwife (ANM)",
  "M.Sc Nursing",
  "Post Basic B.Sc Nursing",
  "Bachelor of Pharmacy (B.Pharm)",
  "Diploma in Pharmacy (D.Pharm)",
  "Master of Pharmacy (M.Pharm)",
  "B.Sc MLT (Medical Lab Technology)",
  "BPT (Physiotherapy)",
  "B.Sc Radiology & Imaging",
  "Paramedical Diploma",
  "BNYS (Naturopathy & Yogic Sciences)",
  "B.Sc Yoga",
  "Diploma in Yoga Therapy",
  "MBBS"
];

export default function ApplyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [collegeName, setCollegeName] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    course: '',
    college: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpenModal = (event) => {
      const detail = event.detail || {};
      const targetCollege = detail.collegeName || '';
      setCollegeName(targetCollege);
      setFormData(prev => ({
        ...prev,
        college: targetCollege || prev.college
      }));
      setIsSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener('open-apply-modal', handleOpenModal);

    // Global delegate click handler for any lead CTA / Apply Now button
    const handleGlobalClick = (e) => {
      const target = e.target.closest('.leadFilterData, .download__brochure, .primaryBtn, [data-lead_cta], .apply-now-btn, a[href*="login"], .writeReview');
      if (target) {
        // If it's a login link or apply button, intercept
        const text = (target.textContent || target.getAttribute('data-title') || '').toLowerCase();
        if (
          target.classList.contains('leadFilterData') ||
          target.classList.contains('download__brochure') ||
          target.getAttribute('data-lead_cta') ||
          target.classList.contains('apply-now-btn') ||
          text.includes('apply') ||
          text.includes('download') ||
          text.includes('sign-up')
        ) {
          e.preventDefault();
          e.stopPropagation();
          const card = target.closest('.college__card__new, .displayCard, .collegeCard, .dataCard');
          const extractedCollege = target.getAttribute('data-description') ||
            card?.querySelector('.college__name a, .widgetCardHeading, h2, h3')?.textContent?.trim() || '';
          
          window.dispatchEvent(new CustomEvent('open-apply-modal', {
            detail: { collegeName: extractedCollege }
          }));
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('open-apply-modal', handleOpenModal);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'state' ? { city: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 2500);
    }, 500);
  };

  const availableCities = formData.state ? STATES_CITIES[formData.state] || [] : [];

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        className="relative w-full max-w-[540px] bg-white rounded-[28px] shadow-2xl p-6 sm:p-8 transform transition-all overflow-hidden border border-gray-100 max-h-[90vh] overflow-y-auto"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900">Inquiry Submitted!</h3>
            <p className="text-gray-600 text-sm max-w-sm mx-auto">
              Thank you {formData.fullName ? <strong>{formData.fullName}</strong> : ''}! Your application details for <strong>{formData.college || collegeName || 'your preferred college'}</strong> have been received. Our admission team will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Header Badge & Title */}
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1 bg-red-50 text-red-600 font-extrabold text-[11px] tracking-wider uppercase rounded-full mb-2">
                APPLY NOW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Start Your Journey
              </h2>
              {collegeName && (
                <p className="text-xs font-semibold text-gray-500 mt-1 truncate max-w-md mx-auto">
                  Applying for: <span className="text-gray-900 font-bold">{collegeName}</span>
                </p>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    PHONE NUMBER <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all"
                  />
                </div>
              </div>

              {/* State & City Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    STATE <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all cursor-pointer"
                  >
                    <option value="">Select State</option>
                    {Object.keys(STATES_CITIES).map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    CITY <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="city"
                    required
                    disabled={!formData.state}
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {formData.state ? "Select City" : "Select state first"}
                    </option>
                    {availableCities.map(ct => (
                      <option key={ct} value={ct}>{ct}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Course */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  PREFERRED COURSE
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all cursor-pointer"
                >
                  <option value="">Select a Course</option>
                  {COURSES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Preferred College */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  PREFERRED COLLEGE
                </label>
                <input
                  type="text"
                  name="college"
                  placeholder="Select state, city & course first or enter college name"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f9fafb] text-gray-800 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/15 outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#e5383b] hover:bg-[#c92a37] active:bg-[#b01e2b] text-white font-extrabold text-base tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Submit Inquiry
                </button>
              </div>

              {/* Terms Note */}
              <p className="text-[11px] text-gray-400 text-center pt-1">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
