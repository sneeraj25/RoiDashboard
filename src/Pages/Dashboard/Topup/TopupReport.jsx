import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import TopupReportBox from "../Component/TopupReportBox";

const TopupReport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Topup Report</h3>
                <BreadCrumb/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <TopupReportBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopupReport;
