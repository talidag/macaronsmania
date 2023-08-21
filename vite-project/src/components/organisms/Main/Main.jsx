import Navbar from "../../molecules/Navbar/Navbar";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <Navbar />
      <hr></hr>
      <div className="main">
        <h1 className="title">Welcome ın our store</h1>
        <p className="description">
          We know the recipe for happiness and we are ready to share it with
          you.
        </p>
      </div>
    </main>
  );
};

export default Main;
