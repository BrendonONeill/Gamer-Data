function Footer() {
  return (
    <>
      <footer>
        <div className="footer-sections rawg">
          <a href="https://rawg.io/apidocs">
            <h3>RAWG API</h3>
            <p>Go to their site</p>
          </a>
        </div>
        <div className="footer-sections">
          <ul className="footer-links-container">
            <a href="https://github.com/BrendonONeill">
              <li className="footer-links">
                <img
                  src="../github-alt.svg"
                  alt="github logo"
                  width="20px"
                  height="20px"
                />{" "}
                Github
              </li>
            </a>
            <a href="https://www.linkedin.com/in/brendon-o-neill/">
              <li className="footer-links">
                <img
                  src="../linkedin.svg"
                  alt="linkedin logo"
                  width="20px"
                  height="20px"
                />{" "}
                LinkedIn
              </li>
            </a>
            <a href="https://brendononeill.github.io/Portfolio-Revamp/index.html">
              <li className="footer-links">
                <img
                  src="../folder.svg"
                  alt="portfolio logo"
                  width="20px"
                  height="20px"
                />{" "}
                PortFolio
              </li>
            </a>
          </ul>
        </div>
        <div className="footer-sections">
          <h4>Brendon O'Neill 2022</h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
