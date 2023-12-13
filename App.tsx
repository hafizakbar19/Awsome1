import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Cards playground</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card1</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
          <Text>Card2</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
          <Text>Card3</Text>
          </View>
      </View>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  cardOne: {
    backgroundColor: 'red'
  },
  cardTwo: {
    backgroundColor: 'yellow'
  },
  cardThree: {
    backgroundColor: 'green'
  }

})

export default App