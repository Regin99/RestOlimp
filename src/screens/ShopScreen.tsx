import {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {CATEGORIES, SHOP_ITEMS} from '../mocks/data';
import {ShopItemType} from '../types/data';
import {COLORS} from '../constants/colors';
import {selectTotalQuantity} from '../store/slices';

import {CustomHeader, Screen} from '../components';
import {SegmentedControl, ShopCard} from '../components/shop';
import {CartIcon, GiftIcon} from '../components/icons/shop';

export const ShopScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const totalQuantity = useSelector(selectTotalQuantity);

  const getCategoryData = useCallback(() => {
    if (selectedCategory === 'All') {
      return SHOP_ITEMS;
    }
    return SHOP_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const renderItem = useCallback(
    ({item, index}: {item: ShopItemType; index: number}) => {
      const isSingleCard =
        index === getCategoryData().length - 1 && index % 2 === 0;
      return (
        <View style={[styles.cardWrapper, isSingleCard && styles.singleCard]}>
          <ShopCard {...item} />
        </View>
      );
    },
    [getCategoryData],
  );

  const HeaderRight = useCallback(
    () => (
      <View style={styles.headerIconsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Basket')}>
          <CartIcon />
          {!!totalQuantity && (
            <View style={styles.cartBadge}>
              <Text
                style={[
                  styles.cartBadgeText,
                  totalQuantity.toString().length > 2 && styles.smallerText,
                ]}>
                {totalQuantity}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Bonus')}>
          <GiftIcon />
        </TouchableOpacity>
      </View>
    ),
    [totalQuantity, navigation],
  );

  useEffect(() => {
    navigation.setOptions({
      header: (props: NativeStackHeaderProps) => (
        <CustomHeader {...props} headerRight={HeaderRight} />
      ),
    });
  }, [navigation, totalQuantity, HeaderRight]);

  return (
    <Screen containerStyle={styles.screenContainer}>
      <SegmentedControl
        options={['All', ...CATEGORIES]}
        active={selectedCategory}
        setActive={setSelectedCategory}
      />
      <FlatList
        style={styles.flatList}
        data={getCategoryData()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  flatList: {
    marginTop: 16,
  },
  flatListContent: {
    paddingHorizontal: 20,
    gap: 8,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  columnWrapper: {
    gap: 6,
    justifyContent: 'space-between',
  },
  cardWrapper: {
    flex: 1,
  },
  singleCard: {
    flex: 0.492,
  },
  headerIconsContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  iconButton: {
    backgroundColor: COLORS.secondary,
    padding: 7,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.white,
    height: 18,
    width: 18,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    fontSize: 11,
    fontWeight: '800',
  },
  smallerText: {
    fontSize: 9,
  },
});
