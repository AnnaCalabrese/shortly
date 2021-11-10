import React, {useState, useEffect} from 'react';
import '../style/main.css'
import '../style/input/input.css'
import iconbrandrecognition from '../images/icon-brand-recognition.svg';
import icondetailedrecords from '../images/icon-detailed-records.svg';
import iconfullycustomizable from '../images/icon-fully-customizable.svg';
import axios, { Axios } from 'axios'
import ShortenedLink from './ShortenedLink';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
function Input(){
     
    
    const [link, setLink] = useState("");
    const [originalLink, setOriginalLink] = useState('');
    const [result,setResult] = useState('')

    
        /////////////////////// LOCAL STORAGE /////////////////

    const getLocalItems = () =>{
        let list =localStorage.getItem('complete');
        if (list) {
            return JSON.parse(localStorage.getItem('complete'));
        } else{
            return[]
        }
    }



    const [complete, setComplete] = useState(getLocalItems())

    const submit = (e) =>{
        
        e.preventDefault();        
        setOriginalLink(link);
        setComplete([...complete,{link, result}])
        setLink('')
        
    }   

   
    /////////////////////// API REQUEST /////////////////

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`).then((response)=>{
                setResult(response.data.result.short_link)
             }).catch(err =>{
                 console.log(err)
             })
        }
        fetchData()
    },[link])


    const Delete = () =>{
        setComplete(complete.filter(el => el.id !== complete.id))
       }

    //////////////////////////////////////////////
    return(
        <section className="input-container mt-5 pb-sm-5 ">

            <div className="input-form d-flex   justify-content-center">
                <form onSubmit={submit} className="container  d-md-flex justify-content-md-center align-items-md-center text-center rounded p-4 position-absolute w-100">
                    <input type="text" id="shorten-link" value={link} onChange={(e) => setLink(e.target.value)} className="col-md-8 col-12 p-2 rounded-pill" type="text" required placeholder="Shorten your link here..." />
                    <button type="submit" className="btn my-1 d-flex mx-auto mx-md-2 btn-outline-light mx-2  my-md-0 " >Shorten it!</button>


                    <Tippy content="Delete all">
                        <button onClick={Delete} className="button-30 btn-delete" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eraser" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9"></path>
                        <line x1="18" y1="12.3" x2="11.7" y2="6"></line>
                        </svg>
                        </button>
                </Tippy>
                </form>  
                 
            </div>

            
            <ShortenedLink complete={complete} setComplete={setComplete} />
                
                    
            <div className="stats-container  container my-5">
                
                <div className="text-center ">
                    <h3>Advanced Statistics</h3>
                    <p className="mb-5">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
               
                <div className="row stats-block d-flex justify-content-center"> 
                               <div className="hr-block "> <hr /></div>

                    <div className="col-12 col-lg-4 stat m-3 p-3">
                        <img className="img-fluid  icon-stat" src={iconbrandrecognition} alt="Illustration Working"/>

                        <h4 className="my-3">Brand Recognition</h4>

                        <p>Boost your brand recognition with each clic. Generic links don't mean
                        a thing. Branded links help instill confidence in your content.</p>
                    </div>

                    <div className="col-12 col-lg-4 m-3 p-3 stat">
                    <img className="img-fluidicon-stat" src={icondetailedrecords} alt="Illustration Working"/>

                        <h4 className="my-3">Detailed Records</h4>
                        <p>Gain insights into who is clicking your links. Knowing when and where people
                        engage with your content helps inform better decisions.</p>
                    </div>

                    <div className="col-12 col-lg-4 m-3 p-3 stat">
                    <img className="img-fluid  icon-stat" src={iconfullycustomizable} alt="Illustration Working"/>

                        <h4 className="mt-2 mb-3">Fully Customizable</h4>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Input;