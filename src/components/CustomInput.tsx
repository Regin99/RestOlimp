import {StyleSheet, Text, TextInput, View} from 'react-native';
import {FieldError} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {COLORS} from '../constants/colors';

type CustomInputProps = {
  error?: FieldError;
} & TextInputProps;

export const CustomInput = ({error, style, ...props}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#ffffff80"
        {...props}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 17,
    color: COLORS.white,
    backgroundColor: COLORS.foreground,
    fontWeight: '500',
  },
  errorText: {
    color: COLORS.secondary,
  },
});
