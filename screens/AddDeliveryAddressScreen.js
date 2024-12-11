import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AddDeliveryAddress = () => {
  const [selectedAddressType, setSelectedAddressType] = useState('Home');

  const addressTypes = ['Home', 'Shop', 'Office'];

  // Use the navigation hook to navigate back
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Delivery Address</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Contact Details</Text>
          <TextInput placeholder="Full Name" style={styles.input} />
          <TextInput placeholder="Mobile No." style={styles.input} keyboardType="phone-pad" />

          <Text style={styles.sectionTitle}>Address</Text>
          <TextInput placeholder="Pin Code" style={styles.input} keyboardType="numeric" />
          <TextInput placeholder="Address" style={styles.input} />
          <TextInput placeholder="Locality/Town" style={styles.input} />
          <TextInput placeholder="City/District" style={styles.input} />
          <TextInput placeholder="State" style={styles.input} />

          <Text style={styles.sectionTitle}>Save Address As</Text>
          <View style={styles.addressTypeContainer}>
            {addressTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.addressTypeButton,
                  selectedAddressType === type ? styles.selectedAddressType : null,
                ]}
                onPress={() => setSelectedAddressType(type)}
              >
                <Text
                  style={[
                    styles.addressTypeText,
                    selectedAddressType === type ? styles.selectedAddressText : null,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
        </TouchableOpacity>
      </View>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#333',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between', // Ensure the button stays at the bottom
  },
  form: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 14,
    color: '#333',
  },
  addressTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  addressTypeButton: {
    borderWidth: 1,
    borderColor: '#00A86B',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  selectedAddressType: {
    backgroundColor: '#00A86B',
  },
  addressTypeText: {
    fontSize: 14,
    color: '#00A86B',
  },
  selectedAddressText: {
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 16,
    borderRadius: 13,
    marginBottom: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default AddDeliveryAddress;
