import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
function Header() {
  return (
    <>
    <HeaderContainer>
        <IconButton>
            <PersonIcon fontSize='large' />
        </IconButton>
        
    </HeaderContainer>

    </>
  )
}

export default Header

const HeaderContainer = styled.div`
  
`;
