import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Design",
  sourceFile: "Design.html",
  slug: "design",
  title: "Top Design Colleges in India 2025: Ranking, Courses, Fees & Placements",
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
        "content": "Find TopDesign Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top Design Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "og:url",
        "content": "/design-colleges"
      },
      {
        "property": "og:site_name",
        "content": "Admission Portal"
      },
      {
        "property": "og:description",
        "content": "Top Design Colleges in India: Check NIRF ranking, placement, fees, admission, cutoff, eligibility, top recruitments, scholarships and latest news of Design colleges."
      },
      {
        "property": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "property": "twitter:site",
        "content": "Admission Portal"
      },
      {
        "property": "twitter:creator",
        "content": "@getmyuniedu"
      },
      {
        "property": "twitter:url",
        "content": "/design-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top Design Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "twitter:description",
        "content": "Find TopDesign Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "href": "/design-colleges",
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

function DesignContent() {
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
              {"Top Design Colleges in India"}
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
                {"Top Design Colleges in India 2026"}
              </h1>
              <p>
                {"Design is one of the popular and creative courses in India that is pursued by candidates at UG, PG, and PhD levels to become skillful designers. There are various specialisations offered by design colleges, such as interior design, fashion design, graphic design, web design, etc., in B.Des, M.Des, or advanced diploma courses. Designers are in huge demand due to the growth of the IT sector and design industry in the past few years. Top design colleges in India provide relevant knowledge and exposure to the students to design and develop aesthetic solutions and products to cater to the needs of the modern world."}
              </p>
              <div className={"table-responsive"}>
                <h2 id={"top-10-design-colleges-in-india"}>
                  <strong>
                    {"Top 10 Design Colleges in India"}
                  </strong>
                </h2>
                <p>
                  {"Following is the list of the top 10 design colleges in India:"}
                </p>
                <table>
                  <thead>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            {"Name of the College"}
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            {"B.Des Total Fees (INR)"}
                          </strong>
                        </p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-delhi")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Delhi"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"11,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-bengaluru")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Bengaluru"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"6,50,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-chennai")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Chennai"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"9,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/indian-institute-of-art-and-design-new-delhi")} target={"_blank"} rel={"noopener"}>
                            {"Indian Institute of Art and Design (IIAD), Delhi"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"4,50,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-patna")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Patna"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"3,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-gandhinagar")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Gandhinagar"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"8,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-hyderabad")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Hyderabad"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"8,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/pearl-academy-new-delhi")} target={"_blank"} rel={"noopener"}>
                            {"Pearl Academy, New Delhi"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"9,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-fashion-technology-nift-kolkata")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Fashion Technology (NIFT), Kolkata"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"7,00,000"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/unitedworld-institute-of-design-uid-ahmedabad")} target={"_blank"} rel={"noopener"}>
                            {"Unitedworld Institute of Design (UID), Ahmedabad"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"18,00,000"}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2 id={"specialisation-wise-design-colleges-in-india"}>
                  <strong>
                    {"Specialisation-wise Design Colleges in India"}
                  </strong>
                </h2>
                <p>
                  {"Top design colleges in India offer design courses in various specialisations such as textile design, fashion design, interior design, product design, graphic design, etc. Students can choose from the multiple specialisations based on career opportunities and placement packages. Below mentioned are some of the top specialisations from design colleges in India:"}
                </p>
                <h3>
                  <strong>
                    {"Top Fashion Design Colleges in India"}
                  </strong>
                </h3>
                <p>
                  {"Fashion Design is one of the most popular and lucrative specialisations among students due to the increasing technology and growth of the fashion industry. Students can work in top MNCs, retail industry, or independent design houses as fashion designers. Listed below are some of the top colleges for fashion designing in India:"}
                </p>
                <ul>
                  <li aria-level={"1"}>
                    {"National Institute of Fashion Technology, Delhi"}
                  </li>
                  <li aria-level={"1"}>
                    {"National Institute of Fashion Technology, Bengaluru"}
                  </li>
                  <li aria-level={"1"}>
                    {"Pearl Academy, Delhi"}
                  </li>
                  <li aria-level={"1"}>
                    {"National Institute of Design (NID), Ahmedabad"}
                  </li>
                </ul>
                <h3>
                  <strong>
                    {"Top Graphic Design Colleges in India"}
                  </strong>
                </h3>
                <p>
                  {"Graphic design is a visual form of communication that uses words, images, videos, animation to create brochures and displays. Graphic designers are high in demand to work in advertising agencies, design studios, and design firms. Below mentioned are some of the top graphic designing colleges in India:"}
                </p>
                <ul>
                  <li aria-level={"1"}>
                    {"Industrial Design Centre (IDC), IIT Bombay"}
                  </li>
                  <li aria-level={"1"}>
                    {"National Institute of Design (NID), Ahmedabad"}
                  </li>
                </ul>
                <h2>
                  <strong>
                    {"Entrance Exams for Top Design Colleges in India"}
                  </strong>
                </h2>
                <p>
                  {"The leading design colleges in India accept various entrance exams for admissions to their undergraduate and postgraduate programs. Below is an overview of the most popular exams:"}
                </p>
                <ol>
                  <li>
                    <p>
                      <strong>
                        {"CUET (Common University Entrance Test)"}
                      </strong>
                      <br />
                      {"Conducted by the National Testing Agency (NTA), CUET is a national-level entrance exam introduced in 2022. It provides a unified platform for candidates seeking admission to undergraduate programs across top colleges and universities in India."}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        {"UCEED (Undergraduate Common Entrance Examination for Design)"}
                      </strong>
                      <br />
                      {"Organized by IIT Bombay, UCEED is a national-level exam for admission to Bachelor of Design (BDes) programs at participating institutes. It assesses design aptitude and creativity."}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        {"CEED (Common Entrance Exam for Design)"}
                      </strong>
                      <br />
                      {"Also conducted by IIT Bombay, CEED is a national-level exam for admission to Master of Design (M.Des) and Ph.D. programs at participating institutes. It evaluates a candidate's design thinking and analytical skills."}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        {"NIFT Entrance Exam"}
                      </strong>
                      <br />
                      {"Held annually by the National Institute of Fashion Technology, this exam selects candidates for various UG and PG programs such as BDes, B.F.Tech, MDes, and MFM. It assesses creative and managerial abilities relevant to the fashion and design industry."}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        {"NID Entrance Exam (Design Aptitude Test)"}
                      </strong>
                      <br />
                      {"Conducted by the National Institute of Design, this two-stage national-level exam evaluates candidates for Bachelor of Design (BDes) and Master of Design (MDes) courses."}
                    </p>
                    <ul>
                      <li>
                        <em>
                          {"DAT Prelims"}
                        </em>
                        {": Shortlists candidates for the next stage."}
                      </li>
                      <li>
                        <em>
                          {"DAT Mains"}
                        </em>
                        {": A more comprehensive evaluation based on the Prelims scores."}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <strong>
                        {"IIAD Entrance Exam (Indian Institute of Art and Design)"}
                      </strong>
                      <br />
                      {"This exam involves a written test followed by a studio simulation for UG candidates or a personal interview for PG candidates. It can be taken offline or remotely via a computer-based platform."}
                    </p>
                    <h4>
                      {"Exam Schedule for 2025"}
                    </h4>
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <strong>
                              {"Exam Name"}
                            </strong>
                          </th>
                          <th>
                            <strong>
                              {"Dates"}
                            </strong>
                          </th>
                          <th>
                            <strong>
                              {"Exam Schedule"}
                            </strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href={allowedLink("/exams/cucet")} target={"_blank"} rel={"noopener"}>
                              {"CUET"}
                            </a>
                          </td>
                          <td>
                            {"May '25 - Jun '25"}
                          </td>
                          <td>
                            {"CUET Schedule"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href={allowedLink("/exams/uceed")} target={"_blank"} rel={"noopener"}>
                              {"UCEED"}
                            </a>
                          </td>
                          <td>
                            {"19 Jan '25"}
                          </td>
                          <td>
                            {"UCEED Schedule"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href={allowedLink("/exams/ceed")} target={"_blank"} rel={"noopener"}>
                              {"CEED"}
                            </a>
                          </td>
                          <td>
                            {"19 Jan '25"}
                          </td>
                          <td>
                            {"CEED Schedule"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href={allowedLink("/exams/nift")} target={"_blank"} rel={"noopener"}>
                              {"NIFT Entrance Exam"}
                            </a>
                          </td>
                          <td>
                            {"Feb '25"}
                          </td>
                          <td>
                            {"NIFT Exam Schedule"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href={allowedLink("/exams/nid")} target={"_blank"} rel={"noopener"}>
                              {"NID Entrance Exam"}
                            </a>
                          </td>
                          <td>
                            {"05 Jan '25"}
                          </td>
                          <td>
                            {"NID Exam Schedule"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {"IIAD Entrance Exam"}
                          </td>
                          <td>
                            {"Jan '25"}
                          </td>
                          <td>
                            {"IIAD Exam Schedule"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      {"These exams are crucial for aspiring design students, offering pathways to prestigious programs in India's top design institutes."}
                    </p>
                  </li>
                </ol>
                <h2>
                  <strong>
                    {"Best Entrance Exam Wise Designing Colleges in India"}
                  </strong>
                </h2>
                <p>
                  {"Listed below are the top design colleges in India that accept the specified entrance exams for admission."}
                </p>
                <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                  <colgroup>
                    <col width={"493"} />
                    <col width={"100"} />
                    <col width={"100"} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        {"Exam Name"}
                      </th>
                      <th>
                        {"No. of Colleges Accepting Exam"}
                      </th>
                      <th>
                        {"Popular Colleges"}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        {"CEED"}
                      </td>
                      <td>
                        {"34 colleges"}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"NIFT Delhi, UPES, IDC-IIT Bombay, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"CUET"}
                      </td>
                      <td>
                        {"79 colleges"}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"Amity University Noida, UPES, Amity University Mumbai, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"NID Entrance Exam"}
                      </td>
                      <td>
                        {"31 colleges"}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"UPES, FLAME University, School of Design, MIT WPU, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"NIFT Entrance Exam"}
                      </td>
                      <td>
                        {"35 colleges"}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"NIFT Delhi, NIFT Mumbai, NIFT Bangalore, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"UCEED"}
                      </td>
                      <td>
                        {"55 colleges"}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"UPES. FLAME University, IDC-IIT Bombay, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2 id={"BestDesignIndia_e"}>
                  <strong>
                    {"Best Designing Institutes in India Courses Fees Eligibility"}
                  </strong>
                </h2>
                <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                  <colgroup>
                    <col width={"284"} />
                    <col width={"113"} />
                    <col width={"100"} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        {"College Names"}
                      </th>
                      <th>
                        {"Courses Offered"}
                      </th>
                      <th>
                        {"Tuition Fee/ Eligibility"}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        {"Amity University Noida"}
                      </td>
                      <td>
                        {"BDes in Fashion Design, Bachelor of Interior Design, Bachelor in User Experience Design, etc."}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"Fee: INR 2.88 lakh - INR 12.54 lakh"}
                            <br />
                            {"CUET, Merit-Based, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"MIT-ADT University"}
                      </td>
                      <td>
                        {"MDes in User Experience Design, BDes in Product Design, BDes in Animation Design, etc."}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"Fee: INR 4.9 lakh - INR 12.65 lakh"}
                            <br />
                            {"MITID DAT"}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"NID Ahmedabad"}
                      </td>
                      <td>
                        {"BDes in Animation Film Design, BDes in Graphic Design, MDes in Film and Video Communication, etc."}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"Fee: INR 11.43 lakh - INR 15.72 lakh"}
                            <br />
                            {"Design Aptitude Test"}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"NIFT Delhi"}
                      </td>
                      <td>
                        {"MDes, BDes in Fashion Design, MFM, etc."}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"Fee: INR 70,800 - INR 12.34 lakh"}
                            <br />
                            {"NIFT Entrance Exam, CEED, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"NIFT Mumbai"}
                      </td>
                      <td>
                        {"MDes, BDes in Fashion Communication, BFTech in Apparel Production, etc."}
                      </td>
                      <td>
                        <div>
                          <div>
                            {"Fee: INR 1.64 lakh - INR 12.34 lakh"}
                            <br />
                            {"NIFT Entrance Exam, CEED, etc."}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>
                  <strong>
                    {"Top Fashion Design Colleges in India"}
                  </strong>
                </h3>
                <p>
                  {"Fashion Design is one of the most popular and lucrative specialisations among students due to the increasing technology and growth of the fashion industry. Students can work in top MNCs, retail industry, or independent design houses as fashion designers. Listed below are some of the top colleges for fashion designing in India:"}
                </p>
                <ul>
                  <li aria-level={"1"}>
                    {"National Institute of Fashion Technology, Delhi"}
                  </li>
                  <li aria-level={"1"}>
                    {"National Institute of Fashion Technology, Bengaluru"}
                  </li>
                  <li aria-level={"1"}>
                    {"Pearl Academy, Delhi"}
                  </li>
                  <li aria-level={"1"}>
                    {"National Institute of Design (NID), Ahmedabad"}
                    <h2 id={"fee-structure-for-top-design-colleges-in-india"}>
                      <strong>
                        {"Fee Structure for Top Design Colleges in India"}
                      </strong>
                    </h2>
                    <p>
                      {"Design colleges in India offer undergraduate, post-graduate, diploma courses such as B.Des, M.Des, etc. The fee structure for these courses ranges from low to high, depending on the type of college and the amenities. Below listed is the fees in top private and public design colleges in India:"}
                    </p>
                    <p>
                      <strong>
                        {"B.Des Fees in Private Colleges"}
                      </strong>
                    </p>
                    <p>
                      {"Below mentioned is the B.Des fees in top private design colleges in India:"}
                    </p>
                    <div className={"table-responsive"}>
                      <table>
                        <thead>
                          <tr>
                            <th>
                              {"College name"}
                            </th>
                            <th>
                              {"Fees"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {"Amity University, Noida"}
                            </td>
                            <td>
                              {"7,56,000"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Avantika University, Ujjain"}
                            </td>
                            <td>
                              {"8,90,000"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"International Institute of Fashion Design, Pune"}
                            </td>
                            <td>
                              {"2,50,000"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"School of Design, MIT WPU"}
                            </td>
                            <td>
                              {"11,00,000"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 id={"BestDesignIndia_g"}>
                        <strong>
                          {"Best Government Design Colleges in India"}
                        </strong>
                      </h2>
                      <p>
                        {"The government Design colleges in India along with their total tuition fee and eligibility criteria/entrance exams:"}
                      </p>
                      <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                        <tbody>
                          <tr>
                            <th>
                              {"College name"}
                            </th>
                            <th>
                              {"Total Tuition fee"}
                            </th>
                            <th>
                              {"Eligibility/Exams"}
                            </th>
                          </tr>
                          <tr>
                            <td>
                              {"NIFT Mumbai Admission"}
                            </td>
                            <td>
                              {"INR 1.3 lakh – INR 11.74 lakh"}
                            </td>
                            <td>
                              <div>
                                <div>
                                  {"NIFT Entrance Exam and Merit-Based"}
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"NIFT Delhi Admission"}
                            </td>
                            <td>
                              {"INR 70,800 – INR 12.34 lakh"}
                            </td>
                            <td>
                              <div>
                                <div>
                                  {"NIFT Entrance Exam and Merit-Based"}
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"NID Gandhinagar Admission"}
                            </td>
                            <td>
                              {"INR 9.97 lakh"}
                            </td>
                            <td>
                              <div>
                                <div>
                                  {"NID Entrance Exam"}
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"NID Bengaluru Admission"}
                            </td>
                            <td>
                              {"INR 9.97 lakh"}
                            </td>
                            <td>
                              {"DAT"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"NID Ahmedabad Admission"}
                            </td>
                            <td>
                              {"INR 10.68 lakh – INR 14.68 lakh"}
                            </td>
                            <td>
                              {"DAT"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 id={"BestDesignIndia_h"}>
                        <strong>
                          {"Best Semi-Government Top Design Institutes in India"}
                        </strong>
                      </h2>
                      <p>
                        {"Listed below are the public-private"}
                        <strong>
                          {"top 10 Designing colleges in India"}
                        </strong>
                        {"along with their total tuition fee and entrance exams/eligibility criteria:"}
                      </p>
                      <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                        <colgroup>
                          <col width={"284"} />
                          <col width={"113"} />
                          <col width={"100"} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>
                              {"College Name"}
                            </th>
                            <th>
                              {"Total Tuition Fee"}
                            </th>
                            <th>
                              {"Eligibility/Exams"}
                            </th>
                          </tr>
                          <tr>
                            <td>
                              {"INIFD Vashi Admission"}
                            </td>
                            <td>
                              {"INR 4.5 lakh"}
                            </td>
                            <td>
                              {"Merit-Based"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Carmel College, Mala Admission"}
                            </td>
                            <td>
                              {"INR 36,000"}
                            </td>
                            <td>
                              {"Merit-Based"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"St. Aloysius College Admission"}
                            </td>
                            <td>
                              {"INR 36,000"}
                            </td>
                            <td>
                              {"Merit-Based"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Arya Post Graduate College Admission"}
                            </td>
                            <td>
                              {"INR 23,890"}
                            </td>
                            <td>
                              {"Merit-Based"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {"Hamidia Girls' Degree College"}
                            </td>
                            <td>
                              {"INR 30,000 - INR 40,000"}
                            </td>
                            <td>
                              {"Merit-Based"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <strong>
                          {"B.Des Fees in Public Colleges"}
                        </strong>
                      </p>
                      <p>
                        {"Listed below is the B.Des fees in the top public design colleges in India:"}
                      </p>
                      <div className={"table-responsive"}>
                        <table>
                          <thead>
                            <tr>
                              <td>
                                <p>
                                  <strong>
                                    {"Name of Public Colleges"}
                                  </strong>
                                </p>
                              </td>
                              <td>
                                <p>
                                  <strong>
                                    {"B.Des Fees Structure (Total Fees INR)"}
                                  </strong>
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p>
                                  {"National Institute of Fashion Technology (NIFT), Kolkata"}
                                </p>
                              </td>
                              <td>
                                <p>
                                  {"7,00,000"}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  {"Indian Institute of Technology, Bombay"}
                                </p>
                              </td>
                              <td>
                                <p>
                                  {"9,23,000"}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  {"Indian Institute of Technology, Hyderabad"}
                                </p>
                              </td>
                              <td>
                                <p>
                                  {"8,00,000"}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  {"National Institute of Fashion Technology (NIFT), Chennai"}
                                </p>
                              </td>
                              <td>
                                <p>
                                  {"9,00,000"}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h2>
                          <strong>
                            {"Best Design Colleges Placements"}
                          </strong>
                        </h2>
                        <div className={"flex max-w-full flex-col flex-grow"}>
                          <div className={"min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&]:mt-5"} dir={"auto"} data-message-author-role={"assistant"} data-message-id={"f310e3ea-b5b6-4d30-a66d-48070397297c"} data-message-model-slug={"gpt-4o"}>
                            <div className={"flex w-full flex-col gap-1 empty:hidden first:pt-[3px]"}>
                              <div className={"markdown prose w-full break-words dark:prose-invert light"}>
                                <p>
                                  {"Graduates from top design colleges in India can secure excellent career and placement opportunities in leading companies and industries. These institutions provide a strong foundation in design principles, creative thinking, and industry-relevant skills, making their graduates highly sought after. According to PayScale, the average entry-level salary for designers in India ranges from ₹3 to ₹4 LPA. Below is a list of prominent recruiters associated with top design colleges, offering lucrative roles in various domains of design and creativity."}
                                </p>
                                <h3>
                                  <strong>
                                    {"Top Design Recruiters"}
                                  </strong>
                                </h3>
                                <p>
                                  {"Listed below are some of the recruiters from the top design colleges in India:"}
                                </p>
                                <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                                  <colgroup>
                                    <col width={"284"} />
                                    <col width={"113"} />
                                  </colgroup>
                                  <tbody>
                                    <tr>
                                      <th>
                                        {"Name of the Colleges"}
                                      </th>
                                      <th>
                                        {"Top Recruiters"}
                                      </th>
                                    </tr>
                                    <tr>
                                      <td>
                                        {"Arch College of Design and Business, Jaipur"}
                                      </td>
                                      <td>
                                        <div>
                                          <div>
                                            {"Zara, Myntra, H&M, Lifestyle"}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        {"Indian Institute of Technology, Guwahati"}
                                      </td>
                                      <td>
                                        <div>
                                          <div>
                                            {"Microsoft, Myntra, Flipkart, Nutanix"}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        {"Indian Institute of Technology, Hyderabad"}
                                      </td>
                                      <td>
                                        <div>
                                          <div>
                                            {"TCS, Snapdeal, Microsoft"}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        {"School of Design, MIT WPU, Pune"}
                                      </td>
                                      <td>
                                        <div>
                                          <div>
                                            {"IBM, Ford Motors, Fujitsu, Amazon"}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        {"Symbiosis Institute of Design, Pune"}
                                      </td>
                                      <td>
                                        <div>
                                          <div>
                                            {"Deloitte, Cognizant, Huawei, Microsoft, Mindtree, Whirlpool, BookMyShow"}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"mb-2 flex gap-3 empty:hidden -ml-2"}>
                          <div className={"items-center justify-start rounded-xl p-1 flex"}></div>
                        </div>
                        <h2 id={"design-colleges-placements"}></h2>
                      </div>
                    </div>
                  </li>
                </ul>
                <h2 id={"BestDesignIndia_c"}></h2>
              </div>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax  col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"design"} data-attr={"stream"} className={"filter__selected"}>
                  {"Design"}
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
                {"Showing 331 Colleges"}
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
                    <div className={"college__card__new "} key={"NID01"} id={"search-NID01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"National Institute of Design (NID), Ahmedabad"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/NID01")} title={"National Institute of Design (NID), Ahmedabad"}>
                                {"National Institute of Design (NID), Ahmedabad"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Ahmedabad, Gujarat"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"National Institute of Design (NID), Ahmedabad Reviews"} href={allowedLink("/reviews")}>
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
                          {"National Institute of Design (NID), Ahmedabad is a top accredited Government institute located in Ahmedabad, Gujarat. Code: NID01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"National Institute of Design (NID), Ahmedabad Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"National Institute of Design (NID), Ahmedabad"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"National Institute of Design (NID), Ahmedabad"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"NIFT-ND"} id={"search-NIFT-ND"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"National Institute of Fashion Technology (NIFT), New Delhi"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/NIFT-ND")} title={"National Institute of Fashion Technology (NIFT), New Delhi"}>
                                {"National Institute of Fashion Technology (NIFT), New Delhi"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"New Delhi, Delhi"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"National Institute of Fashion Technology (NIFT), New Delhi Reviews"} href={allowedLink("/reviews")}>
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
                          {"National Institute of Fashion Technology (NIFT), New Delhi is a top accredited Government institute located in New Delhi, Delhi. Code: NIFT-ND."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"National Institute of Fashion Technology (NIFT), New Delhi Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"National Institute of Fashion Technology (NIFT), New Delhi"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"National Institute of Fashion Technology (NIFT), New Delhi"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"IDC-IITB"} id={"search-IDC-IITB"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Industrial Design Centre (IDC) - IIT Bombay"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/IDC-IITB")} title={"Industrial Design Centre (IDC) - IIT Bombay"}>
                                {"Industrial Design Centre (IDC) - IIT Bombay"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Mumbai, Maharashtra"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Industrial Design Centre (IDC) - IIT Bombay Reviews"} href={allowedLink("/reviews")}>
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
                          {"Industrial Design Centre (IDC) - IIT Bombay is a top accredited Government institute located in Mumbai, Maharashtra. Code: IDC-IITB."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Industrial Design Centre (IDC) - IIT Bombay Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Industrial Design Centre (IDC) - IIT Bombay"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Industrial Design Centre (IDC) - IIT Bombay"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"SRISHTI"} id={"search-SRISHTI"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Srishti Manipal Institute of Art, Design & Tech, Bengaluru"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/SRISHTI")} title={"Srishti Manipal Institute of Art, Design & Tech, Bengaluru"}>
                                {"Srishti Manipal Institute of Art, Design & Tech, Bengaluru"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Bengaluru, Karnataka"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Srishti Manipal Institute of Art, Design & Tech, Bengaluru Reviews"} href={allowedLink("/reviews")}>
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
                          {"Srishti Manipal Institute of Art, Design & Tech, Bengaluru is a top accredited Private institute located in Bengaluru, Karnataka. Code: SRISHTI."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Srishti Manipal Institute of Art, Design & Tech, Bengaluru Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Srishti Manipal Institute of Art, Design & Tech, Bengaluru"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Srishti Manipal Institute of Art, Design & Tech, Bengaluru"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"SID-PUNE"} id={"search-SID-PUNE"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Symbiosis Institute of Design (SID), Pune"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/SID-PUNE")} title={"Symbiosis Institute of Design (SID), Pune"}>
                                {"Symbiosis Institute of Design (SID), Pune"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Pune, Maharashtra"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Symbiosis Institute of Design (SID), Pune Reviews"} href={allowedLink("/reviews")}>
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
                          {"Symbiosis Institute of Design (SID), Pune is a top accredited Private institute located in Pune, Maharashtra. Code: SID-PUNE."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Symbiosis Institute of Design (SID), Pune Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Symbiosis Institute of Design (SID), Pune"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Symbiosis Institute of Design (SID), Pune"}>{"View College"}</div>
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
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"design"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
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

export default function DesignPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <DesignContent />
    </PageRenderer>
  );
}
