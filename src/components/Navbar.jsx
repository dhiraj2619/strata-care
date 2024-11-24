import React from 'react'
import StrataLogo from '../assets/images/mainlogo.png'

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top py-3">
      <div className="container-fluid">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="logo">
            <a href="" className="navbar-brand">
                <img src={StrataLogo} className="img-fluid headerlogo" alt="" />
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto navbarmenu">
              <li className="nav-item">
                <a href="" className="nav-link main-links">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link main-links">About us</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link main-links">Services</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link main-links">Blogs</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link main-links">Contact us</a>
              </li>
              <li>
                <a href="" className="nav-link">
                  <i className="bi bi-search headersearch"></i>
                </a>
              </li>
              <button className="btn aptbtn">Appointment</button>
            </ul>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar