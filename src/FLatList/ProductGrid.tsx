import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Card } from '../Data/CardProduct'
import { FlatList } from 'react-native-gesture-handler';
import { cart } from '../Data/CartData';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  data: Card[];
}

export default function ProductGrid({ data }: Props) {

  const AddtoCart = async (item : Card) => {
   try { 
    const savedCart = await AsyncStorage.getItem("Cart");
    let currentCart = savedCart ? JSON.parse(savedCart) : [];

    currentCart.push(item);
    await AsyncStorage.setItem("Cart", JSON.stringify(currentCart));
    Alert.alert("✅ Added to Cart");
   } catch(error) {
    console.log("Error Loading to cart", error);
   }
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.Image} style={styles.Image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rating}>
            {item.rating.toString()} {item.stars}
          </Text>
          <Text style={styles.price}>Rs {item.price.toString()}</Text>

          <TouchableOpacity
            style={styles.CartButton}
            onPress={() => AddtoCart(item)}>
            <Text style={styles.CartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#faf9f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingTop: 15,
    paddingBottom: 5,
    elevation: 2,
    margin: 5,
  },
  Image: {
    width: 160,
    height: 200,
    borderRadius: 5,
    elevation  : 5,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  rating: {
    marginTop: 5,
  },
  CartButton: {
    marginTop: 10,
    backgroundColor: '#168316ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    marginBottom  : 5,
  },
  CartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    // marginBottom : 2,
  },
})
