import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './DrinkViewScreen.styles';

// type RootStackParamList = {
//   Drink: { drink: Drink };
// };

// type DrinkViewScreenRouteProp = RouteProp<RootStackParamList, 'Drink'>;

// type DrinkViewScreenProps = {
//   route: DrinkViewScreenRouteProp;
// };

const DrinkViewScreen: React.FC<DrinkViewScreenProps> = ({ route }) => {
  const { drink } = route.params;

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity> */}
      {/* <Image source={{uri: drink.imageUrl}} style={styles.drinkImage} /> */}
      <Text style={styles.drinkLabel}>{drink.label} - {drink.price}</Text>
      <Text style={styles.drinkDescription}>{drink.description}</Text>
    </View>
  );
};

export default DrinkViewScreen;
