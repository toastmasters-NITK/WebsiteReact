import React from 'react';
import "../../css/ImageAndContent.css";

class ImageAndContent extends React.Component {

    render() {
        return (
            <div className="imageAndContent container">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="row">
                    <div className="col-md-8 content">
                        {this.props.text}
                    </div>
                    <div className="col-md-4 image-block">
                        <img src={this.props.image} alt="Image" />
                        <div className="heading1">{this.props.heading1}</div>
                        <div className="heading2">{this.props.heading2}</div>
                    </div>
                </div>

            </div>
        );

    };


};

export default ImageAndContent;