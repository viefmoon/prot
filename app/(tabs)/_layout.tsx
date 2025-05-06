import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Settings } from 'lucide-react-native';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const TAB_ICON_SIZE = 24;
const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 90 : 70;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF', // A modern blue
        tabBarInactiveTintColor: '#8E8E93', // iOS inactive gray
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <BlurView intensity={90} tint="light" style={StyleSheet.absoluteFill} />
        ),
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Home
              size={TAB_ICON_SIZE}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings" // This will correctly look for app/(tabs)/settings.tsx
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Settings
              size={TAB_ICON_SIZE}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0, // Remove top border for a cleaner look with blur
    elevation: 0, // Remove shadow on Android
    height: TAB_BAR_HEIGHT,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Adjust padding for notch
    backgroundColor: 'transparent', // Needed for BlurView to work
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Inter_400Regular',
    marginTop: -5, // Adjust label position
    marginBottom: Platform.OS === 'ios' ? 0 : 5,
  },
});
