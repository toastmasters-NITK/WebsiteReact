import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import TextnImg from '../RenderingComponents/TextnImg';
import {AwardsData} from '../../constants';

class AwardsComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    Awards
                </PageTitle>
                <TextnImg 
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