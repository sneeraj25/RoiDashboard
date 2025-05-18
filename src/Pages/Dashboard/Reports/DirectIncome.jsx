import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import DirectReport from "../Component/DirectReport";

const DirectIncome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
           <div className="breadFlex">
               <h3>Direct Income</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <DirectReport />
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectIncome;
