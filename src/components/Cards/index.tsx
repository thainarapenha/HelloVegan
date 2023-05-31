import React, { useState } from "react";
import { Text, Image, Button } from "react-native";
import styles, { ContainerView } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "@routes/app.routes";

export const Cards = () => {
  const navigation = useNavigation<StackTypes>();

  const OpenDetails = () => {
    navigation.navigate('details')
  }

  return (
    <ContainerView>
      <Image
        style={styles.imgPrato}
        source={require("@assets/img/prato.png")}
      />
      <Text style={styles.TextTitle}>
        Macarronada
      </Text>

      <Button
        title="Ver mais"
        onPress={() => OpenDetails()}
      />
      
    </ContainerView>
  );
}