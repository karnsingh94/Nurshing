import { useState } from 'react';

export default function AboutUs({ onNavigate }) {
  const handleOpenApply = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName: 'citsAdmission General Counseling' }
    }));
  };

  const stats = [
    { number: '500+', label: 'Partner Colleges & Universities', icon: '🏛️' },
    { number: '50,000+', label: 'Students Successfully Guided', icon: '🎓' },
    { number: '20+', label: 'Disciplines & Course Streams', icon: '📚' },
    { number: '100%', label: 'Impartial & Transparent Advice', icon: '⭐' },
  ];

  const coreValues = [
    {
      title: 'Student-First Philosophy',
      desc: 'We prioritize each student\'s unique aspirations, strengths, and financial constraints above all else to recommend the optimal academic path.',
      badge: 'Core Priority',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Uncompromising Data Accuracy',
      desc: 'Our dedicated research team continuously verifies fees, cutoffs, NIRF rankings, and placement reports directly from official regulatory sources.',
      badge: 'Verified Data',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Complete Transparency',
      desc: 'Zero hidden fees, zero biased affiliations. We offer unbiased comparisons across government, deemed, and private institutions nationwide.',
      badge: '100% Unbiased',
      gradient: 'from-emerald-600 to-teal-500'
    },
    {
      title: 'End-to-End Admission Support',
      desc: 'From initial career discovery, entrance exam guidance, to application submissions and document verification, we stand with you throughout.',
      badge: '360° Assistance',
      gradient: 'from-rose-600 to-orange-500'
    }
  ];

  const offerings = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'College & University Directory',
      description: 'Explore comprehensive profiles of top colleges across Engineering, Medical, MBA, Law, Pharmacy, Architecture, and more with verified fee structures and facilities.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Cutoff & Rank Predictors',
      description: 'Gain data-backed clarity on your admission chances for NEET, JEE Main, CAT, MAT, GATE, CLAT, and state entrance counseling sessions.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Expert 1-on-1 Counseling',
      description: 'Speak directly with seasoned educational counselors who assess your academic score, budget, and career goals to suggest the perfect fit.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Verified Placement & NIRF Analytics',
      description: 'Transparent insights into real placement percentages, average salary packages, recruiting companies, and NAAC/NIRF accreditation.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Scholarship & Fee Concession Guidance',
      description: 'Comprehensive information on merit-based, state-funded, and institutional scholarships to make quality education affordable.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Direct Application Assistance',
      description: 'Streamlined application processing, entrance registration notifications, and step-by-step document verification support.'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Portal Inception', desc: 'Launched citsAdmission.com with 50 top Engineering and Management colleges.' },
    { year: '2023', title: 'Pan-India Stream Expansion', desc: 'Added Medical, Paramedical, Pharmacy, Law, and Architecture with over 300+ institutions.' },
    { year: '2025', title: 'Interactive City & Seat Matrix Engine', desc: 'Introduced intelligent city-based college filtering and real-time seat matrix guides.' },
    { year: '2026', title: 'National Leader in Admission Guidance', desc: 'Empowering over 50,000 students annually across all 28 states and union territories in India.' }
  ];

  const mentors = [
    { name: 'Dr. Rajesh Nair', role: 'Head of Engineering & Tech Admissions', experience: '16+ Years Experience', spec: 'IIT & NIT Counseling Specialist' },
    { name: 'Dr. Ananya Sen', role: 'Chief Medical & Paramedical Advisor', experience: '14+ Years Experience', spec: 'NEET & AIQ Seat Allocation' },
    { name: 'Vikramaditya Sharma', role: 'Senior Management & MBA Consultant', experience: '12+ Years Experience', spec: 'CAT / XAT / Top B-Schools' },
    { name: 'Meenakshi Iyer', role: 'Director of Student Counseling', experience: '15+ Years Experience', spec: 'Career Assessment & Profile Building' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1b2538] via-[#273553] to-[#0966c2] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            About citsAdmission.com
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto mb-6">
            Guiding India's Brightest Minds to Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-200">Dream Colleges</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            citsAdmission.com is India's dedicated higher education discovery and admission counseling portal. We empower students and parents with unbiased college comparisons, verified fee structures, cutoffs, and personalized mentorship.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate?.('/colleges')}
              className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Top Colleges
            </button>
            <button
              type="button"
              onClick={handleOpenApply}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm transition-all cursor-pointer"
            >
              Get Free Counseling
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto -mt-8 px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">{stat.number}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Our Mission
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Democratizing Higher Education Discovery
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                To simplify the complex college admission landscape in India by providing honest, up-to-date, and comprehensive information. We remove ambiguity from college selection, ensuring every student finds an institution where their talent thrives.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-blue-100/80 text-sm font-semibold text-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Authentic Insights • Free Consultation • Fair Guidance
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                Our Vision
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                India's Most Trusted Student Advisory Ecosystem
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                To build an inclusive, technologically advanced counseling platform that connects aspiring learners with premier colleges, scholarship opportunities, and career pathways regardless of their geographic location or socioeconomic background.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-purple-100/80 text-sm font-semibold text-purple-800">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Pan-India Reach • Data Precision • Future-Ready Careers
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0966c2] bg-blue-50 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Comprehensive Tools for College Seekers
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Everything you need to navigate entrance exams, college selection, fee estimation, and admissions in one unified portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/70 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-blue-50 border border-slate-200 flex items-center justify-center mb-5 transition-colors shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0966c2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Our Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            The Pillars That Define citsAdmission
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Guiding students with integrity, accuracy, and genuine dedication since day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${val.gradient} mb-3`}>
                  {val.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Growth & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Journey Over the Years
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              How we evolved into India's premier student admission companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((ms, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
                <div className="text-3xl font-black text-[#0966c2] mb-2">{ms.year}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{ms.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Leadership */}
{/*       
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

      
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0966c2] bg-blue-50 px-3 py-1 rounded-full">
            Expert Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Meet Our Senior Academic Advisors
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experienced mentors with deep expertise in national counseling boards and admission authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0966c2] to-cyan-500 text-white font-black text-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-base font-bold text-slate-900">{m.name}</h3>
              <p className="text-xs font-medium text-[#0966c2] mb-1">{m.role}</p>
              <p className="text-xs text-slate-500 mb-3">{m.experience}</p>
              <div className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-700">
                {m.spec}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Box */}
      <section className="max-w-6xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1f2b45] to-[#0966c2] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Need Personalized Guidance for 2026 Admissions?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8">
              Connect with our academic counselors today for custom college shortlisting, fee breakdowns, and direct admission support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleOpenApply}
                className="px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Apply for Free Counseling
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('/contact-us')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold rounded-xl backdrop-blur-sm transition-all cursor-pointer"
              >
                Contact Our Helpdesk
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
