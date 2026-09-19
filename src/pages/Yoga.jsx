import CollegeImage from '../components/CollegeImage.jsx';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Yoga",
  sourceFile: "Yoga.jsx",
  slug: "yoga",
  title: "Top Yoga & Naturopathy Colleges in India 2026: Ranking, Courses, Fees & Placements",
  head: {
    "meta": [
      { "charset": "UTF-8" },
      { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
      { "name": "viewport", "content": "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { "name": "theme-color", "content": "#545ebd" },
      { "name": "description", "content": "Explore Top Yoga and Naturopathy Colleges in India 2026. Get details on BNYS, B.Sc Yogic Science, M.Sc Yoga, Diploma in Yoga, fees, eligibility and admissions." },
      { "property": "og:type", "content": "website" },
      { "property": "og:title", "content": "Top Yoga & Naturopathy Colleges in India 2026: Ranking, Courses, Fees & Placements" },
      { "property": "og:url", "content": "/yoga" },
      { "property": "og:site_name", "content": "citsAdmission.com" },
      { "property": "og:description", "content": "Explore Top Yoga and Naturopathy Colleges in India 2026. Get details on BNYS, B.Sc Yogic Science, M.Sc Yoga, Diploma in Yoga, fees, eligibility and admissions." },
      { "name": "robots", "content": "index, follow" }
    ],
    "links": [
      { "rel": "icon", "href": "/favicon.png", "type": "image/x-icon" },
      { "href": "/yoga", "rel": "canonical" }
    ],
    "styles": []
  },
};

const yogaColleges = [
  {
    code: "MDNIY-Y",
    name: "Morarji Desai National Institute of Yoga (MDNIY), New Delhi",
    shortName: "MDNIY New Delhi",
    location: "New Delhi, Delhi",
    city: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    affiliation: "Autonomous (Ministry of AYUSH)",
    rating: "4.9",
    description: "MDNIY is India's apex autonomous institute under the Ministry of AYUSH, dedicated to the promotion, education, scientific research, and clinical therapy in Yogic Sciences. Code: MDNIY-Y.",
    courses: "8 Courses",
    examAccepted: "CUET / Institute Entrance",
    tuitionFees: "₹15,000 - ₹45,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "SVYASA-Y",
    name: "Swami Vivekananda Yoga Anusandhana Samsthana (S-VYASA), Bengaluru",
    shortName: "S-VYASA Yoga University",
    location: "Bengaluru, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    stateCode: "KA",
    affiliation: "Deemed University",
    rating: "4.8",
    description: "S-VYASA is an internationally acclaimed pioneer in evidence-based Yoga Therapy, offering BNYS, B.Sc Yogic Science, MD Yoga, and advanced research publications with Prashanti Kutiram campus. Code: SVYASA-Y.",
    courses: "14 Courses",
    examAccepted: "NEET (BNYS) / University Entrance",
    tuitionFees: "₹75,000 - ₹1,80,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "PATANJALI-Y",
    name: "University of Patanjali (Patanjali Yogpeeth), Haridwar",
    shortName: "University of Patanjali",
    location: "Haridwar, Uttarakhand",
    city: "Haridwar",
    state: "Uttarakhand",
    stateCode: "UT",
    affiliation: "State University",
    rating: "4.7",
    description: "Established by Patanjali Yogpeeth, the University of Patanjali blends Vedic wisdom with modern scientific healthcare, offering B.Sc, M.Sc, and PG Diplomas in Yoga and Naturopathy. Code: PATANJALI-Y.",
    courses: "10 Courses",
    examAccepted: "University Aptitude Test / Merit",
    tuitionFees: "₹45,000 - ₹1,10,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "DSVV-Y",
    name: "Dev Sanskriti Vishwavidyalaya (DSVV), Haridwar",
    shortName: "Dev Sanskriti Vishwavidyalaya",
    location: "Haridwar, Uttarakhand",
    city: "Haridwar",
    state: "Uttarakhand",
    stateCode: "UT",
    affiliation: "Private (UGC Recognized)",
    rating: "4.7",
    description: "Dev Sanskriti Vishwavidyalaya offers acclaimed degree courses in Yogic Science, Human Consciousness, and Holistic Health with an authentic spiritual gurukul atmosphere. Code: DSVV-Y.",
    courses: "9 Courses",
    examAccepted: "DSVV Written Entrance Exam",
    tuitionFees: "₹40,000 - ₹85,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "KAIVALYA-Y",
    name: "Kaivalyadhama Yoga Institute (G.S. College of Yoga), Lonavala",
    shortName: "Kaivalyadhama Lonavala",
    location: "Lonavala, Maharashtra",
    city: "Lonavala",
    state: "Maharashtra",
    stateCode: "MH",
    affiliation: "Trust / UGC Recognized",
    rating: "4.8",
    description: "Founded in 1924 by Swami Kuvalayananda, Kaivalyadhama is the world's oldest scientific yoga research institute, offering high-level diploma and degree credentials recognized by the Ministry of AYUSH. Code: KAIVALYA-Y.",
    courses: "6 Courses",
    examAccepted: "Merit / Interview",
    tuitionFees: "₹30,000 - ₹75,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "BVDU-Y",
    name: "Bharati Vidyapeeth College of Naturopathy and Yogic Sciences, Pune",
    shortName: "Bharati Vidyapeeth Naturopathy",
    location: "Pune, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    affiliation: "Deemed University",
    rating: "4.6",
    description: "Bharati Vidyapeeth provides comprehensive hospital-backed training in BNYS, acupuncture, yoga therapy, and holistic lifestyle disorders management with modern clinical setups. Code: BVDU-Y.",
    courses: "7 Courses",
    examAccepted: "NEET UG / BVDU Entrance",
    tuitionFees: "₹65,000 - ₹1,45,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "NIN-Y",
    name: "National Institute of Naturopathy (NIN), Pune",
    shortName: "NIN Pune",
    location: "Pune, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    affiliation: "Government (Ministry of AYUSH)",
    rating: "4.6",
    description: "National Institute of Naturopathy (NIN) Pune operates directly under the Ministry of AYUSH, providing certified residential courses and evidence-based naturopathic treatments. Code: NIN-Y.",
    courses: "5 Courses",
    examAccepted: "AYUSH Entrance / Merit",
    tuitionFees: "₹20,000 - ₹55,000 / Year",
    gender: "Co-ed"
  },
  {
    code: "BYB-Y",
    name: "Bihar Yoga Bharati (Bihar School of Yoga), Munger",
    shortName: "Bihar School of Yoga",
    location: "Munger, Bihar",
    city: "Munger",
    state: "Bihar",
    stateCode: "BR",
    affiliation: "Institute of Advanced Yogic Studies",
    rating: "4.7",
    description: "Bihar Yoga Bharati is dedicated to traditional Yogic Studies founded on Satyananda Yoga, delivering an authentic immersion into yogic lifestyle, psychology, and philosophy. Code: BYB-Y.",
    courses: "5 Courses",
    examAccepted: "Ashram Selection / Merit",
    tuitionFees: "₹18,000 - ₹40,000 / Year",
    gender: "Co-ed"
  }
];

function YogaContent() {
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
              {"Top Yoga & Naturopathy Colleges in India"}
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
                {"Top Yoga & Naturopathy Colleges in India 2026"}
              </h1>
              <p>
                <span>
                  {"Top Yoga and Naturopathy Colleges in India provide accredited undergraduate, postgraduate, and diploma qualifications governed by the Ministry of AYUSH, CCRYN, and UGC. With increasing global recognition of integrative wellness and preventive healthcare, yoga professionals, certified therapists, and naturopathic physicians are in high demand across hospitals, wellness resorts, academic institutions, and rehabilitation centers."}
                </span>
              </p>
              <p>
                <span>
                  {"Students can enroll in premier courses including "}
                  <strong>{"B.N.Y.S. - Bachelor of Naturopathy and Yogic Sciences (5.5 Years)"}</strong>{", "}
                  <strong>{"B.Sc in Yogic Science (3 Years)"}</strong>{", "}
                  <strong>{"M.Sc in Yoga Therapy (2 Years)"}</strong>{", and "}
                  <strong>{"PG Diploma in Yoga (1 Year)"}</strong>
                  {". Top institutions include Morarji Desai National Institute of Yoga (New Delhi), S-VYASA Yoga University (Bengaluru), University of Patanjali (Haridwar), and Kaivalyadhama (Lonavala). Admissions are conducted through NEET for BNYS, CUET, and university-level aptitude tests."}
                </span>
              </p>
              <h2>
                <strong>{"Top Yoga Colleges in India: Highlights"}</strong>
              </h2>
              <table border={"1"}>
                <tbody>
                  <tr>
                    <td><p><strong>{"Accredited Yoga Colleges"}</strong></p></td>
                    <td><p><span>{"Government: 80+ | Private & Deemed Universities: 240+"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Governing Authority"}</strong></p></td>
                    <td><p><span>{"Ministry of AYUSH, Central Council for Research in Yoga & Naturopathy (CCRYN)"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Flagship Programs"}</strong></p></td>
                    <td><p><span>{"B.N.Y.S, B.Sc Yogic Science, M.Sc Yoga, P.G.D.Y.T., Certificate in Yoga"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Average Course Fees"}</strong></p></td>
                    <td><p><span>{"Govt: ₹15,000 - ₹45,000/yr | Private: ₹45,000 - ₹1,80,000/yr"}</span></p></td>
                  </tr>
                  <tr>
                    <td><p><strong>{"Career Opportunities"}</strong></p></td>
                    <td><p><span>{"Naturopathic Doctor, Clinical Yoga Therapist, Wellness Consultant, Corporate Trainer"}</span></p></td>
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
                <button id={"yoga"} data-attr={"stream"} className={"filter__selected"}>
                  {"Yoga"}
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
                {`Showing ${yogaColleges.length} Colleges`}
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
                placeholder={"Search for Yoga Colleges, City, Exam"} 
                type={"text"} 
                tabIndex={"1"} 
              />
              <i className={"spriteIcon small__close__icon search-remove"}></i>
              <div className={"selection"}></div>
            </div>
            <div className={"filtered__colleges__list"}>
              <div className={"searchedcollegeList"}>
                {yogaColleges.map((college) => {
                  const collegeObj = {
                    id: college.code,
                    name: college.name,
                    city: college.city,
                    state: college.stateCode,
                    sector: college.affiliation
                  };
                  return (
                    <div className={"college__card__new"} key={college.code} id={`search-${college.code}`} data-stream={"Yoga"}>
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

export default function YogaPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <YogaContent />
    </PageRenderer>
  );
}
