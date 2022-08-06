
import './Posts.css'
import React, { useEffect, useState} from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import AddPosts from './AddPosts';

const Posts =() =>{
   /* let navigate=useNavigate()*/
   /**import { useNavigate } from 'react-router-dom'; */



   const [posts,setposts]=useState([{}])
   {/*useffect*/}
    function Posts()
      {

        fetch("http://localhost:3001/posts") /*nedina api*/
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
        <div className='userId'>UserID: {location.state.headerId}</div>
        <div className='list'>
        {posts.map((po) => {
          if (po.userId==location.state.headerId){
          return(




<div className='post'> 
     
     
     
     <div className='title'>  {po.title}</div>
     <div className="body"> {po.body}</div>
     
     <button className="button" onClick={()=>{postComments(po._id)}}>see comments</button>
           
  
</div>

          )}})}
          </div>
          

          <AddPosts userId={location.state.headerId}/>
          </div> 






        
       
     

      
        
    )
}
export default Posts