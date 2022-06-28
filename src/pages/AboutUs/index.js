import React from 'react';
import { Aji, Disha, Eko, Faisal, Logo } from '../../assets';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Gap } from '../../components';
import './aboutus.scss';

const AboutUs = () => {
  return (
    <div>
      <Gap height={120} />
      <div className='container col-xxl-8 px-4'>
        <h2 className='text-center text-info fw-bold'>Tentang Kami</h2>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-2'>
          <div className='col-lg-6'>
            <img src={Logo} class='d-block mx-lg-auto img-fluid' alt='logo pesona malang' width='400' height='400' loading='lazy' />
          </div>
          <div className='col-lg-6 mt-1'>
            <p className='lead'>Pesona Malang merupakan sebuah website sistem informasi
              Destinasi Wisata Kota Malang, yang memberikan kumpulan
              informasi destinasi wisata di kota Malang yang lengkap,
              beserta dengan pemetaan secara geografisnya, untuk
              memudahkan wisatawan dalam mencari informasi
              mengenai destinasi wisata yang ada di Kota Malang yang
              ingin dikunjungi, serta menjadi media promosi destinasi
              wisata yang ada di Kota Malang.
            </p>
          </div>
        </div>
      </div>
      <div className='p-2 bg-info'>
        <h2 className='text-center mt-4 text-white'>Tim Kami</h2>
        <div className='container mb-4 mx-auto'>
          <div className='row'>
            <div className='p-2 col-lg-6'>
              <div className='card p-5'>
                  <img src={Eko} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                  <h4 className='text-center'>Eko Rahayu Widodo</h4>
                  <p className='text-center text-info mb-1 '>Web Developer</p>
                  <p className='text-center fw-lighter fst-italic'>“Halo, Saya mahasiswa semester 6 dari prodi
                      informatika, Universitas Persada Indonesia Y.A.I”
                  </p>
                  <div className='text-center'>
                      <a href='https://www.linkedin.com/in/eko-rahayu-widodo-989416231/' className='mb-0 me-1'><LinkedInIcon /></a>
                      <a href='https://wa.me/628813536127' className='mb-0 me-1 text-success'><WhatsAppIcon /></a>
                      <a href='mailto:ekorahy@gmail.com' className='mb-0 me-1 text-danger'><EmailIcon /></a>
                      <a href='https://github.com/ekorahy' className='mb-0 me-1 text-dark'><GitHubIcon /></a>
                  </div>
              </div>
            </div>
            <div className='p-2 col-lg-6'>
              <div className='card p-5'>
                <img src={Faisal} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                <h4 className='text-center'>Mohammad Faisal Ramdhani</h4>
                <p className='text-center text-info mb-1'>Web Developer</p>
                <p className='text-center fw-lighter fst-italic'>“Halo, Saya mahasiswa semester 6 dari prodi
                  Bisnis Digital, Universitas Pendidikan Indonesia”
                </p>
                <div className='text-center'>
                  <a href='https://www.linkedin.com/in/faisalramdhanii' className='mb-0 me-1'><LinkedInIcon /></a>
                  <a href='https://wa.me/628817895164' className='mb-0 me-1 text-success'><WhatsAppIcon /></a>
                  <a href='mailto:faisalramdhani1316@gmail.com' className='mb-0 me-1 text-danger'><EmailIcon /></a>
                  <a href='https://github.com/faisalramdhani13' className='mb-0 me-1 text-dark'><GitHubIcon /></a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='p-2 col-lg-6'>
              <div className='card p-5'>
                <img src={Aji} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                <h4 className='text-center'>Aji Miftahus Salim</h4>
                <p className='text-center text-info mb-1'>Web Developer</p>
                <p className='text-center fw-lighter fst-italic'>“Halo, Saya mahasiswa semester 6 dari prodi
                  Teknik Informatika, Universitas Bina Sarana Informatika”
                </p>
                <div className='text-center'>
                  <a href='https://www.linkedin.com/in/aji-miftahus-salim-8456a121a' className='mb-0 me-1'><LinkedInIcon /></a>
                  <a href='https://wa.me/6282218827066' className='mb-0 me-1 text-success'><WhatsAppIcon /></a>
                  <a href='mailto:ajimiftahussalim15@gmail.com' className='mb-0 me-1 text-danger'><EmailIcon /></a>
                  <a href='https://github.com/ajimiftahussalim' className='mb-0 me-1 text-dark'><GitHubIcon /></a>
                </div>
              </div>
            </div>
            <div className='p-2 col-lg-6'>
              <div className='card p-5'>
                <img src={Disha} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                <h4 className='text-center'>Dishanubari Pramudia</h4>
                <p className='text-center text-info mb-1'>Web Developer</p>
                <p className='text-center fw-lighter fst-italic'>“Halo, Saya mahasiswa semester 6 dari prodi
                  Teknik Informatika, Universitas Islam Nusantara”
                </p>
                <div className='text-center'>
                  <a href='https://www.linkedin.com/in/dishanubari-pramudia-682409231/' className='mb-0 me-1'><LinkedInIcon /></a>
                  <a href='https://wa.me/6282120207290' className='mb-0 me-1 text-success'><WhatsAppIcon /></a>
                  <a href='mailto:dishanubaripramudiaa@gmail.com' className='mb-0 me-1 text-danger'><EmailIcon /></a>
                  <a href='https://github.com/dishanubari' className='mb-0 me-1 text-dark'><GitHubIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gap height={40} />
    </div>
  )
}

export default AboutUs;
