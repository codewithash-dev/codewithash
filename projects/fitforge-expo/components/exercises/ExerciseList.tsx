import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import ExerciseCard from './ExerciseCard';
import { Exercise } from '../../types/exercise';
import { COLORS } from '../../constants/theme';

interface ExerciseListProps {
  exercises: Exercise[];
  loading: boolean;
}

export default function ExerciseList({ exercises, loading }: ExerciseListProps) {
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (exercises.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>Select a body part to see exercises</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={exercises}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <ExerciseCard exercise={item} index={index} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  emptyText: {
    color: COLORS.white,
    fontSize: 18
  },
  listContent: {
    paddingBottom: 100
  }
});
