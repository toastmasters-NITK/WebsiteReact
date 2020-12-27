import { extend } from 'jquery';
import React from 'react';
import "../../css/TextnImg.css";

class TextnImg extends React.Component {

    render() {
        return (
            <div className="container">
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

export default TextnImg;