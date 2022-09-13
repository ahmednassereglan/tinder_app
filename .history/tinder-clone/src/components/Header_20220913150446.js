import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <>
    <HeaderContainer>
        <IconButton>
            <CustomPersonIcon fontSize='large' />
        </IconButton>
        <HeaderLogo src="Tinder-Logo.png"/>
        <IconButton>
            <CustomForumIcon fontSize='large' />
        </IconButton>
    </HeaderContainer>

    </>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  height: 60px;
  object-fit: contain;
`;
const CustomPersonIcon = styled(PersonIcon)`
  
`;
const CustomForumIcon = styled(ForumIcon)`
  
`;
