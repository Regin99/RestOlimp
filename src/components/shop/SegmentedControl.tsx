import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../constants/colors';

type SegmentedControl = {
  active: string;
  setActive: (active: string) => void;
  options: string[];
};

export const SegmentedControl = ({
  active,
  setActive,
  options,
}: SegmentedControl) => (
  <View style={styles.controlContainer}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {options.map((item, index) => (
        <View style={styles.optionWrapper} key={index}>
          <TouchableOpacity
            style={[styles.option, active === item && styles.activeOption]}
            onPress={() => setActive(item)}>
            <Text
              style={[styles.optionText, active === item && styles.activeText]}>
              {item}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    gap: 6,
    paddingHorizontal: 20,
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 48,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 92,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  activeOption: {
    backgroundColor: COLORS.white,
  },
  optionText: {
    fontSize: 14,
    color: COLORS.white,
  },
  activeText: {
    fontSize: 14,
    color: COLORS.black,
  },
});
