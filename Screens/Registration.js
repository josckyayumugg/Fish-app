import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import Button from "../ui/Button"; // Make sure this path is correct
import { GlobalStyles } from "../constants";

export default function Registration() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 50, // Added padding instead of gap for the top text
      }}
    >
      <Text
        style={{
          marginBottom: 20,
          fontWeight: "ultralight",
          fontSize: 15,
          color: "black",
          paddingVertical: 10,

          fontFamily: "Rubik-extrabold",
        }}
      >
        Welcome to a fish Experience
      </Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/Images/fish-hills2.jpg")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50, // Correct way to make a circle
            borderWidth: 4,
            borderColor: "black",
          }}
        />
        <Text
          style={{
            fontFamily: "Rubik-Light",
            fontWeight: "800",
            marginTop: 15,
          }}
        >
          AquaSante
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",

          borderRadius: 10,
          borderWidth: 5,
          borderColor: "black",
          paddingHorizontal: 30,
          paddingVertical: 15,
          marginTop: 160, // Reduced from 200px so it fits on screen
          width: "90%", // Ensures it has a consistent width
        }}
      >
        {/* Name Input Row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text style={styles.whiteText}>Names: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={{ color: "black", flex: 1 }}
              placeholder="Enter name"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Branch Input Row */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.whiteText}>Branch: </Text>
          <View style={styles.inputContainer}>
            {/* Note: Ensure 'Selection' is imported or use TextInput */}
            <TextInput
              style={{ color: "black", flex: 1 }}
              placeholder="Branch name"
              placeholderTextColor="#999"
            />
          </View>
        </View>
      </View>
      <Button
        content={"GetStarted"}
        style={{
          color: GlobalStyles.Primary_yellow,
          fontFamily: "Rubik-Light",
          backgroundColor: "black",
          marginTop: 40,
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: "black",
    fontFamily: "Rubik-Light",
    width: 60, // Gives labels consistent width
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flex: 1,
    marginLeft: 10,
  },
});
