import {StyleSheet} from 'react-native';

import {CustomInput, Screen} from '../components';

export const ContactsScreen = () => {
  return (
    <Screen containerStyle={styles.container}>
      <CustomInput value="1 (000) 000-0000" editable={false} />
      <CustomInput value="California, USA" editable={false} />
      <CustomInput value="1234 Elm Street" editable={false} />
      <CustomInput value="000" editable={false} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
});
