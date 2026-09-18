import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Architecture",
  sourceFile: "Architecture.html",
  slug: "architecture",
  title: "Top Architecture Colleges in India 2025: Ranking, Courses, Fees & Placements",
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
        "content": "Find TopArchitecture Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top Architecture Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "og:url",
        "content": "/architecture-colleges"
      },
      {
        "property": "og:site_name",
        "content": "citsAdmission.com"
      },
      {
        "property": "og:description",
        "content": "Find TopArchitecture Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "content": "/architecture-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top Architecture Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "twitter:description",
        "content": "Find TopArchitecture Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "href": "/architecture-colleges",
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

function ArchitectureContent() {
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
              {"Top Architecture Colleges in India"}
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
                {"Top Architecture Colleges in India 2026"}
              </h1>
              <p>
                <span>
                  {"Architecture is the art of planning, designing, and constructing homes, offices, buildings, and other structures. It is an exciting and creative field that offers UG, PG, and PhD level courses in various specializations such as graphic design, urban planning, computer-aided design, etc. Top architecture colleges in India offer better career opportunities to students in both the private and public sectors."}
                </span>
              </p>
              <p>
                <span>
                  {"NIRF, India Today and Outlook have ranked top public and private colleges in India based on the architecture courses. Various top architecture colleges in India, such as CEPT University, School of Planning and Architecture (SPA) Delhi, IIT Kharagpur, etc., provide quality education and better placement opportunities to students in the field of architecture."}
                </span>
              </p>
              <p>
                <strong>
                  {"Table of Contents"}
                </strong>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <a href={allowedLink("#top-10-architecture-colleges-in-india-by-nirf-ranking")}>
                    <span>
                      {"Top 10 Architecture Colleges in India by NIRF Ranking"}
                    </span>
                  </a>
                </li>
                <li aria-level={"1"}>
                  <a href={allowedLink("#entrance-exams-accepted-for-architecture-colleges")}>
                    <span>
                      {"Entrance Exams Accepted for Architecture Colleges"}
                    </span>
                  </a>
                </li>
                <li aria-level={"1"}>
                  <a href={allowedLink("#admission-and-eligibility-criteria-for-admission-colleges")}>
                    <span>
                      {"Admission and Eligibility Criteria for Architecture Colleges"}
                    </span>
                  </a>
                </li>
                <li aria-level={"1"}>
                  <a href={allowedLink("#cut-off-for-top-architecture-colleges-in-india")}>
                    <span>
                      {"Cut Off for Top Architecture Colleges in India"}
                    </span>
                  </a>
                </li>
                <li aria-level={"1"}>
                  <a href={allowedLink("#architecture-colleges-placements")}>
                    <span>
                      {"Architecture Colleges’ Placements"}
                    </span>
                  </a>
                </li>
              </ul>
              <h2 id={"top-10-architecture-colleges-in-india-by-nirf-ranking"}>
                <strong>
                  {"Top 10 Architecture Colleges in India by NIRF Ranking"}
                </strong>
              </h2>
              <p>
                <span>
                  {"The MHRD approves the National Institute Ranking Framework (NIRF) and uses specific methodologies to rank educational institutions in India. Here are the ranking parameters and weightage used by the NIRF to rank colleges"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    {"Teaching, Learning, and Resources (TLR) - 30%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Research and Professional Practice (RP) - 30%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Graduation Outcomes (GO) - 15%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Outreach and Inclusivity (OI) - 15%"}
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    {"Peer Perception (PR) - 10%"}
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  {"Below listed are the top architecture colleges in India by NIRF Ranking"}
                </span>
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <tbody>
                  <tr>
                    <th>
                      {"Top Colleges"}
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
                      <a href={allowedLink("/college/indian-institute-of-technology-iit-roorkee")} target={"_blank"} rel={"noopener"}>
                        {"IIT Roorkee"}
                      </a>
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
                      <a href={allowedLink("/college/indian-institute-of-technology-iit-kharagpur")} target={"_blank"} rel={"noopener"}>
                        {"IIT Kharagpur"}
                      </a>
                    </td>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"2"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={allowedLink("/college/national-institute-of-technology-nit-calicut")} target={"_blank"} rel={"noopener"}>
                        {"NIT Calicut"}
                      </a>
                    </td>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"3"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={allowedLink("/college/indian-institute-of-engineering-science-and-technology-iiest-howrah")} target={"_blank"} rel={"noopener"}>
                        {"Indian Institute of Engineering Science and Technology, Shibpur"}
                      </a>
                    </td>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      {"4"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={allowedLink("/college/school-of-planning-and-architecture-delhi")} target={"_blank"} rel={"noopener"}>
                        {"SPA Delhi"}
                      </a>
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
                      <a href={allowedLink("/college/cept-university-ahmedabad")} target={"_blank"} rel={"noopener"}>
                        {"Centre for Environmental Planning and Technology University"}
                      </a>
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
                      <a href={allowedLink("/college/jamia-millia-islamia-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Millia Islamia"}
                      </a>
                    </td>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      {"7"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={allowedLink("/college/national-institute-of-technology-nit-thiruchirapalli")} target={"_blank"} rel={"noopener"}>
                        {"NIT Trichy"}
                      </a>
                    </td>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"8"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={allowedLink("/college/national-institute-of-technology-nit-rourkela")} target={"_blank"} rel={"noopener"}>
                        {"NIT Rourkela"}
                      </a>
                    </td>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      {"9"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href={allowedLink("/college/visvesaraya-national-institute-of-technology-vnit-nagpur")} target={"_blank"} rel={"noopener"}>
                        {"Visvesvaraya National Institute of Technology"}
                      </a>
                    </td>
                    <td>
                      {"12"}
                    </td>
                    <td>
                      {"10"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={"flex-1 overflow-hidden @container/thread"}>
                <div className={"h-full"}>
                  <div className={"react-scroll-to-bottom--css-evbgu-79elbk h-full"}>
                    <div className={"react-scroll-to-bottom--css-evbgu-1n7m0yu"}>
                      <div className={"flex flex-col text-sm md:pb-9"}>
                        <article className={"w-full scroll-mb-[var(--thread-trailing-height,150px)] text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]"} dir={"auto"} data-testid={"conversation-turn-3"} data-scroll-anchor={"true"}>
                          <div className={"m-auto text-base py-[18px] px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5"}>
                            <div className={"mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl"}>
                              <div className={"relative flex w-full min-w-0 flex-col agent-turn"}>
                                <div className={"flex-col gap-1 md:gap-3"}>
                                  <div className={"flex max-w-full flex-col flex-grow"}>
                                    <div className={"min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&]:mt-5"} dir={"auto"} data-message-author-role={"assistant"} data-message-id={"989cdce9-4fff-4bf7-87c0-e20905fd8fba"} data-message-model-slug={"gpt-4o-mini"}>
                                      <div className={"flex w-full flex-col gap-1 empty:hidden first:pt-[3px]"}>
                                        <div className={"markdown prose w-full break-words dark:prose-invert light"}>
                                          <h2>
                                            <strong>
                                              {"Admission Process for Top B.Arch Colleges in India Entrance Exams"}
                                            </strong>
                                          </h2>
                                          <ol>
                                            <li>
                                              <p>
                                                <strong>
                                                  {"NATA (National Aptitude Test in Architecture)"}
                                                </strong>
                                              </p>
                                              <ul>
                                                <li>
                                                  {"Administered by the Council of Architecture (CoA)."}
                                                </li>
                                                <li>
                                                  {"A national-level entrance exam for admission to the 5-year B.Arch program."}
                                                </li>
                                                <li>
                                                  {"Candidates may take one or both of the tests conducted under NATA."}
                                                </li>
                                              </ul>
                                            </li>
                                            <li>
                                              <p>
                                                <strong>
                                                  {"WUDAT (World University of Design Aptitude Test)"}
                                                </strong>
                                              </p>
                                              <ul>
                                                <li>
                                                  {"Conducted by the World University of Design (WUD) for admission to UG and PG design courses."}
                                                </li>
                                                <li>
                                                  {"Applicable for candidates seeking entry into architecture and design-related programs at participating institutes."}
                                                </li>
                                              </ul>
                                            </li>
                                            <li>
                                              <p>
                                                <strong>
                                                  {"JEE Main"}
                                                </strong>
                                              </p>
                                              <ul>
                                                <li>
                                                  {"Held for admission to BE/BTech, B.Arch, and B.Plan programs at NITs, IIITs, and other CFTIs."}
                                                </li>
                                                <li>
                                                  {"Also accepted by certain institutions/universities supported by participating State Governments."}
                                                </li>
                                                <li>
                                                  {"JEE Main is a prerequisite for JEE Advanced, which is for IIT admission."}
                                                </li>
                                                <li>
                                                  {"Candidates are encouraged to review past years’ papers for better exam preparation."}
                                                </li>
                                                <li>
                                                  {"Practicing for at least 10 years of previous JEE Main papers is recommended to familiarize with exam patterns and difficulty levels."}
                                                </li>
                                                <li>
                                                  {"Additional preparation tips can be found on platforms like FIIT JEE."}
                                                </li>
                                              </ul>
                                            </li>
                                            <li>
                                              <p>
                                                <strong>
                                                  {"Entrance Exam Schedules"}
                                                </strong>
                                              </p>
                                              <ul>
                                                <li>
                                                  {"A detailed schedule for these exams is essential for candidates aiming for admission to top B.Arch colleges in India."}
                                                </li>
                                              </ul>
                                            </li>
                                          </ol>
                                          <p>
                                            {"Given below is the schedule for entrance exams for admission to the"}
                                            <strong>
                                              {"top 10 Architecture colleges in India:"}
                                            </strong>
                                          </p>
                                          <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                                            <tbody>
                                              <tr>
                                                <th>
                                                  {"Exam Name"}
                                                </th>
                                                <th>
                                                  {"Exam Date"}
                                                </th>
                                                <th>
                                                  {"Exam Schedule"}
                                                </th>
                                                <th>
                                                  {"Courses Applicable"}
                                                </th>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <a href={allowedLink("/exams/nata")} target={"_blank"} rel={"noopener"}>
                                                    {"NATA"}
                                                  </a>
                                                </td>
                                                <td>
                                                  {"Apr '25"}
                                                </td>
                                                <td>
                                                  {"NATA Schedule"}
                                                </td>
                                                <td>
                                                  {"BArch"}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <a href={allowedLink("/exams/jee-main")} target={"_blank"} rel={"noopener"}>
                                                    {"JEE Main"}
                                                  </a>
                                                </td>
                                                <td>
                                                  {"Session 1: Jan '25"}
                                                  <br />
                                                  {"Session: Apr '25"}
                                                </td>
                                                <td>
                                                  {"JEE Main Schedule"}
                                                </td>
                                                <td>
                                                  <div>
                                                    <div>
                                                      {"BTech, BArch and BPlan"}
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"DASA UG"}
                                                </td>
                                                <td>
                                                  {"Completed"}
                                                </td>
                                                <td>
                                                  {"DASA UG Schedule"}
                                                </td>
                                                <td>
                                                  <div>
                                                    <div>
                                                      {"BTech and BArch"}
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"WUDAT"}
                                                </td>
                                                <td>
                                                  {"Completed"}
                                                </td>
                                                <td>
                                                  {"WUDAT Schedule"}
                                                </td>
                                                <td>
                                                  <div>
                                                    <div>
                                                      {"BArch, BDes, BVA, BBA, Retail Business Management, BA (H), BPA, MDes, MVA and MBA."}
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <a href={allowedLink("/exams/jee-advanced")} target={"_blank"} rel={"noopener"}>
                                                    {"JEE Advanced"}
                                                  </a>
                                                </td>
                                                <td>
                                                  {"May '25"}
                                                </td>
                                                <td>
                                                  {"JEE Advanced Schedule"}
                                                </td>
                                                <td>
                                                  <div>
                                                    <div>
                                                      {"BTech, BS, BArch, BTech and MTech, BS and MS dual degree, Integrated MTech, Integrated MSc"}
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"AAT"}
                                                </td>
                                                <td>
                                                  {"Completed"}
                                                </td>
                                                <td>
                                                  {"AAT Schedule"}
                                                </td>
                                                <td>
                                                  {"BArch"}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"mb-2 flex gap-3 empty:hidden -ml-2"}>
                                    <h2 className={"items-center justify-start rounded-xl p-1 flex"}>
                                      <strong>
                                        {"Cut Off for Top Architecture Colleges in India"}
                                      </strong>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                {"Top architecture colleges in India release cut-off lists based on the merit obtained in the entrance exams. The cut-off decided by the institution may vary based on certain factors such as the number of candidates who appeared in the examinations and the difficulty level of the paper. NATA, JEE Mains, and JEE Advanced are a few of the popular exams for admission to architecture courses. Following is the cut-off for top architecture entrance exams."}
              </p>
              <h3>
                <strong>
                  {"NATA Cut Off"}
                </strong>
              </h3>
              <p>
                {"National Aptitude Test in Architecture (NATA) is a national-level entrance exam conducted by the Council of Architecture (COA) for admission to the B.Arch course. Below listed is the NATA cut-off for some of the top architecture colleges in India."}
              </p>
              <div className={"table-responsive"}>
                <table>
                  <thead>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            {"Name of the Colleges"}
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            {"NATA Cut-Off (Rank-wise)"}
                          </strong>
                        </p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          {"M.S. University of Baroda, Department of Architecture"}
                        </p>
                      </td>
                      <td>
                        <p>
                          {"10044"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          {"CEPT University, Faculty of Architecture"}
                        </p>
                      </td>
                      <td>
                        <p>
                          {"10026"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          {"Sarvajanik College of Engineering and Technology"}
                        </p>
                      </td>
                      <td>
                        <p>
                          {"10151"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          {"Sardar Vallabhbhai Patel Institute of Technology"}
                        </p>
                      </td>
                      <td>
                        <p>
                          {"10205"}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>
                <strong>
                  {"JEE Main Cut-Off"}
                </strong>
              </h3>
              <p>
                {"The Joint Entrance Examination (JEE Main) is a national-level entrance examination conducted by the National Test Agency (NTA). JEE Main Paper-2 scores are accepted by 31 NITs, 25 IIITs, and 28 Government Technical Institutes (GFTIs) for admission to the B.Arch course. The cut-off for JEE Main at top architecture colleges is mentioned below:"}
              </p>
              <div className={"table-responsive"}>
                <table>
                  <thead>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            {"Name of the Colleges"}
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            {"JEE Main Cut-Off (Rank-wise)"}
                          </strong>
                        </p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/malviya-national-institute-of-technology-mnit-jaipur")} target={"_blank"} rel={"noopener"}>
                            {"Malviya National Institute of Technology (MNIT), Jaipur"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"2260"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/national-institute-of-technology-nit-calicut/admission")} target={"_blank"} rel={"noopener"}>
                            {"National Institute of Technology (NIT), Calicut"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"376"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a href={allowedLink("/college/maulana-azad-national-institute-of-technology-manit-bhopal")} target={"_blank"} rel={"noopener"}>
                            {"Maulana Azad National Institute of Technology (MANIT), Bhopal"}
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {"2455"}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 id={"TopArchInd_e"}>
                {"Top Architecture Colleges in India Accepting NATA Score"}
              </h2>
              <p>
                {"The top Architecture colleges accepting NATA scores in India along with their tuition fees"}
              </p>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <th>
                      {"Top Colleges"}
                    </th>
                    <th>
                      {"Tuition Fee"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"IIT Roorkee"}
                    </td>
                    <td>
                      {"INR 10 lakh"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"IIEST Shibpur"}
                    </td>
                    <td>
                      {"INR 6 lakh"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"CEPT University"}
                    </td>
                    <td>
                      {"INR 17 lakh"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Jamia Millia Islamia"}
                    </td>
                    <td>
                      {"INR 81,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"VNIT Nagpur"}
                    </td>
                    <td>
                      {"INR 6 lakh"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                {"Region-wise Top Architecture Colleges in India"}
              </h2>
              <div className={"flex-1 overflow-hidden @container/thread"}>
                <div className={"h-full"}>
                  <div className={"react-scroll-to-bottom--css-evbgu-79elbk h-full"}>
                    <div className={"react-scroll-to-bottom--css-evbgu-1n7m0yu"}>
                      <div className={"flex flex-col text-sm md:pb-9"}>
                        <article className={"w-full scroll-mb-[var(--thread-trailing-height,150px)] text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]"} dir={"auto"} data-testid={"conversation-turn-9"} data-scroll-anchor={"true"}>
                          <div className={"m-auto text-base py-[18px] px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5"}>
                            <div className={"mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl"}>
                              <div className={"relative flex w-full min-w-0 flex-col agent-turn"}>
                                <div className={"flex-col gap-1 md:gap-3"}>
                                  <div className={"flex max-w-full flex-col flex-grow"}>
                                    <div className={"min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&]:mt-5"} dir={"auto"} data-message-author-role={"assistant"} data-message-id={"266a7250-48d3-4998-9bc4-758ebb3d3e51"} data-message-model-slug={"gpt-4o-mini"}>
                                      <div className={"flex w-full flex-col gap-1 empty:hidden first:pt-[3px]"}>
                                        <div className={"markdown prose w-full break-words dark:prose-invert light"}>
                                          <p>
                                            {"India is home to approximately 30 top-tier architecture colleges, with Tamil Nadu and Punjab emerging as the leading states regarding the number of premier institutions offering B.Arch programs. These states are renowned for their high-quality architectural education, advanced infrastructure, and strong industry connections. Tamil Nadu, in particular, hosts several prestigious institutions that have earned national recognition for their academic excellence, while Punjab similarly boasts a range of well-regarded colleges. For a detailed overview of the distribution of B.Arch colleges across India, please refer to the table below, which highlights the states with the highest concentration of top architecture colleges."}
                                          </p>
                                          <table width={"785"}>
                                            <tbody>
                                              <tr>
                                                <th>
                                                  {"Regions"}
                                                </th>
                                                <th>
                                                  {"No. of Colleges"}
                                                </th>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"Tamil Nadu"}
                                                </td>
                                                <td>
                                                  {"4"}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"Punjab"}
                                                </td>
                                                <td>
                                                  {"3"}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"Delhi/NCR"}
                                                </td>
                                                <td>
                                                  {"3"}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <h2>
                                            {"Top Architecture Colleges in Tamil Nadu"}
                                          </h2>
                                          <p>
                                            {"The top Architecture colleges in Tamil Nadu along with their Tuition Fee :"}
                                          </p>
                                          <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                                            <colgroup>
                                              <col width={"471"} />
                                              <col width={"100"} />
                                            </colgroup>
                                            <tbody>
                                              <tr>
                                                <th>
                                                  {"College Name"}
                                                </th>
                                                <th>
                                                  {"Fees"}
                                                </th>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"SRMIST Kattankulathur"}
                                                </td>
                                                <td>
                                                  {"INR 13.75 lakh"}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"NIT Trichy"}
                                                </td>
                                                <td>
                                                  {"INR 6.25 lakh"}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  {"Dr. M.G.R. Educational and Research Centre"}
                                                </td>
                                                <td>
                                                  {"INR 5 lakh"}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id={"TopArchInd_h"}></h2>
              <h2>
                {"Top Architecture Colleges in Punjab"}
              </h2>
              <p>
                {"The top Architecture colleges in Punjab along with their Tuition Fee"}
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <tbody>
                  <tr>
                    <th>
                      {"College Name"}
                    </th>
                    <th>
                      {"Tuition Fee"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"CU"}
                    </td>
                    <td>
                      {"INR 10.50 lakh"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"LPU"}
                    </td>
                    <td>
                      {"INR 12 lakh"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Chandigarh College of Architecture"}
                    </td>
                    <td>
                      {"INR 1 lakh"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                {"Top Architecture Colleges in Delhi NCR"}
              </h2>
              <p>
                {"The top Architecture colleges in Delhi NCR along with their Tuition Fee"}
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <tbody>
                  <tr>
                    <th>
                      {"College Name"}
                    </th>
                    <th>
                      {"Tuition Fee"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"SPA Delhi"}
                    </td>
                    <td>
                      {"INR 2.70 lakh"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Faculty of Architecture and Ekistics JMI"}
                    </td>
                    <td>
                      {"INR 80,750"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Architecture Recruiters"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Listed below are the recruiters from the top architecture colleges in India:"}
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td>
                      <p>
                        <strong>
                          {"Name of the Colleges"}
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>
                          {"Top Recruiters"}
                        </strong>
                      </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <span>
                          {"Indian Institute of Technology, Kharagpur"}
                        </span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"Tata Steel, Siemens, Honeywell, L&T Construction"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>
                          {"Indian Institute of Technology, Roorkee"}
                        </span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"Applied Materials, Larsen & Toubro, Reliance Industries"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>
                          {"CEPT University, Ahmedabad"}
                        </span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"Reliance, Adani Group, KPMG, Kalpataru Power"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>
                          {"National Institute of Technology (NIT), Trichy"}
                        </span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"IOCL, HPCL, HAL"}
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p></p>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax  col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"architecture"} data-attr={"stream"} className={"filter__selected"}>
                  {"Architecture"}
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
                {"Showing 415 Colleges"}
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
                    <div className={"college__card__new "} key={"SPA01"} id={"search-SPA01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"School of Planning and Architecture (SPA), New Delhi"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/SPA01")} title={"School of Planning and Architecture (SPA), New Delhi"}>
                                {"School of Planning and Architecture (SPA), New Delhi"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"New Delhi, Delhi"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"School of Planning and Architecture (SPA), New Delhi Reviews"} href={allowedLink("/reviews")}>
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
                          {"School of Planning and Architecture (SPA), New Delhi is a top accredited Government institute located in New Delhi, Delhi. Code: SPA01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"School of Planning and Architecture (SPA), New Delhi Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"School of Planning and Architecture (SPA), New Delhi"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"School of Planning and Architecture (SPA), New Delhi"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"IITKGP-A"} id={"search-IITKGP-A"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"IIT Kharagpur - Department of Architecture"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/IITKGP-A")} title={"IIT Kharagpur - Department of Architecture"}>
                                {"IIT Kharagpur - Department of Architecture"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Kharagpur, West Bengal"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"IIT Kharagpur - Department of Architecture Reviews"} href={allowedLink("/reviews")}>
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
                          {"IIT Kharagpur - Department of Architecture is a top accredited Government institute located in Kharagpur, West Bengal. Code: IITKGP-A."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"IIT Kharagpur - Department of Architecture Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"IIT Kharagpur - Department of Architecture"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"IIT Kharagpur - Department of Architecture"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"JJCA01"} id={"search-JJCA01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Sir J.J. College of Architecture, Mumbai"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/JJCA01")} title={"Sir J.J. College of Architecture, Mumbai"}>
                                {"Sir J.J. College of Architecture, Mumbai"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Mumbai, Maharashtra"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Sir J.J. College of Architecture, Mumbai Reviews"} href={allowedLink("/reviews")}>
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
                          {"Sir J.J. College of Architecture, Mumbai is a top accredited Government institute located in Mumbai, Maharashtra. Code: JJCA01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Sir J.J. College of Architecture, Mumbai Courses"}>
                                  {"6 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Sir J.J. College of Architecture, Mumbai"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Sir J.J. College of Architecture, Mumbai"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"NITC-A"} id={"search-NITC-A"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"NIT Calicut - Department of Architecture"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/NITC-A")} title={"NIT Calicut - Department of Architecture"}>
                                {"NIT Calicut - Department of Architecture"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Calicut, Kerala"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"NIT Calicut - Department of Architecture Reviews"} href={allowedLink("/reviews")}>
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
                          {"NIT Calicut - Department of Architecture is a top accredited Government institute located in Calicut, Kerala. Code: NITC-A."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"NIT Calicut - Department of Architecture Courses"}>
                                  {"5 Courses"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"NIT Calicut - Department of Architecture"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"NIT Calicut - Department of Architecture"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"CEPT01"} id={"search-CEPT01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"CEPT University, Ahmedabad"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/CEPT01")} title={"CEPT University, Ahmedabad"}>
                                {"CEPT University, Ahmedabad"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Ahmedabad, Gujarat"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"CEPT University, Ahmedabad Reviews"} href={allowedLink("/reviews")}>
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
                          {"CEPT University, Ahmedabad is a top accredited Private institute located in Ahmedabad, Gujarat. Code: CEPT01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"CEPT University, Ahmedabad Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"CEPT University, Ahmedabad"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"CEPT University, Ahmedabad"}>{"View College"}</div>
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
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"architecture"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
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

export default function ArchitecturePage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <ArchitectureContent />
    </PageRenderer>
  );
}
