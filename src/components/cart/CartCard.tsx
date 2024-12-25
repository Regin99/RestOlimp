import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../../constants/colors';
import {ShopItemType} from '../../types/data';
import {
  addItem,
  removeFullItem,
  removeItem,
  selectItemById,
} from '../../store/slices';

import {MinusIcon, PlusIcon, TrashIcon} from '../icons/cart';

type CartCardProps = Pick<ShopItemType, 'id' | 'price'> & Partial<ShopItemType>;

export const CartCard = ({image, price, title, id}: CartCardProps) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectItemById(id));

  const renderRightActions = () => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => dispatch(removeFullItem({id, price}))}>
      <TrashIcon />
    </TouchableOpacity>
  );

  const handleAdd = () => {
    dispatch(addItem({id, price}));
  };

  const handleRemove = () => {
    dispatch(removeItem({id, price}));
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      containerStyle={styles.swipableContainer}>
      <View style={styles.cardContainer}>
        <FastImage
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.actionContainer}>
            <View style={styles.addOddContainer}>
              <TouchableOpacity
                onPress={handleRemove}
                style={styles.iconButton}>
                <MinusIcon />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{cartItem?.quantity}</Text>
              <TouchableOpacity onPress={handleAdd} style={styles.iconButton}>
                <PlusIcon />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buyButton} onPress={handleAdd}>
              <Text style={styles.buyText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  swipableContainer: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.foreground,
    borderRadius: 12,
    gap: 18,
  },
  image: {
    width: 108,
    height: 108,
    borderRadius: 2,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.white,
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.white,
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addOddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    padding: 4,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.white,
  },
  buyButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  buyText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.black,
  },
  deleteButton: {
    marginRight: 20,
    borderRadius: 24,
    alignSelf: 'center',
  },
});
