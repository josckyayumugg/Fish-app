import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import PriceSlider from "../ui/slider";
import { ActivityIndicator } from "react-native";
import { GlobalStyles } from "../constants";
import { useState } from "react";

import Button from "../ui/Button";

import Ionicons from "@react-native-vector-icons/ionicons";
import { CardStyleInterpolators } from "@react-navigation/stack";
export default function FishLifeTextDemo() {
  const getBarColor = () => {
    if (value <= 30) return GlobalStyles.Secondary_orange; // Low/Warning
    if (value <= 70) return GlobalStyles.Secondary_yellow; // Medium/Caution
    return GlobalStyles.Tertiary_green; // High/Good
  };
  const slider = { min: 0, max: 100, label: "Fish Age", half: 60, step: 10 };
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(true);
  const [value, setValue] = useState(0);

  return (
    <ScrollView style={[{ flexDirection: "column" }]}>
      {!isLoaded && <ActivityIndicator size="small" />}
      <Image
        source={require("../assets/Images/Throw-net.jpg")}
        style={styles.revealImage}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      <View style={styles.container}>
        <View
          style={[
            styles.row,
            { alignContent: "center", justifyContent: "center" },
          ]}
        >
          <Pressable
            style={({ pressed }) => [
              styles.smallMTop,
              styles.row,
              styles.bordeR,
              {
                backgroundColor: GlobalStyles.Tertiary_green,
                paddingHorizontal: 20,
                width: "40%",

                height: 40,
              },

              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name={"person"}
              color={GlobalStyles.Secondary_green}
              size={16}
            />
            <Button content={"I am a client"} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.smallMTop,
              styles.row,
              styles.bordeR,
              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                paddingHorizontal: 20,
                width: "40%",
                borderColor: GlobalStyles.Tertiary_orange,
                borderWidth: 2,
                height: 40,
              },
              {},
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name={"person"}
              color={GlobalStyles.Secondary_green}
              size={16}
            />
            <Button content={"I am a Farmer"} />
          </Pressable>
        </View>
        <Text
          style={[
            styles.paragraph,
            styles.bigText,
            styles.smallMVertical,
            { marginTop: 40 },
          ]}
        >
          Explore what happens throught the growth of a fish{" "}
        </Text>
        <PriceSlider
          min={0}
          max={120}
          label={"Fish Age"}
          half={60}
          step={10}
          value={value}
          setValue={setValue}
          style={[styles.smallMVertical, styles.smallMTop]}
        />

        <View
          style={[
            styles.bordeR,
            styles.row,
            styles.smallMVertical,
            {
              padding: 14,
              backgroundColor: getBarColor(),

              borderColor: GlobalStyles.Tertiary_orange,
              borderWidth: 1,
            },
          ]}
        >
          <Ionicons
            name={`${value < 60 ? "fish-outline" : "fish"}`}
            color={GlobalStyles.Secondary_green}
            size={value < 62 ? 16 : 20}
            style={styles.icon}
          />

          {value <= 30 && (
            <View>
              <Text style={[styles.orangeT, styles.paragraph, styles.bold]}>
                Early-fry
              </Text>

              <View style={{ flexDirection: "column" }}>
                <Text style={[styles.paragraph, styles.darkGreyT]}>
                  0.05g-5g+
                </Text>
                <Text style={[styles.paragraph, styles.darkGreyT]}>
                  10-15%/day
                </Text>
              </View>
            </View>
          )}

          {value >= 31 && value <= 60 && (
            <View>
              <Text style={[styles.orangeT, styles.paragraph, styles.bold]}>
                Growth-fingerling
              </Text>

              <View style={{ flexDirection: "column" }}>
                <Text style={[styles.paragraph, styles.darkGreyT]}>
                  0.05g-5g+
                </Text>
                <Text style={[styles.paragraph, styles.darkGreyT]}>
                  8-12%/day
                </Text>
              </View>
            </View>
          )}
          {value >= 61 && (
            <View>
              <Text style={[styles.orangeT, styles.paragraph, styles.bold]}>
                Maturity-market ready
              </Text>

              <View style={{ flexDirection: "column" }}>
                <Text style={[styles.paragraph, styles.darkGreyT]}>
                  5g-500%g+
                </Text>
                <Text style={[styles.paragraph, styles.darkGreyT]}>
                  3-5%day
                </Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.row}>
          <Pressable
            style={({ pressed }) => [
              styles.smallMTop,
              styles.row,
              styles.bordeR,
              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                paddingHorizontal: 10,
                width: "20%",
                height: 30,
              },
              {},
              pressed && styles.pressed,
            ]}
          >
            <Button content={"Timeline"} style={styles.paragraph} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.smallMTop,
              styles.row,
              styles.bordeR,
              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                paddingHorizontal: 10,
                width: "20%",
                height: 30,
              },
              {},
              pressed && styles.pressed,
            ]}
          >
            <Button content={"Metrics"} style={styles.paragraph} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.smallMTop,
              styles.row,
              styles.bordeR,

              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                paddingHorizontal: 10,
                width: "20%",
                height: 30,
                borderWidth: 1,
                borderColor: GlobalStyles.Tertiary_orange,
              },
              {},
              pressed && styles.pressed,
            ]}
          >
            <Button content={"water"} style={styles.paragraph} />
          </Pressable>
        </View>
        <View
          style={[
            styles.bordeR,
            styles.smallMVertical,
            styles.smallMTop,
            { marginTop: 25 },
          ]}
        >
          <Text
            style={[
              styles.paragraph,
              styles.padding,

              {
                paddingVertical: 12,
                paddingHorizontal: 8,
                backgroundColor: GlobalStyles.Seconndary_blue,
              },
            ]}
          >
            Water conditions parameters
          </Text>
        </View>

        <View
          style={[
            { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
            styles.bordeR,
            styles.smallMVertical,
          ]}
        >
          <View style={{ paddingHorizontal: 4 }}>
            <View
              style={[
                {
                  height: 45,
                  borderColor: GlobalStyles.Tertiary_grey,
                  borderWidth: 3,
                },
              ]}
            >
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={[styles.row, { gap: 8 }]}>
                  <Ionicons
                    name={"thermometer"}
                    size={16}
                    color={GlobalStyles.Primary_blue}
                  />
                  <View>
                    <Text style={styles.paragraph}>Temp (C)</Text>
                    <Text style={styles.smallT}>Target:26-28</Text>
                  </View>
                </View>
                <Button
                  content={"ideal"}
                  style={[
                    {
                      backgroundColor: GlobalStyles.Tertiary_green,
                      paddingHorizontal: 12,
                      borderRadius: 6,
                    },
                    styles.smallMTop,
                    styles.smallMVertical,
                    styles.margin,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
            styles.bordeR,
            styles.smallMVertical,
          ]}
        >
          <View style={{ paddingHorizontal: 4 }}>
            <View
              style={[
                {
                  height: 45,
                  borderColor: GlobalStyles.Tertiary_grey,
                  borderWidth: 3,
                },
              ]}
            >
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={[styles.row, { gap: 8 }]}>
                  <Ionicons
                    name={"water"}
                    size={16}
                    color={GlobalStyles.Primary_blue}
                  />
                  <View>
                    <Text style={styles.paragraph}>PH</Text>
                    <Text style={styles.smallT}>7.0-7.5</Text>
                  </View>
                </View>
                <Button
                  content={"ideal"}
                  style={[
                    {
                      backgroundColor: GlobalStyles.Tertiary_green,
                      paddingHorizontal: 12,
                      borderRadius: 6,
                    },
                    styles.smallMTop,
                    styles.smallMVertical,
                    styles.margin,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
            styles.bordeR,
            styles.smallMVertical,
          ]}
        >
          <View style={{ paddingHorizontal: 4 }}>
            <View
              style={[
                {
                  height: 45,
                  borderColor: GlobalStyles.Tertiary_grey,
                  borderWidth: 3,
                },
              ]}
            >
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={[styles.row, { gap: 8 }]}>
                  <Ionicons
                    name={"stop"}
                    size={16}
                    color={GlobalStyles.Primary_blue}
                  />
                  <View>
                    <Text style={styles.paragraph}>Ammonia</Text>
                    <Text style={styles.smallT}>Target:0.3 ppm</Text>
                  </View>
                </View>
                <Button
                  content={"ideal"}
                  style={[
                    {
                      backgroundColor: GlobalStyles.Tertiary_green,
                      paddingHorizontal: 12,
                      borderRadius: 6,
                    },
                    styles.smallMTop,
                    styles.smallMVertical,
                    styles.margin,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
            styles.bordeR,
            styles.smallMVertical,
          ]}
        >
          <View style={{ paddingHorizontal: 4 }}>
            <View
              style={[
                {
                  height: 45,
                  borderColor: GlobalStyles.Tertiary_grey,
                  borderWidth: 3,
                },
              ]}
            >
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={[styles.row, { gap: 8 }]}>
                  <Ionicons
                    name={"stats-chart-outline"}
                    size={16}
                    color={GlobalStyles.Primary_blue}
                  />
                  <View>
                    <Text style={styles.paragraph}>Nitrite</Text>
                    <Text style={styles.smallT}>Target:5-6</Text>
                  </View>
                </View>
                <Button
                  content={"ideal"}
                  style={[
                    {
                      backgroundColor: GlobalStyles.Tertiary_green,
                      paddingHorizontal: 12,
                      borderRadius: 6,
                    },
                    styles.smallMTop,
                    styles.smallMVertical,
                    styles.margin,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
            styles.bordeR,
            styles.smallMVertical,
          ]}
        >
          <View style={{ paddingHorizontal: 4 }}>
            <View
              style={[
                {
                  height: 45,
                  borderColor: GlobalStyles.Tertiary_grey,
                  borderWidth: 3,
                },
              ]}
            >
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={[styles.row, { gap: 8 }]}>
                  <Ionicons
                    name={"stats-chart-outline"}
                    size={16}
                    color={GlobalStyles.Primary_blue}
                  />
                  <View>
                    <Text style={styles.paragraph}>Do(ppm)</Text>
                    <Text style={styles.smallT}>Target:5-6F</Text>
                  </View>
                </View>
                <Button
                  content={"ideal"}
                  style={[
                    {
                      backgroundColor: GlobalStyles.Tertiary_green,
                      paddingHorizontal: 12,
                      borderRadius: 6,
                    },
                    styles.smallMTop,
                    styles.smallMVertical,
                    styles.margin,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.smallMVertical]}>
            <Text style={[styles.bigText, styles.bold, styles.smallMVertical]}>
              <Ionicons
                name={"bulb"}
                color={GlobalStyles.Primary_yellow}
                size={16}
              />
              Quick Tips
            </Text>
            <View
              style={[
                styles.smallMVertical,
                { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
                styles.bordeR,

                { borderColor: "black", borderWidth: 1 },
              ]}
            >
              <View>
                <View
                  style={[
                    {
                      height: 25,

                      backgroundColor: GlobalStyles.Primary_yellow,
                    },
                  ]}
                >
                  <View style={[styles.row]}>
                    <View style={[styles.row, { gap: 8 }]}>
                      <Ionicons
                        name={""}
                        size={16}
                        color={GlobalStyles.Primary_blue}
                      />
                      <View>
                        <Text style={styles.paragraph}>
                          check temperature before feeding
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.smallMVertical,
                { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
                styles.bordeR,

                { borderColor: "black", borderWidth: 1 },
              ]}
            >
              <View>
                <View
                  style={[
                    {
                      height: 25,

                      backgroundColor: GlobalStyles.Primary_yellow,
                    },
                  ]}
                >
                  <View style={[styles.row]}>
                    <View style={[styles.row, { gap: 8 }]}>
                      <Ionicons
                        name={""}
                        size={16}
                        color={GlobalStyles.Primary_blue}
                      />
                      <View>
                        <Text style={styles.paragraph}>feed 6 times a day</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.smallMVertical,
                { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
                styles.bordeR,

                { borderColor: "black", borderWidth: 1 },
              ]}
            >
              <View>
                <View
                  style={[
                    {
                      height: 25,

                      backgroundColor: GlobalStyles.Primary_yellow,
                    },
                  ]}
                >
                  <View style={[styles.row]}>
                    <View style={[styles.row, { gap: 8 }]}>
                      <Ionicons
                        name={""}
                        size={16}
                        color={GlobalStyles.Primary_blue}
                      />
                      <View>
                        <Text style={styles.paragraph}>
                          {`Do water change if ammonia is >0.3 ppm`}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.smallMVertical,
                { borderWidth: 1, borderColor: GlobalStyles.Secondary_grey },
                styles.bordeR,

                { borderColor: "black", borderWidth: 1 },
              ]}
            >
              <View>
                <View
                  style={[
                    {
                      height: 25,

                      backgroundColor: GlobalStyles.Primary_yellow,
                    },
                  ]}
                >
                  <View style={[styles.row]}>
                    <View style={[styles.row, { gap: 8 }]}>
                      <Ionicons
                        name={""}
                        size={16}
                        color={GlobalStyles.Primary_blue}
                      />
                      <View>
                        <Text style={styles.paragraph}>
                          {`Remove dead fish/sich fish immdiately`}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                backgroundColor: GlobalStyles.Tertiary_orange,
                paddingVertical: 8,
              },
              styles.bordeR,
              ,
            ]}
          >
            <Pressable
              style={({ pressed }) => [
                styles.smallMTop,
                styles.row,

                { justifyContent: "center", alignContent: "center" },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name={"call"} />
              <Button
                content={"call support Team"}
                style={[styles.whiteT, styles.paragraph, styles.bold]}
              />
            </Pressable>
          </View>
          <View
            style={[
              {
                backgroundColor: GlobalStyles.Primary_yellow,
                paddingVertical: 8,
              },
              styles.bordeR,
              styles.smallMTop,
              
              ,
            ]}
          >
            <Pressable
              style={({ pressed }) => [
                styles.smallMTop,
                styles.row,

                { justifyContent: "center", alignContent: "center" },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name={"stats-chart"} />
              <Button
                content={"View  Growth Report"}
                style={[styles.paragraph, styles.bold]}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  revealImage: {
    height: 200,
    width: "100%",

    marginBottom: 16,
  },
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
