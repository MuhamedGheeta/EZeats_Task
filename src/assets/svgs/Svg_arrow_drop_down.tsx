import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface Props extends SvgProps {
  fillColor?: string;
}

const SvgArrowDropDown = ({fillColor = '#40484A', ...props}: Props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={fillColor}
      d="M6.218 7.508h11.565c.117 0 .232.03.332.087a.62.62 0 0 1 .236.235.569.569 0 0 1-.039.62l-5.783 7.8c-.24.323-.816.323-1.057 0L5.69 8.45a.567.567 0 0 1-.041-.62.618.618 0 0 1 .237-.236.677.677 0 0 1 .333-.086Z"
    />
  </Svg>
);

export default SvgArrowDropDown;
