import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Management",
  sourceFile: "Management.html",
  slug: "management",
  title: "Top MBA Colleges in India 2026: Rankings, Fees, Placements & Admission Guide",
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
        "content": "Explore India’s best MBA colleges for 2026-27. Compare IIMs, XLRI, FMS Delhi, and top private B-schools by fees, placements, ROI, and specializations. Plan admissions via CAT, XAT, GMAT, and NMAT for careers in finance, consulting, and analytics."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top MBA Colleges in India 2026: Rankings, Fees, Placements & Admission Guide"
      },
      {
        "property": "og:url",
        "content": "/management-colleges"
      },
      {
        "property": "og:site_name",
        "content": "Admission Portal"
      },
      {
        "property": "og:description",
        "content": "Top MBA Colleges in India 2026: Check rankings, placement, fees, admission, cutoff, eligibility, top recruitments, scholarships and latest news of MBA colleges."
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
        "content": "/management-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top MBA Colleges in India 2026: Rankings, Fees, Placements & Admission Guide"
      },
      {
        "property": "twitter:description",
        "content": "Explore India’s best MBA colleges for 2026-27. Compare IIMs, XLRI, FMS Delhi, and top private B-schools by fees, placements, ROI, and specializations. Plan admissions via CAT, XAT, GMAT, and NMAT for careers in finance, consulting, and analytics."
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
        "href": "/management-colleges",
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

function ManagementContent() {
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
              {"Top MBA Colleges in India 2026: Rankings, Fees, Placements & Admission Guide"}
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
                {"Top MBA Colleges in India 2026: Rankings, Fees, Placements & Admission Guide"}
              </h1>
              <p dir={"auto"}>
                {"India's MBA ecosystem flourishes with more than 5,800 institutions, encompassing over 90 premier colleges (40 government, 50 private, and one semi-government), propelling professionals into high-impact roles in finance, consulting, and technology sectors. For the 2026 intake, leading MBA colleges in India showcase average salaries of INR 25-35 LPA and near-100% placement success at flagship B-schools, leveraging a vast alumni network exceeding 1 million members to support India's expanding $3.5 trillion economy."}
              </p>
              <p dir={"auto"}>
                {"NIRF 2025 crowns IIM Ahmedabad as the top-ranked at No. 1 (score 83.29), trailed by IIM Bangalore and IIM Kozhikode, which shine in research innovation and graduate employability. Government standouts like FMS Delhi dominate ROI metrics (up to 1470%), while private powerhouses such as XLRI Jamshedpur deliver unparalleled global partnerships. Entry to these programs relies on competitive exams including CAT, XAT, and GMAT, with CAT 2026 tentatively scheduled for November 29."}
              </p>
              <p dir={"auto"}>
                {"Compiled from NIRF 2025 evaluations and official institute disclosures, this guide streamlines your selection for 2027 admissions. Delve into comparisons of fees, ROI, placements, and specializations to resolve common searches like “Which MBA college offers the best ROI in India?” or “Top MBA colleges for finance in India.”"}
              </p>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"Key Highlights"}
                  </strong>
                  {": Over 90 NIRF-ranked institutions; CAT as the primary admission gateway; IIMs claim 7 of the top 10 positions."}
                </li>
                <li>
                  <strong>
                    {"Why Read On?"}
                  </strong>
                  {": Gain insights into cost-effective options, post-graduation career trajectories, and tailored strategies for 2027 admissions."}
                </li>
              </ul>
              <p dir={"auto"}>
                {"Gear up for CAT 2026 preparation or explore IIM Ahmedabad's profile for a head start."}
              </p>
              <h2 dir={"auto"}>
                {"Top 10 MBA Colleges in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"NIRF 2025 ranks B-schools using criteria like teaching excellence (30%), research productivity (30%), graduation outcomes (20%), outreach (10%), and perception (10%), where IIMs capture 7 of the top 10 slots. CAT 2026 (expected November 29) demands 99+ percentiles for IIM shortlists, succeeded by Written Ability Test (WAT), Group Discussion (GD), and Personal Interview (PI) evaluations."}
              </p>
              <div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"xs"}>
                          {"Rank"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"College Name"}
                        </th>
                        <th data-col-size={"sm"}>
                          {"Total Fees (INR Lakhs)"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"Avg Placement (INR LPA)"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"1"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-ahmedabad")} target={"_blank"}>
                            {"IIM Ahmedabad"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"27.5"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"35.22"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"2"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-bangalore")} target={"_blank"}>
                            {"IIM Bangalore"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"26.5"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"34.88"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"3"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-kozhikode")}>
                            {"IIM Kozhikode"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"22.5"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"31.02"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"4"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/department-of-management-studies-dms-iit-delhi-new-delhi")} target={"_blank"}>
                            {"IIT Delhi (DMS)"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"10.4"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"25.45"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"5"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-lucknow")}>
                            {"IIM Lucknow"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"21"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"32"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"6"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"IIM Mumbai"}
                        </td>
                        <td data-col-size={"sm"}>
                          {"21"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"31.1"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"7"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-calcutta")}>
                            {"IIM Calcutta"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"27"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"35.07"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"8"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-indore")} target={"_blank"}>
                            {"IIM Indore"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"21"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"30.21"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"9"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/management-development-institute-mdi-gurgaon")} target={"_blank"}>
                            {"MDI Gurgaon"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"27"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"27.67"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"10"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/xaviers-labour-relation-institue-xlri-jamshedpur")} target={"_blank"}>
                            {"XLRI Jamshedpur"}
                          </a>
                        </td>
                        <td data-col-size={"sm"}>
                          {"35"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"30"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"Placement Highlights"}
                  </strong>
                  {": Universal 100% placement rates; consulting positions surged 25% (e.g., McKinsey, Bain); IIM Calcutta's median stands at INR 35 LPA."}
                </li>
                <li>
                  <strong>
                    {"Eligibility"}
                  </strong>
                  {": Bachelor's degree (minimum 50%); valid CAT 2026 score; IIM Common Admission Process (CAP) for shortlisting. Reservations: 27% OBC, 15% SC, 7.5% ST."}
                </li>
                <li>
                  <strong>
                    {"USP"}
                  </strong>
                  {": IIM Ahmedabad delivers 500+ annual case studies to sharpen strategic decision-making skills."}
                </li>
              </ul>
              <h2 dir={"auto"}>
                {"Top Government MBA Colleges in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"Government B-schools occupy 12 of NIRF 2025's top 20 spots, prioritizing affordability and ties to public sector undertakings (PSUs), making them prime choices for queries on the best government MBA college in Delhi. CAT cutoffs range from 90-99 percentiles."}
              </p>
              <p dir={"auto"}>
                {"Why opt for government colleges? Fees dip as low as INR 0.99 lakhs, yielding 200-1470% ROI that surpasses many private counterparts, bolstered by a 20% uptick in PSU offers from entities like SBI and ONGC."}
              </p>
              <div>
                <div>
                  <div></div>
                </div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"xs"}>
                          {"Rank"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"College"}
                        </th>
                        <th data-col-size={"md"}>
                          {"Total Fees (INR Lakhs)"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"Avg Placement (INR LPA)"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"1"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-ahmedabad")} target={"_blank"}>
                            {"IIM Ahmedabad"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"27.5"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"35.22"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"2"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-bangalore")}>
                            {"IIM Bangalore"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"26.5"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"34.88"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"4"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-kozhikode")}>
                            {"IIT Delhi DMS"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"10.4"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"25.45"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"5"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-lucknow")}>
                            {"IIM Lucknow"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"21"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"32"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"6"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"IIM Mumbai"}
                        </td>
                        <td data-col-size={"md"}>
                          {"21"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"31.1"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"7"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-calcutta")}>
                            {"IIM Calcutta"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"27"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"35.07"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"12"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/vinod-gupta-school-of-management-vgsom-iit-kharagpur")} target={"_blank"}>
                            {"IIT Kharagpur VGSoM"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"12"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"22.12"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"16"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/department-of-management-studies-doms-iit-madras-tamil-nadu")} target={"_blank"}>
                            {"IIT Madras DoMS"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"8"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"20.3"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"NR"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/faculty-of-management-studies-fms-delhi")}>
                            {"FMS Delhi"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"2.32"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"34.1"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"NR"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/jamnalal-bajaj-institute-of-management-studies-jbims-mumbai")}>
                            {"JBIMS Mumbai"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"6.5"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"28"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"FMS Delhi"}
                  </strong>
                  {": Attracts 350+ recruiters (Deloitte, HUL); CAT 98+ cutoff; applications open October 2026 through Delhi University portal."}
                </li>
                <li>
                  <strong>
                    {"Scholarships"}
                  </strong>
                  {": Up to INR 1 lakh for Economically Weaker Sections (EWS); 50% fee remission for SC/ST via national schemes."}
                </li>
              </ul>
              <h2 dir={"auto"}>
                {"Top Private MBA Colleges in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"Private institutions like MDI Gurgaon focus on international collaborations, suiting searches for the best private MBA colleges in Mumbai or top private B-schools for analytics."}
              </p>
              <div>
                <div>
                  <div></div>
                </div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"xs"}>
                          {"Rank"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"College"}
                        </th>
                        <th data-col-size={"xs"}>
                          {"Total Fees (INR Lakhs)"}
                        </th>
                        <th data-col-size={"xs"}>
                          {"Avg Placement (INR LPA)"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"9"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/management-development-institute-mdi-gurgaon")}>
                            {"MDI Gurgaon"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"27"}
                        </td>
                        <td data-col-size={"xs"}>
                          {"27.67"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"10"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/xaviers-labour-relation-institue-xlri-jamshedpur")}>
                            {"XLRI Jamshedpur"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"35"}
                        </td>
                        <td data-col-size={"xs"}>
                          {"30"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"13"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/symbiosis-institute-of-business-management-sibm-pune")}>
                            {"SIBM Pune"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"24"}
                        </td>
                        <td data-col-size={"xs"}>
                          {"28"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"20"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/sp-jain-institute-of-management-and-research-spjimr-mumbai")} target={"_blank"}>
                            {"SPJIMR Mumbai"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"26"}
                        </td>
                        <td data-col-size={"xs"}>
                          {"33"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"21"}
                        </td>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/narsee-monjee-institute-of-management-studies-nmims-mumbai")} target={"_blank"}>
                            {"NMIMS Mumbai"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"25"}
                        </td>
                        <td data-col-size={"xs"}>
                          {"27"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"Edge"}
                  </strong>
                  {": SPJIMR's social impact pathway secured 30% NGO placements."}
                </li>
                <li>
                  <strong>
                    {"Admission"}
                  </strong>
                  {": GMAT scores welcomed at private colleges for broader applicant pools."}
                </li>
              </ul>
              <h2 dir={"auto"}>
                {"Top Integrated MBA Colleges in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"Integrated BBA+MBA pathways, such as IIM Indore’s IPM (150 seats), sidestep separate MBA exams. IPMAT 2027 (May) targets seekers of top integrated MBA colleges in India."}
              </p>
              <div>
                <div>
                  <div></div>
                </div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"lg"}>
                          {"College"}
                        </th>
                        <th data-col-size={"xs"}>
                          {"Fees (5 Yrs, INR Lakhs)"}
                        </th>
                        <th data-col-size={"md"}>
                          {"Avg Placement (INR LPA)"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-indore")} target={"_blank"}>
                            {"IIM Indore"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"35"}
                        </td>
                        <td data-col-size={"md"}>
                          {"27.5"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-rohtak")} target={"_blank"}>
                            {"IIM Rohtak"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"33"}
                        </td>
                        <td data-col-size={"md"}>
                          {"18.5"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/narsee-monjee-institute-of-management-studies-nmims-mumbai")} target={"_blank"}>
                            {"NMIMS Mumbai"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"25"}
                        </td>
                        <td data-col-size={"md"}>
                          {"20"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/nirma-university-nu-ahmedabad")} target={"_blank"}>
                            {"Nirma Univ"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"22"}
                        </td>
                        <td data-col-size={"md"}>
                          {"12"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iimj-jammu")}>
                            {"IIM Jammu"}
                          </a>
                        </td>
                        <td data-col-size={"xs"}>
                          {"32"}
                        </td>
                        <td data-col-size={"md"}>
                          {"15"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"Strengths"}
                  </strong>
                  {": IIM Indore emphasizes 40% analytics content; includes exchanges with ESCP Business School."}
                </li>
                <li>
                  <strong>
                    {"Eligibility"}
                  </strong>
                  {": 60% in Class 12; suited for post-high school career accelerators."}
                </li>
              </ul>
              <h2 dir={"auto"}>
                {"Low-Cost MBA Colleges in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"Budget-savvy candidates can target NIRF 101–125 ranked options like Tezpur and Pondicherry for superior ROI in affordable MBA colleges in India."}
              </p>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"Tezpur (INR 1.5 lakhs)"}
                  </strong>
                  {": INR 8 LPA averages; 85% PSU placements."}
                </li>
                <li>
                  <strong>
                    {"Pondicherry (INR 1.4 lakhs)"}
                  </strong>
                  {": INR 10 LPA; hospitality specialization with Taj recruiters."}
                </li>
              </ul>
              <h2 dir={"auto"}>
                {"Top Government MBA Colleges in Delhi 2026"}
              </h2>
              <p dir={"auto"}>
                {"Delhi's cost-effective frontrunners address best government MBA college in Delhi needs: FMS Delhi (INR 2.32 lakhs, INR 34.1 LPA) and IIT Delhi (INR 10.4 lakhs, INR 25.45 LPA). CAT cutoff: 98+."}
              </p>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"FMS"}
                  </strong>
                  {": Features 100+ electives; 10,000+ alumni in consulting networks."}
                </li>
                <li>
                  <strong>
                    {"IIT Delhi"}
                  </strong>
                  {": Telecom-focused MBA; 40% analytics hires from tech leaders."}
                </li>
              </ul>
              <h2 dir={"auto"}>
                {"MBA Fees, ROI & Scholarships in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"MBA fees in India span INR 0.99 lakhs to 35 lakhs, with peak ROI at 1470% for FMS Delhi. Scholarships bolster accessibility."}
              </p>
              <div>
                <div>
                  <div></div>
                </div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"lg"}>
                          {"College"}
                        </th>
                        <th data-col-size={"md"}>
                          {"Fees (INR Lakhs)"}
                        </th>
                        <th data-col-size={"sm"}>
                          {"ROI (%)"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/faculty-of-management-studies-fms-delhi")} target={"_blank"}>
                            {"FMS Delhi"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"2.32"}
                        </td>
                        <td data-col-size={"sm"}>
                          {"1470"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/jamnalal-bajaj-institute-of-management-studies-jbims-mumbai")} target={"_blank"}>
                            {"JBIMS Mumbai"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"6.5"}
                        </td>
                        <td data-col-size={"sm"}>
                          {"431"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/indian-institute-of-management-iim-ahmedabad")} target={"_blank"}>
                            {"IIM Ahmedabad"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"27.5"}
                        </td>
                        <td data-col-size={"sm"}>
                          {"128"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"lg"}>
                          <a href={allowedLink("/college/xaviers-labour-relation-institue-xlri-jamshedpur")} target={"_blank"}>
                            {"XLRI Jamshedpur"}
                          </a>
                        </td>
                        <td data-col-size={"md"}>
                          {"35"}
                        </td>
                        <td data-col-size={"sm"}>
                          {"86"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <p dir={"auto"}>
                <strong>
                  {"ROI Formula"}
                </strong>
                {": (2x Avg Salary - Fees) / Fees."}
                <strong>
                  {"Scholarships"}
                </strong>
                {": Full waivers for PwD; up to 8% interest subsidies via Vidya Lakshmi portal."}
              </p>
              <h2 dir={"auto"}>
                {"MBA Entrance Exams India 2026"}
              </h2>
              <p dir={"auto"}>
                {"MBA entrance exams India 2026 feature CAT 2026 as the frontrunner, tackling questions like “Which MBA exam is easiest for IIMs?” While CAT is the most rigorous, it's universally accepted."}
              </p>
              <div>
                <div>
                  <div></div>
                </div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"xs"}>
                          {"Exam"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"Key Colleges"}
                        </th>
                        <th data-col-size={"md"}>
                          {"Percentile/Score Target"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"CAT 2026"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"IIMs, FMS"}
                        </td>
                        <td data-col-size={"md"}>
                          {"95-99"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"XAT 2027"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"XLRI, SPJIMR"}
                        </td>
                        <td data-col-size={"md"}>
                          {"90-95"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"GMAT"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"ISB, Private"}
                        </td>
                        <td data-col-size={"md"}>
                          {"650+"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"NMAT"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"NMIMS"}
                        </td>
                        <td data-col-size={"md"}>
                          {"200+"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"xs"}>
                          {"CMAT"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"JBIMS, SIIB"}
                        </td>
                        <td data-col-size={"md"}>
                          {"90+"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <p dir={"auto"}>
                {"CAT 2026 preparation blueprint for mastering cutoffs."}
              </p>
              <h2 dir={"auto"}>
                {"MBA Specializations in India 2026"}
              </h2>
              <p dir={"auto"}>
                {"Tailor choices to MBA specializations India for targeted careers in best MBA colleges for finance in India or MBA colleges for HR in India."}
              </p>
              <div>
                <div>
                  <div></div>
                </div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"md"}>
                          {"Specialization"}
                        </th>
                        <th data-col-size={"lg"}>
                          {"Top College"}
                        </th>
                        <th data-col-size={"xl"}>
                          {"Key Recruiters"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"md"}>
                          {"Finance"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"IIM Calcutta"}
                        </td>
                        <td data-col-size={"xl"}>
                          {"Goldman, JP Morgan"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"md"}>
                          {"HR"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"XLRI"}
                        </td>
                        <td data-col-size={"xl"}>
                          {"Tata, HUL"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"md"}>
                          {"Analytics"}
                        </td>
                        <td data-col-size={"lg"}>
                          {"IIM Bangalore"}
                        </td>
                        <td data-col-size={"xl"}>
                          {"Accenture, Bain"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <p dir={"auto"}>
                {"Explore IIM Calcutta's finance program for in-depth insights."}
              </p>
              <h2 dir={"auto"}>
                {"How to Choose the Right MBA College in India"}
              </h2>
              <p dir={"auto"}>
                {"Picking the ideal college syncs with your ambitions in choosing MBA colleges. Leverage this checklist for precision."}
              </p>
              <ul dir={"auto"}>
                <li>
                  <strong>
                    {"ROI"}
                  </strong>
                  {": Compute via MBA ROI calculator tools."}
                </li>
                <li>
                  <strong>
                    {"Alumni Network"}
                  </strong>
                  {": IIMs provide worldwide connectivity."}
                </li>
                <li>
                  <strong>
                    {"Location & Exam Score"}
                  </strong>
                  {": Delhi for economical government options; target CAT 95+."}
                </li>
                <li>
                  <strong>
                    {"Fit"}
                  </strong>
                  {": Align specializations with long-term career visions."}
                </li>
              </ul>
              <p dir={"auto"}>
                {"Compare colleges side-by-side for clarity."}
              </p>
              <h2 dir={"auto"}>
                {"MBA Admission Process India 2026-27"}
              </h2>
              <p dir={"auto"}>
                {"Navigate MBA admission process India 2026-27 seamlessly; the IIM CAT cutoff 2026 hovers at 95+."}
              </p>
              <ol dir={"auto"}>
                <li>
                  {"Take the entrance exam (CAT November 29, 2026)."}
                </li>
                <li>
                  {"Secure shortlist by percentile; submit college applications (December 2026-January 2027)."}
                </li>
                <li>
                  {"Engage in GD/PI rounds (February-March 2027)."}
                </li>
                <li>
                  {"Finalize admission (April-May 2027)."}
                </li>
              </ol>
              <div>
                <div dir={"auto"}>
                  <div></div>
                  <table dir={"auto"}>
                    <thead>
                      <tr>
                        <th data-col-size={"sm"}>
                          {"Step"}
                        </th>
                        <th data-col-size={"md"}>
                          {"Timeline"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-col-size={"sm"}>
                          {"Exam"}
                        </td>
                        <td data-col-size={"md"}>
                          {"Nov 2026"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"sm"}>
                          {"Shortlist"}
                        </td>
                        <td data-col-size={"md"}>
                          {"Dec 2026"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"sm"}>
                          {"PI"}
                        </td>
                        <td data-col-size={"md"}>
                          {"Feb 2027"}
                        </td>
                      </tr>
                      <tr>
                        <td data-col-size={"sm"}>
                          {"Admission"}
                        </td>
                        <td data-col-size={"md"}>
                          {"Apr 2027"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <h2 dir={"auto"}>
                {"Conclusion"}
              </h2>
              <p dir={"auto"}>
                {"Curate your shortlist from India's top MBA colleges today. Harness MBA ROI calculators or schedule counseling sessions to strategize your 2027 pathway!"}
              </p>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax  col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"management"} data-attr={"stream"} className={"filter__selected"}>
                  {"Management"}
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
                {"Showing 5488 Colleges"}
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
                    <div className={"college__card__new "} key={"IIMA01"} id={"search-IIMA01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Indian Institute of Management (IIM), Ahmedabad"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/IIMA01")} title={"Indian Institute of Management (IIM), Ahmedabad"}>
                                {"Indian Institute of Management (IIM), Ahmedabad"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Ahmedabad, Gujarat"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Indian Institute of Management (IIM), Ahmedabad Reviews"} href={allowedLink("/reviews")}>
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
                          {"Indian Institute of Management (IIM), Ahmedabad is a top accredited Government institute located in Ahmedabad, Gujarat. Code: IIMA01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Indian Institute of Management (IIM), Ahmedabad Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Indian Institute of Management (IIM), Ahmedabad"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Indian Institute of Management (IIM), Ahmedabad"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"IIMB01"} id={"search-IIMB01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Indian Institute of Management (IIM), Bangalore"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/IIMB01")} title={"Indian Institute of Management (IIM), Bangalore"}>
                                {"Indian Institute of Management (IIM), Bangalore"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Bengaluru, Karnataka"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Indian Institute of Management (IIM), Bangalore Reviews"} href={allowedLink("/reviews")}>
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
                          {"Indian Institute of Management (IIM), Bangalore is a top accredited Government institute located in Bengaluru, Karnataka. Code: IIMB01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Indian Institute of Management (IIM), Bangalore Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Indian Institute of Management (IIM), Bangalore"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Indian Institute of Management (IIM), Bangalore"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"IIMC01"} id={"search-IIMC01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Indian Institute of Management (IIM), Calcutta"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/IIMC01")} title={"Indian Institute of Management (IIM), Calcutta"}>
                                {"Indian Institute of Management (IIM), Calcutta"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Kolkata, West Bengal"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Government"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Indian Institute of Management (IIM), Calcutta Reviews"} href={allowedLink("/reviews")}>
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
                          {"Indian Institute of Management (IIM), Calcutta is a top accredited Government institute located in Kolkata, West Bengal. Code: IIMC01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Indian Institute of Management (IIM), Calcutta Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Indian Institute of Management (IIM), Calcutta"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Indian Institute of Management (IIM), Calcutta"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"XLRI01"} id={"search-XLRI01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"XLRI – Xavier School of Management, Jamshedpur"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/XLRI01")} title={"XLRI – Xavier School of Management, Jamshedpur"}>
                                {"XLRI – Xavier School of Management, Jamshedpur"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Jamshedpur, Jharkhand"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"XLRI – Xavier School of Management, Jamshedpur Reviews"} href={allowedLink("/reviews")}>
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
                          {"XLRI – Xavier School of Management, Jamshedpur is a top accredited Private institute located in Jamshedpur, Jharkhand. Code: XLRI01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"XLRI – Xavier School of Management, Jamshedpur Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"XLRI – Xavier School of Management, Jamshedpur"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"XLRI – Xavier School of Management, Jamshedpur"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"college__card__new "} key={"MDI01"} id={"search-MDI01"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"Management Development Institute (MDI), Gurugram"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/MDI01")} title={"Management Development Institute (MDI), Gurugram"}>
                                {"Management Development Institute (MDI), Gurugram"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"Gurugram, Haryana"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"Management Development Institute (MDI), Gurugram Reviews"} href={allowedLink("/reviews")}>
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
                          {"Management Development Institute (MDI), Gurugram is a top accredited Private institute located in Gurugram, Haryana. Code: MDI01."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"Management Development Institute (MDI), Gurugram Courses"}>
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"Management Development Institute (MDI), Gurugram"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"Management Development Institute (MDI), Gurugram"}>{"View College"}</div>
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
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"management"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
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

export default function ManagementPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <ManagementContent />
    </PageRenderer>
  );
}
