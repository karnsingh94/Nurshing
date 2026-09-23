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
    <footer className="app-unified-footer" onClick={handleClick}>
      {/* Primary Section */}
      <div className="footer-primary">
        <div className="footer-container">
          <div className="footer-row">
            <a href={allowedLink("/home")} className="block shrink-0">
              <img
                loading="lazy"
                width="172"
                height="40"
                src="/brand-logo.svg"
                alt="Admission Portal Logo"
                className="block h-9 sm:h-10 w-auto"
              />
            </a>

            <div className="footer-right-group">
              {/* Social Media */}
              <ul className="social-list">
                <li className="text-sm text-white font-medium pr-2">
                  Connect with us
                </li>
                <li>
                  <a title="Facebook" rel="noopener nofollow" target="_blank" className="spriteIcon fbIcon block"></a>
                </li>
                <li>
                  <a title="Twitter" rel="noopener nofollow" target="_blank" className="spriteIcon twitterIcon block"></a>
                </li>
                <li>
                  <a title="Instagram" rel="noopener nofollow" target="_blank" className="spriteIcon instaIcon block"></a>
                </li>
                <li>
                  <a title="Linkedin" rel="noopener nofollow" target="_blank" className="spriteIcon linkdIn block"></a>
                </li>
                <li>
                  <a title="Youtube" rel="noopener nofollow" target="_blank" className="spriteIcon youtubeIcon block"></a>
                </li>
              </ul>

              {/* Direct Contact Info */}
              <ul className="contact-list">
                <li className="inline-flex items-center">
                  <span className="spriteIcon phoneIcon"></span>
                  <a href={allowedLink("tel:+91 0000000000")} title="+91 0000000000" className="contact-link">
                    +91 0000000000
                  </a>
                </li>
                <li className="inline-flex items-center">
                  <span className="spriteIcon whiteMailIcon"></span>
                  <a href={allowedLink("mailTo:contact@example.com")} title="contact@example.com" className="contact-link">
                    contact@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="footer-secondary">
        <div className="footer-container">
          <div className="footer-row">
            <ul className="links-list">
              <li>
                <a href={allowedLink("/about-us")} title="About Us">
                  About Us
                </a>
              </li>
              <li>
                <a href={allowedLink("/contact-us")} title="Contact Us">
                  Contact Us
                </a>
              </li>
              <li>
                <a href={allowedLink("/privacy-policy")} title="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={allowedLink("/terms-conditions")} title="Terms & Conditions">
                  Terms & Conditions
                </a>
              </li>
            </ul>
            <p className="copyright-text">
              © 2026 Admission Portal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
