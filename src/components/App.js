import React from "react";
import {Router, Route} from 'react-router-dom';

import history from '../history';

import Header from './Navbar/Header';
import Footer from './RenderingComponents/Footer';

import HomeComponent from './PageComponents/HomeComponent';
import AboutUsComponent from './PageComponents/AboutUsComponent';
import AwardsComponent from './PageComponents/AwardsComponent';
import EventComponent from './PageComponents/EventComponent';
import ResourceComponent from './PageComponents/ResourceComponent';
import OurTeamComponent from './PageComponents/OurTeamComponent';

import BlogComponent from './MediaComponents/BlogComponent';
import NewsletterComponent from './MediaComponents/NewsletterComponent';
import PodcastComponent from './MediaComponents/PodcastComponent';

import '../css/constants.css';

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Header/>
                    <div>
                        <Route path='/' exact component={HomeComponent}/>
                        <Route path='/about' exact component={AboutUsComponent}/>
                        <Route path='/awards'exact component={AwardsComponent}/>
                        <Route path='/events' exact component={EventComponent}/>
                        <Route path='/media/blog' exact component={BlogComponent}/>
                        <Route path='/media/newsletter' exact component={NewsletterComponent}/>
                        <Route path='/media/podcast' exact component={PodcastComponent}/>
                        <Route path='/resources' exact component={ResourceComponent}/>
                        <Route path='/ourTeam' exact component={OurTeamComponent}/>
                    </div>
                <Footer/>
            </Router>
        );
    }
}
export default App;