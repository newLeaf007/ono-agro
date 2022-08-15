import { Container, Row, Col } from "reactstrap";
import styles from './Pages/footer.css';

const CustomFooter = () => {
  return (
    <footer class="footer-distributed">

			<div class="footer-left">

				<h3>ONO<span>Agro</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">About us</a>
				
					<a href="#">Certificates</a>
				
					<a href="#">More</a>
					
					
					
					<a href="#">Contact Us</a>
				</p>

				<p class="footer-company-name">ONOAgro © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>32,First Floor, Shree Bhawan </span>Kavi Raman Path, Boring Road, Patna 800001 </p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 842-087-9449 | +91 878-954-2391</p>
				</div>

				

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					ONO Agro assures to supply of the product with Qualty and quantity
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
  );
};
export default CustomFooter;
