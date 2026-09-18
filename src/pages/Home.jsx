import CollegeImage from '../components/CollegeImage.jsx';
import CollegeLogo from '../components/CollegeLogo.jsx';
import { collegesData } from '../data/collegesData.js';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';

export const page = {
  name: "Home",
  sourceFile: "home.html",
  slug: "home",
  title: "citsAdmission.com - Explore Top Colleges, Courses, Fees and Exams",
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
        "content": "Get Detailed Information on Top Colleges, Courses & Exams in India.Get Alerts on Results,Cutoff,Admission, Placements, Rankings and more."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "citsAdmission.com - Explore Top Colleges, Courses, Fees and Exams"
      },
      {
        "property": "og:url",
        "content": "/"
      },
      {
        "property": "og:site_name",
        "content": "citsAdmission.com"
      },
      {
        "property": "og:description",
        "content": "Get Detailed Information on Top Colleges, Courses & Exams in India.Get Alerts on Results,Cutoff,Admission, Placements, Rankings and more."
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
        "content": "/"
      },
      {
        "property": "twitter:title",
        "content": "citsAdmission.com - Explore Top Colleges, Courses, Fees and Exams"
      },
      {
        "property": "twitter:description",
        "content": "Get Detailed Information on Top Colleges, Courses & Exams in India.Get Alerts on Results,Cutoff,Admission, Placements, Rankings and more."
      },
      {
        "property": "og:image",
        "content": "/images/imported/69670b806b84500c.webp"
      },
      {
        "property": "twitter:image",
        "content": "/images/imported/69670b806b84500c.webp"
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
        "href": "/brand-logo.svg"
      },
      {
        "rel": "icon",
        "href": "/brand-logo.svg",
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
        "href": "/site/index",
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
        "href": "/yas/css/version2/min/search.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/home_new.css?v=1777964297",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdnjs.cloudflare.com/ajax/libs/jqvmap/1.5.1/jqvmap.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",
        "rel": "stylesheet"
      },
      {
        "href": "/yas/css/version2/min/getmyUniHomeFooter.css?v=1777964297",
        "rel": "stylesheet"
      }
    ],
    "styles": [
  
    ]
  },
};

function HomeContent() {
  return (
    <>
      <div className={"blueBgDiv mobileOnly"}></div>
      <div className={"indexPage"}>
        <section className={"indexSection p-0"}>
          <div className={"carouselSection"}>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/69670b806b84500c.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Chandigarh University, Uttar Pradesh"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Chandigarh University, Uttar Pradesh"} rel={"nofollow"}>
                {"Chandigarh University, Uttar Pradesh"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/d12f408d72312ebd.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Parul University, Vadodara"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Parul University, Vadodara"} rel={"nofollow"}>
                {"Parul University, Vadodara"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/819f4fbbe542300f.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Lovely Professional University- LPU Jalandhar"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Lovely Professional University- LPU Jalandhar"} rel={"nofollow"}>
                {"Lovely Professional University- LPU Jalandhar"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/54ff4d90c55f7d73.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Indian Institute of Technology, [IIT] Guwahati "} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Indian Institute of Technology, [IIT] Guwahati "}>
                {"Indian Institute of Technology, [IIT] Guwahati"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/da3ee65d3100f65f.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Galgotias University, Noida"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Galgotias University, Noida"} rel={"nofollow"}>
                {"Galgotias University, Noida"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/f93e5ff5f38453a0.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Indian Institute of Science, [IIS] Bangalore"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Indian Institute of Science, [IIS] Bangalore"}>
                {"Indian Institute of Science, [IIS] Bangalore"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"/images/imported/90d71934e6024c4c.webp"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"IIM Lucknow - Indian Institute of Management"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about IIM Lucknow - Indian Institute of Management"}>
                {"IIM Lucknow - Indian Institute of Management"}
              </a>
            </div>
          </div>
          <div className={"bannerContent"}>
            <h1>
              {"citsAdmission.com - Where Educational Choices Are Made Easy"}
            </h1>
            <div className={"searchSection"}>
              <div>
                <ul className={"bannerTabButtons"}>
                  <li className={"tab-nav-link tabLink"} data-target={"#college-tab"}>
                    {"Colleges"}
                  </li>
                  <li className={"tab-nav-link"} data-target={"#exams-tab"}>
                    {"Exams"}
                  </li>
                  <li className={"tab-nav-link"} data-target={"#course-tab"}>
                    {"Courses"}
                  </li>
                </ul>
              </div>
              <div className={"inputSection"}>
                <div id={"college-tab"} className={"tab-content activeTab"}>
                  <div className={"row m-0"}>
                    <input type={"text"} placeholder={"Enter College Name"} spellCheck={"false"} className={"college-name-text-box foucus-search"} autoComplete={"off"} />
                    <button className={"primaryBtn searchIcon-home"}>
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly"}>
                        {"Search"}
                      </span>
                    </button>
                  </div>
                </div>
                <div id={"exams-tab"} className={"tab-content"}>
                  <div className={"row m-0"}>
                    <input type={"text"} placeholder={"Enter Exam Name eg: JEE,CAT,XAT"} className={"exam-name-text-box foucus-search"} />
                    <button className={"primaryBtn searchIcon-home"}>
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly"}>
                        {"Search"}
                      </span>
                    </button>
                  </div>
                </div>
                <div id={"course-tab"} className={"tab-content"}>
                  <div className={"row m-0"}>
                    <input type={"text"} placeholder={"Enter Course Name"} className={"course-name-text-box foucus-search"} />
                    <button className={"primaryBtn searchIcon-home"}>
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly"}>
                        {"Search"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"trending"}></div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection pb-0"}>
          <div className={"container"}>
            <h2>
              {"Trending Now"}
            </h2>
            <div className={"trendingTopicsList"}>
              <ul className={"marquee"}>
                <li>
                  <a >
                    {"NEET UG Round 1 Counselling 2025 Registration Begins"}
                  </a>
                </li>
                <li>
                  <a >
                    {"Special BSTC Colleges in Rajasthan 2025"}
                  </a>
                </li>
                <li>
                  <a >
                    {"CLAT 2026 Exam Dates Released"}
                  </a>
                </li>
                <li>
                  <a >
                    {"Colleges for 60 to 70 Percentile in JEE Main 2025"}
                  </a>
                </li>
                <li>
                  <a >
                    {"Colleges for 80 to 90 percentile in JEE Main"}
                  </a>
                </li>
                <li>
                  <a >
                    {"JEE Main marks vs rank vs percentile"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={"indexSection"}>
          <div className={"container"}>
            <h2>
              {"Featured Colleges"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <i className={"spriteIcon scrollLeft featuredScrollLeft"}></i>
              <i className={"spriteIcon scrollRight featuredScrollRight"}></i>
              <div className={"customSliderCards homeFeaturedCollege"}>
                {collegesData.slice(0, 16).map((item, index) => {
                  const stateName = {"HR":"Haryana","RJ":"Rajasthan","TG":"Telangana","OR":"Odisha","JK":"Jammu & Kashmir","KA":"Karnataka","BR":"Bihar","ML":"Meghalaya","UP":"Uttar Pradesh","PB":"Punjab","MH":"Maharashtra","WB":"West Bengal","TR":"Tripura","HP":"Himachal Pradesh","JH":"Jharkhand","CT":"Chhattisgarh","AP":"Andhra Pradesh","GJ":"Gujarat","GA":"Goa","TN":"Tamil Nadu","MP":"Madhya Pradesh","KL":"Kerala","UT":"Uttarakhand"}[item.state] || item.state || '';
                  const locationStr = `${item.city || item.district || ''}${(item.city || item.district) && stateName ? ', ' : ''}${stateName}`;
                  return (
                    <a className={"displayCard"} key={item.id || index} href={allowedLink(`/college/${item.id}`)}>
                      <figure>
                        <CollegeImage college={item} 
                          loading={"lazy"} 
                          alt={item.name} 
                          width={"275"} 
                          height={"206"} 
                          style={{ objectFit: 'cover', height: '160px', width: '100%' }}
                        />
                      </figure>
                      <div className={"textDiv pt-0"}>
                        <CollegeLogo college={item} className={"collegeLogo"} size={56} />
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
        </section>
        <section className={"indexSection pt-0"}>
          <div className={"container"}>
            <h2>
              {"Select Your Dream College In Your Desired City"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <i className={"spriteIcon scrollLeft over"}></i>
              <i className={"spriteIcon scrollRight"}></i>
              <div className={"customSliderList"}>
                <a className={"sliderCard"} href="/city-colleges?city=Bangalore" data-city="Bangalore" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/046d9cf7e2d349b9.webp"} width={"276"} height={"207"} alt={"img"} />
                  <p className={"cityName"}>
                    {"Bangalore"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Chennai" data-city="Chennai" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/d1cbdd6277777130.webp"} width={"276"} height={"207"} alt={"img"} />
                  <p className={"cityName"}>
                    {"Chennai"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Delhi" data-city="Delhi" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/116e4c7edefec305.webp"} width={"276"} height={"207"} alt={"img"} />
                  <p className={"cityName"}>
                    {"Delhi"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Mumbai" data-city="Mumbai" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/7e5f71ce8f040395.webp"} width={"276"} height={"207"} alt={"img"} />
                  <p className={"cityName"}>
                    {"Mumbai"}
                  </p>
                </a>
                <a className={"sliderCard"} href="/city-colleges?city=Pune" data-city="Pune" style={{ cursor: 'pointer' }}>
                  <img loading={"lazy"} src={"/images/imported/90e00f695743c668.webp"} width={"276"} height={"207"} alt={"img"} />
                  <p className={"cityName"}>
                    {"Pune"}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Explore Colleges, Courses & Exams That Are Curated For You"}
            </h2>
            <div className={"collegesWithCategory"}>
              <ul>
                <li className={"tab-nav-link tabLink"} data-target={"#colleges-category"}>
                  {"Colleges"}
                </li>
                <li className={"tab-nav-link"} data-target={"#exams-category"}>
                  {"Exams"}
                </li>
                <li className={"tab-nav-link"} data-target={"#courses-category"}>
                  {"Courses"}
                </li>
              </ul>
            </div>
            <div className={"collegesWithCategoryData"}>
              <div id={"colleges-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards"}>
                  <a  className={"dataCard"}>
                    <span title={"Agriculture Exam"} className={"indexSprite agriculture"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Agriculture"}
                      </p>
                      <p className={"count"}>
                        {"12 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Animation Exam"} className={"indexSprite animation"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Animation"}
                      </p>
                      <p className={"count"}>
                        {"8 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/architecture")} className={"dataCard"}>
                    <span title={"Architecture Exam"} className={"indexSprite architecture"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Architecture"}
                      </p>
                      <p className={"count"}>
                        {"16 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/arts")} className={"dataCard"}>
                    <span title={"Arts Exam"} className={"indexSprite arts"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Arts"}
                      </p>
                      <p className={"count"}>
                        {"35 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Aviation Exam"} className={"indexSprite aviation"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Aviation"}
                      </p>
                      <p className={"count"}>
                        {"6 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/commerce")} className={"dataCard"}>
                    <span title={"Commerce Exam"} className={"indexSprite commerce"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Commerce"}
                      </p>
                      <p className={"count"}>
                        {"42 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/computer")} className={"dataCard"}>
                    <span title={"Computer Exam"} className={"indexSprite computer"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Computer"}
                      </p>
                      <p className={"count"}>
                        {"58 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/dental")} className={"dataCard"}>
                    <span title={"Dental Exam"} className={"indexSprite dental"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Dental"}
                      </p>
                      <p className={"count"}>
                        {"14 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/design")} className={"dataCard"}>
                    <span title={"Design Exam"} className={"indexSprite design"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Design"}
                      </p>
                      <p className={"count"}>
                        {"24 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/education")} className={"dataCard"}>
                    <span title={"Education Exam"} className={"indexSprite education"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Education"}
                      </p>
                      <p className={"count"}>
                        {"32 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/engineering")} className={"dataCard"}>
                    <span title={"Engineering Exam"} className={"indexSprite engineering"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Engineering"}
                      </p>
                      <p className={"count"}>
                        {"128 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/hospitality")} className={"dataCard"}>
                    <span title={"Hotel Management Exam"} className={"indexSprite hotel-management"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Hotel Management"}
                      </p>
                      <p className={"count"}>
                        {"22 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/law")} className={"dataCard"}>
                    <span title={"Law Exam"} className={"indexSprite law"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Law"}
                      </p>
                      <p className={"count"}>
                        {"28 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/management")} className={"dataCard"}>
                    <span title={"Management Exam"} className={"indexSprite management"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Management"}
                      </p>
                      <p className={"count"}>
                        {"64 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Mass Communication Exam"} className={"indexSprite mass-communication"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Mass Communication"}
                      </p>
                      <p className={"count"}>
                        {"18 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/medical")} className={"dataCard"}>
                    <span title={"Medical Exam"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Medical"}
                      </p>
                      <p className={"count"}>
                        {"45 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/paramedical")} className={"dataCard"}>
                    <span title={"Paramedical Exam"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Paramedical"}
                      </p>
                      <p className={"count"}>
                        {"36 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/pharmacy")} className={"dataCard"}>
                    <span title={"Pharmacy Exam"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Pharmacy"}
                      </p>
                      <p className={"count"}>
                        {"40 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/science")} className={"dataCard"}>
                    <span title={"Science Exam"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Science"}
                      </p>
                      <p className={"count"}>
                        {"52 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/veterinary")} className={"dataCard"}>
                    <span title={"Veterinary Exam"} className={"indexSprite veterinary"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Veterinary"}
                      </p>
                      <p className={"count"}>
                        {"15 Colleges"}
                      </p>
                    </div>
                  </a>
                  <a href={allowedLink("/vocational")} className={"dataCard"}>
                    <span title={"Vocational Courses Exam"} className={"indexSprite vocational-courses"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Vocational Courses"}
                      </p>
                      <p className={"count"}>
                        {"128 Colleges"}
                      </p>
                    </div>
                  </a>
                </div>
                <div className={"col-12 text-center"}>
                  <button className={"primaryBtn viewMoreCards"}>
                    {"View More"}
                  </button>
                </div>
              </div>
              <div id={"exams-category"} className={"tab-content"}>
                <div className={"row limitCards"}>
                  <a  className={"dataCard"}>
                    <span title={"Agriculture Exam"} className={"indexSprite agriculture"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Agriculture"}
                      </p>
                      <p className={"count"}>
                        {"94 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Architecture Exam"} className={"indexSprite architecture"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Architecture"}
                      </p>
                      <p className={"count"}>
                        {"33 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Arts Exam"} className={"indexSprite arts"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Arts"}
                      </p>
                      <p className={"count"}>
                        {"64 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Commerce Exam"} className={"indexSprite commerce"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Commerce"}
                      </p>
                      <p className={"count"}>
                        {"54 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Computer Exam"} className={"indexSprite computer"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Computer"}
                      </p>
                      <p className={"count"}>
                        {"49 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Dental Exam"} className={"indexSprite dental"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Dental"}
                      </p>
                      <p className={"count"}>
                        {"10 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Design Exam"} className={"indexSprite design"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Design"}
                      </p>
                      <p className={"count"}>
                        {"38 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Education Exam"} className={"indexSprite education"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Education"}
                      </p>
                      <p className={"count"}>
                        {"128 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Engineering Exam"} className={"indexSprite engineering"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Engineering"}
                      </p>
                      <p className={"count"}>
                        {"184 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Hotel Management Exam"} className={"indexSprite hotel-management"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Hotel Management"}
                      </p>
                      <p className={"count"}>
                        {"16 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Law Exam"} className={"indexSprite law"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Law"}
                      </p>
                      <p className={"count"}>
                        {"64 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Management Exam"} className={"indexSprite management"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Management"}
                      </p>
                      <p className={"count"}>
                        {"121 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Mass Communication Exam"} className={"indexSprite mass-communication"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Mass Communication"}
                      </p>
                      <p className={"count"}>
                        {"13 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Medical Exam"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Medical"}
                      </p>
                      <p className={"count"}>
                        {"47 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Paramedical Exam"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Paramedical"}
                      </p>
                      <p className={"count"}>
                        {"16 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Pharmacy Exam"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Pharmacy"}
                      </p>
                      <p className={"count"}>
                        {"56 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Science Exam"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Science"}
                      </p>
                      <p className={"count"}>
                        {"113 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Veterinary Exam"} className={"indexSprite veterinary"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Veterinary"}
                      </p>
                      <p className={"count"}>
                        {"8 Exams"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Vocational Courses Exam"} className={"indexSprite vocational-courses"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Vocational Courses"}
                      </p>
                      <p className={"count"}>
                        {"89 Exams"}
                      </p>
                    </div>
                  </a>
                </div>
                <div className={"col-12 text-center"}>
                  <button className={"primaryBtn viewMoreCards"}>
                    {"View More"}
                  </button>
                </div>
              </div>
              <div id={"courses-category"} className={"tab-content"}>
                <div className={"row limitCards"}>
                  <a  className={"dataCard"}>
                    <span title={"Paramedical Exam"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Paramedical"}
                      </p>
                      <p className={"count"}>
                        {"20 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Architecture Exam"} className={"indexSprite architecture"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Architecture"}
                      </p>
                      <p className={"count"}>
                        {"15 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Arts Exam"} className={"indexSprite arts"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Arts"}
                      </p>
                      <p className={"count"}>
                        {"187 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Law Exam"} className={"indexSprite law"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Law"}
                      </p>
                      <p className={"count"}>
                        {"26 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Medical Exam"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Medical"}
                      </p>
                      <p className={"count"}>
                        {"92 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Management Exam"} className={"indexSprite management"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Management"}
                      </p>
                      <p className={"count"}>
                        {"207 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Engineering Exam"} className={"indexSprite engineering"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Engineering"}
                      </p>
                      <p className={"count"}>
                        {"141 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Commerce Exam"} className={"indexSprite commerce"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Commerce"}
                      </p>
                      <p className={"count"}>
                        {"76 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Computer Exam"} className={"indexSprite computer"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Computer"}
                      </p>
                      <p className={"count"}>
                        {"26 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Dental Exam"} className={"indexSprite dental"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Dental"}
                      </p>
                      <p className={"count"}>
                        {"9 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Science Exam"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Science"}
                      </p>
                      <p className={"count"}>
                        {"212 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Hotel Management Exam"} className={"indexSprite hotel-management"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Hotel Management"}
                      </p>
                      <p className={"count"}>
                        {"11 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Pharmacy Exam"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Pharmacy"}
                      </p>
                      <p className={"count"}>
                        {"16 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Mass Communication Exam"} className={"indexSprite mass-communication"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Mass Communication"}
                      </p>
                      <p className={"count"}>
                        {"13 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Education Exam"} className={"indexSprite education"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Education"}
                      </p>
                      <p className={"count"}>
                        {"51 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Veterinary Exam"} className={"indexSprite veterinary"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Veterinary"}
                      </p>
                      <p className={"count"}>
                        {"4 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Vocational Courses Exam"} className={"indexSprite vocational-courses"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Vocational Courses"}
                      </p>
                      <p className={"count"}>
                        {"2 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Design Exam"} className={"indexSprite design"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Design"}
                      </p>
                      <p className={"count"}>
                        {"18 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Animation Exam"} className={"indexSprite animation"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Animation"}
                      </p>
                      <p className={"count"}>
                        {"5 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Agriculture Exam"} className={"indexSprite agriculture"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Agriculture"}
                      </p>
                      <p className={"count"}>
                        {"8 Courses"}
                      </p>
                    </div>
                  </a>
                  <a  className={"dataCard"}>
                    <span title={"Aviation Exam"} className={"indexSprite aviation"}></span>
                    <div className={"dataCardText"}>
                      <p>
                        {"Aviation"}
                      </p>
                      <p className={"count"}>
                        {"6 Courses"}
                      </p>
                    </div>
                  </a>
                </div>
                <div className={"col-12 text-center"}>
                  <button className={"primaryBtn viewMoreCards"}>
                    {"View More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection"}>
          <div className={"container"}>
            <h2>
              {"Study Abroad Options"}
            </h2>
            <p className={"sectionSubheading"}>
              {"Choose from the top study destinations that the world has to offer. Be informed about universities, rankings, admission details, and exams."}
            </p>
            <div className={"row justify-content-center"}>
              <div className={"col-12"}>
                <div className={"studyAbroad"}>
                  <a className={"studyAbroadCard"} href={allowedLink("/canada")}>
                    <img src={"/images/imported/f547d7c7b088b47c.webp"} alt={"CANADA"} title={"CANADA"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"CANADA"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/uk")}>
                    <img src={"/images/imported/fcd549ac12244739.webp"} alt={"UK"} title={"UK"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"UK"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/usa")}>
                    <img src={"/images/imported/18e0e99d757ced7a.webp"} alt={"USA"} title={"USA"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"USA"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/australia")}>
                    <img src={"/images/imported/70b20fad4848bb5e.webp"} alt={"AUSTRALIA"} title={"AUSTRALIA"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"AUSTRALIA"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/germany")}>
                    <img src={"/images/imported/41a2c411306d1485.webp"} alt={"GERMANY"} title={"GERMANY"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"GERMANY"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection articleIndexBox"}>
          <div className={"container"}>
            <div className={"articleRelataedLinks"}>
              <p className={"btn_left over"}>
                <i className={"spriteIcon left_angle"}></i>
              </p>
              <p className={"btn_right"}>
                <i className={"spriteIcon right_angle"}></i>
              </p>
              <ul>
                <li className={"homePageArticle"}>
                  <a className={"activeLink"}  data-tab={"agriculture"} title={"Agriculture"}>
                    {"Agriculture"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"animation"} title={"Animation"}>
                    {"Animation"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"architecture"} title={"Architecture"}>
                    {"Architecture"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"arts"} title={"Arts"}>
                    {"Arts"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"aviation"} title={"Aviation"}>
                    {"Aviation"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"commerce"} title={"Commerce"}>
                    {"Commerce"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"computer"} title={"Computer"}>
                    {"Computer"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"dental"} title={"Dental"}>
                    {"Dental"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"design"} title={"Design"}>
                    {"Design"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"education"} title={"Education"}>
                    {"Education"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"engineering"} title={"Engineering"}>
                    {"Engineering"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"hotel-management"} title={"Hotel"}>
                    {"Hotel Management"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"law"} title={"Law"}>
                    {"Law"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"management"} title={"Management"}>
                    {"Management"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"mass-communication"} title={"Mass"}>
                    {"Mass Communication"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"medical"} title={"Medical"}>
                    {"Medical"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"paramedical"} title={"Paramedical"}>
                    {"Paramedical"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"pharmacy"} title={"Pharmacy"}>
                    {"Pharmacy"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"science"} title={"Science"}>
                    {"Science"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"veterinary"} title={"Veterinary"}>
                    {"Veterinary"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"vocational-courses"} title={"Vocational"}>
                    {"Vocational Courses"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"other"} title={"Other"}>
                    {"Other"}
                  </a>
                </li>
              </ul>
            </div>
            <div className={"articleRelatedCtn"}>
              <div className={"quickLinks"}>
                <h2>
                  {"Recent Article"}
                </h2>
                <div className={"loader"} style={{ display: "none" }}>
                  <ul id={"recentArticleHome1"}>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul id={"recentArticleHome"}></ul>
              </div>
              <div className={"verticalLine"}></div>
              <div className={"quickLinks"}>
                <h2>
                  {"Popular Article"}
                </h2>
                <div className={"loader"} style={{ display: "none" }}>
                  <ul id={"popularArticleHome1"}>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={"animate"}></div>
                        <div className={"animate"}></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul id={"popularArticleHome"}></ul>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Trending Exams"}
            </h2>
            <div className={"trendingBtnSection"}>
              <button data-entity={"exam"} data-entityid={"85"} className={"basicCta exam-tab"}>
                {"CLAT"}
              </button>
              <button data-entity={"exam"} data-entityid={"21"} className={"basicCta exam-tab"}>
                {"CAT"}
              </button>
              <button data-entity={"exam"} data-entityid={"107"} className={"basicCta exam-tab"}>
                {"NEET"}
              </button>
              <button data-entity={"exam"} data-entityid={"1"} className={"basicCta exam-tab"}>
                {"JEE Main"}
              </button>
              <button data-entity={"exam"} data-entityid={"2"} className={"basicCta exam-tab"}>
                {"JEE Advanced"}
              </button>
              <button data-entity={"exam"} data-entityid={"9"} className={"basicCta exam-tab"}>
                {"WBJEE"}
              </button>
              <button data-entity={"exam"} data-entityid={"97"} className={"basicCta exam-tab"}>
                {"CUET"}
              </button>
              <button data-entity={"exam"} data-entityid={"13"} className={"basicCta exam-tab"}>
                {"AP EAMCET"}
              </button>
              <button data-entity={"exam"} data-entityid={"74"} className={"basicCta exam-tab"}>
                {"TS EAMCET"}
              </button>
              <button data-entity={"exam"} data-entityid={"142"} className={"basicCta exam-tab"}>
                {"TS LAWCET"}
              </button>
            </div>
          </div>
          <div className={"container mt-5"}>
            <div className={"collegesWithCategoryData"}>
              <div id={"entity-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards trendingExamCardList"}>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} href={allowedLink("/exams/clat")}>
                      <p>
                        {"CLAT 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CLAT Mock Test 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CLAT Exam Pattern 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CLAT Syllabus 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CLAT Exam Dates 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CAT Exam Dates 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CAT Syllabus 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CAT Exam Pattern 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"CAT Mock Test 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} href={allowedLink("/exams/cat")}>
                      <p>
                        {"CAT 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"NEET Mock Test 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS LAWCET Exam Dates 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"NEET Syllabus 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"NEET Exam Dates 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"JEE Main Mock Test 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"JEE Main Syllabus 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"JEE Main Exam Dates 2025"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} href={allowedLink("/exams/jee-advanced")}>
                      <p>
                        {"JEE Advanced 2025"}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection "}>
          <div className={"container"}>
            <h2>
              {"Trending Courses"}
            </h2>
            <div className={"trendingBtnSection"}>
              <button data-entity={"course"} data-entityid={"89"} className={"basicCta exam-tab"}>
                {"B.Ed"}
              </button>
              <button data-entity={"course"} data-entityid={"8"} className={"basicCta exam-tab"}>
                {"BBA"}
              </button>
              <button data-entity={"course"} data-entityid={"15"} className={"basicCta exam-tab"}>
                {"BCA"}
              </button>
              <button data-entity={"course"} data-entityid={"87"} className={"basicCta exam-tab"}>
                {"BCom"}
              </button>
              <button data-entity={"course"} data-entityid={"493"} className={"basicCta exam-tab"}>
                {"MBA in Finance"}
              </button>
              <button data-entity={"course"} data-entityid={"56"} className={"basicCta exam-tab"}>
                {"MCA"}
              </button>
              <button data-entity={"course"} data-entityid={"580"} className={"basicCta exam-tab"}>
                {"BSc Nursing"}
              </button>
              <button data-entity={"course"} data-entityid={"95"} className={"basicCta exam-tab"}>
                {"MBA"}
              </button>
              <button data-entity={"course"} data-entityid={"92"} className={"basicCta exam-tab"}>
                {"BTech"}
              </button>
              <button data-entity={"course"} data-entityid={"90"} className={"basicCta exam-tab"}>
                {"BSc"}
              </button>
            </div>
          </div>
          <div className={"container mt-5"}>
            <div className={"collegesWithCategoryData"}>
              <div id={"entity-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards trendingCourseCardList"}>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BBA Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Nursing Jobs"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Nursing Syllabus"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Nursing Course"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"MCA Jobs"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"MCA Syllabus"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"MCA Course"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"MBA in Finance Jobs"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"MBA in Finance Syllabus"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"MBA in Finance Course"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BCom Specialization"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BCom Fees"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BCom Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Syllabus"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Jobs"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Fees"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"BSc Specialization"}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Top School Exams in India"}
            </h2>
            <div className={"trendingBtnSection"}>
              <button data-entity={"board"} data-entityid={"58"} className={"basicCta exam-tab"}>
                {"Tamil Nadu 10th"}
              </button>
              <button data-entity={"board"} data-entityid={"60"} className={"basicCta exam-tab"}>
                {"TS Intermediate"}
              </button>
              <button data-entity={"board"} data-entityid={"61"} className={"basicCta exam-tab"}>
                {"TS SSC"}
              </button>
              <button data-entity={"board"} data-entityid={"31"} className={"basicCta exam-tab"}>
                {"Karnataka SSLC"}
              </button>
              <button data-entity={"board"} data-entityid={"34"} className={"basicCta exam-tab"}>
                {"Kerala Plus Two"}
              </button>
              <button data-entity={"board"} data-entityid={"33"} className={"basicCta exam-tab"}>
                {"Kerala SSLC"}
              </button>
              <button data-entity={"board"} data-entityid={"57"} className={"basicCta exam-tab"}>
                {"Tamil Nadu 12th"}
              </button>
              <button data-entity={"board"} data-entityid={"53"} className={"basicCta exam-tab"}>
                {"RBSE 10th"}
              </button>
              <button data-entity={"board"} data-entityid={"39"} className={"basicCta exam-tab"}>
                {"MPBSE 12th"}
              </button>
              <button data-entity={"board"} data-entityid={"38"} className={"basicCta exam-tab"}>
                {"MPBSE 10th"}
              </button>
              <button data-entity={"board"} data-entityid={"30"} className={"basicCta exam-tab"}>
                {"Karnataka 2nd PUC"}
              </button>
              <button data-entity={"board"} data-entityid={"37"} className={"basicCta exam-tab"}>
                {"Maharashtra SSC"}
              </button>
              <button data-entity={"board"} data-entityid={"8"} className={"basicCta exam-tab"}>
                {"BSEB 12th"}
              </button>
              <button data-entity={"board"} data-entityid={"9"} className={"basicCta exam-tab"}>
                {"BSEB 10th"}
              </button>
              <button data-entity={"board"} data-entityid={"54"} className={"basicCta exam-tab"}>
                {"RBSE 12th"}
              </button>
              <button data-entity={"board"} data-entityid={"64"} className={"basicCta exam-tab"}>
                {"UP 10th"}
              </button>
              <button data-entity={"board"} data-entityid={"36"} className={"basicCta exam-tab"}>
                {"Maharashtra HSC"}
              </button>
              <button data-entity={"board"} data-entityid={"65"} className={"basicCta exam-tab"}>
                {"UP 12th"}
              </button>
              <button data-entity={"board"} data-entityid={"76"} className={"basicCta exam-tab"}>
                {"CBSE 10th"}
              </button>
              <button data-entity={"board"} data-entityid={"77"} className={"basicCta exam-tab"}>
                {"CBSE 12th"}
              </button>
            </div>
          </div>
          <div className={"container mt-5"}>
            <div className={"collegesWithCategoryData"}>
              <div id={"entity-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards trendingBoardCardList"}>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 12th Time Table 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 12th Hall Ticket 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 12th Syllabus 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 12th Preparation Tips 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 10th Exam Pattern 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 10th Time Table 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 10th Hall Ticket 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Tamil Nadu Class 10th Syllabus 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS Intermediate Exam Pattern 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS Intermediate Time Table 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS Intermediate Hall Ticket 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS Intermediate Syllabus 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS Intermediate Preparation Tips 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS SSC Exam Pattern 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS SSC Time Table 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS SSC Hall Ticket 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"TS SSC Syllabus 2026"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"} >
                      <p>
                        {"Karnataka 2nd PUC Time Table 2026"}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection"}>
          <div className={"container"}>
            <h2>
              {"Popular Medical Colleges"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <i className={"spriteIcon scrollLeft over"}></i>
              <i className={"spriteIcon scrollRight"}></i>
              <div className={"customSliderCards"}>
                <a className={"displayCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/334d378955e796ab.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/e9e340cc1f111c74.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/307564ad22c67d1c.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/e4d93b0506695c18.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/4df634d13c5edc03.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/398e9e093556d90c.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/776fb1cecda786bf.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/776fb1cecda786bf.webp"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/d1f0e9a68873b3c3.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/627b56bd7cdc07c8.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/kgmu-lucknow-campus.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/kgmu-lucknow-campus.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/840c7af0edf32547.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/3b95be4975ef8e2b.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
                    <img loading={"lazy"} src={"/images/imported/d3221412c66a69c6.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"/images/imported/9fc2c1bb7c8ef049.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
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
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Explore Scholarships"}
            </h2>
            <p className={"sectionSubheading"}>
              {"Search among 500+ government, and competitive entrance exams"}
            </p>
            <div className={"exploreScholorshipDiv row"}>
              <a title={"State Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon stateScholarships"}></i>
                <p>
                  {"State Wise Scholarships"}
                </p>
              </a>
              <a title={"Class Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon classScholarships"}></i>
                <p>
                  {"Class Wise Scholarships"}
                </p>
              </a>
              <a title={"Discipline Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon disciplineScholarships"}></i>
                <p>
                  {"Discipline Wise Scholarships"}
                </p>
              </a>
              <a title={"Course Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon courseScholarships"}></i>
                <p>
                  {"Course Wise Scholarships"}
                </p>
              </a>
              <a title={"Category Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon categoryScholarships"}></i>
                <p>
                  {"Category Wise Scholarships"}
                </p>
              </a>
              <a title={"Type Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon typeScholarships"}></i>
                <p>
                  {"Type Wise Scholarships"}
                </p>
              </a>
              <a title={"Gender Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon genderScholarships"}></i>
                <p>
                  {"Gender Wise Scholarships"}
                </p>
              </a>
              <a title={"Country Wise Scholarships"}  className={"scholorshipCard"}>
                <i className={"spriteIcon countryScholarships"}></i>
                <p>
                  {"Country Wise Scholarships"}
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Latest News"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <i className={"spriteIcon scrollLeft over"}></i>
              <i className={"spriteIcon scrollRight"}></i>
              <div className={"customSliderCards"}>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/1bf1a0a37f7329b2.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv"}>
                    <p className={"widgetCardHeading"}>
                      {"NEET UG 2026 Registration Begins: Application Link, Eligibility Criteria & Exam Pattern"}
                    </p>
                    <p className={"subText"}>
                      {"Mar 26, 2026"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/e662b48122882619.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv"}>
                    <p className={"widgetCardHeading"}>
                      {"INI CET 2026 Medical Admission Result & Counseling Schedule Announced for AIIMS & PGIMER"}
                    </p>
                    <p className={"subText"}>
                      {"Mar 25, 2026"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/92f6ffad5178c5f8.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv"}>
                    <p className={"widgetCardHeading"}>
                      {"GPAT 2026 Pharmacy Entrance Exam Dates Out: Application Instructions & Seat Matrix"}
                    </p>
                    <p className={"subText"}>
                      {"Mar 25, 2026"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/72eff45e80034839.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv"}>
                    <p className={"widgetCardHeading"}>
                      {"JENPAS UG 2026 Registration Begins: Nursing & Paramedical Entrance Application Link"}
                    </p>
                    <p className={"subText"}>
                      {"Mar 25, 2026"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/dd9f141020014495.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv"}>
                    <p className={"widgetCardHeading"}>
                      {"NEET PG 2026 Counseling Schedule & State-Wise Medical Seat Matrix Released"}
                    </p>
                    <p className={"subText"}>
                      {"Mar 25, 2026"}
                    </p>
                  </div>
                </a>
                <div className={"displayCard viewAllDiv"}>
                  <a >
                    <i className={"spriteIcon viewAllIcon"}></i>
                    <p>
                      {"VIEW ALL"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"}>
          <div className={"container"}>
            <h2>
              {"Latest Articles"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <i className={"spriteIcon scrollLeft over"}></i>
              <i className={"spriteIcon scrollRight"}></i>
              <div className={"customSliderCards"}>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/702b915ebaadfeab.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Top Medical & Nursing Colleges in India 2026: NIRF Ranks, Fees, Admission & Placements"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Amanpreet Kaur"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/7061b910b4652e09.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Best B.Sc Nursing & GNM Colleges in North India: Course Fees, Cutoffs & Career Scope"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/fbfbaccac2b741ff.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Best Pharmacy Colleges in India (B.Pharm / D.Pharm): Admission, Salary & Top Recruiters"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/f1b15d21bc33e73d.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"NSTI Panipat & Govt IToT Jaipur Paramedical & Health Tech Courses 2026 Complete Guide"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/7a90189c45f042e2.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"KGMU Lucknow & AIIMS Medical Admission 2026: Entrance Exam, Cutoffs & Counseling"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/98e8e98295e59373.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Best Pharmacy Colleges in Uttar Pradesh: Courses, Fees, Admission, Salary & Placements"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/71ebeddfa18aa7dd.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Best Colleges for B.Des Interior Design in Lucknow, Uttar Pradesh (2026 Guide)"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/11a15dfd01cfbcdd.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Top College for B.Sc. Airlines and Airport Management Program in Lucknow, Uttar Pradesh"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/eee6182bd9898f1f.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Management Institute with International Exposure in Bangalore"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
                <div className={"displayCard"}>
                  <a >
                    <figure>
                      <img loading={"lazy"} src={"/images/imported/c0a0e409ad0ae8ea.webp"} alt={"img"} width={"275"} height={"206"} />
                    </figure>
                    <div className={"textDiv"}>
                      <p className={"widgetCardHeading"}>
                        {"Leading Private, Autonomous and Reputable B-Schools for MBA/PGDM Prospects in Bangalore"}
                      </p>
                    </div>
                  </a>
                  <a className={"authorName"} >
                    <p className={"subText"} style={{ paddingLeft: "20px" }}>
                      {"Ashish Singh"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"aboutUsSection"}>
          <div className={"container"}>
            <div className={"mobileOnly"}>
              <h2>
                {"citsAdmission.com - Top Education Search Platform."}
              </h2>
              <p className={"sectionSubheading"}>
                {"Your dreams are valuable, let the experts guide to achieve them."}
              </p>
            </div>
            <div className={"row m-0"}>
              <div className={"col-md-6"}>
                <div className={"row m-0"}>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon reviewIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Reviews"}
                    </p>
                    <p className={"totalCount"}>
                      {"248,621"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon ratingIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Ratings"}
                    </p>
                    <p className={"totalCount"}>
                      {"59,829"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon collegeIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Colleges"}
                    </p>
                    <p className={"totalCount"}>
                      {"42,090"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon usersIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Users"}
                    </p>
                    <p className={"totalCount"}>
                      {"1,821,956"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon questionsIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Questions"}
                    </p>
                    <p className={"totalCount"}>
                      {"202"}
                    </p>
                  </div>
                  <div className={"aboutUsCard"}>
                    <i className={"spriteIcon competitionsIcon"}></i>
                    <p className={"cardHeading"}>
                      {"Competitions"}
                    </p>
                    <p className={"totalCount"}>
                      {"50+"}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-md-6"}>
                <img className={"websiteImg desktopOnly"} src={"/images/imported/e76db46cba7697ec.webp"} loading={"lazy"} alt={"img"} width={"660"} height={"450"} />
              </div>
            </div>
          </div>
        </div>
        <section className={"indexSection student-testimonial-section"}>
          <div className={"container"}>
            <h2>
              {"Our Students Say"}
            </h2>
            <div className={"customSlider student-testimonial"}>
              <i className={"spriteIcon scrollLeft over"}></i>
              <i className={"spriteIcon scrollRight"}></i>
              <div className={"customSliderCards"}>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/02c5709ce7eea2dd.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Muskan Bebele"}
                  </span>
                  <p className={"subText"}>
                    {"B.Tech CSE,"}
                  </p>
                  <p className={"subText"}>
                    {"Sharda University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I am Muskan Babele from Jhansi, Uttar Pradesh. My experience at Sharda University, Greater Noida, in the B.Tech CSE course, is excellent. I got admission in June 2022. Thank you, citsAdmission.com, for making my career better."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/cf661ef47c206874.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Liya Dominic"}
                  </span>
                  <p className={"subText"}>
                    {"B.Des,"}
                  </p>
                  <p className={"subText"}>
                    {"Presidency University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"This portal has allowed me to enhance my design skills and enrich my knowledge. Presidency University has dependent teachers who make everyone thrilled about future classes. Thanks to citsAdmission.com for assisting me."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/329982224a208ee6.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Vikas"}
                  </span>
                  <p className={"subText"}>
                    {"UG,"}
                  </p>
                  <p className={"subText"}>
                    {"Sharda University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I am Vikash from Samastipur, Bihar. When I was connected with citsAdmission.com for my future career in Computer Applications, they were more than happy to help me select the best college according to my financial preferences."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/c05d0a32a5702d6f.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Gaurav Sanjay Kumavat"}
                  </span>
                  <p className={"subText"}>
                    {"UG,"}
                  </p>
                  <p className={"subText"}>
                    {"NIMS"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"citsAdmission.com helped me to find my dream university, and I am thankful to them. Parul University of technology, Gujarat, is among the best colleges for knowledge and learning. citsAdmission.com’s support team helped me a lot."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/6a5d7939a763f8db.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Ashish Patidar"}
                  </span>
                  <p className={"subText"}>
                    {"M. Sc,"}
                  </p>
                  <p className={"subText"}>
                    {"SAGE UNIVERSITY INDORE"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I am thankful for the assistance and guidance from citsAdmission.com counsellors while choosing the best and budget-friendly college from the never-ending list of colleges."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/15d9205f80f207f2.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Bhumika"}
                  </span>
                  <p className={"subText"}>
                    {"B.Tech CSE,"}
                  </p>
                  <p className={"subText"}>
                    {"Lovely Professional University"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"citsAdmission.com provided the best academic assistance. Here, counsellors are very supportive and helpful. When I completed 12th, I was confused about my career, but I got proper guidance in every field, so my path was clearer."}
                    </p>
                  </div>
                </div>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"/images/imported/1f207405846cca6e.webp"} alt={"img"} width={"45"} height={"45"} />
                  </figure>
                  <span className={"studentName"}>
                    {"Tanvi Sharma"}
                  </span>
                  <p className={"subText"}>
                    {"PGDM,"}
                  </p>
                  <p className={"subText"}>
                    {"Lexicon Mile"}
                  </p>
                  <div className={"studentReviewDiv"}>
                    <p className={"studentReview"}>
                      {"I got to know a lot about LEXICON MILE from citsAdmission.com. The website provided information about campus placement, courses etc. I got a call from their consultant, which greatly helped me. Thank you."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray py-8"}>
          <div className={"container"}>
            <h2 className={"text-center mb-6 text-2xl font-bold"}>
              {"citsAdmission.com in Media"}
            </h2>
            <div className={"featuredBrandWrapper"}>
              <div className={"featuredBrandTrack"}>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/923143c0a214b47d.webp"} alt={"ET"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/22bbb98a5e4f0d4d.webp"} alt={"iamwire"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/a06e81a1bb5f867f.webp"} alt={"Inc42"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/2c48523378893bd5.webp"} alt={"NewsBugz"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/ed5d85465df20ae4.webp"} alt={"TECHINASIA"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/a7780393c0c17fc5.webp"} alt={"Media"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/862ce389e84cdf77.webp"} alt={"Media"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/24c0ab912b5387a0.webp"} alt={"Media"} />
                </div>

                {/* Duplicated set for seamless 100% infinite scroll animation */}
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/923143c0a214b47d.webp"} alt={"ET"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/22bbb98a5e4f0d4d.webp"} alt={"iamwire"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/a06e81a1bb5f867f.webp"} alt={"Inc42"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/2c48523378893bd5.webp"} alt={"NewsBugz"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/ed5d85465df20ae4.webp"} alt={"TECHINASIA"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/a7780393c0c17fc5.webp"} alt={"Media"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/862ce389e84cdf77.webp"} alt={"Media"} />
                </div>
                <div className={"featuredCard"}>
                  <img loading={"lazy"} src={"/images/imported/24c0ab912b5387a0.webp"} alt={"Media"} />
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default function HomePage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <HomeContent />
    </PageRenderer>
  );
}
