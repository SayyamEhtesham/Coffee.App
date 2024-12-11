import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const CheckoutScreen = ({ navigation }) => {
  const [notes, setNotes] = useState('');

  const items = [
    { name: 'Bluebell Hand Block Printed', price: 2000.0, quantity: 2 },
    { name: 'Men Block Grey Allover Printed', price: 1899.0, quantity: 2 },
  ];

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 100.0;
  const shipping = 0.0;
  const total = subtotal - discount + shipping;

  return (
    <View style={styles.container}>
      {/* Simple Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" type="font-awesome" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Delivery Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>123 Main Street, Anytown, USA 12345</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DeliveryAddress')}>
            <Icon name="chevron-right" type="font-awesome" size={18} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentInfo}>xxxx xxxx xxxx 3456</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Icon name="chevron-right" type="font-awesome" size={18} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Additional Notes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Write here"
          multiline
        />
      </View>

      {/* Submit Order Button */}
      <Button
        title="SUBMIT ORDER"
        containerStyle={styles.submitButton}
        buttonStyle={{ backgroundColor: '#037B32' }}
      />

      {/* Order Summary Section */}
      <View style={styles.orderSection}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text>{item.name}</Text>
            <Text>{item.quantity} x ${item.price.toFixed(2)}</Text>
          </View>
        ))}
        <View style={styles.itemRow}>
          <Text>Discount</Text>
          <Text>-${discount.toFixed(2)}</Text>
        </View>
        <View style={styles.itemRow}>
          <Text>Shipping</Text>
          <Text>FREE Delivery</Text>
        </View>
        <View style={[styles.itemRow, styles.totalRow]}>
          <Text style={styles.totalText}>My Order</Text>
          <Text style={styles.totalText}>${total.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    elevation: 3, // For a slight shadow on Android
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address: {
    fontSize: 16,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentInfo: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 8,
    marginTop: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    right: 4,
    borderRadius: 14,
  },
  orderSection: {
    position: 'absolute',
    bottom: 80,
    left: 4,
    right: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    zIndex: 1,
  },
});

export default CheckoutScreen;