import { Box, Menu } from "native-base";
import { Image, Pressable } from "react-native";
import styles from "./styles";

export const Filter = () => {
  return (
    <Box >
      <Menu trigger={triggerProps => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Image
              style={styles.imgFilter}
              source={require("@assets/img/filtro.png")}
            />
          </Pressable>
        );
      }}>
        <Menu.Item>Zero lactose</Menu.Item>
        <Menu.Item>Sem glúten</Menu.Item>
        <Menu.Item>Sem amendoim</Menu.Item>
      </Menu>
    </Box>
  );
}