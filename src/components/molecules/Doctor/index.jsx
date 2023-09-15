import React from 'react';
import './index.css' // Import the CSS file
import image1 from './cbak1.jpg'  
const Doctor = () => {
  return (
    <div className="container1">
       <div className="container3" style={{ backgroundImage: `url(${image1})` }}>
      <h3 className="footer__title1">DR.PET EQUIPPED WITH</h3>
      <ul className="footer__links">
        <li>
          <img
            src="images/lab.png"
            alt="doc"
            className="social-icon2"
          />
          <h3 className="footer__title1">Advanced Laboratory</h3>
          <p className='para'><br/>Ourmodern laboratory facilities will help our clients to get the laboratory tests done in one place
           without going anywhere else. All samples are handled with care and checked by well experienced technical staff. Our Laboratory is 
           capable of testing Hematology, Dermatology, Clinical Chemistry, UFR and other laboratory tests for all the animals.</p>
        </li>
        <li>
          <img
            src="images/xray.png"
            alt="doc"
            className="social-icon2"
          />
          <h3 className="footer__title1">Digital X Ray & Ultrasound Scanning</h3>
          <p className='para'><br/>Digital X-Ray and USS scanning now available at best care animal hospital please call us for more information on these services on 0773 400 800</p>
        </li>
        <li>
          <img
            src="images/surgeon.png"
            alt="doc"
            className="social-icon2"
          />
          <h3 className="footer__title1">Field Surgery & Vaccination Unit</h3>
          <p className='para'><br/>Fully equipped modern mobile theater unit is available to perform vaccinations and Sterilizations in private, public and government locations.</p>
        </li>
       
        
      </ul></div>
    </div>
  );
};

export default Doctor;
