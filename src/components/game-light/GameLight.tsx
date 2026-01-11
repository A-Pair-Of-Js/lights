import { Circle } from "../circle/Circle"
import type { LightColour } from "../../types/lightColour";
import { useEffect, useState } from "react";

function GameLight() {
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
    <div>
        <Circle lightColour={colour} />
    </div>
  )
}

export default GameLight
