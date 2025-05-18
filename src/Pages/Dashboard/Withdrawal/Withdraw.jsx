import React from 'react';
import BreadCrumb from "../Component/BreadCrumb";
import WithdrawBox from '../Component/WithdrawBox';

const Withdraw = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Withdraw </h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 mx-auto">
              <WithdrawBox/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Withdraw
