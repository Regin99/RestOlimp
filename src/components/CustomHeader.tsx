import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StackHeaderProps} from '@react-navigation/stack';

import {COLORS} from '../constants/colors';

import {ChevronLeft} from './icons';

type CustomHeaderProps = {
  headerRight?: () => JSX.Element;
  centered?: boolean;
  withoutLabel?: boolean;
  withBack?: boolean;
  onBack?: () => void;
} & (NativeStackHeaderProps | BottomTabHeaderProps | StackHeaderProps);

export const CustomHeader = ({
  navigation,
  route,
  headerRight,
  centered,
  withoutLabel,
  withBack,
  onBack,
  options,
}: CustomHeaderProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {withBack && (
        <TouchableOpacity
          onPress={onBack || navigation.goBack}
          style={styles.backButton}>
          <ChevronLeft />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, centered && styles.centeredTitle]}>
        {!withoutLabel && (options?.title || route.name)}
      </Text>
      {headerRight?.()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 64,
    backgroundColor: COLORS.secondary,
    marginRight: 8,
  },
  title: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: '800',
    flex: 1,
  },
  centeredTitle: {
    textAlign: 'center',
  },
});
