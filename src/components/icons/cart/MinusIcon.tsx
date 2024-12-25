import Svg, {Rect, Path} from 'react-native-svg';

export const MinusIcon = () => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
    <Rect x={0.5} width={24} height={24} rx={5} fill="#DB2D33" />
    <Path opacity={0.6} d="M19.5 12.998h-14v-2h14v2z" fill="#fff" />
  </Svg>
);
