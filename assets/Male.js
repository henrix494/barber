import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function MaleSVG(props) {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      width={800}
      height={800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={4} r={2} stroke="none" />
      <Path
        d="M15 7H9a1 1 0 00-1 1v7h2v7h4v-7h2V8a1 1 0 00-1-1z"
        stroke="none"
      />
    </Svg>
  );
}

export default MaleSVG;
