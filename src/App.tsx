import "./App.css";
import "./index.css";
import CustomTitle from "./components/CustomTitle";
import Wrapper from "./components/Wrapper";
import { AiOutlineDown } from "react-icons/ai";
import CustomCheck from "./components/CustomCheck";
import { useState } from "react";
import CustomButton from "./components/CustomButton";

function App() {
  const [progress, setProgress] = useState<number>(0);
  const [flip, setFlip] = useState<boolean>(false);

  const handleCLick = () => {
    setFlip(!flip);
  };

  return (
    <Wrapper compStyle="w-full min-h-[100vh] flex flex-col justify-center items-center bg-[#F7F6FF]">
      <Wrapper compStyle="w-94 h-full p-8 flex flex-col rounded-3xl border bg-white">
        {/* upper */}
        <Wrapper compStyle="flex flex-col gap-3 pb-4">
          <Wrapper compStyle="w-full flex items-start justify-between">
            <CustomTitle
              title="Take a quick tour"
              className="font-bold text-2xl"
            />
            <AiOutlineDown
              size={20}
              className={`mt-1 ${flip ? "rotate-180" : ""}`}
              strokeWidth={50}
              onClick={handleCLick}
            />
          </Wrapper>

          <Wrapper compStyle="w-[70%]">
            <CustomTitle
              title="Here are a few steps to help you hit the ground."
              className="text-xs font-normal mulish-font text-[#16182E]"
            />
          </Wrapper>

          <Wrapper compStyle="w-full flex justify-start items-center gap-4">
            <CustomTitle
              title={progress.toString()}
              className="font-bold w-[20px]"
            />

            <Wrapper compStyle="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-black transition-width duration-300 ease-in-out"
                style={{
                  width: `${progress * 2}%`,
                }}
              ></div>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper compStyle={`${!flip ? "block" : "hidden"} ease-in-out`}>
          <Wrapper>
            <hr />
          </Wrapper>

          <Wrapper compStyle="w-full h-full flex flex-col justify-start gap-4 py-6 pb-0">
            <Wrapper compStyle="flex items-center gap-2">
              <CustomCheck progress={progress} setProgress={setProgress} />
              <CustomTitle
                title="Experience contextual conversations"
                className="mulish-font text-[#16182E] font-normal text-xs"
              />
            </Wrapper>

            <Wrapper compStyle="flex items-center gap-2">
              <CustomCheck progress={progress} setProgress={setProgress} />
              <CustomTitle
                title="Brand your customer experience"
                className="mulish-font text-[#16182E] font-normal text-xs"
              />
            </Wrapper>

            <Wrapper compStyle="flex items-center gap-2">
              <CustomCheck progress={progress} setProgress={setProgress} />
              <CustomTitle
                title="Offer support beyond your website"
                className="mulish-font text-[#16182E] font-normal text-xs"
              />
            </Wrapper>

            <Wrapper compStyle="flex items-center gap-2">
              <CustomCheck progress={progress} setProgress={setProgress} />
              <CustomTitle
                title="Top customer support with bots"
                className="mulish-font text-[#16182E] font-normal text-xs"
              />
            </Wrapper>

            <Wrapper compStyle="flex items-center gap-2">
              <CustomCheck progress={progress} setProgress={setProgress} />
              <CustomTitle
                title="Build your team"
                className="mulish-font text-[#16182E] font-normal text-xs"
              />
            </Wrapper>

            <Wrapper compStyle="pl-1 m-0">
              <CustomTitle
                title="Skip this"
                className=" text-[12px] text-[#16182E] font-thin mulish-font"
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper compStyle="w-[20rem] h-auto flex justify-end">
        <CustomButton
          title="Get started"
          className="flex  gap-2 mt-2 rounded-3xl bg-[#16182E] px-4 p-3 text-white mulish-font text-xs"
        >
          <span className="bg-white rounded-full px-2 py-1 text-black">
            {progress / 10}
          </span>
        </CustomButton>
      </Wrapper>
    </Wrapper>
  );
}

export default App;
