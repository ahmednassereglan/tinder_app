import React, { useState } from 'react'
import styled from 'styled-components';
function Cards() {
 const [people, setPeople] = useState([
    {
    name: 'Elon Musk',
    email: 'elon@gmail.com',
    phone: '555-555-5555',
    url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F34%2FElon_Musk_Royal_Society_%2528crop2%2529.jpg%2F1200px-Elon_Musk_Royal_Society_%2528crop2%2529.jpg&imgrefurl=https%3A%2F%2Far.wikipedia.org%2Fwiki%2F%25D8%25A5%25D9%258A%25D9%2584%25D9%2588%25D9%2586_%25D9%2585%25D8%25A7%25D8%25B3%25D9%2583&tbnid=FvG-TIlzHbg9dM&vet=12ahUKEwiZyLLl8JH6AhXsdDABHbc_BbMQMygAegUIARDeAQ..i&docid=uxoTC35C6zQ8ZM&w=1200&h=1590&q=elon%20musk&ved=2ahUKEwiZyLLl8JH6AhXsdDABHbc_BbMQMygAegUIARDeAQ',
    }
]);
  return (
    <TinderCards>
        {people.map((person) => (
            <h1>{person.name}</h1>
        ))}
    </TinderCards>
  )
}

export default Cards

const TinderCards = styled.div`
  
`;