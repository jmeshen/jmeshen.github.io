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
    let gradient = '';
    switch (props.theme) {
      case 'dark':
        gradient = 'rgb(38, 24, 86), black';
        break;
      case 'morning':
        gradient = 'rgb(255, 210, 113), rgb(180, 210, 236) ';
        break;
      case 'light':
        gradient = 'white, rgb(255, 210, 113)';
        break;
      case 'evening':
        gradient = 'rgb(17, 81, 121), rgb(21, 20, 20)';
        break;
      default:
        gradient = 'white';
    }
    return `radial-gradient(${gradient})`;
  }};
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    align-items: baseline;
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
    console.log(theme);
    return (
      <>
        <GlobalStyle theme={theme} />
        {/* <GlobalStyle theme="light" /> */}
        <Card theme={theme} />
        {/* <Card theme="light" /> */}
      </>
    );
  }
}

export default App;
