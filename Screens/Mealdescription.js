import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { GlobalStyles } from "../constants";

export default function MealDescription() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>Food description</Text>
        <Ionicons name="heart" size={24} color="red" />
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/orangedish.jpg")}
        />
      </View>

      {/* Content */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Escovich ingredients</Text>

        <View style={styles.ingredientsRow}>
          <View>
            <Text style={styles.item}>• Onions</Text>
            <Text style={styles.item}>• Garlic</Text>
            <Text style={styles.item}>• Vegetable oil</Text>
            <Text style={styles.item}>• Thyme</Text>
            <Text style={styles.item}>• Ginger</Text>
          </View>

          <View>
            <Text style={styles.item}>• Bay leaf</Text>
            <Text style={styles.item}>• Red pepper</Text>
            <Text style={styles.item}>• Yellow pepper</Text>
            <Text style={styles.item}>• Onion slices</Text>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.item}>
            Rinse fish; rub with lemon or lime, seasoned with salt and pepper or
            use your favorite seasoning. I used creole seasoning. Set aside or
            place in the oven to keep it warm until sauce is ready. In large
            skillet heat oil over medium heat, until hot, add the fish, cook
            each side- for about 5-7 minutes until cooked through and crispy on
            both sides. Remove fish and set aside ready...
            <Text style={{ fontFamily: "Rubik-bold" }}>View more</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.Primary_yellow,
    padding: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 16,
  },

  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: "white",
  },

  card: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },

  sectionTitle: {
    fontFamily: "Rubik-Extrabold",
    textAlign: "center",
    marginBottom: 16,
  },

  ingredientsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    fontFamily: "Rubik-light",
    marginBottom: 8,
  },
});
