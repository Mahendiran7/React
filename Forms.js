import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Form() {
  const navigate = useNavigate()
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    hobby: [],
    gender:""
  });

  const locationOptions = [
    { label: "Chennai", value: "Chennai" },
    { label: "Kerala", value: "Kerala" },
    { label: "Andhara", value: "Andhara" },
    { label: "Pondi", value: "Pondi" },
  ];

  const hobbyoptions = [
    { label: "Cricket", value: "Cricket" },
    { label: "Drawing", value: "Drawing" },
    { label: "Music", value: "Music" },
    { label: "Carrom", value: "Carrom" },
    { label: "Reading", value: "Reading" },
  ];

  const [list, setList] = useState([]);

  // const valid = "abcdjsahdkjshdkjkjsdhkjshfk"
  // valid.replace(/abcd/g,"def")

  const checkEmail = (email)=>{
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(pattern.test(email)){
      return true
    }
    return false
  }

  const checkpassword = (password)=>{
    const pattern =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(pattern.test(password)){
      return true
    }
    return false
  }


  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    //... spread operator
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (newStudent.firstName === "") {
      toast.error("First Name Required");
      return;
    }
    if (newStudent.lastName === "") {
      toast.error("Last Name Required");
      return;
    }
    if (newStudent.email === "") {
      toast.error("Email Required");
      return;
    }
    if(!checkEmail(newStudent.email)){
      toast.error("Invalid Email")
      return
    }

    if (newStudent.password === "") {
      toast.error("Password Required");
      return;
    }

    if(!checkpassword(newStudent.password)){
      toast.error("Password Must Contain 1 caps 1 number and special char")
      return
    }
    if(newStudent.location===""){
      toast.error("Loaction Required")
      return
    }
    if(newStudent.hobby.length<=0){
      toast.error("Hobby Required")
      return
    }

    axios.post('https://65255e4c67cfb1e59ce72911.mockapi.io/students',newStudent).then((res)=>{
      if(res.status===201){
        toast.success("Form Submitted");
        setNewStudent({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          location: "",
          hobby: [],
        });
        setList([...list, newStudent]);
        navigate('/student')
      }
     
    }).catch((error)=>{
      console.log(error);
    })
   
    
  };

  return (
    <>
      <div className="container mt-5 w-50">
        <h3>Create Student</h3>
        <div className="row">
          <div className="col-6">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              value={newStudent.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              value={newStudent.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Email Name</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={newStudent.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={newStudent.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Location</label>
            <Select
              options={locationOptions}
              value={locationOptions.filter(
                (op) => op.value === newStudent.location
              )}
              onChange={(e) =>
                setNewStudent({ ...newStudent, location: e.value })
              }
            />
          </div>
          <div className="col-6">
            <label class="form-label">Hobbies</label>
            <Select
              isMulti
              options={hobbyoptions}
              value={hobbyoptions.filter((op) => {
                return newStudent.hobby.some((pt) => op.value === pt);
              })}
              onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  hobby: e.map((hobby) => hobby.value),
                })
              }
            />
          </div>
          <div className="col-6">
              <div>
              <input type="radio" id="check1" value={"Male"} checked={newStudent.gender==="Male"} onChange={(e)=>{setNewStudent({...newStudent,gender:e.target.value})}}/>
              <label>Male</label>
              </div>
              <div>
              <input type="radio" id="check2" value={"Female"} checked={newStudent.gender==="Female"} onChange={(e)=>{setNewStudent({...newStudent,gender:e.target.value})}}/>
              <label>Female</label>
              </div>
          </div>
        </div>
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
      <div className="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Location</th>
              <th scope="col">Hobby</th>
            </tr>
          </thead>
          <tbody>
            {list.map((student, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.password}</td>
                  <td>{student.location}</td>
                  <td>{student.hobby.join(",")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Form;
