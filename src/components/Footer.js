import React from 'react';
import '../style/main.css'
import '../style/footer/footer.css'
import iconfacebook from '../images/icon-facebook.svg';
import icontwitter from '../images/icon-twitter.svg';
import iconinstagram from '../images/icon-instagram.svg';

function Footer(){
    return(
        <footer className="container-fluid p-5">
            <div className="row d-flex align-items-baseline">
                <a className="col-lg-4 col-12 text-center text-lg-start" href="#">
                <h2>Shortly</h2>
                </a>  

                <small className="col-lg-4 text-center py-lg-0 py-4">Anna Calabrese © 2021 || Final Project</small>

                <div className="col-lg-4 col-md-12  text-center col-12 text-lg-end">
                    <a href="https://www.facebook.com/profile.php?id=100006141495805">
                        <img src={iconfacebook} alt="Logo"/>
                    </a>
                    <a href="https://twitter.com/?lang=en" className="mx-3">
                        <img src={icontwitter} alt="Logo"/>
                    </a>
                   
                    <a href="https://www.instagram.com/annacalabrese98/">
                    <img src={iconinstagram} alt="Logo"/>

                    </a>

                </div>  
            </div>
           
           

        </footer>
    )
}

export default Footer;