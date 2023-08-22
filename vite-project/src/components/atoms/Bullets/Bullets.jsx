import "./Bullets.scss";
import menuCircle from "../../../assets/menu-circle.svg";
import menuCircleSelected from "../../../assets/menu-circle-selected.svg";

const Bullets = () => {
  return (
    <div className="bullets">
      <img src={menuCircleSelected} alt="" />
      <img src={menuCircle} alt="" />
      <img src={menuCircle} alt="" />
      <img src={menuCircle} alt="" />
    </div>
  );
};

export default Bullets;
