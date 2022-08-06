
import React from 'react'

import { useState } from 'react'





const AddUser=() =>{
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    function add(){
      
        fetch("http://localhost:3000/user", 
        { 
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            
            body:JSON.stringify({
                name:name,
                email:email
            })
        }).then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) });
        
       window.location.reload(false);
    }




    return(

        <div className="addUser">
        <div className="w-left">
            <div className="awesome">
                <h1>NEW USER</h1>
                <div className="blur s-blur1" style={{background:'#ABF1FF94',}}></div>
            </div>    
        </div> 
        <div className="c-right">

           
             <table>
                <tr>
                <input type="text" name='user_name' className='user'placeholder='Name'onChange={val=>{setname(val.target.value)}}/></tr>
                <tr>
                <input type="email" name='user_email' className='user'placeholder='Email'onChange={val=>{setemail(val.target.value)}}/></tr>
                <tr>
                <input type="submit" value="Add" className='button' onClick={()=>{add()}}/></tr>
                </table>   
                
                <div className="blur c-blur1" style={{background:'var(--purple)',}}></div>
               
            
        </div>
        </div>
            
            
           
             
             
              
        

        
    )}

    export default AddUser  