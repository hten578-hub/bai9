import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function IconButton({ label, icon, backgroundColor, textColor, onPress }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor }]} onPress={onPress}>
      <View style={styles.inner}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={[styles.label, { color: textColor || '#333' }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 4,
  },
  inner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 16, marginRight: 8 },
  label: { fontSize: 14, fontWeight: '600' },
});
