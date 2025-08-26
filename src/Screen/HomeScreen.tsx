import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import FlatList from '../FLatList/ProductList'
import { products } from '../Data/Products'
import ProductList from '../FLatList/ProductList'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.HomeScreencontainer}>
      <TopBarHeader />
      <ProductList data={products}/>
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