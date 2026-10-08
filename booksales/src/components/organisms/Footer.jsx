import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-body-secondary text-decoration-none">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/book" className="nav-link px-2 text-body-secondary text-decoration-none">
            Book
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link px-2 text-body-secondary text-decoration-none">
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link px-2 text-body-secondary text-decoration-none">
            Contact
          </Link>
        </li>
      </ul>

      <p className="text-center text-body-secondary">
        © 2026 Bookstore, Inc. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;