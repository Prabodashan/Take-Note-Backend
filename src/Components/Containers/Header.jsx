import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogout, reset } from "../../Slices/AuthSlices";

import "./Styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(userLogout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Take Notes</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <a onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </a>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
