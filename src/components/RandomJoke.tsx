import styled from "styled-components";
import type { Joke } from "../interfaces/jokes";  // Add 'type' keyword

const JokeDiv = styled.div`
  background-color: grey;  
  border-radius: 5px;
  margin: auto;
  text-align: center;        
  width: 80%;
  max-width: 700px;
  color: blue;          
  box-sizing: border-box;
`;

// Explicitly define props interface
interface RandomJokeProps {
  joke: Joke | null;
}

export default function RandomJoke({ joke }: RandomJokeProps) {
  if (!joke) {
    return <p>Click "Generate Joke" to display a joke.</p>;
  }

  return (
    <JokeDiv>
      <p><strong>Category:</strong> {joke.type}</p>
      <p><strong>Setup:</strong> {joke.setup}</p>
      <p><strong>Punchline:</strong> {joke.punchline}</p>
    </JokeDiv>
  );
}