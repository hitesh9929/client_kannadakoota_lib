import React from 'react'
import { useState ,useEffect} from 'react';
import Axios from 'axios';


export default function AvailBooks() {
  const [mydata,setmydata]=useState([]);


  const getlist=()=>{
    var url=`${process.env.REACT_APP_HOST}/available`;
Axios.get(url)
.then(res=>{
    setmydata(res.data);
console.log(mydata);

}).catch(err=>alert(err))
  }

  useEffect(()=>{
    getlist();

  },[]);
  
  return (
    <div>  <table className="table table-sm table-dark">
    <thead>
      <tr>
        <th >      </th>

        <th >ಪುಸ್ತಕದ ಹೆಸರು</th>
      </tr>
    </thead>
    <tbody>
    {mydata.map((item,index)=>(
      <tr key={index}>
              <th>{index+1}</th>
              <td>{item.name}</td>
            </tr>
      ))}
    </tbody>
  </table></div>
  )
}
