import React from 'react'
import BreadCrumb from "../Component/BreadCrumb";
import DownlineTable from '../Component/DownlineTable';

const DownlineTeam = () => {
  return (
   <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Downline Team</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
           <DownlineTable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownlineTeam