import Card from "../Card/Card";
import { CardsContainer, HeroContainer } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </HeroContainer>
  );
};

export default Hero;
