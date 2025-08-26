import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarHeader from '../TopBarHeader/TopBarHeader'

const KurtiDrawer = () => {
  return (
    <View style={styles.container}>
      <TopBarHeader/>
      <View style={styles.Title}>
        <Text style={styles.text}> Kurti Drawer Screen</Text>
      </View>
    </View>
  )
}
export default KurtiDrawer

const styles = StyleSheet.create({
  container :{
    flex :1,
  }, 
  Title:{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  text:{
    fontSize : 20,
  }
})