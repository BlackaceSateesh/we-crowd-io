import {
  FaAngleUp,
  FaOpencart,
  FaRegEye,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { ButtonLinear } from "../../components/ui/Buttons";
import "../../styles/dashboard/Dashboard1.css";
import { PieDonutChart } from "../../components/graph/PieDonutChart";
import { FiDollarSign } from "react-icons/fi";
import { RiBuildingLine } from "react-icons/ri";
import LineColumnChart from "../../components/graph/LineColumnChart";
import { useEffect, useState } from "react";
import PieImageGraph from "../../components/graph/PieImageGraph";
const Dashboard1 = () => {
  const planData = [
    {
      icon: <FaOpencart />,
      name: "Fast Track Infinity Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FiDollarSign />,
      name: "2x2 TM Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegEye />,
      name: "2x8 TM Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <RiBuildingLine />,
      name: "Team Set Match Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Team Leadership Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Global Crowd Share Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Global Crowd Share Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Platform Profit Sharing Reward",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Rebirth Rewards In 2x2 TM",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Rebirth Rewards In 2x8 TM",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "Upgrade D Wallet",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "2*2 Rebirth D Wallet",
      val: "$0",
      increament: "0%",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      name: "2*8 Rebirth D Wallet",
      val: "$0",
      increament: "0%",
    },
  ];
  const productData = [
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
  ];
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={representative.name}
          src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`}
          width="32"
        />
        <span>{representative.name}</span>
      </div>
    );
  };

  useEffect(() => {
    setProducts(productData);
  }, []);

  const socialData = [
    {
      name: "Facebook",
      value: "45689",
      type: "Social Media",
      incVal: "12%",
      icon: "https://img.icons8.com/fluency/48/facebook-new.png",
    },
    {
      name: "Twitter",
      value: "30800",
      type: "Social Media",
      incVal: "18%",
      icon: "https://img.icons8.com/fluency/48/twitter.png",
    },
    {
      name: "Linkedin",
      value: "20000",
      type: "Social Media",
      incVal: "65%",
      icon: "https://img.icons8.com/fluency/48/linkedin.png",
    },
    {
      name: "Youtube",
      value: "5000",
      type: "Social Media",
      incVal: "10%",
      icon: "https://img.icons8.com/3d-fluency/94/youtube-logo.png",
    },
    {
      name: "Instagram",
      value: "34000",
      type: "Social Media",
      incVal: "5%",
      icon: "https://img.icons8.com/fluency/48/instagram-new.png",
    },
  ];

  const payments = [
    {
      date: "10 Sep, 2024",
      time: "8:20 PM",
      sourceImage: "https://img.icons8.com/color/48/paypal.png",
      sourceName: "Paypal",
      sourcePlan: "Business Plan",
      status: "Paid",
      amount: "$5897",
      statusClass: "bg-success text-success bg-opacity-10",
    },
    {
      date: "10 Sep, 2024",
      time: "8:20 PM",
      sourceImage: "https://img.icons8.com/color/48/visa.png",
      sourceName: "Visa",
      sourcePlan: "Business Plan",
      status: "Unpaid",
      amount: "$9638",
      statusClass: "bg-danger text-danger bg-opacity-10",
    },
    {
      date: "10 Sep, 2024",
      time: "8:20 PM",
      sourceImage: "https://img.icons8.com/color/48/visa.png",
      sourceName: "Behance",
      sourcePlan: "Business Plan",
      status: "Paid",
      amount: "$9638",
      statusClass: "bg-success text-success bg-opacity-10",
    },
    {
      date: "10 Sep, 2024",
      time: "8:20 PM",
      sourceImage: "https://img.icons8.com/color/48/visa.png",
      sourceName: "Spotify",
      sourcePlan: "Business Plan",
      status: "Paid",
      amount: "$9638",
      statusClass: "bg-success text-success bg-opacity-10",
    },
    {
      date: "10 Sep, 2024",
      time: "8:20 PM",
      sourceImage: "https://img.icons8.com/color/48/visa.png",
      sourceName: "Google",
      sourcePlan: "Business Plan",
      status: "Unpaid",
      amount: "$9638",
      statusClass: "bg-danger text-danger bg-opacity-10",
    },
    {
      date: "10 Sep, 2024",
      time: "8:20 PM",
      sourceImage: "https://img.icons8.com/color/48/visa.png",
      sourceName: "Apple",
      sourcePlan: "Business Plan",
      status: "Paid",
      amount: "$9638",
      statusClass: "bg-success text-success bg-opacity-10",
    },
  ];

  const topReferals = [
    {
      name: "Jhon Anderson",
      value: "258",
      type: "Sales",
      incVal: "12%",
      icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
    },
    {
      name: "Jhon Anderson",
      value: "258",
      type: "Sales",
      incVal: "12%",
      icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
    },
    {
      name: "Jhon Anderson",
      value: "258",
      type: "Sales",
      incVal: "12%",
      icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
    },
    {
      name: "Jhon Anderson",
      value: "258",
      type: "Sales",
      incVal: "12%",
      icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
    },
    {
      name: "Jhon Anderson",
      value: "258",
      type: "Sales",
      incVal: "12%",
      icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
    },
  ];
  const teamPerfomance = [
    {
      name: "Total Directs",
      value: "0",
    },
    {
      name: "Active Directs",
      value: "0",
    },
    // {
    //   name: "Inactive Directs",
    //   value: "0",
    // },
    {
      name: "Total generation",
      value: "0",
    },
    {
      name: "Active generation",
      value: "0",
    },
    {
      name: "Left Team",
      value: "0",
    },
    {
      name: "Right Team",
      value: "0",
    },
    {
      name: "Matched",
      value: "0",
    },
    {
      name: "Carry",
      value: "0",
    },
  ];
  return (
    <>
      <div className="Dashboard1">
        <div className="top-wrapper gap-btm">
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Congratulations Jhon</h5>
              <img src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Popper-Confetti-birthday-party-goofy-flat-kerismaker.png" />
            </div>
            <p className="para1">You are the best seller of this month</p>
            <div className="content">
              <div className="c-left">
                <span className="value">$168.5K</span>
                <p className="para1">58% of sales target</p>
                <ButtonLinear name={"View Details"} />
              </div>
              <div className="c-right">
                <img
                  src="https://img.icons8.com/3d-fluency/94/gift.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="four-cards">
            {planData?.slice(0, 4)?.map?.((e, i) => {
              return (
                <div key={`planCard-${i}`} className="cardBox sm-box">
                  <div className="top">
                    <div className="icon">{e?.icon}</div>
                    <span className="increament-val">
                      {e?.increament}
                      <FaAngleUp />
                    </span>
                  </div>
                  <div className="content">
                    <span className="value">{e?.val}</span>
                    <p className="para1">{e?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="top-wrapper gap-btm">
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Total Income</h5>
            </div>
            <div className="content">
              <PieDonutChart />
            </div>
          </div>
          <div className="four-cards">
            {planData?.slice(5)?.map?.((e, i) => {
              return (
                <div key={`planCard-${i}`} className="cardBox sm-box">
                  <div className="top">
                    <div className="icon">{e?.icon}</div>
                    <span className="increament-val">
                      {e?.increament}
                      <FaAngleUp />
                    </span>
                  </div>
                  <div className="content">
                    <span className="value">{e?.val}</span>
                    <p className="para1">{e?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="center-wrapper gap-btm">
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Team performance</h5>
              <div className="content">
                <LineColumnChart />
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Total Withdrawal</h5>
            </div>
            <div className="content">
              <PieDonutChart />
            </div>
          </div>
        </div>
        <div className="center-wrapper sm-card gap-btm">
          {teamPerfomance?.map?.((e, i) => {
            return (
              <div key={`teamPerfomance-${i}`} className="cardBox">
                <h5 className="heading">{e?.name}</h5>
                <p className="para1">{e?.value}</p>
              </div>
            );
          })}
        </div>
        {/* revenue cards */}
        <div className="wrapper-box coln-3 gap-btm">
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Social Revenue</h5>
            </div>
            <div className="content table-box">
              <table>
                <tbody>
                  {socialData?.map?.((e, i) => {
                    return (
                      <tr key={`socialData-${i}`}>
                        <td>
                          <div className="img-box">
                            <img src={e?.icon} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="txt">
                            <h6>{e?.name}</h6>
                            <p>{e?.type}</p>
                          </div>
                        </td>
                        <td>{e?.value}</td>
                        <td>
                          <div className="tag">{e?.incVal}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="cardBox">
            <div className="top">
              <h5 className="heading">Top Referrals</h5>
            </div>
            <div className="content table-box">
              <table>
                <tbody>
                  {topReferals?.map?.((e, i) => {
                    return (
                      <tr key={`socialData-${i}`}>
                        <td>
                          <div className="img-box">
                            <img src={e?.icon} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="txt">
                            <h6>{e?.name}</h6>
                            <p>{e?.type}</p>
                          </div>
                        </td>
                        <td>{e?.value}</td>
                        <td>
                          <div className="tag inactive">{e?.incVal}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* transaction */}
        <div className="wrapper-box trans-wrapper">
          <div className="cardBox trans">
            <div className="top">
              <h5 className="heading">Recent Earnings</h5>
            </div>
            <div className="content table-box">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th className="py-4">Date</th>
                    <th className="py-4">Amount Type</th>
                    <th className="py-4">Status</th>
                    <th className="py-4">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={index}>
                      <td>
                        <div className="txt">
                          <h6>{payment.date}</h6>
                          <p>{payment.time}</p>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center flex-row gap-3">
                          <div className="img-box">
                            <img
                              src={payment.sourceImage}
                              alt={payment.sourceName}
                            />
                          </div>
                          <div className="txt">
                            <h6>{payment.sourceName}</h6>
                            <p>{payment.sourcePlan}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={`card-lable ${payment.statusClass}`}>
                          <p
                            className={`fs-3 ${
                              payment.status === "Paid"
                                ? "text-success"
                                : "text-danger"
                            } `}
                          >
                            {payment.status}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="txt">
                          <h6>{payment.amount}</h6>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="cardBox full-sp">
            <div className="top">
              <h5 className="heading">My package</h5>
            </div>
            <div className="content">
              <PieImageGraph legend_pos={"bottom"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
