import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Electronics from "./components/electronics/Electronics"
import Jewelery from "./components/jewelery/Jewelery"
import Menscloths from "./components/menscloths/Menscloths"
import Womenscloths from "./components/womenscloths/Womenscloths"
import Cart from "./components/cart/Cart"
import ProductDetails from "./components/productdetails/ProductDetails"
import PageNotFound from "./components/pagenotfound/PageNotFound"
import { Route,Routes } from "react-router-dom"
import PersonalDetails from "./components/personal-details/PersonalDetails"
import ProfesionalDetails from "./components/profesional-details/ProfesionalDetails"
import EducationalDetails from "./components/educational-details/EducationalDetails"
import Profile from "./components/profile/Profile"
import Wishlist from "./components/wishlist/Wishlist"



function App() {

  return (
    <div>
      
     
      <Header />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Electronics" element={<Electronics/>}/>
          <Route path="/Jewelery" element={<Jewelery/>}/>
          <Route path="/MensCloths" element={<Menscloths/>}/>
          <Route path="/WomensCloths" element={ <Womenscloths/>}/>
          <Route path="/AddToCart" element={<Cart/>}/>
          <Route path="/AddToWish" element={<Wishlist/>}/>
          <Route path="/ProductDetails/:id" element={ <ProductDetails/>}/>
          <Route path="/Profile" element={ <Profile/>}>
            <Route path="PersonalDetails" element={<PersonalDetails/>}/>
            <Route path="ProfesionalDetails" element={<ProfesionalDetails/>}/>
            <Route path="EducationalDetails" element={<EducationalDetails/>}/>
          </Route>
          <Route path="*" element={ <PageNotFound/>}/>
        </Routes>
      {/* <Footer /> */}
      
      
  
    </div>
  );
}

export default App
