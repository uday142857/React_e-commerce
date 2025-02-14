import axios from "axios";

export function ProductService(){
    return axios.get("http://localhost:3000/products")
}