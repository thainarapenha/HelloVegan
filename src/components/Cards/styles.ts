import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#141519',
    width: 150,
    height: 200,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  priceContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
  TextTitle: {
    fontSize: 16,
    color: '#FFF',
  },
  TextPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  imgAdd: {
    width: 20,
    height: 20,
    borderRadius: 60,
    backgroundColor: 'orange',
  },
  imgPrato: {
    width: 120,
    height: 110,
  },
});