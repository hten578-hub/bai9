import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import AppNavigator1 from './src/navigation/AppNavigator1';
import AppNavigator2 from './src/navigation/AppNavigator2';

const Root = createStackNavigator();

function SelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn chế độ</Text>
      <Text style={styles.sub}>React Native Navigation</Text>

      <TouchableOpacity style={[styles.card, { backgroundColor: '#f5a623' }]} onPress={() => navigation.navigate('Mode1')}>
        <Text style={styles.cardIcon}>⚡</Text>
        <Text style={styles.cardTitle}>Cách 1</Text>
        <Text style={styles.cardDesc}>Stack + Bottom Tabs + Context API</Text>
        <Text style={styles.cardNote}>Đăng nhập mất khi tắt app</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, { backgroundColor: '#4fc3f7' }]} onPress={() => navigation.navigate('Mode2')}>
        <Text style={styles.cardIcon}>💾</Text>
        <Text style={styles.cardTitle}>Cách 2</Text>
        <Text style={styles.cardDesc}>Stack + Bottom Tabs + AsyncStorage</Text>
        <Text style={styles.cardNote}>Đăng nhập giữ khi tắt app</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="Select" component={SelectScreen} />
        <Root.Screen name="Mode1" component={AppNavigator1} />
        <Root.Screen name="Mode2" component={AppNavigator2} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center', padding: 24 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#222', marginBottom: 6 },
  sub: { fontSize: 14, textAlign: 'center', color: '#888', marginBottom: 36 },
  card: {
    borderRadius: 16, padding: 24, marginBottom: 20,
    elevation: 4, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6,
  },
  cardIcon: { fontSize: 32, marginBottom: 8 },
  cardTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: 'rgba(255,255,255,0.9)', marginBottom: 6 },
  cardNote: { fontSize: 12, color: 'rgba(255,255,255,0.7)' },
});
