import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Tabs: undefined;
  Shop: {};
  Event: {
    id: number;
  };
  Basket: undefined;
  Order: undefined;
  Bonus: undefined;
  ReservationSuccessfull: undefined;
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
