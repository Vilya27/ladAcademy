type ButtonProps = {
  children: React.ReactNode;
};
const Button = ({ children }: ButtonProps) => {
  const handleClick = () => {
    alert("Работает");
  };

  return (
    <button
      onClick={handleClick}
      // onClick={() => {
      //   alert("Работает");
      // }}
    >
      {children}
    </button>
  );
};
export { Button };
