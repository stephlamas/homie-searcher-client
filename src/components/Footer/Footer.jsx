import "./Footer.css";

const Footer = () => (
  <>
    <footer className="footer-shadow">
      <div>
        <ul>
          <li>
            <a className="fs-6" href="/">
              Homes for rent
            </a>
          </li>
          <li>
            <a className="fs-6" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a className="fs-6" href="/about-us">
              About us
            </a>
          </li>
          <li>
            <a className="fs-6" href="/privacy">
              Privacy
            </a>
          </li>
        </ul>
      </div>
      <span>Copyright @ 2022 | Homie | All rights reserved</span>
    </footer>
  </>
);

export default Footer;
