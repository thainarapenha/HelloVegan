import React, { useState } from "react";
import { Text, Image, Button } from "react-native";
import styles, { ContainerView } from "./styles";


export const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        onPress={() => setIsOpen(!isOpen)}
      />
      
    </ContainerView>
  );
}