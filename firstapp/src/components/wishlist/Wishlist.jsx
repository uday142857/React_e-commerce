import React, { useEffect, useState } from 'react'
import { wishlistService } from '../../services/wishlist/wishlistService';
import axios from 'axios';

function Wishlist() {
    const [wish,setWish]=useState([])
    useEffect(()=>{
       getdata()
    },[])

    const getdata = ()=>{
         wishlistService()
           .then((res) => {
             console.log(res.data);
             setWish(res.data);
           })
           .catch((err) => {
             console.log("error");
           });
    }
    const deleteitem=(id)=>{
        axios.delete(`http://localhost:3000/wishList/${id}`).then((res)=>{
            console.log("Deleted",res.data)
            getdata();
        }).catch((err)=>{
            console.error("err",err)
        });

    }
  return (
    <div className="mt-5 ms-4">
        <h1>WishList</h1>
        <div>
            {
                wish.length > 0 ?(
                    
                    wish.map((element,index)=>{
                    return (
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-4">
                            <img
                              src={element.image}
                              width="100%"
                              height={400}
                              alt={element.title}
                            />
                          </div>
                          <div className="col-8">
                            <dl>
                              <dt>Product Name</dt>
                              <dd>{element.title}</dd>
                              <dt>Id</dt>
                              <dd>{element.id}</dd>
                              <dt>Price</dt>
                              <dd>${element.price}</dd>
                            </dl>
                            <button
                            //   className="btn btn-danger"
                              style={{
                                border:"black",
                                color:"red",
                                background:"white"
                                
                              }}
                              onClick={() => {
                                deleteitem(element.id);
                              }}
                            >
                              <i class="bi bi-heart-fill"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                })
            
                ):(
                    <h3 className='h3 text-danger text-center mt-5'>No Products </h3>
                )
            }
        </div>
      
    </div>
  );
}

export default Wishlist