import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT AMBROSIA</h1>
            <p>Where every dish is a divine experience.</p>
          </div>
          <p className="mid">
            At Ambrosia, we believe in creating culinary masterpieces that
            tantalize your taste buds and elevate your dining experience to new
            heights. Our chefs blend tradition with innovation to bring you
            dishes that are not only delicious but also showcase the finest
            ingredients sourced locally and globally.
          </p>
          <Link to={"/menu"} className="explore-menu">
            Explore Menu{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="About Ambrosia" />
        </div>
      </div>
    </section>
  );
};

export default About;
