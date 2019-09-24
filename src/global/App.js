import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components"
import WebFont from 'webfontloader'
import { Route, Link, Switch } from "react-router-dom";

import JeopardyData from '../data/jeopardy-data'
import Question from '../game/question'
import Jeopardy from '../game/jeopardy'
import './main.css'
import Header from "./header"

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
  white: 'rgb(245,245,245)',
  headerHeight: 'auto'
}

// Just a normal styled-component
// But notice how I can pass in a props
// I don't need `this` - I have props available through styled-components
// You can pass it down inside of the template literal with a one liner function
// More can be done with these props like conditional rendering, more on that later
const Intro = styled.main`
  align-items: center;
  color: ${props => props.theme.white};
  display: flex;
  font-family: 'Big Shoulders Text', 'sans-serif';
  font-size: 64px;
  height: calc(50vh - ${props => props.theme.headerHeight});
  justify-content: center;
`

class App extends Component {
 
  render() {
    // Notice how my ThemeProvider wraps my entire application
    // It is applying my theme of global variables to all children components
    // Under the hood it's using React Context, a global state management engine
    // Don't overthink all that for now, but if you're curious...
    // https://www.styled-components.com/docs/advanced

    /**
     * Destructing an object in props = "Just fuck it and send it all down" (Chris O) h/t
     * But really, destructing is like saying: give me all my object keys as props, in one move
     * In this example, look at jeopardy-data.js, we've got question, answer, id, tons of stuff
     * We don't want to do <Jeopardy question={ JeopardyData.question } answer={ JeopardyData.answer} etc />
     * Instead spread operator allows us to do ALL those prop declarations with just:
     * <Jeopardy {...JeopardyData} />
     */
    return ( 
      <div>
        <ThemeProvider theme={globalVariables}>
          <div>
            <Header />
            <Link to="/question">Go to question page</Link>
            <Intro />
            <Jeopardy {...JeopardyData }/>
            {/* Down in the router, we're not doing much yet, but we will - try going to /question */}
            <Route path="/question" exact component={ Question }/>
          </div> 
        </ThemeProvider> 
      </div>
    )
  }
}

export default App;