import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../Layout/Layout'
import BottomTabNavigator from '../Navigation/BottomTabNavigator'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import ProductGrid from '../FLatList/ProductGrid'
import { Cards } from '../Data/CardProduct'

const MenDrawer : React.FC = () => {
  return (
    <View style={styles.container}>
      <TopBarHeader/>
      <ProductGrid data={Cards} />
    </View>
  )
}
export default MenDrawer

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor : '#fff',
    marginBottom : 50,
  }, 
})