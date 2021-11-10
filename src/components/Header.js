import React from 'react';

import logo from '../images/logo.svg';
import illustration from '../images/illustration-working.svg';
import '../style/main.css'


function Header(){
    return( 
    <header>
       <nav className="navbar navbar-expand-lg navbar-light  px-md-5 py-4">
        <div className="container-fluid p-4 p-md-0 align-items-center">
            
            <a class="navbar-brand" href="#shorten-link">                    
                    <img src={logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler border-0 px-md-0 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-0 px-lg-0" id="navbarTogglerDemo01">
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#shorten-link">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#shorten-link">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#shorten-link">Resources</a>
                    </li> 
                </ul>
                    <div class="d-flex">
                       <a href="#shorten-link">
                       <button class="btn btn-outline-light" type="submit">Sign Up</button></a>
                    </div>
            </div>
        </div>
    </nav>  

        <section className=" d-flex flex-column-reverse flex-xl-row text-center justify-content-between pb-3">
            <div className="m-md-auto w-md-50 px-md-5 py-md-3 py-5 p-4 text-center text-md-start">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed
                    insights on how your links are performing</p>
                   <a href="#shorten-link">
                       <button class="btn btn-outline-light mt-3" type="submit">Get Started</button>
                   </a> 
            </div>
            <div>
                <img className="img-fluid illustration pt-3" src={illustration} alt="Illustration Working"/>
            </div>     
        </section>
        
        <div className="container align-bottom mt-md-5 mt-0 justify-content-center my-4 d-flex">
         <a href="#shorten-link">
             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
         </a>
        </div>
    </header>
   
    )
}

export default Header