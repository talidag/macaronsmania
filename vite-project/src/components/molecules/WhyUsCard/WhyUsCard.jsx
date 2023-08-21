import "./WhyUsCard.scss";

const WhyUsCard = ({ image, heading, text }) => {
  return (
    <div
      className={`why-us__card ${
        heading === "Variety" ? "why-us__card--grey" : ""
      }`}
    >
      <img className="why-us__card__image" src={image} alt="" />
      <div className="why-us__card__text">
        <h4 className="why-us__card__heading">{heading}</h4>
        <p className="why-us__card__paragraph">{text}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
