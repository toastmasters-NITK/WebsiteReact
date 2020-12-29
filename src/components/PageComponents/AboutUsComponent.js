import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Content from '../RenderingComponents/Content';
import Selector from '../AggregatingComponents/Selector';
import Carousel from '../AggregatingComponents/Carousel';

import {AboutButtonData,AboutTextData,AboutContentData, DistrictLeaderTestimonials} from '../../constants';
class AboutUsComponent extends React.Component{

    render(){
        const AboutComponents=AboutTextData.data.map(({text,filterProp})=>{
            return(
                <div key={text} filterProp={filterProp} >
                    {text}
                </div>
            )
        });
        return(
            <div>
                <PageTitle>
                    About Us
                </PageTitle>
                
                <Content 
                    header={AboutContentData.header} 
                    content={AboutContentData.content}
                >
                    <Selector 
                        buttonData={AboutButtonData.data} 
                        defaultValue={AboutButtonData.defaultValue} 
                        filterProperty={AboutTextData.filterProperty}
                        components={AboutComponents}
                    />
                </Content>
               
                <Carousel data={DistrictLeaderTestimonials}/>
            </div>
        );
    }
}
export default AboutUsComponent;