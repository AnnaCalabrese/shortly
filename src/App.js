import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Cta from "./components/Cta";
function App(){
    return(
        <div>
           <Header/>
           <Input />
            <Cta />
           <Footer/>
        </div>
    )
}
export default App