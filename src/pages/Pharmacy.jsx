import { useState, useMemo } from 'react';
import CollegeImage from '../components/CollegeImage.jsx';
import CollegeLogo from '../components/CollegeLogo.jsx';
import Pagination from '../components/Pagination.jsx';
import { pharmacyCollegesData } from '../data/pharmacyCollegesData.js';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Pharmacy",
  sourceFile: "Pharmacy.html",
  slug: "pharmacy",
  title: "Top Pharmacy Colleges in India 2025: Ranking, Courses, Fees & Placements",
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
        "content": "Find TopPharmacy Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Top Pharmacy Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "og:url",
        "content": "/pharmacy-colleges"
      },
      {
        "property": "og:site_name",
        "content": "Admission Portal"
      },
      {
        "property": "og:description",
        "content": "Top Pharmacy Colleges in India 2025: Check NIRF ranking, placement, fees, admission, cutoff, eligibility, top recruitments, scholarships and latest news of Pharmacy colleges."
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
        "content": "/pharmacy-colleges"
      },
      {
        "property": "twitter:title",
        "content": "Top Pharmacy Colleges in India 2025: Ranking, Courses, Fees & Placements"
      },
      {
        "property": "twitter:description",
        "content": "Find TopPharmacy Colleges in India based on  ranking with details on courses, fees, placements, admission, reviews, cut off, and latest news."
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
        "href": "/pharmacy-colleges",
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

const premierPharmacyColleges = [
  {
    id: "HAMDARD-PHARM",
    code: "HAMDARD-PHARM",
    name: "Jamia Hamdard (School of Pharmaceutical Education & Research), New Delhi",
    shortName: "Jamia Hamdard Pharmacy",
    location: "New Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    affiliation: "Deemed University",
    rating: "4.9",
    courses: "8 Courses",
    coursesCount: 8,
    examAccepted: "NEET / GPAT",
    tuitionFees: "₹1,45,000 - ₹2,50,000 / Year",
    gender: "Co-ed",
    description: "Consistently ranked #1 in India for Pharmacy by NIRF. Jamia Hamdard is globally acclaimed for pharmaceutical research, formulation sciences, and Pharm.D clinical training. Code: HAMDARD-PHARM."
  },
  {
    id: "NIPER-M",
    code: "NIPER-M",
    name: "National Institute of Pharmaceutical Education and Research (NIPER), Mohali",
    shortName: "NIPER Mohali",
    location: "Mohali, Punjab",
    city: "Mohali",
    state: "Punjab",
    stateCode: "PB",
    affiliation: "Government",
    rating: "4.9",
    courses: "14 Courses",
    coursesCount: 14,
    examAccepted: "NIPER JEE / GPAT",
    tuitionFees: "₹65,000 - ₹1,20,000 / Year",
    gender: "Co-ed",
    description: "India's first National Institute in pharmaceutical sciences and an Institute of National Importance offering advanced M.Pharm, MS (Pharm), and Ph.D programs. Code: NIPER-M."
  },
  {
    id: "ICT-MUM",
    code: "ICT-MUM",
    name: "Institute of Chemical Technology (Dept of Pharmaceutical Sciences), Mumbai",
    shortName: "ICT Mumbai Pharmacy",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    stateCode: "MH",
    affiliation: "Government",
    rating: "4.8",
    courses: "6 Courses",
    coursesCount: 6,
    examAccepted: "MHT CET / GPAT",
    tuitionFees: "₹85,000 - ₹1,45,000 / Year",
    gender: "Co-ed",
    description: "Premier center of excellence in drug discovery, pharmaceutical chemistry, and chemical biotechnology with top tier pharmaceutical industry placements. Code: ICT-MUM."
  },
  {
    id: "BITS-PILANI-PHARM",
    code: "BITS-PILANI-PHARM",
    name: "BITS Pilani (Department of Pharmacy), Pilani",
    shortName: "BITS Pilani Pharmacy",
    location: "Pilani, Rajasthan",
    city: "Pilani",
    state: "Rajasthan",
    stateCode: "RJ",
    affiliation: "Private",
    rating: "4.8",
    courses: "6 Courses",
    coursesCount: 6,
    examAccepted: "BITSAT / BITS HD",
    tuitionFees: "₹4,25,000 - ₹5,10,000 / Year",
    gender: "Co-ed",
    description: "Ranked among India's top pharmacy institutions, BITS Pilani offers industry-aligned B.Pharm and M.Pharm with world-class faculty and global alumni network. Code: BITS-PILANI-PHARM."
  },
  {
    id: "MCOPS-M",
    code: "MCOPS-M",
    name: "Manipal College of Pharmaceutical Sciences (MCOPS), Manipal",
    shortName: "Manipal MCOPS",
    location: "Manipal, Karnataka",
    city: "Manipal",
    state: "Karnataka",
    stateCode: "KA",
    affiliation: "Private",
    rating: "4.8",
    courses: "12 Courses",
    coursesCount: 12,
    examAccepted: "MET / GPAT",
    tuitionFees: "₹2,80,000 - ₹4,10,000 / Year",
    gender: "Co-ed",
    description: "One of India's oldest and most prestigious private pharmacy institutions with cutting-edge laboratories, PCI accreditation, and multi-national pharmaceutical tie-ups. Code: MCOPS-M."
  },
  {
    id: "JSS-OOTY",
    code: "JSS-OOTY",
    name: "JSS College of Pharmacy, Ooty",
    shortName: "JSS Pharmacy Ooty",
    location: "Ooty, Tamil Nadu",
    city: "Ooty",
    state: "Tamil Nadu",
    stateCode: "TN",
    affiliation: "Private",
    rating: "4.7",
    courses: "10 Courses",
    coursesCount: 10,
    examAccepted: "JSS Entrance / GPAT",
    tuitionFees: "₹1,50,000 - ₹2,90,000 / Year",
    gender: "Co-ed",
    description: "Top-ranked pharmacy college in South India offering B.Pharm, M.Pharm, and Pharm.D with advanced research in herbal drug technology and clinical pharmacy. Code: JSS-OOTY."
  },
  {
    id: "PU-UIPS",
    code: "PU-UIPS",
    name: "Panjab University (University Institute of Pharmaceutical Sciences), Chandigarh",
    shortName: "Panjab University UIPS",
    location: "Chandigarh, Punjab",
    city: "Chandigarh",
    state: "Punjab",
    stateCode: "PB",
    affiliation: "Government",
    rating: "4.7",
    courses: "8 Courses",
    coursesCount: 8,
    examAccepted: "PU-CET / GPAT",
    tuitionFees: "₹18,000 - ₹45,000 / Year",
    gender: "Co-ed",
    description: "UIPS Panjab University is renowned for pioneering research in pharmaceutical sciences, drug delivery, and natural product chemistry with high NIRF rankings. Code: PU-UIPS."
  },
  {
    id: "AU-PHARM",
    code: "AU-PHARM",
    name: "Annamalai University (Faculty of Pharmacy), Chidambaram",
    shortName: "Annamalai Pharmacy",
    location: "Chidambaram, Tamil Nadu",
    city: "Chidambaram",
    state: "Tamil Nadu",
    stateCode: "TN",
    affiliation: "Government",
    rating: "4.6",
    courses: "9 Courses",
    coursesCount: 9,
    examAccepted: "TNEA / GPAT",
    tuitionFees: "₹35,000 - ₹80,000 / Year",
    gender: "Co-ed",
    description: "State government university offering comprehensive education in industrial pharmacy, pharmacology, and pharmaceutical analysis with extensive clinical hospital attachments. Code: AU-PHARM."
  },
  {
    id: "BCP-MUM",
    code: "BCP-MUM",
    name: "Bombay College of Pharmacy (BCP), Mumbai",
    shortName: "Bombay College of Pharmacy",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    stateCode: "MH",
    affiliation: "Government Aided",
    rating: "4.6",
    courses: "7 Courses",
    coursesCount: 7,
    examAccepted: "MHT CET / GPAT",
    tuitionFees: "₹45,000 - ₹1,10,000 / Year",
    gender: "Co-ed",
    description: "Established in 1957, BCP Mumbai is an apex institute for pharmaceutical education with high placement rates in top pharmaceutical MNCs across India and abroad. Code: BCP-MUM."
  },
  {
    id: "DPSRU-DEL",
    code: "DPSRU-DEL",
    name: "Delhi Pharmaceutical Sciences and Research University (DPSRU), New Delhi",
    shortName: "DPSRU New Delhi",
    location: "New Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    affiliation: "Government",
    rating: "4.6",
    courses: "11 Courses",
    coursesCount: 11,
    examAccepted: "DPSRU Entrance / GPAT",
    tuitionFees: "₹40,000 - ₹95,000 / Year",
    gender: "Co-ed",
    description: "First pharmacy university in India and third in the world, dedicated exclusively to pharmaceutical education, clinical research, and hospital pharmacy. Code: DPSRU-DEL."
  }
];

const PAGE_SIZE = 20;

function PharmacyContent() {
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // States with counts
  const statesList = useMemo(() => {
    const counts = {};
    pharmacyCollegesData.forEach(c => {
      const s = c.stateName || c.state || 'Other';
      counts[s] = (counts[s] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  // Cities with counts (dynamically filtered by state)
  const citiesList = useMemo(() => {
    const counts = {};
    pharmacyCollegesData.forEach(c => {
      if (selectedState !== "all" && c.stateName !== selectedState && c.state !== selectedState) {
        return;
      }
      const city = c.district || c.city;
      if (city && city.trim()) {
        const cleanCity = city.replace(/\s*\(location\)$/i, '').trim();
        if (cleanCity) {
          counts[cleanCity] = (counts[cleanCity] || 0) + 1;
        }
      }
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [selectedState]);

  // Filtered colleges
  const filteredColleges = useMemo(() => {
    return pharmacyCollegesData.filter(college => {
      // State filter
      if (selectedState !== "all") {
        if (college.stateName !== selectedState && college.state !== selectedState) {
          return false;
        }
      }
      // City filter
      if (selectedCity !== "all") {
        const cCity = (college.district || college.city || '').replace(/\s*\(location\)$/i, '').trim().toLowerCase();
        if (!cCity.includes(selectedCity.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = college.name?.toLowerCase().includes(q);
        const matchCity = (college.district || college.city || '').toLowerCase().includes(q);
        const matchState = (college.stateName || college.state || '').toLowerCase().includes(q);
        const matchDetails = (college.details || '').toLowerCase().includes(q);
        if (!matchName && !matchCity && !matchState && !matchDetails) {
          return false;
        }
      }
      return true;
    });
  }, [selectedState, selectedCity, searchQuery]);

  const displayedColleges = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredColleges.slice(start, start + PAGE_SIZE);
  }, [filteredColleges, currentPage]);

  const handleApplyClick = (collegeName) => {
    window.dispatchEvent(new CustomEvent('open-apply-modal', {
      detail: { collegeName }
    }));
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("all");
    setCurrentPage(1);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedState("all");
    setSelectedCity("all");
    setSearchQuery("");
    setCurrentPage(1);
  };

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
              {"Top Pharmacy Colleges in India"}
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
                {"Top Pharmacy Colleges in India 2026"}
              </h1>
              <p>
                <span>
                  {"Top Pharmacy Colleges in India include colleges like Jamia Hamdard University (New Delhi), Panjab University, National Institute of Pharmaceutical Education and Research (Mohali), Institute of Chemical Technology (Mumbai) etc. Pharmacy is the study of medicines and drugs and their effects on living beings. This field also includes research into the discovery, production, usage, and safe disposal of various chemicals or drugs used to treat various ailments. Students can pursue courses like"}
                  <a href={allowedLink("/dpharma-course")}>
                    {"D Pharm"}
                  </a>
                  {","}
                  <a href={allowedLink("/bpharm-course")}>
                    {"B Pharm"}
                  </a>
                  {","}
                  <a href={allowedLink("/mpharm-course")}>
                    {"M Pharm"}
                  </a>
                  {", and"}
                  <a href={allowedLink("/pharmd-course")}>
                    {"Pharm.D"}
                  </a>
                  {"."}
                </span>
              </p>
              <p>
                <span>
                  {"Various specialisations offered by best pharmacy colleges in India are Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analytics etc. Students can secure admission to top pharmacy colleges in India through entrance exams like GPAT, MHT CET, CUET etc. Job opportunities after pursuing a pharmacy degree are as Medical Transcriptionist, Professor/Teacher, Drug Inspector, Drug Therapist, Clinical Pharmacist etc."}
                </span>
              </p>
              <h2>
                <strong>
                  {"Top Pharmacy Colleges in India: Highlights"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Tabulated below are the key highlights regarding pharmacy colleges in India"}
                </span>
              </p>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>
                          {"College Type"}
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"Government Colleges - 450"}
                        </span>
                        <span>
                          {"& Private Colleges - 950"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>
                          {"Colleges Affiliated To"}
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"NAAC, UGC, AICTE, PCI"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>
                          {"Entrance Exams Accepted"}
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"GPAT, CUCET, MHT CET, NIPER JEE"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>
                          {"Specialisations"}
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analytics"}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>
                          {"Approximate Fees"}
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          {"Annual fee ranges between (INR) 40,000 to 2,00,000."}
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Pharmacy Colleges in India as per NIRF Ranking 2024"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Top colleges in India for Pharmacy are ranked to help students choose the best pharmacy college in India for themselves. Various parameters are used to list the top pharmacy colleges in India which are relevant to the students."}
                </span>
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"611"} />
                  <col width={"193"} />
                  <col width={"218"} />
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
                      {"Jamia Hamdard"}
                    </td>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      {"84.01"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Institute of Pharmaceutical Education and Research Hyderabad"}
                    </td>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"80.29"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Birla Institute of Technology and Science, Pilani"}
                    </td>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"78.95"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"JSS College of Pharmacy"}
                    </td>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"77.13"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Institute of Chemical Technology"}
                    </td>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      {"74.69"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"JSS College of Pharmacy"}
                    </td>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      {"72.89"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Panjab University"}
                    </td>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      {"72.76"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Manipal College of Pharmaceutical Sciences, Manipal"}
                    </td>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      {"72.27"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Institute of Pharmaceutical Education and Research Mohali"}
                    </td>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      {"70.86"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"SVKM`s Narsee Monjee Institute of Management Studies"}
                    </td>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      {"69.94"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Private Pharmacy Colleges in India"}
                </strong>
              </h2>
              <p>
                {"The list Provides details about the Top private pharmacy colleges in India given below."}
              </p>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"611"} />
                  <col width={"193"} />
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
                      {"JSS College of Pharmacy Ooty"}
                    </td>
                    <td>
                      {"INR 8.40 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"JSS College of Pharmacy Mysore"}
                    </td>
                    <td>
                      {"INR 8 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Manipal College of Pharmaceutical Sciences"}
                    </td>
                    <td>
                      {"INR 6.50 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Amrita School of Pharmacy"}
                    </td>
                    <td>
                      {"INR 5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"LPU"}
                    </td>
                    <td>
                      {"INR 5 LPA"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Govt. Pharmacy Colleges in India"}
                </strong>
              </h2>
              <table dir={"ltr"} border={"1"} cellSpacing={"0"} cellPadding={"0"}>
                <colgroup>
                  <col width={"611"} />
                  <col width={"193"} />
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
                      {"Jamia Hamdard"}
                    </td>
                    <td>
                      {"INR 4.95 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Institute of Chemical Technology Mumbai"}
                    </td>
                    <td>
                      {"INR 5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Panjab University (PU)"}
                    </td>
                    <td>
                      {"INR 6 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Institute of Pharmaceutical and Research Mohali"}
                    </td>
                    <td>
                      {"INR 6.35 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"National Institute of Pharmaceutical Education and Research Guwahati"}
                    </td>
                    <td>
                      {"INR 4.36 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"SVKM’S Dr. Bhanuben Nanavati College of Pharmacy"}
                    </td>
                    <td>
                      {"INR 4.50 LPA"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Pharmacy Colleges in India Ranking by Outlook"}
                </strong>
              </h2>
              <p>
                <span>
                  {"Tabulated below are the top pharmacy colleges in India rank wise by outlook"}
                </span>
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
                    <td>
                      <strong>
                        {"B.Pharm Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                    <td>
                      {"3,20,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                        {"Panjab University"}
                      </a>
                    </td>
                    <td>
                      {"1,17,600"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"ICT Mumbai"}
                      </a>
                    </td>
                    <td>
                      {"1,70,500"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                        {"BITS Pilani"}
                      </a>
                    </td>
                    <td>
                      {"10,25,550"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jagadguru-sri-shivarathreeswara-university-jssu-mysore")} target={"_blank"} rel={"noopener"}>
                        {"JSS Academy of Higher Education and Research"}
                      </a>
                    </td>
                    <td>
                      {"6,12,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-ranchi-bit-mesra")} target={"_blank"} rel={"noopener"}>
                        {"BIT Mesra"}
                      </a>
                    </td>
                    <td>
                      {"10,92,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/annamalai-university-au-cuddalore")} target={"_blank"} rel={"noopener"}>
                        {"Annamalai University"}
                      </a>
                    </td>
                    <td>
                      {"1,45,520"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/maharaja-sayajirao-university-of-baroda-gujarat")} target={"_blank"} rel={"noopener"}>
                        {"MSU Baroda"}
                      </a>
                    </td>
                    <td>
                      {"8,400"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/banasthali-vidyapith-jaipur")} target={"_blank"} rel={"noopener"}>
                        {"Banasthali Vidyapith"}
                      </a>
                    </td>
                    <td>
                      {"5,56,000"}
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
                      {"7,20,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <span>
                  <strong>
                    {"Top 10 Pharmacy Colleges in India"}
                  </strong>
                </span>
              </h3>
              <p>
                <span>
                  {"Tabulated below are top colleges in India for pharmacy"}
                </span>
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
                    <td>
                      <strong>
                        {"B.Pharm Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                    <td>
                      {"3,20,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                        {"Panjab University"}
                      </a>
                    </td>
                    <td>
                      {"1,17,600"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"ICT Mumbai"}
                      </a>
                    </td>
                    <td>
                      {"1,70,500"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                        {"BITS Pilani"}
                      </a>
                    </td>
                    <td>
                      {"10,25,550"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jagadguru-sri-shivarathreeswara-university-jssu-mysore")} target={"_blank"} rel={"noopener"}>
                        {"JSS Academy of Higher Education and Research"}
                      </a>
                    </td>
                    <td>
                      {"6,12,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/manipal-college-of-pharmaceutical-sciences-mcops-manipal")} target={"_blank"} rel={"noopener"}>
                        {"Manipal College of Pharmaceutical Sciences"}
                      </a>
                    </td>
                    <td>
                      {"13,72,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jss-college-of-pharmacy-jsscp-the-nilgiris")} target={"_blank"} rel={"noopener"}>
                        {"JSS College of Pharmacy"}
                      </a>
                    </td>
                    <td>
                      {"6,12,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/shobhaben-partapbhai-patel-school-of-pharmacy-technology-management-sppsptm-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"SPPSPTM"}
                      </a>
                    </td>
                    <td>
                      {"16,08,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-ranchi-bit-mesra")} target={"_blank"} rel={"noopener"}>
                        {"BIT Mesra"}
                      </a>
                    </td>
                    <td>
                      {"10,92,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/annamalai-university-au-cuddalore")} target={"_blank"} rel={"noopener"}>
                        {"Annamalai University"}
                      </a>
                    </td>
                    <td>
                      {"1,45,520"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Top 10 Pharmacy Universities in India"}
                </strong>
              </h3>
              <p>
                {"Tabulated below are the top 10 pharmacy universities in India"}
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
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/maharaja-sayajirao-university-of-baroda-gujarat")} target={"_blank"} rel={"noopener"}>
                        {"MSU Baroda"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jadavpur-university-calcutta")} target={"_blank"} rel={"noopener"}>
                        {"Jadavpur University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/lovely-professional-university-lpu-jalandhar")} target={"_blank"} rel={"noopener"}>
                        {"LPU"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"ICT Mumbai"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/savitribai-phule-pune-university-sppu-pune")} target={"_blank"} rel={"noopener"}>
                        {"UniPune"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/chandigarh-university-mohali")} target={"_blank"} rel={"noopener"}>
                        {"Chandigarh University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/nirma-university-nu-ahmedabad")} target={"_blank"} rel={"noopener"}>
                        {"Nirma University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/techno-india-university-tiu")} target={"_blank"} rel={"noopener"}>
                        {"Techno India University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/integral-university-iu-lucknow")} target={"_blank"} rel={"noopener"}>
                        {"Integral University"}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Fee Structure of Top Pharmacy Colleges in India"}
                </strong>
              </h2>
              <p>
                {"The fees for any course in colleges for pharmacy in India averages between INR 15,000 to INR 2 lakh per annum. The top pharmacy colleges in India include both private pharmacy colleges and government pharmacy colleges."}
              </p>
              <h3>
                <strong>
                  {"Government Pharmacy Colleges in India with Fees"}
                </strong>
              </h3>
              <p>
                {"Government pharmacy colleges admit students through entrance exams. Tabulated below are top pharmacy government college fees"}
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
                        {"B.Pharm Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                        {"Panjab University"}
                      </a>
                    </td>
                    <td>
                      {"1,17,600"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/annamalai-university-au-cuddalore")} target={"_blank"} rel={"noopener"}>
                        {"Annamalai University"}
                      </a>
                    </td>
                    <td>
                      {"1,45,520"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/maharaja-sayajirao-university-of-baroda-gujarat")} target={"_blank"} rel={"noopener"}>
                        {"MSU Baroda"}
                      </a>
                    </td>
                    <td>
                      {"8,400"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/bombay-college-of-pharmacy-bcp-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"Bombay College of Pharmacy"}
                      </a>
                    </td>
                    <td>
                      {"1,66,532"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/delhi-institute-of-pharmaceutical-sciences-and-research-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Delhi Pharmaceutical Sciences and Research University"}
                      </a>
                    </td>
                    <td>
                      {"1,51,540"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/dibrugarh-university-dibrugarh")} target={"_blank"} rel={"noopener"}>
                        {"Dibrugarh University"}
                      </a>
                    </td>
                    <td>
                      {"19,280"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/rashtrasant-tukadoji-maharaj-nagpur-university-rtmnu-nagpur")} target={"_blank"} rel={"noopener"}>
                        {"Rashtrasant Tukadoji Maharaj Nagpur University"}
                      </a>
                    </td>
                    <td>
                      {"65,340"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/maharshi-dayanand-university-mdu-rohtak")} target={"_blank"} rel={"noopener"}>
                        {"MDU"}
                      </a>
                    </td>
                    <td>
                      {"1,02,400"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/andhra-university-college-of-pharmaceutical-sciences-ancpc-visakhapatnam")} target={"_blank"} rel={"noopener"}>
                        {"ANCPC Visakhapatnam"}
                      </a>
                    </td>
                    <td>
                      {"3,29,988"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/guru-ghasidas-vishwavidyalaya-ggu-bilaspur")} target={"_blank"} rel={"noopener"}>
                        {"GGU"}
                      </a>
                    </td>
                    <td>
                      {"1,22,920"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Private Top Pharmacy Colleges in India with Fees"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Tabulated below are the fees for best private pharmacy colleges in India"}
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
                        {"B.Pharm Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                    <td>
                      {"3,20,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"ICT Mumbai"}
                      </a>
                    </td>
                    <td>
                      {"1,70,500"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                        {"BITS Pilani"}
                      </a>
                    </td>
                    <td>
                      {"10,25,550"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/manipal-college-of-pharmaceutical-sciences-mcops-manipal")} target={"_blank"} rel={"noopener"}>
                        {"Manipal College of Pharmaceutical Sciences"}
                      </a>
                    </td>
                    <td>
                      {"13,72,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jss-college-of-pharmacy-jsscp-the-nilgiris")} target={"_blank"} rel={"noopener"}>
                        {"JSS College of Pharmacy"}
                      </a>
                    </td>
                    <td>
                      {"6,12,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jagadguru-sri-shivarathreeswara-university-jssu-mysore")} target={"_blank"} rel={"noopener"}>
                        {"JSS Academy of Higher Education and Research"}
                      </a>
                    </td>
                    <td>
                      {"6,12,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/shobhaben-partapbhai-patel-school-of-pharmacy-technology-management-sppsptm-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"SPPSPTM"}
                      </a>
                    </td>
                    <td>
                      {"16,08,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-ranchi-bit-mesra")} target={"_blank"} rel={"noopener"}>
                        {"BIT Mesra"}
                      </a>
                    </td>
                    <td>
                      {"10,92,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/srm-college-of-pharmacy-srmcp-kanchipuram")} target={"_blank"} rel={"noopener"}>
                        {"SRM College of Pharmacy"}
                      </a>
                    </td>
                    <td>
                      {"7,00,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/bharati-vidyapeeth-university-poona-college-of-pharmacy-bvp-upcp-pune")} target={"_blank"} rel={"noopener"}>
                        {"Poona College of Pharmacy"}
                      </a>
                    </td>
                    <td>
                      {"4,08,000"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <span>
                  <strong>
                    {"Top Pharmacy Colleges in India with Low Fees"}
                  </strong>
                </span>
              </h3>
              <p>
                <span>
                  {"There are some pharmacy colleges which along with providing quality education, also charge less fees. Students can get admisson to best pharmacy college in India with low fees. Tabulated below are the best affordable pharmacy colleges in India"}
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
                        {"B.Pharm Total Tuition Fees (INR)"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/st-marys-group-of-institutions-hyderabad")} target={"_blank"} rel={"noopener"}>
                        {"St. Mary's Group of Institutions"}
                      </a>
                    </td>
                    <td>
                      {"4,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/sa-raja-pharmacy-college-kanyakumari")} target={"_blank"} rel={"noopener"}>
                        {"S. A. Raja Pharmacy College"}
                      </a>
                    </td>
                    <td>
                      {"4,800"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/assam-science-and-technology-university-astu-guwahati")} target={"_blank"} rel={"noopener"}>
                        {"ASTU"}
                      </a>
                    </td>
                    <td>
                      {"6,000"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/maharaja-chhatrasal-bundelkhand-university-chhatarpur")} target={"_blank"} rel={"noopener"}>
                        {"Maharaja Chhatrasal Bundelkhand University Chhatarpur"}
                      </a>
                    </td>
                    <td>
                      {"7,800"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/maharaja-sayajirao-university-of-baroda-gujarat")} target={"_blank"} rel={"noopener"}>
                        {"MSU Baroda"}
                      </a>
                    </td>
                    <td>
                      {"8,400"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <span>
                  <strong>
                    {"AICTE Approved Pharmacy Colleges in India"}
                  </strong>
                </span>
              </h3>
              <p>
                <span>
                  {"All postgraduate and graduate programs in India under specific categories of technology are accredited by AICTE. Tabulated below are AICTE approved pharmacy colleges in India."}
                </span>
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
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                        {"Panjab University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/manipal-college-of-pharmaceutical-sciences-mcops-manipal")} target={"_blank"} rel={"noopener"}>
                        {"Manipal College of Pharmaceutical Sciences"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-ranchi-bit-mesra")} target={"_blank"} rel={"noopener"}>
                        {"BIT Mesra"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/annamalai-university-au-cuddalore")} target={"_blank"} rel={"noopener"}>
                        {"Annamalai University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/bharati-vidyapeeth-university-poona-college-of-pharmacy-bvp-upcp-pune")} target={"_blank"} rel={"noopener"}>
                        {"Poona College of Pharmacy"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-pharmacy-ahmedabad")} target={"_blank"} rel={"noopener"}>
                        {"Institute of Pharmacy, Nirma University Ahmedabad"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/amity-university-noida")} target={"_blank"} rel={"noopener"}>
                        {"Amity University Noida"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/isf-college-of-pharmacy-isfc-moga")} target={"_blank"} rel={"noopener"}>
                        {"ISF College of Pharmacy"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/bombay-college-of-pharmacy-bcp-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"Bombay College of Pharmacy"}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <span>
                  <strong>
                    {"Top Pharmacy Colleges in India Admission"}
                  </strong>
                </span>
              </h2>
              <p>
                {"The admission to approved pharmacy colleges in India can be done either by a candidate’s performance in particular entrance tests or by a merit list generated based on the candidate’s marks in their Class 12 examinations. Most of the top pharmacy colleges in India shortlist candidates on the basis of marks scored in entrance examinations accepted by pharmacy colleges."}
              </p>
              <h3>
                <strong>
                  {"Eligibility Criteria"}
                </strong>
              </h3>
              <p>
                {"The eligibility varies for the different degrees available in pharmacy colleges and are listed below."}
              </p>
              <p>
                <strong>
                  {"B.Pharm"}
                </strong>
              </p>
              <ul>
                <li aria-level={"1"}>
                  {"Candidate is supposed to have cleared their 10+2 or equivalent examination."}
                </li>
                <li aria-level={"1"}>
                  {"Candidates are required to have a minimum of 50% aggregate marks in their 10+2/equivalent science subjects."}
                </li>
                <li aria-level={"1"}>
                  {"The upper age limit for applying for this course at many colleges is 20 years for general category candidates and 22 years for reserved category candidates."}
                </li>
              </ul>
              <p>
                <strong>
                  {"D.Pharm"}
                </strong>
              </p>
              <ul>
                <li aria-level={"1"}>
                  {"The minimum age limit to apply for this course is 17."}
                </li>
                <li aria-level={"1"}>
                  {"Candidates are required to have cleared their 10+2 or equivalent examination."}
                </li>
                <li aria-level={"1"}>
                  {"Candidates need to secure a minimum of 50% marks in their 10+2 or equivalent qualifying examinations for admissions to colleges that offer this course."}
                </li>
              </ul>
              <p>
                <strong>
                  {"M.Pharm"}
                </strong>
              </p>
              <ul>
                <li aria-level={"1"}>
                  {"Candidates must have completed their B.Pharmacy course from a college/university recognized by the PCI (Pharmacy Council of India)."}
                </li>
                <li aria-level={"1"}>
                  {"The minimum marks in the qualifying examination differs based on the college/university. It is usually either a 50% or 60% aggregate score in the qualifying examination."}
                </li>
              </ul>
              <p>
                {"Tabulated below are the top pharmacy colleges in India with admission links"}
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
                    <td>
                      <strong>
                        {"Admission Links"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      {"Jamia Hamdard University, New Delhi"}
                    </td>
                    <td>
                      {"Jamia Hamdard University, New Delhi Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"Panjab University, Chandigarh"}
                    </td>
                    <td>
                      {"Panjab University, Chandigarh Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"Institute of Chemical Technology, Mumbai"}
                    </td>
                    <td>
                      {"Institute of Chemical Technology, Mumbai Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"BITS Pilani, Pilani"}
                    </td>
                    <td>
                      {"BITS Pilani, Pilani Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      {"JSS Academy of Higher Education and Research, Mysore"}
                    </td>
                    <td>
                      {"JSS Academy of Higher Education and Research, Mysore Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"6"}
                    </td>
                    <td>
                      {"Manipal College of Pharmaceutical Sciences, Manipal"}
                    </td>
                    <td>
                      {"Manipal College of Pharmaceutical Sciences, Manipal Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"7"}
                    </td>
                    <td>
                      {"JSS College of Pharmacy, Udagamandalam"}
                    </td>
                    <td>
                      {"JSS College of Pharmacy, Udagamandalam Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"8"}
                    </td>
                    <td>
                      {"SPPSPTM Mumbai"}
                    </td>
                    <td>
                      {"SPPSPTM Mumbai Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      {"BIT Mesra, Ranchi"}
                    </td>
                    <td>
                      {"BIT Mesra, Ranchi Admission Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"10"}
                    </td>
                    <td>
                      {"Annamalai University, Chidambaram"}
                    </td>
                    <td>
                      {"Annamalai University, Chidambaram Admission Link"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Specialisations Available in Top Pharmacy Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"There are various specialisations offered by pharmacy colleges in India. Listed below are the most popular specialisations offered by top colleges in India for pharmacy"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  {"Pharmaceutics"}
                </li>
                <li aria-level={"1"}>
                  {"Pharmacology"}
                </li>
                <li aria-level={"1"}>
                  {"Pharmaceutical Chemistry"}
                </li>
                <li aria-level={"1"}>
                  {"Industrial Pharmacy"}
                </li>
              </ul>
              <h3>
                <strong>
                  {"Top Pharmacy Colleges in India for Pharmaceutics"}
                </strong>
              </h3>
              <p>
                {"Listed below are the best colleges for pharmacy offering Pharmaceutics"}
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                      {"Jamia Hamdard University"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                      {"Panjab University"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-institute-of-pharmaceutical-education-and-research-niper-mohali")} target={"_blank"} rel={"noopener"}>
                      {"National Institute of Pharmaceutical Education and Research S.A.S. Nagar"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                      {"ICT Mumbai"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                      {"BITS Pilani"}
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Read More:"}
                </strong>
                {"Top Pharmacy Colleges in India for Pharmaceutics"}
              </p>
              <h3>
                <strong>
                  {"Top Pharmacy Colleges in India for Pharmacology"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Listed below are top colleges in India for Pharmacy offering Pharmacology"}
                </span>
              </p>
              <ul>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                      {"Jamia Hamdard University"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                      {"Panjab University"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-institute-of-pharmaceutical-education-and-research-niper-mohali")} target={"_blank"} rel={"noopener"}>
                      {"National Institute of Pharmaceutical Education and Research S.A.S. Nagar"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                      {"ICT Mumbai"}
                    </a>
                  </span>
                </li>
                <li aria-level={"1"}>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                      {"BITS Pilani"}
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Read More:"}
                </strong>
                {"Top Pharmacy Colleges in India for Pharmacology"}
              </p>
              <h3>
                <strong>
                  {"Top Pharmacy Colleges in India for Pharmaceutical Chemistry"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Listed below are the top pharmacy colleges in India offering Pharmaceutical Chemistry"}
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                      {"Jamia Hamdard University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                      {"Panjab University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                      {"ICT Mumbai"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                      {"BITS Pilani"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/national-institute-of-pharmaceutical-education-and-research-niper-mohali")} target={"_blank"} rel={"noopener"}>
                      {"National Institute of Pharmaceutical Education and Research S.A.S. Nagar"}
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Read More:"}
                </strong>
                {"Top Pharmacy Colleges in India for Pharmaceutical Chemistry"}
              </p>
              <h3>
                <strong>
                  {"Top Pharmacy Colleges in India for Industrial Pharmacy"}
                </strong>
              </h3>
              <p>
                <span>
                  {"Listed below are the top pharmacy colleges in India offering Industrial Pharmacy"}
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/manipal-college-of-pharmaceutical-sciences-mcops-manipal")} target={"_blank"} rel={"noopener"}>
                      {"Manipal College of Pharmaceutical Sciences"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/jss-college-of-pharmacy-jsscp-the-nilgiris")} target={"_blank"} rel={"noopener"}>
                      {"JSS College of Pharmacy"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/jagadguru-sri-shivarathreeswara-university-jssu-mysore")} target={"_blank"} rel={"noopener"}>
                      {"JSS Academy of Higher Education and Research"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/annamalai-university-au-cuddalore")} target={"_blank"} rel={"noopener"}>
                      {"Annamalai University"}
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                      {"Panjab University"}
                    </a>
                  </span>
                </li>
              </ul>
              <p>
                <strong>
                  {"Read More:"}
                </strong>
                {"Top Pharmacy Colleges in India for Industrial Pharmacy"}
              </p>
              <h2>
                <strong>
                  {"Entrance Exams for Top Pharmacy Colleges in India"}
                </strong>
              </h2>
              <p>
                {"There are multiple exams conducted every year in India for admissions to pharmacy colleges."}
              </p>
              <ul>
                <li aria-level={"1"}>
                  {"GPAT"}
                </li>
                <li aria-level={"1"}>
                  {"NIPER JEE"}
                </li>
                <li aria-level={"1"}>
                  {"CUCET"}
                </li>
                <li aria-level={"1"}>
                  {"MHT CET"}
                </li>
              </ul>
              <h3>
                <span>
                  <strong>
                    {"Top Pharmacy Colleges in India Accepting CUCET Score"}
                  </strong>
                </span>
              </h3>
              <p>
                <span>
                  {"CUCET is conducted by NTA for admission to UG, PG and PhD courses in Central Universities. Tabulated below are the pharmacy colleges in India accepting CUCET score"}
                </span>
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
                      <a className={"in-cell-link"} href={allowedLink("/college/devi-ahilya-bai-university-indore")} target={"_blank"} rel={"noopener"}>
                        {"DAVV Indore"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/kr-mangalam-university-krmu-gurgaon")} target={"_blank"} rel={"noopener"}>
                        {"K.R. Mangalam University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/teerthanker-mahaveer-university-tmu-moradabad")} target={"_blank"} rel={"noopener"}>
                        {"Teerthanker Mahaveer University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/mewar-university-mu-chittorgarh")} target={"_blank"} rel={"noopener"}>
                        {"Mewar University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/indira-gandhi-national-tribal-university-igntu-anuppur")} target={"_blank"} rel={"noopener"}>
                        {"IGNTU - Indira Gandhi National Tribal University"}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <strong>
                  {"Top Pharmacy Colleges in India Accepting GPAT Score"}
                </strong>
              </h3>
              <p>
                <span>
                  {"GPAT is a national level entrance examination for entry into M.Pharm. Tabulated below are the best pharmacy colleges in India accepting GPAT score"}
                </span>
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
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                        {"Panjab University"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"ICT Mumbai"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/bharati-vidyapeeth-university-poona-college-of-pharmacy-bvp-upcp-pune")} target={"_blank"} rel={"noopener"}>
                        {"Poona College of Pharmacy"}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-pharmacy-ahmedabad")} target={"_blank"} rel={"noopener"}>
                        {"Institute of Pharmacy, Nirma University Ahmedabad"}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Top Pharmacy Colleges in India Placements"}
                </strong>
              </h2>
              <p>
                {"It is candidates who have finished their Bachelor,Master or PhD degree from best pharmacy college in India who get placed at any company. Candidates who graduate from Diploma courses are not offered many placements; however, they are sometimes offered roles such as a Pharmacy Assistant or Medical Representative. Tabulated below are best pharmacy colleges and the top recruiters during campus placements"}
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
                        {"Placement Links"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Jamia Hamdard University, New Delhi"}
                    </td>
                    <td>
                      <p>
                        {"Pfizer, Cipla"}
                      </p>
                    </td>
                    <td>
                      {"Jamia Hamdard University, New Delhi Placement Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Panjab University, Chandigarh"}
                    </td>
                    <td>
                      {"GSK Pharmaceuticals, Sun Pharma, AstraZeneca"}
                    </td>
                    <td>
                      {"Panjab University, Chandigarh Placement Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Institute of Chemical Technology, Mumbai"}
                    </td>
                    <td>
                      {"Dr Reddys Laboratories Himalaya Drugs"}
                    </td>
                    <td>
                      {"Institute of Chemical Technology, Mumbai Placement Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"BITS Pilani, Pilani"}
                    </td>
                    <td>
                      <p>
                        {"Cipla, Dr Reddys Laboratories"}
                      </p>
                    </td>
                    <td>
                      {"BITS Pilani, Pilani Placement Link"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"JSS Academy of Higher Education and Research, Mysore"}
                    </td>
                    <td>
                      {"Alkem, Sun Pharma, Abbot"}
                    </td>
                    <td>
                      {"JSS Academy of Higher Education and Research, Mysore Placement Link"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2>
                <strong>
                  {"Average Salary Package in Top Pharmacy Colleges in India"}
                </strong>
              </h2>
              <p>
                <span>
                  {"The average salary for B.Pharm or M.Pharm graduates from pharmacy colleges in India is anywhere between INR 3.5 LPA to 7 LPA. Tabulated below are best colleges in India for pharmacy and the average salary offered by top recruiters during campus placements"}
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
                        {"Average Salary Package"}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jamia-hamdard-university-new-delhi")} target={"_blank"} rel={"noopener"}>
                        {"Jamia Hamdard University"}
                      </a>
                    </td>
                    <td>
                      {"5.78 LPA to 7 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/panjab-university-chandigarh")} target={"_blank"} rel={"noopener"}>
                        {"Panjab University"}
                      </a>
                    </td>
                    <td>
                      {"4.08 LPA to 6.5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/institute-of-chemical-technology-ict-mumbai")} target={"_blank"} rel={"noopener"}>
                        {"ICT Mumbai"}
                      </a>
                    </td>
                    <td>
                      {"5 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/birla-institute-of-technology-and-science-bits-pilani")} target={"_blank"} rel={"noopener"}>
                        {"BITS Pilani"}
                      </a>
                    </td>
                    <td>
                      {"5 LPA to 8 LPA"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a className={"in-cell-link"} href={allowedLink("/college/jagadguru-sri-shivarathreeswara-university-jssu-mysore")} target={"_blank"} rel={"noopener"}>
                        {"JSS Academy of Higher Education and Research"}
                      </a>
                    </td>
                    <td>
                      {"4 LPA to 6 LPA"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          {/* Left Filter Sidebar (Desktop) */}
          <div className={"col-md-3 lg-pr-0"}>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs mb-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <span>⚙️</span> Filter Colleges
                </h3>
                {(selectedState !== 'all' || selectedCity !== 'all' || searchQuery.trim()) && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-xs font-bold text-[#0966c2] hover:underline cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* State Filter */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select State ({statesList.length})
                </label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-3 py-2.5 font-medium focus:ring-2 focus:ring-[#0966c2] focus:outline-hidden"
                >
                  <option value="all">All States ({pharmacyCollegesData.length})</option>
                  {statesList.map(st => (
                    <option key={st.name} value={st.name}>
                      {st.name} ({st.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* City / District Filter */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select District / City ({citiesList.length})
                </label>
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-3 py-2.5 font-medium focus:ring-2 focus:ring-[#0966c2] focus:outline-hidden"
                >
                  <option value="all">All Districts / Cities</option>
                  {citiesList.map(ct => (
                    <option key={ct.name} value={ct.name}>
                      {ct.name} ({ct.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Popular States Quick Tags */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Top States
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {statesList.slice(0, 12).map(st => (
                    <button
                      key={st.name}
                      type="button"
                      onClick={() => {
                        setSelectedState(st.name === selectedState ? 'all' : st.name);
                        setSelectedCity('all');
                        setCurrentPage(1);
                      }}
                      className={`text-xs px-2.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                        selectedState === st.name
                          ? 'bg-[#0966c2] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {st.name} ({st.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Colleges Listing */}
          <div className={"col-md-9 mobile__white__bg"}>
            {/* Active Filters Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4 shadow-xs">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search Pharmacy Colleges by name, city, state..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-9 pr-8 py-2.5 focus:ring-2 focus:ring-[#0966c2] focus:outline-hidden"
                  />
                  <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer text-sm"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Active Filter Badges */}
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="font-bold text-slate-700">
                    Showing <strong className="text-[#0966c2]">{filteredColleges.length}</strong> of {pharmacyCollegesData.length} Colleges
                  </span>
                  {selectedState !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-[#0966c2] font-bold rounded-lg border border-blue-200">
                      State: {selectedState}
                      <button onClick={() => setSelectedState('all')} className="hover:text-red-500 ml-1 cursor-pointer">✕</button>
                    </span>
                  )}
                  {selectedCity !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg border border-indigo-200">
                      City: {selectedCity}
                      <button onClick={() => setSelectedCity('all')} className="hover:text-red-500 ml-1 cursor-pointer">✕</button>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Colleges Grid / List */}
            <div className="space-y-4">
              {displayedColleges.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
                  <div className="text-4xl mb-3">💊</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">No Pharmacy Colleges Found</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    No colleges match your current search and filter criteria.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="px-5 py-2.5 bg-[#0966c2] text-white text-sm font-bold rounded-xl shadow-xs hover:bg-[#07519a] transition-all cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                displayedColleges.map((college) => (
                  <div
                    key={college.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      {/* Left: Logo & Info */}
                      <div className="flex items-start gap-4 flex-1">
                        <CollegeLogo
                          college={college}
                          size={56}
                          className="w-14 h-14 rounded-xl shadow-xs shrink-0 border border-slate-100 mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                            <span className="px-2.5 py-0.5 bg-blue-50 text-[#0966c2] font-bold text-[11px] rounded-full border border-blue-100 uppercase">
                              {college.stream || 'Pharmacy'}
                            </span>
                            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[11px] rounded-full border border-emerald-100">
                              PCI Approved
                            </span>
                          </div>

                          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#0966c2] transition-colors leading-snug">
                            <a href={allowedLink(`/college/${college.id}`)}>
                              {college.name}
                            </a>
                          </h2>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1">
                              📍 <strong className="text-slate-700 font-semibold">{college.district || college.city || 'District'}</strong>, {college.stateName || college.state}
                            </span>
                            <span className="flex items-center gap-1">
                              🎓 <strong className="text-slate-700 font-semibold">{college.courses || 'B.Pharm, D.Pharm, M.Pharm, Pharm.D'}</strong>
                            </span>
                          </div>

                          {college.details && (
                            <div className="mt-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                              <span className="font-bold text-slate-700">Official Details: </span>
                              {college.details}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Action Buttons */}
                      <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <button
                          type="button"
                          onClick={() => handleApplyClick(college.name)}
                          className="flex-1 sm:flex-none w-full px-5 py-2.5 bg-[#0966c2] hover:bg-[#07519a] text-white text-xs font-bold rounded-xl shadow-xs transition-all text-center cursor-pointer"
                        >
                          Apply Now
                        </button>
                        <a
                          href={allowedLink(`/college/${college.id}`)}
                          className="flex-1 sm:flex-none w-full px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all text-center no-underline hover:no-underline"
                          style={{ textDecoration: 'none' }}
                        >
                          View College
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Numbered Pagination (20 colleges per page) */}
            <Pagination
              currentPage={currentPage}
              totalItems={filteredColleges.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div className={"interestedExam"}></div>
        <div className={"filter-faq"}></div>
        <section className={"testing"}></section>
      </div>
      <div className={"desktopOnly getSupport college-filter-get-support"}>
        <div className={"brochureBtn filter-college-scholership leadFilterData predict-my-college-cta"} data-filter={"college-listing"} data-entity={"college"} data-lead_cta={"22"} data-stream={"pharmacy"} data-ctalocation={"colleges_listing_card_predict_my_college"}></div>
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

export default function PharmacyPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <PharmacyContent />
    </PageRenderer>
  );
}
