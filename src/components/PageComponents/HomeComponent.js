import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Content from '../RenderingComponents/Content';
import Carousel from '../AggregatingComponents/Carousel';

import {HomeContent,TestimonialContent} from '../../constants';
class HomeComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    NITK<br/>
                    Toastmasters
                </PageTitle>
                <Content 
                    header={HomeContent.header} 
                    content={HomeContent.content} 
                    relativeUrl={HomeContent.relativeUrl} 
                    urlText={HomeContent.urlText} 
                />
                <Carousel 
                    data={TestimonialContent.Testimonials}
                />
            </div>
        );
    }
}
export default HomeComponent;