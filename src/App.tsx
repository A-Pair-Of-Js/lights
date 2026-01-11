import './App.css'
import { Circle } from './components/circle/Circle'
import { useEffect, useState } from "react";
import type { LightColour } from "./types/lightColour";
import {FaviconColour} from "./components/FaviconColour";


export default function App() {
  const [color, setColor] = useState<LightColour>("green");

  useEffect(() => {
    const order: LightColour[] = ["red", "orange", "green"];
    let index = 0; 

    const interval = setInterval(() => {
      setColor(order[index]);        
      index = (index + 1) % order.length; 
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <h1>Lights</h1>
      <Circle lightColor='red'></Circle>
      <Circle lightColor='orange'></Circle>
      <Circle lightColor='green'></Circle>
      <div className="card">
      </div>
      <FaviconColour color={color} />
      <h1>Traffic Light Game</h1>
      <p>Current color: {color}</p>
    </>
  );
}
