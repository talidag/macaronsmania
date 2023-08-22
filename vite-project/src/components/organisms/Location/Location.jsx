import "./Location.scss";
import { useState } from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import map from "../../../assets/map.png";
import LocationCard from "../../molecules/LocationCard/LocationCard";

const Location = () => {
  const [contact, setContact] = useState({
    title: "Contacts",
    p1: "+123456789",
    p2: "macaronsmania@gmail.com",
  });

  const [hours, setHours] = useState({
    title: "Workıng hours",
    p1: "Mon-Sun from 09:00 to 20:00",
  });

  const [location, setLocation] = useState({
    title: "Location",
    p1: "c. Paris",
    p2: "Rue Raspail, 92300 Levallois-Perret",
  });

  const [social, setSocial] = useState({
    title: "Social media",
    p1: "Instagram: macarons_mania",
    p2: "Facebook: macarons_mania",
    p3: "Twitter: macarons_mania",
  });

  return (
    <div className="location__container">
      <div className="location__text">
        <Heading text="How to find us?" />
        <Paragraph text="If you want to visit us, you can find up-to-date information about our confectionery here." />
      </div>
      <div className="location__info">
        <div className="location__details">
          <LocationCard info={contact} />
          <LocationCard info={hours} />
          <LocationCard info={location} />
          <LocationCard info={social} />
        </div>
        <div className="location__map">
          <img src={map} alt="" className="map" />
        </div>
      </div>
    </div>
  );
};

export default Location;
