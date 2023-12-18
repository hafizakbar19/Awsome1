import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    const image = require('../images/kids.jpg');

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.heading}>ActionCard</Text>
      <View>
        <Image
        source={image}
        style={styles.imageStyle}
        />
      </View>
      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          perspiciatis animi reiciendis excepturi eum expedita asperiores odio
          voluptate molestiae veniam esse, debitis deleniti nam? Consequatur,
          dolorem hic, amet temporibus iusto molestias aspernatur ipsum vitae
          repellendus in iure beatae nihil fugiat accusantium id explicabo enim
          neque modi ipsam blanditiis? Error, distinctio.
        </Text>
      </View>
      <View>
        <Text style={styles.footer}>Card footer</Text>
        <TouchableOpacity
            onPress={()=>openWebsite('https://facebook.com')}
        >
            <Text>Tap here</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    imageStyle: {
        height: 400,
        width: '90%',
        margin: 15,
        borderRadius: 15
      },
      heading: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15
      },
      title: {
        fontSize: 25,
        margin: 15
      },
      description: {
        fontSize: 19,
        margin: 10
      },
      footer: {
        textAlign: 'center',
        margin: 5,
        fontSize: 13
      },
})