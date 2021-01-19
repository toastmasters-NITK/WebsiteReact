import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import NavLinkListItem from '../Navbar/NavLinkListItem';

import navLogoUp from "../../../src/images/Navbar/navLogoUp.png";
import navLogoDown from '../../../src/images/Navbar/navLogoDown.png';

import '../../css/Header.css';
import {NavLinkListDataBeforeMedia,NavLinkListDataAfterMedia} from '../../constants';

class Header extends React.Component{

    dropDownMenuRef=React.createRef();
    state={navImage:navLogoUp,colorRef:'color-secondary',width:"120"};

    NavLinkListItemBeforeMedia=NavLinkListDataBeforeMedia.map(({content, relativeUrl})=>{
        return (
            <NavLinkListItem key={content} content={content} relativeUrl={relativeUrl}/>
        );
    });

    NavLinkListItemAfterMedia=NavLinkListDataAfterMedia.map(({content, relativeUrl})=>{
        return (
            <NavLinkListItem key={content} content={content} relativeUrl={relativeUrl}/>
        );
    });

    componentDidMount()
    {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() 
    {
        window.removeEventListener('scroll',()=>{});
    }

    handleScroll= () => 
    {
        if (window.pageYOffset > 100){
            if(this.dropDownMenuRef.current.className.includes("show"))
                this.setState({navImage:navLogoDown,colorRef:'color-primary show',width:"105"});
            else
                this.setState({navImage:navLogoDown,colorRef:'color-primary',width:"105"});
        }
        else{
            if(this.dropDownMenuRef.current.className.includes("show"))
                this.setState({navImage:navLogoUp,colorRef:'color-secondary show',width:"120"});
            else
                this.setState({navImage:navLogoUp,colorRef:'color-secondary',width:"120"});
        }
    }
    
    render(){
        return(
                <Navbar sticky='top' className={"navbar "+this.state.colorRef}>
                    <Link className="navbar-brand font-tertiary h3" to="/">
                        <img id="nav-img" src={this.state.navImage} alt="Myself" width={this.state.width} height="90"/>
                    </Link>
                    <div className='navbar-collapse text-center'>
                        <ul className='navbar-nav ml-auto'>
                            {this.NavLinkListItemBeforeMedia}
                            <li className='navbar-item'>
                                    <button className="nav-link nav-link-button dropdown-toggle center" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        MEDIA
                                    </button>
                                    <div ref={this.dropDownMenuRef} id="dropdownNavMenu" className={"dropdown-menu "+this.state.colorRef} aria-labelledby="dropdownMenuButton">
                                        <Link className='dropdown-item' to='/media/blog'>
                                            Blogs
                                        </Link>
                                        <Link className='dropdown-item' to='/media/newsletter'>
                                            Newsletters
                                        </Link>
                                        <Link className='dropdown-item' to='/media/podcast'>
                                            Podcasts
                                        </Link>
                                    </div>
                            </li>
                            {this.NavLinkListItemAfterMedia}
                        </ul>
                    </div>
                </Navbar>
        );
    }
}
export default Header;
