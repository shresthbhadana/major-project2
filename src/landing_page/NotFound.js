import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
<div className="row p-5  text-center">
  <div  
  className='col-12'>
   <h1 
   className='mt-5 mb-3'>Error 404</h1>
   
   <p>We couldn’t find the page you were looking for
 </p>
   <h4 >Visit <Link to="/" style={{textDecoration:"none"}}> Zerodha Home page</Link></h4>
</div>
   
    
</div>

    )
}

export default NotFound;