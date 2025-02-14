import React, { useEffect, useReducer, useState } from "react";
import { cartService } from "../../services/cart/cartService";
import axios from "axios";

const reducer = (state, action) => {
  var newState;
  newState = state + action;
  return newState;
};

function Cart() {
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(reducer, 1);

  useEffect(() => {
    getcdata();
  }, []);

  const getcdata = () => {
    cartService()
      .then((res) => {
        setCart(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching cart items:", err);
      });
  };

  const deleteitem = (id) => {
    axios
      .delete(`http://localhost:3000/addToCart/${id}`)
      .then((res) => {
        console.log("Data Deleted", res.data);
        // alert("Deleted");
        getcdata();
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
        // alert("Not deleted");
      });
  };

  return (
    <div className="mt-5 ms-4">
      <h1>Cart</h1>
      <div>
        {cart.length > 0 ? (
          cart.map((element, index) => {
            return (
              <div className="container mt-5">
                <div className="row shadow p-3 my-4 w-75 d-flex justify-content-evenly align-items-center">
                  <div className="col-2">
                    <img
                      src={element.image}
                      width={70}
                      height={70}
                      alt={element.title}
                    />
                  </div>
                  <div className="col-2">
                    (Id: {element.id}) {element.title}
                  </div>
                  <div className="col-2 ">$ {element.price}</div>
                  <div className="col-2 ">
                    <button
                      style={{
                        border: "none",
                        background: "white",
                      }}
                      onClick={() => {
                        dispatch(1);
                      }}
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    {state}
                    <button
                      style={{
                        border: "none",
                        background: "white",
                      }}
                      onClick={() => {
                        if(state===1)
                        {
                          deleteitem(element.id)
                        }
                        else{
                          dispatch(-1);
                        }
                        
                      }}
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                  </div>

                  <div className="col-2 ">{element.category}</div>

                  <div className="col-2 ">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteitem(element.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="h3 text-danger text-center mt-5">
            No Products in Cart
          </h3>
        )}
      </div>
    </div>
  );
}

export default Cart;
