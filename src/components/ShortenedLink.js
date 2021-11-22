import React, {useEffect, useContext} from "react";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import {completeData} from "../contexts/completeData"
function ShortenedLink(){

    const {complete, setComplete} = useContext(completeData)
    
    useEffect(()=>{
        localStorage.setItem('complete', JSON.stringify(complete))
        
    },[complete])
    

    
    const Delete = (e) =>{
        setComplete(complete.filter(item => item.link !== e))        
    }

   ////////////////////////////////////////////////////////////
    return (
        complete.map(item =>(

        
            <div className="container d-md-flex   align-items-center  text-center mt-4 mt-md-2 p-2  d-flex-column item-container">
               <a className="col d-flex " href={item.link}>
            {item.link}
            </a>
            <div  className="col result-col mt-2 d-flex-column d-lg-flex  justify-content-around" >
                <small className="p-1 rounded ">{item.result}</small>
                
                <div className="mt-2 m-lg-0">

                <Tippy content="Click to copy">
                <button onClick={() =>  navigator.clipboard.writeText(item.result) ? alert("Copied to clipboard!") : null} class="button-30" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                <path d="M9 14l2 2l4 -4"></path>
                </svg>                </button>
                </Tippy>


                
                <Tippy content="Delete">
                        <button onClick={() => Delete(item.link)} className="button-30 btn-delete" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eraser" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9"></path>
                        <line x1="18" y1="12.3" x2="11.7" y2="6"></line>
                        </svg>
                        </button>
                </Tippy>
               </div>
            </div>  
            </div>
        
    ))

    )
}

export default ShortenedLink