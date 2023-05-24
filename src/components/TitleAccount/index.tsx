import { View, Text, Image } from "react-native";
import styles from "./styles";

export const TitleAccount = () => {
  return(
    <View style={styles.TitleContainer}>
      <Image
        style={styles.img}
        source={require("@assets/img/plant.png")}
      />
      <Text style={styles.textTitle}>
        Vamos criar sua conta
      </Text>
    </View>
  );
}