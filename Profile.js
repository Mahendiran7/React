import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="m-5">
        <Link to={'setting'}>
        <button className="btn btn-sm btn-primary">Setting</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Profile;
