import "./LocationCard.scss";

const LocationCard = ({ info }) => {
  return (
    <div className="location__card">
      <h1>{info.title}</h1>
      <p>{info.p1}</p>
      <p>{info.p2}</p>
      <p>{info.p3}</p>
    </div>
  );
};

export default LocationCard;
