import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRef, useState} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FieldError} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {checkBonus, resetBonuses, selectBonuses} from '../store/slices';
import {COLORS} from '../constants/colors';

import {CustomInput, Screen} from '../components';
import {
  CheckmarkBonusIcon,
  GiftsIcon,
  SingleGiftIcon,
} from '../components/icons/bonuses';

export const BonusScreen = () => {
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const bonuses = useSelector(selectBonuses);

  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const handleConfirm = () => {
    if (code === '1234') {
      dispatch(checkBonus());
      bottomSheetModalRef.current?.close();
    }
    if (code === '0000') {
      dispatch(resetBonuses());
      bottomSheetModalRef.current?.close();
    }
    setError('Incorrect code');
  };

  const handleOpenBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setError('');
    setCode('');
    bottomSheetModalRef.current?.close();
    setIsBottomSheetVisible(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Screen>
        <View style={styles.iconContainer}>
          <SingleGiftIcon />
        </View>

        <FlatList
          data={bonuses}
          numColumns={3}
          scrollEnabled={false}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={handleOpenBottomSheet}
              style={styles.bonusItem}>
              {bonuses.length === index + 1 && <GiftsIcon />}
              {item.completed && bonuses.length !== index + 1 && (
                <CheckmarkBonusIcon />
              )}
            </TouchableOpacity>
          )}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                When ordering five dishes, 6 as a gift
              </Text>
              <Text style={styles.footerText}>
                The validity period is unlimited
              </Text>
            </View>
          )}
        />
        <BottomSheet
          ref={bottomSheetModalRef}
          index={isBottomSheetVisible ? 0 : -1}
          keyboardBehavior="fillParent"
          backgroundStyle={styles.bottomSheetBackground}
          onClose={handleCloseBottomSheet}
          handleStyle={styles.bottomSheetHandle}>
          <BottomSheetView
            style={[styles.bottomSheetContent, {paddingBottom: bottom * 2}]}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Enter admin code</Text>
              <CustomInput
                placeholder="Code"
                value={code}
                onChangeText={setCode}
                error={{message: error} as FieldError}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleCloseBottomSheet}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirm}
                style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </Screen>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
  },
  columnWrapper: {
    gap: 6,
  },
  contentContainer: {
    gap: 6,
  },
  bonusItem: {
    backgroundColor: COLORS.foreground,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  footer: {
    marginTop: 16,
    gap: 8,
  },
  footerText: {
    color: COLORS.secondary,
    fontSize: 14,
  },
  bottomSheetBackground: {
    backgroundColor: COLORS.background,
  },
  bottomSheetHandle: {
    backgroundColor: COLORS.foreground,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomSheetContent: {
    minHeight: 200,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    color: COLORS.secondary,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 4,
  },
  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    borderRadius: 10,
    flex: 1,
    gap: 4,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
  },
});
