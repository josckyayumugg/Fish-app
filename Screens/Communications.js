import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export default function Communications() {
  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={styles.container}>
        {/* CARD 1: FULL BORDER */}
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name="hand-left"
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}> Welcome</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasnate is happy to have you as a client. You can navigate around
            the app to explore more about the app, the meals, the "Life of the
            fish" and so many others. You are welcome!
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"newspaper-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}> New-Arrivals</Text>
          </View>
          <Text style={styles.lightText}>
            New Arrivalas to Rusizi you nearest branch get the new fresh for you
            meals .Thank yo for being our client
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"happy-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}>Mery chirsmass</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasante is wishing you very good holidays you and you and your
            family get new fish let's celebrate the holidays getting well with a
            fish capture from the lake kivu
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name="hand-left"
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}> Welcome</Text>
          </View>
          <Text style={styles.lightText}>
            Hello aquasant is wishing you good times check our new video about
            preparing the estovich fish check the meals/videos you will find a
            link to youtube
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"newspaper-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}> New-Arrivals</Text>
          </View>
          <Text style={styles.lightText}>
            New Arrivalas to Rusizi you nearest branch get the new fresh for you
            meals .Thank yo for being our client
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"happy-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}>Mery chirsmass</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasante is wishing you very good holidays you and you and your
            family get new fish let's celebrate the holidays getting well with a
            fish capture from the lake kivu
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name="hand-left"
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}> Welcome</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasnate is happy to have you as a client. You can navigate around
            the app to explore more about the app, the meals, the "Life of the
            fish" and so many others. You are welcome!
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"newspaper-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}> New-Arrivals</Text>
          </View>
          <Text style={styles.lightText}>
            New Arrivalas to Rusizi you nearest branch get the new fresh for you
            meals .Thank yo for being our client
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"happy-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}>Mery chirsmass</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasante is wishing you very good holidays you and you and your
            family get new fish let's celebrate the holidays getting well with a
            fish capture from the lake kivu
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"happy-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}>Mery chirsmass</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasante is wishing you very good holidays you and you and your
            family get new fish let's celebrate the holidays getting well with a
            fish capture from the lake kivu
          </Text>
        </View>
        <View style={styles.cardFull}>
          <View style={styles.headerRow}>
            <Ionicons
              name={"happy-outline"}
              size={16}
              color={GlobalStyles.Primary_yellow}
            />
            <Text style={styles.boldText}>Mery chirsmass</Text>
          </View>
          <Text style={styles.lightText}>
            Aquasante is wishing you very good holidays you and you and your
            family get new fish let's celebrate the holidays getting well with a
            fish capture from the lake kivu
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  cardFull: {
    width: "90%",
    alignSelf: "center",
    borderColor: GlobalStyles.Primary_grey || "#ccc",
    borderBottomEndRadius: 8,
    borderBottomWidth: 3,

    padding: 12,
    marginBottom: 1,
  },
  cardBottom: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 15,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  boldText: {
    fontFamily: "Rubik-bold",
    fontSize: 14,
    fontWeight: "bold",
  },
  lightText: {
    fontFamily: "Rubik-regular",
    fontSize: 11,
    color: GlobalStyles.Primary_grey || "#666",
    lineHeight: 16,
  },
});
