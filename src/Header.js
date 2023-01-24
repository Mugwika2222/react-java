import './Header.css'; 
import {Link} from 'react-router-dom';
function HEADER(){
    return (
        <div className='top-nav'>   
        <section>
          <Link className='list' to = "/">Home</Link> 
          <Link  className='list' to = "/About">About</Link> 
          <Link  className='list' to ="/Login">Log In</Link>
          <Link className='list' to ="/Register">Register</Link>
        </section>
        
        </div>
      );
}
export default HEADER;