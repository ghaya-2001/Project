
import './Header.css'
import user from '../../img/user.png';


import React, {
 useEffect, useState} from 'react';
const Header=() =>{
    const [users,setusers]=useState([{}])
    
    function Heady(){
        fetch("https://jsonplaceholder.typicode.com/users") /*nedina api*/
        .then(response => response.json()) /*reponse json */
        .then(response => setusers(response /*7atineh f west users list*/ ))
            
            
      
    

      
       }
  useEffect(() => {Heady()},[])

    
    return(

      

       <div className="header">
           
            
    
            <h1 className='titre'>USERS</h1> 
                  <div className="users">
                  {users.map((element) => (
                   <table className='user'> 
                   <tr>
                        
                       <td> <img className="img"src={user} alt=''/></td>
                        <td>
                       
                        <div className="name">USER : {element.name}</div>
                        <div className='email'> EMAIL : {element.email}</div>
                        <div className="id">ID : {element.id}</div>
                        <button className="button i-button">see details</button>
                        </td></tr>
                     
                  </table>
                  ))}
    </div>
            </div>
           
            
            
           
             
             
              
        

        
    )}

    export default Header  