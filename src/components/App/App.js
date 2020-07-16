import React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { TopBioContainer, Photo } from '../../style/style';
function App() {
  return (
    <div>
      <HeaderMenu />
      <TopBioContainer>
        Testando
      </TopBioContainer>
      <TopBioContainer>
        <Photo src={require("../../images/andrius.png")}/>
      </TopBioContainer>
      Portfolio
    </div>
  );
}

export default App;
