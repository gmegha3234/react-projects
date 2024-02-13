
import styles from "../components/Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <Outlet />
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; CopyRight {new Date().getFullYear()} by Worldwise Inc.
      </p>
    </div>
  );
}
