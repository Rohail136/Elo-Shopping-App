import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Product } from '../Data/Products'
import { FlatList } from 'react-native-gesture-handler';
import { cart } from '../Data/CartData';


type Props = {
  data : Product[];
}

export default function ProductList({ data }: Props) {
  return (
    <FlatList
      data={data}
      // numColumns={2}
      keyExtractor={(item) => item.id}
      contentContainerStyle={style.Container}
      renderItem={({ item }) => (
        <View style={style.item}>
          <Image source={item.Image} style={style.image} />
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.Rating}>{item.rating}{item.stars}</Text>
          <Text style={style.Price}>Rs {item.Price}</Text>     
        </View>
      )}
    />
  );
}

const style = StyleSheet.create({
  Container : {
  paddingBottom : 5,
  paddingHorizontal : 7,
  margin : 5,
  paddingTop : 5,
  },

  item:{
   flex : 1,
   backgroundColor : '#faf9f9ff',
   alignItems : 'center',
   borderRadius : 5,
   paddingTop : 10,
   paddingBottom : 10,
   elevation: 2,
   margin : 2,
  },
  image:{
    width : '95%',
    height : 250,
    borderRadius : 7,
    elevation : 5,
  },
  title:{
    fontWeight : 'bold',
    fontFamily : 'Georgia',
    marginTop : 5,
  },
  Price :{
    fontWeight : 'bold',
    marginTop : 5,
  },
  Rating:{
    fontWeight : 'bold',
    marginTop : 5,
  },
})