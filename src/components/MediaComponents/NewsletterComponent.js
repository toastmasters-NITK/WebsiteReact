import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import CardContent from '../AggregatingComponents/CardContent';

import { NewsletterData } from '../../constants';
class NewsletterComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    Newsletters
                </PageTitle>
                <CardContent cardData={NewsletterData}/>
            </div>
        );
    }
}
export default NewsletterComponent;