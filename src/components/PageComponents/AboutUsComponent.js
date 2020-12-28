import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Content from '../RenderingComponents/Content';
import Selector from '../AggregatingComponents/Selector';
import ImageAndContent from '../RenderingComponents/ImageAndContent';
import Carousel from '../AggregatingComponents/Carousel';
import OurTeam from '../AggregatingComponents/OurTeam';

import {AboutButtonData,AboutTextData,AboutContentData, AboutUsPresident, DistrictLeaderTestimonials} from '../../constants';
class AboutUsComponent extends React.Component{

    render(){
        const AboutComponents=AboutTextData.data.map(({text,filterProp})=>{
            return(
                <p key={text} filterProp={filterProp} >
                    {text}
                </p>
            )
        });
        return(
            <div>
                <PageTitle>
                    About Us
                </PageTitle>
                <ImageAndContent 
                    title={AboutUsPresident.title}
                    text={AboutUsPresident.text} 
                    heading1={AboutUsPresident.imgHeading1} 
                    heading2={AboutUsPresident.imgHeading2}
                    image={AboutUsPresident.img}
                    />
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
                <OurTeam center={true}/>
                <Carousel data={DistrictLeaderTestimonials}/>
            </div>
        );
    }
}
export default AboutUsComponent;