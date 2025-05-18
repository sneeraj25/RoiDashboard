import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import FundReportBox from "../Component/FundReportBox";

const FundReport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Fund Report</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <FundReportBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default FundReport;
