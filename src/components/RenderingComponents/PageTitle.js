import React from 'react';

import '../../css/PageTitle.css';
class PageTitle extends React.Component{
    render(){
        return(
            <section className="page-title position-relative">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-white font-tertiary title-text">{this.props.children}</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default PageTitle;