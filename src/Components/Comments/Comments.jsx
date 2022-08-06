
import './Comments.css'
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import AddComments from './AddComments';

const Comments =() =>{
   /* let navigate=useNavigate()*/
   /**import { useNavigate } from 'react-router-dom'; */



   const [comments,setcomments]=useState([{}])
   {/*useffect*/}
    function  Comments()
      {

        fetch("http://localhost:3001/comment") /*nedina api*/
        .then(response => response.json()) /*reponse json */
        .then(response => setcomments(response /*7atineh f west posts list*/ ))
            
            
       }
        useEffect(() => {Comments()},[])
       /*hook useLocation */
       const location =useLocation();
       /*useNavigate*/
       


       



    return(
        <div className='posts'>
        <p className='titre'>Comments</p>
        <div className='userId'>PostID: {location.state.Id}</div>
        <div className='list'>
        {comments.map((po) => {
          if (po.postId==location.state.Id){
          return(




<div className='post'> 
     
     
     
     <div className='title'>  {po.name}</div>
     <div className="body"> {po.body}</div>
     
    
           
  
</div>

          )}})}
          </div>
          

          <AddComments /*postId={location.state.Id}*//>
          </div> 






        
       
     

      
        
    )
}
export default Comments