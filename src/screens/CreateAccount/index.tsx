import React from "react";
import styles from "./styles";
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "@routes/app.routes";
import { Title } from "@components/Title";

export const CreateAccount = () => {
  const navigation = useNavigation<StackTypes>();

  const finalizarCadastro = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "dashboard"}]
    })
  }

  return(
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.containerLogo}>
        <Image
          source={require("@assets/img/banner.jpg")}
        />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.Container}>
          <View style={styles.titleContainer}>
            <Title title={"Vamos criar sua "} titleSpan={"Conta!"} />
          </View>

          <Text>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: João Pedro Alves"
            autoCorrect={false}
          />

          <Text>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="joaopedro@email.com"
            autoCorrect={false}
          />

          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Defina sua senha"
          />

          <Text>Confirme sua senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirme sua senha"
          />

          <TouchableOpacity style={styles.btnSubmit}  
            onPress={() => finalizarCadastro()}
          >
            <Text style={styles.textSubmit}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}