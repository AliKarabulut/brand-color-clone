import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Seach";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Search></Search>
      
        <NavMenu />

    </div>
  );
};
export default Navbar;
