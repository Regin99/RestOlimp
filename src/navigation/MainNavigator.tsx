import {CustomHeader} from '../components';
import {
  BonusScreen,
  CartScreen,
  EventScreen,
  OrderScreen,
  ReservationSuccessfullScreen,
} from '../screens';

import {RootStack} from './RootStack';
import {TabNavigator} from './TabNavigator';

export const MainNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Tabs"
      component={TabNavigator}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Event"
      component={EventScreen}
      options={{
        header: props => <CustomHeader {...props} withBack withoutLabel />,
      }}
    />
    <RootStack.Screen
      name="Basket"
      component={CartScreen}
      options={{
        header: props => <CustomHeader {...props} withBack />,
      }}
    />
    <RootStack.Screen
      name="Order"
      component={OrderScreen}
      options={{
        title: 'Basket',
        header: props => <CustomHeader {...props} withBack />,
      }}
    />
    <RootStack.Screen
      name="ReservationSuccessfull"
      component={ReservationSuccessfullScreen}
      options={{
        title: 'Reservation',
        header: props => <CustomHeader {...props} withBack />,
      }}
    />
    <RootStack.Screen
      name="Bonus"
      component={BonusScreen}
      options={{
        title: 'Bonus program',
        header: props => <CustomHeader {...props} withBack />,
      }}
    />
  </RootStack.Navigator>
);
