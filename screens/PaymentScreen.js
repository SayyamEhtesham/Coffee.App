import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentScreen = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState('Credit Card');

  const paymentMethods = [
    { id: '1', title: 'Cash on Delivery (Cash/UPI)', icon: 'money' },
    { id: '2', title: 'Google Pay/Phone Pay/BHIM UPI', icon: 'google-wallet' },
    { id: '3', title: 'Payments/Wallet', icon: 'credit-card' },
    { id: '4', title: 'Netbanking', icon: 'bank' },
  ];

  const cards = [
    {
      id: '1',
      type: 'CREDIT CARD',
      number: '•••• •••• •••• 4532',
      name: 'ROOPA SMITH',
      exp: 'EXP 14/07',
      cvv: 'CVV 012',
      img: require('../assets/visa_logo.png'),
    },
    {
      id: '2',
      type: 'DEBIT CARD',
      number: '•••• •••• •••• 1234',
      name: 'ROOPA SMITH',
      img: require('../assets/debit_card.png'),
    },
  ];

  const renderPaymentMethod = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.paymentMethodItem,
        selectedPayment === item.title && styles.selectedItem,
      ]}
      onPress={() => setSelectedPayment(item.title)}
    >
      <View style={styles.paymentIcon}>
        <Icon name={item.icon} size={20} color="#00A86B" />
      </View>
      <Text style={styles.paymentMethodTitle}>{item.title}</Text>
      <Icon
        name={selectedPayment === item.title ? 'dot-circle-o' : 'circle-o'}
        size={20}
        color="#00A86B"
      />
    </TouchableOpacity>
  );

  const renderCard = ({ item }) => (
    <View
      style={[
        styles.card,
        styles.shadow,
        { backgroundColor: item.id === '2' ? '#808080' : '#000' },
      ]}
    >
      <View style={styles.cardDetails}>
        <Text style={styles.cardType}>{item.type}</Text>
        <Text style={styles.cardNumber}>{item.number}</Text>
        {item.exp && (
          <View style={styles.cardFooter}>
            <Text style={styles.cardInfo}>{item.exp}</Text>
            <Text style={styles.cardInfo}>{item.cvv}</Text>
          </View>
        )}
      </View>
      <Text style={styles.cardName}>{item.name}</Text>
      {item.img && (
        <View style={styles.cardLogoContainer}>
          <Image source={item.img} style={styles.cardLogo} />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Credit/Debit Card</Text>
        <TouchableOpacity
          style={styles.addCardButton}
          onPress={() => navigation.navigate('CreditCardForm')}
        >
          <Icon name="plus" size={20} color="#00A86B" />
          <Text style={styles.addCardText}>Add Card</Text>
        </TouchableOpacity>
      </View>

      {/* Render FlatLists independently */}
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardSection}
      />

      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={renderPaymentMethod}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCardText: {
    fontSize: 16,
    color: '#00A86B',
    marginLeft: 8,
  },
  cardSection: {
    paddingHorizontal: 16,
    marginVertical: 4,
  },
  card: {
    width: 280,
    height: 160,
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  cardDetails: {
    marginBottom: 16,
  },
  cardType: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 8,
  },
  cardNumber: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  cardInfo: {
    fontSize: 14,
    color: '#FFF',
  },
  cardName: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 16,
  },
  cardLogoContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 60,
    height: 40,
  },
  cardLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    opacity: 0.8,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 20,
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  paymentIcon: {
    marginRight: 16,
  },
  paymentMethodTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  selectedItem: {
    borderColor: '#00A86B',
    backgroundColor: '#E8F8F3',
  },
  continueButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default PaymentScreen;
