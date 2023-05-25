import styled from 'styled-components/native';

export const ContainerView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TaskTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const TaskTitleSpan = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2b7e1f;
`;

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
});