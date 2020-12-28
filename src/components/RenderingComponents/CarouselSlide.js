import React from 'react';

class CarouselSlide extends React.Component{ 
    render(){
        return(
            <div className="slide-component">
                <div className="title">
                    {this.props.header}
                </div>
                <p class="content">
                    {this.props.Content}
                </p>
                <div className="avatar" >
                    <img src={this.props.image} className="image" />
                </div>
                <h4 class="name"><strong class="font-weight-bold">
                    {this.props.Name}</strong>
                </h4>
                <h6 class="description">
                    {this.props.Description}
                </h6>
            </div>
        );
    }
   
}

export default CarouselSlide;
