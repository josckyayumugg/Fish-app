import { ImageBackground } from "react-native";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { GlobalStyles } from "../constants";
import Button from "../ui/Button";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Logistics() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        {!isLoaded && <ActivityIndicator size="small" />}
        <ImageBackground
          source={require("../assets/Images/Transport-1.jpg")}
          style={{ width: "100%", height: 200 }}
          onLoad={() => {
            setIsLoaded(true);
          }}
          imageStyle={{ opacity: 1 }}
        >
          <View style={styles.cards}>
            <View style={styles.headerCard}>
              <Text style={styles.headerTitle}>.10 Branches</Text>
              <Text style={styles.headerTitle}>.Mon-Sat open </Text>
              <Text style={styles.headerTitle}>.20% discount </Text>
              <></>
            </View>
            <View style={styles.headerCard}>
              <Text style={styles.headerTitle}>.Contracts</Text>
              <Text style={styles.headerTitle}>.30+patterns</Text>
              <Text style={styles.headerTitle}>.Wholesale</Text>

              <Text></Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.bigText}>WholeSales </Text>
        <View style={styles.rowItem}>
          <Text style={styles.paragraph}>Free Delivery</Text>
          <Text style={styles.paragraph}>Discounts up to 20%</Text>
          <Text style={styles.paragraph}>We supply in large quantities</Text>
          <Text style={styles.paragraph}>Long Term Contracts</Text>
          <Pressable>
            <Button content={"Email us"} style={styles.button} />
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Where to find us</Text>
        <View style={[styles.yellowBg]}>
          <Text style={styles.sectionText}>
            <Ionicons
              name="location"
              size="12"
              color={GlobalStyles.Tertiary_orange}
            />
            Gasabo kimironko
          </Text>
          <Text style={styles.sectionText}>
            <Ionicons
              name="location"
              size="12"
              color={GlobalStyles.Tertiary_orange}
            />
            Batsinda
          </Text>
          <Text style={styles.sectionText}>
            <Ionicons
              name="location"
              size="12"
              color={GlobalStyles.Tertiary_orange}
            />
            Rusizi kamembe
          </Text>
          <Text style={styles.sectionText}>
            <Ionicons
              name="location"
              size="12"
              color={GlobalStyles.Tertiary_orange}
            />
            south-Nyanza
          </Text>
          <Text style={styles.sectionText}>
            <Ionicons
              name="location"
              size="12"
              color={GlobalStyles.Tertiary_orange}
            />
            East-Nyagatare near the market
          </Text>
        </View>
      </View>

      <View style={styles.rowView}>
        <View style={{ height: 100, width: "50%" }}>
          <Text
            style={{
              fontFamily: "Rubik-Semibold",
              fontWeight: 700,
              fontSize: 18,
              marginTop: 20,
              height: 50,
              width: "100%",
            }}
          >
            Transport
          </Text>
        </View>
        <View style={{ width: "50%", paddingRight: 8, height: 50 }}>
          <Text
            style={{ width: "100%", fontFamily: "Rubik-Light", fontSize: 18 }}
          >
            Favourable conditions are provided to fish during{" "}
            <Text style={{ color: GlobalStyles.Primary_blue }}>
              transportation
            </Text>
            to maintain fish life
          </Text>
        </View>
      </View>
      <View style={styles.graph}>
        {!isLoaded && <ActivityIndicator size="small" />}
        <Image
          source={require("../assets/Images/Logistics-1.jpg")}
          onLoad={() => {
            setIsLoaded(true);
          }}
          imageStyle={{ height: 50, width: 30 }}
        />
        <Text>A pie chart showing how logistics of at aquasante</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  mainTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },
  graph: {
    alignSelf: "center",
    marginTop: 50,
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 10,
    fontFamily: "Rubik-Ligiht",
  },
  whiteText: {
    color: GlobalStyles.Seconndary_blue,
  },
  blackBg: {
    backgroundColor: "black",
  },
  cards: {
    alignSelf: "flex-end",
    flexDirection: "row",
    margin: 8,
    paddingRight: 4,

    width: "50%",
  },
  rowItem: {
    flexDirection: "column",
  },
  revealImage: {
    height: 200,
    width: "100%",

    marginBottom: 16,
  },
  headerCard: {
    alignSelf: "flex-end",
    marginRight: 8,
    borderRadius: 4,
    borderColor: "white",
    paddingVertical: 4,
    backgroundColor: GlobalStyles.Primary_grey,
    width: "50%",
  },
  rowView: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginTop: 30,
  },

  sectionImage: {
    width: 110,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  sectionText: {
    flex: 1,
    marginBottom: 4,
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "Rubik-semibold",
    fontSize: 12,
    color: GlobalStyles.Primary_yellow,
  },
  sectionTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 14,
    alignSelf: "center",

    marginBottom: 8,
    color: GlobalStyles.Primary_yellow,
  },

  bigText: {
    fontSize: 20,
    fontFamily: "Rubik-Extrabold",
    marginRight: 20,
  },
  paragraph: {
    fontFamily: "Rubik-Light",
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    backgroundColor: GlobalStyles.Primary_yellow,
    alignSelf: "start",
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
  },
  yellowBg: {
    backgroundColor: GlobalStyles.Primary_yellow,
    padding: 8,
  },
});
