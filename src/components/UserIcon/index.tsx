import { Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "@routes/app.routes";

export const UserIcon = () => {
  const navigation = useNavigation<StackTypes>();

  const OpenAccountUser = () => {
    navigation.navigate('user')
  }

  return (
    <>
      <Pressable
        onPress={() => OpenAccountUser()}
      >
        <Image
          style={styles.imgUser}
          source={require('@assets/img/user.png')}
        />
      </Pressable>
    </>
  );
}