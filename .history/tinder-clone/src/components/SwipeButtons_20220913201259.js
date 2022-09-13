import React from 'react'
import styled from 'styled-components';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
function SwipeButtons() {
  return (

    <SwipeContainer>
        <IconButton>
            <CustomReplayIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <CustomCloseIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <CustomStarRateIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <CustomFavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton>
            <CustomFlashOnIcon fontSize='large' />
        </IconButton>
    </SwipeContainer>
  )
}

export default SwipeButtons

const SwipeContainer = styled.div`
  position: fixed;
  bottom: 15vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly
`;


const CustomReplayIcon = styled(ReplayIcon)`
  
`;

const CustomCloseIcon = styled(CloseIcon)`
  
`;

const CustomStarRateIcon = styled(StarRateIcon)`
  
`;

const CustomFavoriteIcon = styled(FavoriteIcon)`
  
`;

const CustomFlashOnIcon = styled(FlashOnIcon)`
  
`;

