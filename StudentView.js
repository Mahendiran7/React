import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentView() {
  const params = useParams();
  const [studentDetails, setStudentDetails] = useState({});
  console.log(params.id);

  const fetchStudentDetails = () => {
    //getbyid
    axios
      .get(`https://65255e4c67cfb1e59ce72911.mockapi.io/students/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          setStudentDetails(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStudentDetails();
  }, []);
  return (
    <div className="container">
      <div>
        <div class="card" style={{ width: "18rem;" }}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">Name:{studentDetails.firstName} {studentDetails.lastName}</h5>
            <h6>Email:{studentDetails.email}</h6>
            <h6>Location:{studentDetails.location}</h6>
            <h6>Hobbby:{studentDetails?.hobby?.join(',')}</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'/student'}><a class="btn btn-primary">
            Back
            </a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentView;
