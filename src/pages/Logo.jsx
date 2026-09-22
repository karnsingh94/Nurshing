import { useState, useEffect } from 'react';
import { collegesData } from '../data/collegesData.js';
import { allowedLink } from '../linkPolicy.js';
import PageRenderer from '../PageRenderer.jsx';
import { fetchMedicalNews, fallbackArticles } from '../services/newsApi.js';

export const page = {
  name: "Logo",
  sourceFile: "logo.html",
  slug: "logo",
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
        "content": "/yas/images/home_new/homepage_background_3.jpg"
      },
      {
        "property": "twitter:image",
        "content": "/yas/images/home_new/homepage_background_3.jpg"
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

function LogoContent() {
  const [newsArticles, setNewsArticles] = useState(fallbackArticles);

  useEffect(() => {
    fetchMedicalNews().then((articles) => {
      if (articles && articles.length > 0) {
        setNewsArticles(articles);
      }
    });
  }, []);

  return (
    <>
      <div className={"blueBgDiv mobileOnly"}></div>
      <div className={"indexPage"}>
        <section className={"indexSection p-0"}>
          <div className={"carouselSection"}>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/chandigarh-university-lucknow.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/chandigarh-university-lucknow.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Chandigarh University, Uttar Pradesh"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Chandigarh University, Uttar Pradesh"} rel={"nofollow"}>
                {"Chandigarh University, Uttar Pradesh"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/parul-university-gujarat.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/parul-university-gujarat.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Parul University, Vadodara"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Parul University, Vadodara"} rel={"nofollow"}>
                {"Parul University, Vadodara"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/lovely-professional-university-lpu-jalandhar.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/lovely-professional-university-lpu-jalandhar.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Lovely Professional University- LPU Jalandhar"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Lovely Professional University- LPU Jalandhar"} rel={"nofollow"}>
                {"Lovely Professional University- LPU Jalandhar"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/indian-institute-of-technology-iit-guwahati.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/indian-institute-of-technology-iit-guwahati.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Indian Institute of Technology, [IIT] Guwahati "} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Indian Institute of Technology, [IIT] Guwahati "}>
                {"Indian Institute of Technology, [IIT] Guwahati"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/galgotias-university-noida.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/galgotias-university-noida.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Galgotias University, Noida"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Galgotias University, Noida"} rel={"nofollow"}>
                {"Galgotias University, Noida"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/indian-institute-of-science-iis-bangalore.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/indian-institute-of-science-iis-bangalore.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"Indian Institute of Science, [IIS] Bangalore"} decoding={"async"} fetchPriority={"high"} />
              <a  className={"sliderName"} aria-label={"Read more about Indian Institute of Science, [IIS] Bangalore"}>
                {"Indian Institute of Science, [IIS] Bangalore"}
              </a>
            </div>
            <div className={"carouselDiv"}>
              <img src={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/indian-institute-of-management-iim-lucknow.webp"} srcSet={"https://media.getmyuni.com/assets/images/homepage/homepage_slides/indian-institute-of-management-iim-lucknow.webp?w=600 600w,,"} sizes={"(max-width: 768px) 100vw, 1200px"} height={"444"} width={"1200"} alt={"IIM Lucknow - Indian Institute of Management"} decoding={"async"} fetchPriority={"high"} />
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
                  <div className={"search-input-wrapper flex items-stretch w-full rounded-r-md rounded-bl-md shadow-lg bg-white overflow-hidden border border-slate-200"}>
                    <input type={"text"} placeholder={"Enter College Name"} spellCheck={"false"} className={"college-name-text-box foucus-search flex-1"} autoComplete={"off"} />
                    <button className={"primaryBtn searchIcon-home"}>
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly font-semibold text-white"}>
                        {"Search"}
                      </span>
                    </button>
                  </div>
                </div>
                <div id={"exams-tab"} className={"tab-content"}>
                  <div className={"search-input-wrapper flex items-stretch w-full rounded-r-md rounded-bl-md shadow-lg bg-white overflow-hidden border border-slate-200"}>
                    <input type={"text"} placeholder={"Enter Exam Name eg: JEE,CAT,XAT"} className={"exam-name-text-box foucus-search flex-1"} />
                    <button className={"primaryBtn searchIcon-home"}>
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly font-semibold text-white"}>
                        {"Search"}
                      </span>
                    </button>
                  </div>
                </div>
                <div id={"course-tab"} className={"tab-content"}>
                  <div className={"search-input-wrapper flex items-stretch w-full rounded-r-md rounded-bl-md shadow-lg bg-white overflow-hidden border border-slate-200"}>
                    <input type={"text"} placeholder={"Enter Course Name"} className={"course-name-text-box foucus-search flex-1"} />
                    <button className={"primaryBtn searchIcon-home"}>
                      <i className={"spriteIcon searchIcon"}></i>
                      <span className={"desktopOnly font-semibold text-white"}>
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
        <section className={"indexSection pb-0 w-full"}>
          <div className={"w-full px-3 sm:px-6 md:px-10"}>
            <div className="max-w-[1236px] mx-auto">
              <h2>
                {"Trending Now"}
              </h2>
            </div>
            <div className={"trendingTopicsList relative overflow-hidden py-3 bg-gray-50/90 rounded-xl border border-gray-200/70 my-4 w-full shadow-xs"}>
              <div className={"trending-slider-track flex items-center whitespace-nowrap animate-trending-scroll hover:[animation-play-state:paused] gap-12 font-semibold text-base text-[#0966c2]"}>
                {[
                  { text: "Top Nursing Colleges", link: "/nursing" },
                  { text: "Top Pharmacy Colleges", link: "/pharmacy" },
                  { text: "Top Paramedical Colleges", link: "/paramedical" },
                  { text: "Top Yoga Colleges", link: "/yoga" },
                  { text: "Top Nursing Colleges", link: "/nursing" },
                  { text: "Top Pharmacy Colleges", link: "/pharmacy" },
                  { text: "Top Paramedical Colleges", link: "/paramedical" },
                  { text: "Top Yoga Colleges", link: "/yoga" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg hover:bg-white hover:shadow-xs hover:text-[#09488a] transition-all shrink-0"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0966c2] animate-pulse"></span>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
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
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/parul-university-gujarat.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/parul-university-gujarat.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Parul University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Vadodara, Gujarat"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/srm-university-amaravati.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/srm-university-amaravati.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"SRM University, Amaravati"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Guntur, Andhra Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/chandigarh-university-mohali.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/chandigarh-university-mohali.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Chandigarh University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Mohali, Punjab"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/lovely-professional-university-lpu-jalandhar.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/lovely-professional-university-lpu-jalandhar.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"LPU"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Phagwara, Punjab"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/galgotias-university-noida.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/galgotias-university-noida.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Galgotias University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Greater Noida, Uttar Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/amity-university-noida.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/amity-university-noida.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Amity University Noida"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Noida, Uttar Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/singhania-university-su-jhunjhunu.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/singhania-university-su-jhunjhunu.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Singhania University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Jhunjhunu, Rajasthan"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/narsee-monjee-institute-of-management-studies-nmims-mumbai.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/narsee-monjee-institute-of-management-studies-nmims-mumbai.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"NMIMS Mumbai"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Mumbai, Maharashtra"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/vels-university-chennai.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/vels-university-chennai.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"VELS University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Chennai, Tamil Nadu"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/alliance-university-au-bangalore.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/alliance-university-au-bangalore.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Alliance University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Bangalore, Karnataka"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/doon-business-school-dbs-dehradun.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/doon-business-school-dbs-dehradun.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Doon Business School (DBS)"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Dehradun, Uttarakhand"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/g-d-goenka-university-gdgu-gurgaon.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/g-d-goenka-university-gdgu-gurgaon.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"GD Goenka University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Gurgaon, Haryana"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/manav-rachna-university-mru-faridabad.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/manav-rachna-university-mru-faridabad.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Manav Rachna University (MRU)"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Faridabad, Haryana"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/sanskriti-university-mathura.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/sanskriti-university-mathura.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Sanskriti University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Mathura, Uttar Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/brainware-university-kolkata.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/brainware-university-kolkata.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Brainware University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Kolkata, West Bengal"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/sage-university-su-indore.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/sage-university-su-indore.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"SAGE University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Indore, Madhya Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/institute-of-engineering-and-management-iem-kolkata.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/institute-of-engineering-and-management-iem-kolkata.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"IEM Kolkata"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Kolkata, West Bengal"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/bml-munjal-university-bmu-gurgaon.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/bml-munjal-university-bmu-gurgaon.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"BML Munjal University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Gurgaon, Haryana"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/indian-institute-of-management-iim-sirmaur.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/indian-institute-of-management-iim-sirmaur.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"IIM Sirmaur"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Paonta Sahib, Himachal Pradesh"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/hindustan-university-chennai.jpg"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/hindustan-university-chennai.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"Hindustan University"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Chennai, Tamil Nadu"}
                    </p>
                  </div>
                </a>
                <a className={"displayCard"} >
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/big/st-xaviers-college-sxc-kolkata.webp"} alt={"img"} width={"275"} height={"206"} />
                  </figure>
                  <div className={"textDiv pt-0"}>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/azure/college-image/small/st-xaviers-college-sxc-kolkata.jpg"} className={"collegeLogo"} alt={"img"} width={"56"} height={"56"} />
                    <p className={"widgetCardHeading"}>
                      {"St. Xaviers College Kolkata"}
                    </p>
                    <p className={"subText"}>
                      <span className={"spriteIcon locationIcon"}></span>
                      {"Kolkata, West Bengal"}
                    </p>
                  </div>
                </a>
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
              <i
                className={"spriteIcon scrollLeft"}
                role="button"
                aria-label="Previous"
                onClick={(e) => {
                  const list = e.currentTarget.parentElement.querySelector('.customSliderList');
                  if (list) list.scrollBy({ left: -280, behavior: 'smooth' });
                }}
              ></i>
              <i
                className={"spriteIcon scrollRight"}
                role="button"
                aria-label="Next"
                onClick={(e) => {
                  const list = e.currentTarget.parentElement.querySelector('.customSliderList');
                  if (list) list.scrollBy({ left: 280, behavior: 'smooth' });
                }}
              ></i>
              <div className={"customSliderList"} style={{ scrollBehavior: 'smooth' }}>
                <a className={"sliderCard"}>
                  <img loading={"lazy"} src={"https://media.getmyuni.com/assets/images/city-logos/bangalore-bengaluru.webp"} width={"276"} height={"207"} alt={"Bangalore"} />
                  <p className={"cityName"}>
                    {"Bangalore"}
                  </p>
                </a>
                <a className={"sliderCard"}>
                  <img loading={"lazy"} src={"https://media.getmyuni.com/assets/images/city-logos/chennai.webp"} width={"276"} height={"207"} alt={"Chennai"} />
                  <p className={"cityName"}>
                    {"Chennai"}
                  </p>
                </a>
                <a className={"sliderCard"}>
                  <img loading={"lazy"} src={"https://media.getmyuni.com/assets/images/city-logos/delhi.webp"} width={"276"} height={"207"} alt={"Delhi"} />
                  <p className={"cityName"}>
                    {"Delhi"}
                  </p>
                </a>
                <a className={"sliderCard"}>
                  <img loading={"lazy"} src={"https://media.getmyuni.com/assets/images/city-logos/mumbai.webp"} width={"276"} height={"207"} alt={"Mumbai"} />
                  <p className={"cityName"}>
                    {"Mumbai"}
                  </p>
                </a>
                <a className={"sliderCard"}>
                  <img loading={"lazy"} src={"https://media.getmyuni.com/assets/images/city-logos/pune.webp"} width={"276"} height={"207"} alt={"Pune"} />
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
                  {/* Commented out unused categories (code preserved): */}
                  {/*
                  <a className={"dataCard"}>
                    <span title={"Agriculture Exam"} className={"indexSprite agriculture"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Agriculture"}</p>
                      <p className={"count"}>{"12 Colleges"}</p>
                    </div>
                  </a>
                  <a className={"dataCard"}>
                    <span title={"Animation Exam"} className={"indexSprite animation"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Animation"}</p>
                      <p className={"count"}>{"8 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/architecture")} className={"dataCard"}>
                    <span title={"Architecture Exam"} className={"indexSprite architecture"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Architecture"}</p>
                      <p className={"count"}>{"16 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/arts")} className={"dataCard"}>
                    <span title={"Arts Exam"} className={"indexSprite arts"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Arts"}</p>
                      <p className={"count"}>{"35 Colleges"}</p>
                    </div>
                  </a>
                  <a className={"dataCard"}>
                    <span title={"Aviation Exam"} className={"indexSprite aviation"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Aviation"}</p>
                      <p className={"count"}>{"6 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/commerce")} className={"dataCard"}>
                    <span title={"Commerce Exam"} className={"indexSprite commerce"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Commerce"}</p>
                      <p className={"count"}>{"42 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/computer")} className={"dataCard"}>
                    <span title={"Computer Exam"} className={"indexSprite computer"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Computer"}</p>
                      <p className={"count"}>{"58 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/dental")} className={"dataCard"}>
                    <span title={"Dental Exam"} className={"indexSprite dental"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Dental"}</p>
                      <p className={"count"}>{"14 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/design")} className={"dataCard"}>
                    <span title={"Design Exam"} className={"indexSprite design"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Design"}</p>
                      <p className={"count"}>{"24 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/education")} className={"dataCard"}>
                    <span title={"Education Exam"} className={"indexSprite education"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Education"}</p>
                      <p className={"count"}>{"32 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/engineering")} className={"dataCard"}>
                    <span title={"Engineering Exam"} className={"indexSprite engineering"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Engineering"}</p>
                      <p className={"count"}>{"128 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/hospitality")} className={"dataCard"}>
                    <span title={"Hotel Management Exam"} className={"indexSprite hotel-management"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Hotel Management"}</p>
                      <p className={"count"}>{"22 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/law")} className={"dataCard"}>
                    <span title={"Law Exam"} className={"indexSprite law"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Law"}</p>
                      <p className={"count"}>{"28 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/management")} className={"dataCard"}>
                    <span title={"Management Exam"} className={"indexSprite management"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Management"}</p>
                      <p className={"count"}>{"64 Colleges"}</p>
                    </div>
                  </a>
                  <a className={"dataCard"}>
                    <span title={"Mass Communication Exam"} className={"indexSprite mass-communication"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Mass Communication"}</p>
                      <p className={"count"}>{"18 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/medical")} className={"dataCard"}>
                    <span title={"Medical Exam"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Medical"}</p>
                      <p className={"count"}>{"45 Colleges"}</p>
                    </div>
                  </a>
                  */}

                  {/* Active 4 Fields: Nursing, Pharmacy, Paramedical, Yoga */}
                  <a href={allowedLink("/nursing")} className={"dataCard"}>
                    <span title={"Nursing Colleges"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Nursing"}</p>
                      <p className={"count"}>{"48 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/pharmacy")} className={"dataCard"}>
                    <span title={"Pharmacy Colleges"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Pharmacy"}</p>
                      <p className={"count"}>{"40 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/paramedical")} className={"dataCard"}>
                    <span title={"Paramedical Colleges"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Paramedical"}</p>
                      <p className={"count"}>{"36 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/yoga")} className={"dataCard"}>
                    <span title={"Yoga Colleges"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Yoga"}</p>
                      <p className={"count"}>{"25 Colleges"}</p>
                    </div>
                  </a>

                  {/* Commented out rest of unused categories (code preserved): */}
                  {/*
                  <a href={allowedLink("/science")} className={"dataCard"}>
                    <span title={"Science Exam"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Science"}</p>
                      <p className={"count"}>{"52 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/veterinary")} className={"dataCard"}>
                    <span title={"Veterinary Exam"} className={"indexSprite veterinary"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Veterinary"}</p>
                      <p className={"count"}>{"15 Colleges"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/vocational")} className={"dataCard"}>
                    <span title={"Vocational Courses Exam"} className={"indexSprite vocational-courses"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Vocational Courses"}</p>
                      <p className={"count"}>{"128 Colleges"}</p>
                    </div>
                  </a>
                  */}
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
                  {/* Nursing Courses */}
                  <a href={allowedLink("/colleges?search=B.Sc.+Nursing")} className={"dataCard"}>
                    <span title={"B.Sc. Nursing"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"B.SC. NURSING"}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=Post+Basic+B.Sc+Nursing")} className={"dataCard"}>
                    <span title={"Post Basic B.Sc Nursing"} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"POST BASIC B.SC NURSING"}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=GNM")} className={"dataCard"}>
                    <span title={"G.N.M."} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"G.N.M."}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=ANM")} className={"dataCard"}>
                    <span title={"A.N.M."} className={"indexSprite medical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"A.N.M."}</p>
                      <p className={"count"}>{"Nursing Course"}</p>
                    </div>
                  </a>

                  {/* Pharmacy Courses */}
                  <a href={allowedLink("/colleges?search=B.+Pharmacy")} className={"dataCard"}>
                    <span title={"B. Pharmacy"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"B. PHARMACY"}</p>
                      <p className={"count"}>{"Pharmacy Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=D.+Pharmacy")} className={"dataCard"}>
                    <span title={"D. Pharmacy"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"D. PHARMACY"}</p>
                      <p className={"count"}>{"Pharmacy Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=M.+Pharmacy")} className={"dataCard"}>
                    <span title={"M. Pharmacy"} className={"indexSprite pharmacy"}></span>
                    <div className={"dataCardText"}>
                      <p>{"M. PHARMACY"}</p>
                      <p className={"count"}>{"Pharmacy Course"}</p>
                    </div>
                  </a>

                  {/* Paramedical Courses */}
                  <a href={allowedLink("/colleges?search=DMLT")} className={"dataCard"}>
                    <span title={"DMLT"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"DMLT"}</p>
                      <p className={"count"}>{"Paramedical Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=DRT")} className={"dataCard"}>
                    <span title={"DRT"} className={"indexSprite paramedical"}></span>
                    <div className={"dataCardText"}>
                      <p>{"DRT"}</p>
                      <p className={"count"}>{"Paramedical Course"}</p>
                    </div>
                  </a>

                  {/* Yoga Courses */}
                  <a href={allowedLink("/colleges?search=Yogic+Science")} className={"dataCard"}>
                    <span title={"B.Sc. in Yogic Science"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"B.SC. IN YOGIC SCIENCE"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=Diploma+in+Yoga")} className={"dataCard"}>
                    <span title={"Diploma in Yoga"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"DIPLOMA IN YOGA"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=PG+Diploma+in+Yoga")} className={"dataCard"}>
                    <span title={"PG Diploma in Yoga"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"PG DIPLOMA IN YOGA"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>
                  <a href={allowedLink("/colleges?search=Certificate+in+Yoga")} className={"dataCard"}>
                    <span title={"Certificate in Yoga"} className={"indexSprite science"}></span>
                    <div className={"dataCardText"}>
                      <p>{"CERTIFICATE IN YOGA"}</p>
                      <p className={"count"}>{"Yoga Course"}</p>
                    </div>
                  </a>

                  {/* Commented out original courses list (code preserved): */}
                  {/*
                  <a className={"dataCard"}>
                    <span title={"Architecture Exam"} className={"indexSprite architecture"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Architecture"}</p>
                      <p className={"count"}>{"15 Courses"}</p>
                    </div>
                  </a>
                  <a className={"dataCard"}>
                    <span title={"Arts Exam"} className={"indexSprite arts"}></span>
                    <div className={"dataCardText"}>
                      <p>{"Arts"}</p>
                      <p className={"count"}>{"187 Courses"}</p>
                    </div>
                  </a>
                  */}
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
        {/* <section className={"indexSection"}>
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
                    <img src={"https://media.getmyuni.com/assets/img/home_new/canada.webp"} alt={"CANADA"} title={"CANADA"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"CANADA"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/uk")}>
                    <img src={"https://media.getmyuni.com/assets/img/home_new/uk.webp"} alt={"UK"} title={"UK"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"UK"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/usa")}>
                    <img src={"https://media.getmyuni.com/assets/img/home_new/usa.webp"} alt={"USA"} title={"USA"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"USA"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/australia")}>
                    <img src={"https://media.getmyuni.com/assets/img/home_new/australia.webp"} alt={"AUSTRALIA"} title={"AUSTRALIA"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"AUSTRALIA"}
                    </p>
                  </a>
                  <a className={"studyAbroadCard"} href={allowedLink("/germany")}>
                    <img src={"https://media.getmyuni.com/assets/img/home_new/germany.webp"} alt={"GERMANY"} title={"GERMANY"} width={"75"} height={"75"} loading={"lazy"} />
                    <p>
                      {"GERMANY"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
                <li className={"homePageArticle active"}>
                  <a className={"activeLink"} data-tab={"nursing"} title={"Nursing"}>
                    {"Nursing"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"pharmacy"} title={"Pharmacy"}>
                    {"Pharmacy"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"paramedical"} title={"Paramedical"}>
                    {"Paramedical"}
                  </a>
                </li>
                <li className={"homePageArticle"}>
                  <a className={""} data-tab={"yoga"} title={"Yoga"}>
                    {"Yoga"}
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
            <div className={"trendingSliderWrapper"}>
              <button
                type="button"
                aria-label="Scroll left"
                className="trending-slider-arrow trending-slider-prev"
                onClick={() => {
                  const el = document.querySelector('.trendingBtnSection');
                  if (el) el.scrollBy({ left: -240, behavior: 'smooth' });
                }}
              >
                ‹
              </button>
              <div className={"trendingBtnSection"}>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Sc Nursing"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"GNM Nursing"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"ANM Nursing"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Pharm"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"D.Pharm"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"Pharm.D"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Sc MLT"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"BPT Physiotherapy"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"BNYS Yoga"}
                </button>
                <button data-entity={"course"} className={"basicCta exam-tab"}>
                  {"B.Sc Yoga"}
                </button>
              </div>
              <button
                type="button"
                aria-label="Scroll right"
                className="trending-slider-arrow trending-slider-next"
                onClick={() => {
                  const el = document.querySelector('.trendingBtnSection');
                  if (el) el.scrollBy({ left: 240, behavior: 'smooth' });
                }}
              >
                ›
              </button>
            </div>
          </div>
          <div className={"container mt-5"}>
            <div className={"collegesWithCategoryData"}>
              <div id={"entity-category"} className={"tab-content activeTab"}>
                <div className={"row limitCards trendingCourseCardList"}>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Nursing Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Nursing Syllabus & Fees"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Nursing Jobs & Career"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"GNM Nursing Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Pharm Admission & Cutoff"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Pharm Syllabus & Subjects"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"D.Pharm Course & Eligibility"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"Pharm.D Scope & Placements"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"Paramedical B.Sc MLT Admission"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"BPT Physiotherapy Course"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Radiology & Imaging"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"OT Technology Diploma"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"BNYS Naturopathy & Yoga"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"B.Sc Yoga Course & Syllabus"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"Diploma in Yoga Therapy"}
                      </p>
                    </a>
                  </div>
                  <div className={"dataCard"}>
                    <a className={"dataCardText"}>
                      <p>
                        {"M.Sc Nursing Specialization"}
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
        <section className={"indexSection bg-lightgray"} style={{ padding: '20px 0 10px 0' }}>
          <div className={"container"}>
            <h2 style={{ marginBottom: '14px' }}>
              {"Latest News"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <div className={"customSliderCards"}>
                {newsArticles.slice(0, 4).map((article, idx) => (
                  <a key={idx} className={"displayCard"} href={article.url} target="_blank" rel="noopener noreferrer">
                    <figure style={{ overflow: 'hidden', height: '140px', background: '#e2e8f0', margin: 0 }}>
                      <img loading={"lazy"} src={article.urlToImage || "https://media.getmyuni.com/assets/images/news-images/65d8efbf4db4636611325632eb384887.webp"} alt={article.title || "News"} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </figure>
                    <div className={"textDiv"} style={{ padding: '12px' }}>
                      <p className={"widgetCardHeading"} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.5em', fontSize: '14px', fontWeight: '600', lineHeight: '1.3' }}>
                        {article.title}
                      </p>
                      <p className={"subText"} style={{ marginTop: '8px', color: '#64748b', fontSize: '12px' }}>
                        {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : (article.source?.name || 'Medical News')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={"indexSection bg-lightgray"} style={{ padding: '10px 0 20px 0' }}>
          <div className={"container"}>
            <h2 style={{ marginBottom: '14px' }}>
              {"Latest Articles"}
            </h2>
            <div className={"customSlider four-cardDisplay"}>
              <div className={"customSliderCards"}>
                {(newsArticles.length > 4 ? newsArticles.slice(4, 10) : newsArticles).map((article, idx) => (
                  <div key={idx} className={"displayCard"}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <figure style={{ overflow: 'hidden', height: '140px', background: '#e2e8f0', margin: 0 }}>
                        <img loading={"lazy"} src={article.urlToImage || "https://media.getmyuni.com/assets/images/articles/articles-d70faa0707fb2820ac6a112fcd0fd316.webp"} alt={article.title || "Article"} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </figure>
                      <div className={"textDiv"} style={{ padding: '12px' }}>
                        <p className={"widgetCardHeading"} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.5em', fontSize: '14px', fontWeight: '600', lineHeight: '1.3' }}>
                          {article.title}
                        </p>
                      </div>
                    </a>
                    <a className={"authorName"} href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0 12px 12px 12px' }}>
                      <p className={"subText"} style={{ color: '#0966c2', fontSize: '12px', fontWeight: '500', margin: 0 }}>
                        ✍️ {article.author || article.source?.name || "Healthcare Desk"}
                      </p>
                    </a>
                  </div>
                ))}
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
                      {"1,821,815"}
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
                <img className={"websiteImg desktopOnly"} src={"https://media.getmyuni.com/assets/img/home_new/site.webp"} loading={"lazy"} alt={"img"} width={"660"} height={"450"} />
              </div>
            </div>
          </div>
        </div>
        <section className={"indexSection student-testimonial-section"}>
          <div className={"container"}>
            <h2>
              {"Our Students Say"}
            </h2>
            <div className={"customSlider student-testimonial"} style={{ position: 'relative' }}>
              <button
                type="button"
                aria-label="Scroll left"
                className="custom-slider-arrow custom-slider-prev"
                onClick={(e) => {
                  const cardContainer = e.currentTarget.parentElement.querySelector('.customSliderCards');
                  if (cardContainer) cardContainer.scrollBy({ left: -320, behavior: 'smooth' });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Scroll right"
                className="custom-slider-arrow custom-slider-next"
                onClick={(e) => {
                  const cardContainer = e.currentTarget.parentElement.querySelector('.customSliderCards');
                  if (cardContainer) cardContainer.scrollBy({ left: 320, behavior: 'smooth' });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div className={"customSliderCards"}>
                <div className={"studentReviewCard"}>
                  <figure>
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/muskan-bebele.webp"} alt={"img"} width={"45"} height={"45"} />
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
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/liya-dominic.webp"} alt={"img"} width={"45"} height={"45"} />
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
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/vikas.webp"} alt={"img"} width={"45"} height={"45"} />
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
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/gaurav-sanjay-kumavat.webp"} alt={"img"} width={"45"} height={"45"} />
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
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/ashish-patidar.webp"} alt={"img"} width={"45"} height={"45"} />
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
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/bhumika.webp"} alt={"img"} width={"45"} height={"45"} />
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
                    <img loading={"lazy"} src={"https://media.getmyuni.com/assets/img/home_new/testimonials/tanvi-sharma.webp"} alt={"img"} width={"45"} height={"45"} />
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
                {/* First Set of Media Cards */}
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-6 h-6 rounded bg-[#1f3a60] flex items-center justify-center text-white text-[10px] font-black border border-cyan-400">
                      TP
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-[#1f3a60] text-sm tracking-tight">Tropical</span>
                      <span className="font-bold text-cyan-500 text-sm tracking-tight">Post</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-3.5 py-1.5 rounded-xs flex flex-col items-center justify-center leading-none text-white shadow-2xs select-none">
                    <span className="font-black tracking-widest text-[11px] leading-tight uppercase">YOUR</span>
                    <span className="font-black tracking-wider text-[11px] leading-tight uppercase">STORY</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1 select-none">
                    <span className="font-black text-[#e50914] text-sm tracking-tighter">BW</span>
                    <span className="font-black text-slate-900 text-sm tracking-tight">DISRUPT</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-4 py-1.5 rounded-xs flex items-center justify-center shadow-2xs select-none">
                    <span className="font-serif font-black text-white text-xl tracking-tighter italic">ET</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="12" cy="12" r="2.5" />
                      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
                    </svg>
                    <span className="font-bold text-slate-900 text-sm tracking-tight">iam<span className="font-extrabold text-teal-600">wire</span></span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center select-none">
                    <span className="font-black text-slate-900 text-base tracking-tight">Inc</span>
                    <span className="font-black text-[#e50914] text-base tracking-tight">42</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-black shadow-2xs">
                      🐞
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-slate-900 text-xs tracking-tight">News</span>
                      <span className="font-bold text-rose-600 text-xs tracking-tight">Bugz</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#e50914]"></div>
                    <span className="font-black text-slate-900 text-[11px] tracking-wider uppercase">TECH IN ASIA</span>
                  </div>
                </div>

                {/* Duplicated set for seamless 100% infinite scroll animation */}
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-6 h-6 rounded bg-[#1f3a60] flex items-center justify-center text-white text-[10px] font-black border border-cyan-400">
                      TP
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-[#1f3a60] text-sm tracking-tight">Tropical</span>
                      <span className="font-bold text-cyan-500 text-sm tracking-tight">Post</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-3.5 py-1.5 rounded-xs flex flex-col items-center justify-center leading-none text-white shadow-2xs select-none">
                    <span className="font-black tracking-widest text-[11px] leading-tight uppercase">YOUR</span>
                    <span className="font-black tracking-wider text-[11px] leading-tight uppercase">STORY</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1 select-none">
                    <span className="font-black text-[#e50914] text-sm tracking-tighter">BW</span>
                    <span className="font-black text-slate-900 text-sm tracking-tight">DISRUPT</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="bg-[#e50914] px-4 py-1.5 rounded-xs flex items-center justify-center shadow-2xs select-none">
                    <span className="font-serif font-black text-white text-xl tracking-tighter italic">ET</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="12" cy="12" r="2.5" />
                      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
                    </svg>
                    <span className="font-bold text-slate-900 text-sm tracking-tight">iam<span className="font-extrabold text-teal-600">wire</span></span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center select-none">
                    <span className="font-black text-slate-900 text-base tracking-tight">Inc</span>
                    <span className="font-black text-[#e50914] text-base tracking-tight">42</span>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-black shadow-2xs">
                      🐞
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-extrabold text-slate-900 text-xs tracking-tight">News</span>
                      <span className="font-bold text-rose-600 text-xs tracking-tight">Bugz</span>
                    </div>
                  </div>
                </div>
                <div className={"featuredCard"}>
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#e50914]"></div>
                    <span className="font-black text-slate-900 text-[11px] tracking-wider uppercase">TECH IN ASIA</span>
                  </div>
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

export default function LogoPage({ onNavigate }) {
  return (
    <PageRenderer page={page} onNavigate={onNavigate}>
      <LogoContent />
    </PageRenderer>
  );
}
