import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants/colors';

export const PriceRow = ({label, amount}: {label: string; amount: number}) => (
  <View style={styles.priceRow}>
    <Text style={styles.priceLabel}>{label}</Text>
    <Text style={styles.priceAmount}>${amount.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceLabel: {
    color: COLORS.white,
    opacity: 0.5,
    fontSize: 15,
  },
  priceAmount: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
  },
});
