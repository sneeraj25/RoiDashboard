import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import DirectTeamTable from "../Component/DirectTeamTable";

const DirectTeam = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Direct Team</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <DirectTeamTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectTeam;
