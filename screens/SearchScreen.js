import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


<View>
      <Text>Search History</Text>
</View>
const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const suggestions = [
    'Sweet Lemon Indonesian Tea',
    'Hot Cappuccino Latte with Mocha',
    'Arabica Latte Ombe Coffee',
    'Original Hot Coffee',
  ];

  const filteredSuggestions = query
    ? suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : suggestions;

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search items"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        {query ? (
          <TouchableOpacity onPress={clearSearch}>
            <Icon name="times" size={20} color="gray" />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Suggestions */}
      <FlatList
        data={filteredSuggestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', { productName: item })}
            style={styles.item}
          >
            <Text>{item && typeof item === 'string' ? item : ''}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  searchBar: {
    flexDirection: 'row',
    borderRadius: 500,
    alignItems: 'center',
    marginBottom: 10,
  },
  input: { flex: 1, borderWidth: 1, borderRadius: 5, padding: 8, marginLeft: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});

export default SearchScreen;
