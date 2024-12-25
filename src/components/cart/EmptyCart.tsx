import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {COLORS} from '../../constants/colors';
import emptyCart from '../../assets/cart/cart.png';

export const EmptyCart = () => (
  <View style={styles.emptyCartContainer}>
    <View style={styles.emptyCartBox}>
      <FastImage
        source={emptyCart}
        style={styles.emptyCartImage}
        resizeMode="contain"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyCartBox: {
    borderRadius: 18,
    backgroundColor: COLORS.foreground,
    paddingVertical: 34,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  emptyCartImage: {
    width: 223,
    height: 286,
  },
});
