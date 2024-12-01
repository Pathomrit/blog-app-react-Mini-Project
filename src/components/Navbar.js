import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Website</h3>
      </Link>
      <div className="nav-list">
        <Link to="/" className="list">
          Home
        </Link>
        <Link to="blog" className="list">
          All Blog
        </Link>
        <Link to="/about" className="list">
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
