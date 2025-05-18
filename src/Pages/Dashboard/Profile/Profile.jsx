import React from "react";
import ProfileBox from "../Component/ProfileBox";
import BreadCrumb from "../Component/BreadCrumb";

const Profile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
          <div className="breadFlex">
                <h3>Profile</h3>
                <BreadCrumb/>
          </div>
           
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 mx-auto">
              <ProfileBox/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
