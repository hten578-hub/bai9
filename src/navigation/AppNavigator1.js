/**
 * CÁCH 1: Stack Navigation + Bottom Tabs + Context API
 * - Trạng thái đăng nhập lưu trong Context (mất khi tắt app)
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { AppProvider, useAppContext } from '../context/AppContext';
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        name="Explorer"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🍽️</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
          headerTitle: 'Account',
        }}
      >
        {() => <ProfileScreen onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function AuthStack({ onLogin }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" options={{ headerShown: false }}>
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

function RootNavigator() {
  const { isLoggedIn, login, logout } = useAppContext();
  return isLoggedIn
    ? <MainTabs onLogout={logout} />
    : <AuthStack onLogin={login} />;
}

export default function AppNavigator1() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
