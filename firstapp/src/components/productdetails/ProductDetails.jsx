import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cartService } from '../../services/cart/cartService'

import axios from 'axios'
import "./ProductDetails.css"
import { Link } from 'react-router-dom'

function ProductDetails() {
     var object = useParams()
     var [product,setProduct]=useState(null)
     const [ccheck, setCcheck] = useState([]);
     useEffect(()=>{

        var productdata = axios.get(`http://localhost:3000/products/${object.id}`)
        productdata.then((res)=>{
            setProduct(res.data)
            console.log(res.data)
        }).catch((error)=>{
            alert("Something Wrong")
        })
        
     },[])

     if (!product) {
        return <div>Loading...</div>;
    }

    const addtocart = (item) => {
      if (
        ccheck.some((ite) => {
          return ite.id === item.id;
        })
      ) {
        alert("Item is already in cart pls increase quantity");
        return;
      }

      axios
        .post("http://localhost:3000/addToCart", item)
        .then((pos) => {
          console.log("Added to cart", pos);
          setCcheck([...ccheck, item]);
        })
        .catch((err) => {
          console.error("Error adding to cart", err);
        });
    };


 

  return (
    <div className='mt-5 ms-5 me-4 '>
        <h1>Product Details</h1>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-4'>
              <img src={product.image} width="100%" height={400}/>
            </div>
            <div className='col-8 '>
              <dl>
                <dt>Product Name</dt>
                <dd>{product.title}</dd>
                <dt>Category</dt>
                <dd>{product.category}</dd>
                <dt>Id</dt>
                <dd>{product.id}</dd>
                <dt>Rating</dt>
                <dd>{product.rating.rate}</dd>
                <dt>Count</dt>
                <dd>{product.rating.count}</dd>
                <dt>Price</dt>
                <dd>${product.price}</dd>
                <dt>Description</dt>
                <dd>${product.description}</dd>
              </dl>
              <Link to=" ">
              <button className='btn btn-primary mt-2 ms-5 mb-3' onClick={()=>{
                addtocart(product)
              }}>Add To Cart</button>
              </Link>
              {/* <Link to="/Electronics">
              <button className='btn btn-dark mt-2 ms-5 mb-3'>Back To Electronics</button>
              </Link> */}
            </div>

          </div>

        </div>
       
        
    </div>
  )
}

export default ProductDetails



import { ProductService } from '../../services/products/ProductsService'


//  var productdel=ProductService()
        //  productdel.then((res)=>{
        //     setProduct(res.data)
        //     console.log(res.data)
        // }).catch(()=>{
        //     alert("Something Wrong")
        // })





           //  var product = product?.find((item)=>
    //     item.id==object.id)