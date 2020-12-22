import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Card from '../RenderingComponents/Card';
import Selector from '../AggregatingComponents/Selector';

import {ResourceButtonData, ResourceCardData} from '../../constants';
class ResourceComponent extends React.Component{
    render(){
        const ResourceCardComponents=ResourceCardData.data.map(({Title, Description,url,image,filterProp})=>{
            return(
                <Card key={Title} title={Title} desc={Description} url={url} img={image} filterProp={filterProp}/>
            );
        });
        return(
            <div>
                <PageTitle>
                    Resources
                </PageTitle>
                <Selector
                    buttonData={ResourceButtonData.data} 
                    defaultValue={ResourceButtonData.defaultValue} 
                    filterProperty={ResourceCardData.filterProperty}
                    components={ResourceCardComponents}
                />
            </div>
        );
    }
}
export default ResourceComponent;