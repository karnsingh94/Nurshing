import { useState } from 'react';

export default function ContactUs({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    stream: 'Nursing (B.Sc / GNM / ANM)',
    queryType: 'Admission Counseling',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const streams = [
    'Nursing (B.Sc / GNM / ANM)',
    'Pharmacy (B.Pharm / D.Pharm)',
    'Paramedical (B.Sc MLT / Radiology / BPT)',
    'Yoga & Naturopathy (BNYS / B.Sc Yoga)',
    'Medical (MBBS/BDS/AYUSH)',
    'Engineering & Tech (B.Tech/M.Tech)',
    'Management (MBA/BBA/PGDM)',
    'Science & Computer Application',
    'Law, Arts & Commerce'
  ];

  const queryTypes = [
    'Admission Counseling & Guidance',
    'College Cutoff & Eligibility Inquiry',
    'Fee Structure & Scholarship Details',
    'Application Form Assistance',
    'Campus Visit & Direct Admissions',
    'Institutional Partnership / Listing'
  ];

  const faqs = [
    {
      q: 'Is admission counseling at citsAdmission.com completely free?',
      a: 'Yes! Our fundamental college exploration, cutoff analysis, and standard admission counseling sessions are 100% free of charge for students and parents.'
    },
    {
      q: 'How quickly will an academic counselor contact me?',
      a: 'Once you submit your inquiry or callback request, an experienced counselor specializing in your selected stream will reach out within 2 to 4 business hours.'
    },
    {
      q: 'Can you help with state and central counseling (JoSAA, NEET MCC, KEA, WBJEE)?',
      a: 'Yes. Our senior advisors provide step-by-step choice filling assistance, category reservation advisory, and round-wise cutoff predictions for all major state and national counseling authorities.'
    },
    {
      q: 'Can we visit your counseling centers in person?',
      a: 'Absolutely. We welcome students and parents at our regional advisory centers in Delhi NCR, Bangalore, Mumbai, Hyderabad, and Kolkata between 9:00 AM and 7:00 PM (Monday to Saturday).'
    }
  ];

  const regionalOffices = [
    {
      city: 'Delhi NCR (Headquarters)',
      address: 'Plot 12A, Knowledge Boulevard, Sector 62, Noida, Uttar Pradesh 201309',
      phone: '+91 120 456 7890',
      email: 'delhi.desk@citsadmission.com'
    },
    {
      city: 'Bengaluru Advisory Hub',
      address: '4th Floor, Tech Hub Tower, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560103',
      phone: '+91 80 2345 6789',
      email: 'bangalore.desk@citsadmission.com'
    },
    {
      city: 'Mumbai Regional Office',
      address: 'Level 5, Express Towers, Nariman Point, Mumbai, Maharashtra 400021',
      phone: '+91 22 8765 4321',
      email: 'mumbai.desk@citsadmission.com'
    },
    {
      city: 'Kolkata Center',
      address: 'Block EP & GP, Sector V, Salt Lake Electronics Complex, Kolkata, West Bengal 700091',
      phone: '+91 33 4567 8901',
      email: 'kolkata.desk@citsadmission.com'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      stream: 'Engineering',
      queryType: 'Admission Counseling',
      message: ''
    });
    setIsSubmitted(false);
  };

  const handleOpenApply = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: 'citsAdmission Priority Helpdesk' }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#1b2538] via-[#273553] to-[#0966c2] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Counselors Available Online
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Get in Touch with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-200">Admissions Team</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Have questions about college cutoffs, fee structures, entrance exams, or campus selection? Our expert counselors are ready to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Quick Contact Cards */}
      <section className="max-w-6xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Interactive Counseling Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <span className="text-xs font-bold text-[#0966c2] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                Fast Response Form
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">Request Free Admission Guidance</h2>
              <p className="text-sm text-slate-500 mt-1">Fill in your details and a dedicated counselor will reach out shortly.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-800">{formData.fullName || 'Student'}</strong>. Our senior academic counselor for <strong className="text-slate-800">{formData.stream}</strong> will call you on <strong className="text-slate-800">{formData.phone}</strong> within 2 hours.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#0966c2] hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('/colleges')}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition-all cursor-pointer"
                  >
                    Browse Colleges
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Karn Singh"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        className="w-full px-4 py-3 rounded-r-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Current City / State
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. New Delhi, Noida"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Course Stream
                    </label>
                    <select
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50 cursor-pointer"
                    >
                      {streams.map((st, idx) => (
                        <option key={idx} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50 cursor-pointer"
                    >
                      {queryTypes.map((qt, idx) => (
                        <option key={idx} value={qt}>{qt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Question / College Preferences
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention specific colleges, budget range, entrance exam rank (NEET/JEE/CAT), or any specific queries..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0966c2] focus:border-transparent text-sm bg-slate-50/50 resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#0966c2] hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Connecting to Advisor...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admission Inquiry</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-slate-400 mt-2">
                  🔒 Your data is kept strictly confidential and used solely for educational counseling.
                </p>
              </form>
            )}
          </div>

          {/* Right / Side: Direct Helpdesk Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & Direct Helpdesk Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#0966c2] flex items-center justify-center text-sm font-black">
                  📞
                </span>
                Direct Helpline
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Toll-Free Student Support</div>
                  <a href="tel:18001234567" className="text-xl font-extrabold text-[#0966c2] hover:underline block mt-0.5">
                    1800-123-4567
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Available 9:00 AM - 7:00 PM (Mon-Sat)</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Direct Admission Desk</div>
                  <a href="tel:+919876543210" className="text-lg font-bold text-slate-900 hover:text-[#0966c2] block mt-0.5">
                    +91 98765 43210 / +91 91234 56780
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Instant WhatsApp & Phone Support</p>
                </div>
              </div>
            </div>

            {/* Email Channels Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-black">
                  ✉️
                </span>
                Email Support Desks
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-between pb-3 border-b border-slate-100">
                  <div>
                    <div className="font-semibold text-slate-800">Student Counseling</div>
                    <div className="text-xs text-slate-500">Course & cutoff guidance</div>
                  </div>
                  <a href="mailto:admissions@citsadmission.com" className="text-xs font-bold text-[#0966c2] hover:underline">
                    admissions@citsadmission.com
                  </a>
                </li>
                <li className="flex items-start justify-between pb-3 border-b border-slate-100">
                  <div>
                    <div className="font-semibold text-slate-800">College Tie-ups</div>
                    <div className="text-xs text-slate-500">Institutional profiles</div>
                  </div>
                  <a href="mailto:partners@citsadmission.com" className="text-xs font-bold text-[#0966c2] hover:underline">
                    partners@citsadmission.com
                  </a>
                </li>
                <li className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">Grievance & Privacy</div>
                    <div className="text-xs text-slate-500">Data & policy requests</div>
                  </div>
                  <a href="mailto:privacy@citsadmission.com" className="text-xs font-bold text-[#0966c2] hover:underline">
                    privacy@citsadmission.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Instant Modal Trigger */}
            <div className="bg-gradient-to-r from-[#273553] to-[#0966c2] rounded-3xl p-6 text-white shadow-lg">
              <h4 className="text-lg font-bold mb-2">Need Fast-Track Counseling?</h4>
              <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                Click below to launch our quick priority admission window and receive immediate callback from senior advisors.
              </p>
              <button
                type="button"
                onClick={handleOpenApply}
                className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm transition-all cursor-pointer"
              >
                Instant Admission Callback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Advisory Hubs */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0966c2] bg-blue-50 px-3 py-1 rounded-full">
              Presence Across India
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
              Visit Our Regional Advisory Hubs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Meet our admission counselors in person for personalized counseling and physical document reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalOffices.map((office, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0966c2] mb-1.5">Center</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{office.city}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{office.address}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs space-y-1">
                  <div className="font-semibold text-slate-800">{office.phone}</div>
                  <div className="text-slate-500">{office.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#0966c2] transition-colors cursor-pointer"
                >
                  <span className="text-base">{faq.q}</span>
                  <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-45 text-[#0966c2]' : 'text-slate-400'}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
