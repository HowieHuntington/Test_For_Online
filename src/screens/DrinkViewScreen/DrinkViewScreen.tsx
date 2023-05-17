import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from './DrinkViewScreen.styles';

const DrinkViewScreen: React.FC<DrinkViewScreenProps> = ({ route, navigation }) => {
  const { drink } = route.params;

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Image source={{uri: drink.imageUrl}} style={styles.drinkImage} />
      <Text style={styles.drinkLabel}>{drink.label} - {drink.price}</Text>
      <Text style={styles.drinkDescription}>{drink.description}</Text>
      <Button title="Add to Cart" onPress={() => {/* Add to Cart logic here */}} />
    </View>
  );
};

export default DrinkViewScreen;
