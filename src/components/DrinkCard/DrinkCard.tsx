import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './DrinkCard.styles';

const DrinkCard: React.FC<DrinkCardProps> = ({ drinkId, price, label, imageUrl, onCardPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress}>
      <Text style={styles.price}>{price}</Text>
      <Image source={{ uri: imageUrl }} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DrinkCard;
