import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            "Kaake Di Hatti" is a vibrant eatery that brings the rich flavors of traditional Indian cuisine to life in a modern setting. Located on a bustling street, the restaurant's colorful façade and lively interior immediately set a festive tone. Known for its extensive menu of mouthwatering dishes, from spicy chaats and savory kebabs to fragrant biryanis and creamy curries, Kaake Di Hatti prides itself on using authentic spices and fresh ingredients to craft each meal. The restaurant’s friendly staff and warm atmosphere make it an ideal spot for both casual family dinners and lively gatherings with friends.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;