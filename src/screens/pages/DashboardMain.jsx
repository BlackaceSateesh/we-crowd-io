/* eslint-disable react/prop-types */
import Breadscrumb from "../../components/ui/Breadscrumb";
import Header from "../../components/ui/Header";
import Sidebar from "../../components/ui/Sidebar";
import "../../styles/dashboard/DashboardMain.css";
const DashboardMain = ({ inner, pageName, pageIcon , parentName }) => {
  return (
    <>
      <div className="DashboardMain">
        <div className="DashboardMain-inner">
          <Sidebar />
          <div className="right-container">
            <Header />
            <div className="main-wrapper">
              <Breadscrumb parentName={parentName} pageName={pageName} pageIcon={pageIcon} />
              {inner}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
