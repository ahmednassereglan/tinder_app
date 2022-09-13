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
            <TinderCard
            className="swipe"
            key={character.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
            >
             <DivCard bgImg={character.url}>

             </DivCard>
            </TinderCard>
        ))}
        </CardContainer>
    </TinderCards>
  )
}

export default Cards

const TinderCards = styled.div`
  
`;
const CardContainer = styled.div`
  
`;

const DivCard = styled.div`
  background-image: ${pr => `url("/images/${pr.bgImg}")`};
`;