/**
 * CÁCH 2: Stack Navigation + Bottom Tabs + AsyncStorage
 * - Trạng thái đăng nhập lưu vào AsyncStorage (giữ khi tắt app)
 */
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';

import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen2 from '../screens/ProfileScreen2';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const USER_KEY = '@logged_in_user';

function MainTabs({ onLogout }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f5a623',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Explorer2"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🍽️</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account2"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
          headerTitle: 'Account',
        }}
      >
        {() => <ProfileScreen2 onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function AuthStack({ onLogin }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn2" options={{ headerShown: false }}>
        {(props) => <SignInScreen {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Forgot Password' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Kiểm tra AsyncStorage khi khởi động
  useEffect(() => {
    AsyncStorage.getItem(USER_KEY).then((val) => {
      setIsLoggedIn(!!val);
      setLoading(false);
    });
  }, []);

  const login = async (email) => {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify({ email }));
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(USER_KEY);
    setIsLoggedIn(false);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#f5a623" />
      </View>
    );
  }

  return isLoggedIn
    ? <MainTabs onLogout={logout} />
    : <AuthStack onLogin={login} />;
}
