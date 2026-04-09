import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function ProfileScreen({ onLogout }) {
  const { user } = useAppContext();

  return (
    <View style={styles.container}>
      {/* Header xanh với avatar */}
      <View style={styles.headerBg}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>
            {user.name ? user.name.charAt(0).toUpperCase() : 'H'}
          </Text>
        </View>
      </View>

      {/* Thông tin */}
      <View style={styles.infoBox}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        <TouchableOpacity style={styles.btnSignOut} onPress={onLogout}>
          <Text style={styles.btnSignOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  headerBg: {
    backgroundColor: '#4fc3f7',
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 0,
  },
  avatarCircle: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: '#fff',
    marginBottom: -45,
    elevation: 4,
  },
  avatarText: { fontSize: 36, fontWeight: 'bold', color: '#4fc3f7' },
  infoBox: {
    backgroundColor: '#fff', marginTop: 50, marginHorizontal: 16,
    borderRadius: 12, padding: 24, alignItems: 'center', elevation: 3,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#222', marginBottom: 4 },
  role: { fontSize: 14, color: '#f5a623', marginBottom: 12 },
  bio: { fontSize: 13, color: '#666', textAlign: 'center', lineHeight: 20, marginBottom: 20 },
  btnSignOut: {
    backgroundColor: '#f5a623', borderRadius: 8,
    paddingVertical: 10, paddingHorizontal: 32,
  },
  btnSignOutText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
});
