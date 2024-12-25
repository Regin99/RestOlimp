import Svg, {Rect, Path} from 'react-native-svg';

export const UncheckedReservationIcon = () => (
  <Svg width={35} height={36} viewBox="0 0 35 36" fill="none">
    <Rect
      y={0.5}
      width={35}
      height={35}
      rx={17.5}
      fill="#fff"
      fillOpacity={0.25}
    />
    <Path
      opacity={0.5}
      d="M13.927 22.594l12.36-12.36a1.399 1.399 0 011.02-.437c.39 0 .73.146 1.021.437.292.292.438.639.438 1.04 0 .402-.146.748-.438 1.039l-13.38 13.416a1.4 1.4 0 01-1.02.438 1.4 1.4 0 01-1.022-.438l-6.27-6.27a1.359 1.359 0 01-.42-1.039c.011-.4.163-.747.456-1.04.293-.292.64-.438 1.04-.437.4 0 .746.146 1.038.437l5.177 5.214z"
      fill="#000"
    />
  </Svg>
);
