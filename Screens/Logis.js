import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants";
import { ScrollView } from "react-native";
import { useState } from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { ImageBackground } from "react-native";
import { ActivityIndicator } from "react-native";
import Button from "../ui/Button";
import { StackScreenLifecycleState } from "react-native-screens";
import Accordion from "../ui/Accordion";

export default function Logis() {
  const [expanded, setExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {" "}
      <ScrollView style={{ paddingHorizontal: 12, paddingTop: 12 }}>
        <View
          style={[
            {
              height: 400,
              flexDirection: "column",
            },
            styles.bordeR,
          ]}
        >
          <View style={{ height: 200 }}>
            <View>
              {!isLoaded && (
                <ActivityIndicator
                  size="small"
                  style={{ alignSelf: "center", marginVertical: "auto" }}
                />
              )}
              <ImageBackground
                source={require("../assets/Images/Transport-1.jpg")}
                style={{ width: "100%", height: 200 }}
                onLoad={() => {
                  setIsLoaded(true);
                }}
                imageStyle={{ opacity: 1 }}
              ></ImageBackground>
            </View>
          </View>
          <View
            style={[
              {
                backgroundColor: GlobalStyles.Primary_yellow,
                height: 200,
                borderBottomEndRadius: 14,
                borderBottomStartRadius: 14,
                flexDirection: "column",
                justifyContent: "start",
                padding: 14,
              },
            ]}
          >
            <Text style={styles.sectionTitle}>
              Nationwide distribution Network
            </Text>
            <Text
              style={[
                styles.paragraph,
                styles.darkGreyT,
                styles.smallMVertical,
              ]}
            >
              We supply premium fish with trasnport conditions to 10+ locations
              across Rwanda
            </Text>
            <View style={[styles.row, styles.smallMTop]}>
              <Pressable
                style={({ pressed }) => [
                  styles.smallMTop,
                  pressed && styles.pressed,
                ]}
              >
                <Button
                  content={"Free delivery(100+kgs orders)"}
                  style={[
                    {
                      backgroundColor: GlobalStyles.Secondary_green,
                      padding: 8,
                    },
                    styles.whiteT,
                    styles.bordeR,
                    styles.paragraph,
                    StyleSheet.paragraph,
                  ]}
                />
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.smallMTop,
                  pressed && styles.pressed,
                ]}
              >
                <Button
                  content={"20% discounts"}
                  style={[
                    { backgroundColor: GlobalStyles.Primary_blue, padding: 8 },
                    styles.bordeR,
                    styles.whiteT,
                    styles.paragraph,
                  ]}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.orangeT,
            styles.mainTitle,
            styles.smallMVertical,
            styles.smallMTop,
            { marginTop: 20 },
          ]}
        >
          Why choose our Logistics
        </Text>
        <View styles={[{ flexDirection: "column", gap: 40 }]}>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,
              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="locate"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                10+ Distribution Points
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                Spread across Rwanda for easy access
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,

              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="car"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                Free delivery
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                our bulk clients (100+kgs)
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,

              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="document"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                Free delivery
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                our bulk clients (100+kgs)
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,

              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="document"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                Long-term contracts
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                Stable pricing for wholesalers
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,

              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="document"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                20% discounts
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                Avaibale for regular customers
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,

              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="bag"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                Large quantity supply
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                500+kgs
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.smallMVertical,

              {
                padding: 14,
                backgroundColor: GlobalStyles.Primary_yellow2,
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="document"
              color={GlobalStyles.Secondary_green}
              size={16}
              style={styles.icon}
            />
            <View>
              <Text style={[styles.orangeT, styles.bigText, styles.bold]}>
                quality assurance
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  styles.darkGreyT,
                  styles.smallMVertical,
                ]}
              >
                safety transport
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.orangeT,
            styles.mainTitle,
            styles.smallMVertical,
            { marginTop: 20 },
          ]}
        >
          Transport Methods
        </Text>
        <View style={{ flexDirection: "column" }}>
          <View
            style={[
              {
                padding: 14,
                flexDirection: "",
                borderColor: `${expanded ? GlobalStyles.Secondary_orange : GlobalStyles.Primary_grey}`,
                borderWidth: 2,
                borderRadius: 12,
              },
              styles.smallMVertical,
            ]}
          >
            <Pressable
              onPress={() => setExpanded(!expanded)}
              style={[
                styles.header,
                expanded && styles.expandedHeader,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name={"fish"}
                  size={20}
                  color={GlobalStyles.Primary_blue}
                  style={[
                    styles.icon,
                    {
                      padding: 4,
                      backgroundColor: GlobalStyles.Tertiary_green,
                      alignSelf: "center",
                      borderRadius: 40,
                    },
                  ]}
                />
                <View style={{ paddingBottom: 8 }}>
                  <Text
                    style={[
                      styles.title,
                      styles.paragraph,
                      styles.bold,
                      { marginBottom: 2 },
                    ]}
                  >
                    Live Transport
                  </Text>
                  <Text style={[{}, styles.paragraph]}>within 30km</Text>
                </View>
              </View>
              <Ionicons
                name={expanded ? "remove" : "add"}
                size={20}
                color="black"
              />
            </Pressable>

            {expanded && (
              <View
                style={[
                  styles.content,
                  {
                    borderTopColor: GlobalStyles.Tertiary_orange,
                    borderTopWidth: 2,
                  },
                ]}
              >
                <Text style={[styles.smallMVertical, styles.paragraph]}>
                  <Text style={styles.bold}>Descritpion:</Text>Temperature
                  controlled-live transport
                </Text>
                <Text
                  style={[
                    styles.smallMVertical,
                    styles.darkGreyT,
                    styles.paragraph,
                  ]}
                >
                  <Text style={styles.bold}>Conditions:</Text>Temperature
                  Optimal aeration & water quality maintaned
                </Text>

                <Text
                  style={[
                    { alignSelf: "end", color: GlobalStyles.Secondary_green },
                    styles.bold,
                    styles.paragraph,
                  ]}
                ></Text>
              </View>
            )}
          </View>

          <View
            style={[
              {
                padding: 14,
                flexDirection: "",
                borderColor: `${expanded ? GlobalStyles.Secondary_orange : GlobalStyles.Primary_grey}`,
                borderWidth: 2,
                borderRadius: 12,
              },
              styles.smallMVertical,
            ]}
          >
            <Pressable
              style={[
                styles.header,

                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name={"snow"}
                  size={20}
                  color={GlobalStyles.Primary_blue}
                  style={[
                    styles.icon,
                    {
                      padding: 4,
                      backgroundColor: GlobalStyles.Tertiary_green,
                      alignSelf: "center",
                      borderRadius: 40,
                    },
                  ]}
                />
                <View style={{ paddingBottom: 8 }}>
                  <Text
                    style={[
                      styles.title,
                      styles.paragraph,
                      styles.bold,
                      { marginBottom: 2 },
                    ]}
                  >
                    chilled delivery
                  </Text>
                  <Text style={[{}, styles.paragraph]}>within 100km</Text>
                </View>
              </View>
              <Ionicons
                name={expanded ? "remove" : "add"}
                size={20}
                color="black"
              />
            </Pressable>

            {false && (
              <View
                style={[
                  styles.content,
                  {
                    borderTopColor: GlobalStyles.Tertiary_orange,
                    borderTopWidth: 2,
                  },
                ]}
              >
                <Text style={[styles.smallMVertical, styles.paragraph]}>
                  <Text style={styles.bold}>Descritpion:</Text>Temperature
                  controlled-live transport
                </Text>
                <Text
                  style={[
                    styles.smallMVertical,
                    styles.darkGreyT,
                    styles.paragraph,
                  ]}
                >
                  <Text style={styles.bold}>Conditions:</Text>Temperature
                  Optimal aeration & water quality maintaned
                </Text>

                <Text
                  style={[
                    { alignSelf: "end", color: GlobalStyles.Secondary_green },
                    styles.bold,
                    styles.paragraph,
                  ]}
                ></Text>
              </View>
            )}
          </View>
          <View
            style={[
              {
                padding: 14,
                flexDirection: "",
                borderColor: `${expanded ? GlobalStyles.Secondary_orange : GlobalStyles.Primary_grey}`,
                borderWidth: 2,
                borderRadius: 12,
              },
              styles.smallMVertical,
            ]}
          >
            <Pressable
              style={[
                styles.header,

                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name={"snow"}
                  size={20}
                  color={GlobalStyles.Primary_blue}
                  style={[
                    styles.icon,
                    {
                      padding: 4,
                      backgroundColor: GlobalStyles.Tertiary_green,
                      alignSelf: "center",
                      borderRadius: 40,
                    },
                  ]}
                />
                <View style={{ paddingBottom: 8 }}>
                  <Text
                    style={[
                      styles.title,
                      styles.paragraph,
                      styles.bold,
                      { marginBottom: 2 },
                    ]}
                  >
                    frozen Transport
                  </Text>
                  <Text style={[{}, styles.paragraph]}>Kigali</Text>
                </View>
              </View>
              <Ionicons
                name={expanded ? "remove" : "add"}
                size={20}
                color="black"
              />
            </Pressable>

            {false && (
              <View
                style={[
                  styles.content,
                  {
                    borderTopColor: GlobalStyles.Tertiary_orange,
                    borderTopWidth: 2,
                  },
                ]}
              >
                <Text style={[styles.smallMVertical, styles.paragraph]}>
                  <Text style={styles.bold}>Descritpion:</Text>Temperature
                  controlled-live transport
                </Text>
                <Text
                  style={[
                    styles.smallMVertical,
                    styles.darkGreyT,
                    styles.paragraph,
                  ]}
                >
                  <Text style={styles.bold}>Conditions:</Text>Temperature
                  Optimal aeration & water quality maintaned
                </Text>

                <Text
                  style={[
                    { alignSelf: "end", color: GlobalStyles.Secondary_green },
                    styles.bold,
                    styles.paragraph,
                  ]}
                ></Text>
              </View>
            )}
          </View>
        </View>
        <Text
          style={[
            styles.smallMTop,
            styles.smallMVertical,
            styles.mainTitle,
            styles.orangeT,
            ,
            {
              marginTop: 12,
            },
          ]}
        >
          30+ Harvest Patterns
        </Text>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              {
                backgroundColor: GlobalStyles.Tertiary_green,
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderLeftColor: GlobalStyles.Secondary_green2,
                borderLeftWidth: 4,
              },
            ]}
          >
            <Ionicons
              name="leaf"
              size={20}
              color={GlobalStyles.Secondary_green}
            />
            <Text
              style={[
                styles.paragraph,

                styles.bold,
                { color: GlobalStyles.Secondary_green2 },
              ]}
            >
              weekly Harvest(Tues &fri)
            </Text>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              {
                backgroundColor: GlobalStyles.Tertiary_green,
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderLeftColor: GlobalStyles.Secondary_green2,
                borderLeftWidth: 4,
              },
            ]}
          >
            <Ionicons
              name="leaf"
              size={20}
              color={GlobalStyles.Secondary_green}
            />
            <Text
              style={[
                styles.paragraph,

                styles.bold,
                { color: GlobalStyles.Secondary_green2 },
              ]}
            >
              weekly Harvest(Tues &fri)
            </Text>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              {
                backgroundColor: GlobalStyles.Tertiary_green,
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderLeftColor: GlobalStyles.Secondary_green2,
                borderLeftWidth: 4,
              },
            ]}
          >
            <Ionicons
              name="leaf"
              size={20}
              color={GlobalStyles.Secondary_green}
            />
            <Text
              style={[
                styles.paragraph,

                styles.bold,
                { color: GlobalStyles.Secondary_green2 },
              ]}
            >
              weekly Harvest(Tues &fri)
            </Text>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              {
                backgroundColor: GlobalStyles.Tertiary_green,
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderLeftColor: GlobalStyles.Secondary_green2,
                borderLeftWidth: 4,
              },
            ]}
          >
            <Ionicons
              name="leaf"
              size={20}
              color={GlobalStyles.Secondary_green}
            />
            <Text
              style={[
                styles.paragraph,

                styles.bold,
                { color: GlobalStyles.Secondary_green2 },
              ]}
            >
              weekly Harvest(Tues &fri)
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.smallMTop,
            styles.smallMVertical,
            styles.mainTitle,
            styles.orangeT,
            ,
            {
              marginTop: 12,
            },
          ]}
        >
          10 Distribution Branches
        </Text>
        <View styles={{ flexDirection: "column" }}>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              styles.smallMVertical,
              {
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderWidth: 2,
                justifyContent: "space-between",
                borderColor: GlobalStyles.Secondary_grey,
                borderLeftColor: GlobalStyles.Tertiary_orange,
                borderLeftWidth: 4,
              },
            ]}
          >
            <View>
              <Text
                style={[
                  styles.paragraph,

                  styles.bold,
                  { color: GlobalStyles.Tertiary_orange },
                ]}
              >
                Gasabo kimironko
              </Text>
              <View style={styles.row}>
                <Ionicons
                  name="location"
                  size={20}
                  color={GlobalStyles.quaternary_grey}
                />
                <Text style={[styles.darkGreyT, styles.paragraph]}>kigali</Text>
              </View>
            </View>
            <Text
              style={[
                {
                  backgroundColor: GlobalStyles.Primary_yellow,
                  padding: 8,
                  borderColor: "black",
                  borderWidth: 2,
                },
                styles.bordeR,
                styles.paragraph,
              ]}
            >
              20% off
            </Text>
          </View>

          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              styles.smallMVertical,
              styles.smallMTop,
              {
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderWidth: 2,
                justifyContent: "space-between",
                borderColor: GlobalStyles.Secondary_grey,
                borderLeftColor: GlobalStyles.Tertiary_orange,
                borderLeftWidth: 4,
              },
            ]}
          >
            <View>
              <Text
                style={[
                  styles.paragraph,

                  styles.bold,
                  { color: GlobalStyles.Tertiary_orange },
                ]}
              >
                Gasabo kimironko
              </Text>
              <View style={styles.row}>
                <Ionicons
                  name="location"
                  size={20}
                  color={GlobalStyles.quaternary_grey}
                />
                <Text style={[styles.darkGreyT, styles.paragraph]}>kigali</Text>
              </View>
            </View>
            <Text
              style={[
                {
                  backgroundColor: GlobalStyles.Primary_yellow,
                  padding: 8,
                  borderColor: "black",
                  borderWidth: 2,
                },
                styles.bordeR,
                styles.paragraph,
              ]}
            >
              20% off
            </Text>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              styles.smallMVertical,
              styles.smallMTop,
              {
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderWidth: 2,
                justifyContent: "space-between",
                borderColor: GlobalStyles.Secondary_grey,
                borderLeftColor: GlobalStyles.Tertiary_orange,
                borderLeftWidth: 4,
              },
            ]}
          >
            <View>
              <Text
                style={[
                  styles.paragraph,

                  styles.bold,
                  { color: GlobalStyles.Tertiary_orange },
                ]}
              >
                Gasabo kimironko
              </Text>
              <View style={styles.row}>
                <Ionicons
                  name="location"
                  size={20}
                  color={GlobalStyles.quaternary_grey}
                />
                <Text style={[styles.darkGreyT, styles.paragraph]}>kigali</Text>
              </View>
            </View>
            <Text
              style={[
                {
                  backgroundColor: GlobalStyles.Primary_yellow,
                  padding: 8,
                  borderColor: "black",
                  borderWidth: 2,
                },
                styles.bordeR,
                styles.paragraph,
              ]}
            >
              20% off
            </Text>
          </View>
          <View
            style={[
              styles.bordeR,
              styles.row,
              styles.paragraph,
              styles.bold,
              styles.smallMVertical,
              styles.smallMTop,
              {
                shadowColor: GlobalStyles.Secondary_green,
                padding: 16,
                borderWidth: 2,
                justifyContent: "space-between",
                borderColor: GlobalStyles.Secondary_grey,
                borderLeftColor: GlobalStyles.Tertiary_orange,
                borderLeftWidth: 4,
              },
            ]}
          >
            <View>
              <Text
                style={[
                  styles.paragraph,

                  styles.bold,
                  { color: GlobalStyles.Tertiary_orange },
                ]}
              >
                Gasabo kimironko
              </Text>
              <View style={styles.row}>
                <Ionicons
                  name="location"
                  size={20}
                  color={GlobalStyles.quaternary_grey}
                />
                <Text style={[styles.darkGreyT, styles.paragraph]}>kigali</Text>
              </View>
            </View>
            <Text
              style={[
                {
                  backgroundColor: GlobalStyles.Primary_yellow,
                  padding: 8,
                  borderColor: "black",
                  borderWidth: 2,
                },
                styles.bordeR,
                styles.paragraph,
              ]}
            >
              20% off
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View
            style={[
              styles.bordeR,

              {
                backgroundColor: GlobalStyles.Tertiary_green,
                width: "100%",
                height: 300,
                flexDirection: "column",
                padding: 8,
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={[
                styles.bigText,
                styles.bold,
                { color: GlobalStyles.Secondary_green2 },
              ]}
            >
              Ready to order
            </Text>
            <Text
              style={[styles.Rubik, { color: GlobalStyles.Secondary_green2 }]}
            >
              contact us for custom harvest schedules and bulk pricing
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.smallMTop,
                { width: "100%" },
                pressed && styles.pressed,
              ]}
            >
              <Button
                content={"Call directly"}
                style={[
                  styles.paragraph,
                  styles.whiteT,
                  styles.smallMTop,
                  styles.bordeR,
                  styles.bold,
                  {
                    backgroundColor: GlobalStyles.Tertiary_orange,

                    paddingVertical: 8,
                  },
                ]}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.smallMTop,
                pressed && styles.pressed,
              ]}
            >
              <Button
                content={"Email us"}
                style={[
                  styles.paragraph,

                  styles.smallMTop,
                  styles.bordeR,
                  styles.bold,
                  {
                    borderColor: GlobalStyles.Tertiary_orange,
                    backgroundColor: "white",
                    color: GlobalStyles.Tertiary_orange,
                    borderWidth: 2,

                    paddingVertical: 8,
                  },
                ]}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={[
            {
              backgroundColor: GlobalStyles.Secondary_yellow,
              flexDirection: "column",
              padding: 12,
            },
          ]}
        >
          <Text style={[styles.darkGreyT, styles.paragraph]}>
            &#169; Aquasante farms|Premium Distributions
          </Text>
          <Text style={[styles.orangeT, styles.paragraph]}>
            &#169; Delivering Qaulity fish across Rwanda
          </Text>
        </View>
      </ScrollView>
    </>
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
