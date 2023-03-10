import React from 'react'
import PESLogo from '../assets/pes-logo-white.png';
import ClubLogo from "../assets/knd.png";
export default function Footer() {
  return (
    <>
  <footer
  className=" page-footer font-small cyan darken bg-dark "
  style={{  borderTop: "2px solid #eceeef" }}
>
  <div className="container d-flex justify-content-around p-1 ">
    <div className="container" id="club-name">
      <img
        src={ClubLogo}
        width={150}
        height={150}
        className="img-fluid rounded-circle mt-5"
        alt="..."
      />
      
    </div>
    <div className="container mt-5 pt-5" id="icons">
      {/* <div class="col-md-4 col-sm-6 col-xs-12"> */}
      <center>
        {" "}
        <ul className="social-icons">
          <li>
            <a className="instagram" href="/">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a className="twitter" href="/">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="dribbble" href="/">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a className="linkedin" href="/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </center>
    </div>
    <div className="container" id="pes-logo">
      <img
        src={PESLogo}
        width={250}
        height={250}
        className="img-fluid  p-4"
        alt="..."
      />
    </div>
  </div>
  <div className="container text-center py-1 text-light ">
  PESU ಕನ್ನಡ ಕೂಟ 2023 ● All rights reserved
    <br />
    Made with ❣️ by ಕನ್ನಡ ಕೂಟ Web Dev Team
  </div>
</footer>

    </>
  )
}
