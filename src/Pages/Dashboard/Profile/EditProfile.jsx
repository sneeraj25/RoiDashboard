import React from "react";
import BreadCrumb from "../Component/BreadCrumb";
import ProfileEdit from "../Component/ProfileEdit";

const EditProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-12 ">
           <div className="breadFlex">
                <h3>Edit Profile</h3>
                <BreadCrumb/>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-8 mx-auto">
              <ProfileEdit/>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
