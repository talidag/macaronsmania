import "./NavEl.scss";

const NavEl = ({ link }) => {
  return (
    <a href={link.toLowerCase()} className="element">
      {link}
    </a>
  );
};

export default NavEl;
