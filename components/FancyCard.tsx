import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard(props) {
//   const image = require('../images/akbar.png');
//   const image1 = require('../images/kids1.jpg');
//   const image2 = require('../images/kids.jpg');

  return (
    <View>
      <Text style={styles.heading}>FancyCard</Text>
      <Image source={props.imager || props.imager1 || props.imager2} style={styles.imageStyle} />
      <View>
        <Text style={styles.title}>Card Title</Text>
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
      </View>
    </View>
  );
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
});
