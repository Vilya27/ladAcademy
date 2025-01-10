import { Button } from "@/components";
import TextInput from "@/TextInput/TextInput";
import { useRef } from "react";

const MyTest = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <TextInput label="Тестовый инпут" ref={inputRef} />
      <Button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Установить
      </Button>
    </>
  );
};
export default MyTest;
