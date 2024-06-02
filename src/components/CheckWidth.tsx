const CheckWidth = ({ progress }: { progress: number }) => {
  console.log(progress);

  return (
    <div className="border p-4 w-[50%] rounded-3xl mt-10 relative transition-all duration-500 ease-in-out">
      <div
        className=""
        style={{
          backgroundImage: `linear-gradient(to right,black ${
            progress * 2
          }%, rgba(0,0,0,0) 0%)`,
        }}
      ></div>
    </div>
  );
};

export default CheckWidth;
