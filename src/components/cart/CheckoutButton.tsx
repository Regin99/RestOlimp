import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {COLORS} from '../../constants/colors';

export const CheckoutButton = ({totalPrice}: {totalPrice: number}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.checkoutButton}
      onPress={() => {
        navigation.navigate('Order');
      }}>
      <Text style={styles.checkoutButtonText}>Total</Text>
      <Text style={styles.checkoutAmount}>${totalPrice.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 4,
  },
  checkoutButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.black,
  },
  checkoutAmount: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.primary,
  },
});
