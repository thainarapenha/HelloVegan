import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import { Cards } from "@components/Cards";
import { ScrollView } from "react-native-gesture-handler";
import { UserIcon } from "@components/UserIcon";

export const Dashboard = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.TextPage}>Descubra receitas que combinam com seu estilo de vida</Text>
          <UserIcon/>
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

          <View style={styles.pratosSection}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}