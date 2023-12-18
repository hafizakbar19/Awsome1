import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
        image: require('../images/flower.jpeg'), 
      id: 1,
      name: 'Akbar',
      number: 3099551986,
      age: 35,
    },
    {
        image: require('../images/flower.jpeg'),
      id: 2,
      name: 'Ali',
      number: 3099551986,
      age: 35,
    },
    {
        image: require('../images/flower.jpeg'),
      id: 3,
      name: 'Ahmed',
      number: 3099551986,
      age: 35,
    },
    {
        image: require('../images/flower.jpeg'),
      id: 4,
      name: 'Khan',
      number: 3099551986,
      age: 35,
    }
  ];

  return (
    <View>
      <Text>ContactList</Text>
      {/* Render each contact */}
      {contacts.map((contact) => (
          <View key={contact.id}>
            <Image source={contact.image} style={{ width: 50, height: 50, borderRadius: 50,}} />
          <Text>Name: {contact.name}</Text>
          <Text>Number: {contact.number}</Text>
          <Text>Age: {contact.age}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
