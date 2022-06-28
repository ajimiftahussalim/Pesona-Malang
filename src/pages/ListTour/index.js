import React, { useEffect, useState } from 'react';
import { Gap, TourItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setDataTour } from '../../config/redux/action';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  const [counter, setCounter] = useState(1);
  const {dataTour, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataTour(counter))
  }, [counter, dispatch])

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  }

  return (
    <div className='container'>
      <Gap height={100} />
      <h2 className='text-center text-info fw-bold'>Daftar Destinasi Wisata</h2>
      <div className='d-flex flex-wrap mx-auto'>
      {dataTour.length !== 0 ?
        dataTour.map((tour) => {
          return (
            <TourItem 
              key={tour._id}
              image={`http://localhost:4000/${tour.image}`}
              name={tour.name}
              category={tour.category}
              address={tour.address}
              operationalHour={tour.operationalHour}
              ticket={tour.ticket}
              rating={tour.rating}
              description={tour.description}
              updatedAt={tour.updatedAt}
              _id={tour._id}
            />
          )
        })
      : <div className='text-danger text-center mx-auto'>Data Kosong</div>}
      </div>
      <div className='container text-center mt-2 fw-bold'>
          <button className='btn btn-outline-light btn-floating text-secondary' onClick={previous}><ArrowBackIosIcon /></button>
          <span className='px-2'>{page.currentPage} / {page.totalPage}</span>
          <button className='btn btn-outline-light btn-floating text-secondary' onClick={next}><ArrowForwardIosIcon /></button>
        </div>
      <Gap height={40} />
    </div>
  )
}

export default Home;
