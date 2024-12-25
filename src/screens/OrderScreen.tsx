import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RNQRGenerator from 'rn-qr-generator';
import {useLayoutEffect, useState, useCallback} from 'react';
import FastImage from 'react-native-fast-image';

import {RootStackScreenProps} from '../navigation/types';
import {clearCart, selectCartItems} from '../store/slices/cartSlice';
import {COLORS} from '../constants/colors';

import {CustomHeader, Screen} from '../components';
import {CheckmarkIcon} from '../components/icons/cart';

export const OrderScreen = ({navigation}: RootStackScreenProps<'Order'>) => {
  const [imageUri, setImageUri] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleBackNavigation = useCallback(() => {
    navigation.popToTop();
    dispatch(clearCart());
  }, [dispatch, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: props => (
        <CustomHeader {...props} withBack onBack={handleBackNavigation} />
      ),
    });
    if (!cartItems.length) {
      return;
    }
    RNQRGenerator.generate({
      value: JSON.stringify(cartItems),
      height: 143,
      width: 143,
      correctionLevel: 'H',
    })
      .then(response => setImageUri(response.uri))
      .catch(error => console.error('Cannot create QR code', error));
  }, [navigation, handleBackNavigation, cartItems]);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <CheckmarkIcon />
          <Text style={styles.successMessage}>
            Your order has been successfully placed
          </Text>
        </View>
        {imageUri ? (
          <FastImage source={{uri: imageUri}} style={styles.qrCode} />
        ) : (
          <Text style={styles.loadingText}>Generating QR Code...</Text>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 54,
    marginBottom: 44,
  },
  messageContainer: {
    backgroundColor: COLORS.foreground,
    gap: 18,
    alignItems: 'center',
    paddingVertical: 34,
    paddingHorizontal: 64,
    borderRadius: 18,
  },
  successMessage: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  qrCode: {
    width: 143,
    height: 143,
  },
  loadingText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
