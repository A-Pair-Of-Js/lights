export type LightColor = "red" | "orange" | "green";

type CircleProps = {
  lightColor: LightColor;
};

export function Circle({ lightColor }: CircleProps) {
  return <div style={{ ...circleBase, backgroundColor: lightColor }} />;
}

const circleBase: React.CSSProperties = {
  borderRadius: "50%",
  width: "5rem",
  height: "5rem",
};

