import React from "react";
import styles from "@screens/CreateAccount/styles";
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { TitleAccount } from "@components/TitleAccount";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "@routes/app.routes";

export const CreateAccount = () => {
  const navigation = useNavigation<StackTypes>();

  const finalizarCadastro = () => {
    // navigation.navigate("account");
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
            <TitleAccount />
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