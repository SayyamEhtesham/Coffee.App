import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Beverages');

  const products = [
    {
      id: '1',
      name: 'Sweet Lemon Indonesian Tea',
      description: 'Tea, Lemon',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffee.jpg'),
      category: 'Beverages'
    },
    {
      id: '2',
      name: 'Creamy Mocha Ome Coffee',
      description: 'Coffee',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffee.jpg'),
      category: 'Brewed Coffee'
    },
    {
      id: '3',
      name: 'Arabica Latte Ombe Coffee',
      description: 'Coffee',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffee.jpg'),
      category: 'Blended Coffee'
    },
    {
      id: '4',
      name: 'Original Hot Coffee',
      description: 'Coffee',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffee.jpg'),
      category: 'Brewed Coffee'
    },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('Detail', { product: item })} 
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <View style={styles.productActions}>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color="orange" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const tabs = ['Beverages', 'Brewed Coffee', 'Blended Coffee'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search beverages or foods"
      />

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={activeTab === tab ? styles.activeTab : styles.tab}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products available</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  tab: {
    color: '#888',
    fontSize: 14,
  },
  activeTab: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  productList: {
    padding: 16,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  productActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  buyButton: {
    backgroundColor: 'grey',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
  },
});

export default ProductScreen;
