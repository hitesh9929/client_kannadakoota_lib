import React from 'react'
import ClubLogo from '../assets/knd.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg  p-2" id='nav-bg'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={ClubLogo} alt="Bootstrap" width="40" height="40" className='img-fluid rounded-circle' /> <span id='nav_title'> ಕನ್ನಡ ಕೂಟ</span> 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       
        
       
      </ul>
      <form className="d-flex" role="search">
        
        <Link className="btn btn-outline-danger text-dark fw-bold" to="/availBooks" type="submit">
          View Available Books
        </Link>
      </form>
    </div>
  </div>
</nav>

   </>
  )
}
