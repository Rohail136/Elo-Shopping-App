import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import FlatList from '../FLatList/ProductList'
import { products } from '../Data/Products'
import ProductList from '../FLatList/ProductList'

const HomeScreen: React.FC = () => {
  const [searchBar, setSearchBar] = useState('')
  // filter function
  const filterData = products.filter((item) =>
  item.title.toLowerCase().includes(searchBar.toLowerCase())
  )
  return (
    <View style={styles.HomeScreencontainer}>
      <TopBarHeader searchText={searchBar} setSearchText={setSearchBar}/>
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
})