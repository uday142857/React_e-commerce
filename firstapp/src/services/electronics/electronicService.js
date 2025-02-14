
import axios from "axios";
export function electronicService(){
    return axios.get("http://localhost:3000/categories_electronics")
}