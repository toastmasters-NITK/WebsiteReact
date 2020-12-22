import React from 'react';

import "../../css/Footer.css";
class Footer extends React.Component{
    render(){
        return(
            <footer class="bg-dark footer-section">
                <div class="section">
                    <div class="row">
                        <div class="col-md-8">
                                <h4 class="text-center">CONTACT US!</h4>
                                <form action="https://airform.io/toastmasters@nitk.edu.in" method="post">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputName">Name</label>
                                            <input type="text" class="form-control" id="inputName"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">E-Mail</label>
                                            <input type="email" class="form-control" id="inputEmail"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Subject</label>
                                        <input type="text" class="form-control" id="inputAddress"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        <div class="col-md-4 text-center">
                            <div class="col-12">
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