import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  price: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});