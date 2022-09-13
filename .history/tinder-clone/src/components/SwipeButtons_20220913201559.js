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
  bottom: 5vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly
`;


const CustomReplayIcon = styled(ReplayIcon)`
  background-color: #fff;
  box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) ;
`;

const CustomCloseIcon = styled(CloseIcon,CustomReplayIcon)`
  
`;

const CustomStarRateIcon = styled(StarRateIcon)`
  
`;

const CustomFavoriteIcon = styled(FavoriteIcon)`
  
`;

const CustomFlashOnIcon = styled(FlashOnIcon)`
  
`;

