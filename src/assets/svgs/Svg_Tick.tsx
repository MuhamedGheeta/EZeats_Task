import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Svg_Tick = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#1DB32C"
      d="m9.55 16-5.675-5.675L5.3 8.9l4.25 4.25L18.7 4l1.425 1.425L9.55 16ZM5 20v-2h14v2H5Z"
    />
  </Svg>
);
export default Svg_Tick;
