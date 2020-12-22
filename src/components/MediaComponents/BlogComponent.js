import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import CardContent from '../AggregatingComponents/CardContent';

import {BlogCardData} from '../../constants';

class BlogComponent extends React.Component{
    render(){
        const blogCards=<CardContent cardData={BlogCardData} />
        console.log(blogCards);
        return(
            <div>
                <PageTitle>
                    Blogs
                </PageTitle>
                <CardContent cardData={BlogCardData}/>
            </div>
        );
    }
}
export default BlogComponent;