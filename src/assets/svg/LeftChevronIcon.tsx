import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';
import {colors} from '../../constants/colors';

const LeftChevronIcon = (props: SvgProps) => (
  <Svg width="35" height="35" viewBox="0 0 24 24" {...props}>
    <G fill="none" fill-rule="evenodd">
      <G>
        <G>
          <G>
            <G>
              <Path
                d="M0 0L24 0 24 24 0 24z"
                transform="translate(-323 -213) translate(20 184) translate(0 21) translate(303 8)"
              />
              <Path
                fill={props.color || colors.yellow}
                fill-rule="nonzero"
                d="M12 13.172L16.95 8.222 18.364 9.636 12 16 5.636 9.636 7.05 8.222z"
                transform="translate(-323 -213) translate(20 184) translate(0 21) translate(303 8)"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default LeftChevronIcon;
