import { useEffect, useState } from "react";
import {FaviconColour} from "./components/FaviconColour";
import type { LightColour } from "./types/lightColour";


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
      <FaviconColour color={color} />
      <h1>Traffic Light Game</h1>
      <p>Current color: {color}</p>
    </>
  );
}
