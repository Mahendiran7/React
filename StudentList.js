import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "reactstrap";

function StudentList() {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState("");
  const[editModal,setEditModal]= useState(false)
  const [offcanvasModal,setOffcanvasModal] = useState(false)
  const location = useLocation()
  console.log(location?.state?.dashboard);
  const[ediData,setEditData]=useState({})
  const navigate = useNavigate();

  const fetchStudentList = () => {
    axios
      .get("https://65255e4c67cfb1e59ce72911.mockapi.io/students")
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStudentList();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    if (id === undefined) {
      return toast.error("Id Required");
    }
    axios
      .delete(`https://65255e4c67cfb1e59ce72911.mockapi.io/students/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Deleted SuccessFully");
          fetchStudentList();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEdit = (data)=>{
    console.log(data);
    setEditModal(!editModal)
    setEditData(data)
  }

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

  const handleChange = (e)=>{
    setEditData({...ediData,[e.target.name]:e.target.value})
  }

  const onUpdate = ()=>{
    console.log(ediData);
    axios.put(`https://65255e4c67cfb1e59ce72911.mockapi.io/students/${ediData.id}`,ediData).then((res)=>{
      console.log(res);
      setEditModal(!editModal)
      toast.success("Updated Successfully")
      fetchStudentList()
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3 onClick={()=>setOffcanvasModal(!offcanvasModal)}>Student List</h3>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/form")}
        >
          Create Student +
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
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              student.map((list, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{list.firstName}</td>
                    <td>{list.lastName}</td>
                    <td>{list.email}</td>
                    <td>{list.password}</td>
                    <td>{list.location}</td>
                    <td>{list.hobby.join(",")}</td>
                    <td>{list.gender}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/student/${list.id}`)}
                      >
                        View
                      </button>
                      <button className="btn btn-sm btn-outline-warning" onClick={()=>onEdit(list)}>
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        id={`popover-${i}`}
                        onClick={() => setDeleteId(list.id)}
                      >
                        Delete
                      </button>
                      <Popover
                        target={`popover-${i}`}
                        isOpen={list.id === deleteId}
                        placement="top"
                      >
                        <PopoverHeader>Are you Sure ?</PopoverHeader>
                        <PopoverBody>
                          <h5>You want to delete Permenantly?</h5>
                          <div>
                            <button
                              className="btn btn-sm btn-outline-primary mx-3"
                              onClick={() => handleDelete(list.id)}
                            >
                              Yes
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger mx-3"
                              onClick={() => setDeleteId("")}
                            >
                              No
                            </button>
                          </div>
                        </PopoverBody>
                      </Popover>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <Modal isOpen={editModal} toggle={()=>setEditModal(!editModal)}>
        <ModalHeader toggle={()=>setEditModal(!editModal)}>Edit Student</ModalHeader>
        <ModalBody>
        <div className="container">
       
        <div className="row">
          <div className="col-6">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              value={ediData.firstName}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              value={ediData.lastName}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Email Name</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={ediData.email}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={ediData.password}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Location</label>
            <Select
              options={locationOptions}
              value={locationOptions.filter((op)=>op.value===ediData.location)}
              onChange={(e)=>setEditData({...ediData,location:e.value})}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Hobbies</label>
            <Select
              isMulti
             options={hobbyoptions}
             value={hobbyoptions.filter((op)=>{
                return ediData?.hobby?.some((pt)=>pt===op.value)
             })}
             onChange={(e)=>setEditData({...ediData,hobby:e.map((op)=>op.value)})}
            />
          </div>
          <div className="col-6">
              <div>
              <input type="radio" id="check1" value={"Male"} checked={ediData.gender==="Male"} onChange={(e)=>{setEditData({...ediData,gender:e.target.value})}}/>
              <label>Male</label>
              </div>
              <div>
              <input type="radio" id="check2" value={"Female"} checked={ediData.gender==="Female"} onChange={(e)=>{setEditData({...ediData,gender:e.target.value})}}/>
              <label>Female</label>
              </div>
          </div>
        </div>
      </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-outline-primary mx-3" onClick={()=>onUpdate()}>
              Update
            </button>
            <button className="btn btn-sm btn-outline-danger mx-3" onClick={()=>setEditModal(!editModal)}>
              Cancel
            </button>
          </div>
        </ModalFooter>
      </Modal>
      <Offcanvas isOpen={offcanvasModal} toggle={()=>setOffcanvasModal(!offcanvasModal)}>
        <OffcanvasHeader toggle={()=>setOffcanvasModal(!offcanvasModal)}>Heading</OffcanvasHeader>
        <OffcanvasBody>
          Something
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default StudentList;
