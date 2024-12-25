import {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../constants/colors';

import {
  ContactsIcon,
  EventsIcon,
  ReservationIcon,
  ShopIcon,
} from './icons/tabbar';

const TAB_ICONS: Record<string, () => JSX.Element> = {
  Shop: ShopIcon,
  Reservation: ReservationIcon,
  Contacts: ContactsIcon,
  Events: EventsIcon,
};

export const BottomTabs = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const renderTab = useCallback(
    (route: (typeof state.routes)[number], index: number) => {
      const {options} = descriptors[route.key];
      const isFocused = state.index === index;

      const label =
        typeof options.tabBarLabel === 'string'
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const Icon = TAB_ICONS[route.name];

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate({name: route.name, params: {}, merge: true});
        }
      };

      return (
        <View key={route.key} style={styles.tabContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.tabButton, !isFocused && styles.inactiveTab]}>
            <Icon />
            <Text style={styles.tabLabel}>{label}</Text>
          </TouchableOpacity>
        </View>
      );
    },
    [state, descriptors, navigation],
  );

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      {state.routes.map(renderTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.foreground,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 16,
  },
  tabButton: {
    alignItems: 'center',
    gap: 6,
  },
  inactiveTab: {
    opacity: 0.5,
  },
  tabLabel: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '500',
  },
});
