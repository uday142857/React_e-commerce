
import "./Footer.css"

function Footer(){
    return (
        <div className="foot">
            <div className="fo1">
                <h3>GET IN TOUCH</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus dolores quasi, velit aspernatur sed cumque necessitatibus unde mollitia sint!</p>
                <h4><i class="bi bi-geo-alt-fill"></i> 123 Street,New York, USA</h4>
                <h4><i class="bi bi-envelope-fill"></i> info@example.com</h4>
                <h4><i class="bi bi-telephone-fill"></i> +01234567890</h4>
            </div>
            <div className="fo2">
                <h3>QUICK SHOP</h3>
                <h4><i class="bi bi-chevron-right"></i> Home</h4>
                <h4><i class="bi bi-chevron-right"></i> Our Shop</h4>
                <h4><i class="bi bi-chevron-right"></i> Shop Detail</h4>
                <h4><i class="bi bi-chevron-right"></i> Shopping Cart</h4>
                <h4><i class="bi bi-chevron-right"></i> Checkout</h4>
                <h4><i class="bi bi-chevron-right"></i> Contact Us</h4>
            </div>
            <div className="fo3">
                <h3>MY ACCOUNT</h3>
                <h4><i class="bi bi-chevron-right"></i> Home</h4>
                <h4><i class="bi bi-chevron-right"></i> Our Shop</h4>
                <h4><i class="bi bi-chevron-right"></i> Shop Detail</h4>
                <h4><i class="bi bi-chevron-right"></i> Shopping Cart</h4>
                <h4><i class="bi bi-chevron-right"></i> Checkout</h4>
                <h4><i class="bi bi-chevron-right"></i> Contact Us</h4>
            </div>
            <div className="fo4">
                <h3>NEWSLETTER</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores consequuntur eveniet cumque mollitia labore.</p>
                <input type="text" placeholder="Your Email Address " />
                <button>Sign Up</button>
                <h4>FOLLOW US</h4>
                <h4><a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a></h4>
            </div>
        </div>
    )
}
export default Footer;