import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants";
import Ionicons from "@react-native-vector-icons/ionicons";
import Button from "./Button";
export default function ContactUS() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.rowView,
          styles.smallMVertical,
          styles.smallMTop,
          {
            borderTopWidth: 1,
            borderTopColor: GlobalStyles.Secondary_grey,
            paddingTop: 10,
          },
        ]}
      >
        <View
          style={[
            styles.bordeR,

            {
              backgroundColor: GlobalStyles.Tertiary_green,
              flexDirection: "column",
              width: "30%",
              height: 60,
              padding: 2,
            },
          ]}
        >
          <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
            <View
              style={{
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <View style={[styles.paragraph, { textAlign: "center" }]}>
                <Ionicons
                  name="call"
                  size={16}
                  color={"black"}
                  style={{ marginHorizontal: "auto" }}
                />
                <Text style={styles.paragraph}>call</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={[
            styles.bordeR,

            {
              backgroundColor: GlobalStyles.Tertiary_green,
              flexDirection: "column",
              width: "30%",
              height: 60,
              padding: 2,
            },
          ]}
        >
          <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
            <View
              style={{
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <View style={[styles.paragraph, { textAlign: "center" }]}>
                <Ionicons
                  name="logo-whatsapp"
                  size={16}
                  color={"black"}
                  style={{ marginHorizontal: "auto" }}
                />
                <Text style={styles.paragraph}>whatsapp</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={[
            styles.bordeR,

            {
              backgroundColor: GlobalStyles.Tertiary_green,
              flexDirection: "column",
              width: "30%",
              height: 60,
              padding: 2,
            },
          ]}
        >
          <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
            <View
              style={{
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <View style={[styles.paragraph, { textAlign: "center" }]}>
                <Ionicons
                  name="mail"
                  size={16}
                  color={"black"}
                  style={{ marginHorizontal: "auto" }}
                />
                <Text style={styles.paragraph}>Email</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.smallMVertical,
          styles.smallMTop,
          pressed && styles.pressed,
        ]}
      >
        <Button
          content={
            <Text
              style={[
                styles.bigText,
                { justifyContent: "center", color: "white" },
              ]}
            >
              <Ionicons
                name="mail"
                size={20}
                color={"white"}
                style={styles.icon}
              />
              send message
            </Text>
          }
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "column", padding: 6 },

  mainTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 6,
  },
  Views: {
    marginVertical: 12,
  },
  icon: {
    marginHorizontal: 4,
  },
  smallT: {
    fontFamily: "Rubik-regular",
    fontSize: 12,
  },
  smallMVertical: {
    marginVertical: 8,
  },
  largeMTop: {
    marginTop: 50,
  },
  smallMTop: {
    marginTop: 8,
  },
  label: {
    borderWidth: 2,

    borderColor: GlobalStyles.Tertiary_grey,
  },
  Rubik: {
    fontFamily: "Rubik-Light",
    fontSize: 16,
  },
  bold: {
    fontFamily: "Rubik-semibold",
    fontWeight: 700,
  },
  graph: {
    alignSelf: "center",
    marginTop: 50,
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  whiteT: {
    color: "white",
  },
  greyT: {
    color: GlobalStyles.Secondary_grey,
  },
  greenT: {
    color: GlobalStyles.Secondary_green2,
  },
  smallText: {
    fontSize: 10,
    fontFamily: "Rubik-Ligiht",
  },
  whiteText: {
    color: GlobalStyles.Seconndary_blue,
  },
  yellow: {
    color: GlobalStyles.Primary_yellow,
  },
  blackBg: {
    backgroundColor: "black",
  },
  cards: {
    alignSelf: "flex-end",
    flexDirection: "row",
    margin: 8,
    paddingRight: 4,

    width: "70%",
  },
  rowItem: {
    flexDirection: "column",
    width: "45%",
    paddingHorizontal: 4,
    alignItems: "flex-start",
    padding: 4,
  },
  revealImage: {
    height: 200,

    marginBottom: 16,
  },

  headerCard: {
    backgroundColor: GlobalStyles.Tertiary_grey,

    margin: 6,
    borderWidth: 1,

    backgroundColor: GlobalStyles.Tertiary_grey,
  },
  rowView: {
    flexDirection: "row",
    width: "100%",
    gap: 2,
    justifyContent: "space-between",
    paddingHorizontal: 4,
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
  },
  headerTitle: {
    fontFamily: "Rubik-semibold",
    fontSize: 18,
    paddingBottom: 4,
  },
  sectionTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 22,
    alignSelf: "start",

    marginBottom: 8,
  },

  bigText: {
    fontSize: 20,
    fontFamily: "Rubik-Light",
    marginRight: 20,
  },
  paragraph: {
    fontFamily: "Rubik-Light",
    fontSize: 16,
    lineHeight: 16,
  },
  button: {
    backgroundColor: GlobalStyles.Primary_yellow,
    alignSelf: "start",
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
  },
  blackBg: {
    backgroundColor: GlobalStyles.Secondary_black,
  },
  bordeR: {
    borderRadius: 12,
    overflow: "hidden",
  },
  button: {
    backgroundColor: GlobalStyles.Secondary_green,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
});
