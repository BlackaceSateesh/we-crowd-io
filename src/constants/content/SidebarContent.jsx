import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { AuthenticatedRoutes } from "../Routes";
import { MdManageAccounts, MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBillTransfer, FaPeopleGroup } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaMoneyBillAlt, FaToolbox } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { PiNewspaperClippingBold } from "react-icons/pi";

export const SidebarContent = {
  dashboard: [
    {
      id: "Dashboard1",
      icon: <AiOutlineHome />,
      name: "Dashboard",
      link: AuthenticatedRoutes?.DASHBOARD1,
    },
  ],
  my_account: [
    {
      id: "Profile",
      icon: <MdManageAccounts />,
      name: "Profile",
      link: AuthenticatedRoutes?.PROFILE,
    },
    {
      id: "Edit",
      icon: <AiOutlineHome />,
      name: "Edit Profile",
      link: AuthenticatedRoutes?.EDIT_PROFILE,
    },
  ],
  my_network: [
    {
      id: "PDirect",
      icon: <FaPeopleGroup />,
      name: "P Direct",
      link: AuthenticatedRoutes?.P_DIRECT,
    },
    {
      id: "AllDownlines",
      icon: <AiOutlineHome />,
      name: "All Downlines",
      link: AuthenticatedRoutes?.ALL_DOWNS_LINE,
    },
    {
      id: "leftTeam",
      icon: <AiOutlineHome />,
      name: "Left Team",
      link: AuthenticatedRoutes?.LEFT_TEAM,
    },
    {
      id: "RightTeam",
      icon: <AiOutlineHome />,
      name: "Right Team",
      link: AuthenticatedRoutes?.RIGHT_TEAM,
    },
    {
      id: "setMatchTree",
      icon: <AiOutlineHome />,
      name: "Set Match Tree",
      link: AuthenticatedRoutes?.SET_MATCH_TREE,
    },
    
  ],
  withdrawal: [
    {
      id: "Withdrawal",
      icon: <FaMoneyBillTransfer />,
      name: "Withdrawal",
      link: AuthenticatedRoutes?.WITHDRAWAL,
    },
    {
      id: "WithdrawalReport",
      icon: <AiOutlineHome />,
      name: "Withdrawal Report",
      link: AuthenticatedRoutes?.WITHDRAWAL_REPORT,
    },
  ],
  topup: [
    {
      id: "Topup",
      icon: <FaMoneyBillAlt />,
      name: "ID Topup",
      link: AuthenticatedRoutes?.MEMBER_TOPUP,
    },
    {
      id: "TopupHistory",
      icon: <AiOutlineHome />,
      name: "Topup History",
      link: AuthenticatedRoutes?.TOPUP_HISTORY,
    },
  ],
  payout_reports: [
    {
      id: "PayoutReports",
      icon: <IoWallet />,
      name: "Payout Reports",
      link: AuthenticatedRoutes?.PAYOUT_REPORTS,
    },
  ],
  report: [
    {
      id: "Report",
      icon: <TbReportSearch />,
      name: "Report",
      link: AuthenticatedRoutes?.REPORT,
    },
  ],
  "news_&_events": [
    {
      id: "news_&_events",
      icon: <PiNewspaperClippingBold />,
      name: "News & Events",
      link: AuthenticatedRoutes?.REPORT,
    },
  ],
  promotional_tools: [
    {
      id: "PromotionalTools",
      icon: <FaToolbox />,
      name: "Promotional Tools",
      link: AuthenticatedRoutes?.PROMOTIONAL_TOOLS,
    },
  ],
  support: [
    {
      id: "Support",
      icon: <MdOutlineSupportAgent />,
      name: "Support",
      link: AuthenticatedRoutes?.SUPPORT,
    },
  ],
  logout: [
    {
      id: "Logout",
      icon: <AiOutlineLogout />,
      name: "Logout",
      link: AuthenticatedRoutes?.LOGOUT,
    },
  ],
};
