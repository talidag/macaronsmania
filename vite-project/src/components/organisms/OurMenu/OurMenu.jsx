import "./OurMenu.scss";
import vector2 from "../../../assets/Vector2.svg";
import vector from "../../../assets/Vector.png";
import matcha from "../../../assets/matcha.png";
import berry from "../../../assets/berry.png";
import chocolate from "../../../assets/chocolate.png";
import MenuCard from "../../molecules/MenuCard/MenuCard";
import Heading from "../../atoms/Heading/Heading";
import Parahraph from "../../atoms/Paragraph/Paragraph";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import Bullets from "../../atoms/Bullets/Bullets";

const OurMenu = () => {
  const menuData = [
    {
      image: berry,
      text: "macarons with berry ganache",
      price: 1.5,
    },
    {
      image: chocolate,
      text: "Macarons with chocolate ganache",
      price: 1.25,
    },
    {
      image: matcha,
      text: "macarons with matcha tea and lime",
      price: 1,
    },
  ];

  return (
    <>
      <div className="menu">
        <img src={vector2} alt="" className="top-vector" />
        <div className="menu__text">
          <Heading text="Our Menu" type="white" />
          <Parahraph text="Here you can view the currently available macaron flavors and order." />
        </div>
        <div className="menu__wrapper">
          <button className="menu__btn">
            <img src={leftArrow} alt="" />
          </button>
          <div className="menu__items">
            {menuData.map((item, index) => (
              <MenuCard {...item} key={index} />
            ))}
          </div>
          <button className="menu__btn">
            <img src={rightArrow} alt="" />
          </button>
        </div>
        <Bullets />
        <img src={vector} alt="" className="bottom-vector" />
      </div>
    </>
  );
};

export default OurMenu;
