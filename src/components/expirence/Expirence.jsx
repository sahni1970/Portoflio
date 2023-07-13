import React from 'react'
import './expirence.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Expirence = () => {
  return (
    <section id='expirence'>Expirence
    <h5>What Skills I Have</h5>
    <h2>Expirence</h2>
    <div className="container expirence_container">

    <div className="expirence_fronted">
     <h3>Fronted DEvelopment</h3>
     <div className="expirence_content">
     <article className="expirence_details">
     <BsPatchCheckFill className='expirence_details-icon'/>

     <div>
     <h4>HTML</h4>
     <small className='text-light'>Expirenced</small>
     </div>
     </article>
        
     <article className="expirence_details">
     <BsPatchCheckFill className='expirence_details-icon'/>

     <div>
     <h4>CSS</h4>
     <small className='text-light'>Intermediate</small>
     </div>
     </article>

     <article className="expirence_details">
     <BsPatchCheckFill className='expirence_details-icon'/>

     <div>
     <h4>JavaScript</h4>
     <small className='text-light'>Intermediate</small>
     </div>
     </article>

     <article className="expirence_details">
     <BsPatchCheckFill className='expirence_details-icon'/>


     <div>
     <h4>React</h4>
     <small className='text-light'>Intermediate</small>
     </div>
     </article>

     </div>
    </div>

    {/*END OF FRONTED*/}  

    <div className="expirence_backend">
    <h3>Backend DEvelopment</h3>
    <div className="expirence_content">
    <article className="expirence_details">
    <BsPatchCheckFill className='expirence_details-icon'/>

    <div>
    <h4>Git</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>
       
    
    

    <article className="expirence_details">
    <BsPatchCheckFill className='expirence_details-icon'/>

    <div>
    <h4>Java</h4>
    <small className='text-light'>Basic</small>
    </div>
    </article>

    <article className="expirence_details">
    <BsPatchCheckFill className='expirence_details-icon'/>

    <div>
    <h4>MYSQL</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className="expirence_details">
    <BsPatchCheckFill className='expirence_details-icon'/>

   <div>
   <h4>C++</h4>
   <small className='text-light'>Expirenced</small>
   </div>
    </article>

    
    </div>
   </div>
    </div>
    
    </section>
  )
}

export default Expirence
