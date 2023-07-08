import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Animated = () => {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={8}
      color="248, 252, 252"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    ></AnimatedCursor>
  );
};

export default Animated;
