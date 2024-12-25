import Svg, {Rect, Path} from 'react-native-svg';

export const PlusIcon = () => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
    <Rect x={0.5} width={24} height={24} rx={5} fill="#DB2D33" />
    <Path
      opacity={0.6}
      d="M18.5 12.857h-5.143V18h-1.714v-5.143H6.5v-1.714h5.143V6h1.714v5.143H18.5v1.714z"
      fill="#fff"
    />
  </Svg>
);
