export type LightColor = "red" | "orange" | "green";

type CircleProps = {
  lightColor: LightColor;
  shading?: boolean
};

export function Circle({ lightColor, shading = true }: CircleProps) {
  let backgroundStyle: string;

  if (shading && lightColor === "orange") {
    // vertical stripes
    backgroundStyle =
      "repeating-linear-gradient(to bottom, rgb(255,165,0) 0 10px, rgb(255,200,100) 10px 20px)";
  } else if (shading && lightColor === "red") {
    // horizontal stripes 
    backgroundStyle =
      "repeating-linear-gradient(to right, rgb(255,0,0) 0 10px, rgb(200,0,0) 10px 20px)";
  } else if (lightColor === "green") {
    backgroundStyle = "rgb(0,128,0)";
  } else {
  
    backgroundStyle = lightColor;
  }

  return <div style={{ ...circleBase, background: backgroundStyle }} />;
}

const circleBase: React.CSSProperties = {
  borderRadius: "50%",
  width: "5rem",
  height: "5rem",
};
