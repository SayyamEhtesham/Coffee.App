import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerIcon}>
        <MaterialIcons name="home" size={24} color="black" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcon}>
        <MaterialIcons name="favorite" size={24} color="black" />
        <Text style={styles.footerText}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcon}>
        <MaterialIcons name="shopping-cart" size={24} color="black" />
        <Text style={styles.footerText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcon}>
        <MaterialIcons name="person" size={24} color="black" />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    zIndex: 10, // Ensures the footer stays above other components
  },
  footerIcon: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'black',
  },
});

export default Footer;
