"use client";

import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex justify-center items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#14100C"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loading;
