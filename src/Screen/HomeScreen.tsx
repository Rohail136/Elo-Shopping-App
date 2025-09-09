import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import FlatList from '../FLatList/ProductList'
import { products } from '../Data/Products'
import ProductList from '../FLatList/ProductList'
import { Route, RouteProp, useRoute } from '@react-navigation/native'
// import { RootStackParamList } from '../Navigation/RootsStackParamList'

// type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>

const HomeScreen: React.FC = () => {
  const [searchBar, setSearchBar] = useState('')
  const route = useRoute()
  const name = (route.params as { name?: string })?.name || 'Guest'
  // filter function
  const filterData = products.filter((item) =>
  item.title.toLowerCase().includes(searchBar.toLowerCase())
  )
  return (
    <View style={styles.HomeScreencontainer}>
      <TopBarHeader searchText={searchBar} setSearchText={setSearchBar}/>
      <Text style={styles.title}>Welcome {name}</Text>
      <ProductList data={filterData}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  HomeScreencontainer: {
    flex: 1,
    backgroundColor : '#fff'
  },
  title : {
    fontSize : 24,
    fontWeight : 'bold',
    textAlign : 'center',
    marginTop : 20,
    marginBottom : 10,
  }
})