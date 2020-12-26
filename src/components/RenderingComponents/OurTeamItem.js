import React from 'react';
import Content from './Content'

import '../../css/OurTeam.css'
//import {OurTeamData} from '../../constants';
class OurTeamItem extends React.Component{
    
    render(){
        return(
        <div class="team-member style4">
            <div class="avatar">
            <img src={this.props.image} width="100"/>
        </div>
        <div class="info">
            <div class="name">
            <a href={this.props.url} target="_blank">{this.props.name}​​</a>
            </div>
            <div class="option">{this.props.Description}​​
            </div>
        </div>
        </div>
        );
    }
}
    export default OurTeamItem;