import fs from 'fs';

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

// Helper to replace content inside a target container
function replaceContainerContent(filePath, importLine, containerStartStr, containerEndMarkerStr, renderBlockFn) {
  let code = fs.readFileSync(filePath, 'utf8');

  if (!code.includes(importLine)) {
    code = `${importLine}\n` + code;
  }

  const startIdx = code.indexOf(containerStartStr);
  if (startIdx === -1) {
    console.error(`Could not find ${containerStartStr} in ${filePath}`);
    return;
  }

  const afterStart = code.substring(startIdx + containerStartStr.length);
  const endMarkerIdx = afterStart.indexOf(containerEndMarkerStr);
  if (endMarkerIdx === -1) {
    console.error(`Could not find end marker ${containerEndMarkerStr} in ${filePath}`);
    return;
  }

  const endIdx = startIdx + containerStartStr.length + endMarkerIdx;
  const newContent = renderBlockFn();

  code = code.substring(0, startIdx) + newContent + code.substring(endIdx);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Successfully updated ${filePath}`);
}

// 1. Update Medical.jsx
replaceContainerContent(
  './src/pages/Medical.jsx',
  "import { collegesData } from '../data/collegesData.js';",
  '<div className={"searchedcollegeList"}>',
  '<div className={"load__more__row"}>',
  () => `<div className={"searchedcollegeList"}>
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
                          {\`\${item.name} is a premier \${item.sector || 'Private'} medical institute located in \${locationStr}. College Code: \${item.code || 'N/A'}. Affiliated with \${item.affiliation || item.name}.\`}
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
                                {"NEET / Entrance"}
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
              </div>\n              `
);

// 2. Update Pharmacy.jsx
replaceContainerContent(
  './src/pages/Pharmacy.jsx',
  "import { collegesData } from '../data/collegesData.js';",
  '<div className={"searchedcollegeList"}>',
  '<div className={"load__more__row"}>',
  () => `<div className={"searchedcollegeList"}>
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
                            src={item.thumbnailSignedUrl || item.thumbnail || "https://media.getmyuni.com/azure/college-image/small/jamia-hamdard-university-new-delhi.jpg"} 
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
                          {\`\${item.name} is a leading \${item.sector || 'Private'} pharmacy institute in \${locationStr}. Code: \${item.code || 'N/A'}.\`}
                        </p>
                      </div>
                      <div className={"highlight__cta__row"}>
                        <div className={"highlights__grid"}>
                          <div className={"highlight__div"}>
                            <h3 className={"highlight__name"}>{"Courses Offered"}</h3>
                            <span className={"highlight__value"}>
                              <h3>
                                <a title={\`\${item.name} Courses\`}>
                                  {\`\${item.coursesCount || 4} Courses\`}
                                </a>
                              </h3>
                            </span>
                          </div>
                          <div className={"highlight__div exam__accepted__div"}>
                            <h3 className={"highlight__name"}>{"Exam Accepted"}</h3>
                            <h3 className={"highlight__value"}>
                              <a target={"_blank"} href={allowedLink("/exams")}>
                                {"GPAT / Entrance"}
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
              </div>\n              `
);

// 3. Update Home.jsx
replaceContainerContent(
  './src/pages/Home.jsx',
  "import { collegesData } from '../data/collegesData.js';",
  '<div className={"customSliderCards homeFeaturedCollege"}>',
  '<section className={"indexSection pt-0"}>',
  () => `<div className={"customSliderCards homeFeaturedCollege"}>
                {collegesData.slice(0, 16).map((item, index) => {
                  const stateName = ${JSON.stringify(stateMap)}[item.state] || item.state || '';
                  const locationStr = \`\${item.city || item.district || ''}\${(item.city || item.district) && stateName ? ', ' : ''}\${stateName}\`;
                  return (
                    <a className={"displayCard"} key={item.id || index} href={allowedLink(\`/college/\${item.id}\`)}>
                      <figure>
                        <img 
                          loading={"lazy"} 
                          src={item.thumbnailSignedUrl || item.thumbnail || "https://media.getmyuni.com/azure/college-image/big/parul-university-gujarat.jpg"} 
                          alt={item.name} 
                          width={"275"} 
                          height={"206"} 
                          style={{ objectFit: 'cover', height: '160px', width: '100%' }}
                        />
                      </figure>
                      <div className={"textDiv pt-0"}>
                        <img 
                          loading={"lazy"} 
                          src={item.thumbnailSignedUrl || item.thumbnail || "https://media.getmyuni.com/azure/college-image/small/parul-university-gujarat.jpg"} 
                          className={"collegeLogo"} 
                          alt={item.name} 
                          width={"56"} 
                          height={"56"} 
                          style={{ objectFit: 'cover' }}
                        />
                        <p className={"widgetCardHeading"}>
                          {item.name}
                        </p>
                        <p className={"subText"}>
                          <span className={"spriteIcon locationIcon"}></span>
                          {locationStr}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>\n        `
);
