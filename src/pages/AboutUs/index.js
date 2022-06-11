import React from 'react';
import { Aji, Disha, Eko, Faisal, Logo } from '../../assets';

const AboutUs = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
                <img src={Logo} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
                <p className="lead">Pesona Malang merupakan sebuah website sistem informasi
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
        <div className='p-5' style={{backgroundColor: '#21AEE4', width: '100%'}}>
            <h2 className='text-center text-white'>Tim Kami</h2>
            <div className='container mx-auto'>
            <div className='row'>
            <div className='p-3 col-lg-6'>
                    <div className='card p-5'>
                        <img src={Eko} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                        <h4 className='text-center'>Eko Rahayu Widodo</h4>
                        <p className='text-center' style={{color: '#3E619B'}}>Web Developer</p>
                        <p className='text-center'>“Halo, Saya mahasiswa semester 6 dari prodi
                            informatika, Universitas Persada Indonesia Y.A.I”
                        </p>
                        <p>WhatsApp</p>
                        <p>08813536127</p>
                        <p>Alamat</p>
                        <p>Jakarta Pusat, DKI Jakarta</p>
                        <a href='https://www.linkedin.com/in/eko-rahayu-widodo-989416231/' className='btn btn-primary'>View More</a>
                    </div>
                </div>
                <div className='p-3 col-lg-6'>
                    <div className='card p-5'>
                        <img src={Faisal} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                        <h4 className='text-center'>Mohammad Faisal Ramdhani</h4>
                        <p className='text-center' style={{color: '#3E619B'}}>Web Developer</p>
                        <p className='text-center'>“Halo, Saya mahasiswa semester 6 dari prodi
                            Bisnis Digital, Universitas Pendidikan Indonesia”
                        </p>
                        <p>WhatsApp</p>
                        <p>08817895164</p>
                        <p>Alamat</p>
                        <p>Bandung, Jawa Barat</p>
                        <a href='https://www.linkedin.com/in/faisalramdhanii' className='btn btn-primary'>View More</a>
                    </div>
                </div>
            </div>
            <div className='row'>
            <div className='p-3 col-lg-6'>
                    <div className='card p-5'>
                        <img src={Aji} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                        <h4 className='text-center'>Aji Miftahus Salim</h4>
                        <p className='text-center' style={{color: '#3E619B'}}>Web Developer</p>
                        <p className='text-center'>“Halo, Saya mahasiswa semester 6 dari prodi
                            Teknik Informatika, Universitas Bina Sarana Informatika”
                        </p>
                        <p>WhatsApp</p>
                        <p>082218827066</p>
                        <p>Alamat</p>
                        <p>Jakarta Barat, DKI Jakarta</p>
                        <a href='https://www.linkedin.com/in/aji-miftahus-salim-8456a121a' className='btn btn-primary'>View More</a>
                    </div>
                </div>
                <div className='p-3 col-lg-6'>
                    <div className='card p-5'>
                        <img src={Disha} className='mx-auto' style={{borderRadius: '50%'}} width={100} alt='avatar img' />
                        <h4 className='text-center'>Dishanubari Pramudia</h4>
                        <p className='text-center' style={{color: '#3E619B'}}>Web Developer</p>
                        <p className='text-center'>“Halo, Saya mahasiswa semester 6 dari prodi
                            Teknik Informatika, Universitas Islam Nusantara”
                        </p>
                        <p>WhatsApp</p>
                        <p>082120207290</p>
                        <p>Alamat</p>
                        <p>Bandung, Jawa Barat</p>
                        <a href='https://www.linkedin.com/in/dishanubari-pramudia-682409231' className='btn btn-primary'>View More</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;
