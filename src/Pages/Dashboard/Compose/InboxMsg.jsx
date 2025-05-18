import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import InboxReport from "../Component/InboxReport";

const InboxMsg = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
           <div className="breadFlex">
                <h3>Inbox</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <InboxReport />
          </div>
        </div>
      </div>
    </>
  );
};

export default InboxMsg;
