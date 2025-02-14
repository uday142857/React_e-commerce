import axios from "axios"

export function womenService(){
    return axios.get("http://localhost:3000/categories_womensclothing")
}