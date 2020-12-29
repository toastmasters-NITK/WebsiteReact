import React from "react";

import CarouselSlide from '../RenderingComponents/CarouselSlide';
import '../../css/Testimonials.css';

class Carousel extends React.Component {

    CarouselItems=this.props.data.map(({Name,Description,Content,image,header},index)=>{
        var isActive="";
        if(index===0){
            isActive="active";
        }
        return (
            <div className={`carousel-item ${isActive}`}>
                <CarouselSlide header={header} key={index} Name={Name} Description={Description} Content={Content} image={image} />
            </div>
        );
    });

    CarouselList=this.props.data.map(({},index)=>{
        var isActive="";
        if(index===0){
            isActive="active";
        }
        return (
            <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={isActive}></li>
        );
        
    })

    render(){
        return(
            <div className="carouselMain carousel-inner">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {this.CarouselList}
                    </ol>
                    <div className="carousel-inner">
                        {this.CarouselItems}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;