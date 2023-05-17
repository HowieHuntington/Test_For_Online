
type Drink = {
    drinkId: string;
    price: string;
    label: string;
    description: string;
    imageUrl: string;
  };

  type DrinkViewScreenProps = {
    route: RouteProp<DrinkStackParamList, 'Drink View'>;
    navigation: StackNavigationProp<DrinkStackParamList, 'Drink View'>;
  };

  type DrinkCardProps = {
    drinkId: string;
    price: string;
    imageUrl: string;
    label: string;
    onCardPress: () => void;
  };