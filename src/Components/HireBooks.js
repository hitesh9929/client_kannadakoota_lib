import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function HireBooks() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading,setloading]=useState(false);

    let navigate=useNavigate();
    let params = new URLSearchParams(window.location.search);
    let pk=params.get('key');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };

    const handleSubmit =()=>{
      setloading(true);


      fetch(`${process.env.REACT_APP_HOST}/lib`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'book_name_id': pk,
        'User_name': name,
        'ph_number':phoneNumber,
        'mail_id':email

      })
    })
    .then(response => {
    setloading(false);

      alert("Book issue success");
      navigate('/')

    })
    .catch(error => {
    setloading(false);

      alert("Transactions Failed...contact kannadakoota admins");
      navigate('/');
    });
    }
    if(loading){
      return (<>
        {/* <div className="loader">
            <img src="loader.gif" alt="Loading..."></img>
        </div> */}
  
      </>)
    } 
  return (
   <>
   <section className="hire-books bg-dark">
    <Link className=' mt-1 btn btn-info text-light ' to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>Back </Link>
<form onSubmit={handleSubmit}>
    <div className="container  text-center p-5">

        
        <input type="text" required className="form-control m-2 " placeholder='Enter your Name' id="name" value={name} onChange={handleNameChange} />
      <br />
    
       
        <input type="email" required className="form-control m-2" id="email" placeholder='Enter your email id' value={email} onChange={handleEmailChange} />
       <br />
    
       
        <input type="tel" required className="form-control m-2" id="phone" placeholder='Enter your Phone number' value={phoneNumber} onChange={handlePhoneNumberChange} />
      
    
   </div>
<div className="container d-grid gap-1 col-4 p-4 mx-auto">
    <button type="submit" className='btn btn-info btn-lg' >Submit</button>
</div>
</form>

   </section>
   </>
  )
}
