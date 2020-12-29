import React from 'react';

class CarouselSlide extends React.Component{ 
    render(){
        return(
            <div className="slide-component">
                <div className="title">
                    {this.props.header}
                </div>
                <div className="slide-content">
                    {this.props.Content}
                </div>
                <div className="avatar" >
                    {this.props.image?<img src={this.props.image} className="image" />:null}
                </div>
                <h4 className="name"><strong className="font-weight-bold">
                    {this.props.Name}</strong>
                </h4>
                <h6 className="description">
                    {this.props.Description}
                </h6>
            </div>
        );
    }
   
}

export default CarouselSlide;
