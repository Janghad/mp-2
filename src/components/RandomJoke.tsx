import styled from "styled-components";
import { types } from "../interfaces/types";

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



export default function RandomJoke({ joke }: types) {
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
