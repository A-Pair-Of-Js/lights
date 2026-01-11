import './App.css'
import { Circle } from './components/circle/Circle'
import { useEffect, useState } from "react";
import type { LightColour } from "./types/lightColour";
import {FaviconColour} from "./components/FaviconColour";


export default function App() {
  const [colour, setColour] = useState<LightColour>("green");

  useEffect(() => {
    const colourSequence: LightColour[] = ["red", "orange", "green"];
    let colourSequencePosition = 0; 

    const interval = setInterval(() => {
      setColour(colourSequence[colourSequencePosition]);        
      colourSequencePosition = (colourSequencePosition + 1) % colourSequence.length; 
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <h1>Lights</h1>
      <Circle lightColour='red'></Circle>
      <Circle lightColour='orange'></Circle>
      <Circle lightColour='green'></Circle>
      <div className="card">
      </div>
      <FaviconColour color={colour} />
      <h1>Traffic Light Game</h1>
      <p>Current color: {colour}</p>
    </>
  );
}
