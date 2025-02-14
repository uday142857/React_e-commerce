import axios from "axios";

export const wishlistService=()=>{
    return axios.get("http://localhost:3000/wishList");
}