import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  decreement, increement } from '../redux/reducer'

function Dummy() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='container text-center my-3'>
      <button className='btn btn-sm btn-outline-danger'onClick={()=>dispatch(decreement())}>-</button>
      {count}
      <button className='btn btn-sm btn-outline-primary' onClick={()=>dispatch(increement())}>+</button>
    </div>
  )
}

export default Dummy