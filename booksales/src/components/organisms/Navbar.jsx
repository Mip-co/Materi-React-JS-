import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      {/* Brand / Logo */}
      <div className="col-md-3 mb-2 mb-md-0">
        <Link 
          to="/" 
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <i 
            className="fa-solid fa-book fa-2x me-2" 
            style={{ color: "rgb(116, 192, 252)" }}
          ></i>
          <span className="fs-4 text-dark" style={{ fontWeight: "400", letterSpacing: "-0.5px" }}>
            bookstore
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-pills">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/book" 
            className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}
          >
            Book
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/team" 
            className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}
          >
            Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Register</button>
      </div>
    </header>
  );
}

export default Navbar;