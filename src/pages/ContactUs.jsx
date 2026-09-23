import { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm.jsx';

export default function ContactUs({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'Is admission counseling at Admission Portal completely free?',
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

      {/* Main Content Grid: Enquiry Form Card + Quick Contact Cards */}
      <section className="max-w-6xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Exact Same Enquiry Form Matching Modal */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl border border-blue-100/80">
            <EnquiryForm
              collegeName="Contact Us Admission Counseling"
              isModal={false}
            />
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
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Direct Help Desk</div>
                  <a href="tel:+910000000000" className="text-lg font-bold text-slate-900 hover:text-[#0966c2] block mt-0.5">
                    +91 0000000000
                  </a>
                  <p className="text-xs text-slate-500 mt-1">WhatsApp & Phone Support</p>
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
                <li className="flex items-center justify-between">
                  <div className="font-semibold text-slate-800">Help Desk</div>
                  <a href="mailto:contact@example.com" className="text-xs font-bold text-[#0966c2] hover:underline">
                    contact@example.com
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
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-apply-modal', {
                    detail: { collegeName: 'Contact Us Fast-Track Helpdesk' }
                  }));
                }}
                className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm transition-all cursor-pointer shadow-xs"
              >
                Instant Admission Callback
              </button>
            </div>
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
          <p className="text-sm text-slate-500 mt-2">
            Find quick answers to common questions about admissions, fees, and career counseling.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#0966c2] transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <span className={`text-xl transform transition-transform duration-200 text-slate-400 ${activeFaq === idx ? 'rotate-180 text-[#0966c2]' : ''}`}>
                  ▼
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
