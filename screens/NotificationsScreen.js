import React, { useState, useRef } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';

const initialNotifications = [
  {
    id: 1,
    title: 'New Arrivals Alert!',
    date: '15 July 2023',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 2,
    title: 'Flash Sale Announcement',
    date: '21 July 2023',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 3,
    title: 'Exclusive Discounts Inside',
    date: '10 March 2023',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 4,
    title: 'Limited Stock - Act Fast!',
    date: '20 September 2023',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 5,
    title: 'Get Ready to Shop',
    date: '15 July 2023',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 6,
    title: 'Special Offer Just for You',
    date: '20 September 2023',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 7,
    title: 'Get Ready to Shop',
    date: '15 July 2023',
    image: require('../assets/coffee.jpg'),
  },
];

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [openSwipeableId, setOpenSwipeableId] = useState(null);
  const swipeableRefs = useRef(new Map()).current;

  // Handle delete action
  const handleDelete = (id) => {
    const updatedNotifications = notifications.filter(item => item.id !== id);
    setNotifications(updatedNotifications);
    setOpenSwipeableId(null);
  };

  const renderRightActions = (id) => (
    <View style={styles.deleteAction}>
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <IconButton
          icon="delete"
          color="#fff"
          size={20}
        />
      </TouchableOpacity>
    </View>
  );

  const handleSwipeOpen = (id) => {
    // Close previously open swipeable
    if (openSwipeableId !== null && openSwipeableId !== id) {
      const previousSwipeable = swipeableRefs.get(openSwipeableId);
      if (previousSwipeable) {
        previousSwipeable.close();
      }
    }
    
    // Set the current swipeable as open
    setOpenSwipeableId(id);
  };

  const handleSwipeClose = () => {
    setOpenSwipeableId(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Swipeable
            ref={(ref) => {
              if (ref) {
                swipeableRefs.set(item.id, ref);
              } else {
                swipeableRefs.delete(item.id);
              }
            }}
            renderRightActions={() => renderRightActions(item.id)}
            onSwipeableWillOpen={() => handleSwipeOpen(item.id)}
            onSwipeableWillClose={handleSwipeClose}
            overshootRight={false}
          >
            <View style={styles.notificationItem}>
              <Image source={item.image} style={styles.notificationImage} />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationDate}>{item.date}</Text>
              </View>
            </View>
          </Swipeable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationImage: {
    width: 48,
    height: 48,
    borderRadius: 14,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 14,
    color: '#666',
  },
  deleteAction: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    width: 60,
    height: '80%',
    borderRadius: 8,
    marginLeft: 16,
  },
});

export default NotificationsScreen;