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
  WrapperSkills,
  PhotoBottom,
  TitleSkills,
  SkillsContent,
  SkillItem,
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
      <WrapperSkills>
        <PhotoBottom src={require("../../images/andrius_bottom.png")} />
        <TitleSkills>Meus conhecimentos</TitleSkills>
        <SkillsContent>
          <SkillItem>
            <h1>
              Front-end
           </h1>
            <p>
              Desenvolvimento de aplicações
              web utilizando HTML, CSS e
              JavaScript.
           </p>
            <p>
              Criação de sites responsivos
              seguindo princípio de
              Mobile First.
            </p>
          </SkillItem>
          <SkillItem>
            <h1>
              Back-end
           </h1>
            <p>
            Aplicações utilizando NodeJS,
Typescript e MySQL.
           </p>
            <p>
            Criação de API´s para comunicação com front-end seguindo arquitetura MVC.
            </p>
          </SkillItem>
        </SkillsContent>
      </WrapperSkills>
      Portfolio
    </Main>
  );
}

export default App;
