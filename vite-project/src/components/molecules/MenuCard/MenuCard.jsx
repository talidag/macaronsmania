import "./MenuCard.scss";
import heart from "../../../assets/heart.svg";

const MenuCard = ({ image, text, price }) => {
  return (
    <div className="menu__card">
      <button className="menu__card__heart">
        <img src={heart} alt="" />
      </button>
      <img src={image} alt="" className="menu__card__image" />
      <h1 className="menu__card__text">{text}</h1>
      <div className="price__wrapper">
        <p className="menu__card__price">Price: {price}$</p>
        <button className="menu__card__btn">Add</button>
      </div>
    </div>
  );
};

export default MenuCard;
