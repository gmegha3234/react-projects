/* eslint-disable react/prop-types */
import { Logo } from "./Logo";
function Navbar({children}) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
export default Navbar;

