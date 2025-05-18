import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdUpdate } from "react-icons/md";

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 48;

  const handleClickDots = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDots = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <Button
          className="dashCard "
        >
          <div className="dashCard-body w-100 d-flex align-item-center justify-content-between">
            <div className="dashCard-content">
              {props.arrow ? <span>{props.arrow ? props.arrow : ""}</span> : ""}
              <h6>Total Users</h6>
              <h3 id="get">0.0</h3>
            </div>
            <div className="dashCard-icon">
              {props.icon ? <span>{props.icon ? props.icon : ""}</span> : ""}
            </div>
          </div>

          <div className=" w-100 d-flex  monthText align-item-center justify-content-between bottomEle">
            <h6 className="mb-0 mt-0">Last Month</h6>
            <div className="ml-auto">
              <span
                className="ml-auto  toggleIcon"
                onClick={handleClickDots}
              >
                <BsThreeDotsVertical />
              </span>

              <div className="DotsDrop">
                <Menu
                  className="DotsDropdown"
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseDots}
                  slotProps={{
                    paper: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "15ch",
                      },
                    },
                  }}
                >
                  <div className="dotsInfo">
                    <MenuItem onClick={handleCloseDots}>
                      <MdUpdate /> <span>Last Day</span>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDots}>
                      <MdUpdate /> <span>Last Week</span>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDots}>
                      <MdUpdate /> <span>Last Month</span>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDots}>
                      <MdUpdate /> <span>Last Year</span>
                    </MenuItem>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </Button>
      </div>
    </>
  );
};

export default DashboardBox;
