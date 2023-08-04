import "./footer.css";
import { links, socials } from "./data";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="nav-menu">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}>
                {fLink.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-socials">
          {socials.map((social) => (
            <a href={social.link} key={social.id} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        <small>2023 Jitesh Shivgan &copy;  All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
