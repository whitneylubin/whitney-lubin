import React from "react";
import "../images/portfolio-1.jpg";
import "../images/portfolio-2.jpg";
import "../images/portfolio-3.jpg";
import "../images/portfolio-4.jpg";

const portfolioItems = [
  {
    imgSrc: "../images/portfolio-1.jpg",
    heading: "Resume Website",
    description: "React.js Portfolio Website",
    link: "https://github.com/whitneylubin?tab=repositories"
  },
  {
    imgSrc: "../images/portfolio-2.jpg",
    heading: "Break.in",
    description: "React-on-Rails Web Application",
    link: "https://github.com/whitneylubin?tab=repositories"
  },
  {
    imgSrc: "../images/portfolio-3.jpg",
    heading: "Friendly Chat Web Client",
    description:
      "Sync data using the Firebase Realtime Database and Cloud Storage for Firebase. Authenticate users using Firebase Auth. Deployed web app on Firebase Hosting. Send notifications with Firebase Cloud Messaging.",
    link: "https://github.com/whitneylubin/friendlychat-web-1"
  },
  {
    imgSrc: "../images/portfolio-4.jpg",
    heading: "React Weather App",
    description: "Bootstrap React Application using create-react-app script",
    link: "https://github.com/whitneylubin?tab=repositories"
  }
];

const PortfolioSection = () => (
  <section className="content-section">
    <div className="container">
      <div className="row no-gutters">
        {portfolioItems.map((project, index) => (
          <div className="col-lg-6" key={`portfolio_item_${index}`}>
            <a className="portfolio-item" href={project.link}>
              <img className="img-fluid" src={project.imgSrc} alt="" />
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
