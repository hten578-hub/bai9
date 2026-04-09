/**
 * Profile screen cho Cách 2 - đọc thông tin user từ AsyncStorage
 */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@logged_in_user';

const DEFAULT_USER = {
  name: 'Hung Nguyen',
  role: 'Mobile developer',
  bio: 'I have above 5 years of experience in native mobile apps development, now i am learning React Native',
};

export default function ProfileScreen2({ onLogout }) {
  const [user, setUser] = useState(DEFAULT_USER);

  useEffect(() => {
    AsyncStorage.getItem(USER_KEY).then((val) => {
      if (val) {
        const data = JSON.parse(val);
        if (data.email) setUser((prev) => ({ ...prev, email: data.email }));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerBg}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <TouchableOpacity style={styles.btnSignOut} onPress={onLogout}>
          <Text style={styles.btnSignOutText}>Sign Out</Text>
        </TouchableOpacity>
        <Text style={styles.note}>💾 Đăng nhập lưu bằng AsyncStorage</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  headerBg: {
    backgroundColor: '#4fc3f7', height: 160,
    justifyContent: 'flex-end', alignItems: 'center',
  },
  avatarCircle: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: '#fff', marginBottom: -45, elevation: 4,
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
    paddingVertical: 10, paddingHorizontal: 32, marginBottom: 12,
  },
  btnSignOutText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  note: { fontSize: 12, color: '#999' },
});
