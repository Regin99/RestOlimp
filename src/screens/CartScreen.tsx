import {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {SHOP_ITEMS} from '../mocks/data';
import {selectCartItems, selectTotalPrice} from '../store/slices/cartSlice';

import {Screen} from '../components';
import {
  CartCard,
  CheckoutButton,
  EmptyCart,
  PriceRow,
} from '../components/cart';
import {FlashList} from '@shopify/flash-list';

export const CartScreen = () => {
  const cartData = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const filteredData = useMemo(() => {
    return SHOP_ITEMS.filter(item =>
      cartData.some(cartItem => cartItem.id === item.id),
    ).map(item => {
      const cartItem = cartData.find(itemInCart => itemInCart.id === item.id);
      return {
        ...item,
        quantity: cartItem?.quantity || 0,
      };
    });
  }, [cartData]);

  const renderItem = useCallback(
    ({item}: {item: (typeof filteredData)[0]}) => (
      <View style={styles.cardWrapper}>
        <CartCard
          image={item.image}
          title={item.title}
          price={item.price}
          id={item.id}
        />
      </View>
    ),
    [],
  );

  return (
    <Screen containerStyle={styles.screenContainer}>
      <FlashList
        data={filteredData}
        estimatedItemSize={158}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        numColumns={1}
        ListEmptyComponent={EmptyCart}
        keyExtractor={item => item.title}
      />

      {!!filteredData.length && (
        <View style={styles.totalContainer}>
          <PriceRow label="Subtotal" amount={totalPrice} />
          <PriceRow label="Total" amount={0} />
          <CheckoutButton totalPrice={totalPrice} />
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingBottom: 24,
    paddingHorizontal: 0,
  },

  totalContainer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 10,
    marginTop: 12,
  },
  cardWrapper: {
    marginVertical: 3,
  },
});
