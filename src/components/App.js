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
                        <Route path='/WebsiteReact' exact component={HomeComponent}/>
                        <Route path='/WebsiteReact/about' exact component={AboutUsComponent}/>
                        <Route path='/WebsiteReact/awards'exact component={AwardsComponent}/>
                        <Route path='/WebsiteReact/events' exact component={EventComponent}/>
                        <Route path='/WebsiteReact/media/blog' exact component={BlogComponent}/>
                        <Route path='/WebsiteReact/media/newsletter' exact component={NewsletterComponent}/>
                        <Route path='/WebsiteReact/media/podcast' exact component={PodcastComponent}/>
                        <Route path='/WebsiteReact/resources' exact component={ResourceComponent}/>
                        <Route path='/WebsiteReact/ourTeam' exact component={OurTeamComponent}/>
                    </div>
                <Footer/>
            </Router>
        );
    }
}
export default App;