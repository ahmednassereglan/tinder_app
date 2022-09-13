import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
function Header() {
  return (
    <>
    <HeaderContainer>
        <PersonIcon />
    </HeaderContainer>

    </>
  )
}

export default Header

const HeaderContainer = styled(PersonIcon)`
  font-size: 30px;
  color: red;
`;
