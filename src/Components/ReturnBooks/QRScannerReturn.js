import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import QrReader from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

export default function QRScannerReturn() {
  let navigate=useNavigate();

    const [mydata,setmydata]=useState([]);
    const [loading,setloading]=useState(false);

    const [result,setResult] = useState(false)
    const [showResult,setShowResult] = useState(false)
const webError = (error)=>{
    if(error){
        console.log(error);
    }
}
const webScan = (result) =>{
if(result){
    
    alert("Successfuly Scanned!! ")
    setShowResult(true)
    setResult(result);
    const url=`${process.env.REACT_APP_HOST}/lib/`+result
    Axios.get(url)
    .then(res=>{
        setmydata(res.data);
    }).catch(err=>console.log(err))

}
}
const handlesubmit =()=>{
    const url=`${process.env.REACT_APP_HOST}/libreturn/`+result;
    setloading(true);

    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      
    })
  })
  .then(response => {
    setloading(false);
    alert("Book return success!!! Redirecting to home page");
    navigate('/');

  })
  .catch(error => {
    alert("An error occured please try again!!!")
    setloading(false);

  });

}
  if(loading){
    return (<>
      {/* <div class="loader">
          <img src="loader.gif" alt="Loading..."></img>
      </div> */}

    </>)
  } 
  return (
    <>
    <section className="Scanner bg-dark">
    
    {/* <input type="file" onChange={(e) => readCode(e)} /> */}
    <div className=" m-3">
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
<div className="container d-grid gap-1 col-4 p-4 mx-auto">
 { showResult ? ( <button className='btn btn-info btn-lg' onClick={handlesubmit}>Submit</button>) : null}
</div>
    </section>
    </>
  )
}

