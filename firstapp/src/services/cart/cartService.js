import axios from 'axios';

export const cartService =  () => {
  return  axios.get('http://localhost:3000/addToCart'); 
};