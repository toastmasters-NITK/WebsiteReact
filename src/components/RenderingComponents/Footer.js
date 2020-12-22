import React from 'react';

import "../../css/Footer.css";
class Footer extends React.Component{
    render(){
        return(
            <footer className="bg-dark footer-section">
                <div className="section">
                    <div className="row">
                        <div className="col-md-8">
                                <h4 className="text-center">CONTACT US!</h4>
                                <form action="https://airform.io/toastmasters@nitk.edu.in" method="post">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputName">Name</label>
                                            <input type="text" className="form-control" id="inputName"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail">E-Mail</label>
                                            <input type="email" className="form-control" id="inputEmail"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Subject</label>
                                        <input type="text" className="form-control" id="inputAddress"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send</button>
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
                                <a href="#">
                                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;