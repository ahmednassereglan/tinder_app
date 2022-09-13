import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
function Header() {
  return (
    <>
    <HeaderContainer>
        <IconButton>
            <CustomPersonIcon fontSize='large' />
        </IconButton>
        <HeaderLogo src="Tinder-Logo.png"/>
    </HeaderContainer>

    </>
  )
}

export default Header

const HeaderContainer = styled.div`
  
`;

const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
`;
const CustomPersonIcon = styled(PersonIcon)`
  
`;
