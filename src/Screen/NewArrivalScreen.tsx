import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'
import NewArrivalProductList from '../FLatList/NewArrivalProductList'
import { Lists } from '../Data/List'


const NewArrivalScreen = () => {
  return (
    <View style={styles.container}>
      < TopBarHeader />
      <NewArrivalProductList data={Lists} />
    </View>
  )
}

export default NewArrivalScreen

const styles = StyleSheet.create({
  container :{
  flex : 1,
  },
})