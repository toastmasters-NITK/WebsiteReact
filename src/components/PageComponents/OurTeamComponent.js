import React from 'react';

import OurTeam from '../AggregatingComponents/OurTeam';
import ImageAndContent from '../RenderingComponents/ImageAndContent';
import PageTitle from '../RenderingComponents/PageTitle';

import {AboutUsPresident} from '../../constants';
class OurTeamComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    Our Team
                </PageTitle>
                <ImageAndContent 
                    title={AboutUsPresident.title}
                    text={AboutUsPresident.text} 
                    heading1={AboutUsPresident.imgHeading1} 
                    heading2={AboutUsPresident.imgHeading2}
                    image={AboutUsPresident.img}
                    />
                <OurTeam center={true}/>
            </div>
            
        );
    }
}
export default OurTeamComponent;