import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SoundWordIcon = (props: SvgProps) => (
  <Svg width={16} height={16} {...props}>
    <Path
      fill="#44407c"
      fillRule="evenodd"
      d="M4.253 3.25c-1.77 1.238-3.226 2.588-3.236 3C.99 7.424 3.471 7.129 4.8 5.8 5.733 4.867 6 5.313 6 7.808c0 2.934-.168 3.104-1.955 1.988C1.409 8.15.148 9.631 2.573 11.527 7.905 15.696 8 15.634 8 8.035 8 4.166 7.881 1 7.736 1c-.145 0-1.713 1.012-3.483 2.25M12 8c0 1.65.45 3 1 3s1-1.35 1-3-.45-3-1-3-1 1.35-1 3M9 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1"
    />
    <Path
      fill="transparent"
      fillRule="evenodd"
      d="M0 8.04v8.041l8.25-.291 8.25-.29.292-7.75.292-7.75H0v8.04m.286.46c.008 4.4.201 6.762.43 5.25.5-3.302.725-3.337 4.126-.65L7.5 15.2l.31-3.6c.171-1.98.171-5.22 0-7.2L7.5.8 4.842 2.9C1.518 5.527 1.239 5.517.706 2.75.467 1.512.279 4.1.286 8.5M3.25 6.36C.398 7.772.434 8.23 3.508 9.656 5.857 10.746 6 10.646 6 7.906c0-1.598-.112-2.851-.25-2.783-.138.067-1.262.624-2.5 1.237M12 8c0 1.65.45 3 1 3s1-1.35 1-3-.45-3-1-3-1 1.35-1 3M9 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1"
    />
  </Svg>
);
export default SoundWordIcon;
