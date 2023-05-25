import React from "react";
import { Image } from "react-native";
import styles from "./styles";
import { ContainerView, TaskTitle, TaskTitleSpan }  from './styles';

interface TaskTitleProps {
  title: string;
  titleSpan: string;
}

export const Title: React.FC<TaskTitleProps> = ({title, titleSpan}) => {
  return(
    <ContainerView>
      <Image
        style={styles.img}
        source={require("@assets/img/plant.png")}
      />
      
      <TaskTitle>
        {title}
        <TaskTitleSpan>{titleSpan}</TaskTitleSpan>
      </TaskTitle>
    </ContainerView>
  );
}