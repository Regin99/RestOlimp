import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/colors';

import {Screen} from '../components';
import {CheckmarkIcon} from '../components/icons/cart';

export const ReservationSuccessfullScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <CheckmarkIcon />
          <Text style={styles.successMessage}>
            Your reservation has been successfully placed
          </Text>
        </View>
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
});
