import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Zap } from 'lucide-react-native'; // Using Zap icon as an example
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#4A90E2', '#50E3C2']} // A nice blue to teal gradient
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Zap size={80} color="#FFFFFF" strokeWidth={1.5} />
          <Text style={styles.title}>BIENVENIDO A TU PROYECTO PERROS!</Text>
          <Text style={styles.subtitle}>Built with Bolt & Expo Router</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold', // Using fontWeight directly as Inter_700Bold will be applied
    fontFamily: 'Inter_700Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#F0F0F0', // Slightly off-white for subtitle
    textAlign: 'center',
    marginTop: 12,
  },
});
