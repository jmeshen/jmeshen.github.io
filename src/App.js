import React from 'react';
import Card from './Card';
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
body {
  background: ${(props) => {
    let gradient = '';
    switch (props.theme) {
      case 'twilight':
        gradient = 'rgb(0, 0, 0), rgb(38, 24, 86)';
        break;
      case 'morning':
        gradient = 'rgb(180, 210, 236), rgb(255, 210, 113)';
        break;
      case 'afternoon':
        gradient = 'rgb(255, 210, 113), rgb(178, 209, 231)';
        break;
      case 'evening':
        gradient = 'rgb(21, 20, 20), rgb(17, 81, 121)';
        break;
      default:
        gradient = 'white';
    }
    console.log('gradient? ', gradient);
    return `linear-gradient(${gradient})`;
  }};
  font-family: 'Merriweather Sans', 'Lucida Grande', sans-serif;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  if (curTime < 4) return 'twilight';
  else if (curTime < 12) return 'morning';
  else if (curTime < 17) return 'afternoon';
  else return 'evening';
};
class App extends React.Component {
  render() {
    const theme = generateThemeBasedOnTime();
    console.log(theme);
    return (
      <>
        <GlobalStyle theme={theme} />
        <Card />
      </>
    );
  }
}

export default App;
