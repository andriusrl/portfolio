import React from 'react';
import {
  TopBioContainer,
  Name,
  WrapperBioContainer,
  Photo,
  Menu,
  SocialNetworksWrapper,
  SocialNetwrokIcon
} from '../../style/style';

function App() {
  return (
    <div>
      <WrapperBioContainer>
        <TopBioContainer>
          <Name>
            Andrius
          </Name>
          {/* Eu sou Andrius Lazarino
          Desenvolvedor Web Full Stack
          Apaixonado por programação e tecnologia */}
        </TopBioContainer>
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
    </div>
  );
}

export default App;
