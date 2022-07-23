
import './Header.css'
import user from '../../img/user.png';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState} from 'react';





const Header=() =>{
    const [users,setusers]=useState([{}])
   {/*useffect*/}
    function Heady()
      {

        fetch("http://localhost:3000/api/getAll") /*nedina api*/
        .then(response => response.json()) /*reponse json */
        .then(response => console.log(response /*7atineh f west users list*/ ))
            
            

      
       }
    useEffect(() => {Heady()},[])

  {/* useNavigate hook*/ }  

    const navigate = useNavigate();
  /**/
  const userposts=(headerId)=>{
      navigate('/Posts',
      {
        state:{
            headerId
        }}) 
      
      }


    return(

      

       <div className="header">
           
            
    
            <h1 className='titre'>USERS</h1> 
                  <div className="users">
                  {users.map((element) => (
                   <table className='user'> 
                   <tr>
                        
                       <td> <img className="img"src={user} alt=''/></td>
                        <td>
                        <div className="name">{element.name}</div>
                        <div className='email'>{element.email}</div>
                       
                        <button className="button i-button" onClick={()=>{userposts(element._id)}}>see posts</button>
                        </td>      
                   </tr>
                     
                  </table>
                  ))}
    </div>
            </div>
           
            
            
           
             
             
              
        

        
    )}

    export default Header  