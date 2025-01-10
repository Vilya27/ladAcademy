import { Button } from "@/components";
import { useEffect, useState } from "react";

const MyTest = () => {
  const [c, setC] = useState(0);
  const [a, setA] = useState(0);
  const [d, setD] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setD((prev) => prev + 1);
      console.log("worked");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      {c}
      <Button
        onClick={() => {
          setC((prev) => prev + 1);
        }}
      >
        +
      </Button>
      {a}
      <Button
        onClick={() => {
          setA((prev) => prev + 1);
        }}
      >
        +
      </Button>
      {d}
    </>
  );
};
export default MyTest;
