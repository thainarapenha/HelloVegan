import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const DetailsContainer = styled.View`
  flex: 1;
  background-color: #22252a;
`;

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#22252a',
  },
  titleContainer: {
    marginTop: '20%',
    marginBottom: '10%',
    marginLeft: '5%',
  },
  containerDetails: {
    flex:1,
    padding: '10%',
    borderRadius: 30,
    backgroundColor: '#FFF',
  },
  imgFood: {
    width: 105,
    height: 100,
  },
  textIngredientes: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});