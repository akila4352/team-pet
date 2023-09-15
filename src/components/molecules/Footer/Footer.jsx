import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">Dr.Pet Hospital</a>
                        <p className="para__text">&copy;Dr.Pet Hospital.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:@gmail.com">drpet@gmail.com</a><br/>
                        <span>0771289961</span>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><a href = "#">About</a></li>
                            <li><a href = "#">Services</a></li>
                          
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Events</a></li>
                            <li><a href = "#">Contact</a></li>
                            <li><a href = "#">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social LInks</h3>
                        <ul class="footer__links">
    <li><a href="https://web.facebook.com/dr.pethospital"><img src="images/facebook.png" alt="Facebook logo" class="social-icon" /> <span>Facebook</span></a></li>
    <li><a href="https://www.instagram.com/dr.pet_hospital/?hl=en"><img src="images/twitter.png" alt="Twitter logo" class="social-icon" /> <span>Twitter</span></a></li>
    <li><a href="https://www.instagram.com/dr.pet_hospital/?hl=en"><img src="images/instagram.png" alt="Instagram logo" class="social-icon" /> <span>Instagram</span></a></li>
</ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;