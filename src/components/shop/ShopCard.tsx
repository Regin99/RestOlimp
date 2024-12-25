import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {addItem} from '../../store/slices/cartSlice';
import {ShopItemType} from '../../types/data';

import {COLORS} from '../../constants/colors';
import {CartIconSmall} from '../icons/shop';

type ShopCardProps = ShopItemType;

export const ShopCard = ({id, image, price, title}: ShopCardProps) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.cardContainer}>
      <FastImage
        source={{uri: image}}
        style={styles.cardImage}
        resizeMode={'cover'}
      />
      <View style={styles.cardContent}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => dispatch(addItem({id, price}))}>
          <CartIconSmall />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  cardImage: {
    height: 154,
    width: '100%',
    borderRadius: 12,
  },
  cardContent: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    flex: 1,
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.white,
    marginTop: 6,
  },
  title: {
    fontSize: 13,
    color: COLORS.white,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    borderRadius: 64,
    backgroundColor: COLORS.white,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.black,
  },
});
