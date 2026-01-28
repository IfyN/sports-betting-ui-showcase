import styled from "styled-components";
import { motion } from "framer-motion";

const HeroWrapper = styled.section`
  background: #000000;
`;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 50vh;
  aspect-ratio: 12 / 4;
  animation: fadeIn 0.5s ease-in forwards;

  /* Background image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/assets/OffersHeroBanner.jpg");
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  /* Dark overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 40vh;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 35vh;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  padding: 3rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  backdrop-filter: blur(20px);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 10%,
    rgba(0, 0, 0, 0.5) 25%,
    rgba(0, 0, 0, 0.6) 100%
  );

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.cyan};
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.25rem;
  }
`;

const CTAButton = styled.button`
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.darkText};
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    background: #ffde5a;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 217, 61, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 1.1rem 2rem;
  }
`;

const Terms = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.colors.lightGray};
  margin-top: 2rem;
  line-height: 1.4;
  opacity: 0.8;
`;

export default function HeroSection() {
  return (
    <HeroWrapper>
      <BackgroundImage />

      <HeroContent
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroTitle>FOOTBALL BETTING</HeroTitle>
        <HeroSubtitle>
          2 GOALS AHEAD <br /> EARLY PAYOUT OFFER
        </HeroSubtitle>

        <CTAButton>View All Offers</CTAButton>

        <Terms>
          T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's
          apply T&C's apply T&C's apply
        </Terms>
      </HeroContent>
    </HeroWrapper>
  );
}