import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export const Cards = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
          style={styles.imgPrato}
          source={require("@assets/img/prato.png")}
        />
      <Text style={styles.TextTitle}>Macarronada</Text>
    </View>
  );
}