import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setDataTour } from '../../config/redux/action';
import { Gap } from '../../components';
import { useHistory } from 'react-router-dom';

const MapTour = () => {
    const history = useHistory();
    const [counter] = useState(1);
    const {dataTour} = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100vh',
        latitude: -7.983908,
        longitude: 112.621391,
        zoom: 10,
    });

    useEffect(() => {
        dispatch(setDataTour(counter))
      }, [counter, dispatch])

      const handleMarkerClick = (id) => {
        setCurrentPlaceId(id)
      }

    return (
        <div>
          <Gap height={90} />
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken='pk.eyJ1Ijoid2VzaGxhIiwiYSI6ImNsNGYxbGV5czA0ZHIzY255bWxhMzZjaXcifQ.P56VGiSAWuMynD38I-PUIg'
                onViewportChange={nextViewport => setViewport(nextViewport)} 
                mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
            >
            {dataTour.map((tour) => (
                <>
                    <Marker
                    latitude={tour.lat}
                    longitude={tour.long}
                    offsetLeft={-20}
                    offsetTop={-10}
                    key={tour._id}
                  >
                    <RoomIcon
                      style={{fontSize:viewport.zoom*3, color: 'tomato', cursor: 'pointer'}}
                      onClick={() => handleMarkerClick(tour._id)}
                    />
                  </Marker>
                  {tour._id === currentPlaceId &&
                    <Popup
                      latitude={tour.lat}
                      longitude={tour.long}
                      closeButton={true}
                      closeOnClick={false}
                      anchor='left'
                      maxWidth='100px'
                      onClose={() => setCurrentPlaceId(null)}
                    >
                        
                      <div className='p-2' style={{width: '200px'}}>
                        <img src={`http://localhost:4000/${tour.image}`} width={'100%'} height={100} style={{objectFit: 'cover'}} alt={`img ${tour.name}`}></img>
                        <h4 className='fw-bold mb-1 mt-1 text-primary fs-5'>{tour.name}</h4>
                        <p className='mb-1 fw-lighter fs-6'>{tour.category}</p>
                        <div className='mb-3'style={{color: 'gold'}}>
                          {Array(tour.rating).fill(<StarIcon className='star'/>)}
                        </div>
                        <button className='btn btn-primary mb-0' onClick={() => history.push(`/detail-tour/${tour._id}`)}>View More</button>
                      </div>
                    </Popup>
                    }
                </>
            ))}
            </ReactMapGL>
            <Gap height={20} />
        </div>
    )
}

export default MapTour;
