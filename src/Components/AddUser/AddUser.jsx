import './AddUser.css'
import React from 'react'

import { useState } from 'react'





const AddUser=() =>{
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    function add(){
      
        fetch("http://localhost:3000/api/post", 
        { 
            method:"POST",
            headers: {
                'Content-Type': 'application/json,  text/plain, */*'
            },
            mode: 'cors',
            body:JSON.stringify({
                name:"ghaya",
                email:"ghayaderbali20@gmail.com",
            })
        }).then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
       
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

           
                
                <input type="text" name='user_name' className='user'placeholder='Name'/>
                <input type="email" name='user_email' className='user'placeholder='Email'/>
                
                <input type="submit" value="Add" className='button' onClick={()=>{add()}}/>
                
                <div className="blur c-blur1" style={{background:'var(--purple)',}}></div>
               
            
        </div>
        </div>
            
            
           
             
             
              
        

        
    )}

    export default AddUser  