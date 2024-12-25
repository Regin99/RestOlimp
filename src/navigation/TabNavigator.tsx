import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  ContactsScreen,
  EventsScreen,
  ReservationScreen,
  ShopScreen,
} from '../screens';
import {BottomTabs, CustomHeader} from '../components';

const Tab = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <BottomTabs {...props} />;

export const TabNavigator = () => (
  <Tab.Navigator
    tabBar={tabBar}
    screenOptions={{header: props => <CustomHeader {...props} />}}>
    <Tab.Screen name="Shop" component={ShopScreen} />
    <Tab.Screen name="Reservation" component={ReservationScreen} />
    <Tab.Screen
      name="Contacts"
      component={ContactsScreen}
      options={{header: props => <CustomHeader {...props} centered />}}
    />
    <Tab.Screen name="Events" component={EventsScreen} />
  </Tab.Navigator>
);
