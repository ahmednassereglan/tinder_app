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
            <CustomReplayIcon />
        </IconButton>
        <IconButton>
            <CustomCloseIcon />
        </IconButton>
        <IconButton>
            <CustomStarRateIcon />
        </IconButton>
        <IconButton>
            <CustomFavoriteIcon />
        </IconButton>
        <IconButton>
            <CustomFlashOnIcon />
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
  box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important ;
  padding: 1.3vw;
  border-radius: 50%;
  font-size: 35px !important;
  color: #f5b748 !important;

`;

const CustomCloseIcon = styled(CloseIcon)`
  background-color: #fff;
  box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important ;
  padding: 1.3vw;
  border-radius: 50%;
  font-size: 35px !important;
  color: #ec5e6f !important;
`;

const CustomStarRateIcon = styled(StarRateIcon)`
  background-color: #fff;
  box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important ;
  padding: 1.3vw;
  border-radius: 50%;
  font-size: 35px !important;
  color: #62b4f9 !important;
`;

const CustomFavoriteIcon = styled(FavoriteIcon)`
  background-color: #fff;
  box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important ;
  padding: 1.3vw;
  border-radius: 50%;
  font-size: 35px !important;
  color: #76e2b3 !important;
`;

const CustomFlashOnIcon = styled(FlashOnIcon)`
  background-color: #fff;
  box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important ;
  padding: 1.3vw;
  border-radius: 50%;
  font-size: 35px !important;
  color: #915dd1 !important;
`;

