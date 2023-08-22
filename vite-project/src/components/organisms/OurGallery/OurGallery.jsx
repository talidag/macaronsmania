import "./OurGallery.scss";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import pic_1 from "../../../assets/pic_1.png";
import pic_2 from "../../../assets/pic_2.png";
import pic_3 from "../../../assets/pic_3.png";
import ellipse from "../../../assets/ellipse.svg";

const OurGallery = () => {
  return (
    <div className="gallery">
      <Heading text="Our Gallery" />
      <Paragraph text="Here you can get acquainted with our work" />
      <div className="gallery__wrapper">
        <img src={ellipse} alt="" className="ellipse-top" />
        <div className="gallery__pics">
          <img src={pic_1} alt="" />
          <img src={pic_2} alt="" />
          <img src={pic_3} alt="" />
        </div>
        <img src={ellipse} alt="" className="ellipse-bot" />
      </div>
    </div>
  );
};

export default OurGallery;
