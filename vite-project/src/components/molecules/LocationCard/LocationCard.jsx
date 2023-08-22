import "./LocationCard.scss";

const LocationCard = ({ info }) => {
  console.log(info);
  return (
    <div>
      {/* {info.map((proper, index) => {
        return (
          <div key={index}>
            <h4>{proper[0]}</h4>
            <p>{proper}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default LocationCard;
