import "./WhyUs.scss";
import WhyUsCard from "../../molecules/WhyUsCard/WhyUsCard";
import delivery from "../../../assets/delivery.svg";
import quality from "../../../assets/quality.svg";
import variety from "../../../assets/variety.svg";

const WhyUs = () => {
  const whyUsData = [
    {
      image: quality,
      heading: "High Quality",
      text: "All our products are of high quality. We purchase products only from verified suppliers.",
    },
    {
      image: variety,
      heading: "Variety",
      text: "We have about 25 different flavors of macarons. Every day we come up with different flavors so that you can enjoy macarons.",
    },
    {
      image: delivery,
      heading: "Delivery",
      text: "If you want to try our macarons outside our pastry shop, we can deliver them to you in a short time.",
    },
  ];

  return (
    <div className="why-us">
      <h3 className="why-us__heading">Why choose us?</h3>
      <p className="why-us__text">
        You will choose us because we know how to surprise you, we always have
        high quality products.
      </p>
      <div className="why-us__cards">
        {whyUsData.map((item, index) => (
          <WhyUsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
