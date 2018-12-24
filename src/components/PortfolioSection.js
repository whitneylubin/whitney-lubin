import React from "react";

const portfolioItems = [
  {
    imgSrc: "./images/portfolio-1.jpg",
    heading: "Resume Website",
    description: "React.js Portfolio Website"
  },
  {
    imgSrc: "./images/portfolio-2.jpg",
    heading: "Ice Cream",
    description:
      "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!"
  },
  {
    imgSrc: "./images/portfolio-3.jpg",
    heading: "Strawberries",
    description:
      "Strawberries are such a tasty snack, especially with a little sugar on top!"
  },
  {
    imgSrc: "./images/portfolio-4.jpg",
    heading: "Workspace",
    description:
      "A yellow workspace with some scissors, pencils, and other objects."
  }
];

const PortfolioSection = () => (
  <section className="content-section">
    <div className="container">
      <div className="row no-gutters">
        {portfolioItems.map((project, index) => (
          <div className="col-lg-6" key={`portfolio_item_${index}`}>
            <a className="portfolio-item" href="">
              <span className="caption">
                <span className="caption-content">
                  <h2>{project.heading}</h2>
                  <p className="mb-0">{project.description}</p>
                </span>
              </span>
              <img className="img-fluid" src={project.imgSrc} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
