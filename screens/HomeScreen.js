import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'Beverages',
    menuCount: '41 Menus',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '2',
    title: 'Foods',
    menuCount: '37 Menus',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '3',
    title: 'Pizza',
    menuCount: '28 Menus',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '4',
    title: 'Lunch',
    menuCount: '28 Menus',
    image: require('../assets/coffee.jpg'),
  },
];

const CategoryCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.menuCount}>{item.menuCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FeaturedBeverages = () => {
  const beverages = [
    {
      id: '1',
      title: 'Hot Creamy Cappuccino Latte Ombe',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffeejpg'),

    },
    {
      id: '2',
      title: 'Creamy Mocha Ome Coffee',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffeejpg'),

    },
    {
      id: '3',
      title: 'Arabica Latte Ombe Coffee',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffeejpg'),
      
    },
    {
      id: '4',
      title: 'Original Hot Coffee',
      price: '$12.6',
      rating: 3.8,
      image: require('../assets/coffeejpg'),
    },
  ];

  return (
    <ScrollView style={styles.beverageContainer}>
      {beverages.map((beverage, index) => (
        <View key={beverage.id}>
          <View style={styles.card}>
            <Image source={beverage.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{beverage.title}</Text>
              <Text style={styles.price}>{beverage.price}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{beverage.rating.toFixed(1)}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const App = ({ navigation }) => {
  const handleCardPress = (categoryTitle) => {
    alert(`You clicked on the ${categoryTitle} category`);
  };

  const handleWishlistPress = () => {
    navigation.navigate('WishlistScreen');
  };

  const handleCartPress = () => {
    navigation.navigate('cart');
  };

  const handleProfilePress = () => {
    navigation.navigate('profile');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Good Morning</Text>
        <Text style={styles.headerText}>Williams</Text>
        <TouchableOpacity style={styles.bagIcon}>
          <Icon name="bag-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="menu" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Text style={styles.searchPlaceholder}>Search beverages or foods</Text>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <CategoryCard item={item} onPress={() => handleCardPress(item.title)} />
          )}
        />
      </View>

      {/* Featured Beverages Section */}
      <FeaturedBeverages />

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="home" size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={handleWishlistPress}>
            <Icon name="heart" size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={handleCartPress}>
            <Icon name="cart" size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={handleProfilePress}>
            <Icon name="person" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bagIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#ccc',
    marginLeft: 10,
  },
  categoriesContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  flatListContainer: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    marginRight: 10,
    width: 120,
    height: 160,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuCount: {
    fontSize: 14,
    color: '#ccc',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 16,
    width: 160,
  },
  beverageContainer: {
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    backgroundColor: 'orange',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  rating: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
