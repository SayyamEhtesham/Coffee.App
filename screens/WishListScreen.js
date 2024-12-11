import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../Components/Footer';

const data = [
  {
    id: '1',
    title: 'Sweet Lemon Indonesian Tea',
    variant: 'White Stripes',
    price: '$69.4',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '2',
    title: 'Hot Cappuccino Latte with Mocha',
    variant: 'White Stripes',
    price: '$69.4',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '3',
    title: 'Original Hot Coffee',
    variant: 'White Stripes',
    price: '$69.4',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '4',
    title: 'Sweet Lemon Indonesian Tea',
    variant: 'White Stripes',
    price: '$69.4',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: '5',
    title: 'Sweet Lemon Indonesian Tea',
    variant: 'White Stripes',
    price: '$69.4',
    image: require('../assets/coffee.jpg'),
  },
];

const WishListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('Detail')}}>

      <Image source={item.image} style={styles.image} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardVariant}>Variant: {item.variant}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <TouchableOpacity>
            <Icon name="heart" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Wishlist</Text>
          <Text style={styles.headerSubTitle}>6 items • Total: $213</Text>
        </View>
        <TouchableOpacity>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Roboto',
  },
  headerSubTitle: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Roboto',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    flex: 0.48,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '35%',
    height: 150,
    borderRadius: 8,
    marginRight: 2,
    resizeMode: 'cover',
  },
  cardInfo: {
    padding: 9,
    width: '60%',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    flexWrap: 'wrap',
    flex: 1,
    lineHeight: 18,
  },
  cardVariant: {
    fontSize: 12,
    color: '#777',
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default WishListScreen;
