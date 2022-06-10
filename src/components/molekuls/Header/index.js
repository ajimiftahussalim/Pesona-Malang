import React from 'react'
import { Logo } from '../../../assets';

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#fff'}}>
      <div className="container d-flex">
        <a className='navbar-brand mx-3 flex-grow-1' href="/">
          <img src={Logo} width="50" height="50" className="d-inline-block align-center" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-link me-4 active" href="/">Home</a>
            <a className="nav-link me-4" href="/list-tour">List Wisata</a>
            <a className="nav-link me-4" href="/map-tours">Map Wisata</a>
            <a className="nav-link me-4" href="/about-us">Tentang Kami</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header;
