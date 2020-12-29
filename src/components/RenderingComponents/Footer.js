import React from 'react';

import "../../css/Footer.css";
class Footer extends React.Component{

    state=({mailBody:"",name:"",subject:""});

    mailAddress="aditya.171co105@nitk.edu.in";

    handleChange=(e)=>{
        if(e.target.id==="name")
            this.setState({name:e.target.value});
        if(e.target.id==="subject")
            this.setState({subject:e.target.value});
        if(e.target.id==='mailBody')
            this.setState({mailBody:e.target.value.replace(/\n/g,"%0D%0A")});
    }

    render(){
        console.log(this.state.mailBody);
        return(
            <footer className="bg-dark footer-section">
                <div className="section">
                    <div className="row">
                        <div className="col-md-8">
                                <h4 className="text-center">CONTACT US!</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" onChange={this.handleChange} id="name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" className="form-control" onChange={this.handleChange} id="subject"/>
                                        </div>
                                    </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor="mailBody">Message</label>
                                        <textarea className="form-control" onChange={this.handleChange} id="mailBody" rows="3"/>
                                    </div>
                                    <a 
                                        href=
                                        {
                                            "mailto:"+this.mailAddress+
                                            "?subject="+this.state.subject+
                                            "&body="+this.state.mailBody+
                                            "%0D%0AWith Regards,%0D%0A"+this.state.name
                                        } 
                                        target='_blank' 
                                        className="btn btn-primary">
                                            Send
                                    </a>
                                </form>
                            </div>
                        <div className="col-md-4 text-center">
                            <div className="col-12">
                                <h4>SOCIAL MEDIA</h4>
                                <a href="https://www.facebook.com/NITKToastmasters">
                                    <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                                </a>
                                <a href="https://www.instagram.com/nitk_toastmasters/">
                                    <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCKN_Vetrt_TD7gIdUSocGig/featured">
                                    <img src="https://img.icons8.com/fluent/48/000000/youtube-play.png"/>
                                </a>
                                {/* <a href="#">
                                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;