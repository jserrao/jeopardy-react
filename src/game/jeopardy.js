import React, { Component } from "react"

class Jeopardy extends Component {
  // Always set up a constructor to apply React's scope to this component
  constructor(props) {
    super(props)

    // Remember the state object is AN OBJECT
    // this.state = someArray will cause problems
    // In this example, notice that we send a destructured set of our data to this component
    // Check App.js referencing the <Jeopardy> component if you don't believe me
    // So we automatically got all these props on this.props - like question, answer, etc
    // Check React dev tools, find the component and confirm this
    // We set a couple new keys in our state object that we know we're going to modify
    // It's common to set the keys equal to things from our props
    this.state = {
      question: this.props.question,
      answer: this.props.answer
    }

    // We have to bind changeQuestion to `this` inside the constructor
    // You might be thinking, why am I doing this? Doesn't it automatically happen?
    // The answer is no. This is a custom method `changeQuestion` 
    // You have to tell React to put this in scope
    this.changeQuestion = this.changeQuestion.bind(this)
  }

  // changeQuestion is a custom handler - very common pattern in React
  // This is normally where you mutate state
  // Now you can't directly mutate state, something like this.state.question = "What's my name?"
  // React has a custom state mutator method .setState(). You add it to this, that you bound in the constructor
  // It has state implicitly in this if you did the binding
  // So setState will take your state object and replace it with whatever object you send in
  // This example modifies question and answer properties - check your react dev tools
  // Youll see props and state stay independent
  changeQuestion() {
    this.setState({
      question: "Name America\'s least favorite sport - fight me",
      answer: 'soccer'
    })
  }

  render() {
    console.log(this.props, this.state)

    // Notice how onClick references the change method - when you click the question it changes the state
    // How? The .setState inside of changeQuestion. See how the data flows?
    // React automatically renders any references to state when they change, you don't have to do anything
    // The power of this is huge, allows for dynamic interfaces without all the eventHandlers
    // And you can manage state in one place, very convenient 
    return(
      <div>
        <p>{ this.state.question }</p>
        <p>{ this.state.answer }</p>
        <button onClick={ this.changeQuestion }>Change my question</button>
      </div>
    )
  }
}

export default Jeopardy