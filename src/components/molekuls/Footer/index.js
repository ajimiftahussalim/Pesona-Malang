import React from 'react';
import { Logo } from '../../../assets';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <footer className='card-footer text-center text-lg-start' style={{backgroundColor: '#F4F4F5'}}>
        <div className='container p-4 pb-0'>
          <section>
            <div className='row'>
              <div className='col-md-3 mx-auto mt-3'>
                <img src={Logo} width='150' height='150' className='mb-1' style={{display: 'block',margin: '0 auto'}} alt='logo footer' />
                <div className='text-center mb-3'>
                  <a
                    className='btn btn-outline-light btn-floating text-primary'
                    href='/'
                    role='button'><FacebookIcon />
                  </a>
                  <a
                    className='btn btn-outline-light btn-floating text-info'
                    href='/'
                    role='button'><TwitterIcon />
                  </a>
                  <a
                    className='btn btn-outline-light btn-floating text-danger'
                    href='/'
                    role='button'><YouTubeIcon />
                  </a>
                  <a
                    className='btn btn-outline-light btn-floating'
                    style={{color: '#833AB4'}}
                    href='/'
                    role='button'><InstagramIcon />
                  </a>
                </div>
              </div>
              <hr className='w-100 clearfix d-md-none' />
              <div className='col-md-6 col-lg-5 mt-3'>
                <h6 className='text-uppercase mb-4 fw-bold'>Sistem Informasi dan Pemetaan Geografis Destinasi Wisata Kota Malang</h6>
                <p className='fw-lighter'>
                  Memberikan referensi yang lengkap terkait destinasi wisata di kota malang yang akan
                  memudahkan kamu untuk memilih destinasi wisata mana yang ingin kamu kunjungi.
                </p>
              </div>
              <hr className='w-100 clearfix d-md-none' />
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 fw-bold'>
                  Navigation
                </h6>
                <p>
                  <a href='/' className='text-decoration-none text-info'>Home</a>
                </p>
                <p>
                  <a href='/list-tour' className='text-decoration-none text-info'>List Wisata</a>
                </p>
                <p>
                  <a href='/map-tour' className='text-decoration-none text-info'>Map Wisata</a>
                </p>
                <p>
                  <a href='/about-us' className='text-decoration-none text-info'>Hubungi Kami</a>
                </p>
                <p>
                  <a href='/about-us' className='text-decoration-none text-info'>Tentang Kami</a>
                </p>
              </div>
            </div>
          </section>
        <hr className='my-3' />
        <section className='p-3 pt-0'>
          <div className='text-center'>
            <div className='p-3'>
              <span>© 2022 - </span>
              <a href='/' className='text-decoration-none text-info'>Pesona Malang</a>
            </div>
          </div>
        </section>
        </div>
      </footer>
    </>
  )
}

export default Footer;
