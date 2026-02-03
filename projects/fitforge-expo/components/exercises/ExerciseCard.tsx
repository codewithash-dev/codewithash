import { View, Text, Image, StyleSheet } from 'react-native';
import { Exercise } from '../../types/exercise';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../../constants/theme';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export default function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  return (
    <Animated.View
      entering={FadeInUp.delay(index * 100).springify()}
      style={styles.container}
    >
      <View style={[styles.card, { backgroundColor: index % 2 === 0 ? COLORS.secondary : COLORS.primary }]}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: COLORS.dark }]}>{exercise.name}</Text>
          <View style={styles.tagsContainer}>
            <View style={[styles.tag, { backgroundColor: COLORS.dark }]}>
              <Text style={styles.tagText}>{exercise.bodyPart.toUpperCase()}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: 'rgba(0,0,0,0.3)' }]}>
              <Text style={styles.tagText}>{exercise.target.toUpperCase()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: exercise.gifUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: SIZES.padding
  },
  card: {
    borderRadius: SIZES.largeRadius,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 160
  },
  content: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textTransform: 'capitalize',
    marginBottom: 12,
    maxWidth: '70%'
  },
  tagsContainer: {
    flexDirection: 'column',
    gap: 8
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start'
  },
  tagText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
