import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <>
    <div className="header">Header</div>

    <HeaderContainer>

    </HeaderContainer>

    </>
  )
}

export default Header

const HeaderContainer = styled.div`
  background-color: red;
  height: 11px;
`;
