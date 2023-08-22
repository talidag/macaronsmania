import "./Footer.scss";
import vector from "../../../assets/Vector2.svg";
import macaron from "../../../assets/macaron.svg";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";
import twitter from "../../../assets/Twitter.svg";

const Footer = () => {
  return (
    <footer>
      <img src={vector} alt="" />
      <div className="footer__container">
        <div className="footer__logo">
          <img src={macaron} alt="" />
          <h2 className="footer__logo__text">Macaronsmania</h2>
        </div>
        <div className="footer__subscribe">
          <p className="footer__subscribe__text">
            Subscribe to the newsletter and be aware of promotions
          </p>
          <div className="footer__subscribe__wrapper">
            <input
              type="text"
              placeholder="Your Email"
              className="footer__input"
            />
            <button className="footer__btn">Send</button>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="footer__contact">
            <h3>Contacts</h3>
            <p>+123456789</p>
            <p>macaronsmania@gmail.com</p>
          </div>
          <div className="footer__hours">
            <h3>Working Hours</h3>
            <p>Mon-Sun from 09:00 to 20:00</p>
          </div>
        </div>
        <div className="footer__socials">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="footer__credits">
          <p>2023 ©Macaronsmania. All Rights Reserved.</p>
          <p>Created by Julianna</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
