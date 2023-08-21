import NavEl from "../../atoms/NavEl/NavEl";
import "./Navbar.scss";
import macaron from "../../../assets/macaron.svg";
import phone from "../../../assets/phone.svg";
import bag from "../../../assets/shopping-bag.svg";

const Navbar = () => {
  const navLinks = ["Home", "About Us", "Menu", "Contact"];
  return (
    <nav>
      <div className="logo">
        <img src={macaron} alt="" className="logo__img" />
        <a href="/home" className="logo__link">
          MACARONSMANIA
        </a>
      </div>
      <div className="right__wrapper">
        <div className="elements">
          {navLinks.map((link, index) => (
            <NavEl key={index} link={link} />
          ))}
        </div>
        <div className="phone">
          <img src={phone} alt="" className="phone__img" />
          <p className="phone__number">+123456789</p>
        </div>
        <img src={bag} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
