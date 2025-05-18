import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import LevelReport from "../Component/LevelReport";

const LevelIncome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
           <div className="breadFlex">
                <h3>Level Income</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <LevelReport />
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelIncome;
