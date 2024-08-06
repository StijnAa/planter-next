import React from "react";
import TextLink from "../link/textLink.component";

// TODO: footer restylen

const Footer: React.FC = () => {
    return (
        <div className="footer padding-wrapper">
            <div className="footer__column">
                <p className="footer__column-title">Planter</p>
                <TextLink className="footer__column-link" href="/contact">
                    <p>{">"} Contact</p>
                </TextLink>
                <div className="footer__column-icon link__inherit">
                    <a href="www.voormolentuinen.nl" aria-label="link naar voormolentuinen.nl" target="_blank">
                        <p>{">"} Voormolen Tuinen</p>
                    </a>
                </div>
            </div>
            <div className="footer__column">
                <p className="footer__column-title">___________</p>
                <TextLink className="footer__column-link" href="/faq">
                    <p>{">"} FAQ</p>
                </TextLink>
                <TextLink className="footer__column-link" href="/terms-of-service">
                    <p>{">"} Terms of Service </p>
                </TextLink>
                <TextLink className="footer__column-link" href="/privacyverklaring">
                    <p>{">"} Privacyverklaring</p>
                </TextLink>
                <TextLink className="footer__column-link" href="/shipping-returns">
                    <p>{">"} Shipping & Returns</p>
                </TextLink>
            </div>
            <div className="footer__column footer__column--social">
                <p className="footer__column-title">Volg ons:</p>

                <div className="footer__column-icon link__inherit">
                    <a
                        href="https://www.instagram.com/voormolentuinen/"
                        aria-label="link naar instagram"
                        target="_blank"
                    >
                        <i className="icofont-instagram icofont-2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
