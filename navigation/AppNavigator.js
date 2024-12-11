import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MyCart from '../screens/MyCart';
import WishListScreen from '../screens/WishListScreen';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/SearchScreen';
import ProductScreen from '../screens/ProductScreen';
import NotificationHeader from '../Components/NotificationHeader';
import DetailScreen from '../screens/DetailScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddressScreen'; // Correct Import
import PaymentScreen from '../screens/PaymentScreen';
import CreditCardForm from '../screens/CreditCardForm';
import AddDeliveryAddressScreen from '../screens/AddDeliveryAddressScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            header: () => <NotificationHeader navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="Wishlist"
          component={WishListScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ headerShown: false, title: 'Products' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DeliveryAddress"
          component={DeliveryAddressScreen}
          options={{
            headerShown: true,
            title: 'Delivery Address',
          }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: true,
            title: 'Payment',
          }}
        />


<Stack.Screen
          name="AddDeliveryAddress"
          component={AddDeliveryAddressScreen}
          options={{
            headerShown: false,  
            title: 'Add Delivery Address',
          }}
        />

        <Stack.Screen
          name="CreditCardForm"
          component={CreditCardForm}
          options={{
            title: 'Add Credit Card',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
