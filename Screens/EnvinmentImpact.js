import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Button from "../ui/Button";
import { GlobalStyles } from "../constants";
export default function EnvironmentImpact() {
  return (
    <ScrollView style={styles.container}>


      <View style={styles.rowView}>
        <Text style={[styles.sectionTextLeft, styles.boldText]}>
          Impacts on Lake kivu
        </Text>

        <View style={styles.rowItem}>
          <Text style={styles.smallParag}>.Increased fish Population</Text>
          <Text style={styles.smallParag}>.Growth rate: 10–15% daily</Text>
          <Text style={styles.smallParag}>.Reduced overfishing impact</Text>
          <Text
            style={{
              backgroundColor: GlobalStyles.Secondary_green,
              borderRadius: 10,
              marginTop: 4,
              padding: 3,
              width: "50%",
            }}
          >
            About us
            <Ionicons name="arrow-forward" size={12} color={"black"} />
          </Text>
        </View>
      </View>
      <View style={styles.rowView}>
        <Text style={[styles.smallParag, styles.rowItem]}>
          “Aquasante monitors water quality and controls feeding to reduce
          waste, maintain oxygen levels, and support a healthy Lake Kivu
          ecosystem.”
        </Text>
        <Text style={[styles.rowItem, styles.boldText]}>
          Protecting Lake Kivu
        </Text>
      </View>
      <View style={styles.ImageMargin}

      >
        <View>
          <Image
            source={require("../assets/Images/oxgen.jpg")}
            style={styles.revealImage}
          />
        </View>
      </View>
      <View style={styles.greenback}>
        <Text style={styles.sectionTitle}>Envronomental Impact</Text>
        <Text style={styles.paragraph}>
          “Aquasante creates employment opportunities and ensures a reliable
          supply of fish for local markets. By promoting sustainable
          aquaculture, the program supports livelihoods while strengthening food
          security around Lake Kivu.”
        </Text>
      </View>
      <View style={[styles.rowView]}>
        <Image
          source={require("../assets/Images/Employment-1.jpg")}
          style={[styles.sectionIMage, { marginLeft: 12 }]}
        />
        <Image
          source={require("../assets/Images/Employment-2.jpg")}
          style={[styles.sectionIMage, { bottom: -40 }]}
        />
        <Image
          source={require("../assets/Images/Employment-3.jpg")}
          style={styles.sectionIMage}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom: 8,
    paddingTop: 20,
    flexDirection: "column",
  },
  sectionIMage: {
    height: 150,
    width: "30%",
    marginRight: 5,
    borderRadius: 10,
    marginTop: 18,
  },
  mainTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },

  revealImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  ImageMargin: {
    marginVertical: 20
  },
  rowView: {
    flexDirection: "row",
    marginBottom: 2,
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
    alignSelf: "center",
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
    fontSize: 12,
    lineHeight: 14,
  },

  greenback: { backgroundColor: GlobalStyles.Tertiary_green, borderRadius: 8 },
});
