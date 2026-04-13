import Ionicons from "@react-native-vector-icons/ionicons";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { GlobalStyles } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ui/Button";
import { ScrollView } from "react-native";

export default function Longvideos() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.rowView}>
        <Text style={{ alignSelf: "start", color: "white" }}>
          <Ionicons name="person" size={12} color={"black"} />
          <Text style={styles.paragraph}>Hi username</Text>
        </Text>
        <View>
          <Ionicons name="filter" />
        </View>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.mainTitle}>
          Learn Different Recipes with our chiefs
        </Text>
      </View>
      <View style={styles.rowView}>
        <TextInput placeholder="search you meals" style={styles.input} />
        <Button
          content={"search"}
          style={{
            backgroundColor: "orange",
            color: "white",
            fontFamily: "Rubik-Light",
            padding: 8,
            borderRadius: 8,
          }}
        />
      </View>
      <View
        style={[
          styles.rowView,
          {
            justifyContent: "flex-start",
            flex: 1,
            flexDirection: "column",
            gap: 8,
          },
        ]}
      >
        <ImageBackground
          source={require("../assets/Images/chief-1.jpg")}
          imageStyle={{ borderRadius: 10 }}
          style={{
            height: 150,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <LinearGradient
            colors={["black", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, height: "100%", width: "100%" }}
          >
            <View style={[styles.sectionTitle, { marginTop: 20 }]}>
              <Text style={styles.sectionTitle}>
                <Ionicons name="play" color={GlobalStyles.Tertiary_orange} />
                16mins Estovich{" "}
              </Text>
              <Text style={styles.whiteText}>Host:Chief Rama</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/Images/chief-1.jpg")}
          imageStyle={{ borderRadius: 10 }}
          style={{
            height: 150,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <LinearGradient
            colors={["black", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, height: "100%", width: "100%" }}
          >
            <View style={[styles.sectionTitle, { marginTop: 20 }]}>
              <Text style={styles.sectionTitle}>
                <Ionicons name="play" color={GlobalStyles.Tertiary_orange} />
                16mins Estovich{" "}
              </Text>
              <Text style={styles.whiteText}>Host:Chief Rama</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/Images/chief-1.jpg")}
          imageStyle={{ borderRadius: 10 }}
          style={{
            height: 150,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <LinearGradient
            colors={["black", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, height: "100%", width: "100%" }}
          >
            <View style={[styles.sectionTitle, { marginTop: 20 }]}>
              <Text style={styles.sectionTitle}>
                <Ionicons name="play" color={GlobalStyles.Tertiary_orange} />
                16mins Estovich{" "}
              </Text>
              <Text style={styles.whiteText}>Host:Chief Rama</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/Images/chief-1.jpg")}
          imageStyle={{ borderRadius: 10 }}
          style={{
            height: 150,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <LinearGradient
            colors={["black", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, height: "100%", width: "100%" }}
          >
            <View style={[styles.sectionTitle, { marginTop: 20 }]}>
              <Text style={styles.sectionTitle}>
                <Ionicons name="play" color={GlobalStyles.Tertiary_orange} />
                16mins Estovich{" "}
              </Text>
              <Text style={styles.whiteText}>Host:Chief Rama</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    height: 800,
    flexDirection: "column",
    backgroundColor: GlobalStyles.Primary_yellow,
  },
  sectionIMage: {
    height: 150,
    width: "30%",
    marginRight: 5,
    borderRadius: 10,
    marginTop: 18,
    alignSelf: "start",
  },
  mainTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 20,
    width: "75%",
    marginTop: 70,
    textAlign: "flex-start",
    marginBottom: 12,
  },

  revealImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },

  rowView: {
    flexDirection: "row",
    marginBottom: 2,
    justifyContent: "space-between",
  },
  input: {
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
    height: 30,
    backgroundColor: "black",
    color: "orange",
    fontFamily: "Rubik-Light",
    borderColor: "orange",
    borderWidth: 2,
    padding: 8,
  },

  rowItem: {
    height: 100,
    width: "50%",
    alignSelf: "center",
    marginRight: 8,
  },
  sectionTextRight: {
    flex: 1,
    justifyContent: "end",
  },
  sectionTextLeft: {
    flex: 1,
    justifyContent: "Start",
  },

  sectionTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 14,
    marginBottom: 4,
    color: GlobalStyles.Tertiary_orange,
    alignSelf: "start",
    paddingLeft: 4,

    marginTop: 10,
  },
  whiteText: {
    color: "white",
    textAlign: "start",
    alignSelf: "start",
  },
  boldText: {
    fontWeight: 700,
    color: GlobalStyles.Primary_grey,
  },
  paragraph: {
    fontFamily: "Rubik-Light",
    fontSize: 12,
    lineHeight: 16,
    padding: 4,
  },
  smallParag: {
    fontFamily: "Rubik-Light",
    fontSize: 10,
    lineHeight: 14,
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "'black",
  },
  blackBack: { backgroundColor: "#05040489" },
});
