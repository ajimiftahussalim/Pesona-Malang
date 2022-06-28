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
    <Gap height={90} />
    <div className='container col-xxl-8 px-4'>
      <div className='d-flex justify-content-end mt-0'>
        <a href='/list-tour' className='p-2 px-3 text-muted fs-3'>{backIcon}</a>
      </div>
      <div className='row flex-lg-row g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6 mt-2'>
          <img 
            src={`http://localhost:4000/${data.image}`} 
            className='rounded d-block img-fluid align-top'
            style={{objectFit: 'cover', width: '700px'}} 
            alt={`img ${data.name}`} 
            loading='lazy' />
        </div>
        <div className='col-lg-6 mt-3'>
        <h2 className='fs-2 text-info fw-bold'>{data.name}</h2>
          <p className='text-secondary'>Data Terakhir di update tanggal: {showFormattedDate(data.updatedAt)}</p>
          <div className='table-responsive'>
            <table class="table table-bordered">
            <tbody className='fw-lighter'>
              <tr>
                <td>Kategori</td>
                <td>{data.category}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>{data.address}</td>
              </tr>
              <tr>
                <td>Jam Operasional</td>
                <td>{data.operationalHour}</td>
              </tr>
              <tr>
                <td>Tiket</td>
                <td className='fw-bold text-warning'>{data.ticket}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>
                  <div className='mb-3'style={{color: 'gold'}}>
                    {Array(data.rating).fill(<StarIcon className='star'/>)}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Deskripsi</td>
                <td>{data.description}</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Gap height={70} />
  </div>
  )
}

export default withRouter(DetailTour);