import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Svg_leftArrow = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#70787A"
      fillRule="evenodd"
      d="M8 0 0 8l8 8 2-2-6-6 6-6-2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Svg_leftArrow
