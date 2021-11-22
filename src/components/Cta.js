import React from 'react';
import '../style/main.css'

function Cta(){
    return(
        <section className=" container text-center p-5 p-md-4 m-md-5 d-md-flex d-flex-column justify-content-around">
          <h2 className="text-dark">Ready to discover other awesome tools?</h2>
            <a href="https://github.com/AnnaCalabrese">
               <button className="btn btn-outline-light">Yes, I want to see more</button> 
            </a>
        </section>
    )
}

export default Cta;