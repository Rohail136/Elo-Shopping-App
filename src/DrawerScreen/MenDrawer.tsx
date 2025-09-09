import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import BottomTabNavigator from '../Navigation/BottomTabNavigator'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import ProductGrid from '../FLatList/ProductGrid'
import { Cards } from '../Data/CardProduct'
import { SearchBar } from 'react-native-screens'

const MenDrawer : React.FC = () => {
  const [searchtext, setSeaarchText] = useState('')

  const filterData = Cards.filter((card) => 
  card.title.toLowerCase().includes(searchtext.toLowerCase())
  )
  return (
    <View style={styles.container}>
      <TopBarHeader searchText={searchtext} setSearchText={setSeaarchText}/>
      <ProductGrid data={filterData} />
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