import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Rewards</Text>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s' }} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>William Smith</Text>
        <Text style={styles.profileLocation}>London, England</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Ionicons name="call" size={24} color="#28a745" />
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Mobile Phone</Text>
            <Text style={styles.infoValue}>+12 345 678 92</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail" size={24} color="#28a745" />
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Email Address</Text>
            <Text style={styles.infoValue}>example@gmail.com</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location" size={24} color="#28a745" />
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>Franklin Avenue, Corner St. London, 24125151</Text>
          </View>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Most Ordered</Text>
      <View style={styles.mostOrderedSection}>
        <TouchableOpacity style={styles.itemCard}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s' }} 
            style={styles.itemImage}
          />
          <Text style={styles.itemName}>Creamy Latte Coffee</Text>
          <Text style={styles.itemCategory}>Beverages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemCard}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s' }} 
            style={styles.itemImage}
          />
          <Text style={styles.itemName}>Ombe Ice Coffee Latte</Text>
          <Text style={styles.itemCategory}>Beverages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  profileName: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  profileLocation: { fontSize: 14, color: '#888' },
  infoSection: { marginBottom: 20 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  infoText: { marginLeft: 10 },
  infoLabel: { fontSize: 14, color: '#888' },
  infoValue: { fontSize: 16, color: '#000' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  mostOrderedSection: { flexDirection: 'row', justifyContent: 'space-between' },
  itemCard: { width: '48%', backgroundColor: '#f0f0f0', padding: 10, borderRadius: 8, alignItems: 'center' },
  itemImage: { width: 50, height: 50, marginBottom: 10 },
  itemName: { fontSize: 14, fontWeight: 'bold', color: '#000', textAlign: 'center' },
  itemCategory: { fontSize: 12, color: '#888', textAlign: 'center' },
});

export default ProfileScreen;
