
import "./Header.css";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="head">
            <div className="name">
                <h1>myMartapp</h1>
            </div>
            <div className="alinks">
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/Electronics"><h3>Electronics</h3></Link>
                <Link to="/Jewelery"><h3>Jewelery</h3></Link>
                <Link to="/MensCloths"><h3>Mens</h3></Link>
                <Link to="/WomensCloths"><h3>Womens</h3></Link>
            </div>
            <div className="alinks1">
                <Link to="/Profile"><h3><i class="bi bi-person-circle"></i></h3></Link>
                <Link to="/AddToCart"><h3><i class="bi bi-cart"></i></h3></Link>
                <Link to="/AddToWish"><h3><i class="bi bi-heart"></i></h3></Link>
                <button>Logout</button>
            </div>
        </div>
    )
}
export default Header;