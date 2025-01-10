import { forwardRef } from "react";
type TextInputProps = {
  label: React.ReactNode;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label } = props;
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type="text" ref={ref} />
    </>
  );
});
export default TextInput;
