import React from "react";
import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";
import "reset-css";
import "./App.scss";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function App() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrow left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>

        <div className="inner">
          <div className="t-image">
            <ul>
              <li><img src={testimonials[0].image} alt={testimonials[0].name} /></li>
              <li><img src={testimonials[1].image} alt={testimonials[1].name} /></li>
              <li><img src={testimonials[2].image} alt={testimonials[2].name} /></li>
            </ul>
          </div>
        </div>

        <div className="arrow right">
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
