import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import ImageAndContent from '../RenderingComponents/ImageAndContent';
import {AwardsData} from '../../constants';

class AwardsComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    Awards
                </PageTitle>
                <ImageAndContent 
                    title={AwardsData.title}
                    text={AwardsData.text} 
                    heading1={AwardsData.imgHeading1} 
                    heading2={AwardsData.imgHeading2}
                    image={AwardsData.img}
                />
            </div>
        );
    }
}
export default AwardsComponent;