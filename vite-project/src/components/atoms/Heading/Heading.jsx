import "./Heading.scss";

const Header = ({ text, type }) => {
  return (
    <h3 className={`heading ${type === "white" && "heading--white"}`}>
      {text}
    </h3>
  );
};

export default Header;
