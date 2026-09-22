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
    <footer className="pageFooter w-full text-white mt-5 select-none" onClick={handleClick}>
      {/* Primary Section */}
      <div className="bg-[#273553] py-5">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href={allowedLink("/home")}>
              <img
                className="lazyload block"
                loading="lazy"
                width="172"
                height="40"
                data-src="/brand-logo.svg"
                src="/brand-logo.svg"
                alt="citsAdmission.com Logo"
              />
            </a>
            <div>
              <ul className="socialMedia m-0 p-0 inline-flex flex-wrap items-center mr-4 md:mr-14 list-none">
                <li className="text-sm text-white block md:inline-block pr-2 font-medium">
                  Connect with us
                </li>
                <li className="inline-block mr-1">
                  <a title="Facebook" rel="noopener nofollow" target="_blank" className="spriteIcon fbIcon block"></a>
                </li>
                <li className="inline-block mr-1">
                  <a title="Twitter" rel="noopener nofollow" target="_blank" className="spriteIcon twitterIcon block"></a>
                </li>
                <li className="inline-block mr-1">
                  <a title="Instagram" rel="noopener nofollow" target="_blank" className="spriteIcon instaIcon block"></a>
                </li>
                <li className="inline-block mr-1">
                  <a title="Linkedin" rel="noopener nofollow" target="_blank" className="spriteIcon linkdIn block"></a>
                </li>
                <li className="inline-block mr-1">
                  <a title="Youtube" rel="noopener nofollow" target="_blank" className="spriteIcon youtubeIcon block"></a>
                </li>
              </ul>
              <ul className="contactInfo m-0 p-0 inline-flex flex-wrap items-center list-none gap-2 md:gap-4">
                <li className="inline-flex items-center px-2">
                  <span className="spriteIcon phoneIcon"></span>
                  <a href={allowedLink("tel:+91 0000000000")} title="+91 0000000000" className="text-white text-sm hover:underline">
                    +91 0000000000
                  </a>
                </li>
                <li className="inline-flex items-center px-2">
                  <span className="spriteIcon whiteMailIcon"></span>
                  <a href={allowedLink("mailTo:contact@example.com")} title="contact@example.com" className="text-white text-sm hover:underline">
                    contact@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="bg-[#1f2b45] py-5">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <ul className="m-0 p-0 flex flex-wrap items-center list-none gap-3 md:gap-6">
              <li>
                <a href={allowedLink("/about-us")} title="About Us" className="text-white text-sm block leading-7 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href={allowedLink("/contact-us")} title="Contact Us" className="text-white text-sm block leading-7 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href={allowedLink("/privacy-policy")} title="Privacy Policy" className="text-white text-sm block leading-7 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={allowedLink("/terms-conditions")} title="Terms & Conditions" className="text-white text-sm block leading-7 hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
            <p className="copyrightsText text-white text-sm m-0">
              © 2026 citsAdmission.com  All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
