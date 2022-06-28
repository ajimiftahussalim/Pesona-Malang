import React from 'react';
import { useHistory } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const TourItem = (props) => {
  const history = useHistory();
  const {image, name,category, rating, _id} = props;
  return (
    <>
      <div className='p-3 col-12 col-md-6 col-lg-4'>
        <div className='card' style={{width:'18rem;'}} >
          <img src={image} height={200} class='card-img-top' style={{objectFit: 'cover'}} alt={`img ${name}`}/>
          <div className='card-body'>
            <h2 className='fs-4 fw-bold'>{name}</h2>
            <p className='text-secondary mb-1 fw-lighter'>{category}</p>
            <div className='mb-3' style={{color: 'gold'}}>
              {Array(rating).fill(<StarIcon className='star'/>)}
            </div>
            <button className='btn btn-info text-white' onClick={() => history.push(`/detail-tour/${_id}`)}>View More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourItem;
