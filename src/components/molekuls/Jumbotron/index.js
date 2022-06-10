import React from 'react';
import { useHistory } from 'react-router-dom';

const Jumbotron = ({img}) => {
const history = useHistory();
  return (
    <div>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
                <p className="lead">Bingung mau healing kemana?</p>
                <h1 className="display-5 fw-bold lh-1 mb-3">Temukan Destinasi Wisata Terbaik di <span style={{ color: '#3E619B' }}>Kota Malang</span></h1>
                <p className="lead">dengan referensi yang lengkap akan memudahkan kamu untuk memilih
                    destinasi wisata mana yang ingin kamu kunjungi.
                </p>
                <button className='btn btn-primary fs-5 px-4' style={{backgroundColor: '#3E619B'}} onClick={() => history.push('/list-tour')}>Search Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Jumbotron;
