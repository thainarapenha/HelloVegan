import React from "react";
import { Text, View, Image } from "react-native";
import { AppBar, Box } from "@react-native-material/core";
import styles, { AccountContainer } from "./styles";
import { ListRecipes } from "@components/ListRecipes";

export const UserAccount = () => {
  return (
    <AccountContainer >
      <AppBar style={styles.titleContainer}
        title="Fulano de Tal"
        transparent
        leading={
          <Image
            style={styles.imgUser}
            source={require('@assets/img/user.png')}
          />
        }
      />
      <Box style={styles.containerInfo}>
        <View style={styles.menuConteiner}>
          <Text style={styles.textFiles}>Meus post</Text>
          <Text style={styles.textFiles}>Minha lista</Text>
        </View>

        <View style={styles.containerPosts}>
          <ListRecipes/>
        </View>
      </Box>
    </AccountContainer>
  );
}