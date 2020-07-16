import React from 'react';
import {
  Main,
  TopBioContainer,
  Title,
  TopBioContainerLeft,
  WrapperBioContainer,
  ContentBio,
  Photo,
  Menu,
  SocialNetworksWrapper,
  SocialNetwrokIcon,
} from '../../style/style';

function App() {
  return (
    <Main>
      <WrapperBioContainer>
        <TopBioContainerLeft>
          <Title>
            Portfólio
          </Title>
          <ContentBio>
            <h1>
              Eu sou
          </h1>
            <h1>
              Andrius Lazarino
          </h1>
            <h2>
              Desenvolvedor Web Full Stack
          </h2>
            <h3>
              Apaixonado por programação e tecnologia
          </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la
              bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u
              t aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
           </p>
           <p>
             JavaScript | React | Node | MySQL | HTML | CSS
           </p>
           <button>CV em PDF</button>
          </ContentBio>
        </TopBioContainerLeft>
        <TopBioContainer>
          <Photo src={require("../../images/andrius.png")} />
          <Menu>quem sou | projetos | contato</Menu>
          <SocialNetworksWrapper>
            <SocialNetwrokIcon src={require("../../images/linkedin.svg")} />
            <SocialNetwrokIcon src={require("../../images/whatsapp.svg")} />
            <SocialNetwrokIcon src={require("../../images/github.svg")} />
            <SocialNetwrokIcon src={require("../../images/instagram.svg")} />
          </SocialNetworksWrapper>
        </TopBioContainer>
      </WrapperBioContainer>
      Portfolio
    </Main>
  );
}

export default App;
