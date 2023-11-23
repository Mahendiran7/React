import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/Context'

function Topbar() {
  const value = useContext(UserContext)
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{value}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <Link to={'/dashboard'}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
          </li></Link>
         <Link to={'/price'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Price</a>
          </li>
         </Link>
         <Link to={'/profile'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
         </Link>
         <Link to={'/hooks'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Hooks</a>
          </li>
         </Link>
         <Link to={'/form'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Forms</a>
          </li>
         </Link>
         <Link to={'/task'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Task1</a>
          </li>
         </Link>
         <Link to={'/task2'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Task2</a>
          </li>
         </Link>
         <Link to={'/student'}>
         <li class="nav-item">
            <a class="nav-link" href="#">Students</a>
          </li>
         </Link>
         
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Topbar