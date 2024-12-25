import Svg, {Path} from 'react-native-svg';

export const GiftIcon = () => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
    <Path
      d="M4.5 11v8a2 2 0 002 2h12a2 2 0 002-2v-8"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 5.5A3.5 3.5 0 009 2a2.5 2.5 0 100 5h3.5m0-1.5V7m0-1.5A3.5 3.5 0 0116 2a2.5 2.5 0 010 5h-3.5"
      stroke="#000"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 11v10m-9-14h18v4h-18V7z"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
