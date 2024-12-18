import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import "../../styles/Sidebar.css";
import { SidebarContent } from "../../constants/content/SidebarContent";
import { MainContent } from "../../constants/content/MainContent";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { TiChevronLeft } from "react-icons/ti";
import {
  setSidemenuToggle,
  setSidemenuToggleOff,
} from "../../redux/feature/feature-sidemenu";

const Sidebar = () => {
  const sideMenuTgl = useSelector((state) => state.Sidemenu);
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState(
    SidebarContent?.dashboard?.[0]?.id
  );

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (key) => {
    if (activeAccordion === key) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(key);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(setSidemenuToggleOff());
      } 
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Run the function once to set the initial state based on screen width
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`Sidebar ss-card ${sideMenuTgl?.open ? "show" : "hide"}`}
      id="navbar"
    >
      <nav className="nav">
        <button
          className="sideToggleClgBtn"
          onClick={() => dispatch(setSidemenuToggle())}
        >
          <TiChevronLeft />
        </button>
        <div>
          <Link to={AuthenticatedRoutes.DASHBOARD1} className="nav-logo">
            <div className="nav-logo-icon">
              <img src={MainContent.appLogo} alt="logo" />
            </div>
            {/* <h4 className="name">{MainContent.appName}</h4> */}
          </Link>

          <ul className="nav-list">
            <Accordion defaultActiveKey="0">
              {Object.keys(SidebarContent).map((section, idx) => {
                const sectionItems = SidebarContent[section];

                if (sectionItems.length === 1) {
                  return (
                    <li key={section}>
                      <Link
                        to={sectionItems[0]?.link}
                        className={`nav-link ${
                          activeLink === sectionItems[0]?.id ? "active" : ""
                        }`}
                        onClick={() => handleLinkClick(sectionItems[0]?.id)}
                        aria-label={`Navigate to ${sectionItems[0]?.name}`}
                      >
                        {sectionItems[0]?.icon}{" "}
                        <span className="name">{sectionItems[0]?.name}</span>
                      </Link>
                    </li>
                  );
                }

                return (
                  <Accordion.Item key={idx} eventKey={String(idx + 1)}>
                    <Accordion.Header
                      onClick={() => handleAccordionToggle(idx + 1)}
                    >
                      <div className="left">
                        {sectionItems[0]?.icon}{" "}
                        <span className="name">
                          {section?.replaceAll("_", " ")}
                        </span>
                      </div>
                      {activeAccordion === idx + 1 ? (
                        <FiChevronDown />
                      ) : (
                        <FiChevronLeft />
                      )}
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {sectionItems.map((item) => (
                          <li key={item?.id}>
                            <Link
                              to={item?.link}
                              className={`nav-link ${
                                activeLink === item?.id ? "active" : ""
                              }`}
                              onClick={() => handleLinkClick(item?.id)}
                              aria-label={`Navigate to ${item?.name}`}
                            >
                              <FaCaretRight /> {item?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
