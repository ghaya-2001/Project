
import './Header.css'
import user from '../../img/user.png';
import React, {
 useEffect, useState} from 'react';
const Header=() =>{
    const [users,setusers]=useState([])
    
    function Heady(){
        fetch("https://jsonplaceholder.typicode.com/users") /*nedina api*/
        .then(response => response.json()) /*reponse json */
        .then(response => setusers(response /*7atineh f west users list*/ ))
            
            
      
    

      
       }
  useEffect(() => {Heady()},[])

    
    return(
       <div className="header">
            <div>
                  
                  <div className="users">
                  {users.map((element) => (
                   <div> 
                        <img src={user} alt=''/>
                        <button className="button i-button">see details</button>
                        <div className="user">{element}</div>
                  </div>
                  ))}
    </div>
            </div>
           
            
            
            </div>
             
             
              
        

        
    )}

    export default Header  