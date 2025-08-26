import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { List, Lists } from '../Data/List'
import { FlatList } from 'react-native-gesture-handler';

type props = {
  data : List[];
}
export default function NewArrivalProductList ({data} : props ){
  return (
    <FlatList
     data={Lists}
     keyExtractor={(item) => item.id}
     contentContainerStyle={styles.container}
     renderItem={({item}) => (
      <View style={styles.item}>
        <Image source={item.Image} style={styles.Image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
     )}
 />
  )
}

const styles = StyleSheet.create({
  container:{
   marginHorizontal : 20,
   marginTop : 20,
   paddingBottom : 20,
  },
  item:{
  flexDirection : 'row',
  alignItems : 'center',
  paddingVertical : 10,
  borderBottomWidth : 1,
  borderBottomColor : '#055e20'
  },
   title:{
    fontSize : 18,
    fontWeight : 'bold',
    color : '#262726ff',
    marginHorizontal : 20,
    paddingBottom : 10,
  },
  Image:{
    flexDirection : 'column',
    width : 50 ,
    height : 50,
    borderRadius : 50,
    elevation : 5,
    // resizeMode : 'contain',
  },
})