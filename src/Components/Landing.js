import React from 'react'
import {Link} from "react-router-dom";
export default function Landing() {


  return (
   <>
   <section className="landing bg-dark">
   <div className=" justify-content-center text-center d-flex flex-column " id='title'>
   <div className="container ms-1">
   <lottie-player
  src="https://assets9.lottiefiles.com/packages/lf20_wsdpcof3.json"
  background="transparent"
  speed={1}
  style={{ width: 300, height: 300 }}
  loop=""
  autoPlay=""
/>

   </div>
   <div className="container  d-flex mt-3">
    <h1 className="mt-5" id='grad-css'>ಓದು ಗೂಡು</h1>
   </div>
   </div>
   <div className="buttons container mt-5 text-center pb-5 d-grid gap-1 col-4 p-4 mx-aut0 ">
    <Link className="btn btn-info p-2 m-2 btn-lg" to="/QrScanner">Hire a Book</Link> 
    <Link className="btn btn-info p-2 m-2 btn-lg" to='/QrScanner'>Return  Book</Link>
   </div>
   
   </section>
   </>
  )
}
