import React, { Component } from 'react';
import styled, { ThemeProvider} from "styled-components"
import WebFont from 'webfontloader'
import './main.css'

// What the hell is this?!?
// In React, best practice is to load webfonts via JS
// Read more here: https://www.npmjs.com/package/webfontloader
WebFont.load({
  google: {
    families: ['Big Shoulders Text', 'Roboto']
  }
});

// Remember this from the styled-components lesson?
// These are our global variables, in an object
// We're going to load them into our <ThemeProvider> for the rest of our app
const globalVariables = {
  black: 'rgb(10,10,10)',
  darkGray: 'rgb(80,80,80)',
  blue: '#4C76D1',
  darkBlue: 'rgb(11,31,60)',
  purple: '#4B39B4',
  yellow: '#FBA61C',
  white: 'rgb(245,245,245)'
}

// Just a normal styled-component
const Intro = styled.main`
  align-items: center;
  color: ${props => props.theme.white};
  display: flex;
  font-family: 'Big Shoulders Text', 'sans-serif';
  font-size: 64px;
  height: 100vh;
  justify-content: center;
`

class App extends Component {
  render() {
    // Notice how my ThemeProvider wraps my entire application
    // It is applying my theme of global variables to all children components
    // Under the hood it's using React Context, a global state management engine
    // Don't overthink all that for now, but if you're curious...
    // https://www.styled-components.com/docs/advanced
    return (
      <ThemeProvider theme={ globalVariables }>
        <Intro>
          It's time to play Jeopardy
        </Intro>
      </ThemeProvider>
    )
  }
}

export default App;
