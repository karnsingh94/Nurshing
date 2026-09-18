import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';
import { collegesData } from '../data/collegesData.js';

export const page = {
  name: "Colleges",
  sourceFile: "Colleges.jsx",
  slug: "colleges",
  title: "Top Colleges in India 2026: Explore Courses, Fees, Ranking & Admissions",
  head: {
    meta: [
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { name: "description", content: "Explore top colleges in India across Engineering, Medical, Management, Science, Commerce, Law, Pharmacy, Architecture, & Arts." }
    ],
    links: [
      { href: "/yas/css/version2/min/style.css?v=1777964297", rel: "stylesheet" },
      { href: "/yas/css/version2/min/college-landing-new.css?v=1777964297", rel: "stylesheet" },
      { href: "/yas/css/version2/min/stream_location_college_cards.css?v=1777964298", rel: "stylesheet" }
    ]
  }
};

const workingImage = "https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg";

const topCollegesList = [
  {
    id: "IITM01",
    name: "Indian Institute of Technology (IIT), Madras",
    stream: "Engineering",
    location: "Chennai, Tamil Nadu",
    sector: "Government",
    rating: "4.8",
    image: workingImage,
    summary: "Indian Institute of Technology (IIT), Madras is NIRF #1 Engineering & Overall institute in India located in Chennai, Tamil Nadu. Code: IITM01.",
    courses: "48 Courses",
    exams: "JEE Main / Advanced",
    fee: "₹2.1L / Year"
  },
  {
    id: "IITD01",
    name: "Indian Institute of Technology (IIT), Delhi",
    stream: "Engineering",
    location: "New Delhi, Delhi",
    sector: "Government",
    rating: "4.7",
    image: workingImage,
    summary: "Indian Institute of Technology (IIT), Delhi is a premier technology institute located in New Delhi, Delhi. Code: IITD01.",
    courses: "42 Courses",
    exams: "JEE Main / Advanced",
    fee: "₹2.2L / Year"
  },
  {
    id: "AIIMS01",
    name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    stream: "Medical",
    location: "New Delhi, Delhi",
    sector: "Government",
    rating: "4.9",
    image: workingImage,
    summary: "All India Institute of Medical Sciences (AIIMS), New Delhi is India's top medical institution. Code: AIIMS01.",
    courses: "18 Courses",
    exams: "NEET UG / PG",
    fee: "₹1.6K / Year"
  },
  {
    id: "IIMA01",
    name: "Indian Institute of Management (IIM), Ahmedabad",
    stream: "Management",
    location: "Ahmedabad, Gujarat",
    sector: "Government",
    rating: "4.9",
    image: workingImage,
    summary: "IIM Ahmedabad is India's leading business school offering PGP, MBA and Executive Management programs. Code: IIMA01.",
    courses: "12 Courses",
    exams: "CAT / GMAT",
    fee: "₹24.5L Total"
  },
  {
    id: "IISC01",
    name: "Indian Institute of Science (IISc), Bengaluru",
    stream: "Science",
    location: "Bengaluru, Karnataka",
    sector: "Government",
    rating: "4.9",
    image: workingImage,
    summary: "IISc Bengaluru is India's premier public research university for science, technology and advanced studies. Code: IISC01.",
    courses: "35 Courses",
    exams: "GATE / KVPY / JEE",
    fee: "₹45K / Year"
  },
  {
    id: "SRCC01",
    name: "Shri Ram College of Commerce (SRCC), Delhi",
    stream: "Commerce",
    location: "New Delhi, Delhi",
    sector: "Government",
    rating: "4.8",
    image: workingImage,
    summary: "SRCC New Delhi is Asia's most prestigious college for Commerce and Economics education. Code: SRCC01.",
    courses: "6 Courses",
    exams: "CUET UG",
    fee: "₹30K / Year"
  },
  {
    id: "NIPER01",
    name: "National Institute of Pharmaceutical Education and Research (NIPER), Mohali",
    stream: "Pharmacy",
    location: "Mohali, Punjab",
    sector: "Government",
    rating: "4.7",
    image: workingImage,
    summary: "NIPER Mohali is India's premier pharmaceutical science research institute under Ministry of Chemicals & Fertilizers. Code: NIPER01.",
    courses: "15 Courses",
    exams: "GPAT / NIPER JEE",
    fee: "₹85K / Year"
  },
  {
    id: "NLSIU01",
    name: "National Law School of India University (NLSIU), Bengaluru",
    stream: "Law",
    location: "Bengaluru, Karnataka",
    sector: "Government",
    rating: "4.9",
    image: workingImage,
    summary: "NLSIU Bengaluru is NIRF #1 National Law University in India for BA LLB (Hons) and LLM programs. Code: NLSIU01.",
    courses: "8 Courses",
    exams: "CLAT",
    fee: "₹2.8L / Year"
  },
  {
    id: "SPA01",
    name: "School of Planning and Architecture (SPA), New Delhi",
    stream: "Architecture",
    location: "New Delhi, Delhi",
    sector: "Government",
    rating: "4.6",
    image: workingImage,
    summary: "SPA New Delhi is an Institution of National Importance specializing in Architecture & Planning. Code: SPA01.",
    courses: "14 Courses",
    exams: "JEE Main Paper 2 / NATA",
    fee: "₹1.1L / Year"
  },
  {
    id: "CMC01",
    name: "Christian Medical College (CMC), Vellore",
    stream: "Medical",
    location: "Vellore, Tamil Nadu",
    sector: "Private",
    rating: "4.8",
    image: workingImage,
    summary: "CMC Vellore is one of India's top ranked private medical colleges and healthcare research centers. Code: CMC01.",
    courses: "24 Courses",
    exams: "NEET UG / PG",
    fee: "₹52K / Year"
  },
  {
    id: "BITSP01",
    name: "BITS Pilani - Birla Institute of Technology and Science",
    stream: "Engineering",
    location: "Pilani, Rajasthan",
    sector: "Private",
    rating: "4.8",
    image: workingImage,
    summary: "BITS Pilani is a Deemed University of Eminence known for top technical, science and management education. Code: BITSP01.",
    courses: "32 Courses",
    exams: "BITSAT",
    fee: "₹4.5L / Year"
  },
  {
    id: "NID01",
    name: "National Institute of Design (NID), Ahmedabad",
    stream: "Design",
    location: "Ahmedabad, Gujarat",
    sector: "Government",
    rating: "4.7",
    image: workingImage,
    summary: "NID Ahmedabad is India's premier design institute for Industrial, Communication, and Textile Design. Code: NID01.",
    courses: "10 Courses",
    exams: "NID DAT",
    fee: "₹3.2L / Year"
  },
  {
    id: "IHM01",
    name: "Institute of Hotel Management (IHM), Pusa New Delhi",
    stream: "Hospitality",
    location: "New Delhi, Delhi",
    sector: "Government",
    rating: "4.7",
    image: workingImage,
    summary: "IHM Pusa is India's top ranked hotel management and catering institute under Ministry of Tourism. Code: IHM01.",
    courses: "7 Courses",
    exams: "NCHMCT JEE",
    fee: "₹1.4L / Year"
  },
  {
    id: "IVRI01",
    name: "ICAR - Indian Veterinary Research Institute (IVRI), Bareilly",
    stream: "Veterinary",
    location: "Bareilly, Uttar Pradesh",
    sector: "Government",
    rating: "4.7",
    image: workingImage,
    summary: "IVRI Bareilly is India's premier veterinary research university for BVSc, MVSc and PhD degrees. Code: IVRI01.",
    courses: "16 Courses",
    exams: "NEET UG / ICAR",
    fee: "₹35K / Year"
  },
  {
    id: "VIT01",
    name: "Vellore Institute of Technology (VIT), Vellore",
    stream: "Engineering",
    location: "Vellore, Tamil Nadu",
    sector: "Private",
    rating: "4.6",
    image: workingImage,
    summary: "VIT Vellore is a top private university offering BTech, MTech, MCA, and research programs with 90%+ placement records. Code: VIT01.",
    courses: "54 Courses",
    exams: "VITEEE",
    fee: "₹1.9L / Year"
  },
  {
    id: "CU01",
    name: "Chandigarh University (CU), Mohali",
    stream: "Engineering",
    location: "Mohali, Punjab",
    sector: "Private",
    rating: "4.5",
    image: workingImage,
    summary: "Chandigarh University is an NAAC A+ accredited private university with global rankings and multi-stream courses. Code: CU01.",
    courses: "65 Courses",
    exams: "CUCET",
    fee: "₹1.6L / Year"
  },
  {
    id: "PU01",
    name: "Parul University, Vadodara",
    stream: "Medical",
    location: "Vadodara, Gujarat",
    sector: "Private",
    rating: "4.4",
    image: workingImage,
    summary: "Parul University is a multidisciplinary campus in Vadodara offering Engineering, Medical, Pharmacy & Management. Code: PU01.",
    courses: "80 Courses",
    exams: "GUJCET / NEET",
    fee: "₹1.2L / Year"
  },
  {
    id: "LPU01",
    name: "Lovely Professional University (LPU), Phagwara",
    stream: "Management",
    location: "Jalandhar, Punjab",
    sector: "Private",
    rating: "4.5",
    image: workingImage,
    summary: "LPU Jalandhar is one of India's largest single-campus private universities with top placement drives. Code: LPU01.",
    courses: "72 Courses",
    exams: "LPUNEST",
    fee: "₹1.4L / Year"
  },
  {
    id: "ITOT01",
    name: "Modern Pvt. IToT, Kangra, Himachal Pradesh",
    stream: "Vocational",
    location: "Kangra, Himachal Pradesh",
    sector: "Private",
    rating: "4.3",
    image: workingImage,
    summary: "Modern Pvt IToT Kangra provides technical skill training, Mechanic Motor Vehicle & Sewing Technology diplomas. Code: ITOT01.",
    courses: "4 Courses",
    exams: "Merit Based",
    fee: "₹25K / Year"
  },
  {
    id: "ITOT02",
    name: "SR IToT, Ambala, Haryana",
    stream: "Vocational",
    location: "Ambala, Haryana",
    sector: "Private",
    rating: "4.2",
    image: workingImage,
    summary: "SR IToT Ambala offers vocational technical skill training programs in Haryana. Code: ITOT02.",
    courses: "5 Courses",
    exams: "Merit Based",
    fee: "₹28K / Year"
  },
  {
    id: "ITOT03",
    name: "SBS IToT, Kalanwali, Sirsa, Haryana",
    stream: "Vocational",
    location: "Sirsa, Haryana",
    sector: "Private",
    rating: "4.2",
    image: workingImage,
    summary: "SBS IToT Sirsa provides approved technical instructor training and vocational courses. Code: ITOT03.",
    courses: "4 Courses",
    exams: "Merit Based",
    fee: "₹26K / Year"
  }
];

const datasetColleges = collegesData.map((c, idx) => {
  const nameLower = (c.name || '').toLowerCase();
  let stream = 'Vocational';
  if (nameLower.includes('pharmacy') || nameLower.includes('pharm')) stream = 'Pharmacy';
  else if (nameLower.includes('medical') || nameLower.includes('nursing') || nameLower.includes('hospital')) stream = 'Medical';
  else if (nameLower.includes('tech') || nameLower.includes('engineering') || nameLower.includes('iit') || nameLower.includes('nit') || nameLower.includes('itot')) stream = 'Engineering';
  else if (nameLower.includes('management') || nameLower.includes('iim') || nameLower.includes('business')) stream = 'Management';
  else if (nameLower.includes('science') || nameLower.includes('iisc')) stream = 'Science';
  else if (nameLower.includes('law')) stream = 'Law';

  return {
    id: c.id || `dataset-${idx}`,
    name: c.name,
    stream: stream,
    location: `${c.city || c.district || 'City'}, ${c.stateName || 'India'}`,
    sector: c.sector || 'Private',
    rating: '4.3',
    image: workingImage,
    summary: `${c.name} is a recognized ${c.sector || 'Private'} institute located in ${c.city || c.district || ''}, ${c.stateName || 'India'}. ${c.address ? 'Address: ' + c.address : ''}`,
    courses: `${c.coursesCount || (c.seatMatrix && Object.keys(c.seatMatrix).length) || 4} Courses`,
    exams: c.sector === 'Government' ? 'Entrance Exam' : 'Merit Based',
    fee: '₹35K / Year'
  };
});

const allCollegesCombined = [...topCollegesList, ...datasetColleges];

function CollegesContent() {
  return (
    <>
      <div className={"college__Landing__New"}>
        <div className={"row"}>
          <div className={"all-college-ajax col-md-3 lg-pr-0"} style={{ minHeight: "100vh" }}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}></div>
              <div className={"mobile__clear__filter"}>
                <span id={"clearAllClg"} className={"clearAll"}>
                  {"Clear All"}
                </span>
              </div>
            </div>
            <div className={"sort__row__container"}>
              <h3 className={"filtered__college_count"}>
                {`Showing ${allCollegesCombined.length} Colleges`}
              </h3>
              <div className={"sortBy__select2__container desktopOnly"}>
                <span>{"Sort By:"}</span>
                <select id={"college-sort"} name={"college-sort"}>
                  <option value={"position"}>{"Popularity"}</option>
                  <option value={"rank"}>{"Ranking"}</option>
                  <option value={"highest_fee"}>{"Highest Fees"}</option>
                  <option value={"lowest_fee"}>{"Lowest Fees"}</option>
                </select>
              </div>
            </div>
            <div className={"searchBar"}>
              <input 
                className={"search-autocomplete1 search-listing"} 
                id={"autoComplete"} 
                autoComplete={"off"} 
                placeholder={"Search for Colleges"} 
                type={"text"} 
                tabIndex={"1"} 
              />
              <i className={"spriteIcon small__close__icon search-remove"}></i>
              <div className={"selection"}></div>
            </div>
            <div className={"filtered__colleges__list"}>
              <div className={"searchedcollegeList"}>
                {allCollegesCombined.map((college) => (
                  <div 
                    className={"college__card__new"} 
                    key={college.id} 
                    id={`search-${college.id}`}
                    data-stream={college.stream}
                  >
                    <div className={"card__header__row"}>
                      <div className={"college__detail__grid"}>
                        <img 
                          width={"56"} 
                          height={"56"} 
                          className={"college__image"} 
                          src={college.image} 
                          alt={college.name} 
                        />
                        <div className={"college__detail__row"}>
                          <h2 className={"college__name"}>
                            <a href={allowedLink(`/college/${college.id}`)} title={college.name}>
                              {college.name}
                            </a>
                          </h2>
                          <div className={"detail__list__mobile"}>
                            <span className={"list__style college__location"}>
                              {college.location}
                            </span>
                            <span className={"list__style college__affiliation"}>
                              {college.sector}
                            </span>
                            <a className={"list__style list__style__rating"} title={`${college.name} Reviews`} href={allowedLink("/reviews")}>
                              <span className={"list__style college__rating"}>
                                <span className={"spriteIcon__2 review__star__icon"}></span>
                                {college.rating}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"like__compare__grid desktopOnly"}>
                        <span className={"compare__icon spriteIcon__2 compareIcon"}></span>
                      </div>
                    </div>
                    <div className={"summary-text fsdfsdfs"}>
                      <p className={"template-text1 template-text add-read-more show-less-content"}>
                        {college.summary}
                      </p>
                    </div>
                    <div className={"highlight__cta__row"}>
                      <div className={"highlights__grid"}>
                        <div className={"highlight__div"}>
                          <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                          <span className={"highlight__value"}>
                            <h3>
                              <a title={`${college.name} Courses`}>
                                {`${college.stream} • ${college.courses}`}
                              </a>
                            </h3>
                          </span>
                        </div>
                        <div className={"highlight__div exam__accepted__div"}>
                          <h3 className={"highlight__name"}>{"Exam Accepted"}</h3>
                          <h3 className={"highlight__value"}>
                            <a title={college.exams}>
                              {college.exams}
                            </a>
                          </h3>
                        </div>
                        <div className={"desktopOnly"}></div>
                        <div className={"highlight__div"}>
                          <h3 className={"highlight__name"}>{"Tuition Fees Range"}</h3>
                          <h3 className={"highlight__value"}>{college.fee}</h3>
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
                        <div 
                          className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} 
                          data-title={"Apply Now"} 
                          data-description={college.name}
                        >
                          {"Apply Now"}
                        </div>
                        <div 
                          className={"cta__div lead-cta-college-filter-1 view-details-btn"} 
                          data-title={"View Details"} 
                          data-description={college.name}
                        >
                          {"View College"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CollegesPage(props) {
  return (
    <PageRenderer page={page} {...props}>
      <CollegesContent />
    </PageRenderer>
  );
}
