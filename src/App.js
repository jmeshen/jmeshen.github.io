import React, { useState, useEffect } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  keyframes,
} from "styled-components";
import normalize from "styled-normalize";

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
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${(props) => `${props.ready ? "0.3s" : "0s"} ease`};
    @media only screen and (max-width: 850px) {
      align-items: baseline;
      height: auto;
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => `${props.theme.accent}AA`};
    transition: .3s;
    &:hover {
    color: coral; 
    transform: translateY(-3px);
    }
  }
`;

const themeObj = {
  light: {
    text: "#212121",
    accent: "#226c80",
    bg: "rgba(255,210,113,0.5)",
  },
  dark: {
    text: "ivory",
    accent: "#ffd264",
    bg: "rgb(22,13,51)",
  },
};

const wiggle = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(15deg);
  }
`;

const ToggleButton = styled.button`
  animation: ${wiggle} 2s linear infinite alternate;
  &:hover {
    color: ${(props) => `${props.theme.accent}AA`};
  }
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  float: right;
  padding: 0.5rem;
  @media only screen and (max-width: 850px) {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState(() => {
    const date = new Date();
    const curTime = date.getHours();
    if (curTime > 5 && curTime < 17) {
      return "light";
    } else {
      return "dark";
    }
  });

  useEffect(() => {
    setReady(true);
  }, []);

  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <>
      <ThemeProvider theme={mode === "light" ? themeObj.light : themeObj.dark}>
        <GlobalStyle ready={ready} />
        <ToggleButton onClick={toggleMode}>
          <FontAwesomeIcon icon={mode === "light" ? faSun : faMoon} size="2x" />
        </ToggleButton>

        <Card />
      </ThemeProvider>
    </>
  );
};

export default App;
