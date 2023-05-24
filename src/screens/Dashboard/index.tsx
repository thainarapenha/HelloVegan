import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

export const Dashboard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.TextPage}>Descubra receitas que combinam</Text>
        <Text style={styles.TextPage}>com seu estilo de vida</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
        />
        <Image
          style={styles.imgFilter}
          source={require("@assets/img/filtro.png")}
        />
      </View>

      <View style={styles.pratosContainer}>
        <Text style={styles.TextPratos}>Comidas populares</Text>

        <View style={styles.pratosContainer}>
          <Text style={styles.TextPratos}>card</Text>
        </View>
      </View>
    </View>
  );
}