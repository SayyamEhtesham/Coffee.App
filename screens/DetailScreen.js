import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

const DetailScreen = ({ navigation }) => {
  const [size, setSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  // Handle slider change and update size based on slider value
  const handleSliderChange = (value) => {
    if (value < 0.5) {
      setSize('Small');
    } else if (value < 1.5) {
      setSize('Medium');
    } else if (value < 2.5) {
      setSize('Large');
    } else {
      setSize('Extra Large');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/coffee.jpg')} style={styles.headerBackground}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <MaterialIcons name="bookmark-border" size={24} color="#fff" />
        </View>
      </ImageBackground>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>4.5</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>Ice Chocolate Coffee</Text>
        <Text style={styles.productDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>

        {/* Slider to adjust size */}
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={3}
            step={1}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#00693e"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#00693e"
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
          />
          <View style={styles.sizeLabelContainer}>
            {['Small', 'Medium', 'Large', 'Extra Large'].map((item) => (
              <Text key={item} style={styles.sizeLabel}>
                {item}
              </Text>
            ))}
          </View>
        </View>

        <Text style={styles.sizeText}>{size}</Text>

        {/* Price & Quantity */}
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.currentPrice}>$5.8</Text>
            <Text style={styles.originalPrice}>$8.0</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange('decrement')}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange('increment')}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Note */}
        <Text style={styles.note}>
          *) Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore
        </Text>

        {/* Order Button */}
        <TouchableOpacity style={styles.orderButton}
        onPress={() => navigation.navigate('MyCart')}
        >
          <Text style={styles.orderButtonText}>
            PLACE ORDER ${(5.8 * quantity).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00693e',
  },
  headerBackground: {
    width: '100%',
    height: 350,
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  ratingContainer: {
    position: 'absolute',
    top: 330,
    right: 20,
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 8,
    zIndex: 10,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  sliderContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  slider: {
    width: '90%',
    height: 40,
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
  track: {
    height: 10,
    borderRadius: 5,
  },
  thumb: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderColor: '#fff',
    borderWidth: 2,
  },
  sizeLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 8,
  },
  sizeLabel: {
    fontSize: 14,
    color: '#00693e',
    fontWeight: '600',
  },
  sizeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#00693e',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00693e',
  },
  originalPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 8,
    elevation: 2,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00693e',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 12,
    color: '#888',
    marginBottom: 16,
  },
  orderButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00693e',
    paddingVertical: 14,
    borderRadius: 15,
   
  },
  orderButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});

export default DetailScreen;
