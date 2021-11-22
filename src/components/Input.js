import React, {useState, useEffect} from 'react';
import '../style/main.css'
import '../style/input/input.css'
import iconbrandrecognition from '../images/icon-brand-recognition.svg';
import icondetailedrecords from '../images/icon-detailed-records.svg';
import iconfullycustomizable from '../images/icon-fully-customizable.svg';
import axios, { Axios } from 'axios'
import ShortenedLink from './ShortenedLink';
import validator from 'validator';
import {completeData} from "../contexts/completeData.js"



function Input(){
     
    const [link, setLink] = useState("");
    const [result,setResult] = useState("")

    
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

    /////////////////////// FORM VALIDATION /////////////////

    


 /////////////////////// SUBMIT /////////////////

        const onChange = (e) =>{
            setLink(e.target.value);
            
        }
            

    const submit = (e) =>{
        if (validator.isURL(link)) {
        e.preventDefault();  
        setLink('')        
        setComplete([...complete,{link, result}])
            console.log('Is Valid URL')
        } else {
            e.preventDefault();  
            alert("Not a link. Try again.")
        }
    }   
   
   
    /////////////////////// API REQUEST /////////////////

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`).then((response)=>{
                console.log(response)
                setResult(response.data.result.short_link)
             }).catch(err =>{
                 console.log(err)
             })
        }
        fetchData()
    },[link])

    

    //////////////////////////////////////////////
    return(
        <section className="input-container mt-5 pb-sm-5 ">

            <div className="input-form d-flex   justify-content-center">
                <form onSubmit={submit} className="container  d-md-flex justify-content-md-center align-items-md-center text-center rounded p-4 position-absolute w-100">
                    <input type="url" id="shorten-link" value={link} onChange={onChange}  className="col-md-8 col-12 p-2 rounded-pill" type="text" required placeholder="Shorten your link here..." />
                    <button type="submit" className="btn my-1 d-flex mx-auto mx-md-2 btn-outline-light mx-2  my-md-0 " >Shorten it!</button>


                </form>  
                 
            </div>
            <completeData.Provider value={{complete, setComplete}}>
            <ShortenedLink />
            </completeData.Provider>    
                    
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