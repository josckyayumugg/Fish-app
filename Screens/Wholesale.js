import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { GlobalStyles } from "../constants";
import Accordion from "../ui/Accordiiont";
import { useState } from "react";
import Button from "../ui/Button";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function Wholesale() {
  const [ActiveId, setActiveId] = useState(1);
  function handleToggle(currentId) {
    setActiveId((prevId) => (prevId === currentId ? null : currentId));
  }
  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.bordeR,

          {
            borderColor: GlobalStyles.Tertiary_orange,
            borderWidth: 1,
            padding: 12,
          },
        ]}
      >
        <Text style={[styles.bigText, styles.bold]}>Pricing Tiers</Text>
        <View
          style={[
            styles.bordeR,
            styles.smallMVertical,
            styles.smallMTop,

            { marginTop: 10 },
          ]}
        >
          <View
            style={[
              styles.paragraph,
              styles.padding,
              styles.bold,

              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                padding: 8,
              },
            ]}
          >
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <Text style={[{}, styles.bold, styles.bigText]}>0-50 kgs</Text>
              <Text
                style={[
                  { paddingVertical: 4, color: GlobalStyles.Secondary_green },
                  styles.bold,
                  styles.bigText,
                ]}
              >
                0%
              </Text>
            </View>
            <View
              style={[
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                },
              ]}
            >
              <Text style={styles.paragraph}>2,800 Rwf/kg</Text>
              <Text
                style={[
                  { paddingRight: 18, color: GlobalStyles.Tertiary_orange },
                  styles.bold,
                ]}
              >
                OFF
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.paragraph,
              styles.padding,
              styles.bold,

              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                padding: 8,
              },
            ]}
          >
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", marginTop: 10 },
              ]}
            >
              <Text
                style={[{ paddingVertical: 4 }, styles.bold, styles.bigText]}
              >
                51-100 kgs
              </Text>
              <Text
                style={[
                  { paddingVertical: 4, color: GlobalStyles.Secondary_green },
                  styles.bold,
                  styles.bigText,
                ]}
              >
                5%
              </Text>
            </View>
            <View
              style={[
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                },
              ]}
            >
              <Text style={styles.paragraph}>2660 Rwf/kg</Text>
              <Text
                style={[
                  { paddingRight: 18, color: GlobalStyles.Tertiary_orange },
                  styles.bold,
                ]}
              >
                OFF
              </Text>
            </View>
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", marginTop: 20 },
              ]}
            >
              <Text
                style={[{ paddingVertical: 4 }, styles.bold, styles.bigText]}
              >
                101-150 kgs
              </Text>
              <Text
                style={[
                  { paddingVertical: 4, color: GlobalStyles.Secondary_green },
                  styles.bold,
                  styles.bigText,
                ]}
              >
                10%
              </Text>
            </View>
            <View
              style={[
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                },
              ]}
            >
              <Text style={styles.paragraph}>2520 Rwf/kg</Text>
              <Text
                style={[
                  { paddingRight: 18, color: GlobalStyles.Tertiary_orange },
                  styles.bold,
                ]}
              >
                OFF
              </Text>
            </View>
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", marginTop: 20 },
              ]}
            >
              <Text
                style={[{ paddingVertical: 4 }, styles.bold, styles.bigText]}
              >
                250-500kgs
              </Text>
              <Text
                style={[
                  { paddingVertical: 4, color: GlobalStyles.Secondary_green },
                  styles.bold,
                  styles.bigText,
                ]}
              >
                15%
              </Text>
            </View>
            <View
              style={[
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                },
              ]}
            >
              <Text style={styles.paragraph}>2380 Rwf/kg</Text>
              <Text
                style={[
                  { paddingRight: 18, color: GlobalStyles.Tertiary_orange },
                  styles.bold,
                ]}
              >
                OFF
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.smallMVertical, styles.smallMTop]}>
        <Text
          style={[
            styles.bigText,
            styles.bold,
            styles.smallMVertical,
            { marginTop: 18 },
          ]}
        >
          Frequently asked questions
        </Text>
        <Accordion
          Title={"what is the minimum order quantity for wholesale?"}
          body={
            "Minimum order is 15kgs. For bulk orders above 500kgs, we offer special pricing and dedicatedd logisic support"
          }
          id={2}
          isOpen={ActiveId === 1}
          onPress={() => handleToggle(1)}
        />
        <Accordion
          Title={"How quickly is the delivery"}
          body={"Standard delivery in kingali:2-3ddays.upcounry 3-5days."}
          id={2}
          isOpen={ActiveId === 2}
          onPress={() => handleToggle(2)}
        />
        <Accordion
          Title={"Do you offer paymens plans for large orders"}
          body={
            "Yes orders above 250kgs qualify for 50/50 split payment(50% upfront,50% on delivery)."
          }
          id={3}
          isOpen={ActiveId === 3}
          onPress={() => handleToggle(3)}
        />
        <Accordion
          Title={"Do you offer paymens plans for large orders"}
          body={
            "Yes orders above 250kgs qualify for 50/50 split payment(50% upfront,50% on delivery)."
          }
          id={4}
          isOpen={ActiveId === 4}
          onPress={() => handleToggle(4)}
        />
        <Accordion
          Title={"Do you offer paymens plans for large orders"}
          body={
            "Yes orders above 250kgs qualify for 50/50 split payment(50% upfront,50% on delivery)."
          }
          id={5}
          isOpen={ActiveId === 5}
          onPress={() => handleToggle(5)}
        />
      </View>
      <View
        style={[styles.smallMVertical, styles.smallMVertical, { padding: 12 }]}
      >
        <Text style={[styles.bigText, styles.bold, styles.smallMVertical]}>
          Have a question
        </Text>
        <View
          style={[
            styles.row,
            styles.bordeR,
            {
              borderLeftColor: GlobalStyles.Primary_blue,
              borderLeftWidth: 2,
              padding: 12,
              paddingVertical: 32,
              marginTop: 8,
              borderWidth: 1,
              marginBottom: 30,

              borderColor: GlobalStyles.Secondary_grey,
            },
          ]}
        >
          <TextInput
            numberOfLines={3}
            style={[
              {
                width: "80%",
                height: 40,

                backgroundColor: "white",
                border: GlobalStyles.Secondary_green,
                paddingHorizontal: 4,
              },
              styles.bordeR,
            ]}
          ></TextInput>
          <Button
            content={
              <Ionicons
                name="send"
                size={40}
                color={"white"}
                style={[
                  styles.icon,
                  { backgroundColor: GlobalStyles.Primary_blue },
                ]}
              />
            }
          />
        </View>
        <View
          style={[
            {
              backgroundColor: GlobalStyles.Tertiary_orange,

              flexDirection: "column",
              alignContent: "center",
              padding: 12,
            },
            styles.smallMVertical,
            styles.smallMTop,
            styles.bordeR,
          ]}
        >
          <Text style={[styles.whiteT, styles.headerTitle]}>
            Need Custom Pricing?
          </Text>
          <Text style={[styles.whiteT, styles.paragraph]}>
            Contact our wholesale team for orders above 500kg?
          </Text>
          <Button
            content={"contact sales Team"}
            style={[
              styles.orangeT,
              styles.bordeR,
              styles.smallMVertical,
              styles.paragraph,
              { padding: 12, backgroundColor: "white" },
            ]}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", padding: 6 },

  mainTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 35,
    textAlign: "start",
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
  orangeT: {
    color: GlobalStyles.Tertiary_orange,
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
    gap: 8,
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
  darkGreyT: {
    color: GlobalStyles.quaternary_grey,
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
    lineHeight: 20,
  },
  paragraph: {
    fontFamily: "Rubik-Light",
    fontSize: 16,
    lineHeight: 15,
    lineHeight: 20,
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
    borderRadius: 14,
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
