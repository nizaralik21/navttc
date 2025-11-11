import React from "react";
import SideCatagories from "./Components/Catagories";
import Heroslider from "./Components/HeroSlider";
import Cards from "./Components/Cards";
import SearchByCategory from "./Components/SearchByCatagory";
import ThisMonthSlider from "./Components/ThisMonthSlider";
import Music from "./Components/Music";
import DoubleSlider from "./Components/DoubleSlider"
import NewArival from "./Components/NewArival"
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <SideCatagories />
          </div>

          <div className="col-8">
            <Heroslider />
          </div>
        </div>
        <Cards />
      </div>
      <div>
        <ThisMonthSlider />
      </div>
      <div>
        <SearchByCategory />
      </div>
      <div>
        <Music />
      </div>
      <div>
        <NewArival />
      </div>
      <div>
        <DoubleSlider />
      </div>
      
    </>
  );
};

export default Home;
