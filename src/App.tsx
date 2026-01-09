import { useEffect, useState } from "react";
import TrafficFavicon from "./components/TrafficFavicon";
import type { TrafficLightColor } from "./components/TrafficFavicon";

export default function App() {
  const [color, setColor] = useState<TrafficLightColor>("green");

  useEffect(() => {
    const order: TrafficLightColor[] = ["red", "orange", "green"];
    let index = 0; 

    const interval = setInterval(() => {
      setColor(order[index]);        
      index = (index + 1) % order.length; 
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <TrafficFavicon color={color} />
      <h1>Traffic Light Game</h1>
      <p>Current color: {color}</p>
    </>
  );
}
