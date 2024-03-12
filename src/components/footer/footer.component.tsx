import React from "react";
import TextLink from "../link/textLink.component";

// TODO: footer restylen

const Footer: React.FC = () => {
    return (
        <div className="footer padding-wrapper">
            <div className="footer__column">
                <p className="footer__column-title">Planter</p>
                <TextLink className="footer__column-link" href="/mission">
                    <p> Our Mission</p>
                </TextLink>
                <TextLink className="footer__column-link" href="/">
                    <p> Journal</p>
                </TextLink>
            </div>
            <div className="footer__column">
                <p className="footer__column-title">___________</p>
                <TextLink className="footer__column-link" href="/faq">
                    <p> FAQ</p>
                </TextLink>
                <TextLink className="footer__column-link" href="/terms-of-service">
                    <p> Terms of Service </p>
                </TextLink>
                <TextLink className="footer__column-link" href="/privacy-policy">
                    <p> Privacy Policy</p>
                </TextLink>
                <TextLink className="footer__column-link" href="/shipping-returns">
                    <p> Shipping & Returns</p>
                </TextLink>
            </div>
            <div className="footer__column footer__column--social">
                <p className="footer__column-title">Volg ons:</p>
                <TextLink className="footer__column-icon" href="www.facebook.com">
                    <i className="icofont-facebook icofont-2x" />
                </TextLink>
                <TextLink className="footer__column-icon" href="www.facebook.com">
                    <i className="icofont-instagram icofont-2x" />
                </TextLink>
            </div>
        </div>
    );
};

export default Footer;
