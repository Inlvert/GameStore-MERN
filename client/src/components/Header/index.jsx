import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import classNames from "classnames";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние для управления видимостью меню

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen); // переключение состояния при нажатии
  };

  const menuClass = classNames(style.navList, {
    [style.hiddenDisplay]: isMenuOpen, // если меню закрыто, добавляем класс скрытия
  });

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
              <span style={{ color: "white" }}>Hello {0}</span>
              <button onClick={0} className={style.logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
