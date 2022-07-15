
import './Posts.css'
import React, { useEffect, useState} from 'react';
import { prettyDOM } from '@testing-library/react';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
const Posts =() =>{
   /* let navigate=useNavigate()*/
   /**import { useNavigate } from 'react-router-dom'; */



   const [posts,setposts]=useState([{}])
   {/*useffect*/}
    function Posts()
      {

        fetch("https://jsonplaceholder.typicode.com/posts") /*nedina api*/
        .then(response => response.json()) /*reponse json */
        .then(response => setposts(response /*7atineh f west posts list*/ ))
            
            
       }
        useEffect(() => {Posts()},[])
       /*hook useLocation */
       const location =useLocation();


    return(
        <div className='posts'>
            <h1 className='titre'>POSTS</h1>
        {posts.map((po) => {
          if (po.userId==location.state.headerId){
          return(



<div className='users'>
<div className='user'> 
     
     
     <div className="name">USERID : {po.userId}</div>
     <div className='email'> TITLE : {po.title}</div>
     <div className="id">ID : {po.id}</div>
     <button className="button i-button" >see comments</button>
           
  
</div>
</div>
          )}})}
          </div> 






        
       
     

      
        
    )
}
export default Posts