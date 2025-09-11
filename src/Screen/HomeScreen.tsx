import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import { useIsFocused, useNavigation } from '@react-navigation/native'  // ✅ fixed
import { products } from '../Data/Products'
import ProductList from '../FLatList/ProductList'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen: React.FC = () => {
  const [searchBar, setSearchBar] = useState('')
  const [name, setName] = useState<string | null>(null)
  const isFocused = useIsFocused()
  const navigation = useNavigation()
 
  useEffect(
    useCallback(() => {
      const getName = async () => {
        try {
          const storeName = await AsyncStorage.getItem('Username')
          if (storeName) {
            setName(storeName)
          } else {
            console.log("Error")
          }
        } catch (error) {
          Alert.alert("Error", "Not valid Key-Value")
          console.log(error)
        }
      }
      if (isFocused) {
        getName()
      }
    }, [isFocused, navigation])
  )

  // filter function
  const filterData = products.filter((item) =>
    item.title.toLowerCase().includes(searchBar.toLowerCase())
  )

  return (
    <View style={styles.HomeScreencontainer}>
      <TopBarHeader searchText={searchBar} setSearchText={setSearchBar} />
      <Text style={styles.title}>Welcome {name}</Text>
      <ProductList data={filterData} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  HomeScreencontainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  }
})
