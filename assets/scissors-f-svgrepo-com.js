import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SvgComponentSCR = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h32v32H0z" />
      <Path
        fill="#fff"
        d="M9.067 4.49a4.5 4.5 0 0 1-.26 7.934l4.192 2.42 15.09-8.71a1 1 0 0 1 1 1.732l-14.09 8.133 14.09 8.135a1 1 0 0 1-1 1.732l-15.09-8.712-4.189 2.418a4.5 4.5 0 1 1-4.243.138l.13-.071.009-.005 6.293-3.635-6.293-3.633-.058-.036a4.5 4.5 0 1 1 4.419-7.84z"
      />
    </G>
  </Svg>
);
export default SvgComponentSCR;
