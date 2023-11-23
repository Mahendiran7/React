import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Settings() {
  return (
    <div className="m-5">
    <Link to={'dummy'}>
    <button className="btn btn-sm btn-primary">Dummy</button>
    </Link>
    <Outlet/>
  </div>
  )
}

export default Settings