import { View, Text, Pressable } from "react-native";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GlobalStyles } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Accordion from "../ui/Accordion";
export default function Menu() {
  const [expanded, setExpanded] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  function handleShowMore(isShowing) {
    console.log(isShowing);
    setIsShowing(!isShowing);
  }

  const navigation = useNavigation();
  function navigationHandler(prop) {
    navigation.navigate(prop);
  }

  return (
    <ScrollView>
      <LinearGradient
        colors={["#0E87CC", "white", "white"]}
        style={{ flexDirection: "column" }}
      >
        <View
          style={[styles.container, { width: "100%", padding: 12, flex: 1 }]}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 8,
              justifyContent: "space-between",
            }}
          >
            <View style={styles.row}>
              <Ionicons
                name="person"
                size={15}
                color={GlobalStyles.Secondary_black}
              />

              <Text>_names _user </Text>
            </View>
            <Pressable
              onPress={() => {
                navigationHandler("Communication");
              }}
              style={[]}
            >
              <View>
                <Ionicons
                  name={"notifications"}
                  size={30}
                  color={GlobalStyles.Tertiary_orange}
                />
              </View>
            </Pressable>
          </View>

          <View style={{ flexDirection: "column", gap: 8, height: 500 }}>
            <View
              style={[{ flex: 1, flexDirection: "row", gap: 8, width: "100%" }]}
            >
              <Pressable
                onPress={() => {
                  navigationHandler("product");
                }}
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    backgroundColor: "white",
                    flex: "1",
                    width: "100%",
                    marginHorizontal: "auto",
                    alignItems: "center",
                    paddingVertical: 2,
                    gap: 25,
                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
              >
                <View style={{ gap: 25 }}>
                  <View
                    style={[
                      { justifyContent: "space-between", flexDirection: "row" },
                    ]}
                  >
                    <Ionicons
                      name="fish"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />
                  </View>
                  <View style={{ marginBottom: 8 }}>
                    <Text style={[styles.RubikExtrabold]}>Product</Text>
                  </View>
                </View>
              </Pressable>
            </View>
            <View
              style={[{ flex: 1, flexDirection: "row", gap: 8, width: "100%" }]}
            >
              <Pressable
                onPress={() => {
                  navigationHandler("wholeSale");
                }}
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    backgroundColor: "white",
                    flex: "1",
                    width: "50%",
                    gap: 25,
                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
              >
                <View style={{ gap: 25 }}>
                  <View
                    style={[
                      { justifyContent: "space-between", flexDirection: "row" },
                    ]}
                  >
                    <Ionicons
                      name="bag"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />

                    <Text
                      style={[
                        {
                          backgroundColor: GlobalStyles.Seconndary_blue,
                          color: GlobalStyles.Primary_blue,
                          borderRadius: 10,
                        },
                        styles.padd,
                        styles.extrabold,
                      ]}
                    >
                      23
                    </Text>
                  </View>

                  <Text style={[styles.RubikExtrabold]}>
                    wholeSale/Bulk cliens
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigationHandler("logis");
                }}
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    backgroundColor: "white",
                    flex: "1",
                    width: "50%",
                    gap: 25,
                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
              >
                <View style={{ gap: 25 }}>
                  <View
                    style={[
                      { justifyContent: "space-between", flexDirection: "row" },
                    ]}
                  >
                    <Ionicons
                      name="car"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />

                    <Text
                      style={[
                        {
                          backgroundColor: GlobalStyles.Seconndary_blue,
                          color: GlobalStyles.Primary_blue,
                          borderRadius: 10,
                        },
                        styles.padd,
                        styles.extrabold,
                      ]}
                    >
                      New
                    </Text>
                  </View>
                  <View style={{ marginBottom: 8 }}>
                    <Text style={[styles.RubikExtrabold]}>
                      Logistics and Harvesting
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>

            <View style={[{ flex: 1, flexDirection: "row", gap: 8 }]}>
              <Pressable
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    flex: "1",
                    width: "50%",
                    backgroundColor: "white",
                    gap: 25,

                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
                onPress={() => {
                  navigationHandler("meals");
                }}
              >
                <View style={{ gap: 25 }}>
                  <View
                    style={[
                      {
                        justifyContent: "space-between",
                        flexDirection: "row",
                      },
                    ]}
                  >
                    <Ionicons
                      name="fish"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />

                    <Text
                      style={[
                        {
                          backgroundColor: GlobalStyles.Seconndary_blue,
                          color: GlobalStyles.Primary_blue,
                          borderRadius: 10,
                        },
                        styles.padd,
                        styles.extrabold,
                      ]}
                    >
                      New-video
                    </Text>
                  </View>

                  <Text style={[styles.RubikExtrabold]}>Fish-Meals</Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    backgroundColor: "white",
                    flex: "1",
                    width: "50%",
                    gap: 25,
                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
                onPress={() => {
                  navigationHandler("fishLife");
                }}
              >
                <View
                  style={[
                    {
                      gap: 25,
                    },
                  ]}
                >
                  <View
                    style={[
                      { justifyContent: "space-between", flexDirection: "row" },
                    ]}
                  >
                    <Ionicons
                      name="water"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />

                    <Text
                      style={[
                        {
                          backgroundColor: GlobalStyles.Seconndary_blue,
                          color: GlobalStyles.Primary_blue,
                          borderRadius: 10,
                        },
                        styles.padd,
                        styles.extrabold,
                      ]}
                    >
                      Aqua-life
                    </Text>
                  </View>

                  <Text style={[styles.RubikExtrabold]}>Fish-Life</Text>
                </View>
              </Pressable>
            </View>

            <View style={[{ flex: 1, flexDirection: "row", gap: 8 }]}>
              <Pressable
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    backgroundColor: "white",
                    flex: "1",
                    width: "50%",
                    gap: 25,
                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
                onPress={() => {
                  navigationHandler("OurImpact");
                }}
              >
                <View style={{ gap: 25 }}>
                  <View
                    style={[
                      { justifyContent: "space-between", flexDirection: "row" },
                    ]}
                  >
                    <Ionicons
                      name="planet"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />

                    <Text
                      style={[
                        {
                          backgroundColor: GlobalStyles.Seconndary_blue,
                          color: GlobalStyles.Primary_blue,
                          borderRadius: 10,
                        },
                        styles.padd,
                        styles.extrabold,
                      ]}
                    >
                      23
                    </Text>
                  </View>

                  <Text style={[styles.RubikExtrabold]}>
                    Environment impact
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.padd,
                  styles.BorderRounded,
                  {
                    backgroundColor: "white",
                    flex: "1",
                    width: "50%",
                    gap: 25,
                    borderColor: GlobalStyles.Primary_grey,
                  },
                ]}
                onPress={() => {
                  navigationHandler("bookmarks");
                }}
              >
                <View style={{ gap: 25 }}>
                  <View
                    style={[
                      { justifyContent: "space-between", flexDirection: "row" },
                    ]}
                  >
                    <Ionicons
                      name="bookmark"
                      size={20}
                      color={GlobalStyles.Primary_yellow}
                    />

                    <Text
                      style={[
                        {
                          backgroundColor: GlobalStyles.Seconndary_blue,
                          color: GlobalStyles.Primary_blue,
                          borderRadius: 10,
                        },
                        styles.padd,
                        styles.extrabold,
                      ]}
                    >
                      23
                    </Text>
                  </View>

                  <Text style={[styles.RubikExtrabold]}>Bookmarked/Liked</Text>
                </View>
              </Pressable>
            </View>
            <View>
              {isShowing && <Text>More items....,box of ideas,</Text>}
            </View>
            <Pressable
              onPress={() => {
                handleShowMore(isShowing);
              }}
              style={[
                styles.padd,
                { borderRadius: 20, borderWidth: 2, justifyContent: "center" },
              ]}
            >
              <View style={{ gap: 25 }}>
                <Text style={{ margin: "auto", alignSelf: "center" }}>
                  {isShowing ? `View less` : `View more`}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <Text
          style={[
            { paddingHorizontal: 14 },
            styles.smallMVertical,
            styles.sectionTitle,
          ]}
        >
          <Ionicons
            name={"people"}
            color={GlobalStyles.Secondary_green}
            size={20}
            style={styles.icon}
          />
          what buyers say
        </Text>
        <Accordion expanded={true} setExpandedanded={setExpanded} />
        <Accordion expanded={expanded} setExpanded={setExpanded} />
      </LinearGradient>
    </ScrollView>
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
    alignSelf: "center",

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
    marginHorizontal: 4,
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
