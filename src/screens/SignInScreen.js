import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

export default function SignInScreen({ navigation, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu');
      return;
    }
    onLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        label="Email ID"
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <CustomTextInput
        label="Password"
        placeholder="Enter your password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSignIn} onPress={handleSignIn}>
        <Text style={styles.btnSignInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <IconButton
          label="Google"
          icon="G"
          backgroundColor="#fff"
          textColor="#333"
          onPress={() => Alert.alert('Google login')}
        />
        <IconButton
          label="Facebook"
          icon="f"
          backgroundColor="#3b5998"
          textColor="#fff"
          onPress={() => Alert.alert('Facebook login')}
        />
      </View>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Not yet a member? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 28, color: '#222' },
  forgot: { color: '#f5a623', textAlign: 'right', marginBottom: 20, fontSize: 13 },
  btnSignIn: {
    backgroundColor: '#f5a623',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  btnSignInText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  orText: { textAlign: 'center', color: '#888', marginBottom: 16, fontSize: 13 },
  socialRow: { flexDirection: 'row', marginBottom: 24 },
  signupRow: { flexDirection: 'row', justifyContent: 'center' },
  signupText: { color: '#888', fontSize: 13 },
  signupLink: { color: '#f5a623', fontSize: 13, fontWeight: 'bold' },
});
