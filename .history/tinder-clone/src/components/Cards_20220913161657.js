import React, { useState } from 'react'
import styled from 'styled-components';
import TinderCard from 'react-tinder-card'
// export const favi = [];
function Cards() {
 const [people, setPeople] = useState([
    {
    name: 'Elon Musk',
    email: 'elon@gmail.com',
    phone: '555-555-5555',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    },
    {
    name: 'Jeff Bezos',
    email: 'jeff@gmail.com',
    phone: '555-555-5555',
    url: 'https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3',
    },
    
]);

const swiped = (direction,nameToDelete) => {
    console.log("removing:"+ nameToDelete)
    // setLastDirection(direction)
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen")
  };
  return (
    <TinderCards>
        <CardContainer>
        {people.map((character) => (
            <CustomTinderCard
            key={character.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
            >
             <DivCard bgImg={character.url}>
                <h3>{character.name}</h3>
             </DivCard>
            </CustomTinderCard>
        ))}
        </CardContainer>
    </TinderCards>
  )
}

export default Cards

const TinderCards = styled.div`
  
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

const DivCard = styled.div`
  position: relative;
  background-image: ${pr => `url(${pr.bgImg})`};
  height: 50vh;
  width: 600px;
  max-width: 85vw;
  padding: 20px;
  box-shadow: 0px 18px 53px 0px rgba(0,0,0,0.3);
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const CustomTinderCard = styled(TinderCard)`
  position: absolute;
`;