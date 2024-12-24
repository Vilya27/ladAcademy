type ButtonProps = {
  children: React.ReactNode;
  message?: string;
  onClick?: () => void;
};
const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
export { Button };
