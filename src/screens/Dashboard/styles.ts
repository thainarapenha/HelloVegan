import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#22252a',
    width: '100%',
  },
  titleContainer : {
    marginTop: '15%',
    width: '80%',
  },
  TextPage: {
    fontSize: 20,
    color: '#FFF',
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '80%',
  },
  input : {
    width: '80%',
    height: 40,
    color: '#222',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
  imgFilter: {
    width: 30,
    height: 30,
    padding: 20,
    borderRadius: 4,
    backgroundColor: 'orange',
  },
  pratosContainer: {
    width: '80%',
    marginTop: '10%',
  },
  TextPratos: {
    fontSize: 14,
    color: '#FFF',
  },
});