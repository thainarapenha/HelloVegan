import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  background-color: #F0F0F0;
  flex: 1;
`;

export default StyleSheet.create({
  mainContainer: {
    paddingTop: '5%',
    paddingBottom: '10%',
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
  pratosSection: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextPratos: {
    fontSize: 14,
    color: '#FFF',
  },
});