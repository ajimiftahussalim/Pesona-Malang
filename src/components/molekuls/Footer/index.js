import React from 'react';
import { Logo } from '../../../assets';

const Footer = () => {
  return (
    <>
      <div className='card-footer' style={{backgroundColor: '#42506B'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 align-middle">
              <img src={Logo} width="150" height="150" className="d-inline-block align-center" alt="" />
            </div>
            <div className="col-sm-8">
              <div className='align-middle mt-4'>
              <h5 className='text-white'>Website Sistem Informasi Destinasi Wisata Kota Malang</h5>
              <p className='text-muted'>memberikan referensi yang lengkap terkait destinasi wisata di kota malang yang akan
                memudahkan kamu untuk memilih destinasi wisata mana yang ingin kamu kunjungi.
              </p>
              </div>
            </div>
            <div className="col"></div>
        </div>
      </div>
      </div>
      <div className='card-footer text-white' style={{backgroundColor: '#374957'}}>
          <p className="align-middle text-center">@ 2022 - Pesona Malang</p>
      </div>
    </>
  )
}

export default Footer;
