import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { headers } from "../Constants/ApiConstant";
import axios from 'axios';
// import "./App.css";     
import "./feedback.css";
// import "./Meeting.css";
function Feedback() {

  const nav = useNavigate();


    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [message, setMessage]=useState('');

    const handlepostfeedback =async (e) => {
      e.preventDefault();
      try{
      
        // console.log({
        //   name: name,
          
        //   message: message
        
        
        // });

        const response=await axios.post('http://localhost:8080/api/v1/feedback/create',{
          name: name,
        //   email: email,
          message: message
       
      },{headers:headers});

      if(response.status===200)
      {
         console.log("IN")
         nav('/')
       

      }
   }
   catch(error)
   {
    console.log("error");
   }
    
  };

  return (
    <>
    {/* <nav className="sidebardash">
    <ul className="nav-menu">
      {SidebarData1.map((item, index) => (
        <li key={index} className="nav-item">
          <a href={item.path} className="nav-link">
            {item.icon}
            <span className="nav-text">{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav> */}


      <div className="kkk_background" id="feedback">
     {/* <Link style={{textDecoration:'none',color:'white'}} to="/Userprofile"><button type='submit' className='back_contact111' style={{height:'50px',width:'70px',backgroundColor:'red',marginLeft:'1400px',marginTop:'10px'}}>Back</button></Link>*/}
      <div >
       <h1 className='us_contact'>FEEDBACK</h1>
       <form>
       <input type='text' placeholder='Full Name' 
       onChange={(e)=>{setName(e.target.value)}}

       requied/>
       {/* <input type='email' placeholder='Type Your E-mail' 
       onChange={(e)=>{setEmail(e.target.value)}}

       required/> */}
       <textarea placeholder='Write here.....' name='message'
       onChange={(e)=>{setMessage(e.target.value)}}

       ></textarea>
       <input type='submit' value='Send' 
       onClick={handlepostfeedback}
       />
       </form>

       {/*<h1 className='us_contact'>RATINGS</h1>           
       <div class="container-wrapper">  
       <div class="container d-flex align-items-center justify-content-center">
         <div class="row justify-content-center">    
     
           <div class="rating-wrapper">
     
             <input type="radio" id="5-star-rating" name="star-rating" value="5"/>
             <label for="5-star-rating" class="star-rating">
               <i class="fas fa-star d-inline-block"></i>
             </label>
      
             <input type="radio" id="4-star-rating" name="star-rating" value="4"/>
             <label for="4-star-rating" class="star-rating star">
               <i class="fas fa-star d-inline-block"></i>
             </label>
     
             <input type="radio" id="3-star-rating" name="star-rating" value="3"/>
             <label for="3-star-rating" class="star-rating star">
               <i class="fas fa-star d-inline-block"></i>
             </label>
     
             <input type="radio" id="2-star-rating" name="star-rating" value="2"/>
             <label for="2-star-rating" class="star-rating star">
               <i class="fas fa-star d-inline-block"></i>
             </label>
     
             <input type="radio" id="1-star-rating" name="star-rating" value="1"/>
             <label for="1-star-rating" class="star-rating star">
               <i class="fas fa-star d-inline-block"></i>
             </label>
             
            </div>
           
         </div>
       </div>
     </div>
  */} 



  </div>
  </div>
  </>
  )
}

export default Feedback;