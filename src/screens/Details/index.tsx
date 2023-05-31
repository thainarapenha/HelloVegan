import { Box } from "native-base";
import { Text, Image, FlatList } from "react-native";
import { AppBar } from "@react-native-material/core";
import styles, { DetailsContainer } from "./styles";

export const Details = () => {
  return (
    <DetailsContainer>
      <AppBar style={styles.titleContainer}
        title="Macarronada"
        transparent
        leading={
          <Image
            style={styles.imgFood}
            source={require('@assets/img/prato.png')}
          />
        }
      />

      <Box style={styles.containerDetails}>
        <Text style={styles.textIngredientes}>
          Ingredientes
        </Text>

        <FlatList
          data={[
            { key: '- 250g de Macarrão spaguett' },
            { key: '- 2 Tomates cereja ' },
            { key: '- 1/2 Beringela' },
            { key: '- Folhas de manjericão' },
          ]}
          renderItem={({ item }) => (
            <Text numberOfLines={2} style={styles.item}>
              {item.key}
            </Text>
          )}
        />
      </Box>
    </DetailsContainer>
  );
}