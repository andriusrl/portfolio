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
  WrapperProjects,
  ProjectItem,
  PhotoProject,
  ProjectTitle,
  ProjectContent,
  WrapperContact,
  ImageEmail,
  ContactContent,
  SocialNetworksContactWrapper,
  WrapperFooter,
  SocialNetwrokContactIcon,
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
            <p>(2018 - 2021) – UNIGRAN</p>
            <p>
              Cursando graduação em Engenharia de Software no Centro Universitário da Grande Dourados
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
      <ProjectTitle>Meus projetos</ProjectTitle>
      <WrapperProjects>
        <ProjectItem>
          <PhotoProject src={require("../../images/4eddit.png")} />
          <ProjectContent>
            <h1>4eddit</h1>
            <h3>Front-end</h3>
            <p>
              O LaBook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também.
            </p>
            <p>
              Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. Além disso, esse endpoint já tem que realizar o login do usuário, fornecendo seu token de autenticação no retorno da requisição.
            </p>
            <p>
              Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário.
            </p>
            <p>
              Criar uma amizade é simples: basta receber o token de autenticação junto com o Id do usuário com o qual se deseja fazer amizade.
            </p>
            <button>Acessar Github</button>
          </ProjectContent>
        </ProjectItem>
        <ProjectItem>
          <PhotoProject src={require("../../images/labook.png")} />
          <ProjectContent>
            <h1>Labook</h1>
            <h3>Back-end</h3>
            <p>
              O LaBook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também.
            </p>
            <p>
              Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. Além disso, esse endpoint já tem que realizar o login do usuário, fornecendo seu token de autenticação no retorno da requisição. Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário.
            </p>
            <p>
              Criar uma amizade é simples: basta receber o token de autenticação junto com o Id do usuário com o qual se deseja fazer amizade.
              Encerrar uma amizade segue o mesmo fluxo de fazer: com o token de autenticação e o id do usuário, já é possível realizar esse processo.
            </p>
            <p>
              Para se criar posts o post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").
            </p>
            <p>
              O feed é composto por todos os posts dos amigos do usuário logado. Os posts são retornados em ordem de criação: do mais recente ao mais antigo.
              É possivel ver apenas um tipo de post do Feed, esse endpoint recebe um tipo ("normal" ou "evento") e retorna todos os posts que sejam do tipo especificado. Os posts são retornados em ordem de criação: do mais recente ao mais antigo.
            </p>
            <button>Acessar Github</button>
          </ProjectContent>
        </ProjectItem>
        <ProjectItem>
          <PhotoProject src={require("../../images/whats4.png")} />
          <ProjectContent>
            <h1>Whats4</h1>
            <h3>Front-end</h3>
            <p>
              Aplicativo que simula troca de mensagens.
            </p>
            <p>
              Lista de mensagem: Cada mensagem possui um remetente (ou seja, um usuário que enviou) e o conteúdo em si.
</p>
            <p>
              Envio de mensagem: Existe um local onde o usuário escolhe o nome do remetente (input) ; o conteúdo da mensagem (input) e um botão de enviar.
          </p>
            <button>Acessar Github</button>
          </ProjectContent>
        </ProjectItem>
      </WrapperProjects>
      <WrapperContact>
        <ContactContent>
          <ImageEmail src={require("../../images/email.svg")} />
          <div>
            <h1>Contrate-me!</h1>
            <p>Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreia profissional.</p>
            <p>E-mail: andrius.rochalazarino@gmail.com</p>
            <p>Celular: (67) 992-199-555 (WhatsApp)</p>
          </div>
        </ContactContent>
        <SocialNetworksContactWrapper>
          <SocialNetwrokContactIcon src={require("../../images/linkedin.svg")} />
          <SocialNetwrokContactIcon src={require("../../images/whatsapp.svg")} />
          <SocialNetwrokContactIcon src={require("../../images/github.svg")} />
          <SocialNetwrokContactIcon src={require("../../images/instagram.svg")} />
        </SocialNetworksContactWrapper>
      </WrapperContact>
      <WrapperFooter>
        <p>© 2020 Andrius</p>
      </WrapperFooter>
    </Main>
  );
}

export default App;
