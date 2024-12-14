type ButtonProps = {
  children: React.ReactNode;
  message?: string;
  onClick?: () => void;
};
const Button = ({ children, onClick, message = "Работает" }: ButtonProps) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button
      onClick={onClick}
      // onClick={() => {
      //   alert("Работает");
      // }}
    >
      {children}
    </button>
  );
};
export { Button };
