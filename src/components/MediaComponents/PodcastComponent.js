import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import CardContent from '../AggregatingComponents/CardContent';

import { PodCastData } from '../../constants';
class PodcastComponent extends React.Component{
    render(){
        return(
            <div>
                <PageTitle>
                    Podcasts
                </PageTitle>
                <CardContent cardData={PodCastData}/>
            </div>
        );
    }
}
export default PodcastComponent;
