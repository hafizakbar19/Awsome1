import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
        <Text style={styles.heading}>Cards playground</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Noor</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
          <Text>Ziarat</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
          <Text>Akbar</Text>
          </View>
      </View>
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
        color: 'black',
        fontWeight: 'bold'
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