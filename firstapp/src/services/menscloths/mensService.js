import axios from "axios";



export function mensService(){
     return axios.get("http://localhost:3000/categories_mensclothing")
}