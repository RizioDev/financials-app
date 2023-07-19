import React from "react";
import CollapseAll from "./CollapseAll";
const Faq = () => {
  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-3 text-5xl text-blue-800 font-noto font-bold dark:text-white text-center md:text-center mt-4 md:mt-8">
          ¿POR QUE ELEGIRNOS?
        </h2>
        <h5 className="mb-3 text-xl text-gray-700 font-noto font-semibold dark:text-white text-center md:text-center mt-2 md:mt-3">
          ¡Embárcate en este viaje único y vive el placer de poseer un auto
          usado clasificado en Argentina!
        </h5>
      </div>
      <CollapseAll />
    </div>
  );
};

export default Faq;
