import React from 'react';

import '../../css/OurTeam.css';
class OurTeamItem extends React.Component{
    
    render(){
        return(
        <div className="team-member style4">
            <div className="avatar">
                <img src={this.props.image}/>
            </div>
            <div className="info">
                <div className="name">
                    <a href={this.props.url} target="_blank">{this.props.Name}​​</a>
                </div>
                <div className="option">{this.props.Description}​​
                </div>
            </div>
        </div>
        );
    }
}
    export default OurTeamItem;