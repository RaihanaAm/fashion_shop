import "./_footer.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoSnapchat } from "react-icons/bi";
import { LiaPinterest } from "react-icons/lia";
import visa from "../../assets/images/cards/visa.png"
import paypal from "../../assets/images/cards/paypal.png"
import master from "../../assets/images/cards/mastercard.png"
import express from "../../assets/images/cards/express.png"

export const Footer = () => {
    const cards = [master, visa, express, paypal]

    return (
        <footer className="footer">
            <div className="items d-block d-md-flex">
                <div className="touch ">
                    <h4>GET IN TOUCH</h4>
                    <p className="qst">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="d-flex icons">
                        <p><BiLogoFacebook /></p>
                        <p><FaInstagram /></p>
                        <p><BiLogoSnapchat /></p>
                        <p><LiaPinterest /></p>
                    </div>
                </div>
                <div className="categorie">
                    <h4>CATEGORIE</h4>
                    <div>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>

                    </div>
                </div>
                <div className="links">
                    <h4>LINKS</h4>
                    <div>
                        <p>About us</p>
                        <p>Contact us</p>

                    </div>
                </div>

            </div>
            <div className="cards">
                <div>
                    {
                        cards.map((element, index) =>
                            <>
                                <img src={element} alt="" />
                            </>

                        )
                    }
                </div>
                <p>Copyright © 2023 Fashion. All rights reserved.</p>
            </div>



        </footer>
    )
}