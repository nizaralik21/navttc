import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./NewArival.module.css"

const NewArrival = () => {
  const items = {
    image1: "/Images/Speaker_L.png" ,
     image2: "/Images/Speaker.png" ,
     image3: "/Images/Girl.png" ,
     image4: "/Images/Perfume.png" ,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            <span className="">Featured</span>
            <h3 className="">New Arrival</h3>
          </div>

        </div>
      </div>

      <div className={`row ${Styles.mainrow}`}>
        <div className="col-6"><img className={Styles.image} src={items.image1} alt="" /></div>
        <div className="col-6">
          <div className="row">
            <div className={`col-12  ${Styles.colum} ${Styles.colum2}`}><img src={items.image3} alt="" /></div>
            <div className="col-6 border-1"><img src={items.image2} alt="" /></div>
            <div className="col-6 border-1"><img src={items.image4} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
