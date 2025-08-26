import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import { FlatList } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CartScreen = () => {
  const isFocused = useIsFocused();
  // const [refresh, setRefresh] = useState(false);
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [loadItem, setLoadItem] = useState(false);

  //load from Asyncstorage
  const loadCart = async () => {
    setLoadItem(true);
    try {
      const SavedCart = await AsyncStorage.getItem("Cart");
      if(SavedCart){
        setCartItem(JSON.parse(SavedCart));
      }else{
        setCartItem([]);
      }
    } catch(error) {
      console.log("Error loading Cart", error);
    }
    setLoadItem(false);
  }
  useEffect(()=>{
    if(isFocused) {
      loadCart();
    }
  },[isFocused]);
  
  // save in Async Storage
  const SaveCart = async(updateCart : any[]) => {
    try{
      await AsyncStorage.setItem("Cart" , JSON.stringify(updateCart));
    } catch(error){
      console.log("Error Saving Cart", error);
    }
  };

  const handleRemover = (index : number) => {
    const updateCart = [...cartItem];
    updateCart.splice(index, 1);
    // cart.splice(index , 1);
    setCartItem(updateCart);
    SaveCart(updateCart);
    // setRefresh(!refresh);
  };
  if(loadItem){
   return (
   <View style={styles.container}>
   <Text style={styles.text}>Loadingitem Carts ... </Text>
   </View>
   );
  }

  return (
    <View style={styles.container}>
      <TopBarHeader />
      <View style={styles.centerContent}>
        <Text style={styles.text}> My Cart 🛒 </Text>

      {
        cartItem.length === 0 ? (
          <Text style={styles.text}> Cart is empty !</Text>
        ) : (
          <FlatList
          data={cartItem}
          numColumns={2}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          contentContainerStyle={styles.listContainer}
          renderItem={({item, index}) => (
             <View style={styles.item}>
             <Image source={item.Image} style={styles.Image} />
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.Rating}>{item.rating}{item.stars}</Text>
             <Text style={styles.Price}>Rs {item.price}</Text>
             
            <TouchableOpacity style={styles.RemoveButton} 
            onPress={()=> handleRemover(index)}>
              <Text style={styles.RemoveButtonText}> Remove from Cart</Text>
            </TouchableOpacity>
            </View>
          )} 
          // extraData={[isFocused, refresh]}
          />
        )}
        </View>
        </View>
  )
} 

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 5,
  },
   text : {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop : 5,
    marginBottom : 5,
  },
  listContainer:{
  paddingBottom : 230,
  paddingHorizontal : 5,
  },
  item : {
    backgroundColor: '#f1ececff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 15,
    paddingHorizontal : 8,
    paddingBottom: 10,
    elevation: 2,
    margin: 5,
  },
  Image: {
    width: '100%',
    height: 180,
    borderRadius: 5,
    // resizeMode: 'cover',
  },
  title: {
    fontSize : 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  Price: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  Rating: {
    // fontWeight : 'bold',
    marginTop: 5,
  },
  RemoveButton: {
    marginTop: 10,
    backgroundColor: '#0eaed6ff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  RemoveButtonText:{
   color: '#fffdfdff',
  //  fontSize : 20,
   fontWeight: 'bold',
    // marginBottom : 2,
  }
})