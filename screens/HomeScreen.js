import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../Components/Footer';

const featuredBeverages = [
  {
    id: '1',
    title: 'Hot Creamy Cappuccino Latte Ombe',
    price: '$12.6',
    points: '50 Pts',
    rating: '3.8',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Creamy Mocha Ome Coffee',
    price: '$12.6',
    points: '50 Pts',
    rating: '3.8',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Arabica Latte Ombe Coffee',
    price: '$12.6',
    points: '50 Pts',
    rating: '3.8',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    title: 'Original Hot Coffee',
    price: '$12.6',
    points: '50 Pts',
    rating: '3.8',
    image: 'https://via.placeholder.com/150',
  },
];

const FeaturedBeverageCard = ({ item }) => (
  <View style={styles.beverageCard}>
    <Image source={{ uri: item.image }} style={styles.beverageImage} />
    <View style={styles.beverageDetails}>
      <Text style={styles.beverageTitle}>{item.title}</Text>
      <Text style={styles.beveragePrice}>{item.price}</Text>
      <Text style={styles.beveragePoints}>{item.points}</Text>
    </View>
    <View style={styles.beverageRating}>
      <Text style={styles.ratingText}>{item.rating}</Text>
    </View>
  </View>
);

const CategorySection = ({ navigation }) => {
  const categories = [
    { title: 'Beverages', menuCount: 41 },
    { title: 'Foods', menuCount: 37 },
    { title: 'Pizza', menuCount: 28 },
    { title: 'Drink', menuCount: 12 },
  ];

  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Product', { categoryTitle: item.title })} // Navigate to ProductScreen
          >
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.menuCount}>{item.menuCount} Menus</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Good Morning</Text>
          <Text style={styles.headerSubText}>Williams</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('NotificationsScreen')}
          >
            <Icon name="bell" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bars" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Text style={styles.searchPlaceholder}>Search beverages or foods</Text>
        </View>
      </View>

      <CategorySection navigation={navigation} />

      <View style={styles.beveragesContainer}>
        <Text style={styles.sectionTitle}>Featured Beverages</Text>
        <FlatList
          data={featuredBeverages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FeaturedBeverageCard item={item} />}
          contentContainerStyle={styles.beverageList}
          showsVerticalScrollIndicator={false}
          
        />
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: { fontSize: 15, fontWeight: 'bold' },
  headerSubText: { fontSize: 28, fontWeight: 'bold', marginTop: 4 },
  headerIcons: { flexDirection: 'row' },
  iconButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchContainer: { padding: 10 },
  searchInput: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  searchPlaceholder: { fontSize: 16, color: '#aaa' },
  categoriesContainer: { paddingVertical: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 16, marginBottom: 8 },
  categoryList: { paddingLeft: 16 },
  categoryCard: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 8,
  },
  categoryTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  menuCount: { fontSize: 14, color: '#666' },
  beveragesContainer: { flex: 1, paddingHorizontal: 16 },
  beverageList: { paddingBottom: 16 },
  beverageCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    elevation: 2,
  },
  beverageImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  beverageDetails: { flex: 1, justifyContent: 'center' },
  beverageTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  beveragePrice: { fontSize: 14, color: '#000' },
  beveragePoints: { fontSize: 12, color: '#888' },
  beverageRating: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  ratingText: { color: '#fff', fontSize: 12 },
});

export default HomeScreen;
