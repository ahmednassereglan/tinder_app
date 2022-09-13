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
            <ReplayIcon />
        </IconButton>
        <IconButton>
            <CloseIcon />
        </IconButton>
        <IconButton>
            <StarRateIcon />
        </IconButton>
        <IconButton>
            <FavoriteIcon />
        </IconButton>
        <IconButton>
            <FlashOnIcon />
        </IconButton>
    </SwipeContainer>
  )
}

export default SwipeButtons

const SwipeContainer = styled.div`
  
`;