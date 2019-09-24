import React, { Component } from "react"
import styled from "styled-components"

const Basic = styled.section`
  color: black;
  margin-top: 50px;
  text-align: center;
`

class Question extends Component {
  render() {
    return(
      <Basic>This is my simple Question component, called by React Router when we get to /question route</Basic>
    )
  }
}

export default Question