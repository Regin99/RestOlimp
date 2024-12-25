import {FlatList, StyleSheet} from 'react-native';

import {EVENTS} from '../mocks/data';

import {Screen} from '../components';
import {EventCard} from '../components/events/EventCard';

export const EventsScreen = () => {
  return (
    <Screen containerStyle={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        data={EVENTS}
        renderItem={({item}) => <EventCard {...item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  listContent: {
    gap: 24,
    paddingBottom: 16,
  },
});
