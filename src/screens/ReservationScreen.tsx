import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {addDays, format} from 'date-fns';
import {FlashList} from '@shopify/flash-list';
import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';

import {COLORS} from '../constants/colors';

import {CustomHeader, CustomInput, Screen} from '../components';
import {
  CheckedReservationIcon,
  UncheckedReservationIcon,
} from '../components/icons/reservation';

export const ReservationScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    reset,
    formState: {isValid},
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      date: '',
      time: '',
    },
    mode: 'onChange',
  });

  const times = [
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '14:15',
    '15:00',
    '15:15',
    '15:40',
    '16:00',
    '16:30',
    '16:45',
    '17:30',
  ];

  const generateDates = (length: number) =>
    Array.from({length}, (_, i) => {
      const date = addDays(new Date(), i);
      return {
        key: i.toString(),
        day: format(date, 'd'),
        month: format(date, 'MMM').toUpperCase(),
        fullDate: format(date, 'yyyy-MM-dd'),
      };
    });

  const renderDateItem = ({item}: {item: any}) => (
    <Controller
      control={control}
      name="date"
      rules={{required: true}}
      render={({field: {onChange, value}}) => (
        <TouchableOpacity
          style={[
            styles.dateItem,
            value !== item.fullDate && styles.dateItemInactive,
          ]}
          onPress={() => onChange(item.fullDate)}>
          <Text style={styles.dateDay}>{item.day}</Text>
          <Text style={styles.dateMonth}>{item.month}</Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderTimeItem = ({item}: {item: string}) => (
    <Controller
      control={control}
      name="time"
      rules={{required: true}}
      render={({field: {value, onChange}}) => (
        <TouchableOpacity
          style={[
            styles.timeButton,
            value === item && styles.timeButtonSelected,
          ]}
          onPress={() => onChange(item)}>
          <Text
            style={[
              styles.timeText,
              value === item && styles.timeTextSelected,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props: StackHeaderProps) => (
        <CustomHeader
          {...props}
          headerRight={() => (
            <TouchableOpacity
              disabled={!isValid}
              onPress={() => {
                reset();
                navigation.navigate('ReservationSuccessfull');
              }}>
              {isValid ? (
                <CheckedReservationIcon />
              ) : (
                <UncheckedReservationIcon />
              )}
            </TouchableOpacity>
          )}
        />
      ),
    });
  }, [navigation, isValid, reset]);

  return (
    <Screen>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="name"
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Your name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          rules={{required: true}}
          name="phone"
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Your phone number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>
      <Text style={styles.sectionTitle}>Select date</Text>
      <FlashList
        estimatedItemSize={60}
        data={generateDates(376)}
        renderItem={renderDateItem}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.timesContainer}>
        <FlatList
          data={times}
          renderItem={renderTimeItem}
          keyExtractor={item => item}
          numColumns={3}
          columnWrapperStyle={styles.timeColumnWrapper}
          contentContainerStyle={styles.timeListContent}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    gap: 6,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 16,
  },

  dateItem: {
    marginHorizontal: 21,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  dateItemInactive: {
    opacity: 0.5,
  },
  dateDay: {
    fontSize: 32,
    color: COLORS.white,
  },
  dateMonth: {
    opacity: 0.5,
    fontSize: 16,
    color: COLORS.white,
  },
  timesContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 24,
  },
  timeButton: {
    backgroundColor: COLORS.foreground,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  timeButtonSelected: {
    backgroundColor: COLORS.white,
  },
  timeText: {
    color: COLORS.white,
    fontSize: 19,
  },
  timeTextSelected: {
    color: COLORS.black,
  },
  timeColumnWrapper: {
    justifyContent: 'space-between',
  },
  timeListContent: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
