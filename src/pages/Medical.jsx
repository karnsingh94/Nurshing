import CollegeImage from '../components/CollegeImage.jsx';
import { collegesData } from '../data/collegesData.js';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Medical",
  sourceFile: "Medical.html",
  slug: "medical",
  title: "Top Medical Colleges in India 2025: Ranking, Courses, Fees & Placements",
  head: {
    "meta": [
      {
        "charset": "UTF-8"
      },
      {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge"
      },
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      },
      {
        "name": "theme-color",
        "content": "#545ebd"
      },
      {
        "name": "description",
        "content": "Find TopMedical Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top Medical Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "og:url",
        "content": "/medical-colleges"
      },
      {
        "property": "og:site_name",
        "content": "citsAdmission.com"
      },
      {
        "property": "og:description",
        "content": "Find TopMedical Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "property": "twitter:site",
        "content": "citsAdmission.com"
      },
      {
        "property": "twitter:creator",
        "content": "@getmyuniedu"
      },
      {
        "property": "twitter:url",
        "content": "/medical-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top Medical Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "twitter:description",
        "content": "Find TopMedical Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:image",
        "content": "/images/imported/e0f041c522e80195.png"
      },
      {
        "property": "twitter:image",
        "content": "/images/imported/e0f041c522e80195.png"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    "links": [
      {
        "rel": "dns-prefetch",
        "href": "//www.googletagmanager.com"
      },
      {
        "rel": "preconnect",
        "href": "https://www.googletagmanager.com/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "//www.google-analytics.com"
      },
      {
        "rel": "preconnect",
        "href": "https://securepubads.g.doubleclick.net"
      },
      {
        "rel": "dns-prefetch",
        "href": "//www.google-analytics.com"
      },
      {
        "rel": "dns-prefetch",
        "href": "https://securepubads.g.doubleclick.net"
      },
      {
        "rel": "shortcut icon",
        "type": "image/png",
        "href": "/favicon.png"
      },
      {
        "rel": "icon",
        "href": "/favicon.png",
        "type": "image/x-icon"
      },
      {
        "rel": "stylesheet",
        "href": "/yas/css/version2/jquery-ui.min.css",
        "media": "print",
        "onload": "this.media='all'"
      },
      {
        "rel": "preconnect",
        "href": "https://a.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://b.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://c.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://d.pub.network/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://c.amazon-adsystem.com",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://s.amazon-adsystem.com",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://btloader.com/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://api.btloader.com/",
        "crossorigin": ""
      },
      {
        "rel": "preconnect",
        "href": "https://cdn.confiant-integrations.net",
        "crossorigin": ""
      },
      {
        "rel": "stylesheet",
        "href": "https://a.pub.network/getmyuni-com/cls.css"
      },
      {
        "href": "/medical-colleges",
        "rel": "canonical"
      },
      {
        "href": "/yas/css/version2/min/style.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/lead_form_v4.css?v=1777964298",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/header.css?v=1777964298",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/college-landing-new.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/college-compare-panel.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/stream_location_college_cards.css?v=1777964298",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/bottom-widget.css?v=1777964297",
        "rel": "stylesheet"
      }
    ],
    "styles": [
      "\n        .blueBgDiv.mobileOnly {\n            display: none !important;\n        }\n    "
    ]
  },
};

function MedicalContent() {
  return (
    <>
      <nav className={"breadcrumbDiv news"}>
        <div className={"container"}>
          <ul className={"breadcrumb"}>
            <li>
              <a href={allowedLink("/")} title={"Home"}>
                {"Home"}
              </a>
            </li>
            <li>
              <a href={allowedLink("/all-colleges")} title={"Colleges"}>
                {"Colleges"}
              </a>
            </li>
            <li className={"active"}>
              {"Top Medical Colleges in India"}
            </li>
          </ul>
        </div>
      </nav>
      <div className={"blueBgDiv mobileOnly"}></div>
      <div className={"container"}>
        <div className={"pageRedirectionMenu"}></div>
        <div className={"college__Landing__New"}>
          <div className={"college__Landing__Hero__Section1"}>
            <div className={"college__Landing__Hero__Section pageData pageInfo"}>
              <h1 className={"college__Landing__Hero__Section__Heading"}>
                {"Top Medical Colleges in India 2026"}
              </h1>
              <p>
                {"Top medical colleges in India include AIIMS Delhi, CMC Vellore, PGIMER Chandigarh, JIPMER Puducherry, KMC Manipal, etc. Medicine comprises a variety of healthcare practices to maintain and restore health through the prevention and treatment of illness. Top medical colleges in India offer various specializations - Physiotherapy, Anaesthesia, Medicine, and Pediatrics. To get admission to the best medical colleges in India, candidates must appear for the entrance examinations. The most famous entrance examinations for medical colleges are NEET UG & NEET PG. After pursuing medicine, one can practice Medicine as a general physician, surgeon, medical officer, dentist, etc."}
              </p>
              <h2>
                <strong>
                  <span data-preserver-spaces={"true"}>
                    {"Top Medical Colleges in India: Highlights"}
                  </span>
                </strong>
              </h2>
              <div className={"article-content-flow"}>
                <div className={"article-content-flow"} dir={"auto"} data-message-author-role={"assistant"} data-message-id={"e61d8ff8-6ccb-460a-8d74-04f3ff638cc8"} data-message-model-slug={"gpt-4o"}>
                  <div className={"article-content-flow"}>
                    <div className={"markdown prose w-full break-words dark:prose-invert light"}>
                      <p>
                        {"For admission to undergraduate medical programs such as MBBS, BDS, BAMS, BUMS, and BSc (Hons.) In nursing, the NEET-UG score is the primary criterion. For other specialized fields like Pharmacy, entrance examinations such as AP NEET and SAAT are widely accepted. A significant concentration of India's top 100 medical colleges is located in regions such as Delhi/NCR, Tamil Nadu, Karnataka, Maharashtra, and Uttar Pradesh, reflecting their prominence in medical education. The duration of undergraduate medical courses typically ranges from four to five years, while postgraduate medical programs generally span three years, providing comprehensive training and specialization opportunities."}
                      </p>
                      <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                        <colgroup>
                          <col width={"161"} />
                          <col width={"286"} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>
                              {"Parameters"}
                            </th>
                            <th>
                              {"Statistics"}
                            </th>
                          </tr>
                          <tr>
                            <td>
                              {"No. of Top MBBS colleges in India"}
                            </td>
                            <td>
                              {"40+ colleges"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Annual Fees"}
                            </td>
                            <td>
                              {"INR INR 1-2 lakh: 8 colleges"}
                              <br />
                              {"INR 2-3 lakh: 3 colleges"}
                              <br />
                              {"INR 3-5 lakh: 1 college"}
                              <br />
                              {"> INR 5 lakh: 15 colleges"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Top Specialisations"}
                            </td>
                            <td>
                              {"Cardiology"}
                              <br />
                              {"Cardiovascular Technology"}
                              <br />
                              {"Echo Cardiology and Cardiac Technology"}
                              <br />
                              {"Emergency Medicine"}
                              <br />
                              {"Operation Theatre Technology"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Accepted Entrance Exams"}
                            </td>
                            <td>
                              {"NEET, NEET PG, INI CET, KEAM, etc."}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 id={"TMIndia_b"}>
                        {"Top Medical Colleges in India: NIRF Ranking"}
                      </h2>
                      <div className={"article-content-flow"}>
                        <div className={"article-content-flow"} dir={"auto"} data-message-author-role={"assistant"} data-message-id={"e61d8ff8-6ccb-460a-8d74-04f3ff638cc8"} data-message-model-slug={"gpt-4o"}>
                          <div className={"article-content-flow"}>
                            <div className={"markdown prose w-full break-words dark:prose-invert light"}>
                              <p>
                                {"For admission to undergraduate medical programs such as MBBS, BDS, BAMS, BUMS, and BSc (Hons.) In nursing, the NEET-UG score is the primary criterion. For other specialized fields like Pharmacy, entrance examinations such as AP NEET and SAAT are widely accepted. A significant concentration of India's top 100 medical colleges is located in regions such as Delhi/NCR, Tamil Nadu, Karnataka, Maharashtra, and Uttar Pradesh, reflecting their prominence in medical education. The duration of undergraduate medical courses typically ranges from four to five years, while postgraduate medical programs generally span three years, providing comprehensive training and specialization opportunities."}
                              </p>
                              <p>
                                {"The table below lists the"}
                                <strong>
                                  {"top 10 Medical colleges in India"}
                                </strong>
                                {":"}
                              </p>
                              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                                <tbody>
                                  <tr>
                                    <th>
                                      {"College Name"}
                                    </th>
                                    <th>
                                      {"NIRF 2023"}
                                    </th>
                                    <th>
                                      {"NIRF 2024"}
                                    </th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"All India Institute of Medical Sciences (AIIMS), Delhi"}
                                    </td>
                                    <td>
                                      {"1"}
                                    </td>
                                    <td>
                                      {"1"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Postgraduate Institute of Medical Education and Research, (PGIMER) Chandigarh"}
                                    </td>
                                    <td>
                                      {"2"}
                                    </td>
                                    <td>
                                      {"2"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Christian Medical College, (CMC) Vellore"}
                                    </td>
                                    <td>
                                      {"3"}
                                    </td>
                                    <td>
                                      {"3"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"National Institute of Mental Health and Neurosciences, (NIMHANS) Bangalore"}
                                    </td>
                                    <td>
                                      {"4"}
                                    </td>
                                    <td>
                                      {"4"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Jawaharlal Institute of Postgraduate Medical Education and Research, (JIPMER) Puducherry"}
                                    </td>
                                    <td>
                                      {"5"}
                                    </td>
                                    <td>
                                      {"5"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Sanjay Gandhi Postgraduate Institute of Medical Sciences, (SGPGIMS) Lucknow"}
                                    </td>
                                    <td>
                                      {"7"}
                                    </td>
                                    <td>
                                      {"6"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Banaras Hindu University"}
                                    </td>
                                    <td>
                                      {"8"}
                                    </td>
                                    <td>
                                      {"7"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Amrita Vishwa Vidyapeetham, (Amrita University) Coimbatore"}
                                    </td>
                                    <td>
                                      {"6"}
                                    </td>
                                    <td>
                                      {"8"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Kasturba Medical College, (KMC) Manipal"}
                                    </td>
                                    <td>
                                      {"9"}
                                    </td>
                                    <td>
                                      {"9"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"Madras Medical College and Government General Hospital Chennai"}
                                    </td>
                                    <td>
                                      {"11"}
                                    </td>
                                    <td>
                                      {"10"}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <h3>
                                <strong>
                                  {"Top 10 Medical Colleges in India"}
                                </strong>
                              </h3>
                              <p>
                                {"Below is the list of the top 10 medical colleges in India:"}
                              </p>
                              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                                <tbody>
                                  <tr>
                                    <th>
                                      {"S. No."}
                                    </th>
                                    <th>
                                      {"College Name"}
                                    </th>
                                    <th>
                                      {"MBBS/MD Total Tuition Fees (INR)"}
                                    </th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"1"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/all-india-institute-of-medical-sciences-aiims-new-delhi")} target={"_blank"} rel={"noopener"}>
                                        {"AIIMS Delhi"}
                                      </a>
                                    </td>
                                    <td>
                                      {"8,140"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"2"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/sanjay-gandhi-postgraduate-institute-of-medical-sciences-sgpims-lucknow")} target={"_blank"} rel={"noopener"}>
                                        {"Sanjay Gandhi Postgraduate Institute of Medical Sciences"}
                                      </a>
                                    </td>
                                    <td>
                                      {"2,06,000"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"3"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/post-graduate-institute-of-medical-education-research-pgiome-r-chandigarh")} target={"_blank"} rel={"noopener"}>
                                        {"PGIMER Chandigarh"}
                                      </a>
                                    </td>
                                    <td>
                                      {"7,100"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"4"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/christian-medical-college-cmc-vellore")} target={"_blank"} rel={"noopener"}>
                                        {"CMC Vellore"}
                                      </a>
                                    </td>
                                    <td>
                                      {"2,41,650"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"5"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/banaras-hindu-university-bhu-varanasi")} target={"_blank"} rel={"noopener"}>
                                        {"BHU Varanasi"}
                                      </a>
                                    </td>
                                    <td>
                                      {"51,845"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"6"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/kasturba-medical-college-kmc-udupi")} target={"_blank"} rel={"noopener"}>
                                        {"KMC Manipal"}
                                      </a>
                                    </td>
                                    <td>
                                      {"89,00,000"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"7"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/jawaharlal-institute-of-post-graduate-medical-education-and-research-jiopgmear-puducherry")} target={"_blank"} rel={"noopener"}>
                                        {"JIPMER Puducherry"}
                                      </a>
                                    </td>
                                    <td>
                                      {"24,850"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"8"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/king-george-s-medical-university-kgmu-lucknow")} target={"_blank"} rel={"noopener"}>
                                        {"KGMU"}
                                      </a>
                                    </td>
                                    <td>
                                      {"2,74,500"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"9"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/sri-ramachandra-university-sri-ramachandra-medical-college-and-research-institute-srusrmcri-chennai")} target={"_blank"} rel={"noopener"}>
                                        {"Sri Ramachandra University Chennai"}
                                      </a>
                                    </td>
                                    <td>
                                      {"50,00,000"}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"10"}
                                    </td>
                                    <td>
                                      <a href={allowedLink("/college/st-john-s-medical-college-sjmc-bangalore")} target={"_blank"} rel={"noopener"}>
                                        {"St John's Medical College"}
                                      </a>
                                    </td>
                                    <td>
                                      {"31,40,850"}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <h3>
                                <strong>
                                  {"Top 10 Medical Universities in India"}
                                </strong>
                              </h3>
                              <p>
                                {"Top medical colleges in India are affiliated to approved universities in India. Below are the top 10 medical universities in India"}
                              </p>
                              <table border={"1"}>
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>
                                        {"S. No."}
                                      </strong>
                                    </td>
                                    <td>
                                      <strong>
                                        {"University Name"}
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"1"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/banaras-hindu-university-bhu-varanasi")} target={"_blank"} rel={"noopener"}>
                                        {"BHU Varanasi"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"2"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/university-college-of-medical-sciences-ucms-new-delhi")} target={"_blank"} rel={"noopener"}>
                                        {"UCMS"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"3"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/king-george-s-medical-university-kgmu-lucknow")} target={"_blank"} rel={"noopener"}>
                                        {"KGMU"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"4"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                                        {"Jamia Hamdard University"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"5"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/manipal-university-mu-manipal")} target={"_blank"} rel={"noopener"}>
                                        {"Manipal Academy of Higher Education"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"6"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/aligarh-muslim-university-amu-aligarh")} target={"_blank"} rel={"noopener"}>
                                        {"AMU"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"7"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/all-india-institute-of-medical-sciences-aiims-new-delhi")} target={"_blank"} rel={"noopener"}>
                                        {"AIIMS Delhi"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"8"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/sanjay-gandhi-postgraduate-institute-of-medical-sciences-sgpims-lucknow")} target={"_blank"} rel={"noopener"}>
                                        {"Sanjay Gandhi Postgraduate Institute of Medical Sciences"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"9"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-post-graduate-medical-education-and-research-iopgmear-kolkata")} target={"_blank"} rel={"noopener"}>
                                        {"Institute of Post-Graduate Medical Education and Research"}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {"10"}
                                    </td>
                                    <td>
                                      <a className={"in-cell-link"} href={allowedLink("/college/amrita-vishwa-vidyapeetham-university-coimbatore")} target={"_blank"} rel={"noopener"}>
                                        {"Amrita University Coimbatore"}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"article-content-flow"}>
                        <div className={"article-content-flow"}>
                          <h2 className={"article-content-flow"}>
                            <strong>
                              {"Deemed Medical Colleges in India"}
                            </strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"article-content-flow"}>
                <div className={"article-content-flow"}>
                  <div className={"article-content-flow"}>
                    <p>
                      {"Listed below are the best-deemed medical colleges in India."}
                    </p>
                    <table border={"1"}>
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              {"S. No."}
                            </strong>
                          </td>
                          <td>
                            <strong>
                              {"College Name"}
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {"1"}
                          </td>
                          <td>
                            <a className={"in-cell-link"} href={allowedLink("/college/gandhi-institute-of-technology-and-management-gitam-vishakhapatnam")} target={"_blank"} rel={"noopener"}>
                              {"GITAM University Visakhapatnam"}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {"2"}
                          </td>
                          <td>
                            <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                              {"Jamia Hamdard University"}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {"3"}
                          </td>
                          <td>
                            <a className={"in-cell-link"} href={allowedLink("/college/jawaharlal-nehru-medical-college-jnmc-belgaum")} target={"_blank"} rel={"noopener"}>
                              {"JNMC Belgaum"}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {"4"}
                          </td>
                          <td>
                            <a className={"in-cell-link"} href={allowedLink("/college/amrita-school-of-medicine-asm-kochi")} target={"_blank"} rel={"noopener"}>
                              {"Amrita Center for Allied Health Science"}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {"5"}
                          </td>
                          <td>
                            <a className={"in-cell-link"} href={allowedLink("/college/bharati-vidyapeeth-medical-college-bvmc-pune")} target={"_blank"} rel={"noopener"}>
                              {"BVMC Pune"}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>
                      <strong>
                        {"Medical College Fees in India"}
                      </strong>
                    </h2>
                    <div className={"article-content-flow"}>
                      <div className={"article-content-flow"} dir={"auto"} data-message-author-role={"assistant"} data-message-id={"c7183a16-6bd8-4d9f-a6ef-10db2b750fff"} data-message-model-slug={"gpt-4o"}>
                        <div className={"article-content-flow"}>
                          <div className={"markdown prose w-full break-words dark:prose-invert light"}>
                            <p>
                              {"The fee structure of medical colleges in India varies significantly based on whether the institution is government-funded or privately owned. Government medical colleges generally have a lower fee structure compared to private medical colleges, making them a more affordable option for students while maintaining high standards of education and infrastructure. Renowned government medical institutions in India are known for their cost-effective programs, offering quality education, state-of-the-art resources, and experienced faculty, ensuring accessibility to students from diverse economic backgrounds. In contrast, private medical colleges often charge higher fees due to the additional facilities and specialized services they offer."}
                            </p>
                            <h3>
                              <strong>
                                {"Top Government Medical Colleges in India with Fees"}
                              </strong>
                            </h3>
                            <p>
                              {"There are around 2074 medical colleges in India, of which 615 are government medical colleges. Given below is the list of top government medical college fees in India."}
                            </p>
                            <table border={"1"}>
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>
                                      {"College Name"}
                                    </strong>
                                  </td>
                                  <td>
                                    <strong>
                                      {"MBBS Total Tuition Fees (INR)"}
                                    </strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/all-india-institute-of-medical-sciences-aiims-new-delhi")} target={"_blank"} rel={"noopener"}>
                                      {"AIIMS Delhi"}
                                    </a>
                                  </td>
                                  <td>
                                    {"8,140"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/banaras-hindu-university-bhu-varanasi")} target={"_blank"} rel={"noopener"}>
                                      {"BHU Varanasi"}
                                    </a>
                                  </td>
                                  <td>
                                    {"51,845"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/king-george-s-medical-university-kgmu-lucknow")} target={"_blank"} rel={"noopener"}>
                                      {"KGMU"}
                                    </a>
                                  </td>
                                  <td>
                                    {"2,74,500"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/aligarh-muslim-university-amu-aligarh")} target={"_blank"} rel={"noopener"}>
                                      {"AMU"}
                                    </a>
                                  </td>
                                  <td>
                                    {"50,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/maulana-azad-medical-college-mamc-new-delhi")} target={"_blank"} rel={"noopener"}>
                                      {"MAMC Delhi"}
                                    </a>
                                  </td>
                                  <td>
                                    {"22,225"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/vardhman-mahavir-medical-college-vmmc-new-delhi")} target={"_blank"} rel={"noopener"}>
                                      {"VMMC"}
                                    </a>
                                  </td>
                                  <td>
                                    {"1,67,500"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/university-college-of-medical-sciences-ucms-new-delhi")} target={"_blank"} rel={"noopener"}>
                                      {"UCMS"}
                                    </a>
                                  </td>
                                  <td>
                                    {"35,225"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/annamalai-university-au-cuddalore")} target={"_blank"} rel={"noopener"}>
                                      {"Annamalai University"}
                                    </a>
                                  </td>
                                  <td>
                                    {"5,54,370"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/sri-venkateswara-institute-of-medical-sciences-svioms-tirupati")} target={"_blank"} rel={"noopener"}>
                                      {"Sri Venkateswara Institute of Medical Sciences"}
                                    </a>
                                  </td>
                                  <td>
                                    {"3,39,500"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/armed-forces-medical-college-afmc-pune")} target={"_blank"} rel={"noopener"}>
                                      {"AFMC"}
                                    </a>
                                  </td>
                                  <td>
                                    {"1,59,350"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <h3>
                              <strong>
                                {"Private Medical Colleges in India with Fees"}
                              </strong>
                            </h3>
                            <p>
                              {"Below is the list of the best private medical college fees in India."}
                            </p>
                            <table border={"1"}>
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>
                                      {"College Name"}
                                    </strong>
                                  </td>
                                  <td>
                                    <strong>
                                      {"MBBS Total Tuition Fees (INR)"}
                                    </strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/christian-medical-college-cmc-vellore")} target={"_blank"} rel={"noopener"}>
                                      {"CMC Vellore"}
                                    </a>
                                  </td>
                                  <td>
                                    {"2,41,650"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/kasturba-medical-college-kmc-udupi")} target={"_blank"} rel={"noopener"}>
                                      {"KMC Manipal"}
                                    </a>
                                  </td>
                                  <td>
                                    {"89,00,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/sri-ramachandra-university-sri-ramachandra-medical-college-and-research-institute-srusrmcri-chennai")} target={"_blank"} rel={"noopener"}>
                                      {"Sri Ramachandra University Chennai"}
                                    </a>
                                  </td>
                                  <td>
                                    {"50,00,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                                      {"Jamia Hamdard University"}
                                    </a>
                                  </td>
                                  <td>
                                    {"64,00,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/kasturba-medical-college-kmc-mangalore")} target={"_blank"} rel={"noopener"}>
                                      {"KMC Mangalore"}
                                    </a>
                                  </td>
                                  <td>
                                    {"89,00,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/jss-medical-college-and-hospital-jmcah-mysore")} target={"_blank"} rel={"noopener"}>
                                      {"JSS Medical College"}
                                    </a>
                                  </td>
                                  <td>
                                    {"73,75,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/christian-medical-college-cmc-ludhiana")} target={"_blank"} rel={"noopener"}>
                                      {"CMC Ludhiana"}
                                    </a>
                                  </td>
                                  <td>
                                    {"33,00,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/dr-dy-patil-vidyapeeth-ddypv-pune")} target={"_blank"} rel={"noopener"}>
                                      {"Dr. D.Y. Patil Vidyapeeth, Pune"}
                                    </a>
                                  </td>
                                  <td>
                                    {"27,50,000"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a className={"in-cell-link"} href={allowedLink("/college/dayanand-medical-college-and-hospital-dmcah-ludhiana")} target={"_blank"} rel={"noopener"}>
                                      {"DMCH Ludhiana"}
                                    </a>
                                  </td>
                                  <td>
                                    {"11,00,000"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <h2>
                              <strong>
                                {"Top Medical Colleges in India Admission"}
                              </strong>
                            </h2>
                            <p>
                              {"Admission to top medical colleges in India can be through entrance examinations accepted by the medical colleges. The cutoff list of top medical colleges in India is released every year after the entrance exams."}
                            </p>
                            <h3>
                              <strong>
                                {"Eligibility Criteria"}
                              </strong>
                            </h3>
                            <p>
                              {"Candidates must fulfill the eligibility criteria to get admission to the best medical colleges."}
                            </p>
                            <p>
                              <strong>
                                {"MBBS"}
                              </strong>
                            </p>
                            <ul>
                              <li aria-level={"1"}>
                                {"Candidates must have passed 12th with a minimum of 45% marks from the PCB/PCMB stream."}
                              </li>
                            </ul>
                            <p>
                              <strong>
                                {"MD"}
                              </strong>
                            </p>
                            <ul>
                              <li>
                                {"Candidates need to have a valid MBBS degree from a University/Institute recognized by the MCI."}
                              </li>
                            </ul>
                            <p>
                              <strong>
                                {"Ph.D."}
                              </strong>
                            </p>
                            <ul>
                              <li>
                                {"A post-graduate degree in Medicine or MS/MD with a minimum aggregate of 55% marks from a recognized university."}
                              </li>
                            </ul>
                            <h2>
                              <strong>
                                {"Specialisations Available in Top Medical Colleges in India"}
                              </strong>
                            </h2>
                            <p>
                              {"Specialization is offered in many subjects in top medical colleges in India. Listed below is the list of most famous specializations opted by students in top-ranking medical colleges in India"}
                            </p>
                            <ul>
                              <li aria-level={"1"}>
                                {"Physiotherapy"}
                              </li>
                              <li aria-level={"1"}>
                                {"Medical Laboratory Technology"}
                              </li>
                              <li aria-level={"1"}>
                                {"Anesthesia"}
                              </li>
                              <li aria-level={"1"}>
                                {"Medicine"}
                              </li>
                              <li aria-level={"1"}>
                                {"Pediatrics"}
                              </li>
                            </ul>
                            <h3>
                              <strong>
                                {"Top Medical Colleges in India for Physiotherapy"}
                              </strong>
                            </h3>
                            <p>
                              {"The top medical colleges in India offer specialization in Physiotherapy. Listed below is the list of top medical colleges in India offering specialization in Physiotherapy."}
                            </p>
                            <ul>
                              <li aria-level={"1"}>
                                <span>
                                  <a className={"in-cell-link"} href={allowedLink("/college/post-graduate-institute-of-medical-education-research-pgiome-r-chandigarh")} target={"_blank"} rel={"noopener"}>
                                    {"PGIMER Chandigarh"}
                                  </a>
                                </span>
                              </li>
                              <li aria-level={"1"}>
                                <span>
                                  <a className={"in-cell-link"} href={allowedLink("/college/christian-medical-college-cmc-vellore")} target={"_blank"} rel={"noopener"}>
                                    {"CMC Vellore"}
                                  </a>
                                </span>
                              </li>
                              <li aria-level={"1"}>
                                <a href={allowedLink("/college/aligarh-muslim-university-amu-aligarh")} target={"_blank"} rel={"noopener"}>
                                  {"AMU"}
                                </a>
                              </li>
                              <li aria-level={"1"}>
                                <span>
                                  <a className={"in-cell-link"} href={allowedLink("/college/sri-ramachandra-university-sri-ramachandra-medical-college-and-research-institute-srusrmcri-chennai")} target={"_blank"} rel={"noopener"}>
                                    {"Sri Ramachandra University Chennai"}
                                  </a>
                                </span>
                              </li>
                              <li aria-level={"1"}>
                                <a href={allowedLink("/college/king-george-s-medical-university-kgmu-lucknow")} target={"_blank"} rel={"noopener"}>
                                  {"KGMU"}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"article-content-flow"}>
                      <div className={"article-content-flow"}>
                        <div className={"article-content-flow"}>
                          <h3>
                            <strong>
                              {"Top Medical Colleges in India for Medical Laboratory Technology"}
                            </strong>
                          </h3>
                          <p>
                            {"The best medical colleges in India offer specialization in Medical Laboratory Technology. Listed below are the top medical colleges in India offering specialization in Medical Laboratory Technology"}
                          </p>
                          <ul>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/post-graduate-institute-of-medical-education-research-pgiome-r-chandigarh")} target={"_blank"} rel={"noopener"}>
                                  {"PGIMER Chandigarh"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/banaras-hindu-university-bhu-varanasi")} target={"_blank"} rel={"noopener"}>
                                  {"BHU Varanasi"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/jawaharlal-institute-of-post-graduate-medical-education-and-research-jiopgmear-puducherry")} target={"_blank"} rel={"noopener"}>
                                  {"JIPMER Puducherry"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/king-george-s-medical-university-kgmu-lucknow")} target={"_blank"} rel={"noopener"}>
                                  {"KGMU"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <a className={"in-cell-link"} href={allowedLink("/college/sri-ramachandra-university-sri-ramachandra-medical-college-and-research-institute-srusrmcri-chennai")} target={"_blank"} rel={"noopener"}>
                                {"Sri Ramachandra University Chennai"}
                              </a>
                            </li>
                          </ul>
                          <h3>
                            <strong>
                              {"Top Medical Colleges in India for Medicine"}
                            </strong>
                          </h3>
                          <p>
                            {"Given below is the best medical colleges in India offering specialization in Medicine"}
                          </p>
                          <ul>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/all-india-institute-of-medical-sciences-aiims-new-delhi")} target={"_blank"} rel={"noopener"}>
                                  {"AIIMS Delhi"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/post-graduate-institute-of-medical-education-research-pgiome-r-chandigarh")} target={"_blank"} rel={"noopener"}>
                                  {"PGIMER Chandigarh"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/christian-medical-college-cmc-vellore")} target={"_blank"} rel={"noopener"}>
                                  {"CMC Vellore"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/sanjay-gandhi-postgraduate-institute-of-medical-sciences-sgpims-lucknow")} target={"_blank"} rel={"noopener"}>
                                  {"Sanjay Gandhi Postgraduate Institute of Medical Sciences"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/banaras-hindu-university-bhu-varanasi")} target={"_blank"} rel={"noopener"}>
                                  {"BHU Varanasi"}
                                </a>
                              </span>
                            </li>
                          </ul>
                          <h3>
                            <strong>
                              {"Top Medical Colleges in India for Anaesthesia"}
                            </strong>
                          </h3>
                          <p>
                            {"Below mentioned are top medical colleges in India offering specialization in Anaesthesia"}
                          </p>
                          <ul>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/all-india-institute-of-medical-sciences-aiims-new-delhi")} target={"_blank"} rel={"noopener"}>
                                  {"AIIMS Delhi"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/post-graduate-institute-of-medical-education-research-pgiome-r-chandigarh")} target={"_blank"} rel={"noopener"}>
                                  {"PGIMER Chandigarh"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/christian-medical-college-cmc-vellore")} target={"_blank"} rel={"noopener"}>
                                  {"CMC Vellore"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/sanjay-gandhi-postgraduate-institute-of-medical-sciences-sgpims-lucknow")} target={"_blank"} rel={"noopener"}>
                                  {"Sanjay Gandhi Postgraduate Institute of Medical Sciences"}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a className={"in-cell-link"} href={allowedLink("/college/banaras-hindu-university-bhu-varanasi")} target={"_blank"} rel={"noopener"}>
                                  {"BHU Varanasi"}
                                </a>
                              </span>
                            </li>
                          </ul>
                          <div className={"article-content-flow"}>
                            <h2>
                              <strong>
                                {"Entrance Exams for Top Medical Colleges in India"}
                              </strong>
                            </h2>
                            <p>
                              {"There are entrance exams conducted all over the country for admission to top medical colleges in India. Listed below are the most prestigious entrance exams for medical in India"}
                            </p>
                            <ul>
                              <li aria-level={"1"}>
                                {"NEET UG"}
                              </li>
                              <li aria-level={"1"}>
                                {"NEET PG"}
                              </li>
                              <li aria-level={"1"}>
                                {"CUET"}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span data-state={"closed"}>
                      <button id={"radix-:r53:"} className={"cursor-pointer h-[30px] rounded-md px-1 text-token-text-secondary hover:bg-token-main-surface-secondary"} type={"button"} aria-haspopup={"menu"} aria-expanded={"false"} data-state={"closed"}></button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax  col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"medical"} data-attr={"stream"} className={"filter__selected"}>
                  {"Medical"}
                  <i className={"spriteIcon small__close__icon remove-college-filter"}></i>
                </button>
              </div>
              <div className={"mobile__clear__filter"}>
                <span id={"clearAllClg"} className={"clearAll"}>
                  {"Clear All"}
                </span>
              </div>
            </div>
            <div className={"sort__row__container"}>
              <h3 className={"filtered__college_count"}>
                {"Showing 869 Colleges"}
              </h3>
              <div className={"sortBy__select2__container desktopOnly"}>
                <span>
                  {"Sort By:"}
                </span>
                <select id={"college-sort"} name={"college-sort"}>
                  <option value={"position"}>
                    {"Popularity"}
                  </option>
                  <option value={"rank"}>
                    {"Ranking"}
                  </option>
                  <option value={"highest_fee"}>
                    {"Highest Fees"}
                  </option>
                  <option value={"lowest_fee"}>
                    {"Lowest Fees"}
                  </option>
                </select>
              </div>
            </div>
            <div className={"searchBar"}>
              <input className={"search-autocomplete1 search-listing"} id={"autoComplete"} autoComplete={"off"} placeholder={"Search for Colleges"} type={"text"} tabIndex={"1"} />
              <i className={"spriteIcon small__close__icon search-remove"}></i>
              <div className={"selection"}></div>
            </div>
            <div className={"filtered__colleges__list"}>
              <div className={"searchedcollegeList"}>
                {collegesData.map((item, index) => {
                  const stateName = { "HR": "Haryana", "RJ": "Rajasthan", "TG": "Telangana", "OR": "Odisha", "JK": "Jammu & Kashmir", "KA": "Karnataka", "BR": "Bihar", "ML": "Meghalaya", "UP": "Uttar Pradesh", "PB": "Punjab", "MH": "Maharashtra", "WB": "West Bengal", "TR": "Tripura", "HP": "Himachal Pradesh", "JH": "Jharkhand", "CT": "Chhattisgarh", "AP": "Andhra Pradesh", "GJ": "Gujarat", "GA": "Goa", "TN": "Tamil Nadu", "MP": "Madhya Pradesh", "KL": "Kerala", "UT": "Uttarakhand" }[item.state] || item.state || '';
                  const locationStr = `${item.city || item.district || ''}${(item.city || item.district) && stateName ? ', ' : ''}${stateName}`;
                  return (
                    <div className={"college__card__new "} key={item.id || index} id={`search-${item.code || index}`}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <CollegeImage college={item}
                            width={"56"}
                            height={"56"}
                            className={"college__image"}
                            alt={item.name}
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink(`/college/${item.id}`)} title={item.name} data-hide={item.code}>
                                {item.name}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {locationStr}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {item.sector || "Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={`${item.name} Reviews`} href={allowedLink(`/college/${item.id}/reviews`)}>
                                <span className={"list__style college__rating"}>
                                  <span className={"spriteIcon__2 review__star__icon"}></span>
                                  {"4.5"}
                                </span>
                              </a>
                              <div className={"like__compare__grid mobileOnly"}>
                                <span className={"compare__icon spriteIcon__2 compareIcon"}></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"like__compare__grid desktopOnly"}>
                          <span className={"compare__icon spriteIcon__2 compareIcon"}></span>
                        </div>
                      </div>
                      <div className={"summary-text fsdfsdfs"}>
                        <p className={"template-text1 template-text add-read-more show-less-content"}>
                          {`${item.name} is a premier ${item.sector || 'Private'} institute located in ${locationStr}. College Code: ${item.code || 'N/A'}.`}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={`${item.name} Courses`}>
                                  {`${item.coursesCount || 6} Courses`}
                                </a>
                              </h3>
                            </span>
                          </div>
                          <div className={"highlight__div exam__accepted__div"}>
                            <h3 className={"highlight__name"}>{"Exam Accepted"}</h3>
                            <h3 className={"highlight__value"}>
                              <a target={"_blank"} href={allowedLink("/exams")}>
                                {"Entrance Exam"}
                              </a>
                            </h3>
                          </div>
                          <div className={"desktopOnly"}></div>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Tuition Fees Range"}</h3>
                            <h3 className={"highlight__value"}>{"-/-"}</h3>
                          </div>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Gender Acceptance"}</h3>
                            <h3 className={"highlight__value"}>
                              <span className={"highlight__value"}>{item.genderAcceptance || "Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={item.name}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-college-id={item.id} data-description={item.name}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={"load__more__row"}>
                <div className={"load__more__button loadMoreList"} hasnesxt={"1"} data-irank={"1"} data-page={"1"}>
                  {"Load More Colleges"}
                  <span className={"spriteIcon__2 red__angle__icon"}></span>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-md-3 desktopOnly"}>
            <div className={"lazy-ad"} data-slot={"0"} data-freestar-ad={"__300x600"} id={"getmyuni-com_siderail_right_2"} style={{ textAlign: "center" }}></div>
            <div className={"lazy-ad"} data-slot={"1"} data-freestar-ad={"__300x600"} id={"getmyuni-com_siderail_right"} style={{ textAlign: "center" }}></div>
          </div>
          <div className={"col-md-3 mobileOnly"}>
            <div className={"lazy-ad"} data-slot={"2"} data-freestar-ad={"__300x250"} id={"getmyuni-com_siderail_right"} style={{ textAlign: "center" }}></div>
          </div>
        </div>
        <div className={"interestedExam"}></div>
        <div className={"filter-faq"}></div>
        <section className={"testing"}></section>
      </div>
      <div className={"desktopOnly getSupport college-filter-get-support"}>
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"medical"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
      </div>
      <div id={"college_compare_header_select_panel"}></div>
      <div className={"feedback__container"}>
        <form className={"feedback__form"} action={"#"} id={"feedback-form"}>
          <div className={"errorHtml"}></div>
          <span className={"spriteIcon closeIcon"}></span>
          <div className={"show_form"}>
            <p className={"text1"}>
              {"Your opinion matters to us!"}
            </p>
            <p className={"text2"}>
              {"We will use this feedback to improve your experience."}
            </p>
            <ul className={"rating__buttons"}>
              <li data-value={"1"}>
                <input type={"radio"} name={"rating"} id={"rating1"} defaultValue={"1"} />
                <label htmlFor={"rating1"}>
                  {"1"}
                </label>
              </li>
              <li data-value={"2"}>
                <input type={"radio"} name={"rating"} id={"rating2"} defaultValue={"2"} />
                <label htmlFor={"rating2"}>
                  {"2"}
                </label>
              </li>
              <li data-value={"3"}>
                <input type={"radio"} name={"rating"} id={"rating3"} defaultValue={"3"} />
                <label htmlFor={"rating3"}>
                  {"3"}
                </label>
              </li>
              <li data-value={"4"}>
                <input type={"radio"} name={"rating"} id={"rating4"} defaultValue={"4"} />
                <label htmlFor={"rating4"}>
                  {"4"}
                </label>
              </li>
              <li data-value={"5"}>
                <input type={"radio"} name={"rating"} id={"rating5"} defaultValue={"5"} />
                <label htmlFor={"rating5"}>
                  {"5"}
                </label>
              </li>
              <li data-value={"6"}>
                <input type={"radio"} name={"rating"} id={"rating6"} defaultValue={"6"} />
                <label htmlFor={"rating6"}>
                  {"6"}
                </label>
              </li>
              <li data-value={"7"}>
                <input type={"radio"} name={"rating"} id={"rating7"} defaultValue={"7"} />
                <label htmlFor={"rating7"}>
                  {"7"}
                </label>
              </li>
              <li data-value={"8"}>
                <input type={"radio"} name={"rating"} id={"rating8"} defaultValue={"8"} />
                <label htmlFor={"rating8"}>
                  {"8"}
                </label>
              </li>
              <li data-value={"9"}>
                <input type={"radio"} name={"rating"} id={"rating9"} defaultValue={"9"} />
                <label htmlFor={"rating9"}>
                  {"9"}
                </label>
              </li>
              <li data-value={"10"}>
                <input type={"radio"} name={"rating"} id={"rating10"} defaultValue={"10"} />
                <label htmlFor={"rating10"}>
                  {"10"}
                </label>
              </li>
            </ul>
            <p className={"text3"}>
              {"You Rated Below Average"}
            </p>
            <input type={"hidden"} name={"rating_option_text"} className={"rating_option_text"} defaultValue={""} />
            <input type={"hidden"} name={"url"} className={"current-url"} defaultValue={""} />
            <p className={"text4"}>
              {"I found the page information"}
            </p>
            <ul className={"feedback__buttons"}>
              <li className={"one-to-four"} data-value={"1"}>
                <input type={"radio"} name={"rating_option"} id={"feedback1"} defaultValue={"Incorrect"} />
                <label htmlFor={"feedback1"}>
                  {"Incorrect"}
                </label>
              </li>
              <li className={"one-to-four"} data-value={"2"}>
                <input type={"radio"} name={"rating_option"} id={"feedback2"} defaultValue={"Irrelevant"} />
                <label htmlFor={"feedback2"}>
                  {"Irrelevant"}
                </label>
              </li>
              <li className={"one-to-four"} data-value={"3"}>
                <input type={"radio"} name={"rating_option"} id={"feedback3"} defaultValue={"Insufficient"} />
                <label htmlFor={"feedback3"}>
                  {"Insufficient"}
                </label>
              </li>
              <li className={"one-to-four"} data-value={"4"}>
                <input type={"radio"} name={"rating_option"} id={"feedback4"} defaultValue={"Confusing"} />
                <label htmlFor={"feedback4"}>
                  {"Confusing"}
                </label>
              </li>
              <li className={"five-to-seven"} data-value={"5"}>
                <input type={"radio"} name={"rating_option"} id={"feedback5"} defaultValue={"Not-up-to-date"} />
                <label htmlFor={"feedback5"}>
                  {"Not up-to-date"}
                </label>
              </li>
              <li className={"five-to-seven"} data-value={"6"}>
                <input type={"radio"} name={"rating_option"} id={"feedback6"} defaultValue={"Insufficient"} />
                <label htmlFor={"feedback6"}>
                  {"Insufficient"}
                </label>
              </li>
              <li className={"five-to-seven"} data-value={"7"}>
                <input type={"radio"} name={"rating_option"} id={"feedback7"} defaultValue={"Helpful"} />
                <label htmlFor={"feedback7"}>
                  {"Helpful"}
                </label>
              </li>
              <li className={"eight-to-ten"} data-value={"8"}>
                <input type={"radio"} name={"rating_option"} id={"feedback8"} defaultValue={"Found-Relevant"} />
                <label htmlFor={"feedback8"}>
                  {"Found Relevant"}
                </label>
              </li>
              <li className={"eight-to-ten"} data-value={"9"}>
                <input type={"radio"} name={"rating_option"} id={"feedback9"} defaultValue={"Easy-to-read"} />
                <label htmlFor={"feedback9"}>
                  {"Easy to read"}
                </label>
              </li>
              <li className={"eight-to-ten"} data-value={"10"}>
                <input type={"radio"} name={"rating_option"} id={"feedback10"} defaultValue={"Up-to-date"} />
                <label htmlFor={"feedback10"}>
                  {"Up to date"}
                </label>
              </li>
              <li className={"eight-to-ten"} data-value={"11"}>
                <input type={"radio"} name={"rating_option"} id={"feedback11"} defaultValue={"Precise"} />
                <label htmlFor={"feedback11"}>
                  {"Precise"}
                </label>
              </li>
            </ul>
            <div id={"option-error-one"} className={"error__position"}></div>
            <p className={"text4"}>
              {"Please provide your feedback so that we can improve your experience."}
            </p>
            <textarea className={"write__feedback"} placeholder={"Write here..."} name={"experience_text"}></textarea>
            <div id={"option-error-two"} className={"error__position"}></div>
            <button className={"primaryBtn feed-back-button"}>
              {"Submit"}
            </button>
          </div>
          <div className={"hide_form"} style={{ display: "none" }}>
            <img src={"../../yas/images/lead-form-thankyou.png"} loading={"lazy"} />
            <img src={"/brand-logo.svg"} className={"lead__form__logo"} loading={"lazy"} />
            <p className={"feedback-text"}>
              {"Thanks for FeedBack"}
            </p>
          </div>
        </form>
      </div>
      <img src={"/yas/images/scroll_to_top.webp"} className={"scrollToTop"} loading={"lazy"} />
      <div id={"lead-form-js-new"} style={{ display: "none" }}></div>
      <div id={"login-form-js"} style={{ display: "none" }}></div>
      <div id={"fees-breakup"} style={{ display: "none" }}></div>
      <div className={"pageLoader"} id={"filter-loader"}>
        <div className={"pageLoaderDiv"}>
          <div className={"circle"}></div>
          <p className={"loadText"}>
            {"Loading..."}
          </p>
        </div>
      </div>
    </>
  );
}

export default function MedicalPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <MedicalContent />
    </PageRenderer>
  );
}
