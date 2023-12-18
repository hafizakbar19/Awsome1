import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const App = () => {

  const images = {
    image : require('./images/akbar.png'),
    image1 : require('./images/kids1.jpg'),
    image2 : require('./images/kids.jpg')
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard />
      <ElevatedCards />
      <FancyCard imager={images.image}/>
      <FancyCard imager1={images.image1} />
      <FancyCard imager2={images.image2}/>
      <ActionCard imager1={images.image1}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App