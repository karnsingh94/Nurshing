import fs from 'fs';
import path from 'path';

const streamCollegesData = {
  'Architecture': [
    { name: "School of Planning and Architecture (SPA), New Delhi", code: "SPA01", city: "New Delhi", state: "Delhi", sector: "Government", count: "12 Courses" },
    { name: "IIT Kharagpur - Department of Architecture", code: "IITKGP-A", city: "Kharagpur", state: "West Bengal", sector: "Government", count: "8 Courses" },
    { name: "Sir J.J. College of Architecture, Mumbai", code: "JJCA01", city: "Mumbai", state: "Maharashtra", sector: "Government", count: "6 Courses" },
    { name: "NIT Calicut - Department of Architecture", code: "NITC-A", city: "Calicut", state: "Kerala", sector: "Government", count: "5 Courses" },
    { name: "CEPT University, Ahmedabad", code: "CEPT01", city: "Ahmedabad", state: "Gujarat", sector: "Private", count: "14 Courses" },
  ],
  'Arts': [
    { name: "Lady Shri Ram College for Women (LSR), New Delhi", code: "LSR01", city: "New Delhi", state: "Delhi", sector: "Government", count: "24 Courses" },
    { name: "St. Stephen's College, New Delhi", code: "SSC01", city: "New Delhi", state: "Delhi", sector: "Government", count: "18 Courses" },
    { name: "Loyola College, Chennai", code: "LOY01", city: "Chennai", state: "Tamil Nadu", sector: "Private", count: "22 Courses" },
    { name: "Hindu College, New Delhi", code: "HIN01", city: "New Delhi", state: "Delhi", sector: "Government", count: "20 Courses" },
    { name: "St. Xavier's College, Mumbai", code: "SXM01", city: "Mumbai", state: "Maharashtra", sector: "Private", count: "16 Courses" },
  ],
  'Commerce': [
    { name: "Shri Ram College of Commerce (SRCC), New Delhi", code: "SRCC01", city: "New Delhi", state: "Delhi", sector: "Government", count: "10 Courses" },
    { name: "Loyola College (Department of Commerce), Chennai", code: "LOY-C", city: "Chennai", state: "Tamil Nadu", sector: "Private", count: "12 Courses" },
    { name: "St. Xavier's College (Commerce), Kolkata", code: "SXK-C", city: "Kolkata", state: "West Bengal", sector: "Private", count: "14 Courses" },
    { name: "Christ University (School of Commerce), Bengaluru", code: "CU-C", city: "Bengaluru", state: "Karnataka", sector: "Private", count: "18 Courses" },
    { name: "Hansraj College, New Delhi", code: "HRC01", city: "New Delhi", state: "Delhi", sector: "Government", count: "12 Courses" },
  ],
  'Computer': [
    { name: "National Institute of Technology (NIT), Trichy", code: "NITT-CS", city: "Tiruchirappalli", state: "Tamil Nadu", sector: "Government", count: "15 Courses" },
    { name: "Vellore Institute of Technology (VIT), Vellore", code: "VIT-CS", city: "Vellore", state: "Tamil Nadu", sector: "Private", count: "28 Courses" },
    { name: "IIIT Hyderabad - International Institute of IT", code: "IIITH01", city: "Hyderabad", state: "Telangana", sector: "Private", count: "12 Courses" },
    { name: "SRM Institute of Science and Technology, Chennai", code: "SRM-CS", city: "Chennai", state: "Tamil Nadu", sector: "Private", count: "32 Courses" },
    { name: "BITS Pilani (Computer Science Dept)", code: "BITS-CS", city: "Pilani", state: "Rajasthan", sector: "Private", count: "10 Courses" },
  ],
  'Dental': [
    { name: "Maulana Azad Institute of Dental Sciences (MAIDS), New Delhi", code: "MAIDS01", city: "New Delhi", state: "Delhi", sector: "Government", count: "9 Courses" },
    { name: "Manipal College of Dental Sciences, Manipal", code: "MCODS01", city: "Manipal", state: "Karnataka", sector: "Private", count: "12 Courses" },
    { name: "King George's Medical University (Faculty of Dental Sciences), Lucknow", code: "KGMU-D", city: "Lucknow", state: "Uttar Pradesh", sector: "Government", count: "10 Courses" },
    { name: "Nair Hospital Dental College, Mumbai", code: "NHDC01", city: "Mumbai", state: "Maharashtra", sector: "Government", count: "8 Courses" },
    { name: "AB Shetty Memorial Institute of Dental Sciences, Mangalore", code: "ABSMIDS", city: "Mangalore", state: "Karnataka", sector: "Private", count: "11 Courses" },
  ],
  'Design': [
    { name: "National Institute of Design (NID), Ahmedabad", code: "NID01", city: "Ahmedabad", state: "Gujarat", sector: "Government", count: "16 Courses" },
    { name: "National Institute of Fashion Technology (NIFT), New Delhi", code: "NIFT-ND", city: "New Delhi", state: "Delhi", sector: "Government", count: "18 Courses" },
    { name: "Industrial Design Centre (IDC) - IIT Bombay", code: "IDC-IITB", city: "Mumbai", state: "Maharashtra", sector: "Government", count: "8 Courses" },
    { name: "Srishti Manipal Institute of Art, Design & Tech, Bengaluru", code: "SRISHTI", city: "Bengaluru", state: "Karnataka", sector: "Private", count: "20 Courses" },
    { name: "Symbiosis Institute of Design (SID), Pune", code: "SID-PUNE", city: "Pune", state: "Maharashtra", sector: "Private", count: "14 Courses" },
  ],
  'Education': [
    { name: "Department of Education (CIE), University of Delhi", code: "DU-CIE", city: "New Delhi", state: "Delhi", sector: "Government", count: "8 Courses" },
    { name: "Lady Irwin College, New Delhi", code: "LIC01", city: "New Delhi", state: "Delhi", sector: "Government", count: "10 Courses" },
    { name: "St. Xavier's College of Education, Kolkata", code: "SXCE01", city: "Kolkata", state: "West Bengal", sector: "Private", count: "6 Courses" },
    { name: "Regional Institute of Education (RIE), Mysore", code: "RIE-MYS", city: "Mysore", state: "Karnataka", sector: "Government", count: "12 Courses" },
    { name: "Jamia Millia Islamia (Faculty of Education), New Delhi", code: "JMI-EDU", city: "New Delhi", state: "Delhi", sector: "Government", count: "14 Courses" },
  ],
  'Engineering': [
    { name: "Indian Institute of Technology (IIT), Madras", code: "IITM01", city: "Chennai", state: "Tamil Nadu", sector: "Government", count: "45 Courses" },
    { name: "Indian Institute of Technology (IIT), Delhi", code: "IITD01", city: "New Delhi", state: "Delhi", sector: "Government", count: "42 Courses" },
    { name: "Indian Institute of Technology (IIT), Bombay", code: "IITB01", city: "Mumbai", state: "Maharashtra", sector: "Government", count: "48 Courses" },
    { name: "Indian Institute of Technology (IIT), Kharagpur", code: "IITKGP", city: "Kharagpur", state: "West Bengal", sector: "Government", count: "50 Courses" },
    { name: "National Institute of Technology (NIT), Tiruchirappalli", code: "NITT01", city: "Tiruchirappalli", state: "Tamil Nadu", sector: "Government", count: "30 Courses" },
  ],
  'Hospitality': [
    { name: "Institute of Hotel Management (IHM Pusa), New Delhi", code: "IHMPUSA", city: "New Delhi", state: "Delhi", sector: "Government", count: "10 Courses" },
    { name: "Institute of Hotel Management (IHM), Mumbai", code: "IHMMUM", city: "Mumbai", state: "Maharashtra", sector: "Government", count: "8 Courses" },
    { name: "Welcomgroup Graduate School of Hotel Admin, Manipal", code: "WGSHA01", city: "Manipal", state: "Karnataka", sector: "Private", count: "12 Courses" },
    { name: "Institute of Hotel Management (IHM), Bengaluru", code: "IHMBBL", city: "Bengaluru", state: "Karnataka", sector: "Government", count: "9 Courses" },
    { name: "IHM Aurangabad (Taj Group)", code: "IHMAUG", city: "Aurangabad", state: "Maharashtra", sector: "Private", count: "6 Courses" },
  ],
  'Law': [
    { name: "National Law School of India University (NLSIU), Bengaluru", code: "NLSIU01", city: "Bengaluru", state: "Karnataka", sector: "Government", count: "12 Courses" },
    { name: "NALSAR University of Law, Hyderabad", code: "NALSAR01", city: "Hyderabad", state: "Telangana", sector: "Government", count: "10 Courses" },
    { name: "The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata", code: "WBNUJS01", city: "Kolkata", state: "West Bengal", sector: "Government", count: "14 Courses" },
    { name: "National Law University (NLU), New Delhi", code: "NLUD01", city: "New Delhi", state: "Delhi", sector: "Government", count: "8 Courses" },
    { name: "Symbiosis Law School (SLS), Pune", code: "SLSPUNE", city: "Pune", state: "Maharashtra", sector: "Private", count: "16 Courses" },
  ],
  'Management': [
    { name: "Indian Institute of Management (IIM), Ahmedabad", code: "IIMA01", city: "Ahmedabad", state: "Gujarat", sector: "Government", count: "12 Courses" },
    { name: "Indian Institute of Management (IIM), Bangalore", code: "IIMB01", city: "Bengaluru", state: "Karnataka", sector: "Government", count: "14 Courses" },
    { name: "Indian Institute of Management (IIM), Calcutta", code: "IIMC01", city: "Kolkata", state: "West Bengal", sector: "Government", count: "15 Courses" },
    { name: "XLRI – Xavier School of Management, Jamshedpur", code: "XLRI01", city: "Jamshedpur", state: "Jharkhand", sector: "Private", count: "10 Courses" },
    { name: "Management Development Institute (MDI), Gurugram", code: "MDI01", city: "Gurugram", state: "Haryana", sector: "Private", count: "16 Courses" },
  ],
  'Paramedical': [
    { name: "All India Institute of Medical Sciences (AIIMS Paramedical), New Delhi", code: "AIIMS-P", city: "New Delhi", state: "Delhi", sector: "Government", count: "18 Courses" },
    { name: "Christian Medical College (CMC Paramedical), Vellore", code: "CMC-P", city: "Vellore", state: "Tamil Nadu", sector: "Private", count: "22 Courses" },
    { name: "JIPMER Paramedical Sciences, Puducherry", code: "JIPMER-P", city: "Puducherry", state: "Puducherry", sector: "Government", count: "15 Courses" },
    { name: "Manipal College of Health Professions, Manipal", code: "MCHP01", city: "Manipal", state: "Karnataka", sector: "Private", count: "24 Courses" },
    { name: "Post Graduate Institute of Medical Education (PGIMER), Chandigarh", code: "PGIMER-P", city: "Chandigarh", state: "Punjab", sector: "Government", count: "20 Courses" },
  ],
  'Science': [
    { name: "Indian Institute of Science (IISc), Bengaluru", code: "IISC01", city: "Bengaluru", state: "Karnataka", sector: "Government", count: "35 Courses" },
    { name: "St. Stephen's College (Science Dept), New Delhi", code: "SSC-SCI", city: "New Delhi", state: "Delhi", sector: "Government", count: "14 Courses" },
    { name: "Hindu College (Science Dept), New Delhi", code: "HIN-SCI", city: "New Delhi", state: "Delhi", sector: "Government", count: "16 Courses" },
    { name: "Loyola College (School of Sciences), Chennai", code: "LOY-SCI", city: "Chennai", state: "Tamil Nadu", sector: "Private", count: "20 Courses" },
    { name: "Miranda House, New Delhi", code: "MH01", city: "New Delhi", state: "Delhi", sector: "Government", count: "18 Courses" },
  ],
  'Veterinary': [
    { name: "ICAR - Indian Veterinary Research Institute (IVRI), Bareilly", code: "IVRI01", city: "Bareilly", state: "Uttar Pradesh", sector: "Government", count: "14 Courses" },
    { name: "ICAR - National Dairy Research Institute (NDRI), Karnal", code: "NDRI01", city: "Karnal", state: "Haryana", sector: "Government", count: "12 Courses" },
    { name: "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS), Chennai", code: "TANUVAS", city: "Chennai", state: "Tamil Nadu", sector: "Government", count: "18 Courses" },
    { name: "Guru Angad Dev Veterinary Sciences University (GADVASU), Ludhiana", code: "GADVASU", city: "Ludhiana", state: "Punjab", sector: "Government", count: "15 Courses" },
    { name: "College of Veterinary Science, Assam Agricultural Univ, Guwahati", code: "CVSC-GAU", city: "Guwahati", state: "Assam", sector: "Government", count: "10 Courses" },
  ],
  'Vocational': [
    { name: "National Skill Training Institute (NSTI-W), Panipat", code: "NS20", city: "Panipat", state: "Haryana", sector: "Government", count: "8 Courses" },
    { name: "Govt. IToT, Jaipur, Rajasthan", code: "GO89", city: "Jaipur", state: "Rajasthan", sector: "Government", count: "6 Courses" },
    { name: "NSTI Mumbai (Vocational Training), Mumbai", code: "NSTI-MUM", city: "Mumbai", state: "Maharashtra", sector: "Government", count: "12 Courses" },
    { name: "NSTI Kolkata (Vocational Training), Kolkata", code: "NSTI-KOL", city: "Kolkata", state: "West Bengal", sector: "Government", count: "10 Courses" },
    { name: "NSTI Bengaluru, Bengaluru", code: "NSTI-BBL", city: "Bengaluru", state: "Karnataka", sector: "Government", count: "11 Courses" },
  ],
};

const pagesDir = './src/pages';
const files = Object.keys(streamCollegesData);

files.forEach(streamName => {
  const filePath = path.join(pagesDir, `${streamName}.jsx`);
  if (!fs.existsSync(filePath)) return;

  let code = fs.readFileSync(filePath, 'utf8');

  // 1. Remove collegesData import line if present
  code = code.replace("import { collegesData } from '../data/collegesData.js';\n", "");
  code = code.replace("import { collegesData } from '../data/collegesData.js';", "");

  // 2. Replace searchedcollegeList block with stream-specific JSX cards
  const startStr = '<div className={"searchedcollegeList"}>';
  const endStr = '<div className={"load__more__row"}>';

  const startIdx = code.indexOf(startStr);
  if (startIdx !== -1) {
    const afterStart = code.substring(startIdx + startStr.length);
    const endMarkerIdx = afterStart.indexOf(endStr);
    if (endMarkerIdx !== -1) {
      const endIdx = startIdx + startStr.length + endMarkerIdx;

      const items = streamCollegesData[streamName];
      let cardsHtml = items.map((item, index) => `
                    <div className={"college__card__new "} key={"${item.code || index}"} id={"search-${item.code || index}"}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={"https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={"${item.name}"} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink("/college/${item.code}")} title={"${item.name}"}>
                                {"${item.name}"}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {"${item.city}, ${item.state}"}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {"${item.sector}"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={"${item.name} Reviews"} href={allowedLink("/reviews")}>
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
                          {"${item.name} is a top accredited ${item.sector} institute located in ${item.city}, ${item.state}. Code: ${item.code}."}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={"${item.name} Courses"}>
                                  {"${item.count}"}
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
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={"${item.name}"}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-description={"${item.name}"}>{"View College"}</div>
                        </div>
                      </div>
                    </div>`).join('');

      const renderBlock = `<div className={"searchedcollegeList"}>${cardsHtml}\n              </div>\n              `;
      code = code.substring(0, startIdx) + renderBlock + code.substring(endIdx);
      fs.writeFileSync(filePath, code, 'utf8');
      console.log(`Successfully restored stream cards for ${streamName}.jsx`);
    }
  }
});
