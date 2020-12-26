import React from 'react';

import PageTitle from '../RenderingComponents/PageTitle';
import Content from '../RenderingComponents/Content';
import Selector from '../AggregatingComponents/Selector';
import TextnImg from '../RenderingComponents/TextnImg';

import {AboutButtonData,AboutTextData,AboutContentData} from '../../constants';
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
                <TextnImg />
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
            </div>
        );
    }
}
export default AboutUsComponent;