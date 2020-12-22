import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Selector from '../AggregatingComponents/Selector';
import Card from '../RenderingComponents/Card';

import {EventButtonData,EventCardData} from '../../constants';
class EventComponent extends React.Component{
    render(){
        const EventCardComponents=EventCardData.data.map(({Title, Description,url,image,filterProp})=>{
            return(
                <Card key={Title} title={Title} desc={Description} url={url} img={image} filterProp={filterProp}/>
            );
        });
        
        return(
            <div>
                <PageTitle>
                    Events
                </PageTitle>
                <Selector 
                    buttonData={EventButtonData.data} 
                    defaultValue={EventButtonData.defaultValue} 
                    filterProperty={EventCardData.filterProperty}
                    components={EventCardComponents}
                />
            </div>
        );
    }
}
export default EventComponent;