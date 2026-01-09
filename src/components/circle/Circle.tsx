type CircleProps = {
  lightColor: string;
};

export function Circle({ lightColor }: CircleProps) {
  return <div style={{ ...circleBase, backgroundColor: lightColor }} />;
}

const circleBase: React.CSSProperties = {
  borderRadius: "50%",
};

