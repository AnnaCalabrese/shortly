import React from 'react';
import '../style/main.css'
import '../style/footer/footer.css'
import iconfacebook from '../images/icon-facebook.svg';
import icontwitter from '../images/icon-twitter.svg';
import iconpinterest from '../images/icon-pinterest.svg';
import iconinstagram from '../images/icon-instagram.svg';

function Footer(){
    return(
        <footer className="container-fluid p-5">
            <div className="row">
                <a className="col-lg-3 col-12 text-center text-md-start" href="#">
                <h2>Shortly</h2>
                </a>  

                <div className="col-lg-2 col-md-4 col-12 mt-3 d-flex flex-column text-center text-md-start">
                    <h5 className="mb-4">Features</h5>
                    <a href="#">Link Shortening</a>
                    <a className="my-3" href="#">Branded Links</a>
                    <a href="#">Analytics</a>
                </div> 

                <div className="col-lg-2 col-md-4 col-12 mt-3 d-flex flex-column text-center text-md-start">
                    <h5 className="mb-4">Resources</h5>
                    <a href="#">Blog</a>
                    <a className="my-3" href="#">Developers</a>
                    <a href="#">Support</a>
                </div>  

                <div className="col-lg-2 col-md-4 col-12 mt-3 d-flex flex-column text-center text-md-start">
                    <h5 className="mb-4">Company</h5>
                    <a href="#">About</a>
                    <a className="my-3" href="#">Our Team</a>
                    <a href="#">Careers</a>
                </div>

                <div className="col-lg-3 col-md-12 mt-3 text-center col-12 text-center text-md-start">
                    <a href="#">
                        <img src={iconfacebook} alt="Logo"/>
                    </a>
                    <a href="#" className="mx-3">
                        <img src={icontwitter} alt="Logo"/>
                    </a>
                    <a href="#">
                    <img src={iconpinterest} alt="Logo"/>

                    </a>
                    <a href="#" className="mx-3">
                    <img src={iconinstagram} alt="Logo"/>

                    </a>

                </div>  
            </div>
           


        </footer>
    )
}

export default Footer;