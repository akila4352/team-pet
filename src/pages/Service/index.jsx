import Navbar from "../../components/molecules/Navbar";
import image1 from './cbak1.jpg'
import Carousel from "../../components/atoms/carousel";
import './index.css'
const Service = () => {
  return (
    <div>
      <div className="container1">
      <div className="container1" style={{ backgroundImage: `url(${image1})` }}><Navbar/>

        <h4 className="header__title fw__6 heder pading1">Our Services</h4>
      <Carousel/>
     
     

      <div className="heder"></div> 

        <ul className="footer__links">
          <li className='left'>
            <div className="image-container">
              <img
                src="images/C2.jpg"
                alt="doc"
                className="social-icon2"
              />
              <h3 className="footer__title1">Online Appointments</h3>
              <p className="para">
                "Our modern laboratory facilities will help our clients to get the laboratory tests done in one place without going anywhere else. All samples are handled with care and checked by well-experienced technical staff. Our Laboratory is capable of testing Hematology, Dermatology, Clinical Chemistry, UFR, and other laboratory tests for all the animals."
                </p>

                <div class="d-grid gap-2 col-6 mx-auto">
                
                </div>

            </div>
            <div className="image-container">
              <img
                src="images/c3.jpg"
                alt="doc"
                className="social-icon2"
              />
              <h3 className="footer__title1">OPD Treatments</h3>
              <p className="para">
                "Our modern laboratory facilities will help our clients to get the laboratory tests done in one place without going anywhere else. All samples are handled with care and checked by well-experienced technical staff. Our Laboratory is capable of testing Hematology, Dermatology, Clinical Chemistry, UFR, and other laboratory tests for all the animals."
                </p>

                <div class="d-grid gap-2 col-6 mx-auto">
                
                </div>

            </div>
            <div className="image-container">
              <img
                src="images/c5.jpg"
                alt="doc"
                className="social-icon2"
              />
              <h3 className="footer__title1">Surgery Unit</h3>
              <p className="para">
                "Our modern laboratory facilities will help our clients to get the laboratory tests done in one place without going anywhere else. All samples are handled with care and checked by well-experienced technical staff. Our Laboratory is capable of testing Hematology, Dermatology, Clinical Chemistry, UFR, and other laboratory tests for all the animals."
                </p>

                <div class="d-grid gap-2 col-6 mx-auto">
                 
                </div>

            </div>
            
          </li>

          <li>
          <div className="image-container">
              <img
                src="images/lab.png"
                alt="doc"
                className="social-icon2"
              />
              <h3 className="footer__title1">Modern Laboratory</h3>
              <p className="para">
                "Our modern laboratory facilities will help our clients to get the laboratory tests done in one place without going anywhere else. All samples are handled with care and checked by well-experienced technical staff. Our Laboratory is capable of testing Hematology, Dermatology, Clinical Chemistry, UFR, and other laboratory tests for all the animals."
             </p>

                <div class="d-grid gap-2 col-6 mx-auto">
                 
                </div>

            </div>

            <div className="image-container">
              <img
                src="images/c1.jpg"
                alt="doc"
                className="social-icon2"
              />
              <h3 className="footer__title1">Pet Boarding</h3>
              <p className="para">
                "Our modern laboratory facilities will help our clients to get the laboratory tests done in one place without going anywhere else. All samples are handled with care and checked by well-experienced technical staff. Our Laboratory is capable of testing Hematology, Dermatology, Clinical Chemistry, UFR, and other laboratory tests for all the animals."
                </p>

                <div class="d-grid gap-2 col-6 mx-auto">
                  
                </div>

            </div>

            <div className="image-container">
              <img
                src="images/C4.jpg"
                alt="doc"
                className="social-icon2"
              />
              <h3 className="footer__title1">pet Store</h3>
              <p className="para">
                "Our modern laboratory facilities will help our clients to get the laboratory tests done in one place without going anywhere else. All samples are handled with care and checked by well-experienced technical staff. Our Laboratory is capable of testing Hematology, Dermatology, Clinical Chemistry, UFR, and other laboratory tests for all the animals."
                </p>

                <div class="d-grid gap-2 col-6 mx-auto">
                 
                </div>

            </div>
           </li>

        </ul>
      </div>
    </div>
</div>
    
  );
};
export default Service;
