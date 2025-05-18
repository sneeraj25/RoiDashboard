import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import WithdrawReportBox from "../Component/WithdrawReportBox";

const WithdrawReport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
           <div className="breadFlex">
                <h3>Withdraw Report</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <WithdrawReportBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawReport;
