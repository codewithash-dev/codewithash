import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import BodyParts from '../components/exercises/BodyParts';
import ExerciseList from '../components/exercises/ExerciseList';
import { useExercises } from '../hooks/useExercises';
import { COLORS, SIZES } from '../constants/theme';

export default function ExercisesScreen() {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('');
  const { exercises, loading } = useExercises(selectedBodyPart);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <LinearGradient
        colors={['#7C3AED', '#EC4899', '#F97316']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      />
      
      <Animated.View entering={FadeInDown.duration(600).springify()} style={styles.header}>
        <View>
          <Text style={styles.title}>Exercises</Text>
          {selectedBodyPart && (
            <LinearGradient
              colors={['#7C3AED', '#EC4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.subtitleContainer}
            >
              <Text style={styles.subtitle}>
                {selectedBodyPart} • {exercises.length} exercises
              </Text>
            </LinearGradient>
          )}
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
      </Animated.View>

      <BodyParts onSelectBodyPart={setSelectedBodyPart} />

      <View style={styles.listContainer}>
        <ExerciseList exercises={exercises} loading={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darker
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    opacity: 0.15
  },
  header: {
    paddingHorizontal: SIZES.padding * 1.5,
    paddingTop: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: '900'
  },
  subtitleContainer: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start'
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize'
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  backIcon: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold'
  },
  listContainer: {
    flex: 1,
    marginTop: 24
  }
});
