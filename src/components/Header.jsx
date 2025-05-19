import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="flex justify-between px-5 py-8 bg-blue-200 shadow-md bg-5">
      <img className="h-6" src="/logo.svg" alt="logo"></img>
      {/* <h1 className={styles.dima}>Header</h1> */}
      {/* <a href="http://localhost:5173/about">about</a> */}

      <h1 className="text-4xl text-violet-900/50 hover:text-violet-900/100">
        Header
      </h1>
      <nav>
        <ul className="flex gap-14">
          <li className="inline mb-4">
            <NavLink className="font-semibold " to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="inline">
            <NavLink className="font-semibold" to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="inline">
            <NavLink className="font-semibold" to={"/cart"}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
