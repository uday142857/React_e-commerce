import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Menscloths.css";
import { mensService } from "../../services/menscloths/mensService";
import { wishlistService } from "../../services/wishlist/wishlistService";
import { cartService } from "../../services/cart/cartService";
import { Link } from "react-router-dom";
function Menscloths() {
  var [menc, setMenc] = useState([]);
  const [wcheck, setWcheck] = useState([]);
  const [ccheck, setCcheck] = useState([]);

  useEffect(() => {
    var mensdata = mensService();
    var wishcheck = wishlistService();
    var cartcheck = cartService();
    mensdata
      .then((res) => {
        console.log(res.data);
        setMenc(res.data);
      })
      .catch(() => {
        alert("Something Wrong");
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

  var addtocart = (item) => {
    if (ccheck.some((ite) => ite.id === item.id)) {
      alert("Item is already in cart pls increase quantity");
      return;
    }

    axios
      .post("http://localhost:3000/addToCart", item)
      .then((pos) => {
        console.log(pos);
        setCcheck([...ccheck, item]);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  // const getmencdata=()=>{

  // }

  const togglewishlist = (ele) => {
    const isInWishlist = wcheck.some((item) => item.id === ele.id);
    if (isInWishlist) {
      deleteitem(ele.id);
    } else {
      addwish(ele);
    }
  };

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

  const addwish = (ele) => {
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
    <div className="MenComponent">
      <h1>MensCloths Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        possimus distinctio, saepe porro quasi amet aperiam corporis fugit quo,
        voluptatem doloremque, cum itaque aut. Nemo dolore provident cum
        deserunt hic? Sapiente consequatur non doloremque nesciunt quo sint
        reiciendis accusamus incidunt impedit? Aliquam et exercitationem, nisi
        ex ratione atque iste. Explicabo facilis aspernatur quasi temporibus
        minus. Ducimus quam tenetur dignissimos est. Explicabo quam nam
        recusandae minus autem vel. Ipsa tenetur qui tempora vero itaque?
        Perferendis quo eaque perspiciatis in, molestiae veniam repudiandae enim
        repellat mollitia doloremque corporis nobis animi soluta dolore eum
        illum nesciunt! Explicabo saepe, et, dolorem inventore quo facere quae
        odit consequuntur, fugiat in ipsum illum consectetur esse deserunt. Quia
        doloribus quasi dolores aliquid id exercitationem optio nihil,
        voluptates excepturi, aspernatur consectetur animi iste quam quae enim
        tenetur saepe ratione mollitia pariatur esse! Distinctio, et. Iusto,
        beatae laborum numquam quaerat optio quae modi unde cupiditate est,
        blanditiis, natus quisquam?
      </p>
      {/* <button onClick={getmencdata} className="btn btn-outline-danger">Get Electronic data</button> */}
      <div className="mencloths">
        {menc.map((element, index) => {
          const isInWishlist = wcheck.some((item) => item.id === element.id);
          return (
            <div className="men">
              <img src={element.image} />
              <h3>{element.title}</h3>
              <h3>Rating : {element.rating.rate}</h3>
              <h4>Price : ${element.price}</h4>
              <Link to={`/ProductDetails/${element.id}`}>
                <button className="btn btn-warning ms-4 mb-3">
                  Product Details
                </button>
              </Link>
              <Link to=" ">
                <button
                  className="btn btn-primary ms-5 mb-3"
                  onClick={() => {
                    addtocart(element);
                  }}
                >
                  Add To Cart
                </button>
              </Link>

              <Link to="">
                <button
                  style={{
                    textDecoration: "none",
                    color: isInWishlist ? "red" : "black",
                    background: "white",
                    marginTop: "15px",
                    marginLeft: "20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    togglewishlist(element)
                  }}
                >
                  <i class="bi bi-heart"></i>
                </button>
              </Link>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, error?</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menscloths;
