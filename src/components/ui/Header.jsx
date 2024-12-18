import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import "../../styles/Header.css";
import { useDispatch } from "react-redux";
import { setSidemenuToggle } from "../../redux/feature/feature-sidemenu";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="Header">
        <button
          onClick={() => dispatch(setSidemenuToggle())}
          className="sideToggleBTN"
        >
          <GiHamburgerMenu />
        </button>
        <div className="search_wrapper">
          <IoSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className="right-wrapper">
          <div className="user-img">
            <img
              src="https://codervent.com/maxton/demo/vertical-menu/assets/images/avatars/01.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
