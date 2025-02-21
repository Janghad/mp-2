import { useState, useEffect } from "react";
import styled from "styled-components";
import RandomJoke from "./components/RandomJoke";
import { Joke } from "./interfaces/jokes";
import './App.css'

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

export default function App() {
  const [joke, setJoke] = useState<Joke | null>(null);

  async function fetchData(): Promise<void> {
      const rawData = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const results: Joke = await rawData.json();
      setJoke(results);
  }

  useEffect(() => {
      fetchData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was an error: " + e));
  }, []);

  return (
      <ParentDiv>
          <h1>Random Joke</h1>
          <button onClick={fetchData}>Generate Another Joke</button>
          <RandomJoke joke={joke} />
      </ParentDiv>
  );
}