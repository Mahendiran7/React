import React, { useContext } from 'react'
import UserContext from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { decreement, increement } from '../redux/reducer'

function Pricing() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const value = useContext(UserContext)
    const data = [
        {
            name:"Free",
            cost:"0",
            users:"Single User"
        },
        {
            name:"Plus",
            cost:"9",
            users:"5 User"
        },
        {
            name:"Pro",
            cost:"49",
            users:"Unlimited User"
        },

    ]
  return (
    <section class="pricing py-5">
  <div class="container">
    <h3>{value}</h3>
    <div className='container text-center my-3'>
      <button className='btn btn-sm btn-outline-danger'onClick={()=>dispatch(decreement())}>-</button>
      {count}
      <button className='btn btn-sm btn-outline-primary' onClick={()=>dispatch(increement())}>+</button>
    </div>
    <div class="row">
        {
            data.map((list)=>{
                return   <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{list.name}</h5>
                    <h6 class="card-price text-center">${list.cost}<span class="period">/month</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{list.name==="Free"? list.users :<b>{list.users}</b>}</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                        Private Projects</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                        Phone Support</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
                      </li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                        Reports</li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            })
        }
     
     
    </div>
  </div>
</section>
  )
}

export default Pricing