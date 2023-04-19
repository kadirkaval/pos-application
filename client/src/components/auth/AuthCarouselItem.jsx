import React from "react";

function AuthCarouselItem({title, content, img}) {
  return (
    <div className="!flex flex-col items-center justify-center h-full mb-10">
      <img src={img} alt="" className="w-[60%] h-[500px]" />
      <h3 className="text-4xl text-white text-center font-bold my-4">
        {title}
      </h3>
      <p className="text-white text-center text-2xl">
        {content}
      </p>
    </div>
  );
}

export default AuthCarouselItem;
