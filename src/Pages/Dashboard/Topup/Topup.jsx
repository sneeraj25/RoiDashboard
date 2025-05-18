import React from 'react'
import TopupBox from '../Component/TopupBox'
import BreadCrumb from '../Component/BreadCrumb'

const Topup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
            <div className="breadFlex">
                <h3>Topup </h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 mx-auto">
              <TopupBox/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topup
