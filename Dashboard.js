import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/Context";

function Dashboard() {
  const value = useContext(UserContext)
  console.log(value);
  const navigate = useNavigate()
  const data = [
    {
      name: "Primary Card",
      color:'primary'
    },
    {
      name: "Warning Card",
      color:'warning'
    },
    {
      name: "Success Card",
      color:'success'
    },
    {
      name: "danger Card",
      color:"danger"
    },
  ];

  // `  ${ }     `
  return (
    <div className="container my-5">
      <h3>{value}</h3>
      <div className="row">
        {data.map((card) => {
          return (
            <div className="col-3">
              <div class={`card bg-${card.color}`}>
                <div class="card-body">
                  <h5 class="card-title">{card.name}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <h5 class="card-header" onClick={()=>navigate('/student',{state:{dashboard:data}})}>Featured</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
