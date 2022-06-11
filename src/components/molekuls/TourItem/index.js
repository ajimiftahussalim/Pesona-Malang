import React from 'react'
import { useHistory } from 'react-router-dom';

const TourItem = (props) => {
  const history = useHistory();
  const {image, name, _id} = props;
  return (
    <>
      <div className="p-3 col-12 col-md-6 col-lg-4">
      <div className="card" style={{width:'18rem;'}} >
      <img src={image} height={300} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="fs-4">{name}</h2>
        <button className='btn btn-primary mx-auto' onClick={() => history.push(`/detail-tour/${_id}`)}>View More</button>
      </div>
    </div>
      </div>
    </>
  )
}

export default TourItem;
