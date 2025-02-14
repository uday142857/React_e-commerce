import React, { useEffect, useRef, useState } from "react";
import "./Electronics.css";
import { electronicService } from "../../services/electronics/electronicService";
import { wishlistService } from "../../services/wishlist/wishlistService";
import { cartService } from "../../services/cart/cartService";
import { Link } from "react-router-dom";
import axios from "axios";

function Electronics() {
  const [elect, setElect] = useState([]);
  const heartRefs = useRef({});
  const [wcheck, setWcheck] = useState([]);
  const [ccheck, setCcheck] = useState([]);

  useEffect(() => {
    var electronicData = electronicService();
    var wishcheck = wishlistService();
    var cartcheck = cartService();
    electronicData
      .then((res) => {
        console.log(res.data);
        setElect(res.data);
      })
      .catch((err) => {
        console.error("Something went wrong:", err);
      });

    wishcheck
      .then((res) => {
        setWcheck(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });

    cartcheck
      .then((res) => {
        setCcheck(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

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
        console.log("Added to cart:", pos);
        setCcheck([...ccheck, item]);
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
      });
  };


  const togglewishlist=(ele)=>{
    const isInWishlist = wcheck.some((item) => item.id === ele.id);
    if(isInWishlist){
        deleteitem(ele.id)
    }
    else{
        addwish(ele)
    }
  }



  const deleteitem = (id) => {
    axios
      .delete(`http://localhost:3000/wishList/${id}`)
      .then((res) => {
        console.log("Deleted", res.data);
        setWcheck(wcheck.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const addwish = (ele, ) => {
    // Check if item is already in wishlist
    
      axios
        .post("http://localhost:3000/wishList", ele)
        .then((res) => {
          setWcheck([...wcheck, ele]);
          console.log("Added to wishlist:", res);

          
        })
        .catch((err) => {
          console.error("Error adding to wishlist:", err);
        });
    
  };

  return (
    <div className="ElectronicComponent">
      <h1>Electronics Component</h1>
      <div className="ani"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        possimus distinctio...
      </p>

      <div className="eleitems">
        {elect.map((element, index) => {
            const isInWishlist = wcheck.some((item) => item.id === element.id);
            return(
          <div className="ele" key={element.id}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title}</h3>
            <h3>Rating : {element.rating.rate}</h3>
            <h4>Price : ${element.price}</h4>

            <Link to={`/ProductDetails/${element.id}`}>
              <button className="btn btn-warning ms-4 mb-3">
                Product Details
              </button>
            </Link>

            <button
              className="btn btn-primary ms-4 mb-3"
              onClick={() => addtocart(element)}
            >
              Add To Cart
            </button>

            <button
              //   ref={(el) => (heartRefs.current[index] = el)}
              style={{
                textDecoration: "none",
                color: isInWishlist ? "red" : "black",
                // background: isInWishlist ? "#ffd1d1" : "white",
                // color: "black",
                marginTop: "15px",
                marginLeft: "20px",
                background: "white",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s, background 0.3s",
              }}
              onClick={() => togglewishlist(element)}
            >
              <i className="bi bi-heart"></i>
            </button>
          </div>
)})}
      </div>
    </div>
  );
}

export default Electronics;
