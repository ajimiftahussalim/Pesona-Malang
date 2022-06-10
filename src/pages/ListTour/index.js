import React, { useEffect, useState } from 'react';
import { Gap, TourItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setDataTour } from '../../config/redux/action';

const Home = () => {
  const [counter] = useState(1);
  const {dataTour} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataTour(counter))
  }, [counter, dispatch])

  return (
    <div className='container'>
      <Gap height={40} />
      <h2 className='text-center'>Daftar Destinasi Wisata</h2>
      <div className='d-flex flex-wrap mx-auto'>
        {dataTour.map((tour) => {
          return (
            <TourItem 
              key={tour._id}
              image={`http://localhost:4000/${tour.image}`}
              name={tour.name}
              category={tour.category}
              address={tour.address}
              operationalHour={tour.operationalHour}
              ticket={tour.ticket}
              description={tour.description}
              date={tour.createdAt}
              _id={tour._id}
            />
          )
        })}
      </div>
      <Gap height={40} />
    </div>
  )
}

export default Home;
