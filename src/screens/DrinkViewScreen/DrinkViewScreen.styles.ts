import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  drinkImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  drinkLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  drinkDescription: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
