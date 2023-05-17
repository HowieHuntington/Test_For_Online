import React from 'react';
import { View, FlatList } from 'react-native';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const drinks: Drink[] = [
  {
    drinkId: '1',
    price: '$6',
    label: 'Mojito',
    description: '',
    imageUrl: 'https://example.com/mojito.jpg',
  },
  {
    drinkId: '2',
    price: '$7',
    label: 'Old Fashioned',
    description: '',
    imageUrl: 'https://example.com/oldfashioned.jpg',
  },
  {
    drinkId: '3',
    price: '$5',
    label: 'Heinekin',
    description: '',
    imageUrl: 'https://example.com/oldfashioned.jpg',
  },
  {
    drinkId: '4',
    price: '$4',
    label: 'Bud Light',
    description: '',
    imageUrl: 'https://example.com/oldfashioned.jpg',
  },
  {
    drinkId: '5',
    price: '$5',
    label: 'Pacifico',
    description: '',
    imageUrl: 'https://example.com/oldfashioned.jpg',
  },
  {
    drinkId: '6',
    price: '$10',
    label: 'Manhattan',
    description: '',
    imageUrl: 'https://example.com/oldfashioned.jpg',
  },
];

const numColumns = 2;

type NavigationProp = StackNavigationProp<DrinkStackParamList, 'Drinks'>;

const DrinkMenuScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <FlatList
      data={drinks}
      renderItem={({ item }) => (
        <DrinkCard
          drinkId={item.drinkId}
          price={item.price}
          label={item.label}
          imageUrl={item.imageUrl}
          onCardPress={() => navigation.navigate('Drink View', { drink: item })}
        />
      )}
      keyExtractor={item => item.drinkId}
      numColumns={numColumns}
    />
  );
};

export default DrinkMenuScreen;
