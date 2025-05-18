import React, { useContext, useState } from "react";
import logoIcon from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FiAlignLeft } from "react-icons/fi";
import SearchBox from "../SearchBox/SearchBox";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { IoMenu , IoCloseSharp } from "react-icons/io5";
import profile from "../../assets/images/profile.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import { IoShieldHalfSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MyContext } from "../../App";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);


  const context = useContext(MyContext)

  const open = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotifications);

  const handleClickMyAcc = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorEl(null);
  };

  const handleClickMyNotification = (event) => {
    setIsOpenNotifications(event.currentTarget);
  };
  const handleCloseMyNotification = () => {
    setIsOpenNotifications(false);
  };

  return (
    <>
      <header className="d-flex align-items-center ">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 col-lg-2 col-sm-3 col-2">
              <Link to="/" className="d-flex align-items-center logo">
                <img src={logoIcon} width={"50px"} />
                <span className="ms-2">AdminDash</span>
              </Link>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-4 col-3 d-flex align-items-center">
              <Button className="roundedButton d-lg-block d-none me-2" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
               {
                context.isToggleSidebar === false ? <FiAlignLeft /> : <IoClose />
               } 
              </Button>

              <Button className="roundedButton d-lg-none d-block me-2" onClick={() => context.setIsOpenNav(!context.isOpenNav)}>
               {
                context.isOpenNav === false ? <IoMenu /> : <IoCloseSharp />
               } 
              </Button>

              <SearchBox />
            </div>

            <div className="col-md-5 col-lg-7 col-sm-7 col-7 d-flex align-items-center justify-content-end">
              <Button className="roundedButton me-3" onClick={() => context.setThemeMode(!context.themeMode)}>
                {
                context.themeMode === true ? <MdOutlineWbSunny /> : <IoIosMoon />
               } 
              </Button>

              

              <div className="myWrapNotification ">
                <Button
                  className="roundedButton  me-3"
                  onClick={handleClickMyNotification}
                >
                  <MdNotificationsNone />
                </Button>
                <Menu
                  open={openNotifications}
                  anchorEl={isOpenNotifications}
                  className="notifications dropdown_list"
                  id="notifications"
                  onClose={handleCloseMyNotification}
                  onClick={handleCloseMyNotification}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="order-head px-3 pt-2">
                    <h6>Notification (15)</h6>
                  </div>

                  <Divider />

                  <div className="mb-2"></div>

                  <div className="scroll">
                    <MenuItem
                      className="menuItemText"
                      onClick={handleCloseMyNotification}
                    >
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span>
                              <img src={profile} alt={profile} />
                            </span>
                          </div>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">
                            Trading activity gives a tangible reason for profits
                          </h6>
                          <span>few seconds ago!</span>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="menuItemText"
                      onClick={handleCloseMyNotification}
                    >
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span>
                              <img src={profile} alt={profile} />
                            </span>
                          </div>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">
                            Trading activity gives a tangible reason for profits
                          </h6>
                          <span>few seconds ago!</span>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="menuItemText"
                      onClick={handleCloseMyNotification}
                    >
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span>
                              <img src={profile} alt={profile} />
                            </span>
                          </div>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">
                            Trading activity gives a tangible reason for profits
                          </h6>
                          <span>few seconds ago!</span>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="menuItemText"
                      onClick={handleCloseMyNotification}
                    >
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span>
                              <img src={profile} alt={profile} />
                            </span>
                          </div>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">
                            Trading activity gives a tangible reason for profits
                          </h6>
                          <span>few seconds ago!</span>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="menuItemText"
                      onClick={handleCloseMyNotification}
                    >
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span>
                              <img src={profile} alt={profile} />
                            </span>
                          </div>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">
                            Trading activity gives a tangible reason for profits
                          </h6>
                          <span>few seconds ago!</span>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="w-100 px-2 pt-2">
                    <Button className="viewNotification btn w-100">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
              </div>

              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleClickMyAcc}
                >
                  <div className="userImg">
                    <span>
                      <img src={profile} alt={profile} />
                    </span>
                  </div>
                  <div className="userInfo ms-2">
                    <h5>Username</h5>
                    <h6>User Id</h6>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleCloseMyAcc}
                  onClick={handleCloseMyAcc}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAcc}>
                    <Link
                      to="/profile"
                      className="profileDown d-flex align-items-center"
                    >
                      <ListItemIcon>
                        <MdOutlineAccountCircle />
                      </ListItemIcon>
                      <span>My Account</span>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAcc}>
                    <Link
                      to="/changepass"
                      className="profileDown d-flex align-items-center"
                    >
                      <ListItemIcon>
                        <IoShieldHalfSharp />
                      </ListItemIcon>
                      <span>Reset Password</span>
                    </Link>
                  </MenuItem>

                  <Divider />

                  <MenuItem onClick={handleCloseMyAcc}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
