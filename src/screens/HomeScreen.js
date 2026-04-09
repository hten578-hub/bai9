import React, { useState } from 'react';
import {
  View, Text, ScrollView, TextInput, TouchableOpacity,
  FlatList, StyleSheet, Alert,
} from 'react-native';
import SectionHeader from '../components/SectionHeader';

const CATEGORIES = [
  { id: '1', name: 'Pizza', emoji: '🍕' },
  { id: '2', name: 'Burgers', emoji: '🍔' },
  { id: '3', name: 'Steak', emoji: '🥩' },
  { id: '4', name: 'Sushi', emoji: '🍣' },
];

const POPULAR = [
  { id: '1', name: 'Food 1', origin: 'By Viet Nam', price: '1$', emoji: '🥗' },
  { id: '2', name: 'Food 2', origin: 'By Japan', price: '3$', emoji: '🥙' },
  { id: '3', name: 'Food 3', origin: 'By Korea', price: '2$', emoji: '🍜' },
  { id: '4', name: 'Food 4', origin: 'By Italy', price: '5$', emoji: '🍝' },
];

const SALE = [
  { id: '1', name: 'Sale Food 1', discount: '10% OFF', price: '2$', emoji: '🥘' },
  { id: '2', name: 'Sale Food 2', discount: '20% OFF', price: '4$', emoji: '🍲' },
  { id: '3', name: 'Sale Food 3', discount: '15% OFF', price: '3$', emoji: '🫕' },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Explorer</Text>

      {/* Search bar */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>📍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Top Categories */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <SectionHeader title="Top Categories" />
          <TouchableOpacity>
            <Text style={styles.filter}>🔽 Filter</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard} onPress={() => Alert.alert(item.name)}>
              <Text style={styles.categoryEmoji}>{item.emoji}</Text>
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Popular Items */}
      <View style={styles.section}>
        <SectionHeader title="Popular Items" onViewAll={() => Alert.alert('View all popular')} />
        <FlatList
          horizontal
          data={POPULAR}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.foodCard} onPress={() => Alert.alert(item.name)}>
              <Text style={styles.foodEmoji}>{item.emoji}</Text>
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodOrigin}>{item.origin}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Sale-off Items */}
      <View style={styles.section}>
        <SectionHeader title="Sale-off Items" onViewAll={() => Alert.alert('View all sale')} />
        <FlatList
          horizontal
          data={SALE}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.saleCard} onPress={() => Alert.alert(item.name)}>
              <Text style={styles.foodEmoji}>{item.emoji}</Text>
              <View style={styles.saleBadge}>
                <Text style={styles.saleBadgeText}>{item.discount}</Text>
              </View>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16 },
  header: { fontSize: 20, fontWeight: 'bold', color: '#222', marginTop: 16, marginBottom: 12 },
  searchBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 12,
    paddingVertical: 10, marginBottom: 20, elevation: 2,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333', marginHorizontal: 8 },
  searchIcon: { fontSize: 18 },
  section: { marginBottom: 24 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  filter: { fontSize: 13, color: '#f5a623' },
  categoryCard: {
    backgroundColor: '#fff', borderRadius: 10, padding: 12,
    alignItems: 'center', marginRight: 12, width: 80, elevation: 2,
  },
  categoryEmoji: { fontSize: 32, marginBottom: 6 },
  categoryName: { fontSize: 12, color: '#333', fontWeight: '600' },
  foodCard: {
    backgroundColor: '#fff', borderRadius: 10, padding: 12,
    marginRight: 12, width: 140, elevation: 2,
  },
  foodEmoji: { fontSize: 48, textAlign: 'center', marginBottom: 8 },
  foodInfo: {},
  foodName: { fontSize: 14, fontWeight: '600', color: '#222' },
  foodOrigin: { fontSize: 12, color: '#888', marginTop: 2 },
  foodPrice: { fontSize: 14, color: '#f5a623', fontWeight: 'bold', marginTop: 4 },
  saleCard: {
    backgroundColor: '#fff', borderRadius: 10, padding: 12,
    marginRight: 12, width: 140, elevation: 2, position: 'relative',
  },
  saleBadge: {
    position: 'absolute', top: 8, right: 8,
    backgroundColor: '#e74c3c', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2,
  },
  saleBadgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
});
