import fs from 'fs';
import path from 'path';

const stateMap = {
  'HR': 'Haryana',
  'RJ': 'Rajasthan',
  'TG': 'Telangana',
  'OR': 'Odisha',
  'JK': 'Jammu & Kashmir',
  'KA': 'Karnataka',
  'BR': 'Bihar',
  'ML': 'Meghalaya',
  'UP': 'Uttar Pradesh',
  'PB': 'Punjab',
  'MH': 'Maharashtra',
  'WB': 'West Bengal',
  'TR': 'Tripura',
  'HP': 'Himachal Pradesh',
  'JH': 'Jharkhand',
  'CT': 'Chhattisgarh',
  'AP': 'Andhra Pradesh',
  'GJ': 'Gujarat',
  'GA': 'Goa',
  'TN': 'Tamil Nadu',
  'MP': 'Madhya Pradesh',
  'KL': 'Kerala',
  'UT': 'Uttarakhand',
};

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') && f !== 'index.jsx' && f !== 'Logo.jsx');

console.log(`Found ${files.length} page files to update:`, files);

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  let updated = false;

  // 1. Direct text replacement for Download Brochure -> View College
  if (code.includes('Download Brochure')) {
    code = code.replaceAll('Download Brochure', 'View College');
    updated = true;
  }

  // 2. Ensure collegesData import if searchedcollegeList is present
  if (code.includes('<div className={"searchedcollegeList"}>')) {
    const importLine = "import { collegesData } from '../data/collegesData.js';";
    if (!code.includes(importLine)) {
      code = `${importLine}\n` + code;
    }

    const startStr = '<div className={"searchedcollegeList"}>';
    const endStr = '<div className={"load__more__row"}>';

    const startIdx = code.indexOf(startStr);
    if (startIdx !== -1) {
      const afterStart = code.substring(startIdx + startStr.length);
      const endMarkerIdx = afterStart.indexOf(endStr);
      if (endMarkerIdx !== -1) {
        const endIdx = startIdx + startStr.length + endMarkerIdx;

        const renderBlock = `<div className={"searchedcollegeList"}>
                {collegesData.map((item, index) => {
                  const stateName = ${JSON.stringify(stateMap)}[item.state] || item.state || '';
                  const locationStr = \`\${item.city || item.district || ''}\${(item.city || item.district) && stateName ? ', ' : ''}\${stateName}\`;
                  return (
                    <div className={"college__card__new "} key={item.id || index} id={\`search-\${item.code || index}\`}>
                      <div className={"card__header__row"}>
                        <div className={"college__detail__grid"}>
                          <img 
                            width={"56"} 
                            height={"56"} 
                            className={"college__image"} 
                            src={item.thumbnailSignedUrl || item.thumbnail || "https://media.getmyuni.com/azure/college-image/small/university-college-of-medical-sciences-ucms-new-delhi.jpg"} 
                            alt={item.name} 
                          />
                          <div className={"college__detail__row"}>
                            <h2 className={"college__name"}>
                              <a href={allowedLink(\`/college/\${item.id}\`)} title={item.name} data-hide={item.code}>
                                {item.name}
                              </a>
                            </h2>
                            <div className={"detail__list__mobile"}>
                              <span className={"list__style college__location"}>
                                {locationStr}
                              </span>
                              <span className={"list__style college__affiliation"}>
                                {item.sector || "Private"}
                              </span>
                              <a className={"list__style list__style__rating"} target={"_blank"} title={\`\${item.name} Reviews\`} href={allowedLink(\`/college/\${item.id}/reviews\`)}>
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
                          {\`\${item.name} is a premier \${item.sector || 'Private'} institute located in \${locationStr}. College Code: \${item.code || 'N/A'}.\`}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={\`\${item.name} Courses\`}>
                                  {\`\${item.coursesCount || 6} Courses\`}
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
                              <span className={"highlight__value"}>{item.genderAcceptance || "Co-ed"}</span>
                            </h3>
                          </div>
                          <div className={"highlight__div"}></div>
                        </div>
                        <div className={"cta__grid"}>
                          <div className={"cta__div lead-cta-college-filter-2 leadFilterData apply-now-btn"} data-title={"Apply Now"} data-description={item.name}>{"Apply Now"}</div>
                          <div className={"cta__div lead-cta-college-filter-1 view-details-btn"} data-title={"View Details"} data-college-id={item.id} data-description={item.name}>{"View College"}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>\n              `;

        code = code.substring(0, startIdx) + renderBlock + code.substring(endIdx);
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Successfully updated ${file}`);
  } else {
    console.log(`No changes needed for ${file}`);
  }
});
