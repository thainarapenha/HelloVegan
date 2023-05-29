import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ContainerView = styled.View`
  align-items: center;
  justify-content: space-around;
  background-color: #141519;
  width: 150px;
  height: 200px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
`;

export default StyleSheet.create({
  TextTitle: {
    fontSize: 16,
    color: '#FFF',
  },
  imgPrato: {
    width: 120,
    height: 110,
  },
});