type FirstProps = {
  title: string;
};

export function First({ title }: FirstProps) {
  return <h1>{title}</h1>;
}
