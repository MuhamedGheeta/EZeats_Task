import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Svg_language = (props: SvgProps) => (
  <Svg
   
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#5F6367"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 11c0 5.523 4.477 10 10 10s10-4.477 10-10S16.523 1 11 1 1 5.477 1 11Z"
    />
    <Path
      stroke="#5F6367"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 1.05S15 5 15 11c0 6-3 9.95-3 9.95m-2 0S7 17 7 11c0-6 3-9.95 3-9.95M1.63 14.5h18.74m-18.74-7h18.74"
    />
  </Svg>
)
export default Svg_language
