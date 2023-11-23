import React, { useState } from 'react'

function Hooks() {
    //useState
   const [count,setCount]=useState(0)
   const [show,setShow]=useState(false)
   console.log(show);
  return (
    <>
    <div className='container mt-5'>
        <button className='btn btn-sm btn-outline-danger' onClick={()=>setCount(count-1)} disabled={count<=0}>-</button>
        <span className='mx-3'>{count}</span>
        <button className='btn btn-sm btn-outline-primary' onClick={()=>setCount(count+1)} disabled={count>=10}>+</button>
    </div>
    <div className='container mt-5'>
        <button className={show?'btn btn-sm btn-danger':'btn btn-sm btn-primary'} onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
        {
            show ? <p className='m-3'>
            The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.
            </p> :""
        }
       
    </div>
    </>
  )
}

export default Hooks