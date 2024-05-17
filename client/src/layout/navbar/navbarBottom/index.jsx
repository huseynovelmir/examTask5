import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
const NavBottom = () => {
  const [active, setactive] = useState(true);
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <div className={styles.navBottom}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Estore<span>.</span>
        </NavLink>
        <div className={styles.allul}>
          <ul className={active ? styles.false : (styles.ul, styles.true)}>
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="Categori">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    Categori
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="Latest">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    Latest
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="Blog">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    Blog
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="Pages">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    Pages
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="Contact">
                {({ isActive }) => (
                  <span
                    className={isActive ? activeClassName : undefined}
                  ></span>
                )}
              </NavLink>
            </li>
          </ul>
          <div className={styles.buttonArea}>
            <button
              onClick={() => {
                active ? setactive(false) : setactive(true);
                console.log(active);
              }}
            >
              Menu <RxHamburgerMenu />
            </button>
          </div>
        </div>
        <div className={styles.searchArea}>
          <div className={styles.searchBar}>
            <input type="text" name="" id="" placeholder="Search Products" />
            <CiSearch className={styles.icon} />
          </div>
          <div className={(styles.circle, styles.wishlist)}>
            <CiHeart className={styles.icon} />
          </div>
          <div className={styles.circle}>
            <CiShoppingCart className={styles.icon} />
          </div>
          <button className={styles.signIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
