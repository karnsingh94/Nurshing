import { useState } from 'react';

export default function TermsConditions({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('acceptance');

  const scrollTo = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Agreement' },
    { id: 'services', title: '2. Scope of Counseling Services' },
    { id: 'eligibility', title: '3. User Eligibility & Conduct' },
    { id: 'accuracy', title: '4. Information Accuracy & Disclaimers' },
    { id: 'intellectual', title: '5. Intellectual Property Rights' },
    { id: 'prohibited', title: '6. Prohibited Activities' },
    { id: 'thirdparty', title: '7. Third-Party Links & Portals' },
    { id: 'liability', title: '8. Limitation of Liability' },
    { id: 'indemnity', title: '9. User Indemnification' },
    { id: 'governing', title: '10. Governing Law & Jurisdiction' },
    { id: 'modifications', title: '11. Amendments & Modifications' },
    { id: 'contact', title: '12. Grievance Redressal Mechanism' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1b2538] via-[#273553] to-[#0966c2] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold mb-4">
            <span>⚖️</span> User Agreement & Legal Terms
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Terms & Conditions
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Effective Date: January 1, 2026 | Last Revised: 2026 Edition
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed">
            Please read these terms and conditions carefully before utilizing the educational search, counseling, ranking information, or application assistance tools provided on citsAdmission.com.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Table of Contents / Sidebar */}
          <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0966c2] mb-4">
              Terms Outline
            </h3>
            <nav className="space-y-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer block ${
                    activeSection === sec.id
                      ? 'bg-blue-50 text-[#0966c2] font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500">
              <p className="mb-2">Need a printable copy of these terms?</p>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
              >
                <span>🖨️</span> Print / Save Terms
              </button>
            </div>
          </aside>

          {/* Legal Clauses */}
          <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Clause 1 */}
            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                1. Acceptance of Agreement
              </h2>
              <p className="mb-3">
                This document constitutes a legally binding agreement between you ("User", "Student", "Parent", or "Visitor") and <strong>citsAdmission.com</strong> ("Website", "Portal", "We", "Us").
              </p>
              <p>
                By accessing, browsing, registering on, or submitting an inquiry via citsAdmission.com, you unconditionally accept and agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of this portal.
              </p>
            </section>

            {/* Clause 2 */}
            <section id="services" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                2. Scope of Counseling Services
              </h2>
              <p className="mb-3">
                citsAdmission.com is an educational discovery portal and independent student counseling facilitator. Our platform provides:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Aggregated college details including courses offered, fees, campus facilities, cutoffs, and NIRF rankings.</li>
                <li>Interactive admission counseling, rank analysis, and stream exploration guidance.</li>
                <li>Direct assistance in downloading brochures, contacting admissions desks, and completing preliminary application forms.</li>
              </ul>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <strong>Important Notice:</strong> citsAdmission.com is not an examination conducting authority, university, or affiliated board. Final admission decisions, seat confirmations, and fee disbursements are solely within the jurisdiction of respective colleges and regulatory counseling bodies (such as NTA, MCC, JoSAA, State DTEs).
              </div>
            </section>

            {/* Clause 3 */}
            <section id="eligibility" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                3. User Eligibility & Conduct
              </h2>
              <p className="mb-3">
                By submitting inquiries or registering on our platform, you confirm that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You are at least 16 years of age or accessing under the supervision of a parent or guardian.</li>
                <li>All personal and academic details (marks, ranks, phone number) provided by you are authentic, true, and up-to-date.</li>
                <li>You will use the portal solely for legitimate academic exploration and counseling purposes.</li>
              </ul>
            </section>

            {/* Clause 4 */}
            <section id="accuracy" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                4. Information Accuracy & Disclaimers
              </h2>
              <p className="mb-3">
                While citsAdmission.com takes every reasonable step to ensure the data displayed (tuition fees, hostel charges, cutoff ranks, placement metrics) is accurate and synchronized with official college prospectuses, <strong>institutions frequently update fee structures and quota policies</strong>.
              </p>
              <p>
                Students are strongly encouraged to verify final fee amounts, eligibility criteria, and quota seats with the official college administration before finalizing payments. citsAdmission.com shall not be held liable for discrepancies resulting from unnotified institutional revisions.
              </p>
            </section>

            {/* Clause 5 */}
            <section id="intellectual" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                5. Intellectual Property Rights
              </h2>
              <p className="mb-3">
                All contents, software code, UI designs, brand marks, logos, graphics, and articles on citsAdmission.com are the exclusive intellectual property of citsAdmission.com or its licensors.
              </p>
              <p>
                Institutional logos and college names belong to their respective registered universities and are utilized strictly for informational identification and comparative directory purposes.
              </p>
            </section>

            {/* Clause 6 */}
            <section id="prohibited" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                6. Prohibited Activities
              </h2>
              <p className="mb-3">
                Users are strictly prohibited from:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Extracting, scraping, or caching data through automated scripts, bots, or crawlers without prior written authorization.</li>
                <li>Submitting fraudulent inquiries, fake academic scores, or impersonating other candidates.</li>
                <li>Attempting to interfere with the network security, server infrastructure, or responsiveness of the portal.</li>
              </ul>
            </section>

            {/* Clause 7 */}
            <section id="thirdparty" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                7. Third-Party Links & Portals
              </h2>
              <p>
                Our portal may include hyperlinks directing you to third-party university websites, official counseling boards, or payment gateways. We have no control over the content, privacy practices, or uptime of these external sites and accept no responsibility for interactions conducted on them.
              </p>
            </section>

            {/* Clause 8 */}
            <section id="liability" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted under applicable law, citsAdmission.com and its directors, counselors, and employees shall not be liable for any direct, indirect, incidental, or consequential damages resulting from admission rejections, cutoff variations, seat cancellations, or technical outages.
              </p>
            </section>

            {/* Clause 9 */}
            <section id="indemnity" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                9. User Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless citsAdmission.com from any claims, losses, liabilities, and expenses (including legal fees) arising from your breach of these Terms & Conditions or submission of false academic information.
              </p>
            </section>

            {/* Clause 10 */}
            <section id="governing" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                10. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts located in New Delhi, India.
              </p>
            </section>

            {/* Clause 11 */}
            <section id="modifications" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                11. Amendments & Modifications
              </h2>
              <p>
                We reserve the right to revise or modify these Terms & Conditions at any time. Changes will become effective immediately upon posting on this page. Your continued use of the website following any update signifies your acceptance of the amended terms.
              </p>
            </section>

            {/* Clause 12 */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                12. Grievance Redressal Mechanism
              </h2>
              <p className="mb-4">
                If you have any questions, clarifications, or grievances regarding these terms, please contact our Legal & Grievance Department:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                <div className="font-bold text-slate-900 text-base">Legal & Grievance Department</div>
                <div className="text-slate-700">citsAdmission.com Compliance Cell</div>
                <div className="text-slate-600">Knowledge Boulevard, Sector 62, Noida, NCR - 201309</div>
                <div>Email: <a href="mailto:grievance@citsadmission.com" className="text-[#0966c2] font-semibold hover:underline">grievance@citsadmission.com</a></div>
                <div>Toll-Free Support: <a href="tel:18001234567" className="text-[#0966c2] font-semibold hover:underline">1800-123-4567</a></div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
