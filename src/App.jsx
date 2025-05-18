import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Pages/Dashboard/Profile/Profile";
import EditProfile from "./Pages/Dashboard/Profile/EditProfile";
import ChangePassword from "./Pages/Dashboard/Profile/ChangePassword";
import DirectTeam from "./Pages/Dashboard/Team/DirectTeam";
import DownlineTeam from "./Pages/Dashboard/Team/DownlineTeam";
import AddFund from "./Pages/Dashboard/Fund/AddFund";
import FundReport from "./Pages/Dashboard/Fund/FundReport";
import Topup from "./Pages/Dashboard/Topup/Topup";
import TopupReport from "./Pages/Dashboard/Topup/TopupReport";
import DirectIncome from "./Pages/Dashboard/Reports/DirectIncome";
import RoiIncome from "./Pages/Dashboard/Reports/RoiIncome";
import LevelIncome from "./Pages/Dashboard/Reports/LevelIncome";
import Withdraw from "./Pages/Dashboard/Withdrawal/Withdraw";
import WithdrawReport from "./Pages/Dashboard/Withdrawal/WithdrawReport";
import Compose from "./Pages/Dashboard/Compose/Compose";
import InboxMsg from "./Pages/Dashboard/Compose/InboxMsg";
import OutboxMsg from "./Pages/Dashboard/Compose/OutboxMsg";
import Footer from "../src/Components/Footer/Footer";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext()

function App() {
const [isToggleSidebar, setIsToggleSidebar] = useState(false);
const [themeMode , setThemeMode] = useState(true)
const [isOpenNav, setIsOpenNav] = useState(false)

useEffect(()=>{

  if (themeMode === true) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode' , 'light')
  } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode' , 'dark')
  }

},[themeMode])


const openNav = () => {
  setIsOpenNav(true)
}

const values ={
  isToggleSidebar,
 setIsToggleSidebar,
 themeMode,
 setThemeMode,
 setIsOpenNav,
 isOpenNav,
 openNav
}

  return (
    <>
      <Router>
      <MyContext.Provider value={values}>
        <Header />
        <div className="main d-flex">
        <div className={`sidebarOverlay d-none ${isOpenNav === true  && 'show'}` }  onclick={() => setIsOpenNav(false)} ></div>
          <div className={`sideWrapper ${isToggleSidebar === true ? 'toggle' : "" } ${isOpenNav === true ? 'open ' : "" }`}>
            <Sidebar />
          </div>
          <div className={`content ${isToggleSidebar === true ? 'toggle' : "" }`}>
            <div className="right-content">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/edit" element={<EditProfile />}></Route>
                <Route path="/changepass" element={<ChangePassword />}></Route>
                <Route path="/direct_team" element={<DirectTeam />}></Route>
                <Route path="/downline_team" element={<DownlineTeam />}></Route>
                <Route path="/addfund" element={<AddFund />}></Route>
                <Route path="/fundreport" element={<FundReport />}></Route>
                <Route path="/topup" element={<Topup />}></Route>
                <Route path="/topupreport" element={<TopupReport />}></Route>
                <Route path="/directincome" element={<DirectIncome />}></Route>
                <Route path="/roi_income" element={<RoiIncome />}></Route>
                <Route path="/levelincome" element={<LevelIncome />}></Route>
                <Route path="/withdraw" element={<Withdraw />}></Route>
                <Route  path="/withdrawreport" element={<WithdrawReport />} ></Route>
                <Route path="/compose" element={<Compose />}></Route>
                <Route path="/inbox" element={<InboxMsg />}></Route>
                <Route path="/outbox" element={<OutboxMsg />}></Route>
              </Routes>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center mt-5">
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </MyContext.Provider>
      </Router>
    </>
  );
}

export default App;
export {MyContext};