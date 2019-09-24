import React, { Component } from "react"
import styled from "styled-components"
import JeopardyLogo from "../assets/logo.png"
import { Link } from "react-router-dom"

const HeaderContainer = styled.header`
  align-content: center;
  background-color: ${props => props.theme.black};
  display: flex;
  height: ${props => props.theme.headerHeight};
  justify-content: center;
`

const Logo = styled.img`
  height: auto;
  max-width: 100%;
`

class Header extends Component {
  render() {
    return(
      <HeaderContainer>
        <Link to="/">
          <Logo src={ JeopardyLogo } alt="Jeopardy Logo" />
        </Link>
      </HeaderContainer>
    )
  }
}

export default Header