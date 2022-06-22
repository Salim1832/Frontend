import { Link } from "react-router-dom";
import StyledNavbar from "./NavbarStyled";


function Navbar() {
  return (
    <>
      <StyledNavbar>
        <nav className="navbar">
            <h1>Covid ID</h1>
          <div>
            <ul>
              <li>
                <Link to="/" >Global</Link>
              </li>
              <li>
                <Link to="/covid/indonesia" >Indonesia</Link>
              </li>
              <li>
                <Link to="/covid/province" >Provinsi</Link>
              </li>
              <li>
                <Link to="/covid/about" >About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
