import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const CartScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Hot Creamy Cappuccino Latte Ombe',
      price: 8.9,
      oldPrice: 9.5,
      reviews: '2k Review',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s', 
    },
    {
      id: 2,
      name: 'Creamy Mocha Ome Coffee',
      price: 6.3,
      oldPrice: 8.5,
      reviews: '2k Review',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s',
    },
    {
      id: 3,
      name: 'Ice Chocolate Coffee',
      price: 6.2,
      oldPrice: 9.5,
      reviews: '2k Review',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s', 
    },
  ];

  const handleRemove = (id) => {
    console.log('Remove item with id:', id);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
        <Text style={styles.delivery}>Deliver To: <Text style={styles.location}>London</Text></Text>
      </View>
      <Text style={styles.subtotal}>Subtotal <Text style={styles.price}>$3,599</Text></Text>
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>1</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleRemove(item.id)}>
            <Text style={styles.remove}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>PROCEED TO BUY (8 ITEMS)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  delivery: { fontSize: 16, color: '#888' },
  location: { fontWeight: 'bold', color: '#000' },
  subtotal: { fontSize: 18, fontWeight: 'bold', color: '#000', marginVertical: 5 },
  price: { color: '#28a745' },
  deliveryNote: { color: '#28a745', marginBottom: 10 },
  itemContainer: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
  itemImage: { width: 60, height: 60, borderRadius: 8 },
  itemDetails: { flex: 1, marginLeft: 10 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  itemPrice: { fontSize: 14, color: '#000' },
  oldPrice: { textDecorationLine: 'line-through', color: '#888' },
  itemReviews: { fontSize: 12, color: '#888' },
  itemActions: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  button: { width: 30, height: 30, backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center', borderRadius: 15 },
  buttonText: { fontSize: 18, color: '#000' },
  quantity: { marginHorizontal: 10, fontSize: 16, fontWeight: 'bold', color: '#000' },
  remove: { fontSize: 14, color: '#dc3545' },
  proceedButton: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 8, marginTop: 20 },
  proceedButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default CartScreen;
