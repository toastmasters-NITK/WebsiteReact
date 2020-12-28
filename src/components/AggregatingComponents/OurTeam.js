import React from 'react';
import Content from '../RenderingComponents/Content';

import {OurTeamData} from '../../constants';
import OurTeamItem from "../RenderingComponents/OurTeamItem";
class OurTeam extends React.Component{

        PresidentComponent=(
            <div className="col-md-12 col-sm-6">
                <OurTeamItem 
                    Name={OurTeamData.President.Name}  
                    Description={OurTeamData.President.Description} 
                    url={OurTeamData.President.url}
                    image={OurTeamData.President.image} 
                />
            </div>
        );
        OurTeamComponents=OurTeamData.OurTeam.map(({Name,Description,url,image})=>{
            return(
            <div className="col-md-3 col-sm-6">
                <OurTeamItem Name={Name} Description={Description} url={url} image={image} />
            </div>
            );
        });

        render(){
            
            return(
            <div>
                <Content 
                    header={OurTeamData.Content.Header} 
                    content={OurTeamData.Content.Description}
                    center={this.props.center}
                />
                <div className="container">
                    <div className="row">
                        {this.PresidentComponent}​​
                        {this.OurTeamComponents}
                    </div>
                </div>​​
            </div>
            );
        }
    }

export default OurTeam;