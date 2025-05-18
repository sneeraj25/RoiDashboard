import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <div className="WelUser">
        <div className="breadCrumb  d-flex ">
          
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              className="anchorBread"
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              to="/">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return (
                <li key={to}>
                  <Link
                    className="anchorBread"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="inherit"
                    to={to}>
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    {value}
                  </Link>
                </li>
              );
            })}
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
