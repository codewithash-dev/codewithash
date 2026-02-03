import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { bodyParts } from '../../constants/bodyParts';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { COLORS, SIZES } from '../../constants/theme';

interface BodyPartsProps {
  onSelectBodyPart: (bodyPart: string) => void;
}

export default function BodyParts({ onSelectBodyPart }: BodyPartsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your plan</Text>
      <View style={styles.tabsContainer}>
        <View style={[styles.tab, { backgroundColor: COLORS.white }]}>
          <Text style={[styles.tabText, { color: COLORS.dark }]}>All workouts</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Lower body</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Upper body</Text>
        </View>
      </View>
      <FlatList
        data={bodyParts}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 100).springify()}>
            <TouchableOpacity
              onPress={() => onSelectBodyPart(item.name)}
              style={[styles.item, { backgroundColor: index % 2 === 0 ? COLORS.secondary : COLORS.primary }]}
              activeOpacity={0.8}
            >
              <View style={styles.itemContent}>
                <View>
                  <Text style={[styles.itemTitle, { color: index % 2 === 0 ? COLORS.dark : COLORS.dark }]}>
                    {item.name} workout
                  </Text>
                  <Text style={[styles.itemSubtitle, { color: index % 2 === 0 ? COLORS.dark : COLORS.dark }]}>
                    30 mins
                  </Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Cardio</Text>
                  </View>
                  <Text style={[styles.exercises, { color: index % 2 === 0 ? COLORS.dark : COLORS.dark }]}>
                    5 exercises
                  </Text>
                </View>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    paddingHorizontal: SIZES.padding
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    marginBottom: 20,
    gap: 12
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'transparent'
  },
  tabText: {
    color: COLORS.gray,
    fontSize: 13,
    fontWeight: '700'
  },
  listContent: {
    paddingHorizontal: SIZES.padding,
    gap: 16
  },
  item: {
    width: 280,
    borderRadius: SIZES.largeRadius,
    padding: 20,
    minHeight: 180
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'capitalize',
    marginBottom: 4
  },
  itemSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8
  },
  badge: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '700'
  },
  exercises: {
    fontSize: 12,
    fontWeight: '600'
  },
  image: {
    width: 80,
    height: 80,
    tintColor: COLORS.dark,
    opacity: 0.3
  }
});
