import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import ImageSlider from '../components/carousel/ImageSlider';
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(600).springify()} style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi FITNESS FREAK</Text>
            <Text style={styles.title}>FitForge</Text>
          </View>
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={24} color={COLORS.white} />
          </View>
        </Animated.View>

        {/* Today's Challenge Card */}
        <Animated.View entering={FadeInUp.delay(200).duration(600).springify()} style={styles.challengeSection}>
          <View style={[styles.challengeCard, { backgroundColor: COLORS.primary }]}>
            <Text style={styles.challengeLabel}>Today's Challenge</Text>
            <Text style={styles.challengeText}>Do your plan before 9:00 AM</Text>
            <View style={styles.challengeImagePlaceholder}>
              <Ionicons name="walk" size={64} color={COLORS.dark} style={{ opacity: 0.3 }} />
            </View>
          </View>
        </Animated.View>

        {/* Image Slider */}
        <Animated.View entering={FadeInUp.delay(300).duration(600).springify()}>
          <ImageSlider />
        </Animated.View>

        {/* Start Training Button */}
        <Animated.View entering={FadeInUp.delay(400).duration(600).springify()} style={styles.ctaContainer}>
          <TouchableOpacity onPress={() => router.push('/exercises')} activeOpacity={0.8}>
            <LinearGradient
              colors={[COLORS.primary, '#B8E600']}
              style={styles.ctaButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View style={styles.ctaContent}>
                <Ionicons name="barbell" size={28} color={COLORS.dark} />
                <Text style={styles.ctaTitle}>Start Training</Text>
              </View>
              <Text style={styles.ctaSubtitle}>1000+ exercises to choose from</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        {/* Stats Cards */}
        <Animated.View entering={FadeInUp.delay(500).duration(600).springify()} style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: COLORS.secondary }]}>
            <Ionicons name="walk" size={32} color={COLORS.dark} />
            <Text style={styles.statNumber}>1840</Text>
            <Text style={styles.statLabel}>Steps</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: COLORS.accent }]}>
            <Ionicons name="trophy" size={32} color={COLORS.dark} />
            <Text style={styles.statNumber}>45%</Text>
            <Text style={styles.statLabel}>My Goals</Text>
          </View>
        </Animated.View>

        {/* Calories Info */}
        <Animated.View entering={FadeInUp.delay(600).duration(600).springify()} style={styles.caloriesSection}>
          <View style={styles.caloriesCard}>
            <View style={styles.calorieRow}>
              <View style={styles.calorieDot} />
              <Text style={styles.calorieText}>1200 Kcal Target</Text>
            </View>
            <View style={styles.calorieRow}>
              <View style={[styles.calorieDot, { backgroundColor: COLORS.primary }]} />
              <Text style={styles.calorieText}>328 Kcal Burned</Text>
            </View>
            <View style={styles.calorieRow}>
              <View style={[styles.calorieDot, { backgroundColor: COLORS.secondary }]} />
              <Text style={styles.calorieText}>872 Kcal Remaining</Text>
            </View>
          </View>
        </Animated.View>

        {/* Bottom Navigation */}
        <View style={styles.navPlaceholder}>
          <View style={styles.navItem}>
            <Ionicons name="home" size={28} color={COLORS.gray} />
          </View>
          <View style={styles.navItem}>
            <Ionicons name="bar-chart" size={28} color={COLORS.gray} />
          </View>
          <View style={[styles.navItem, { backgroundColor: COLORS.secondary }]}>
            <Ionicons name="barbell" size={28} color={COLORS.dark} />
          </View>
          <View style={styles.navItem}>
            <Ionicons name="person" size={28} color={COLORS.gray} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  },
  header: {
    paddingHorizontal: SIZES.padding * 1.5,
    paddingTop: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24
  },
  greeting: {
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1
  },
  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.cardBg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  challengeSection: {
    paddingHorizontal: SIZES.padding * 1.5,
    marginBottom: 24
  },
  challengeCard: {
    borderRadius: SIZES.largeRadius,
    padding: 20,
    position: 'relative',
    overflow: 'hidden'
  },
  challengeLabel: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4
  },
  challengeText: {
    color: COLORS.dark,
    fontSize: 13,
    fontWeight: '600'
  },
  challengeImagePlaceholder: {
    position: 'absolute',
    right: 20,
    bottom: 10
  },
  ctaContainer: {
    paddingHorizontal: SIZES.padding * 1.5,
    marginTop: 24,
    marginBottom: 24
  },
  ctaButton: {
    borderRadius: SIZES.largeRadius,
    padding: 24,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10
  },
  ctaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  ctaTitle: {
    color: COLORS.dark,
    fontSize: 24,
    fontWeight: '900'
  },
  ctaSubtitle: {
    color: COLORS.dark,
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
    opacity: 0.7
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding * 1.5,
    gap: 16
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: SIZES.radius,
    alignItems: 'center'
  },
  statNumber: {
    color: COLORS.dark,
    fontSize: 28,
    fontWeight: '900',
    marginTop: 8,
    marginBottom: 4
  },
  statLabel: {
    color: COLORS.dark,
    fontSize: 12,
    fontWeight: '700'
  },
  caloriesSection: {
    paddingHorizontal: SIZES.padding * 1.5,
    marginTop: 24,
    marginBottom: 100
  },
  caloriesCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.radius,
    padding: 20
  },
  calorieRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  calorieDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.white,
    marginRight: 12
  },
  calorieText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600'
  },
  navPlaceholder: {
    position: 'absolute',
    bottom: 20,
    left: SIZES.padding * 1.5,
    right: SIZES.padding * 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.largeRadius,
    paddingVertical: 16
  },
  navItem: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
