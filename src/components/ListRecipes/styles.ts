import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ContainerViewList = styled.View`
  align-items: center;
  justify-content: space-around;
  background-color: #D9D9D9;
  width: 150px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
`;

export default StyleSheet.create({
  imgFile: {
    width: 50,
    height: 50,
  },
  TextList: {
    fontSize: 16,
    color: '#FFF',
  },
});