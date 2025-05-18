import React from "react";
import { TbStarsFilled } from "react-icons/tb";
import DashboardBox from "./Component/DashboardBox";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BiSolidComponent } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import MarqueeBox from "./Component/MarqueeBox";
import CopyClipboard from "./Component/CopyClipboard";


const Dashboard = () => {
  return (
    <>
      <div className="dashboardWrapper">
        <div className="container-fluid">
          
          <div className="row g-3">
            <div className="col-lg-12 col-md-12 WelUser ">
              <h3>Welcome , Username</h3>
            </div>
            <div className="col-lg-12 col-md-12 ">
              <MarqueeBox/>
            </div>
            <div className="col-lg-12 col-md-12 ">
              <CopyClipboard/>
            </div>
          </div>

          
          
          <div className="row g-3">
            <DashboardBox
              icon={<TbStarsFilled />}
              arrow={<IoMdTrendingUp className="Trendup" />}
            />
            <DashboardBox
              icon={<HiMiniUserGroup />}
              arrow={<IoMdTrendingDown className="Trendup" />}
            />
            <DashboardBox
              icon={<HiCurrencyDollar />}
              arrow={<IoMdTrendingDown className="Trendup" />}
            />
            <DashboardBox
             icon={<BiSolidComponent />}
              arrow={<IoMdTrendingUp className="Trendup" />}
            />
            <DashboardBox
              icon={<TbStarsFilled />}
              arrow={<IoMdTrendingUp className="Trendup" />}
            />
            <DashboardBox
              icon={<HiMiniUserGroup />}
              arrow={<IoMdTrendingDown className="Trendup" />}
            />
            <DashboardBox
              icon={<HiCurrencyDollar />}
              arrow={<IoMdTrendingDown className="Trendup" />}
            />
            <DashboardBox
             icon={<BiSolidComponent />}
              arrow={<IoMdTrendingUp className="Trendup" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
