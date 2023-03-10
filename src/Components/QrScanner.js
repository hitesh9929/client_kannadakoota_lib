import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-reader';
import Axios from 'axios';


export default function QRScanner() {
    const [mydata,setmydata]=useState([]);
    const [result,setResult] = useState("")
    const [showResult,setShowResult] = useState(false)
const webError = (error)=>{
    if(error){
        console.log(error);
    }
}
const webScan = (result) =>{
if(result){
    
    alert("Successfuly Scanned! Go ahead and fill your details")
    setShowResult(true);
    setResult(result);
    var url=`${process.env.REACT_APP_HOST}/lib/`+result;
    console.log(url);
    Axios.get(url)
    .then(res=>{
        setmydata(res.data);
    }).catch(err=>alert(err))
   
}
}
   
  return (
    <>
    <section className="Scanner bg-dark ">
   
    {/* <input type="file" onChange={(e) => readCode(e)} /> */}
    <div className=" m-3 pt-5">
       <QrReader
       
       delay={300}
       onError={webError}
       onScan={webScan}
    //    legacyMode={"user"}
       /> 
    </div>


<div className='container text-center text-light'>
    {mydata.map((post)=>{
        const {name,genre,author}=post;
        return(
            <div>
                <h4>{name}</h4>
                <h4>{genre}</h4>
                <h4>{author}</h4>
            </div>
        )
    })}
</div>


<div className="container d-grid gap-1 col-4 p-4 mx-auto pb-5">
 { showResult ? ( <Link className='btn btn-info btn-lg' to={`/hireBook/?key=${result}`}>Next </Link>) : null}
</div>
    </section>
    </>
  )
}


// axios.get(' ')