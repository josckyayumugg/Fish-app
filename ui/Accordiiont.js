import { GlobalStyles } from "../constants";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Ionicons from "@react-native-vector-icons/ionicons";

export default function Accordion({ id, body, Title, isOpen, onPress }) {
  return (
    <View style={{ padding: 2, flexDirection: "column" }}>
      <Pressable
        onPress={onPress}
        style={[
          styles.header,
          isOpen && styles.expandedHeader,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={[styles.paragraph, { marginBottom: 2 }]}>{Title}</Text>
          </View>
        </View>
        <Ionicons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </Pressable>

      {isOpen && (
        <View
          style={[
            styles.content,
            { backgroundColor: GlobalStyles.Secondary_yellow },
          ]}
        >
          <Text
            style={[
              { alignSelf: "end" },
          
              styles.paragraph,
              styles.italic,
            ]}
          >
            {body}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  padd: { paddingHorizontal: 8, paddingVertical: 8 },
  BorderRounded: { borderWidth: 2, borderRadius: 12 },
  RubikSEmibold: { fontFamily: "Rubik-semibold" },
  RubikBold: { fontFamily: "Rubik-Light" },
  RubikExtrabold: { fontFamily: "Rubik-extrabold" },
  RubikRegular: { fontFamily: "Rubik-regular" },
  container: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.Secondary_grey,
    borderRadius: 12,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  expandedHeader: {},
  title: {
    borderBottomEndRadius: 14,
    fontSize: 18,
    fontFamily: "Rubik-semibold",
  },
  content: {
    padding: 15,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    backgroundColor: GlobalStyles.Tertiary_grey,
    flexDirection: "column",
  },
  container: { flex: 1, flexDirection: "column", padding: 6 },

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
    marginHorizontal: 6,
  },
  smallT: {
    fontFamily: "Rubik-regular",
    fontSize: 12,
  },
  smallMVertical: {
    marginVertical: 8,
  },
  italic: {
    fontFamily: "Rubik-italic",
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
