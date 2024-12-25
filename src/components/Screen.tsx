import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

import {COLORS} from '../constants/colors';

type ScreenProps = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({children, containerStyle}: ScreenProps) => (
  <View style={[styles.container, containerStyle]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
});
