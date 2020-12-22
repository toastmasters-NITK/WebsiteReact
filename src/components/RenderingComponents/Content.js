import React from 'react';
import {Link} from 'react-router-dom';

import '../../css/Content.css';
class Content extends React.Component{

    getUrlData=()=>{
        if(this.props.relativeUrl!==undefined){
            if(this.props.urlText!==""){
                return(
                    <Link to={this.props.relativeUrl} className="btn btn-transparent">
                        {this.props.urlText}
                    </Link>
                );
            }
            else{
                return (
                    <Link to={this.props.relativeUrl}/>
                );
            }
        }
        return null;
    }

    urlSection=this.getUrlData();

    render(){
        return(
            <section className="section">
                <div className="container content">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <h2 className="section-title">{this.props.header}</h2>
                            <p>{this.props.content}</p>
                            {this.urlSection}
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Content;