import React from 'react'
import FundBox from '../Component/FundBox'
import BreadCrumb from "../Component/BreadCrumb";

const AddFund = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Fund</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 mx-auto">
              <FundBox/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddFund