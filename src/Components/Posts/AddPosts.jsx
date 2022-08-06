
import React from 'react'

import { useState } from 'react'
import './AddPosts.css'




const AddPosts=(props) =>{
    const[title,settitle]=useState("")
    const[body,setbody]=useState("")
    const[userId,setuserId]=useState("")
   /* const[userId,setuserId]=useState(props.userId) */
  
    function add(){
      
        fetch("http://localhost:3001/posts", 
        { 
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            
            body:JSON.stringify({
                title:title,
                body:body,
                userId: userId
            })
        }).then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) });
        
       window.location.reload(false);
    }




    return(

        <div className="addpost">
        <div className="w-left">
            <div className="awesome">
                <h1>NEW POST</h1>
                <div className="blur s-blur1" style={{background:'#ABF1FF94',}}></div>
            </div>    
        </div> 
        <div className="c-right">

           
             <table>
                <tr>
                <input type="text" name='post_title' className='user'placeholder='Title'onChange={val=>{settitle(val.target.value)}}/></tr>
                <tr>
                <input type="email" name='post_body' className='user'placeholder='Body'onChange={val=>{setbody(val.target.value)}}/></tr>
                <tr>
                <input type="text" name='userId' className='user'placeholder='userId'onChange={val=>{setuserId(val.target.value)}}/></tr>
                <tr>
                <input type="submit" value="Add" className='button' onClick={()=>{add()}}/></tr>
                </table>   
                
                <div className="blur c-blur1" style={{background:'var(--purple)',}}></div>
               
            
        </div>
        </div>
            
            
           
             
             
              
        

        
    )}

    export default AddPosts