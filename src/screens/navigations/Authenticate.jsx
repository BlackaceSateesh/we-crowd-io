import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import DashboardMain from "../pages/DashboardMain";
import Dashboard2 from "../pages/Dashboard2";
import Dashboard1 from "../pages/Dashboard1";
import ProfilePage from "../pages/ProfilePage";
import { SidebarContent } from "../../constants/content/SidebarContent";
import EditProfilePage from "../pages/EditProfilePage";
import NetworkDataTable from "../pages/NetworkPage";
import Withdrawal from "../pages/Withdrawal";
import MemberTopup from "../pages/MemberTopup";
import WithdrawalReport from "../pages/WithdrawalReport";
import TopupHistory from "../pages/TopupHistory";
const Authenticate = () => {
  return (
    <>
      <Routes>
        <Route
          path={AuthenticatedRoutes.DASHBOARD1}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.dashboard[0]?.icon}
              pageName={"Dashboard"}
              parentName={"Dashboard"}
              inner={<Dashboard1 />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.DASHBOARD2}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_account[0]?.icon}
              pageName={"Dashboard 2"}
              parentName={"Dashboard"}
              inner={<Dashboard2 />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.PROFILE}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_account[0]?.icon}
              parentName={"My Account"}
              pageName={"Profile"}
              inner={<ProfilePage />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.EDIT_PROFILE}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_account[0]?.icon}
              parentName={"My Account"}
              pageName={"Edit Profile"}
              inner={<EditProfilePage />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.P_DIRECT}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_network[0]?.icon}
              parentName={"My Network"}
              pageName={"P Direct"}
              inner={<NetworkDataTable />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.ALL_DOWNS_LINE}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_network[0]?.icon}
              parentName={"My Network"}
              pageName={"All Downlines"}
              inner={<NetworkDataTable />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.LEFT_TEAM}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_network[0]?.icon}
              parentName={"My Network"}
              pageName={"Left Team"}
              inner={<NetworkDataTable />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.RIGHT_TEAM}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_network[0]?.icon}
              parentName={"My Network"}
              pageName={"Right Team"}
              inner={<NetworkDataTable />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.SET_MATCH_TREE}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.my_network[0]?.icon}
              parentName={"My Network"}
              pageName={"Set Match Tree"}
              inner={<NetworkDataTable />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.WITHDRAWAL}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.withdrawal[0]?.icon}
              parentName={"Withdrawal"}
              pageName={"Withdrawal"}
              inner={<Withdrawal />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.WITHDRAWAL_REPORT}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.withdrawal[0]?.icon}
              parentName={"Withdrawal"}
              pageName={"Withdrawal Report"}
              inner={<WithdrawalReport />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.MEMBER_TOPUP}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.topup[0]?.icon}
              parentName={"Topup"}
              pageName={"Member Topup"}
              inner={<MemberTopup />}
            />
          }
        />
        <Route
          path={AuthenticatedRoutes.TOPUP_HISTORY}
          element={
            <DashboardMain
              pageIcon={SidebarContent?.topup[0]?.icon}
              parentName={"Topup"}
              pageName={"Topup History"}
              inner={<TopupHistory />}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Authenticate;
