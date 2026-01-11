export type LightColour = "red" | "orange" | "green";

const backgroundStyles: Record<LightColour, string> = {
  red: "repeating-linear-gradient(to right, rgb(255,0,0) 0 8px, rgb(150,0,0) 8px 16px)", // stronger contrast
  orange: "repeating-linear-gradient(to bottom, rgb(255,140,0) 0 8px, rgb(255,200,0) 8px 16px)", // deeper contrast
  green: "rgb(0,128,0)", 
};

type CircleProps = {
  lightColour: LightColour;
};

export function Circle({ lightColour }: CircleProps) {
  const backgroundStyle = backgroundStyles[lightColour];

  return <div aria-label={lightColour} style={{ ...circleBase, background: backgroundStyle }} />;
}

const circleBase: React.CSSProperties = {
  borderRadius: "50%",
  width: "5rem",
  height: "5rem",
};
