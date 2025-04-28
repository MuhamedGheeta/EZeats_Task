import Colors from '@common/colors';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  fillColor?: string;
}
const Svg_Close_icon: React.FC<CustomSvgProps> = ({
  fillColor = Colors.scondary,
  ...props
}) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={fillColor}
      d="M4.586 6 .343 1.757 1.757.343 6 4.586 10.243.343l1.414 1.414L7.414 6l4.243 4.243-1.414 1.414L6 7.414l-4.243 4.243-1.414-1.414L4.586 6Z"
    />
  </Svg>
);
export default Svg_Close_icon;
