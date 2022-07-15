import './Comments.css'
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
const Comments =() =>{
  



   const [comments,setcomments]=useState([{}])
   {/*useffect*/}
    function Comments()
      {

        fetch("https://jsonplaceholder.typicode.com/comments") /*nedina api*/
        .then(response => response.json()) /*reponse json */
        .then(response => setcomments(response /*7atineh f west comments list*/ ))
            
            
       }
        useEffect(() => {Comments()},[])
       /*hook useLocation */
       const location =useLocation();


    return(
        <div className='comments'>
            <h1 className='titre'>COMMENTS</h1>
        {comments.map((com) => {
          if (com.postId==location.state.Id){
          return(



<div className='users'>
<div className='comment'> 
     
     
     <div className="title">  {com.name}</div>
     <div className='body'> {com.body}</div>
  
           
  
</div>
</div>
          )}})}
          </div> 






        
       
     

      
        
    )
}
export default Comments