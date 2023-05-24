import { KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "@routes/app.routes";
import { Title } from "@components/Title";

export const Login = () => {
  const navigation = useNavigation<StackTypes>();

  const entrar = () => {
    navigation.navigate("account");
  }

  return (
    <KeyboardAvoidingView style={styles.backgroudContainer}>

      <View style={styles.containerLogo}>
        <Image
          source={require("@assets/img/banner.jpg")}
        />
      </View>

      <View style={styles.backgroudContainer}>

        <View style={styles.Container}>
          <View style={styles.titleContainer}>
            <Title />
          </View>

          <Text>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            autoCorrect={false}
          />
          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha"
          />

          <TouchableOpacity
            style={styles.btnSubmit}
          >
            <Text style={styles.textSubmit}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => entrar()}
          >
            <Text>Criar conta gratuita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}