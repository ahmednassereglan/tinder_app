import React, { useState } from 'react'
import styled from 'styled-components';
import TinderCard from 'react-tinder-card'
export const favi = [];
function Cards() {
 const [people, setPeople] = useState([
    {
    name: 'Elon Musk',
    email: 'elon@gmail.com',
    phone: '555-555-5555',
    url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F34%2FElon_Musk_Royal_Society_%2528crop2%2529.jpg%2F1200px-Elon_Musk_Royal_Society_%2528crop2%2529.jpg&imgrefurl=https%3A%2F%2Far.wikipedia.org%2Fwiki%2F%25D8%25A5%25D9%258A%25D9%2584%25D9%2588%25D9%2586_%25D9%2585%25D8%25A7%25D8%25B3%25D9%2583&tbnid=FvG-TIlzHbg9dM&vet=12ahUKEwiZyLLl8JH6AhXsdDABHbc_BbMQMygAegUIARDeAQ..i&docid=uxoTC35C6zQ8ZM&w=1200&h=1590&q=elon%20musk&ved=2ahUKEwiZyLLl8JH6AhXsdDABHbc_BbMQMygAegUIARDeAQ',
    },
    {
    name: 'Jeff Bezos',
    email: 'jeff@gmail.com',
    phone: '555-555-5555',
    url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F2000%2F20150224165308-jeff-bezos-amazon.jpeg%3Fcrop%3D4%3A3&imgrefurl=https%3A%2F%2Fwww.entrepreneur.com%2Fgrowing-a-business%2Fjeff-bezos-biography-how-he-started-amazon-and-more%2F197608&tbnid=iQeeDtHTsAN32M&vet=12ahUKEwjK-J_B8ZH6AhV5XzABHavtDFEQMygAegUIARDjAQ..i&docid=jXF8Q4muGEBh3M&w=1779&h=1334&q=Jeff%20Bezoz&ved=2ahUKEwjK-J_B8ZH6AhV5XzABHavtDFEQMygAegUIARDjAQ',
    },
    
]);

const swiped = (direction, index, name, url) => {
    if (direction === "right") {
      favi.push({ name, url });
    }
  };
  return (
    <TinderCards>
        <CardContainer>
        {people.map((character) => (
            <TinderCard
            key={character.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,character.name)}
            //</CardContainer>onCardLeftScreen={() => outOfFrame(character.name)}
            >

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