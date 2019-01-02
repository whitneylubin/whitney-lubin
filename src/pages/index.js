/* global tw */
import React from "react";
import styled from "react-emotion";
import "typeface-cantata-one";
import "typeface-open-sans";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";
import SEO from "../components/SEO.js";
import SVG from "../components/SVG.js";
import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation
} from "../styles/animations.js";
import { hidden } from "../styles/utils.js";
import { colors } from "../../tailwind.js";
import triangle from "../images/triangle.svg";
import avatar from "../images/avatar.jpg";
import "../images/portfolio-1.jpg";
import "../images/portfolio-2.jpg";
import "../images/portfolio-3.jpg";
import "../images/portfolio-4.jpg";
import "../styles/global.js";
import PortfolioSection from "../components/PortfolioSection.js";
import "../scss/stylish-portfolio.css";

const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24 justify-center items-center flex z-50")};
`;

const Hero = styled.div`
  ${tw("w-full xl:w-2/3")};
`;

const Inner = styled.div`
  ${tw("w-full xxl:w-2/3 text-center lg:text-left")};
`;

const BigTitle = styled.h1`
  ${tw("text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide")};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw(
    "text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw("text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4")};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw("flex flex-wrap justify-between mt-8")};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw("flex flex-col lg:flex-row items-center mt-8")};
`;

const Avatar = styled.img`
  ${tw("rounded-full w-32 xl:w-48 shadow-lg h-auto")};
`;

const Jb = styled.img`
  ${tw("rounded-full w-48 xl:w-60 shadow-lg h-auto")};
`;

const AboutSub = styled.span`
  ${tw("text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl")};
`;

const AboutDesc = styled.p`
  ${tw(
    "text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify"
  )};
`;

const ContactText = styled.p`
  ${tw("text-grey-light font-sans text-xl md:text-2xl lg:text-3xl")};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw(
    "text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg"
  )};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG
            icon="triangle"
            className={hidden}
            width={48}
            stroke={colors.orange}
            left="10%"
            top="20%"
          />
          <SVG
            icon="hexa"
            width={48}
            stroke={colors.red}
            left="60%"
            top="70%"
          />
          <SVG
            icon="box"
            width={6}
            fill={colors["grey-darker"]}
            left="60%"
            top="15%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors["blue-dark"]}
            left="80%"
            top="10%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors["grey-darker"]}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={16}
            stroke={colors["grey-darkest"]}
            left="30%"
            top="65%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors["grey-darkest"]}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="5%"
          top="70%"
        />
        <SVG
          icon="circle"
          width={6}
          fill={colors["grey-darkest"]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="50%"
          top="60%"
        />
        <SVG
          icon="upDown"
          width={8}
          fill={colors["grey-darkest"]}
          left="95%"
          top="90%"
        />
        <SVG
          icon="upDown"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="40%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darker"]}
          left="25%"
          imgs
          top="5%"
        />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG
          icon="box"
          className={hidden}
          width={64}
          fill={colors.purple}
          left="5%"
          top="90%"
        />
        <SVG
          icon="box"
          width={6}
          fill={colors["grey-darkest"]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="40%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={16}
          stroke={colors["grey-darker"]}
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darker"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm Whitney Lubin.
          </BigTitle>
          <Subtitle>
            I'm a Full Stack Engineer creating web and mobile experiences for the next generation of
            consumer-facing companies.
          </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <PortfolioSection />
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG
            icon="upDown"
            width={8}
            fill={colors.teal}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors.orange}
            left="25%"
            top="5%"
          />
          <SVG
            icon="circle"
            className={hidden}
            width={24}
            fill={colors.white}
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.green}
            left="20%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="30%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors.yellow}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={16}
            stroke={colors.teal}
            left="18%"
            top="75%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.green}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        />
      </Divider>
      <Divider
        bg="#23262b"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG
            icon="box"
            className={hidden}
            width={6}
            fill={colors.blue}
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={24}
            fill={colors.orange}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.purple}
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              I am dedicated to the mission of helping small-midsized businesses
              through the use and development of technology solutions.​
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            <p>
              I've spent the bulk of my professional career working with
              businesses to find technology solutions, and as a community
              advocate and mentor. I graduated Florida State University in April
              2011, and shortly after I became immersed in the world of
              technology after participating in my 1st Hackathon hosted by
              Startup Weekend.
            </p>
            <p>
              Through-out my career, I've been fortunate enough to see
              first-hand the successful exit of 2 start-ups. As proponent of the
              national initiative to promote STEM (Science, Technology,
              Engineering, Mathematics) I have worked within higher education at
              Keiser University School of Advanced Technology working to
              encourage more minorities, and women to pursue degrees in the high
              demand technology fields.
            </p>
            <p>
              As a Full Stack engineer I have had the pleasure to work with
              great team members building solutions for clients. I enjoy melding
              my past experiences in technology ajacent client facing roles with
              my avid appetite for learning new skills. As a developer I am
              commited to exploring new and creative ways to solve old problems,
              and I look forward to working with passionate people interested in
              doing the same.
            </p>
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:whitneylubin@icloud.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://Linkedin.com/in/wlubin">Linkedin</a> &{" "}
            <a href="https://www.Medium.com/@justwhitneylubin/">Medium</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Gatsby Starter Portfolio Cara.{" "}
          <a href="https://github.com/whitneylubin/whitney-lubin">
            Github Repository
          </a>
          .
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
