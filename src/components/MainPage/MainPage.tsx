import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import { ContainerStyled } from "./MainPage.styled";

const MainPage = () => {
  return (
    <ContainerStyled>
      <Search />
      <Hero/>
    </ContainerStyled>
  );
};

export default MainPage;
