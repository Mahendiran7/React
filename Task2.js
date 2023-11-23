import axios from "axios";
import React, { useEffect, useState } from "react";

function Task2() {
    const [productDetails,setProductDetails]= useState([])
    const fetchProductDetails = async() =>{
        // axios.get('https://653bc4cad5d6790f5ec767c3.mockapi.io/products').then((res)=>{
        //     setProductDetails(res.data);
        // }).catch((error)=>{
        //     console.log(error);
        // })
        const res = await  axios.get('https://653bc4cad5d6790f5ec767c3.mockapi.io/products')
       setProductDetails(res.data);
    }

    useEffect(()=>{ // IIFE
        fetchProductDetails()
    },[])

    console.log(productDetails);

  return (
    <div className="container">
      <div className="row">
        {
            productDetails.map((list)=>{
                return   <div className="col-3">
                <div class="card" style={{width: "18rem;"}}>
                  <img src={list.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{list.name}</h5>
                    <p class="card-text">
                     {list.description}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            })
        }
       
      </div>
    </div>
  );
}

export default Task2;
