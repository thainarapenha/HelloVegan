import { View, Text, Image } from "react-native";
import styles from "./styles";

export const Title = () => {
  return(
    <View style={styles.TitleContainer}>
      <Image
        style={styles.img}
        source={require("@assets/img/plant.png")}
      />
      <Text style={styles.textTitle}>
        Hello
        <Text style={styles.textSpan}>Vegan!</Text>
      </Text>
    </View>
  );
}