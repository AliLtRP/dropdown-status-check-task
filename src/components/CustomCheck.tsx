import { useState } from "react";
import Wrapper from "./Wrapper";
import { AiOutlineCheck } from "react-icons/ai";

const CustomCheck = ({
  progress,
  setProgress,
}: {
  progress: number;
  setProgress: (number: number) => void;
}) => {
  const [status, setStatus] = useState<boolean>(false);

  const handleClick = () => {
    setStatus(!status);
    if (!status) {
      setProgress(progress + 10);
    } else {
      setProgress(progress - 10);
    }
  };

  return (
    <Wrapper
      compStyle={`${
        status ? "bg-black" : ""
      } flex justify-center items-center rounded-3xl w-6 h-6 border-2`}
      handleClick={() => handleClick()}
    >
      <AiOutlineCheck size={15} className="text-white p-0.5" strokeWidth={50} />
    </Wrapper>
  );
};

export default CustomCheck;
