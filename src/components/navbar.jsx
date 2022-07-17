//// Components use uper case
import "./navbar.css";
import {Link} from 'react-router-dom'
import { useContext} from 'react';
import StoreContext from './../context/storeContext'

function Navbar(){
   let cart = useContext(StoreContext).cart;

  const getCount = () => {
    let count = 0;
    // travel the array sum the quantity of each product into count
    for( let i=0; i< cart.length; i++){
      count += cart[i].quantity;
    }


    // return count
    return count;
  }


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Southpaw Precision
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-outline-light" to="/cart">
                <span className='badge bg-primary'>{getCount()}</span>
                View Cart
              </Link>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;

