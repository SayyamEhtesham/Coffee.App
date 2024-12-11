import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../Components/Footer';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Hot Creamy Cappuccino Latte Ombe',
      price: 8.9,
      oldPrice: 9.5,
      reviews: '2k Review',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Creamy Mocha Ome Coffee',
      price: 6.3,
      oldPrice: 8.5,
      reviews: '2k Review',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Ice Chocolate Coffee',
      price: 6.2,
      oldPrice: 9.5,
      reviews: '2k Review',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
      quantity: 1,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
        <View style={styles.headerActions}>
          <Text style={styles.deliveryText}>Deliver To:</Text>
          <Text style={styles.locationText}>London</Text>
          <TouchableOpacity
  style={styles.changeButton}
  onPress={()=>navigation.navigate('AddDeliveryAddress')}
>
  <Text style={styles.changeButtonText}>Change</Text>
</TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.subtotal}>
          Subtotal <Text style={styles.price}>$3,599</Text>
        </Text>
        <Text style={styles.deliveryNote}>Your order is eligible for free Delivery</Text>

        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                ${item.price} <Text style={styles.oldPrice}>${item.oldPrice}</Text>
              </Text>
              <Text style={styles.itemReviews}>{item.reviews}</Text>
              <View style={styles.itemActions}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleDecrease(item.id)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleIncrease(item.id)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleRemove(item.id)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.proceedButtonContainer}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Checkout')}  // Navigate to CheckoutScreen
        >
          <Text style={styles.proceedButtonText}>
            PROCEED TO BUY ({cartItems.reduce((total, item) => total + item.quantity, 0)} ITEMS)
          </Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  headerItem: {
    fontSize: 14,
    color: '#666666',
    marginRight: 16,
  },
  changeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 13,
  },
  changeButtonText: {
    fontSize: 14,
    color: '#333333',
  },
  changeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 13,
  },
  changeButtonText: {
    fontSize: 14,
    color: '#333333',
  },
  delivery: {
    fontSize: 16,
    color: '#888'
  },
  location: {
    fontWeight: 'bold',
    color: '#000'
  },
  subtotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5
  },
  price: { color: '#28a745' },
  deliveryNote: {
    color: '#28a745',
    marginBottom: 10
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  itemPrice: {
    fontSize: 14,
    color: '#000'
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888'
  },
  itemReviews: {
    fontSize: 12,
    color: '#888'
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 18,
    color: '#000'
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  remove: {
    fontSize: 14,
    color: '#dc3545'
  },
  proceedButtonContainer: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  proceedButton: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    borderRadius: 24,
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default CartScreen;