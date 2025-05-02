import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  let login = "LogIn";

  // const [userName, setUserName] = useState(UserContext.name);

  const data = useContext(UserContext);
  console.log("conte", data.name);

  const [btnNameReact, setBtnNameReact] = useState(login);
  return (
    <div className="header flex justify-between ">
      <div className="logo">
        <img className="w-52" src={LOGO_URL} />
      </div>

      <div className="nav-items ">
        <ul className="flex p-4 m-4 text-2xl">
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/groceries"}>Groceries</Link>
          </li>
          <li className="px-4">Contact Us</li>
          <li className="px-4">Cart</li>
          <button
            className={`logIn-btn bg-blue-500 px-2 py-1 mx-2 rounded-sm ${
              btnNameReact === "LogIn" ? "bg-blue-500" : "bg-red-500"
            }`}
            onClick={() => {
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold ">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
