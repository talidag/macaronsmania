import "./MacaronsSets.scss";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import vector from "../../../assets/Vector2.svg";
import vector2 from "../../../assets/Vector.png";
import MenuCard from "../../molecules/MenuCard/MenuCard";
import six from "../../../assets/6.png";
import three3 from "../../../assets/33.png";
import sixteen from "../../../assets/16.png";
import Bullets from "../../atoms/Bullets/Bullets";

const MacaronsSets = () => {
  const setsData = [
    {
      image: six,
      text: "A set of 6 different macarons",
      price: 10.5,
    },
    {
      image: three3,
      text: "A set of 33 different macarons",
      price: 35,
    },
    {
      image: sixteen,
      text: "A set of 16 different macarons",
      price: 22,
    },
  ];
  return (
    <>
      <div className="sets">
        <img src={vector} alt="" className="sets__vector" />
        <div className="sets__text">
          <Heading text="Macarons Sets" type="white" />
          <Paragraph text="Here you can get acquainted with our work" />
        </div>
        <div className="sets__data">
          {setsData.map((set, index) => (
            <MenuCard key={index} {...set} />
          ))}
        </div>
        <Bullets />
        <img src={vector2} alt="" />
      </div>
    </>
  );
};

export default MacaronsSets;
