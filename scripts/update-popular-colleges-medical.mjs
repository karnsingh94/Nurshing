import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const medicalCollegesCards = `<h2>
              {"Popular Medical Colleges"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <i className={"spriteIcon scrollLeft over"}></i>
              <i className={"spriteIcon scrollRight"}></i>
              <div className={"customSliderCards"}>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/all-india-institute-of-medical-sciences-aiims-new-delhi.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/all-india-institute-of-medical-sciences-aiims-new-delhi.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"AIIMS New Delhi"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"New Delhi, Delhi NCR"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/post-graduate-institute-of-medical-education-and-research-pgimer-chandigarh.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/post-graduate-institute-of-medical-education-and-research-pgimer-chandigarh.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"PGIMER Chandigarh"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Chandigarh, Punjab"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/christian-medical-college-cmc-vellore.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/christian-medical-college-cmc-vellore.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"CMC Vellore"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Vellore, Tamil Nadu"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://azzunique-fintech-node.s3.ap-south-1.amazonaws.com/nursing-website/1780909495115_dbe5334b-4078-4200-bbd8-04cd189bcc25.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://azzunique-fintech-node.s3.ap-south-1.amazonaws.com/nursing-website/1780909495115_dbe5334b-4078-4200-bbd8-04cd189bcc25.webp"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"NSTI Panipat Medical & Tech"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Panipat, Haryana"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/jawaharlal-institute-of-postgraduate-medical-education-and-research-jipmer-puducherry.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/jawaharlal-institute-of-postgraduate-medical-education-and-research-jipmer-puducherry.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"JIPMER Puducherry"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Puducherry, Union Territory"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/king-georges-medical-university-kgmu-lucknow.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/king-georges-medical-university-kgmu-lucknow.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"KGMU Lucknow"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Lucknow, Uttar Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/kasturba-medical-college-kmc-manipal.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/kasturba-medical-college-kmc-manipal.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"KMC Manipal"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Manipal, Karnataka"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/madras-medical-college-mmc-chennai.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/madras-medical-college-mmc-chennai.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Madras Medical College"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Chennai, Tamil Nadu"}
                    </p>
                  </div>
                </a>
              </div>
            </div>`;

function updatePopularCollegesSection() {
  const files = [
    path.join(rootDir, 'src', 'pages', 'Home.jsx'),
    path.join(rootDir, 'src', 'pages', 'Logo.jsx')
  ];

  files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace popular colleges section (IIT Delhi, IIT Bombay, etc.) with Medical Colleges section
    const popularRegex = /<h2>\s*\{"Popular Colleges"\}\s*<\/h2>[\s\S]*?<\/div>\s*<\/div>/g;

    if (popularRegex.test(content)) {
      content = content.replace(popularRegex, medicalCollegesCards);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated Popular Colleges section to Medical Colleges in ${path.basename(filePath)}`);
    } else {
      console.log(`Regex not matched in ${path.basename(filePath)}`);
    }
  });
}

updatePopularCollegesSection();
