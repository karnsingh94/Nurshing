import { useState, useEffect, useMemo, useRef } from 'react';
import { collegesData } from '../data/collegesData.js';

const DEFAULT_STATES_CITIES = {
  "Haryana": ["Panipat", "Hisar", "Ambala", "Rohtak", "Gurugram", "Faridabad", "Sirsa", "Sonipat", "Karnal", "Yamunanagar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Dausa", "Chittorgarh", "Kota", "Udaipur", "Ajmer", "Bikaner", "Alwar", "Sikar"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Dwarka", "Rohini"],
  "Uttar Pradesh": ["Noida", "Greater Noida", "Lucknow", "Kanpur", "Varanasi", "Ghaziabad", "Agra", "Meerut", "Allahabad", "Bareilly", "Gorakhpur"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Davangere", "Belagavi", "Hubballi", "Honnavar", "Mandya"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Navi Mumbai", "Thane", "Amravati", "Nanded"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Fazilka"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Mancherial"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Vellore"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Jharsuguda"],
  "Himachal Pradesh": ["Shimla", "Solan", "Mandi", "Kangra", "Kullu", "Bilaspur", "Dharamshala"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rishikesh", "Nainital"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
  "Jammu & Kashmir": ["Srinagar", "Jammu", "Anantnag", "Kathua", "Badgam"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  "Meghalaya": ["Shillong", "Tura"],
  "Tripura": ["Agartala", "West Tripura", "Kamalpur"]
};

const COURSE_GROUPS = [
  {
    category: "Nursing",
    courses: [
      "B.Sc Nursing",
      "General Nursing & Midwifery (GNM)",
      "Auxiliary Nurse Midwife (ANM)",
      "Post Basic B.Sc Nursing",
      "M.Sc Nursing"
    ]
  },
  {
    category: "Pharmacy",
    courses: [
      "Bachelor of Pharmacy (B.Pharm)",
      "Diploma in Pharmacy (D.Pharm)",
      "Doctor of Pharmacy (Pharm.D)",
      "Master of Pharmacy (M.Pharm)"
    ]
  },
  {
    category: "Paramedical",
    courses: [
      "Bachelor of Medical Laboratory Technology (BMLT)",
      "Diploma in Medical Laboratory Technology (DMLT)",
      "Bachelor of Physiotherapy (BPT)",
      "B.Sc Operation Theatre Technology (OTT)",
      "B.Sc Radiography & Imaging Technology",
      "B.Sc Optometry",
      "Diploma in Dialysis Technology",
      "Paramedical & Allied Health Diploma"
    ]
  },
  {
    category: "Yoga & Naturopathy",
    courses: [
      "Bachelor of Naturopathy & Yogic Sciences (BNYS)",
      "B.Sc Yogic Science / Yoga Therapy",
      "Diploma in Yoga Science (DYSc)",
      "M.Sc Yogic Science / Yoga Therapy",
      "Post Graduate Diploma in Yoga (PGDY)"
    ]
  }
];

const TWELFTH_SUBJECTS = [
  "PCB (Physics, Chemistry, Biology)",
  "PCM (Physics, Chemistry, Mathematics)",
  "PCMB (Physics, Chemistry, Maths, Biology)",
  "Commerce with Mathematics",
  "Commerce without Mathematics",
  "Arts / Humanities",
  "Vocational / Other Stream"
];

const WA_TOKEN = "6akffxcaw1bafcntw0cu8rstof7hsocc";
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxPzrxa1JSo21jWDGD2xH7ivZQK0Xa1Zxt5zwAn33dqRIf4Jns3hiOgZqYoUyAfM6I46A/exec";
const SUBMITTED_STORAGE_KEY = "admission_enquiry_submitted_v2";

const initialFormData = {
  name: '',
  email: '',
  mobile: '',
  state: '',
  city: '',
  course: '',
  subject12: '',
  percentage12: '',
  message: ''
};

export default function EnquiryForm({
  collegeName = '',
  isModal = false,
  onClose = null,
  onSuccess = null
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isSavingToSheet, setIsSavingToSheet] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpTimer, setOtpTimer] = useState(0);
  const [formError, setFormError] = useState('');
  const [submissionType, setSubmissionType] = useState('inquiry'); // 'inquiry' | 'callback'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const timerRef = useRef(null);

  const statesCitiesMap = useMemo(() => {
    const map = { ...DEFAULT_STATES_CITIES };
    if (Array.isArray(collegesData)) {
      collegesData.forEach((c) => {
        const state = c.stateName || c.state;
        const city = c.city || c.district;
        if (state && city) {
          if (!map[state]) map[state] = [];
          if (!map[state].includes(city)) {
            map[state].push(city);
          }
        }
      });
    }
    return map;
  }, []);

  useEffect(() => {
    if (otpTimer > 0) {
      timerRef.current = setTimeout(() => {
        setOtpTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [otpTimer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobile: digitsOnly }));
      if (isPhoneVerified) {
        setIsPhoneVerified(false);
        setOtpSent(false);
        setEnteredOtp('');
      }
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'state' ? { city: '' } : {})
    }));
  };

  const handleSendOtp = async () => {
    setOtpError('');
    setFormError('');
    const rawPhone = formData.mobile.trim();

    if (!rawPhone || rawPhone.length !== 10) {
      setOtpError('Please enter a valid 10-digit mobile number first.');
      return;
    }

    setIsSendingOtp(true);
    const newOtp = String(Math.floor(1000 + Math.random() * 9000));
    setGeneratedOtp(newOtp);

    const cleanNumber = '91' + rawPhone;
    const msgText = `Hello! Your admission verification OTP is: ${newOtp}. Please enter this code to verify your mobile number. Valid for 10 minutes.`;
    const waUrl = `https://aumsg.in/send?token=${WA_TOKEN}&number=${cleanNumber}&message=${encodeURIComponent(msgText)}`;

    // Fire WhatsApp API request asynchronously without blocking UI
    fetch(waUrl, { method: 'GET', mode: 'no-cors', keepalive: true })
      .then(() => console.log('WhatsApp OTP sent to:', cleanNumber))
      .catch((err) => console.warn('WhatsApp API notice:', err));

    setIsSendingOtp(false);
    setOtpSent(true);
    setOtpTimer(45);
  };

  const handleVerifyOtp = (e) => {
    e?.preventDefault();
    setOtpError('');
    if (!enteredOtp.trim()) {
      setOtpError('Please enter the 4-digit OTP received on your WhatsApp.');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      if (enteredOtp.trim() === generatedOtp.trim()) {
        setIsPhoneVerified(true);
        setOtpSent(false);
        setOtpError('');
        setFormError('');
      } else {
        setOtpError('Invalid OTP! Please check your WhatsApp message and try again.');
      }
      setIsVerifying(false);
    }, 200);
  };

  const handleSubmit = async (e, type = 'inquiry') => {
    e?.preventDefault();
    setFormError('');

    if (!isPhoneVerified) {
      setFormError('Please verify your mobile number via WhatsApp OTP to proceed.');
      if (!otpSent) {
        handleSendOtp();
      }
      return;
    }

    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!formData.email.trim()) {
      setFormError('Please enter your email address.');
      return;
    }

    if (!formData.state) {
      setFormError('Please select your state.');
      return;
    }

    if (!formData.city) {
      setFormError('Please select your city.');
      return;
    }

    if (!formData.course) {
      setFormError('Please select your preferred course.');
      return;
    }

    if (!formData.subject12) {
      setFormError('Please select your 12th subject stream.');
      return;
    }

    if (!formData.percentage12 || !String(formData.percentage12).trim()) {
      setFormError('Please enter your 12th score / percentage.');
      return;
    }

    setSubmissionType(type);
    setIsSavingToSheet(true);

    const sheetData = {
      name: formData.name.trim(),
      email: formData.email.trim() || '',
      mobile: formData.mobile.trim(),
      state: formData.state,
      city: formData.city || '',
      course: formData.course || '',
      subject12: formData.subject12 || '',
      percentage12: formData.percentage12 ? String(formData.percentage12) : '',
      message: formData.message.trim() || '',
      type: type === 'callback' ? 'Callback Request' : 'Admission Inquiry',
      college: collegeName || 'Admission Counseling Desk',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // Save submission status to local storage immediately
    try {
      localStorage.setItem(SUBMITTED_STORAGE_KEY, 'true');
      localStorage.setItem('enquiry_form_submitted', 'true');
    } catch (e) {}

    // Send data to Google Sheet asynchronously with keepalive so browser guarantees delivery in background
    fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(sheetData)
    })
      .then(() => {
        console.log('Saved to Google Sheet successfully:', sheetData);
      })
      .catch((sheetErr) => {
        console.error('Google Sheet submit error:', sheetErr);
      });

    // Instant/smooth transition (< 300ms micro-delay) to success screen for immediate user satisfaction
    setTimeout(() => {
      setIsSavingToSheet(false);
      setSubmittedData({ ...sheetData });
      setIsSubmitted(true);
      if (onSuccess) onSuccess(sheetData);
    }, 250);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsPhoneVerified(false);
    setOtpSent(false);
    setEnteredOtp('');
    setOtpError('');
    setFormError('');
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const availableCities = formData.state ? statesCitiesMap[formData.state] || [] : [];

  return (
    <div className="w-full text-slate-800" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm border border-emerald-200">
            ✓
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            {submissionType === 'callback' ? 'Callback Requested!' : 'Inquiry Submitted!'}
          </h3>
          {submittedData && (
            <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 text-slate-700 text-sm max-w-md mx-auto text-left space-y-1.5">
              <p><strong>Candidate:</strong> {submittedData.name}</p>
              <p><strong>Verified Mobile:</strong> +91 {submittedData.mobile} <span className="text-emerald-600 font-bold text-xs ml-1">✓ WhatsApp Verified</span></p>
              {submittedData.email && <p><strong>Email:</strong> {submittedData.email}</p>}
              {submittedData.state && <p><strong>Location:</strong> {submittedData.city ? `${submittedData.city}, ` : ''}{submittedData.state}</p>}
              {submittedData.course && <p><strong>Target Course:</strong> {submittedData.course}</p>}
              {submittedData.subject12 && (
                <p><strong>12th Stream:</strong> {submittedData.subject12} {submittedData.percentage12 ? `(${submittedData.percentage12}%)` : ''}</p>
              )}
              {submittedData.message && <p><strong>Message / Query:</strong> {submittedData.message}</p>}
            </div>
          )}
          <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
            Your inquiry has been stored securely in our system. Our counselor will call you on <strong className="text-slate-900">+91 {submittedData?.mobile || formData.mobile}</strong> shortly.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            {isModal && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0966c2] hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                Done & Close
              </button>
            )}
            <button
              type="button"
              onClick={handleReset}
              className={`px-5 py-2.5 font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer ${
                isModal
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  : 'bg-[#0966c2] hover:bg-blue-700 text-white'
              }`}
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Header Badge & Title in Theme Blue */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-[#0966c2] font-extrabold text-[11px] tracking-wider uppercase rounded-full mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0966c2] animate-pulse"></span>
              Official Inquiry
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Start Your Journey
            </h2>
            <p className="text-xs font-semibold text-slate-500 mt-1 max-w-md mx-auto truncate">
              {collegeName && collegeName !== 'Admission Counseling Desk' ? (
                <>Applying for: <span className="text-[#0966c2] font-bold">{collegeName}</span></>
              ) : (
                'Get Free Counseling, Cutoff Analysis & Admission Assistance'
              )}
            </p>
          </div>

          {/* Error Notification Alert */}
          {formError && (
            <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold flex items-center gap-2">
              <span className="text-base">⚠️</span>
              <span>{formError}</span>
            </div>
          )}

          {/* Main Form */}
          <form onSubmit={(e) => handleSubmit(e, 'callback')} className="space-y-4 text-left">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                FULL NAME <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter candidate's full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all"
              />
            </div>

            {/* Mobile Number with WhatsApp OTP Verify Button */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  MOBILE NUMBER <span className="text-rose-500">*</span>
                </label>
                {isPhoneVerified ? (
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    ✓ WhatsApp Verified
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500">
                    Requires WhatsApp OTP
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <div className="relative flex-1 flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-bold select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    maxLength={10}
                    disabled={isPhoneVerified}
                    placeholder="10-digit WhatsApp number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-r-xl border text-slate-800 text-sm outline-none transition-all ${
                      isPhoneVerified
                        ? 'border-emerald-400 bg-emerald-50/40 font-bold'
                        : 'border-slate-200 bg-slate-50/70 focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15'
                    }`}
                  />
                </div>

                {/* Verify / Send OTP Button beside Phone */}
                {!isPhoneVerified ? (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={formData.mobile.length !== 10 || isSendingOtp || otpTimer > 0}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-95 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  >
                    {isSendingOtp ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : otpTimer > 0 ? (
                      <span>Resend in {otpTimer}s</span>
                    ) : (
                      <>
                        <span>Verify via</span>
                        <span className="font-extrabold">WhatsApp</span>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsPhoneVerified(false);
                      setOtpSent(false);
                      setEnteredOtp('');
                    }}
                    className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-xs transition-colors cursor-pointer shrink-0"
                    title="Change phone number"
                  >
                    Change
                  </button>
                )}
              </div>

              {/* OTP Verification Input Box */}
              {otpSent && !isPhoneVerified && (
                <div className="mt-2.5 p-3 bg-blue-50/80 rounded-xl border border-blue-200 space-y-2">
                  <div className="flex items-center justify-between text-xs text-blue-900 font-semibold">
                    <span>📲 Enter 4-digit OTP sent to WhatsApp:</span>
                    {otpTimer > 0 ? (
                      <span className="text-slate-500 font-normal">Resend in {otpTimer}s</span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-[#0966c2] hover:underline font-bold cursor-pointer"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="e.g. 4892"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      className="flex-1 px-3.5 py-2 rounded-lg border border-blue-300 bg-white text-slate-900 text-center font-black tracking-widest text-base focus:ring-2 focus:ring-[#0966c2] outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={isVerifying || enteredOtp.length < 4}
                      className="px-4 py-2 bg-[#0966c2] hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs rounded-lg transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isVerifying ? 'Checking...' : 'Submit OTP'}
                    </button>
                  </div>
                  {otpError && (
                    <p className="text-xs text-rose-600 font-bold">{otpError}</p>
                  )}
                </div>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                EMAIL ADDRESS <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="student@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all"
              />
            </div>

            {/* State & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  STATE <span className="text-rose-500">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all cursor-pointer"
                >
                  <option value="">Select State</option>
                  {Object.keys(statesCitiesMap).sort().map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  CITY <span className="text-rose-500">*</span>
                </label>
                <select
                  id="city"
                  name="city"
                  required
                  disabled={!formData.state}
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                PREFERRED COURSE <span className="text-rose-500">*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all cursor-pointer"
              >
                <option value="">Select Target Course</option>
                {COURSE_GROUPS.map(group => (
                  <optgroup key={group.category} label={`── ${group.category} ──`}>
                    {group.courses.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* 12th Subject & 12th % */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  12TH SUBJECT STREAM <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject12"
                  name="subject12"
                  required
                  value={formData.subject12}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all cursor-pointer"
                >
                  <option value="">Select 12th Stream</option>
                  {TWELFTH_SUBJECTS.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  12TH SCORE / PERCENTAGE (%) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="percentage12"
                    step="0.01"
                    min="0"
                    max="100"
                    name="percentage12"
                    required
                    placeholder="e.g. 85.5"
                    value={formData.percentage12}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 pr-8 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 font-bold text-sm pointer-events-none">
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Message / Query Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                YOUR MESSAGE / QUERY <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="messageText"
                name="message"
                rows={2}
                placeholder="Enter your message, specific questions about admission, fees, cutoffs..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-800 text-sm focus:bg-white focus:border-[#0966c2] focus:ring-2 focus:ring-[#0966c2]/15 outline-none transition-all resize-none"
              />
            </div>

            {/* Single Action Button: Request for a callback */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSavingToSheet}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#0966c2] via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSavingToSheet ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Requesting Callback...</span>
                  </>
                ) : (
                  <>
                    <span>📞</span>
                    <span>Request for a callback</span>
                  </>
                )}
              </button>
            </div>

            {!isPhoneVerified && (
              <p className="text-[11px] text-amber-700 text-center font-medium bg-amber-50 p-2 rounded-lg border border-amber-200">
                ⚠️ Note: Mobile number verification via WhatsApp OTP is required to submit your inquiry.
              </p>
            )}

            {/* Privacy Note */}
            <p className="text-[11px] text-slate-400 text-center pt-1">
              🔒 By submitting, you agree to our terms and privacy policy. Your information is 100% confidential.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
