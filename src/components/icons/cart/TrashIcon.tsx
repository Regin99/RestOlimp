import Svg, {Rect, Path} from 'react-native-svg';

export const TrashIcon = () => (
  <Svg width={37} height={38} viewBox="0 0 37 38" fill="none">
    <Rect
      y={0.5}
      width={37}
      height={37}
      rx={18.5}
      fill="#DB2D33"
      fillOpacity={0.4}
    />
    <Path
      d="M13.188 28a2.052 2.052 0 01-1.5-.62 2.03 2.03 0 01-.626-1.491V12.167H10v-2.111h5.313V9h6.374v1.056H27v2.11h-1.063V25.89c0 .58-.207 1.078-.623 1.491-.416.414-.916.62-1.502.62H13.188zm2.124-4.222h2.126v-9.5h-2.125v9.5zm4.25 0h2.125v-9.5h-2.125v9.5z"
      fill="#fff"
    />
  </Svg>
);
