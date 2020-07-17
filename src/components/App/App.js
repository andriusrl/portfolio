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
  WrapperEducation,
  EducationItem,
  EducationTitle,
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
      <WrapperEducation>
        <EducationItem>
          <div>
            <h2>Engenharia de software</h2>
            <p>(2018 - 2021)</p>
            <p>
              Cursando Engenharia de Software no Centro Universitário da Grande Dourados
            </p>
          </div>
        </EducationItem>
        <EducationItem>
          <EducationTitle>Educação</EducationTitle>
          <div>
            <h2>Full Stack Development</h2>
            <p>(01/2020 - 07/2020) – Labenu</p>
            <p>
              Tecnlogias estudadas: SQL, Javascript, HTML, CSS, Git, Amazon Web Services, Node.js, React.js, Github, Typescript, 
              Unit Testing, Firebase, Jest.
            </p>
          </div>
        </EducationItem>
        <EducationItem>
          <div>
            <h2>Programação com JavaScript</h2>
            <p>(11/2019) – Digital Innovation One</p>
            <p>
              Programação para internet com JavaScript.
            </p>
          </div>
        </EducationItem>
      </WrapperEducation>
    </Main>
  );
}

export default App;
