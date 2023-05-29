import React, { useState } from "react";
import { Text, Image, Button } from "react-native";
import styles, { ContainerView } from "./styles";
import { Provider, Dialog, DialogHeader, DialogContent, Stack, DialogActions } from "@react-native-material/core";

export const Cards = () => {
  const [visible, setVisible] = useState(false);

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
        title="Open Alert Dialog"
        onPress={() => setVisible(true)}
      />
      
      <Provider>
        <Dialog visible={visible} onDismiss={() => setVisible(true)}>
          <DialogHeader title="Dialog Header" />

          <DialogContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              eligendi inventore, laboriosam laudantium minima minus nesciunt
              pariatur sequi.
            </Text>
          </DialogContent>

          <DialogActions>
            <Button
              title="Ok"
              onPress={() => setVisible(false)}
            />
          </DialogActions>
        </Dialog>
      </Provider>
    </ContainerView>
  );
}