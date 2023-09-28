import React from "react";
import "./Footer.css";
import Footeritems from "../../atoms/Footeritems";

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
                        <a href = "mailto:@gmail.com" className="no">drpet@gmail.com</a><br/>
                        <span>0771289961</span>
                    </div>

                    <div className="footer__content--item ">
                        <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><a href = "#"className="no">About</a></li>
                            <li><a href = "#"className="no">Services</a></li>
                          
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "#"className="no">Events</a></li>
                            <li><a href = "#"className="no">Contact</a></li>
                            <li><a href = "#"className="no">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title no">Social LInks</h3>
                        <ul className="footer__links no">
      <Footeritems
        href="https://web.facebook.com/dr.pethospital"
        imgSrc="images/facebook.png"
        imgAlt="Facebook logo"
        spanText="Facebook"
      />
      <Footeritems
        href="https://www.instagram.com/dr.pet_hospital/?hl=en"
        imgSrc="images/twitter.png"
        imgAlt="Twitter logo"
        spanText="Twitter"
      />
      <Footeritems
        href="https://www.instagram.com/dr.pet_hospital/?hl=en"
        imgSrc="images/instagram.png"
        imgAlt="Instagram logo"
        spanText="Instagram"
      />
    </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;