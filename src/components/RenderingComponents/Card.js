import React from 'react';

import '../../css/Card.css';
class Card extends React.Component{
    state={
        cardClass:"card"
    };

    handleMouseEnter = () => {
        this.setState({cardClass:"card shadow-lg"});
    }

    handleMouseLeave=()=>{
        this.setState({cardClass:"card"});
    }

    render(){
        const UrlSection=this.props.url!==undefined?(
                <a href={this.props.url} target="_blank" class="btn btn-xs btn-primary">
                    Read More
                </a>
            ):null;
        return(
            <div class="col-lg-4 col-sm-6 mb-4" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <article>
                    <div className={this.state.cardClass}>
                        <img class="rounded card-img-top" src={this.props.img}/>
                        <div class="card-body">
                            <h4 class="card-title"> 
                                {this.props.title}
                            </h4>
                            <p class="card-text">
                                {this.props.desc}
                            </p>
                            {UrlSection}
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}
export default Card;