import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Settings, Bell, Shield, UserCircle, LogOut, HelpCircle, MessageSquare, FileText } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure this is imported

const SettingsItem = ({ icon: Icon, label, onPress, isDestructive = false }: { icon: React.ElementType, label: string, onPress?: () => void, isDestructive?: boolean }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <Icon size={24} color={isDestructive ? '#FF3B30' : '#007AFF'} style={styles.itemIcon} />
    <Text style={[styles.itemLabel, isDestructive && styles.destructiveText]}>{label}</Text>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  return (
    <LinearGradient
      colors={['#F2F2F7', '#E5E5EA']} // Light gray gradient for settings
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Settings size={32} color="#333" />
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <SettingsItem icon={UserCircle} label="Profile" onPress={() => console.log('Profile tapped')} />
            <SettingsItem icon={Bell} label="Notifications" onPress={() => console.log('Notifications tapped')} />
            <SettingsItem icon={Shield} label="Privacy & Security" onPress={() => console.log('Privacy tapped')} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>
            <SettingsItem icon={HelpCircle} label="Help Center" onPress={() => console.log('Help tapped')} />
            <SettingsItem icon={MessageSquare} label="Contact Us" onPress={() => console.log('Contact tapped')} />
            <SettingsItem icon={FileText} label="Terms of Service" onPress={() => console.log('Terms tapped')} />
          </View>
          
          <View style={[styles.section, styles.lastSection]}>
             <SettingsItem icon={LogOut} label="Log Out" onPress={() => console.log('Log Out tapped')} isDestructive />
          </View>
        </ScrollView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 10, // Adjust for status bar
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D6', // Light separator line
    backgroundColor: 'rgba(255,255,255,0.8)', // Slight white tint for header
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginLeft: 12,
    color: '#1C1C1E', // Dark text for header
  },
  scrollContent: {
    paddingVertical: 20,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 16,
    overflow: 'hidden', // To clip items with border radius
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  lastSection: {
    marginBottom: Platform.OS === 'ios' ? 90 + 20 : 70 + 20, // Ensure content doesn't hide behind tab bar
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: '#6D6D72', // Medium gray for section titles
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF', // White background for items
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA', // Lighter separator for items
  },
  itemIcon: {
    marginRight: 16,
  },
  itemLabel: {
    fontSize: 17,
    fontFamily: 'Inter_400Regular',
    color: '#000000', // Black text for items
  },
  destructiveText: {
    color: '#FF3B30', // iOS destructive red
  },
});
