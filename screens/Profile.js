import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../Components/Footer';

const ProfileScreen = ({ navigation, route }) => {
  const handleEditPress = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rewards</Text>
        <TouchableOpacity onPress={handleEditPress}>
          <Ionicons name="pencil" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>William Smith</Text>
        <Text style={styles.profileLocation}>London, England</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        {[
          { icon: 'call', label: 'Mobile Phone', value: '+12 345 678 92' },
          { icon: 'mail', label: 'Email Address', value: 'example@gmail.com' },
          {
            icon: 'location',
            label: 'Address',
            value: 'Franklin Ave, Corner St. London, 24125151',
          },
        ].map((item, index) => (
          <View style={styles.infoRow} key={index}>
            <Ionicons name={item.icon} size={24} color="#28a745" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Most Ordered Section */}
      <Text style={styles.sectionTitle}>Most Ordered</Text>
      <View style={styles.mostOrderedSection}>
        {[
          {
            name: 'Creamy Latte Coffee',
            category: 'Beverages',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
          },
          {
            name: 'Ombe Ice Coffee Latte',
            category: 'Beverages',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
          },
        ].map((item, index) => (
          <TouchableOpacity style={styles.itemCard} key={index}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Footer navigation={navigation} route={route} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: 80, // Space for Footer
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileLocation: {
    fontSize: 14,
    color: '#888',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },

  // Most Ordered Section
  mostOrderedSection: {
    flexDirection: 'row', // Cards side by side
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemCard: {
    width: '48%', 
    backgroundColor: '#28a745', 
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row', // Image and text side by side
    alignItems: 'center',
  },
  itemImage: {
    width: 50,  // Reduced size
    height: 50, 
    borderRadius: 8,
    marginRight: 8, // Space between image and text
  },
  itemInfo: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 14,  
    fontWeight: 'bold',
    color: '#fff', 
  },
  itemCategory: {
    fontSize: 12,  
    color: '#fff', 
  },
});


export default ProfileScreen;
