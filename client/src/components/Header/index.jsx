import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../api";
import { logout } from "../../redux/slices/authSlice";

const Header = (props) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние для управления видимостью меню

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen); // переключение состояния при нажатии
  };

  const menuClass = classNames(style.navList, {
    [style.hiddenDisplay]: isMenuOpen, // если меню закрыто, добавляем класс скрытия
  });

  const hendleLogout = () => {
    clearToken();
    dispatch(logout());
  };

  return (
    <header className={style.headerCover}>
      <div className={style.container}>
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            className={style.logo}
          />
        </a>
        <nav className={style.nav}>
          <button className={style.burger} id="burger" onClick={handleClick}>
            <div className={style.burgerLine}></div>
            <div className={style.burgerLine}></div>
            <div className={style.burgerLine}></div>
          </button>
          <ul className={menuClass}>
            <li className={style.navListItem}>
              <Link to="/" className={style.navLink}>
                Home
              </Link>
            </li>
            <li className={style.navListItem}>
              <Link to="/login" className={style.navLink}>
                Login
              </Link>
            </li>
            <li className={style.navListItem}>
              <Link to="/registration" className={style.navLink}>
                Registration
              </Link>
            </li>
            <li className={style.navListItem}>
              <span style={{ color: "white" }}>Hello {user? `${user.firstName} ${user.lastName}` : 'Guest'}</span>
              <button onClick={hendleLogout} className={style.logout}>Logout</button>
            </li>
            <li className={style.navListItem}>
              <Link to="/private" className={style.navLink}>
                Private
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
