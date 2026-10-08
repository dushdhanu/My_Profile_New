import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Avatar Area */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?img=47' }} 
              style={styles.avatarImage} 
            />
            <View style={styles.badgeContainer}>
              <MaterialIcons name="check-circle" size={24} color="#4CAF50" />
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Profile Fields */}
        <View style={styles.fieldsContainer}>
          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Name</Text>
            <Text style={styles.fieldValue}>Dushmanthi</Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.inlineValueContainer}>
              <MaterialIcons name="mail" size={18} color="#666" style={styles.inlineIcon} />
              <Text style={styles.fieldValue}>dushmanthi.d@nsbm.ac.lk</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Points</Text>
            <View style={styles.inlineValueContainer}>
              <MaterialIcons name="star" size={18} color="#FBC02D" style={styles.inlineIcon} />
              <Text style={styles.fieldValue}>{points}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={() => setPoints(prev => prev + 1)}>
        <MaterialIcons name="add" size={28} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerSafeArea: {
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#EEEEEE',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
  fieldsContainer: {
    padding: 24,
  },
  fieldRow: {
    marginBottom: 24,
  },
  fieldLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  fieldValue: {
    fontSize: 16,
    color: '#555555',
  },
  inlineValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineIcon: {
    marginRight: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
