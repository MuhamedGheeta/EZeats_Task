import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface SvgRightArrowProps extends SvgProps {
  fillColor?: string; // Optional fill color
  width?: number; // Optional width
  height?: number; // Optional height
}

const Svg_RightArrow = ({
  fillColor = '#70787A', // Default fill color
  width = 10, // Default width
  height = 16, // Default height
  ...props
}: SvgRightArrowProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={fillColor}
      fillRule="evenodd"
      d="m2 0 8 8-8 8-2-2 6-6-6-6 2-2Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Svg_RightArrow;
