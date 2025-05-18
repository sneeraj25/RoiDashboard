import React, {  useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Button from "@mui/material/Button";
import { PiUserCircleFill } from "react-icons/pi";
import { FaSitemap } from "react-icons/fa6";
import { RiFundsFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { HiWallet } from "react-icons/hi2";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import { IoFlash } from "react-icons/io5";

const Sidebar = () => {
const [activeTab, setActiveTab] = useState(0);
const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

const isOpenSubmenu = (index) => {
setActiveTab(index);
setIsToggleSubmenu(!isToggleSubmenu);
};

return (
<>
  <div className="sidebar">
    <div className="smallHeading">
      <h6>Main Pages</h6>
    </div>

    <ul>
      <li>
        <Link to="/">
        <Button className={`w-100 active ${activeTab===0 ? "active" : "" }`}>
          <span className="icon">
            <MdDashboard />
          </span>
          Dashboard
        </Button>
        </Link>
      </li>
      <li>
        <Button className={`w-100 ${ activeTab===1 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(1)}
          >
          <span className="icon">
            <PiUserCircleFill />
          </span>
          Authenticate
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===1 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/edit">Edit Profile</Link>
            </li>
            <li>
              <Link to="/changepass">Change Password</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Button className={`w-100 ${ activeTab===2 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(2)}
          >
          <span className="icon">
            <FaSitemap />
          </span>
          My Team
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===2 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/direct_team">Direct Team</Link>
            </li>
            <li>
              <Link to="/downline_team">Downline Team</Link>
            </li>

          </ul>
        </div>
      </li>

      <li>
        <Button className={`w-100 ${activeTab===3 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(3)}>
          <span className="icon">
           <RiFundsFill />
          </span>
          Fund
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===3 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/addfund">Fund Request</Link>
            </li>
            <li>
              <Link to="/fundreport">Fund Request Report</Link>
            </li>

          </ul>
        </div>
      </li>

      <li>
        <Button className={`w-100 ${activeTab===4 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(4)}>
          <span className="icon">
            <IoFlash />
          </span>
         Topup
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===4 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/topup">Topup</Link>
            </li>
            <li>
              <Link to="/topupreport">Topup Report</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Button className={`w-100 ${activeTab===5 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(5)}>
          <span className="icon">
            <BiSolidReport />
          </span>
         Earning  Reports
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===5 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/directincome">Direct Income</Link>
            </li>
            <li>
              <Link to="/roi_income">Roi Income</Link>
            </li>
            <li>
              <Link to="/levelincome">Level Income</Link>
            </li>
          </ul>
        </div>
      </li>
      
      <li>
        <Button className={`w-100 ${activeTab===6 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(6)}>
          <span className="icon">
           <HiWallet />
          </span>
         Withdrawal
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===6 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/withdraw">Withdrawal</Link>
            </li>
            <li>
              <Link to="/withdrawreport">Withdrawal Report</Link>
            </li>
          
          </ul>
        </div>
      </li>
      <li>
        <Button className={`w-100 ${ activeTab===7 && isToggleSubmenu===true ? "active" : "" }`} onClick={()=>
          isOpenSubmenu(7)}
          >
          <span className="icon">
          <SiMinutemailer />
          </span>
          Compose
          <span className="arrow">
            <IoIosArrowForward />
          </span>
        </Button>
        <div className={`submenuWrapper ${ activeTab===7 && isToggleSubmenu===true ? "collapseOpen" : "collapseClose"
          }`}>
          <ul className="submenu">
            <li>
              <Link to="/compose">Compose Message</Link>
            </li>
            <li>
              <Link to="/inbox">Incoming Message</Link>
            </li>
            <li>
              <Link to="/outbox">Outgoing Message</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="logoutWrapper">
          <div className="logoutStyle">
            <Link to="/">
            <Button className="btn logout-btn ">
              <span className="icon">
                <HiOutlineLogin />
              </span>
              Logout
            </Button>
            </Link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</>
);
};

export default Sidebar;