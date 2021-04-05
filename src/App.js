import React from 'react';
import Card from './Card';
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
}
p {
  line-height: 1.7;
}
body {
  font-family: 'Roboto Slab', sans-serif;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#212121')};
  background: ${(props) => {
    let color = '';
    switch (props.theme) {
      case 'dark':
        color = 'rgb(22,13,51)';
        break;
      case 'light':
        color = 'rgba(255,210,113,0.5)';
        break;
      default:
        color = 'white';
    }
    return color;
  }};
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    align-items: baseline;
    height: auto;
  }
}
a {
  text-decoration: none;
  color: dodgerblue;
  transition: .3s;
  &:hover {
   color: coral; 
   transform: translateY(-3px);
  }
}
`;

const generateThemeBasedOnTime = () => {
  const date = new Date();
  const curTime = date.getHours();
  if (curTime < 17) return 'light';
  else return 'dark';
};
class App extends React.Component {
  render() {
    const theme = generateThemeBasedOnTime();
    return (
      <>
        <GlobalStyle theme={theme} />
        <Card theme={theme} />
      </>
    );
  }
}

export default App;
