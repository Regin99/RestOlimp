import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {EVENTS} from '../mocks/data';
import {COLORS} from '../constants/colors';
import {RootStackScreenProps} from '../navigation/types';

import {Screen} from '../components';
import {CalendarIcon, ClockIcon} from '../components/icons/events';

export const EventScreen = ({route}: RootStackScreenProps<'Event'>) => {
  const event = EVENTS.find(item => item.id === route.params.id) || EVENTS[0];

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <FastImage
            source={{uri: event.image}}
            style={styles.eventImage}
            resizeMode="cover"
          />
          <Text style={styles.eventTitle}>{event.name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <CalendarIcon />
              <Text style={styles.infoText}>{event.date}</Text>
            </View>
            <View style={styles.infoRow}>
              <ClockIcon />
              <Text style={styles.infoText}>{event.time}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.eventDescription}>{event.description}</Text>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  eventImage: {
    width: '100%',
    height: 225,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.white,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.white,
  },
  eventDescription: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.5,
  },
});
