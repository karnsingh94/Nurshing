import { allowedLink } from '../linkPolicy.js';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const handleClick = (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const href = allowedLink(anchor.getAttribute('href'));
    if (href?.startsWith('/') && onNavigate && !anchor.target) {
      event.preventDefault();
      onNavigate(href);
    }
  };
  return (
    <footer className={"pageFooter site-footer"} onClick={handleClick}>
        <div className={"footerPrimarySection"}>
          <div className={"container"}>
            <div className={"row"}>
              <a href={allowedLink("/home")}>
                <img className={"lazyload"} loading={"lazy"} width={"172"} height={"40"} data-src={"/brand-logo.svg"} src={"/brand-logo.svg"} alt={"citsAdmission.com Logo"} />
              </a>
              <div>
                <ul className={"socialMedia"}>
                  <li>
                    {"Connect with us"}
                  </li>
                  <li>
                    <a  title={"Facebook"} rel={"noopener nofollow"} target={"_blank"} className={"spriteIcon fbIcon"}></a>
                  </li>
                  <li>
                    <a  title={"Twitter"} rel={"noopener nofollow"} target={"_blank"} className={"spriteIcon twitterIcon"}></a>
                  </li>
                  <li>
                    <a  title={"Instagram"} rel={"noopener nofollow"} target={"_blank"} className={"spriteIcon instaIcon"}></a>
                  </li>
                  <li>
                    <a  title={"Linkedin"} rel={"noopener nofollow"} target={"_blank"} className={"spriteIcon linkdIn"}></a>
                  </li>
                  <li>
                    <a  title={"Youtube"} rel={"noopener nofollow"} target={"_blank"} className={"spriteIcon youtubeIcon"}></a>
                  </li>
                </ul>
                <ul className={"contactInfo"}>
                  <li>
                    <span className={"spriteIcon phoneIcon"}></span>
                    <a href={allowedLink("tel:+91 0000000000")} title={"+91 0000000000"}>
                      {"+91 0000000000"}
                    </a>
                  </li>
                  <li>
                    <span className={"spriteIcon whiteMailIcon"}></span>
                    <a href={allowedLink("mailTo:contact@example.com")} title={"contact@example.com"}>
                      {"contact@example.com"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={"footerSecondSection"}>
          <div className={"container"}>
            <div className={"row"}>
              <ul>
                <li>
                  <a  title={"About Us"}>
                    {"About Us"}
                  </a>
                </li>
                <li>
                  <a  title={"Contact Us"}>
                    {"Contact Us"}
                  </a>
                </li>
                <li>
                  <a  title={"Privacy Policy"}>
                    {"Privacy Policy"}
                  </a>
                </li>
                <li>
                  <a  title={"Terms & Conditions"}>
                    {"Terms & Conditions"}
                  </a>
                </li>
              </ul>
              <p className={"copyrightsText"}>
                {"© 2026 citsAdmission.com  All Rights Reserved."}
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}
