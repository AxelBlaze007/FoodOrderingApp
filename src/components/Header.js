import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let login = "LogIn";
  console.log("header reloader");

  const [btnNameReact, setBtnNameReact] = useState(login);
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="logIn-btn"
            onClick={() => {
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
