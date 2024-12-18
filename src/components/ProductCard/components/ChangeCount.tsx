import { Button } from "@/components";
type ChangeCountProps = {
  onAdd: () => void;
  onDecrement: () => void;
  count: number;
};
const ChangeCount = ({ onAdd, onDecrement, count }: ChangeCountProps) => {
  return (
    <div>
      <Button onClick={onAdd}> + </Button>
      {count}
      <Button onClick={onDecrement}> - </Button>
    </div>
  );
};
export default ChangeCount;
