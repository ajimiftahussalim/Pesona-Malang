import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from '..';
import { Header } from '../../components';
import Footer from '../../components/molekuls/Footer';
import AboutUs from '../AboutUs';
import DetailBlog from '../DetailTour';
import ListTours from '../ListTour';
import './mainApp.scss';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
        <Header />
        <div className='content-wrapper'>
            <Router>
                <Switch>
                    <Route path="/list-tour">
                        <ListTours />
                    </Route>
                    <Route path="/map-tours">
                    </Route>
                    <Route path="/detail-tour/:id">
                        <DetailBlog />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
        <Footer />
    </div>
  )
}

export default MainApp;
