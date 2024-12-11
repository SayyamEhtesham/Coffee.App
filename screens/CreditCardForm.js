import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CreditCardScreen = () => {
  const navigation = useNavigation();
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const card = {
    id: '1',
    type: 'CREDIT CARD',
    number: '•••• •••• •••• 4532',
    name: 'ROOPA SMITH',
    exp: 'EXP 14/07',
    cvv: 'CVV 012',
    img: require('../assets/visa_logo.png'),
  };

  // Function to handle "Add Card" button press and navigate back
  const handleAddCard = () => {
    // You can add any logic to save the card info here
    navigation.goBack();  // This will navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardDetails}>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardNumber}>{card.number}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardInfo}>{card.exp}</Text>
            <Text style={styles.cardInfo}>{card.cvv}</Text>
          </View>
        </View>
        <Text style={styles.cardName}>{card.name}</Text>
        <View style={styles.cardLogoContainer}>
          <Image source={card.img} style={styles.cardLogo} />
        </View>
      </View>

      {/* Additional Input Fields */}
      <TextInput
        style={styles.additionalInfoInput}
        placeholder="Card Name"
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
      />

      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Card Number"
      />
      <TextInput
        style={styles.input}
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="Expiry Date"
      />
      <TextInput
        style={styles.input}
        value={cvv}
        onChangeText={setCvv}
        placeholder="CVV"
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleAddCard}>
        <Text style={styles.continueButtonText}>ADD CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  card: {
    width: '90%',
    height: 200,
    padding: 16,
    borderRadius: 12,
    marginTop: 32,
    marginHorizontal: 'auto',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#000',
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
  input: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    fontSize: 16,
  },
  additionalInfoInput: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 16,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CreditCardScreen;
