import "./index.scss";
import Main from "./components/organisms/Main/Main";
import vector from "./assets/Vector.png";
import pinkMac from "./assets/pink-mac.png";
import whiteMac from "./assets/white-mac.png";
import WhyUs from "./components/organisms/WhyUs/WhyUs";
import OurMenu from "./components/organisms/OurMenu/OurMenu";
import OurGallery from "./components/organisms/OurGallery/OurGallery";
import MacaronsSets from "./components/organisms/MacaronsSets/MacaronsSets";
import Location from "./components/organisms/Location/Location";
import Footer from "./components/organisms/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Main />
      </div>
      <div className="vector">
        <img src={vector} alt="" className="vector__img" />
      </div>
      <img src={pinkMac} alt="" className="pink--mac" />
      <img src={whiteMac} alt="" className="white--mac" />
      <WhyUs />
      <OurMenu />
      <OurGallery />
      <MacaronsSets />
      <Location />
      <Footer />
    </>
  );
};

export default App;
