import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
          alt="home__banner"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Whph Jump Rope - Best for Speed Jumping, Double Unders, Wod, Mma, Boxing- Adjustable Length"
            price={6.99}
            image="https://m.media-amazon.com/images/I/71ZJaBhTcmL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Vibram Men's KSO EVO Cross Training Shoe"
            price={89.94}
            image="https://m.media-amazon.com/images/I/81lNyen42CL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            image="https://images-na.ssl-images-amazon.com/images/I/311ThQv0JoL._AC_US160_.jpg"
            price={129}
            rating={4}
          />
          <Product
            id="4"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
            image="https://m.media-amazon.com/images/I/715obo1cz0L._AC_UY218_.jpg"
            price={178}
            rating={5}
          />
          <Product
            id="5"
            title="Everlast Pro style Training Gloves"
            image="https://m.media-amazon.com/images/I/918ZBw7f6tL._AC_UL320_.jpg"
            price={26.24}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Wilson Composite Football"
            image="https://m.media-amazon.com/images/I/91GCYxUrkjL._AC_UL320_.jpg"
            price={29.24}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
