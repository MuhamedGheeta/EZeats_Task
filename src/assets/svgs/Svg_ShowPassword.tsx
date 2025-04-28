import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Svg_ShowPassword = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#70787A"
      d="M11.83 8.5 15 11.66v-.16a3 3 0 0 0-3-3h-.17Zm-4.3.8 1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2ZM2 3.77l2.28 2.28.45.45c-1.65 1.3-2.95 3-3.73 5C2.73 15.89 7 19 12 19c1.55 0 3.03-.3 4.38-.84l.43.42 2.92 2.92L21 20.23 3.27 2.5m8.73 4a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75C21.27 7.11 17 4 12 4c-1.4 0-2.74.25-4 .7l2.17 2.15c.57-.22 1.18-.35 1.83-.35Z"
    />
  </Svg>
);
export default Svg_ShowPassword;
