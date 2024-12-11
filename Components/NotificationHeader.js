import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: '#fff',
      }}
    >
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>


      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Notifications (12)</Text>
      </View>

      
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={{ padding: 10 }}
      >
        <Icon name="search" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default NotificationHeader;
