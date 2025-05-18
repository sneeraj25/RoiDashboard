import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import OutboxReport from "../Component/OutboxReport";

const OutboxMsg = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Outbox</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <OutboxReport />
          </div>
        </div>
      </div>
    </>
  );
};

export default OutboxMsg;
