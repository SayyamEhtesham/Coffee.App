import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const DeliveryAddressScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState(null); 
  const navigation = useNavigation(); // Access the navigation prop

  const addresses = [
    {
      id: '1',
      title: 'Home Address',
      description: '123 Main Street, Anytown, USA 12345',
      icon: 'home',
    },
    {
      id: '2',
      title: 'Office Address',
      description: '456 Elm Avenue, Smallville, CA 98765',
      icon: 'building',
    },
    {
      id: '3',
      title: 'Home Address',
      description: '789 Maple Lane, Suburbia, NY 54321',
      icon: 'home',
    },
    {
      id: '4',
      title: 'Shop Address',
      description: '654 Pine Road, Countryside, FL 34567',
      icon: 'store',
    },
  ];

  const renderAddressItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.addressItem,
        selectedAddress === item.title ? styles.selectedItem : null,
      ]}
      onPress={() => setSelectedAddress(item.title)}
    >
      <View style={styles.iconWrapper}>
        <Icon name={item.icon} size={20} color="#00A86B" />
      </View>
      <View style={styles.addressDetails}>
        <Text style={styles.addressTitle}>{item.title}</Text>
        <Text style={styles.addressDescription}>{item.description}</Text>
      </View>
      <View>
        <Icon
          name={
            selectedAddress === item.title ? 'dot-circle-o' : 'circle-o'
          }
          size={20}
          color="#00A86B"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Address</Text>
      </View>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={renderAddressItem}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addAddressButton}>
        <View style={styles.addAddressWrapper}>
          <Icon name="plus" size={20} color="#00A86B" />
          <Text style={styles.addAddressText}>Add Address</Text>
        </View>
        <Icon name="angle-right" size={20} color="#00A86B" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    flex: 1, 
    textAlign: 'center', 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
    Vertical: 8,
  },
  addressItem: {
   flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 13,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedItem: { // Corrected property name
    borderColor: '#00A86B',
  },
  iconWrapper: {
    marginRight: 16,
  },
  addressDetails: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addressDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center', // Fixed typo here
    justifyContent: 'space-between',
    margin: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#00A86B',
    borderRadius: 8,
  },
  addAddressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addAddressText: {
    fontSize: 16,
    color: '#00A86B',
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default DeliveryAddressScreen;