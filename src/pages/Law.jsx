import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Law",
  sourceFile: "Law.html",
  slug: "law",
  title: "Top Law Colleges in India 2025: Ranking, Courses, Fees & Placements",
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
        "content": "Find TopLaw Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top Law Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "og:url",
        "content": "/law-colleges"
      },
      {
        "property": "og:site_name",
        "content": "citsAdmission.com"
      },
      {
        "property": "og:description",
        "content": "Find TopLaw Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "content": "/law-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top Law Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "twitter:description",
        "content": "Find TopLaw Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:image",
        "content": "https://media.getmyuni.com/yas/images/banner.png"
      },
      {
        "property": "twitter:image",
        "content": "https://media.getmyuni.com/yas/images/banner.png"
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
        "href": "/law-colleges",
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

function LawContent() {
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
              {"Top Law Colleges in India"}
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
                {"Top Law Colleges in India 2026"}
              </h1>
              <p>
                <span data-preserver-spaces={"true"}>
                  {"Top law colleges in India cover the National Law School of India University, Bengaluru, National Law University, Delhi, and NALSAR University of Law, Hyderabad Law is a systematic set of rules and regulations enforced by government institutes to control the behaviour of the people living in the society. Law Universities and institutions in India provide all the facilities to improve the overall personality of the students by conducting several workshops. Top Law colleges in India also try to induce all the necessary skills required while practicing"}
                </span>
                <strong>
                  <span data-preserver-spaces={"true"}></span>
                </strong>
                <span data-preserver-spaces={"true"}>
                  {"Law"}
                </span>
                <strong>
                  <span data-preserver-spaces={"true"}>
                    {"."}
                  </span>
                </strong>
                <span data-preserver-spaces={"true"}>
                  {"Eligibility criteria for admission to top law colleges in India are that candidates should pass graduation 10+2+3 in any discipline from a recognized college and university with 45 % marks. Students can get many job opportunities in the law domain. After getting a Law degree, the most common and traditional Law Career Option available is to enter litigation. Students can start a Career in Law as an Advocate or lawyer wherein the candidate's job is to represent clients in courts District courts, high courts, etc., anywhere in India."}
                </span>
              </p>
              <h2>
                <strong>
                  {"Top Law Colleges in India: Highlights"}
                </strong>
              </h2>
              <p>
                {"Law colleges in India include highly reputed law career options in India. Law stream provides various specialisation Admiralty Law, Business Law, Constitutional Law, Criminal Law, Environmental Law, etc. Students get the opportunity to work as legal advisors, corporate lawyers, judge advocate general, etc."}
              </p>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"College Type"}
                      </span>
                    </td>
                    <td>
                      {"860 Private, 365 Government college"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Colleges Affiliated To"}
                      </span>
                    </td>
                    <td>
                      {"BCI, UGC, AICTE etc."}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Entrance Exams Accepted"}
                      </span>
                    </td>
                    <td>
                      {"AIBE, CLAT, CLAT PG etc."}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Specializations"}
                      </span>
                    </td>
                    <td>
                      {"Admiralty Law, Business Law, Constitutional Law, Criminal Law etc"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Approximate Fees"}
                      </span>
                    </td>
                    <td>
                      {"60,000 to 14,00,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p></p>
              <h2>
                <strong>
                  {"Top Law Colleges in India as per NIRF Ranking"}
                </strong>
              </h2>
              <p>
                {"Law colleges in India are ranked by NIRF based on different factors like Placements, course infrastructure, etc. The ranking"}
                <span>
                  {"of law colleges in India"}
                </span>
                {"also includes teaching, research & professional practice. The below table carries the best law colleges in India by NIRF ranking."}
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"469"} />
                  <col width={"185"} />
                  <col width={"201"} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      {"College Name"}
                    </th>
                    <th>
                      {"NIRF ranking"}
                    </th>
                    <th>
                      {"NIRF Score 2024"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"National Law School of India University"}
                    </td>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      {"83.83"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Law University"}
                    </td>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"77.48"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Nalsar University of Law"}
                    </td>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"77.05"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"The West Bengal National University of Juridical Sciences"}
                    </td>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"76.39"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Symbiosis Law School"}
                    </td>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      {"74.62"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Jamia Millia Islamia"}
                    </td>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      {"73.12"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Indian Institute of Technology Kharagpur"}
                    </td>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      {"71.47"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Gujarat National Law University"}
                    </td>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      {"69.56"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Siksha `O` Anusandhan"}
                    </td>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      {"65.4"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Babasaheb Bhimrao Ambedkar University"}
                    </td>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      {"64.96"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                {"Top Govt. Law Colleges in India"}
              </h2>
              <p>
                {"There are more than 100+ govt law colleges in India. the list of top govt. colleges in India."}
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"469"} />
                  <col width={"185"} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      {"College Name"}
                    </th>
                    <th>
                      {"Average Package"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"NLSIU Bangalore"}
                    </td>
                    <td>
                      {"INR 16 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"NLU Delhi"}
                    </td>
                    <td>
                      {"INR 19 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Nalsar University of Law"}
                    </td>
                    <td>
                      {"INR 16 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"NUJS"}
                    </td>
                    <td>
                      {"INR 10 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"JMI"}
                    </td>
                    <td>
                      {"INR 5.4 LPA"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                {"Top Private Law Colleges in India"}
              </h2>
              <p>
                {"The table provide list of top private law colleges in inida"}
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"469"} />
                  <col width={"185"} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      {"College Name"}
                    </th>
                    <th>
                      {"Average Package"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"Symbiosis Law School"}
                    </td>
                    <td>
                      {"INR 8.20 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"SOA"}
                    </td>
                    <td>
                      {"INR 5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"SIMTS"}
                    </td>
                    <td>
                      {"INR 10.8 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Alliance School of Law"}
                    </td>
                    <td>
                      {"INR 5.2 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"LPU"}
                    </td>
                    <td>
                      {"INR 5.5 LPA"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                {"Top 10 Law Colleges in India"}
              </h2>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"469"} />
                  <col width={"185"} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      {"College Name"}
                    </th>
                    <th>
                      {"Annual Fees (In INR)"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"NLSIU, Bengaluru"}
                    </td>
                    <td>
                      {"INR 4.55 LPA TO 10 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"NL U, New Delhi"}
                    </td>
                    <td>
                      {"INR 80K TO 15 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Nalsar University of Law, Hyderabad"}
                    </td>
                    <td>
                      {"INR 8.5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"WBNUJS, Kolkata"}
                    </td>
                    <td>
                      {"INR 10 K TO 8.5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Jamia Milia Islamia, New Delhi"}
                    </td>
                    <td>
                      {"INR 1.5 LPTA TO 6.5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Symbiosis Law School, Pune"}
                    </td>
                    <td>
                      {"INR 22.65 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"GNLU, Gandhinagar"}
                    </td>
                    <td>
                      {"INR 9.32 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"NLU, Jodhpur"}
                    </td>
                    <td>
                      {"INR 1.1 LPA TO 8.5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"GGSIU, Delhi"}
                    </td>
                    <td>
                      {"INR 7.5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Law Institute University, Bhopal"}
                    </td>
                    <td>
                      {"INR 14.75 LPA"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Law Colleges in India by Outlook Ranking"}
                </strong>
              </h2>
              <p>
                {"The following table provides the top 10 law colleges in India by Outlook."}
              </p>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        {"Ranking"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Outlook Score"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"1"}
                      </span>
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jindal-global-law-school-jgls-sonipat")} target={"_blank"} rel={"noopener"}>
                        {"Jindal Global Law School"}
                      </a>
                    </td>
                    <td>
                      {"753"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"NLU Delhi"}
                      </a>
                    </td>
                    <td>
                      {"768.48"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/nalsar-university-of-law-hyderabad")} target={"_blank"} rel={"noopener"}>
                        {"NALSAR University of Law Hyderabad"}
                      </a>
                    </td>
                    <td>
                      {"757.1"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/gujarat-national-law-university-gandhi-nagar")} target={"_blank"} rel={"noopener"}>
                        {"GNLU Gandhinagar"}
                      </a>
                    </td>
                    <td>
                      {"741.26"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/lloyd-business-school-greater-noida")} target={"_blank"} rel={"noopener"}>
                        {"Lloyd Business School"}
                      </a>
                    </td>
                    <td>
                      {"639.55"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore")} target={"_blank"} rel={"noopener"}>
                        {"NLSIU"}
                      </a>
                    </td>
                    <td>
                      {"803.16"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/symbiosis-law-school-pune")} target={"_blank"} rel={"noopener"}>
                        {"Symbiosis Law School Pune"}
                      </a>
                    </td>
                    <td>
                      {"678.09"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/bharati-vidyapeeths-new-law-college-pune")} target={"_blank"} rel={"noopener"}>
                        {"Bharati Vidyapeeth's New Law College Pune"}
                      </a>
                    </td>
                    <td>
                      {"601.43"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-nlu-jodhpur")} target={"_blank"} rel={"noopener"}>
                        {"NLUJ"}
                      </a>
                    </td>
                    <td>
                      {"687.28"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/amity-university-noida")} target={"_blank"} rel={"noopener"}>
                        {"Amity University Noida"}
                      </a>
                    </td>
                    <td>
                      {"642.17"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Law Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Top 10 law colleges in India provide multiple specialisations like Admiralty Law, Business Law, Constitutional Law, Criminal Law, Environmental Law, and career opportunities to candidates. In India total of 1247 of which 860 are Private 365 Government colleges. Tabulated below are the"}
                  <span>
                    {"best colleges for law."}
                  </span>
                </span>
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
                        {"Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore")} target={"_blank"} rel={"noopener"}>
                        {"NLSIU"}
                      </a>
                    </td>
                    <td>
                      {"12,40,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"NLU Delhi"}
                      </a>
                    </td>
                    <td>
                      {"6,75,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/nalsar-university-of-law-hyderabad")} target={"_blank"} rel={"noopener"}>
                        {"NALSAR University of Law Hyderabad"}
                      </a>
                    </td>
                    <td>
                      {"8,10,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/indian-institute-of-technology-iit-kharagpur")} target={"_blank"} rel={"noopener"}>
                        {"IIT Kharagpur"}
                      </a>
                    </td>
                    <td>
                      {"4,50,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-nlu-jodhpur")} target={"_blank"} rel={"noopener"}>
                        {"NLUJ"}
                      </a>
                    </td>
                    <td>
                      {"7,73,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/the-west-bengal-national-university-of-juridical-sciences-kolkata")} target={"_blank"} rel={"noopener"}>
                        {"NLU Kolkata"}
                      </a>
                    </td>
                    <td>
                      {"12,02,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/gujarat-national-law-university-gandhi-nagar")} target={"_blank"} rel={"noopener"}>
                        {"GNLU Gandhinagar"}
                      </a>
                    </td>
                    <td>
                      {"7,87,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/symbiosis-law-school-pune")} target={"_blank"} rel={"noopener"}>
                        {"Symbiosis Law School Pune"}
                      </a>
                    </td>
                    <td>
                      {"10,20,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-millia-islamia-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Millia Islamia University"}
                      </a>
                    </td>
                    <td>
                      {"2,50,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/rajiv-gandhi-national-university-of-law-rgnul-patiala")} target={"_blank"} rel={"noopener"}>
                        {"RGNUL"}
                      </a>
                    </td>
                    <td>
                      {"15,54,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top 10 Law Universities in India"}
                </strong>
              </h2>
              <p>
                <strong>
                  <span>
                    {"Below mentioned are the top Law Universities in India."}
                  </span>
                </strong>
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore")} target={"_blank"} rel={"noopener"}>
                      {"NLSIU"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                      {"NLU Delhi"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/nalsar-university-of-law-hyderabad")} target={"_blank"} rel={"noopener"}>
                      {"NALSAR University of Law Hyderabad"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/the-west-bengal-national-university-of-juridical-sciences-kolkata")} target={"_blank"} rel={"noopener"}>
                      {"NLU Kolkata"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/gujarat-national-law-university-gandhi-nagar")} target={"_blank"} rel={"noopener"}>
                      {"GNLU Gandhinagar"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/symbiosis-law-school-pune")} target={"_blank"} rel={"noopener"}>
                      {"Symbiosis Law School Pune"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-nlu-jodhpur")} target={"_blank"} rel={"noopener"}>
                      {"NLUJ"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/aligarh-muslim-university-amu-aligarh")} target={"_blank"} rel={"noopener"}>
                      {"AMU"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-law-institute-university-nliu-bhopal")} target={"_blank"} rel={"noopener"}>
                      {"NLIU Bhopal"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/dr-ram-manohar-lohiya-national-law-university-rmlnlu-lucknow")} target={"_blank"} rel={"noopener"}>
                      {"RMLNLU"}
                    </a>
                  </span>
                </li>
              </ul>
              <h2>
                <strong>
                  {"Fees Structure Top Law Colleges in India"}
                </strong>
              </h2>
              <p>
                {"While looking for the best law colleges in India, it is important to check various facilities available for students like faculty, infrastructure etc. The facilities provided by every college should go together with the fees so that the students get the maximum benefit from the college."}
              </p>
              <h3>
                <strong>
                  {"Top Law Government Colleges in India with Fees"}
                </strong>
              </h3>
              <p>
                {"Tabulated below are the government law colleges in India with their total fees."}
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
                        {"Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore")} target={"_blank"} rel={"noopener"}>
                        {"NLSIU"}
                      </a>
                    </td>
                    <td>
                      {"12,40,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"NLU Delhi"}
                      </a>
                    </td>
                    <td>
                      {"6,75,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/nalsar-university-of-law-hyderabad")} target={"_blank"} rel={"noopener"}>
                        {"NALSAR University of Law Hyderabad"}
                      </a>
                    </td>
                    <td>
                      {"8,10,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/the-west-bengal-national-university-of-juridical-sciences-kolkata")} target={"_blank"} rel={"noopener"}>
                        {"NLU Kolkata"}
                      </a>
                    </td>
                    <td>
                      {"12,02,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/indian-institute-of-technology-iit-kharagpur")} target={"_blank"} rel={"noopener"}>
                        {"IIT Kharagpur"}
                      </a>
                    </td>
                    <td>
                      {"4,50,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Top Law Private Colleges in India with Fees"}
                </strong>
              </h3>
              <p>
                {"Below mentioned are the best private law colleges in India."}
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
                        {"Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/symbiosis-law-school-pune")} target={"_blank"} rel={"noopener"}>
                        {"Symbiosis Law School Pune"}
                      </a>
                    </td>
                    <td>
                      {"10,20,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/kalinga-institute-of-industrial-technology-kiit-university-bhubaneswar")} target={"_blank"} rel={"noopener"}>
                        {"KIIT University"}
                      </a>
                    </td>
                    <td>
                      {"19,00,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/saveetha-medical-college-smc-chennai")} target={"_blank"} rel={"noopener"}>
                        {"Saveetha Medical college"}
                      </a>
                    </td>
                    <td>
                      {"15,02,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/sastra-university-sastrau-thanjavur")} target={"_blank"} rel={"noopener"}>
                        {"SASTRA University"}
                      </a>
                    </td>
                    <td>
                      {"6,85,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/christ-university-bangalore")} target={"_blank"} rel={"noopener"}>
                        {"Christ University"}
                      </a>
                    </td>
                    <td>
                      {"9,80,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Law Colleges in India Admission"}
                </strong>
              </h2>
              <p>
                {"Law colleges admission is based on the national and state-level entrance exam. Some law colleges in India provide admission on the basis of 12th marks. Candidates should appear in the entrance exam to get admission to national law colleges in India. Below mentioned are the top law colleges in India and their admission."}
              </p>
              <h3>
                <strong>
                  {"Top Law Colleges in India Eligibility"}
                </strong>
              </h3>
              <p>
                {"Eligibility criteria for law colleges admission are candidates must have completed a bachelor from a recognised university with a duration of 3 years. Universities and colleges also accept candidates with prior experience for LLM along with an LLB degree."}
              </p>
              <p>
                <strong>
                  {"LLB"}
                </strong>
              </p>
              <ul>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"Candidates passed graduation (10+2+3) in any discipline from a recognised college or university."}
                  </span>
                </li>
                <li>
                  {"Candidates should secure a minimum of 45% in any general category and 40% marks in aggregate for SC/ST category."}
                </li>
              </ul>
              <p>
                <strong>
                  {"LLM"}
                </strong>
              </p>
              <ul>
                <li>
                  {"Bachelor's degree in the stream of law or social science with minimum aggregate as per the institute's requirement."}
                </li>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"LLM eligibility criteria for"}
                  </span>
                  <strong>
                    <span data-preserver-spaces={"true"}></span>
                  </strong>
                  <span data-preserver-spaces={"true"}>
                    {"students to complete"}
                  </span>
                  <strong>
                    <span data-preserver-spaces={"true"}></span>
                  </strong>
                  <span data-preserver-spaces={"true"}>
                    {"LLB with a minimum of 50-60% aggregate from a recognized university."}
                  </span>
                </li>
              </ul>
              <p>
                <span data-preserver-spaces={"true"}>
                  {"The following table contains top 10 law colleges in India with admission."}
                </span>
              </p>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        {"S.No"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Admission Link"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      {"National Law School of India University, Bengaluru"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore/admission")} target={"_blank"} rel={"noopener"}>
                        {"National Law School of India University, Bengaluru Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"National Law University, Delhi"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/national-law-university-new-delhi/admission")} target={"_blank"} rel={"noopener"}>
                        {"National Law University, Delhi Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"NALSAR University of Law, Hyderabad"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/nalsar-university-of-law-hyderabad/admission")} target={"_blank"} rel={"noopener"}>
                        {"NALSAR University of Law, Hyderabad Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"Rajiv Gandhi School of Intellectual Property Law, IIT-Kharagpur"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/indian-institute-of-technology-iit-kharagpur/admission")} target={"_blank"} rel={"noopener"}>
                        {"Rajiv Gandhi School of Intellectual Property Law, IIT-Kharagpur Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      {"National Law University, Jodhpur"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/national-law-university-nlu-jodhpur/admission")} target={"_blank"} rel={"noopener"}>
                        {"National Law University, Jodhpur Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      {"The West Bengal National University of Juridical Sciences, West Bengal"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/the-west-bengal-national-university-of-juridical-sciences-kolkata/admission")} target={"_blank"} rel={"noopener"}>
                        {"The West Bengal National University of Juridical Sciences, West Bengal Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      {"Gujarat National Law University, Gandhinagar"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/gujarat-national-law-university-gandhi-nagar/admission")} target={"_blank"} rel={"noopener"}>
                        {"Gujarat National Law University, Gandhinagar Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      {"Symbiosis Law School, Pune"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/symbiosis-law-school-pune/admission")} target={"_blank"} rel={"noopener"}>
                        {"Symbiosis Law School, Pune Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      {"Jamia Millia Islamia, New Delhi"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/jamia-millia-islamia-university-new-delhi/admission")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Millia Islamia, New Delhi Admission"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      {"The Rajiv Gandhi National University of Law, Patiala"}
                    </td>
                    <td>
                      <a href={allowedLink("/college/rajiv-gandhi-national-university-of-law-rgnul-patiala/admission")} target={"_blank"} rel={"noopener"}>
                        {"The Rajiv Gandhi National University of Law, Patiala Admission"}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Entrance Exams for Top Law Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"A good score in the entrance exam leads to admission to national law colleges. Entrance exam eligibility criteria for different institutes and universities may differ However, the following are the Law Entrance exam in top institutes:"}
                </span>
              </p>
              <ul>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"CLAT"}
                  </span>
                </li>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"AILET"}
                  </span>
                  <span data-preserver-spaces={"true"}></span>
                </li>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"MHT CET"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Law Colleges Accepting CLAT"}
                </strong>
              </h3>
              <p>
                {"Common Law Admission Test (CLAT) is an all-India centralized examination that allows students to get admission to the 21 National Law Universities in India to pursue law courses, such as LLB and LLM. CLAT is an exam attempted by more than 50,000 students annually, as it is a sought-after exam for Law school aspirants. Below listed are the best colleges for law accepting CLAT."}
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/asian-school-of-cyber-laws-pune")} target={"_blank"} rel={"noopener"}>
                      {"Asian School of Cyber Laws"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/nirma-university-nu-ahmedabad")} target={"_blank"} rel={"noopener"}>
                      {"Nirma University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/university-of-petroleum-and-energy-studies-upes-dehradun")} target={"_blank"} rel={"noopener"}>
                      {"UPES"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/ifim-law-school-bangalore")} target={"_blank"} rel={"noopener"}>
                      {"IFIM Law School"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/srm-university-srm-kanchipuram")} target={"_blank"} rel={"noopener"}>
                      {"SRM IST Chennai"}
                    </a>
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Law Colleges Accepting AILET"}
                </strong>
              </h3>
              <p>
                {"AILET is the entrance exam for those candidates who want to pursue their education in the top Law colleges in India. AILET is conducted by the National Law University, Delhi. (AILET) is a national-level law entrance exam conducted by NLU, Delhi for admission to its undergraduate, postgraduate and PhD programmes."}
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                      {"NLU Delhi"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/vishwakarma-university-vu-pune")} target={"_blank"} rel={"noopener"}>
                      {"Vishwakarma University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/the-north-cap-university-ncu-india-gurgaon")} target={"_blank"} rel={"noopener"}>
                      {"The NorthCap University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/sage-university-su-indore")} target={"_blank"} rel={"noopener"}>
                      {"SAGE University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/xavier-institute-of-management-xim-bhubaneshwar")} target={"_blank"} rel={"noopener"}>
                      {"XIM University"}
                    </a>
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Law Colleges Accepting MHT CET"}
                </strong>
              </h3>
              <p>
                {"MHT CET is state level entrance conducted by the State Common Entrance Test Cell, Government of Maharashtra, every year for admission to undergraduate courses such as Law, engineering etc. Listed below are the colleges that accept MHT CET entrance exam."}
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/indian-law-society-law-college-ils-pune")} target={"_blank"} rel={"noopener"}>
                      {"ILS Pune"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/shankarrao-chavan-law-college-sclc-pune")} target={"_blank"} rel={"noopener"}>
                      {"Shankarrao Chavan Law College"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/vidya-prasarak-mandal-tmc-law-college-thane")} target={"_blank"} rel={"noopener"}>
                      {"Vidya Prasarak Mandal TMC Law College Thane"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/st-wilfreds-college-of-law-mumbai")} target={"_blank"} rel={"noopener"}>
                      {"St. Wilfred's College of Law"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/manikchand-pahade-law-college-aurangabad")} target={"_blank"} rel={"noopener"}>
                      {"Manikchand Pahade Law College"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/new-law-college-mumbai")} target={"_blank"} rel={"noopener"}>
                      {"M.E.S's New Law College"}
                    </a>
                  </span>
                </li>
              </ul>
              <h2>
                <strong>
                  {"Specialisations Wise Top Law Colleges in India"}
                </strong>
              </h2>
              <p>
                {"National law colleges include specialisation in Civil Law, Criminal Law, Human Rights Law, etc."}
                <span>
                  {"which in turn results in better job opportunities in the public and private sector with good in-hand salaries. Law specialisation are as follows"}
                </span>
              </p>
              <ul>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"Civil Law"}
                  </span>
                </li>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"Criminal Law"}
                  </span>
                </li>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"Human Rights Law"}
                  </span>
                </li>
                <li>
                  <span data-preserver-spaces={"true"}>
                    {"Contract Laws"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Civil Law Colleges in India"}
                </strong>
              </h3>
              <p>
                {"Civil Law is the branch of Law that has concern with private relations between members of society. Civil law contracts with the cases of divorce, child custody, personal and property damage, etc."}
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore")} target={"_blank"} rel={"noopener"}>
                      {"NLSIU"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/nalsar-university-of-law-hyderabad")} target={"_blank"} rel={"noopener"}>
                      {"NALSAR University of Law Hyderabad"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/indian-institute-of-technology-iit-kharagpur")} target={"_blank"} rel={"noopener"}>
                      {"IIT Kharagpur"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/symbiosis-law-school-pune")} target={"_blank"} rel={"noopener"}>
                      {"Symbiosis Law School Pune"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/rajiv-gandhi-national-university-of-law-rgnul-patiala")} target={"_blank"} rel={"noopener"}>
                      {"RGNUL"}
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                <span data-preserver-spaces={"true"}>
                  <strong>
                    {"Read More:"}
                  </strong>
                  {"Top Civil Law Colleges in India"}
                </span>
              </p>
              <h3>
                <strong>
                  {"Top Criminal Colleges in India"}
                </strong>
              </h3>
              <p>
                <span data-preserver-spaces={"true"}>
                  {"Candidates after graduation can join a legal firm and also they can start their own practice. They can also work at the session court, trial court or the high court. students can work as Criminal Law Practitioners, Lecturer etc"}
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/maharashtra-national-law-university-mnlu-mumbai")} target={"_blank"} rel={"noopener"}>
                      {"MNLU Mumbai"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/tamil-nadu-dr-ambedkar-law-university-chennai")} target={"_blank"} rel={"noopener"}>
                      {"TNDALU Chennai"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/manipal-university-jaipur")} target={"_blank"} rel={"noopener"}>
                      {"Manipal University Jaipur"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    {"Dr Ambedkar Global Law Institute, Tirupati"}
                  </span>
                </li>
              </ul>
              <p>
                <span data-preserver-spaces={"true"}>
                  <strong>
                    {"Read More:"}
                  </strong>
                  {"Top Criminal Colleges in India"}
                </span>
              </p>
              <h3>
                <strong>
                  {"Top Human Rights Law"}
                </strong>
                <strong>
                  {"Colleges in India"}
                </strong>
              </h3>
              <p>
                {"Human rights law colleges in India provide career options such as professor, social worker, legal advisor, human rights defender, journalist, researcher, solicitor, and barrister. The average salary of a Human Rights Lawyer in India is Rs. 6 to 7 lakhs per annum. Experienced professionals in this role at good firms can earn up to Rs. 12 to 16 lakhs per annum."}
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/sardar-patel-university-vallabh-vidyanagar-gujarat")} target={"_blank"} rel={"noopener"}>
                      {"SPUVVN"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/shivaji-university-suk-kolhapur")} target={"_blank"} rel={"noopener"}>
                      {"Shivaji University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/university-of-rajasthan-ur-jaipur")} target={"_blank"} rel={"noopener"}>
                      {"UNIRAJ"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/ramanujan-college-rc-new-delhi")} target={"_blank"} rel={"noopener"}>
                      {"Ramanujan College"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/dr-b-r-ambedkar-open-university-dbraou-hyderabad")} target={"_blank"} rel={"noopener"}>
                      {"BRAOU"}
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Read More:"}
                </strong>
                {"Top Human Rights Law Colleges in India"}
              </p>
              <h2>
                <strong>
                  {"Placements Wise Top Law Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Best colleges fro law provide a placement opportunity to candidates who fulfils the required criteria during the placement drive. Enclosed below is the list of top law colleges in India along with the names of top recruiters."}
                </span>
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
                        {"Top Recruiters"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Placements"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Law School of India University, Bengaluru"}
                    </td>
                    <td>
                      {"Dua Associates, Bhasin & Co., HAL Bangalore etc."}
                    </td>
                    <td>
                      {"National Law School of India University, Bengaluru placement"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Law University, Delhi"}
                    </td>
                    <td>
                      {"L&L Partners, Khaitan & Co, etc."}
                    </td>
                    <td>
                      {"National Law University, Delhi placement"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"NALSAR University of Law, Hyderabad"}
                    </td>
                    <td>
                      {"Allen & Overy LLP, Pinsent Masons, Linklaters LLP etc."}
                    </td>
                    <td>
                      {"NALSAR University of Law, Hyderabad placement"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Indian Institute of Technology, Kharagpur"}
                    </td>
                    <td>
                      {"Pinsent Masons, Linklaters LLP, ICICI Bank Limited etc."}
                      <br />
                      <br />
                    </td>
                    <td>
                      {"Indian Institute of Technology, Kharagpur placement"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Law University, Jodhpur"}
                    </td>
                    <td>
                      {"Bajaj Allianz, Aditya Birla Nuvo, Sun Pharmaceutical etc."}
                    </td>
                    <td>
                      {"National Law University, Jodhpur placement"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Average Salary Package in Top Law Colleges in India"}
                </strong>
              </h2>
              <p>
                {"Mentioned below table contains law colleges in India with their salary package."}
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
                        {"Average Package"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-school-of-india-university-nls-bangalore")} target={"_blank"} rel={"noopener"}>
                        {"NLSIU"}
                      </a>
                    </td>
                    <td>
                      {"15,00,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/indian-institute-of-technology-iit-kharagpur")} target={"_blank"} rel={"noopener"}>
                        {"IIT Kharagpur"}
                      </a>
                    </td>
                    <td>
                      {"8,00,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/symbiosis-law-school-pune")} target={"_blank"} rel={"noopener"}>
                        {"Symbiosis Law School Pune"}
                      </a>
                    </td>
                    <td>
                      {"8,00,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/nalsar-university-of-law-hyderabad")} target={"_blank"} rel={"noopener"}>
                        {"NALSAR University of Law Hyderabad"}
                      </a>
                    </td>
                    <td>
                      {"9,00,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/national-law-university-nlu-jodhpur")} target={"_blank"} rel={"noopener"}>
                        {"NLUJ"}
                      </a>
                    </td>
                    <td>
                      {"5,00,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax  col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"law"} data-attr={"stream"} className={"filter__selected"}>
                  {"Law"}
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
                {"Showing 755 Colleges"}
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
                    <div className={"college__card__new "} key={"NLSIU01"} id={"search-NLSIU01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"National Law School of India University (NLSIU), Bengaluru"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/NLSIU01")} title={"National Law School of India University (NLSIU), Bengaluru"}>
                                {"National Law School of India University (NLSIU), Bengaluru"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Bengaluru, Karnataka"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"National Law School of India University (NLSIU), Bengaluru Reviews"} href={allowedLink("/reviews")}>
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
                          {"National Law School of India University (NLSIU), Bengaluru is a top accredited Government institute located in Bengaluru, Karnataka. Code: NLSIU01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"National Law School of India University (NLSIU), Bengaluru Courses"}>
                                  {"12 Courses"}
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
                              <span className={"highlight__value"}>{"Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"National Law School of India University (NLSIU), Bengaluru"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"National Law School of India University (NLSIU), Bengaluru"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"NALSAR01"} id={"search-NALSAR01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"NALSAR University of Law, Hyderabad"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/NALSAR01")} title={"NALSAR University of Law, Hyderabad"}>
                                {"NALSAR University of Law, Hyderabad"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Hyderabad, Telangana"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"NALSAR University of Law, Hyderabad Reviews"} href={allowedLink("/reviews")}>
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
                          {"NALSAR University of Law, Hyderabad is a top accredited Government institute located in Hyderabad, Telangana. Code: NALSAR01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"NALSAR University of Law, Hyderabad Courses"}>
                                  {"10 Courses"}
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
                              <span className={"highlight__value"}>{"Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"NALSAR University of Law, Hyderabad"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"NALSAR University of Law, Hyderabad"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"WBNUJS01"} id={"search-WBNUJS01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/WBNUJS01")} title={"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata"}>
                                {"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Kolkata, West Bengal"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata Reviews"} href={allowedLink("/reviews")}>
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
                          {"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata is a top accredited Government institute located in Kolkata, West Bengal. Code: WBNUJS01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata Courses"}>
                                  {"14 Courses"}
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
                              <span className={"highlight__value"}>{"Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"NLUD01"} id={"search-NLUD01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"National Law University (NLU), New Delhi"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/NLUD01")} title={"National Law University (NLU), New Delhi"}>
                                {"National Law University (NLU), New Delhi"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"New Delhi, Delhi"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"National Law University (NLU), New Delhi Reviews"} href={allowedLink("/reviews")}>
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
                          {"National Law University (NLU), New Delhi is a top accredited Government institute located in New Delhi, Delhi. Code: NLUD01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"National Law University (NLU), New Delhi Courses"}>
                                  {"8 Courses"}
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
                              <span className={"highlight__value"}>{"Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"National Law University (NLU), New Delhi"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"National Law University (NLU), New Delhi"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"SLSPUNE"} id={"search-SLSPUNE"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Symbiosis Law School (SLS), Pune"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/SLSPUNE")} title={"Symbiosis Law School (SLS), Pune"}>
                                {"Symbiosis Law School (SLS), Pune"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Pune, Maharashtra"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Symbiosis Law School (SLS), Pune Reviews"} href={allowedLink("/reviews")}>
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
                          {"Symbiosis Law School (SLS), Pune is a top accredited Private institute located in Pune, Maharashtra. Code: SLSPUNE."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Symbiosis Law School (SLS), Pune Courses"}>
                                  {"16 Courses"}
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
                              <span className={"highlight__value"}>{"Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Symbiosis Law School (SLS), Pune"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Symbiosis Law School (SLS), Pune"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
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
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"law"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
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

export default function LawPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <LawContent />
    </PageRenderer>
  );
}
