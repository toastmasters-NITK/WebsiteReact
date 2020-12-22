import React from 'react';

import {Link} from 'react-router-dom';
class NavLinkListItem extends React.Component{
    render(){
        return(
            <li class='navbar-item'>
                <Link  to={this.props.relativeUrl} class='nav-link' >
                    {this.props.content}
                </Link>
            </li>
        );
    }
}
export default NavLinkListItem;