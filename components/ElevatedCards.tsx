import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
      <View style={[styles.card, styles.cardOne]}>
          <Text>Noor</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
          <Text>Ziarat</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
          <Text>Akbar</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
          <Text>Akhtar</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
          <Text>Irfan</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
          <Text>Amjed</Text>
          </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container: {
    padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    color: 'black',
    fontWeight: 'bold',
    shadowOffset: {
      width: 50,
      height: 50
    },
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 1
  },
  cardOne: {
    backgroundColor: 'red'
  },
  cardTwo: {
    backgroundColor: 'yellow'
  },
  cardThree: {
    backgroundColor: 'green'
  },
})