
import './Posts.css'
import React, { useEffect, useState} from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
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
       /*useNavigate*/
       const navigate = useNavigate();


       const postComments=(Id)=>{
        navigate('/Comments',
        {
          state:{
              Id
          }}) 
        
        }



    return(
        <div className='posts'>
        <p className='titre'>POSTS</p>
        {posts.map((po) => {
          if (po.userId==location.state.headerId){
          return(



<div className='users'>
<div className='post'> 
     
     
     
     <div className='title'>  {po.title}</div>
     <div className="body"> {po.body}</div>
     <button className="button" onClick={()=>{postComments(po.id)}}>see comments</button>
           
  
</div>
</div>
          )}})}
          </div> 






        
       
     

      
        
    )
}
export default Posts