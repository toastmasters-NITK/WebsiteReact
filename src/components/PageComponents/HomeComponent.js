import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Content from '../RenderingComponents/Content';

import {HomeContent} from '../../constants';
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
            </div>
        );
    }
}
export default HomeComponent;