import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ navigation, route }) => {
  const currentRoute = route?.name;

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerIcon}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialIcons
          name="home"
          size={24}
          color={currentRoute === 'Home' ? '#28a745' : 'black'}
        />
        <Text
          style={[
            styles.footerText,
            { color: currentRoute === 'Home' ? '#28a745' : '#000' },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerIcon}
        onPress={() => navigation.navigate('Wishlist')}
      >
        <Icon
          name="heart"
          size={25}
          color={currentRoute === 'Wishlist' ? '#28a745' : 'black'}
        />
        <Text
          style={[
            styles.footerText,
            { color: currentRoute === 'Wishlist' ? '#28a745' : '#000' },
          ]}
        >
          Wishlist
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerIcon}
        onPress={() => navigation.navigate('MyCart')}
      >
        <MaterialIcons
          name="shopping-cart"
          size={24}
          color={currentRoute === 'MyCart' ? '#28a745' : 'black'}
        />
        <Text
          style={[
            styles.footerText,
            { color: currentRoute === 'MyCart' ? '#28a745' : '#000' },
          ]}
        >
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerIcon}
        onPress={() => navigation.navigate('Profile')}
      >
        <MaterialIcons
          name="person"
          size={24}
          color={currentRoute === 'Profile' ? '#28a745' : 'black'}
        />
        <Text
          style={[
            styles.footerText,
            { color: currentRoute === 'Profile' ? '#28a745' : '#000' },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 5,
  },
  footerIcon: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
});

export default Footer;
