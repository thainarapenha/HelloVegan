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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '15%',
    width: '90%',
  },
  TextPage: {
    width: '90%',
    fontSize: 20,
    color: '#FFF',
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '90%',
  },
  input : {
    width: '80%',
    height: 40,
    color: '#222',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
  pratosContainer: {
    width: '90%',
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