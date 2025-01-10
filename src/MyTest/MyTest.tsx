import { Button } from "@/components";
import TextInput from "@/TextInput/TextInput";
import { useRef, useState } from "react";

const MyTest = () => {
  const [counter, setCounter] = useState<number>(0);
  const prevCounterRef = useRef<number>(0);
  return (
    <>
      <Button
        onClick={() => {
          prevCounterRef.current = counter;
          setCounter((prev) => prev + 1);
        }}
      >
        Значение {counter}
      </Button>
    </>
  );
};
export default MyTest;
