import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="bg-blue-500">
      {/* <h1 className={styles.dima}>Header</h1> */}
      {/* <a href="http://localhost:5173/about">about</a> */}

      <h1 className="text-4xl text-violet-900/50 hover:text-violet-900/100">
        Header
      </h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <hr />
    </header>
  );
}

export default Header;
