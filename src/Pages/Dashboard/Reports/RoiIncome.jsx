import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import RoiReportBox from "../Component/RoiReportBox";

const RoiIncome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Roi Income</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <RoiReportBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoiIncome;
