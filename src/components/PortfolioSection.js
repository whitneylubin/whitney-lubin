import React from "react";
import "../images/portfolio-1.jpg";
import "../images/portfolio-2.jpg";
import "../images/portfolio-3.jpg";
import "../images/portfolio-4.jpg";

const portfolioItems = [
  {
    imgSrc: "../images/portfolio-1.jpg",
    heading: "Resume Website",
    description: "React.js Portfolio Website"
  },
  {
    imgSrc: "../images/portfolio-2.jpg",
    heading: "Break.in",
    description: "React-on-Rails Web Application"
  },
  {
    imgSrc: "../images/portfolio-3.jpg",
    heading: "To-Do List",
    description: "Ruby on Rails To-Do List"
  },
  {
    imgSrc: "../images/portfolio-4.jpg",
    heading: "Weather App",
    description: "React.js Weather App"
  }
];

const PortfolioSection = () => (
  <section className="content-section">
    <div className="container">
      <div className="row no-gutters">
        {portfolioItems.map((project, index) => (
          <div className="col-lg-6" key={`portfolio_item_${index}`}>
            <img className="img-fluid" src={project.imgSrc} alt="" />
            <a className="portfolio-item" href="">
              <span className="caption">
                <span className="caption-content">
                  <h2>{project.heading}</h2>
                  <p className="mb-0">{project.description}</p>
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
