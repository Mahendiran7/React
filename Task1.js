import React, { useState } from 'react'

function Task1() {
    //dummy = ["guhan","ramesh","suresh"] dummy[2]
    const [taskList,setTaskList] = useState([])
    const [finalList,setFinalList] = useState([])

    const handleAdd =()=>{
        setTaskList([...taskList,""])
    }

    const handleremove = (i)=>{
        console.log(i);
        taskList.splice(i,1)
        setTaskList([...taskList])
    }

    const handleListChange = (e,i)=>{
        taskList[i]=e.target.value
        setTaskList([...taskList])
    }

    const handleSubmit = ()=>{
        setFinalList(taskList)
        setTaskList([])
    }
  return (
    <div className='container w-25'>
        <button className='btn btn-sm btn-outline-primary my-3' onClick={()=>handleAdd()}>Add +</button>
        {
            finalList.length>0 ? <div>
                <ul>
                    {
                        finalList.map((e)=>{
                            return   <li>{e}</li>
                        })
                    }
                  
                </ul>
            </div> :<div className='my-5'>
            {
                taskList.map((list,i)=>{
                    return  <div className='d-flex my-1'>
                        <input type="text" class="form-control mx-1" value={list} onChange={(e)=>handleListChange(e,i)}/><button className='btn btn-sm btn-outline-danger rounded-pill' onClick={()=>handleremove(i)}>X</button>
                    </div>
                })
            }
       
        </div>
        }
        
        {
            taskList.length!==0 && <button className='btn btn-sm btn-outline-primary my-3' onClick={()=>handleSubmit()} >Submit</button>
        }
        
    </div>
  )
}

export default Task1