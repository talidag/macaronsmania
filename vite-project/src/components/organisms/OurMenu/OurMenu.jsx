import "./OurMenu.scss";
import vector2 from "../../../assets/Vector2.svg";
import vector from "../../../assets/Vector.png";

const OurMenu = () => {
  return (
    <>
      <div className="menu">
        <img src={vector2} alt="" />
      </div>
      <img src={vector} alt="" />
    </>
  );
};

export default OurMenu;
