import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import ImageModalContainer from './containers/ImageModalContainer';
import PhotoListContainer from './containers/PhotoListContainer';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <AppWrap>
      <GlobalStyle />
      <Header />
      <PhotoListContainer />
      <ImageModalContainer />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 16px;
    background-color: #000;
  }

  ul, li, ol {
    list-style: none;
  }

  a, a:visited, a:active, a:hover {
    color: initial;
  }
`;

export default App;
