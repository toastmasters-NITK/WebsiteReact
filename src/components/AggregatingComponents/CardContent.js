import React from 'react';

import Card from '../RenderingComponents/Card';
import "../../css/CardContent.css";
class CardContent extends React.Component{
    render(){
        const CardRenderList=this.props.cardData.map(({Title,Description,url,image})=>{
            return (
                <Card key={Title} title={Title} desc={Description} url={url} img={image} />
            );
        });
        return(
            <section class="card-content section">
                <div class="container">
                    <div class="row center">
                        {CardRenderList}
                    </div>
                </div>
            </section>
        );
    }
}
export default CardContent;