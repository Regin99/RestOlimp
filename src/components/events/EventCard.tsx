import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {EventType} from '../../types/data';
import {COLORS} from '../../constants/colors';

import {CalendarIcon, ClockIcon} from '../icons/events';

export const EventCard = ({name, date, time, id, image}: EventType) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Event', {id});
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <FastImage
        source={{uri: image}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.infoWrapper}>
        <View style={styles.infoContainer}>
          <CalendarIcon />
          <Text style={styles.infoText}>{date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <ClockIcon />
          <Text style={styles.infoText}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    gap: 6,
  },
  image: {
    width: '100%',
    height: 176,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.white,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.white,
  },
});
