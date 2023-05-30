import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const AccountContainer = styled.View`
  flex: 1;
  background-color: #22252a;
`;

export default StyleSheet.create({
  UserContainer: {
    width: '100%',
    backgroundColor: '#22252a',
  },
  titleContainer: {
    marginTop: '15%',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  imgUser: {
    width: 50,
    height: 50,
  },
  containerInfo: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FFF',
  },
  menuConteiner: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: '5%',
  },
  containerPosts: {
    width: '90%',
  },
  textFiles: {
    margin: 10,
  },
});