import logo from "../images/react.png";
import { Link, NavLink } from 'react-router-dom';


function Header() {
  return (
    <div className="pt-2 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} /> {" "}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link isActive text-danger" : "nav-link"} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link isActive text-danger" : "nav-link"} to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link isActive text-danger" : "nav-link"} to="/cryptodetail/symbol">Crypto Details</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                <li><Link className="dropdown-item" to="/product">Product</Link></li>
                  <li><Link className="dropdown-item" to="/product/create">Create Product</Link></li>
                  <li><Link className="dropdown-item" to="/product/list">Product List</Link></li>
                  <li><Link className="dropdown-item" to="/product/detail">Product Detail</Link></li>

                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
