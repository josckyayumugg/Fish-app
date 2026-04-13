import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Pressable, TextInput } from "react-native";
import { GlobalStyles } from "../constants";
import Button from "../ui/Button";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import ContactUS from "../ui/ContactUS";

export default function Product() {
  const [kgs, setKgs] = useState(0);
  function handlekgsInput(input) {
    setKgs(input);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.rowView}>
        <View style={styles.rowItem}>
          <Text style={styles.smallT}>BATCH-AS-AT-2024-3-02</Text>
          <Text
            style={[
              styles.smallT,
              styles.bold,
              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                borderRadius: 8,
                paddingHorizontal: 4,
              },
            ]}
          >
            7days to a new harvest
          </Text>
        </View>
        <View style={[{ flexDirection: "row" }]}>
          <Ionicons name="share" size={30} color={"black"} />

          <Ionicons name="heart" size={30} color={"red"} />
        </View>
      </View>
      <View
        style={[
          styles.blackBg,
          styles.bordeR,

          { paddingHorizontal: 4, marginTop: 8, paddingBottom: 8 },
        ]}
      >
        <View
          style={[
            {
              flexDirection: "column",
              alignSelf: "start",
              paddingHorizontal: 8,
            },
            styles.blackBg,
          ]}
        >
          <Text style={[styles.mainTitle, styles.greyT]}>Aquasante</Text>
          <Text style={[styles.headerTitle, styles.greyT]}>
            Lake kivu Aquaculture
          </Text>
          <Text style={[styles.headerTitle, styles.greyT]}>
            <Ionicons
              name={"location-outline"}
              color={GlobalStyles.Primary_yellow}
              size={16}
            />
            Musanze, Rwanda
          </Text>
        </View>
        <View style={styles.rowView}>
          <View style={[styles.rowItem, styles.headerCard, styles.bordeR]}>
            <Text style={[styles.smallT, styles.greyT]}>
              <Ionicons
                name={"fish"}
                color={GlobalStyles.Secondary_grey}
                size={10}
              />{" "}
              Total fishes
            </Text>
            <Text style={[styles.mainTitle, styles.whiteT]}>800</Text>
          </View>

          <View style={[styles.rowItem, styles.headerCard, styles.bordeR]}>
            <Text style={[styles.smallT, styles.greyT]}>
              <Ionicons
                name={"fish"}
                color={GlobalStyles.Secondary_grey}
                size={10}
              />{" "}
              Total weight
            </Text>
            <Text style={[styles.mainTitle, styles.whiteT]}>650 kgs</Text>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={[styles.rowItem, styles.headerCard, styles.bordeR]}>
            <Text style={[styles.smallT, styles.greyT]}>
              <Ionicons
                name={"cart"}
                color={GlobalStyles.Secondary_grey}
                size={10}
              />{" "}
              Avg fish weight
            </Text>
            <Text style={[styles.mainTitle, styles.whiteT]}>500g</Text>
          </View>

          <View style={[styles.rowItem, styles.headerCard, styles.bordeR]}>
            <Text style={[styles.smallT, styles.greyT]}>
              <Ionicons
                name={"cart"}
                color={GlobalStyles.Secondary_grey}
                size={10}
              />{" "}
              Harvest Date
            </Text>
            <Text style={[styles.mainTitle, styles.whiteT]}>12/Dec</Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={[{ marginVertical: 30 }, styles.Views]}
      >
        <View style={{ marginHorizontal: 2 }}>
          <Text
            style={[
              styles.rowView,
              styles.paragraph,
              styles.bordeR,
              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                padding: 8,
              },
            ]}
          >
            <Ionicons name="trending-up" size={10} color={"black"} />
            uniformity 92%
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.rowView,
              styles.paragraph,
              styles.bordeR,
              { backgroundColor: GlobalStyles.Primary_yellow, padding: 8 },
            ]}
          >
            <Ionicons
              name="podium"
              size={10}
              color={GlobalStyles.Secondary_green}
            />
            Fillet Yield 35%
          </Text>
        </View>
        <View style={{ marginHorizontal: 4 }}>
          <Text
            style={[
              styles.rowView,
              styles.bordeR,
              styles.paragraph,

              { backgroundColor: GlobalStyles.Tertiary_green, padding: 8 },
            ]}
          >
            <Ionicons name="checkmark" size={10} color={"black"} />
            Grad A 78%
          </Text>
        </View>
        <View style={{ marginHorizontal: 2 }} pad>
          <Text
            style={[
              styles.rowView,
              styles.bordeR,
              styles.paragraph,
              {
                backgroundColor: GlobalStyles.Seconndary_blue,
                padding: 8,
              },
            ]}
          >
            <Ionicons name="shield" size={10} color={"green"} />
            Grade 78% kigali
          </Text>
        </View>
      </ScrollView>
      <View
        style={[
          {
            borderWidth: 2,
            borderColor: GlobalStyles.Secondary_grey,
            padding: 12,
            borderRadius: 12,
          },
        ]}
      >
        <View style={[styles.sectionTitle, styles.rowView]}>
          <Text style={[styles.sectionTitle]}>
            <Ionicons name={"podium"} color={"black"} size={16} />
            Yield & Grading
          </Text>
          <Ionicons
            name={"information"}
            color={GlobalStyles.Primary_grey}
            size={16}
          />
        </View>
        <View
          style={[
            styles.rowItem,
            styles.bordeR,
            styles.greenCard,
            {
              backgroundColor: GlobalStyles.Tertiary_green,
              width: "100%",
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            },
          ]}
        >
          <Text style={styles.paragraph}> AVERAGE BODY WEIGHT</Text>
          <Text
            style={[
              styles.Rubik,
              styles.mainTitle,
              { color: GlobalStyles.Secondary_green },
            ]}
          >
            500g
          </Text>
          <Text></Text>
        </View>
        <View
          style={{
            borderBottomColor: GlobalStyles.Primary_grey,
            borderBottomWidth: 2,
          }}
        >
          <Text style={[styles.Rubik]}>Size Disribution</Text>
          <View>
            <View
              style={[
                styles.bordeR,
                styles.smallMVertical,
                {
                  width: "95%",
                  height: 20,
                  alignSelf: "center",

                  flexDirection: "row",
                },
              ]}
            >
              <View
                style={{
                  width: "65%",
                  height: 20,
                  backgroundColor: GlobalStyles.Secondary_green,
                }}
              ></View>
              <View
                style={{
                  width: "25%",
                  height: 20,

                  backgroundColor: GlobalStyles.Primary_yellow,
                }}
              ></View>
              <View
                style={{
                  width: "10%",
                  height: 20,
                  backgroundColor: GlobalStyles.Primary_grey,
                }}
              ></View>
            </View>
            <View style={[styles.rowView, styles.marginVertical]}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    alignSelf: "center",
                    backgroundColor: GlobalStyles.Secondary_green,
                    borderRadius: 12,
                  }}
                ></View>
                <View>
                  <Text style={styles.Rubik}>Grade A</Text>
                  <Text style={styles.Rubik}>450g -550g</Text>
                </View>
              </View>
              <View>
                <Text style={[{ color: GlobalStyles.Secondary_green }]}>
                  78%
                </Text>
                <Text style={[{}, styles.smallT]}>975 fish</Text>
              </View>
            </View>
            <View style={[styles.rowView, styles.marginVertical]}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    alignSelf: "center",
                    backgroundColor: GlobalStyles.Primary_yellow,
                    borderRadius: 12,
                  }}
                ></View>
                <View style={styles.smallMVertical}>
                  <Text style={styles.Rubik}>Grade B</Text>
                  <Text style={styles.Rubik}>350 -440g</Text>
                </View>
              </View>
              <View style={styles.smallMVertical}>
                <Text style={{ color: GlobalStyles.Primary_grey }}>18%</Text>
                <Text style={[{}, styles.smallT]}>225 fish</Text>
              </View>
            </View>
            <View style={[styles.rowView, { marginBottom: 8 }]}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    alignSelf: "center",
                    backgroundColor: GlobalStyles.Primary_grey,
                    borderRadius: 12,
                  }}
                ></View>
                <View style={{}}>
                  <Text style={styles.Rubik}>Grade C</Text>
                  <Text style={styles.Rubik}>{"<350g"}</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: GlobalStyles.Primary_grey }}>4%</Text>
                <Text style={[{}, styles.smallT]}>50 fish</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.rowView, styles.smallMVertical]}>
          <View style={styles.rowItem}>
            <Text style={[styles.Rubik]}>Fillet field</Text>
            <Text style={[styles.sectionTitle]}>35% meat ratio</Text>
            <View
              style={[
                styles.bordeR,

                {
                  width: "95%",
                  height: 8,
                  borderRadius: 12,
                  alignSelf: "center",

                  flexDirection: "row",
                },
              ]}
            >
              <View
                style={{
                  width: "35%",
                  height: 8,

                  backgroundColor: GlobalStyles.Secondary_green,
                }}
              ></View>
              <View
                style={{
                  width: "75%",
                  height: 8,

                  backgroundColor: GlobalStyles.Tertiary_green,
                }}
              ></View>
            </View>
          </View>
          <View style={styles.rowItem}>
            <Text style={[styles.Rubik]}>uniformity index</Text>
            <Text style={[styles.sectionTitle]}>92% consistent</Text>
            <View
              style={[
                styles.bordeR,

                {
                  width: "95%",
                  height: 8,
                  borderRadius: 12,
                  alignSelf: "center",

                  flexDirection: "row",
                },
              ]}
            >
              <View
                style={{
                  width: "35%",
                  height: 8,

                  backgroundColor: GlobalStyles.Secondary_green,
                }}
              ></View>
              <View
                style={{
                  width: "75%",
                  height: 8,

                  backgroundColor: GlobalStyles.Tertiary_green,
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.bordeR,
          styles.Views,
          {
            borderWidth: 6,
            borderColor: GlobalStyles.Primary_yellow,
            padding: 12,
            borderRadius: 12,
          },
        ]}
      >
        <View style={styles.rowView}>
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "start",
                height: "fit",
              },
              styles.smallMVertical,
            ]}
          >
            <Ionicons name={"pricetag"} color={"black"} size={16} />
            <Text style={styles.sectionTitle}>Pricing Matrix</Text>
          </View>
          <Text
            style={[
              styles.paragraph,
              styles.bordeR,
              styles.label,
              {
                borderColor: GlobalStyles.Primary_yellow2,
                padding: 6,
                alignSelf: "center",
                textAlign: "center",
              },
            ]}
          >
            Best Value
          </Text>
        </View>
        <View style={[styles.rowView]}>
          <View
            style={[
              styles.rowItem,
              styles.bordeR,
              { backgroundColor: GlobalStyles.Seconndary_blue },
            ]}
          >
            <Text style={[styles.Rubik, { padding: 4 }]}>per piece</Text>
            <View style={{ flexDirection: "row", gap: 2, alignItems: "end" }}>
              <Text style={styles.mainTitle}>1,500</Text>
              <Text style={styles.Rubik}>Rwf</Text>
            </View>
          </View>
          <View
            style={[
              styles.rowItem,
              styles.bordeR,
              { backgroundColor: GlobalStyles.Seconndary_blue },
            ]}
          >
            <Text style={[styles.Rubik, { padding: 4 }]}>per kilogram</Text>
            <View style={{ flexDirection: "row", gap: 2, alignItems: "end" }}>
              <Text style={styles.mainTitle}>2800</Text>
              <Text style={styles.Rubik}>Rwf</Text>
            </View>
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text style={styles.smallMVertical}>
            <Ionicons
              name="trending-down"
              color={GlobalStyles.Secondary_green}
              size={16}
            />
            <Text style={styles.sectionTitle}>Bulk discounts</Text>
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
           
            <View
              style={[
                styles.bordeR,

                {
                  backgroundColor: GlobalStyles.Seconndary_blue,
                  flexDirection: "column",
                  padding: 2,
                  width: "30%",
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: "auto",
                }}
              >
                <Text style={styles.Rubik}>500+fish</Text>
                <Text style={styles.sectionTitle}>20% OFF</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.rowView, styles.smallMVertical, { marginTop: 20 }]}
        >
          <Text style={[styles.headerTitle]}>calculate Your discount</Text>
          <Text style={styles.headerTitle}>max:2000</Text>
        </View>
        <View
          style={[
            {
              backgroundColor: GlobalStyles.Seconndary_blue,
              padding: 10,
              borderRadius: 12,
            },
          ]}
        >
          <View
            style={[styles.rowView, styles.smallMVertical, styles.smallMTop]}
          >
            <Text style={styles.bold}>Quantity</Text>
            <Text style={styles.mainTitle}>{kgs}kgs</Text>
          </View>
          <View style={[styles.row, { gap: 8 }]}>
            <TextInput
              onChangeText={(receiver) => {
                setKgs(receiver);
              }}
              numberOfLines={3}
              keyboardType="number-pad"
              textContentType="telephoneNumber"
              style={[
                {
                  width: "20%",
                  height: 20,

                  backgroundColor: "white",
                  border: GlobalStyles.Secondary_green,
                  paddingHorizontal: 4,
                },
                styles.bordeR,
              ]}
            ></TextInput>
            <Text style={styles.smallT}>Kgs</Text>
          </View>

          {kgs ? (
            <Button
              content="confirm"
              style={[
                styles.smallMVertical,
                styles.bordeR,
                {
                  backgroundColor: GlobalStyles.Secondary_green,
                  alignSelf: "start",
                  paddingHorizontal: 8,

                  color: GlobalStyles.Primary_yellow,
                },
              ]}
            />
          ) : (
            <Text
              style={[
                styles.Rubik,
                styles.bold,

                styles.smallMVertical,
                { height: 20, color: GlobalStyles.Tertiary_orange },
              ]}
            >
              use the above input to calculate the discount
            </Text>
          )}
        </View>
        <View
          style={[
            styles.bordeR,
            styles.b,
            {
              backgroundColor: "black",
              padding: 10,
              marginTop: 10,
              marginBottom: 12,
            },
          ]}
        >
          <View style={[styles.rowView, styles.smallMVertical]}>
            <Text style={[styles.headerTitle, styles.greyT]}>SubTotal</Text>
            <Text style={[styles.headerTitle, styles.greyT]}>75,000RWF</Text>
          </View>
          <View
            style={[
              styles.rowView,
              {
                borderBottomColor: "gray",
                paddingBottom: 10,
                marginBottom: 10,
                borderBottomWidth: 1,
              },
            ]}
          >
            <Text style={[styles.headerTitle, styles.greenT]}>
              Bulk Discount{}
            </Text>
            <Text style={[styles.headerTitle, styles.greenT]}>5,000RWF</Text>
          </View>
          <View style={[styles.rowView, styles.smallMVertical]}>
            <Text style={[styles.headerTitle, styles.whiteT, styles.bold]}>
              Total
            </Text>
            <Text style={[styles.headerTitle, styles.greenT]}>40,000RWF</Text>
          </View>
          <Text style={[styles.greyT, styles.Rubik, { alignSelf: "center" }]}>
            unit price:2400/kg
          </Text>
        </View>
        <View
          style={{
            borderTopColor: "gray",
            borderTopWidth: 2,
            alignSelf: "center",
          }}
        >
          <Text style={[, styles.headerTitle, { textAlign: "center" }]}>
            full batch( All 1500fishes)
          </Text>
          <Text
            style={[
              styles.mainTitle,
              { color: GlobalStyles.Secondary_green, textAlign: "center" },
            ]}
          >
            1,750,000 Rwf
          </Text>
        </View>
      </View>
      {/* <View
        style={[
          styles.bordeR,
          styles.Views,
          {
            borderWidth: 2,
            borderColor: GlobalStyles.Secondary_grey,
            padding: 12,
            borderRadius: 12,
            height: "full",
          },
        ]}
      >
        <View style={styles.rowView}>
          <View style={styles.row}>
            <Ionicons
              name={"restaurant"}
              color={GlobalStyles.Secondary_green}
              size={14}
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Culinary Profile</Text>
          </View>
          <Text
            style={[
              styles.greenT,
              styles.bordeR,
              {
                backgroundColor: GlobalStyles.Tertiary_green,
                padding: 4,
                justifyContent: "center",
                marginVertical: "auto",
              },
            ]}
          >
            {" "}
            Premium Quality
          </Text>
        </View>
        <View
          style={[
            styles.rowItem,
            styles.bordeR,
            styles.greenCard,
            {
              backgroundColor: GlobalStyles.Tertiary_green,
              width: "100%",
              marginVertical: 20,
              alignItems: "start",
              justifyContent: "start",

              padding: 14,
            },
          ]}
        >
          <Text style={styles.Rubik}>Taste Profile</Text>
          <Text
            style={[
              styles.Rubik,
              styles.headerTitle,
              styles.bold,
              styles.smallMVertical,
            ]}
          >
            Mild,Sweet,and firm texture
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.smallMVertical,
            {
              paddingBottom: 12,
              borderBottomColor: GlobalStyles.Secondary_grey,
              borderBottomWidth: 2,
            },
          ]}
        >
          <Ionicons
            name="leaf"
            size={14}
            color={GlobalStyles.Secondary_green}
            style={[
              styles.icon,

              {
                backgroundColor: GlobalStyles.Tertiary_green,
                padding: 8,
                borderRadius: 50,
              },
            ]}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={[styles.smallT, styles.bold]}>Dietary Quality</Text>
            <Text style={styles.paragraph}>
              Raised on organic-based pellets,no muddy aftetaste
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.smallMVertical,
            {
              paddingBottom: 12,
              borderBottomColor: GlobalStyles.Secondary_grey,
              borderBottomWidth: 2,
            },
          ]}
        >
          <Ionicons
            name="time"
            size={14}
            color={GlobalStyles.Secondary_green}
            style={[
              styles.icon,

              {
                backgroundColor: GlobalStyles.Tertiary_green,
                padding: 8,
                borderRadius: 50,
              },
            ]}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={[styles.smallT, styles.bold]}>Freshness</Text>
            <Text style={styles.paragraph}>Harvested alive</Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.smallMVertical,
            {
              paddingBottom: 12,
              borderBottomColor: GlobalStyles.Secondary_grey,
              borderBottomWidth: 2,
            },
          ]}
        >
          <Ionicons
            name="flame"
            size={14}
            color={GlobalStyles.Secondary_green}
            style={[
              styles.icon,

              {
                backgroundColor: GlobalStyles.Tertiary_green,
                padding: 8,
                borderRadius: 50,
              },
            ]}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={[styles.smallT, styles.bold]}>Meat color</Text>
            <Text style={styles.paragraph}>white to pinkish-white</Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.smallMVertical,

            {
              paddingBottom: 12,
              borderBottomColor: GlobalStyles.Secondary_grey,
              borderBottomWidth: 2,
            },
          ]}
        >
          <Ionicons
            name="flame"
            size={14}
            color={GlobalStyles.Secondary_green}
            style={[
              styles.icon,

              {
                backgroundColor: GlobalStyles.Tertiary_green,
                padding: 8,
                borderRadius: 50,
              },
            ]}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={[styles.smallT, styles.bold]}>Fat content</Text>
            <Text style={styles.paragraph}>Low(2-4)</Text>
          </View>
        </View>
        <View
          style={[
            { flexDirection: "column" },
            styles.smallMVertical,
            styles.smallMTop,
          ]}
        >
          <Text style={[styles.Rubik, styles.bold, { marginBottom: 8 }]}>
            Best cooking methods
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={[{ marginVertical: 0 }]}
          >
            <View style={{ marginHorizontal: 2 }}>
              <Text
                style={[
                  styles.rowView,
                  styles.paragraph,
                  styles.bordeR,
                  {
                    backgroundColor: GlobalStyles.Tertiary_green,
                    padding: 6,
                    color: GlobalStyles.Secondary_green,
                  },
                ]}
              >
                Grilling
                <Ionicons
                  name="star"
                  size={16}
                  color={GlobalStyles.Secondary_green}
                />
              </Text>
            </View>
            <View style={{ marginHorizontal: 2 }}>
              <Text
                style={[
                  styles.rowView,
                  styles.paragraph,
                  styles.bordeR,
                  {
                    backgroundColor: GlobalStyles.Tertiary_green,
                    padding: 6,
                    color: GlobalStyles.Secondary_green,
                  },
                ]}
              >
                Frying
                <Ionicons
                  name="star"
                  size={16}
                  color={GlobalStyles.Secondary_green}
                />
              </Text>
            </View>
            <View style={{ marginHorizontal: 2 }}>
              <Text
                style={[
                  styles.rowView,
                  styles.paragraph,
                  styles.bordeR,
                  {
                    backgroundColor: GlobalStyles.Seconndary_blue,
                    padding: 6,
                    color: GlobalStyles.Primary_blue,
                  },
                ]}
              >
                steaming
              </Text>
            </View>
            <View style={{ marginHorizontal: 2 }}>
              <Text
                style={[
                  styles.rowView,
                  styles.paragraph,
                  styles.bordeR,
                  {
                    backgroundColor: GlobalStyles.Seconndary_blue,
                    padding: 6,
                    color: GlobalStyles.Primary_blue,
                  },
                ]}
              >
                smoking
              </Text>
            </View>
            <View style={{ marginHorizontal: 2 }}>
              <Text
                style={[
                  styles.rowView,
                  styles.paragraph,
                  styles.bordeR,
                  {
                    backgroundColor: GlobalStyles.Seconndary_blue,
                    padding: 6,
                    color: GlobalStyles.Primary_blue,
                  },
                ]}
              >
                sashimi
              </Text>
            </View>
          </ScrollView>
        </View>
      </View> */}
      <View
        style={[
          styles.bordeR,
          styles.Views,
          {
            borderWidth: 2,
            borderColor: GlobalStyles.Secondary_grey,
            padding: 12,
            borderRadius: 12,
          },
        ]}
      >
        <Text style={[styles.sectionTitle]}>Quick actions</Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.smallMTop,
            pressed && styles.pressed,
          ]}
        >
          <Button
            content={
              <Text>
                <Ionicons name="cart" size={16} color={"white"} />
                place an order
              </Text>
            }
            style={[
              {
                width: "80%",
                alignItems: "center",
                justifyContent: "center",

                backgroundColor: GlobalStyles.Secondary_green,
                margin: "auto",
                paddingRight: 10,
                flexDirection: "row",
              },
              styles.whiteT,
              styles.bordeR,

              styles.bigText,
            ]}
          />
        </Pressable>

        <View
          style={[
            styles.rowView,
            styles.smallMVertical,
            styles.smallMTop,

            { marginTop: 20 },
          ]}
        >
          <View
            style={[
              styles.bordeR,

              {
                backgroundColor: GlobalStyles.Secondary_grey,
                flexDirection: "column",
                width: "30%",
                height: 60,
                padding: 2,
                borderWidth: 1,
                borderColor: GlobalStyles.Primary_grey,
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
                    name="calendar"
                    size={16}
                    color={"black"}
                    style={{ marginHorizontal: "auto" }}
                  />
                  <Text>Reserve a batch</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View
            style={[
              styles.bordeR,

              {
                backgroundColor: GlobalStyles.Secondary_grey,
                flexDirection: "column",
                width: "30%",
                height: 60,
                padding: 2,
                borderWidth: 1,
                borderColor: GlobalStyles.Primary_grey,
              },
            ]}
          >
            <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",

                  marginVertical: "auto",
                }}
              >
                <View style={[styles.paragraph, { textAlign: "center" }]}>
                  <Ionicons
                    name="document"
                    size={16}
                    color={"black"}
                    style={{ marginHorizontal: "auto" }}
                  />
                  <Text>Request a quote</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View
            style={[
              styles.bordeR,

              {
                backgroundColor: GlobalStyles.Secondary_grey,
                flexDirection: "column",
                width: "30%",
                height: 60,
                padding: 2,
                borderWidth: 1,
                borderColor: GlobalStyles.Primary_grey,
              },
            ]}
          >
            <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",

                  marginVertical: "auto",
                }}
              >
                <View style={[styles.paragraph, { textAlign: "center" }]}>
                  <Ionicons
                    name="share"
                    size={16}
                    color={"black"}
                    style={{ marginHorizontal: "auto" }}
                  />
                  <Text>share document</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={[
            styles.rowItem,
            styles.smallMVertical,
            styles.smallMTop,
            styles.bordeR,
            styles.greenCard,
            {
              backgroundColor: GlobalStyles.Primary_yellow2,
              width: "100%",
              height: 120,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            },
          ]}
        >
          <View style={styles.rowView}>
            <View>
              <Text style={styles.headerTitle}>Buy full colony</Text>
              <Text style={styles.paragraph}>best values for wholesalers</Text>
            </View>

            <Text>
              <Text style={[styles.bold, styles.bigText]}>1,000,000</Text>Rwf
            </Text>
          </View>
          <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
            <Button
              content={
                <Text style={styles.paragraph}>Request a full batch</Text>
              }
              style={[
                {
                  backgroundColor: GlobalStyles.Tertiary_green,
                  padding: 10,
                  marginVertical: 10,
                  width: "100%",
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 2,
                  borderRadius: 12,
                },
              ]}
            />
          </Pressable>
        </View>
        <ContactUS />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
