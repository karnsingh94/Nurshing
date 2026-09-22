import { useState } from 'react';

export default function PrivacyPolicy({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollTo = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'intro', title: '1. Introduction & Scope' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Information' },
    { id: 'sharing', title: '4. Information Sharing & Disclosure' },
    { id: 'cookies', title: '5. Cookies & Tracking Technologies' },
    { id: 'security', title: '6. Data Security & Storage' },
    { id: 'rights', title: '7. Student & User Rights' },
    { id: 'retention', title: '8. Data Retention Policy' },
    { id: 'minors', title: '9. Children & Minor Protection' },
    { id: 'contact', title: '10. Grievance Officer & Inquiries' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1b2538] via-[#273553] to-[#0966c2] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold mb-4">
            <span>🛡️</span> Legal & Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Effective Date: January 1, 2026 | Last Updated: 2026 Edition
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed">
            At citsAdmission.com, we are deeply committed to safeguarding your personal and academic information. This policy explains our data practices and your rights regarding your information.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Table of Contents / Sidebar */}
          <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0966c2] mb-4">
              Table of Contents
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
              <p className="mb-2">Need a copy of this policy for records?</p>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
              >
                <span>🖨️</span> Print / Save PDF
              </button>
            </div>
          </aside>

          {/* Legal Text Sections */}
          <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Section 1 */}
            <section id="intro" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                1. Introduction & Scope
              </h2>
              <p className="mb-3">
                Welcome to <strong>citsAdmission.com</strong> ("we", "our", or "us"). This Privacy Policy applies to all students, parents, educators, and visitors ("you" or "User") who access our website, mobile interfaces, counseling services, cutoff estimation tools, and college application assistance features.
              </p>
              <p>
                By accessing or using citsAdmission.com, you acknowledge that you have read, understood, and agree to the collection and handling of your data as outlined in this Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collection" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                To provide accurate college counseling and personalized guidance, we may collect the following categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Direct Personal Identifiers:</strong> Name, email address, mobile phone number, date of birth, gender, and residential city/state when submitting inquiry or registration forms.
                </li>
                <li>
                  <strong>Academic & Admission Credentials:</strong> Qualifying examination scores (Class 10th/12th percentages, graduation GPA), entrance exam marks/ranks (such as JEE Main/Advanced, NEET-UG/PG, CAT, MAT, CUET, CLAT, GATE), preferred courses, and target college preferences.
                </li>
                <li>
                  <strong>Technical & Usage Information:</strong> IP address, device type, operating system, browser specifications, search queries on our portal, visited college profiles, and session duration.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="usage" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the data collected strictly for lawful and student-beneficial purposes, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs uppercase mb-1">Targeted College Matching</h4>
                  <p className="text-xs text-slate-600">Matching your rank, score, and budget against verified college admission criteria.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs uppercase mb-1">Counselor Callbacks</h4>
                  <p className="text-xs text-slate-600">Enabling our academic counselors to connect with you regarding choice filling and cutoffs.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs uppercase mb-1">Application Support</h4>
                  <p className="text-xs text-slate-600">Facilitating brochure downloads and forwarding application queries with your explicit permission.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs uppercase mb-1">Important Admission Alerts</h4>
                  <p className="text-xs text-slate-600">Sending SMS / WhatsApp notifications about entrance exam dates and counseling deadlines.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                4. Information Sharing & Disclosure
              </h2>
              <p className="mb-3">
                We respect your trust. <strong>We do not sell, rent, or trade your personal data to unauthorized third-party commercial marketing entities.</strong>
              </p>
              <p className="mb-3">
                We share student information only in the following controlled scenarios:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Authorized Partner Colleges & Universities:</strong> When you specifically request a college brochure, express interest in a particular institution, or request an application callback.
                </li>
                <li>
                  <strong>Accredited Service Providers:</strong> Secure SMS/Email gateway providers and cloud hosting partners who operate under strict non-disclosure and data protection contracts.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If mandated by applicable Indian law, court summons, or regulatory authorities.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                5. Cookies & Tracking Technologies
              </h2>
              <p className="mb-3">
                citsAdmission.com uses standard cookies and session tracking to improve user experience, memorize search filters (e.g. stream, city, state selections), and analyze website performance.
              </p>
              <p>
                You can configure your browser to reject cookies or notify you when cookies are being stored; however, certain portal functions such as customized college comparisons may have reduced performance.
              </p>
            </section>

            {/* Section 6 */}
            <section id="security" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                6. Data Security & Storage
              </h2>
              <p className="mb-3">
                We employ industry-grade physical, technical, and administrative safeguards to protect your personal information against unauthorized access, loss, or misuse:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>256-bit SSL (Secure Socket Layer) encryption across all web sessions and form submissions.</li>
                <li>Isolated server environments with role-based access control and continuous security monitoring.</li>
                <li>Strict data segregation ensuring academic counseling records are accessible only to verified counselors.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="rights" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                7. Student & User Rights
              </h2>
              <p className="mb-3">
                You have the right to exercise control over your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Right to Access:</strong> Inquire about what personal details we have stored for your account.</li>
                <li><strong>Right to Rectification:</strong> Request corrections to outdated phone numbers, email addresses, or academic scores.</li>
                <li><strong>Right to Erasure / Opt-Out:</strong> Request permanent removal of your contact information from our counseling callback lists by emailing <a href="mailto:privacy@citsadmission.com" className="text-[#0966c2] font-semibold hover:underline">privacy@citsadmission.com</a>.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="retention" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                8. Data Retention Policy
              </h2>
              <p>
                We retain student inquiry data for the active duration of the relevant academic admission cycle (typically 12 to 24 months) to assist with recurring counseling rounds and allotment processes, after which data is anonymized or safely deleted.
              </p>
            </section>

            {/* Section 9 */}
            <section id="minors" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                9. Children & Minor Protection
              </h2>
              <p>
                Our services are directed to students seeking higher secondary and collegiate education (typically aged 16 and above) and their parents or guardians. If a student is under the age of 18, we strongly encourage counseling inquiries to be submitted with parental knowledge and consent.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                10. Grievance Officer & Inquiries
              </h2>
              <p className="mb-4">
                In accordance with the Information Technology Act 2000 and the Digital Personal Data Protection guidelines, any complaints, data deletion requests, or grievances regarding this policy may be addressed to:
              </p>
              {/* <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                <div className="font-bold text-slate-900 text-base">Data Protection & Grievance Officer</div>
                <div className="text-slate-700">citsAdmission.com Legal & Compliance Cell</div>
                <div className="text-slate-600">Knowledge Boulevard, Sector 62, Noida, NCR - 201309</div>
                <div>Email: <a href="mailto:privacy@citsadmission.com" className="text-[#0966c2] font-semibold hover:underline">privacy@citsadmission.com</a></div>
                <div>Helpline: <a href="tel:18001234567" className="text-[#0966c2] font-semibold hover:underline">1800-123-4567</a></div>
              </div> */}
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
