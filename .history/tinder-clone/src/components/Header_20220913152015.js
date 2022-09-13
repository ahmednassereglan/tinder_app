import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    
    <HeaderContainer>
        <IconButton>
            <CustomPersonIcon fontSize='large' />
        </IconButton>
        <HeaderLogo src="TinderLogo.png"/>
        <IconButton>
            <CustomForumIcon fontSize='large' />
        </IconButton>
    </HeaderContainer>
    
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  border: 1px solid #f9f9f9;
`;

const HeaderLogo = styled.img`
  height: 60px;
  object-fit: contain;
`;
const CustomPersonIcon = styled(PersonIcon)`
  padding: 20px;
`;
const CustomForumIcon = styled(ForumIcon)`
  padding: 20px;
`;
