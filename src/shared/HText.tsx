type Props = {
  children: React.ReactNode;
  theme: string;
};

const HText = ({ children, theme }: Props) => {
  return (
    <h1
      className={`${
        theme === "dark" ? "dark" : ""
      } text text-md basis-3/5 font-poppins font-bold`}
    >
      {children}
    </h1>
  );
};

export default HText;
