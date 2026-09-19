import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';
import StreamCourseSections from '../components/StreamCourseSections.jsx';

export const page = {
  name: "Nursing",
  sourceFile: "Nursing.jsx",
  slug: "nursing",
  title: "Top Nursing Colleges in India 2026: Ranking, Courses, Fees & Placements",
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
        "content": "Find TopParamedical Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top Nursing Colleges in India 2026: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "og:url",
        "content": "/paramedical-colleges"
      },
      {
        "property": "og:site_name",
        "content": "citsAdmission.com"
      },
      {
        "property": "og:description",
        "content": "Find TopParamedical Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "content": "/paramedical-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top Nursing Colleges in India 2026: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "twitter:description",
        "content": "Find TopParamedical Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "href": "/paramedical-colleges",
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

function NursingContent() {
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
              {"Top Nursing Colleges in India"}
            </li>
          </ul>
        </div>
      </nav>
      <div className={"blueBgDiv mobileOnly"}></div>
      <div className={"container"}>
        {/* 3 Core Stream Sections at the very TOP: Course Highlights, Eligibility Criteria, Admission Process */}
        <StreamCourseSections streamKey="nursing" />

        <div className={"pageRedirectionMenu"}></div>
        <div className={"college__Landing__New"}>
          <div className={"college__Landing__Hero__Section1"}>
            <div className={"college__Landing__Hero__Section pageData pageInfo"}>
              <h1 className={"college__Landing__Hero__Section__Heading"}>
                {"Top Nursing Colleges in India 2026"}
              </h1>
              <p>
                <span>
                  {"The majority of the top paramedical colleges in India provide a comprehensive curriculum of paramedical courses for diploma, UG, PG and doctorate certifications. Students can choose any paramedical courses after passing their 12th or higher studies with Diploma in X-Ray Technology, Diploma in Occupational Therapy, Certificate in ECG and CT Scan Technician, B.Sc Nursing, M.Sc in optometry, etc., with a course duration ranging from six months to 4 years depending on the programs."}
                </span>
              </p>
              <p>
                <span>
                  {"Paramedical is a branch of medical science in healthcare to train individuals in pre-medical emergency treatment, medical assistance, diagnostic technology training, etc."}
                </span>
                <span>
                  {"This medical training course related to allied healthcare sectors strives to prepare individuals to become qualified health care workers and technicians for real-life medical situations. A trained medical professional can get employment in government and private medical hospitals, nursing homes, and different prospects of the hospitality industry."}
                </span>
              </p>
              <h2>
                <strong>
                  {"Top Nursing Colleges in India by NIRF"}
                </strong>
              </h2>
              <p>
                <span>
                  {"National Institutional Ranking Framework (NIRF) uses a broad methodology set up by MHRD on distinct parameters to rank various colleges/universities across India."}
                </span>
              </p>
              <p>
                <span>
                  {"The NIRF parameters and areas of weightage include below;"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Teaching, Learning & Resources - 30%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Research and Professional Practice - 30%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Graduation Outcomes - 20%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Outreach and Inclusivity - 10%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Perception - 10%"}
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  {"According to the NIRF ranking system, the following are the top paramedical colleges in India:"}
                </span>
              </p>
              <table>
                <thead>
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
                        {"NIRF Score"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"1"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"King George's Medical University, Lucknow"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"64.67"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"2"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"St. John’s Medical College, Bengaluru"}
                      </span>
                    </td>
                    <td>
                      {"60.83"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"3"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Aligarh Muslim University, AligarhMadras Medical College and Government General Hospital, Chennai"}
                      </span>
                    </td>
                    <td>
                      {"58.10"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"4"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Madras Medical College and Government General Hospital, Chennai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"57.88"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"5"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Maulana Azad Medical College (MAMC), Delhi"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"56.35"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"6"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Kasturba Medical College, Mangalore"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"53.75"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"7"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Jamia Hamdard University, New Delhi"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"53.18"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"8"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Government Medical College and Hospital (GMCH), Chandigarh"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"51.90"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"9"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"PSG Institute of Medical Sciences & ResearchMore Details, Coimbatore"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"51.62"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Nursing Colleges in India by India Today"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Here are the lists of India’s top paramedical colleges based on the India Today ranking system:"}
                </span>
              </p>
              <table>
                <thead>
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
                        {"Total UG Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"1"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Maulana Azad Medical College (MAMC), New Delhi"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"2"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"King George's Medical University, Lucknow"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,38,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"3"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Grant Government Medical College, Mumbai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"4"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Bangalore Medical College & Research Institute, Bengaluru"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"40,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"5"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Government Medical College and Hospital (GMCH), Chandigarh"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,06,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"6"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Lokmanya Tilak Municipal Medical College and General Hospital, Mumbai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,90,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"7"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"St. Johns Medical College, Bengaluru"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"9,64,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"8"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Gandhi Medical College, Hyderabad"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"9"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Jawaharlal Nehru Medical College - Aligarh Muslim University (AMU), Aligarh"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"90,170"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"10"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Osmania Medical College, Hyderabad"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"53,200"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Nursing Colleges in India Based on Zones"}
                </strong>
              </h2>
              <p>
                <span>
                  {"The ranking lists for diverse colleges is updated and released every year by the NIRF. Based on the NIRF ranking, the following are some of the top paramedical colleges in India zone-wise."}
                </span>
              </p>
              <h3>
                <strong>
                  {"Top Paramedical Colleges in North India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The top paramedical colleges in north India based on NIRF are:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"King George's Medical University, Lucknow"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Aligarh Muslim University, Aligarh"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Maulana Azad Medical College (MAMC), Delhi"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Jamia Hamdard University, New Delhi"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Paramedical Colleges in South India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Some of the top paramedical colleges in south India are cited below:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Madras Medical College and Government General Hospital, Chennai"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"St. John’s Medical College, Bengaluru"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Kasturba Medical College, Mangalore"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"PSG Institute of Medical Sciences & ResearchMore Details, Coimbatore"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Paramedical Colleges in East India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"A few of the top paramedical colleges in east India are highlighted below:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Institute of Post Graduate Medical Education & Research (IPGME&R), Kolkata"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Kolkata Medical College, Kolkata"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Adamas University, Kolkata"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"IAS Academy, Kolkata"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"West Bengal University of Health Sciences, Kolkata"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Nalanda Medical College, Patna"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Paramedical Colleges in West India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The following are top paramedical in west India colleges:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Grant Medical College (GMC), Mumbai"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Lokmanya Tilak Municipal Medical College and General Hospital, Mumbai"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"St. Xavier’s College, Mumbai"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"B. J. Government Medical College, Ahmedabad"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Government Medical College, Surat"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Paramedical Colleges in Central India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The top paramedical colleges in central India are given below:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Institute for Excellence in Higher Education, Bhopal"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Mahatma Gandhi Memorial Medical College, Indore"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"P.K. University, Shivpuri"}
                  </span>
                </li>
              </ul>
              <h2>
                <strong>
                  {"Specialisations-wise Top Nursing Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"About 1,950 plus paramedical colleges offer multiple programmes with various specializations across India. There are five main types of paramedical courses available in India, i.e., vocational and certificate, diploma, bachelor’s, masters and postgraduate diploma namely in physiotherapy, occupational therapy, dialysis technology, optometry, anaesthesia technology, cardiology, medical imaging technology, MLT (Medical Lab Technology), etc."}
                </span>
              </p>
              <p>
                <span>
                  {"Some of the popular paramedical courses in India are listed in the following points."}
                </span>
              </p>
              <h3>
                <strong>
                  {"Top Medical Lab Technology Colleges in India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"MLT (Medical Lab Technology) is the branch of medical science equipping the students with knowledge and skills to apply for laboratory investigations relating to diagnosis, treatment, and disease prevention. Career options are lab technician, medical lab technician, etc. They can work in crime laboratories, pharmaceutical companies, academic sectors and others."}
                </span>
              </p>
              <p>
                <span>
                  {"The following are the top medical lab technology colleges in India:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"King George's Medical University, Lucknow"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Aligarh Muslim University, Aligarh"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"St. John’s Medical College, Bengaluru"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Jamia Hamdard University, New Delhi"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Radiography Colleges in India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Radiography focuses on imaging techniques using rays (X-ray and gamma-ray) and radiations to produce diagnostic images of the internal objects (organs, tissues, bones, etc.) of the patients to diagnose health conditions. After completing radiography, candidates can work as an X-ray technician, mammography technician, radiographer, and more."}
                </span>
              </p>
              <p>
                <span>
                  {"The top radiography colleges in India include:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Jamia Hamdard University, New Delhi"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"King George's Medical University, Lucknow"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"St. John’s Medical College, Bengaluru"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Lokmanya Tilak Municipal Medical College and General Hospital, Mumbai"}
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  {"Top Physiotherapy Colleges in India"}
                </span>
              </p>
              <p>
                <span>
                  {"Physiotherapy or physical therapy involves interventions to patients with movement and exercise prescription to develop, maintain and revive health threatened by injury, disability, diseases, illness, disorder or others. A candidate can explore working in MNCs, health care centres, education sectors, NGO’s, etc."}
                </span>
              </p>
              <p>
                <span>
                  {"The top physiotherapy colleges in India are as follows:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Madras Medical College (MMC), Chennai"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Jamia Hamdard University, New Delhi"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Kasturba Medical College, Mangalore"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Institute of Post Graduate Medical Education & Research (IPGMER), Kolkata"}
                  </span>
                </li>
              </ul>
              <h2>
                <strong>
                  {"Fee Structure for Top Nursing Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"When it comes to the fee structure, it could range from high to low incurs for paramedical programmes depending on many good reasons. It could be infrastructure, hostel facilities, number of programs and courses, facility, mode of class, college type, etc."}
                </span>
              </p>
              <p>
                <span>
                  {"We have curated some lists of fee charges cited below for private and government types of paramedical colleges around India."}
                </span>
              </p>
              <h3>
                <strong>
                  {"Public Paramedical Colleges with Diploma Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The top government paramedical colleges with diploma fee structures in India are cited below:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Total Diploma Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"Institute of Post Graduate Medical Education and Research, Kolkata"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"30,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Osmania University, Hyderabad"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Atal Bihari Vajpayee Hindi Vishwavidyalaya, Bhopal"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"6,600"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Private Paramedical Colleges with Diploma Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The following table shows the various diploma fee structures under the top private paramedical colleges in India:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Total Diploma Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"Sumandeep University, Vadodara"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"32,500"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Madhav University, Sirohi"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,20,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"NIMS University, Jaipur"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"50,000"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Public Paramedical Colleges with UG Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Here are the various fee structures under the top government paramedical colleges across India as tabulated below:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Total UG Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"King George's Medical University, Lucknow"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,38,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Madras Christian College, Chennai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"71,240"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Grant Medical College and Sir J.J. Group of Hospitals, Mumbai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"St. John’s Medical College, Bengaluru"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"9,64,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Aligarh Muslim University, Aligarh"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"90,170"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Private Paramedical Colleges with UG Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The table below are the private paramedical colleges in India for undergraduate program fees:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Total UG Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"St. Xavier’s College, Mumbai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,22,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Jamia Hamdard University, New Delhi (Deemed to be University)"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"2,70,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Kasturba Medical College, Mangalore"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"28,10,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"SRM Institute of Technology, Chennai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"65,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Bangalore Medical College & Research Institute, Bengaluru"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"40,000"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Public Paramedical Colleges with PG Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The various fee structures under the top government paramedical colleges in India are cited in the table below:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Total PG Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"Sri Ramachandra Medical College, Chennai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"3,00,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"PT Bhagwat Dayal Sharma Post Graduate Institute of Medical Sciences, Rohtak"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"59,960"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Government Medical College, Patiala"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"2,02,000"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Private Paramedical Colleges with PG Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"The table below are the private paramedical colleges in India for postgraduate program fees:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Total PG Fees (in INR)"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"NSHM Knowledge Campus, Kolkata"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"2,80,00"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Dr DY Patil Vidyapeeth, Pune"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"2,17,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Manipal Academy of Higher Education, Manipal"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"1,55,000"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Christian Medical College, Vellore"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"63,190"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Entrance Exams Accepted by Top Nursing Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Popular entrance exams accepted by India’s top paramedical colleges in India are as follows:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"AIIMS (All India Institute of Medical Sciences) Entrance Exam"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"AFMC Nursing (Armed Forces Medical College Exam for Nursing)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"IEMJEE (Institute of Engineering and Management Joint Entrance Exam)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"MRNAT (Manav Rachna National Aptitude Test)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"AUEE - All India Society for Electronics & Computer Technology (AISECT) University Entrance Exam"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"SVNIRTAR CET / NIRTAR CET (Swami Vivekanand National Institute of Rehabilitation Training and Research Common Entrance Test)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"MAJU Entrance Exam (Mohammad Ali Jauhar University Entrance Exam)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"SRHU CEENPB (Swami Rama Himalayan University Common Examination in Nursing, Paramedical, and Bio-Sciences)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"WBJEE JENPAUH - West Bengal Joint Entrance Examinations Board JENPAS(UG)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"SMFWBEE (State Medical Faculty of West Bengal Entrance Exam)"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"BCECE (Bihar Combined Entrance Competitive Examination)"}
                  </span>
                </li>
              </ul>
              <h2>
                <strong>
                  {"Admissions and Eligibility Criteria for Top Nursing Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"The admission process varies from college to college. It is important to pass the eligibility criteria and clear the admission process with the surging number of qualified candidates with limited seats applicable under India's top paramedical colleges."}
                </span>
              </p>
              <p>
                <span>
                  {"Also, candidates should ensure and submit complete application form fillings along with application fee charges on the college’s specified date."}
                </span>
              </p>
              <p>
                <span>
                  {"You can check the eligibility criteria for admission posted briefly in the following."}
                </span>
              </p>
              <h3>
                <strong>
                  {"Eligibility Criteria for Top Nursing Colleges in India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"General eligibility criteria for the top paramedical colleges in India are as follows:"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Candidates should have completed 17 years old"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <strong>
                    {"UG Level"}
                  </strong>
                  <span>
                    {": Candidates must complete 12th standard in science stream with the aggregate 50% marks with Physics, Chemistry and Biology as compulsory subjects from a recognized university or board of education"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <strong>
                    {"PG Level"}
                  </strong>
                  <span>
                    {": Candidates should clear a B.Sc degree with the aggregate score/rank from a recognized university or board of education"}
                  </span>
                </li>
              </ul>
              <h3>
                <strong>
                  {"Admissions to Top Nursing Colleges in India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Few colleges allow admissions either on entrance examinations score/ranks at various national/state/university levels or direct admissions based on interviews and previous academic performance."}
                </span>
              </p>
              <p>
                <span>
                  {"Thus, the admission process differs from college to college."}
                </span>
              </p>
              <h2>
                <strong>
                  {"Cut Offs for Top Nursing Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Each candidate must clear the cut-off score to proceed for the further admission process set by the respective colleges. Several factors that determine the cut-offs are"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Exam paper difficulty level"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Total number of candidates who appeared for the exam"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"The overall number of seats available per college"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Previous year cut-off trends"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Category type and quota, etc."}
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  {"The cut-off of the various entrance exams for paramedical courses in India are explained in the following."}
                </span>
              </p>
              <h3>
                <strong>
                  {"BCECE Cut Off"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Bihar Combined Entrance Competitive Examination (BCECE) is a state-level examination for undergraduate programs into various courses conducted by the Undergraduate Graduate Engineering Admission Counseling (UGEAC)."}
                </span>
              </p>
              <p>
                <span>
                  {"Given below are the BCECE cut-offs as per category wise:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"Category"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Overall Cut Off"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"General"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"600"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"General (PwD)"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"540"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Reserved PwD"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"480"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"SC / ST / OBC"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"480"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"AIIMS Cut Off"}
                </strong>
              </h3>
              <p>
                <span>
                  {"All India Institute of Medical Sciences Entrance Exam (AIIMS) entrance exam is a national level entrance test conducted by All India Institute of Medical Sciences (AIIMS) Delhi for medical, paramedical, nursing, and health entries science courses."}
                </span>
              </p>
              <p>
                <span>
                  {"Check out the following table to break an idea of the cut-off score as per category reservation for admissions counsellings:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"Category"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Overall Cut Off"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"General"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"98.80 - 99.5"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"OBC-NCL (Other Backward Classes(Non-Creamy Layer)"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"97 - 98.35"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"SC / ST"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"94.25 - 94.75"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Scope of Paramedical in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Paramedical courses are job oriented with the number of medical attention arising in the country due to illness, accidents and medical emergencies. There is always a 24x7 call for healthcare professionals like paramedics who work in emergency medical situations."}
                </span>
              </p>
              <p>
                <span>
                  {"The medical system would be handicapped without paramedics, nurses, technicians, healthcare workers and assistants who play an important part in sustaining life, apart from doctors and surgeons."}
                </span>
              </p>
              <p>
                <span>
                  {"The graduates can also open their laboratories and clinics or work in hospitals, health departments, academic fields, etc."}
                </span>
              </p>
              <p>
                <span>
                  {"Based on individuals skills and experience count, the salary packages in India will increase per annum. After completing any of the course of the paramedical courses, one can get the following job opportunities in certain areas;"}
                </span>
              </p>
              <p>
                <strong>
                  {"Areas of Employment"}
                </strong>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Government and Private Hospitals"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Nursing Homes"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Clinics"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Health Department"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Sales and Marketing"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Aviation industries"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Civil services"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Education sectors"}
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Job Opportunities"}
                </strong>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Nurse"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"MRI Technician"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"CT Scan Technician"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Dental Assistant"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Medical Laboratory Assistant"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Chiropodists and podiatrists"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Dieticians"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Occupational Therapists"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Orthoptists"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Radiographers"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Prosthetist"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Dentition"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Physiotherapists"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Lecturer"}
                  </span>
                </li>
              </ul>
              <h2>
                <strong>
                  {"Paramedical Placements in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Top colleges offer placement opportunities under the respective programs. These institutions comprise placement cells that tend to manage the recruitment process and bring awareness of the various job opportunities to students. According to the Glassdoor report, the average salary for a paramedical student is INR 19,287 per month."}
                </span>
              </p>
              <h3>
                <strong>
                  {"Top Paramedical Recruiters in India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Most companies and agencies visit colleges for recruitment with students with expertise in skills. The table below shows the popular recruiters from India’s top paramedical colleges:"}
                </span>
              </p>
              <table>
                <thead>
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"St. Xavier’s College, Mumbai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Accenture, Bain Capability Network, Godrej, Google, Federal Bank, Cognizant, Infosys, Wipro, Deloitte, Odessa Technologies, Mu Sigma, A.T. Kearney, Viacom, Reckitt Benckiser, Banijay Asia, Cactus Communications, Tata Capital, Futures First, Titan, etc."}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Jamia Hamdard University, New Delhi"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Pfizer, Aristo, Reckitt Benckiser, Cadila Pharmaceuticals, Escort Heart Institute & Research Centre, Dr Reddy’s Laboratories Ltd, Fortis Escort Health Institute, Fortis Hospital, Global Healthcare Pvt.Ltd, Indiabulls, Infozech Software Ltd, HCL, Max Life Insurance, TCS, Cipla, Sun Pharma, Torrent Pharma, Ranbaxy Laboratories Ltd, Kailash Hospital, etc."}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"SRM Institute of Technology, Chennai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"Apollo, Aricent, Life Cell, Siemens, Vedanta, Biocon, Dr Reddy’s, Orchid Pharma Limited, Patanjali, AGS Health, Hindustan Unilever Limited, Infosys, Google, Genesys, Nestle, Pfizer, Payoda, Wipro, Shell India, Teach for India, Pure Chemicals Co., Flowcrete, etc."}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Aligarh Muslim University, Aligarh"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"EFS Facilities Service Pvt. Ltd, Cordis Technology, Genpact, HCL, Asian Paints, GE capital, ICICI, India Mart, India Infoline, Marque Impex, Hamari Pahchan NGO, TCS, etc."}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Average Salary Offered in Top Nursing Colleges in India"}
                </strong>
              </h3>
              <p>
                <span>
                  {"As per the PayScale report, the average yearly salary for a paramedic is INR 2,92,774 in India. A paramedic fresher can expect an average of 2.3 LPA. In comparison, a paramedic with more than one years of experience can expect 2.9 LPA."}
                </span>
              </p>
              <p>
                <span>
                  {"The average salary offered in top paramedical colleges in India based on the college's official website is tabulated below:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <strong>
                        {"College Name"}
                      </strong>
                    </td>
                    <td>
                      <strong>
                        {"Average Annual Salary"}
                      </strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {"St. Xavier College, Mumbai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"3-7 LPA"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Aligarh Muslim University, Aligarh"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"4.2 LPA"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"Jamia Hamdard University, New Delhi (Deemed to be University)"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"3-6 LPA"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {"SRM Institute of Technology, Chennai"}
                      </span>
                    </td>
                    <td>
                      <span>
                        {"5 LPA"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                {"FAQs"}
              </h2>
              <p>
                <strong>
                  {"Q.What is the difference between a medical and paramedical course?"}
                </strong>
                <strong>
                  <br />
                </strong>
                <strong>
                  {"A."}
                </strong>
                <span>
                  {"Medical science deals with developing practical skills, conducting experiments, and practises medicine to cure illness or improve health. In contrast, paramedical science focuses on diagnosis, treatment and detection of diseases to improve optimal health."}
                </span>
              </p>
              <p>
                <strong>
                  {"Q.Which paramedical course is best?"}
                </strong>
                <strong>
                  <br />
                </strong>
                <strong>
                  {"A."}
                </strong>
                <span>
                  {"The following list are India's best paramedical courses."}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Diploma in X-Ray Technology"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Diploma in Occupational Therapy"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"B.Sc Nursing"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"B.Sc in Physiotherapy"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"B.Sc Optometry"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"B.Sc in X-ray Technology"}
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Q.Who are the top recruiters for paramedics in India?"}
                </strong>
                <strong>
                  <br />
                </strong>
                <strong>
                  {"A."}
                </strong>
                <span>
                  {"Here are some of the top agencies for paramedics in India."}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Apollo hospitals,"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Fortis hospital,"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Columbia Asia Referral Hospital,"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"PGIMER,"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Nanavati hospital,"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Artemis hospital,"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Manipal hospital, and"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Max Superspeciality hospital, etc."}
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Q.Do paramedical courses require NEET?"}
                </strong>
                <strong>
                  <br />
                </strong>
                <strong>
                  {"A."}
                </strong>
                <span>
                  {"It is not compulsory to apply for NEET. Certain colleges conduct their entrance tests or accept entrance tests at the national/state level."}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax  col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"paramedical"} data-attr={"stream"} className={"filter__selected"}>
                  {"Paramedical"}
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
                {"Showing 346 Colleges"}
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
                    <div className={"college__card__new "} key={"AIIMS-P"} id={"search-AIIMS-P"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/AIIMS-P")} title={"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi"}>
                                {"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"New Delhi, Delhi"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi Reviews"} href={allowedLink("/reviews")}>
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
                          {"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi is a top accredited Government institute located in New Delhi, Delhi. Code: AIIMS-P."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi Courses"}>
                                  {"18 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"CMC-P"} id={"search-CMC-P"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Christian Medical College (CMC Paramedical), Vellore"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/CMC-P")} title={"Christian Medical College (CMC Paramedical), Vellore"}>
                                {"Christian Medical College (CMC Paramedical), Vellore"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Vellore, Tamil Nadu"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Christian Medical College (CMC Paramedical), Vellore Reviews"} href={allowedLink("/reviews")}>
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
                          {"Christian Medical College (CMC Paramedical), Vellore is a top accredited Private institute located in Vellore, Tamil Nadu. Code: CMC-P."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Christian Medical College (CMC Paramedical), Vellore Courses"}>
                                  {"22 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Christian Medical College (CMC Paramedical), Vellore"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Christian Medical College (CMC Paramedical), Vellore"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"JIPMER-P"} id={"search-JIPMER-P"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"JIPMER Paramedical Sciences, Puducherry"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/JIPMER-P")} title={"JIPMER Paramedical Sciences, Puducherry"}>
                                {"JIPMER Paramedical Sciences, Puducherry"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Puducherry, Puducherry"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"JIPMER Paramedical Sciences, Puducherry Reviews"} href={allowedLink("/reviews")}>
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
                          {"JIPMER Paramedical Sciences, Puducherry is a top accredited Government institute located in Puducherry, Puducherry. Code: JIPMER-P."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"JIPMER Paramedical Sciences, Puducherry Courses"}>
                                  {"15 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"JIPMER Paramedical Sciences, Puducherry"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"JIPMER Paramedical Sciences, Puducherry"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"MCHP01"} id={"search-MCHP01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Manipal College of Health Professions, Manipal"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/MCHP01")} title={"Manipal College of Health Professions, Manipal"}>
                                {"Manipal College of Health Professions, Manipal"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Manipal, Karnataka"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Manipal College of Health Professions, Manipal Reviews"} href={allowedLink("/reviews")}>
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
                          {"Manipal College of Health Professions, Manipal is a top accredited Private institute located in Manipal, Karnataka. Code: MCHP01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Manipal College of Health Professions, Manipal Courses"}>
                                  {"24 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Manipal College of Health Professions, Manipal"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Manipal College of Health Professions, Manipal"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"PGIMER-P"} id={"search-PGIMER-P"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Post Graduate Institute of Medical Education (PGIMER), Chandigarh"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/PGIMER-P")} title={"Post Graduate Institute of Medical Education (PGIMER), Chandigarh"}>
                                {"Post Graduate Institute of Medical Education (PGIMER), Chandigarh"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Chandigarh, Punjab"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Post Graduate Institute of Medical Education (PGIMER), Chandigarh Reviews"} href={allowedLink("/reviews")}>
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
                          {"Post Graduate Institute of Medical Education (PGIMER), Chandigarh is a top accredited Government institute located in Chandigarh, Punjab. Code: PGIMER-P."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Post Graduate Institute of Medical Education (PGIMER), Chandigarh Courses"}>
                                  {"20 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Post Graduate Institute of Medical Education (PGIMER), Chandigarh"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Post Graduate Institute of Medical Education (PGIMER), Chandigarh"}>{"View College"}</div>
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
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"paramedical"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
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

export default function NursingPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <NursingContent />
    </PageRenderer>
  );
}
