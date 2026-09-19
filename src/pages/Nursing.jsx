import CollegeImage from '../components/CollegeImage.jsx';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Nursing",
  sourceFile: "Nursing.jsx",
  slug: "nursing",
  title: "Top Nursing Colleges in India 2026: Ranking, Courses, Fees & Placements",
  head: {
    "meta": [
      { "charset": "UTF-8" },
      { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
      { "name": "viewport", "content": "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { "name": "theme-color", "content": "#545ebd" },
      { "name": "description", "content": "Find Top Nursing Colleges in India based on 2026 rankings with details on B.Sc Nursing, GNM, ANM, M.Sc Nursing courses, fees, placements, admission and cut offs." },
      { "property": "og:type", "content": "website" },
      { "property": "og:title", "content": "Top Nursing Colleges in India 2026: Ranking, Courses, Fees & Placements" },
      { "property": "og:url", "content": "/nursing" },
      { "property": "og:site_name", "content": "citsAdmission.com" },
      { "property": "og:description", "content": "Find Top Nursing Colleges in India based on 2026 rankings with details on B.Sc Nursing, GNM, ANM, M.Sc Nursing courses, fees, placements, admission and cut offs." },
      { "name": "robots", "content": "index, follow" }
    ],
    "links": [
      { "rel": "icon", "href": "/favicon.png", "type": "image/x-icon" },
      { "href": "/nursing", "rel": "canonical" }
    ],
    "styles": []
  },
};

const nursingColleges = [
  {
    code: "AIIMS-N",
    name: "All India Institute of Medical Sciences (AIIMS College of Nursing), New Delhi",
    shortName: "AIIMS Nursing",
    location: "New Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    affiliation: "Government",
    rating: "4.9",
    description: "AIIMS College of Nursing, New Delhi is India's apex nursing institute, offering world-class clinical training in B.Sc (Hons) Nursing, Post-Basic B.Sc Nursing, M.Sc Nursing, and Ph.D. Code: AIIMS-N.",
    courses: "8 Courses",
    examAccepted: "AIIMS B.Sc Nursing Exam",
    tuitionFees: "₹1,500 - ₹5,000 / Year",
    gender: "Female / Co-ed"
  },
  {
    code: "CMC-N",
    name: "Christian Medical College (CMC College of Nursing), Vellore",
    shortName: "CMC Vellore Nursing",
    location: "Vellore, Tamil Nadu",
    city: "Vellore",
    state: "Tamil Nadu",
    stateCode: "TN",
    affiliation: "Private",
    rating: "4.8",
    description: "CMC College of Nursing, Vellore is nationally renowned for its clinical excellence, compassionate care training, simulation laboratories, and extensive global alumni network. Code: CMC-N.",
    courses: "12 Courses",
    examAccepted: "CMC Entrance Exam / NEET",
    tuitionFees: "₹40,000 - ₹80,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "PGIMER-N",
    name: "National Institute of Nursing Education (PGIMER), Chandigarh",
    shortName: "PGIMER Nursing",
    location: "Chandigarh, Punjab",
    city: "Chandigarh",
    state: "Punjab",
    stateCode: "PB",
    affiliation: "Government",
    rating: "4.8",
    description: "National Institute of Nursing Education (NINE) at PGIMER Chandigarh is a premier institution offering undergraduate, postgraduate, and super-specialty clinical nursing education. Code: PGIMER-N.",
    courses: "6 Courses",
    examAccepted: "PGIMER Nursing Entrance",
    tuitionFees: "₹2,500 - ₹12,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "STJOHNS-N",
    name: "St. John's College of Nursing, Bengaluru",
    shortName: "St. John's Nursing",
    location: "Bengaluru, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    stateCode: "KA",
    affiliation: "Private",
    rating: "4.7",
    description: "St. John's College of Nursing Bengaluru is attached to a 1,350+ bed tertiary care hospital providing advanced multi-specialty clinical exposure and high placement records. Code: STJOHNS-N.",
    courses: "7 Courses",
    examAccepted: "KCET / Institute Test",
    tuitionFees: "₹80,000 - ₹1,50,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "MCON-N",
    name: "Manipal College of Nursing (MCON), Manipal",
    shortName: "Manipal College of Nursing",
    location: "Manipal, Karnataka",
    city: "Manipal",
    state: "Karnataka",
    stateCode: "KA",
    affiliation: "Private (Deemed)",
    rating: "4.7",
    description: "Manipal College of Nursing is ranked among India's top private nursing colleges with state-of-the-art virtual simulation labs and international university exchange programs. Code: MCON-N.",
    courses: "9 Courses",
    examAccepted: "MET / Merit-Based",
    tuitionFees: "₹1,20,000 - ₹2,10,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "RAKCON-N",
    name: "Rajkumari Amrit Kaur College of Nursing (RAKCON), New Delhi",
    shortName: "RAK College of Nursing",
    location: "New Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    affiliation: "Government",
    rating: "4.6",
    description: "Affiliated with the University of Delhi, RAKCON is a pioneer nursing institution established under the Ministry of Health and Family Welfare, producing nurse leaders since 1946. Code: RAKCON-N.",
    courses: "5 Courses",
    examAccepted: "NEET UG",
    tuitionFees: "₹8,000 - ₹25,000 / Year",
    gender: "Female"
  },
  {
    code: "APOLLO-N",
    name: "Apollo College of Nursing, Chennai",
    shortName: "Apollo Nursing Chennai",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    stateCode: "TN",
    affiliation: "Private",
    rating: "4.5",
    description: "Apollo College of Nursing provides direct hospital-based clinical training at Apollo Hospitals with guaranteed placement pathways in Apollo hospitals and healthcare networks worldwide. Code: APOLLO-N.",
    courses: "6 Courses",
    examAccepted: "Tamil Nadu Paramedical CET",
    tuitionFees: "₹75,000 - ₹1,40,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "HAMDARD-N",
    name: "Rufaidah College of Nursing (Jamia Hamdard), New Delhi",
    shortName: "Rufaidah College of Nursing",
    location: "New Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    affiliation: "Deemed University",
    rating: "4.5",
    description: "Rufaidah College of Nursing at Jamia Hamdard offers comprehensive nursing courses with hands-on clinical rotations at HAH Centenary Hospital and leading multi-speciality centers. Code: HAMDARD-N.",
    courses: "7 Courses",
    examAccepted: "NEET UG / Jamia Hamdard Test",
    tuitionFees: "₹1,10,000 - ₹1,80,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "KGMU-N",
    name: "Institute of Nursing (KGMU), Lucknow",
    shortName: "KGMU Institute of Nursing",
    location: "Lucknow, Uttar Pradesh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    stateCode: "UP",
    affiliation: "Government",
    rating: "4.6",
    description: "Institute of Nursing at King George's Medical University is Uttar Pradesh's apex nursing institute providing extensive hands-on experience in 4,500+ bed hospital facilities. Code: KGMU-N.",
    courses: "6 Courses",
    examAccepted: "UP CNET (Common Nursing Entrance)",
    tuitionFees: "₹18,000 - ₹48,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "MMC-N",
    name: "College of Nursing (Madras Medical College), Chennai",
    shortName: "MMC College of Nursing",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    stateCode: "TN",
    affiliation: "Government",
    rating: "4.6",
    description: "College of Nursing at Madras Medical College is one of South India's oldest and most prestigious government nursing institutions, affiliated to Dr. M.G.R. Medical University. Code: MMC-N.",
    courses: "5 Courses",
    examAccepted: "TN Health Science Selection / Merit",
    tuitionFees: "₹5,000 - ₹16,000 / Year",
    gender: "Co-ed"
  }
];

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
        <div className={"pageRedirectionMenu"}></div>
        <div className={"college__Landing__New"}>
          <div className={"college__Landing__Hero__Section1"}>
            <div className={"college__Landing__Hero__Section pageData pageInfo"}>
              <h1 className={"college__Landing__Hero__Section__Heading"}>
                {"Top Nursing Colleges in India 2026"}
              </h1>
              <p>
                <span>
                  {"Top Nursing Colleges in India include prestigious institutes like AIIMS New Delhi (College of Nursing), Christian Medical College (CMC Vellore), PGIMER Chandigarh, and St. John's College of Nursing Bengaluru. Nursing is an integral branch of the healthcare sector dedicated to patient care, critical treatment support, rehabilitation, and preventive community health."}
                </span>
              </p>
              <p>
                <span>
                  {"Students can pursue high-demand nursing courses such as "}
                  <strong>{"B.Sc Nursing (4 Years)"}</strong>{", "}
                  <strong>{"Post-Basic B.Sc Nursing (2 Years)"}</strong>{", "}
                  <strong>{"G.N.M. - General Nursing and Midwifery (3 Years)"}</strong>{", "}
                  <strong>{"A.N.M. - Auxiliary Nurse Midwife (2 Years)"}</strong>{", and "}
                  <strong>{"M.Sc Nursing (2 Years)"}</strong>
                  {". Admissions are primarily conducted through entrance exams like AIIMS B.Sc Nursing, NEET-UG, PGIMER Nursing Exam, UP CNET, and various state-level CETs. Career opportunities after nursing include Clinical Nurse Specialist, ICU Care Nurse, Nurse Administrator, Nurse Educator, and Military Nursing Service with excellent global demand in the UK, USA, Canada, and Gulf nations."}
                </span>
              </p>
              <h2>
                <strong>{"Top Nursing Colleges in India: Key Highlights"}</strong>
              </h2>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <td><p><strong>{"Recognized Nursing Colleges"}</strong></p></td>
                    <td><p><span>{"Government Colleges: 420+ | Private Colleges: 1,800+"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Apex Regulatory Body"}</strong></p></td>
                    <td><p><span>{"Indian Nursing Council (INC) & State Nursing Registration Councils"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Top Entrance Examinations"}</strong></p></td>
                    <td><p><span>{"AIIMS Nursing CET, NEET UG, PGIMER Nursing, KCET, UP CNET, JENPAS UG"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Average Course Fees"}</strong></p></td>
                    <td><p><span>{"Govt: ₹2,000 - ₹30,000/yr | Private: ₹60,000 - ₹2,00,000/yr"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Top Healthcare Recruiters"}</strong></p></td>
                    <td><p><span>{"AIIMS, Apollo Hospitals, Fortis, Max Healthcare, Medanta, Manipal Hospitals"}</span></p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"all-college-ajax col-md-3 lg-pr-0"}></div>
          <div className={"col-md-6 mobile__white__bg"}>
            <div className={"filter__selected__container"}>
              <div id={"selectedFilters"} className={"filterDiv"}>
                <button id={"nursing"} data-attr={"stream"} className={"filter__selected"}>
                  {"Nursing"}
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
                {`Showing ${nursingColleges.length} Colleges`}
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
                placeholder={"Search for Nursing Colleges, City, Exam"} 
                type={"text"} 
                tabIndex={"1"} 
              />
              <i className={"spriteIcon small__close__icon search-remove"}></i>
              <div className={"selection"}></div>
            </div>
            <div className={"filtered__colleges__list"}>
              <div className={"searchedcollegeList"}>
                {nursingColleges.map((college) => {
                  const collegeObj = {
                    id: college.code,
                    name: college.name,
                    city: college.city,
                    state: college.stateCode,
                    sector: college.affiliation
                  };
                  return (
                    <div className={"college__card__new"} key={college.code} id={`search-${college.code}`} data-stream={"Nursing"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <CollegeImage 
                            college={collegeObj} 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            alt={college.name} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink(`/college/${college.code}`)} title={college.name}>
                                {college.name}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {college.location}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {college.affiliation}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={`${college.name} Reviews`} href={allowedLink("/reviews")}>
                                <span className={"list__style college__rating"}>
                                  <span className={"spriteIcon__2 review__star__icon"}></span>
                                  {college.rating}
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
                          {college.description}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={`${college.name} Courses`}>
                                  {college.courses}
                                </a>
                              </h3>
                            </span>
                          </div>
                          <div className={"highlight__div exam__accepted__div"}>
                            <h3 className={"highlight__name"}>{"Exam Accepted"}</h3>
                            <h3 className={"highlight__value"}>
                              <a target={"_blank"} href={allowedLink("/exams")}>
                                {college.examAccepted}
                              </a>
                            </h3>
                          </div>
                          <div className={"desktopOnly"}></div>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Tuition Fees Range"}</h3>
                            <h3 className={"highlight__value"}>{college.tuitionFees}</h3>
                          </div>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Gender Acceptance"}</h3>
                            <h3 className={"highlight__value"}>
                              <span className={"highlight__value"}>{college.gender}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={college.name}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={college.name}>{"View College"}</div>
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
            <div className={"lazy-ad"} data-slot={"0"} style={{ textAlign: "center" }}></div>
            <div className={"lazy-ad"} data-slot={"1"} style={{ textAlign: "center" }}></div>
          </div>
        </div>
      </div>
      <div id={"lead-form-js-new"} style={{ display: "none" }}></div>
      <div id={"login-form-js"} style={{ display: "none" }}></div>
      <div id={"fees-breakup"} style={{ display: "none" }}></div>
      <div className={"pageLoader"} id={"filter-loader"}>
        <div className={"pageLoaderDiv"}>
          <div className={"circle"}></div>
          <p className={"loadText"}>{"Loading..."}</p>
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
