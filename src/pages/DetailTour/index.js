import React, { useEffect, useState } from 'react'
import { Gap } from '../../components';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import StarIcon from '@mui/icons-material/Star';
import Axios from 'axios';

const DetailTour = (props) => {
  const backIcon = <FontAwesomeIcon icon={faArrowCircleLeft} />
  const [data, setData] = useState({})
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/pesona-malang/tour/${id}`)
    .then(res => {
      setData(res.data.data)
    })
    .catch(err => {
      console.log('error: ', err);
    })
  })

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }

  return (
  <div>
    <Gap height={120} />
    <div className='container col-xxl-8 px-4'>
      <div className='d-flex justify-content-end mt-0'>
        <a href='/list-tour' className='p-2 px-3 text-muted fs-3'>{backIcon}</a>
      </div>
      <div className='row flex-lg-row g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6 mt-2'>
          <img
            tabIndex={0} 
            src={`http://localhost:4000/${data.image}`} 
            className='rounded d-block img-fluid align-top'
            style={{objectFit: 'cover', width: '700px'}} 
            alt={`gambar destinasi wisata ${data.name}`} 
            loading='lazy' />
        </div>
        <div className='col-lg-6 mt-3'>
        <h2 className='fs-2 text-info fw-bold'>{data.name}</h2>
          <p tabIndex={0} className='text-secondary'>Data Terakhir di update tanggal: {showFormattedDate(data.updatedAt)}</p>
          <div className='table-responsive'>
            <table class="table table-bordered">
            <tbody className='fw-lighter'>
              <tr>
                <td tabIndex={0}>Kategori</td>
                <td tabIndex={0}>{data.category}</td>
              </tr>
              <tr>
                <td tabIndex={0}>Alamat</td>
                <td tabIndex={0}>{data.address}</td>
              </tr>
              <tr>
                <td tabIndex={0}>Jam Operasional</td>
                <td tabIndex={0}>{data.operationalHour}</td>
              </tr>
              <tr>
                <td tabIndex={0}>Tiket</td>
                <td tabIndex={0} className='fw-bold text-warning'>{data.ticket}</td>
              </tr>
              <tr>
                <td tabIndex={0}>Rating</td>
                <td>
                  <div tabIndex={0} className='mb-3'style={{color: 'gold'}} aria-label='rating destinasi wisata'>
                    {Array(data.rating).fill(<StarIcon className='star'/>)}
                  </div>
                </td>
              </tr>
              <tr>
                <td tabIndex={0}>Deskripsi</td>
                <td tabIndex={0}>{data.description}</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Gap height={40} />
  </div>
  )
}

export default withRouter(DetailTour);