import { Text, Image } from "react-native";
import styles, { ContainerViewList } from "./styles";

export const ListRecipes = () => {
  return(
    <ContainerViewList>
      <Image
        style={styles.imgFile}
        source={require("@assets/img/add.png")}
      />
      <Text style={styles.TextList}>
        Pasta: lacto free
      </Text>
      
    </ContainerViewList>
  );
}