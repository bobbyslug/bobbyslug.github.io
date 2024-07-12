type Props = {
  children: React.ReactNode;
  theme: string;
  layered?: boolean;
};

const HText = ({ children, theme, layered }: Props) => {
  return (
    <h1
      className={`${
        theme === "dark" ? "dark" : ""
      } ${
        layered ? "layer" : ""
      } accent basis-3/5 font-poppins text-3xl font-bold`}
    >
      {children}
    </h1>
  );
};

export default HText;
