//// Components use uper case
import "./navbar.css";

function Navbar(){
    return (
       <nav className="nav">
  <a className="nav-link active" aria-current="page" href="#">Home</a>
  <a className="nav-link" href="#">Shop</a>
  <a className="nav-link" href="#">About</a>
  <a className="nav-link " href='#'>Contact</a>
</nav>
    
    )
}

export default Navbar;

