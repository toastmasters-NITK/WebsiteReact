import React from 'react';
import '../../css/PageTitle.css'

class PageTitle extends React.Component{
    render(){
        return(
            <section class="page-title position-relative">
                <div class="container ">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="text-white font-tertiary title-text">{this.props.children}</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default PageTitle;