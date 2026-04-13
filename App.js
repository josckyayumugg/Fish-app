import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "./constants";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wholesale from "./Screens/Wholesale";
import Menu from "./Screens/Menu";

import Registration from "./Screens/Registration";
import Logistics from "./Screens/Logistcis";
import Logis from "./Screens/Logis";
import Communications from "./Screens/Communications";
import Dishes from "./Screens/Dishes";
import FishLifeTextDemo from "./Screens/Fish-lifetextdemo";
import MealDescription from "./Screens/Mealdescription";
import LocationGallery from "./Screens/LocationGallery";
import EnvironmentImpact from "./Screens/EnvinmentImpact";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Longvideos from "./Screens/Longvideos";
import Product from "./Screens/Product";
import Shortvideos from "./Screens/Shortvideos";
import Bookmarked from "./Screens/Bookmarked";
import ContactUS from "./ui/ContactUS";
import { ImageBackground } from "react-native-web";
import Ionicons from "@react-native-vector-icons/ionicons";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded, error] = useFonts({
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "Rubik-semibold": require("./assets/fonts/NotoSans-Medium.ttf"),
    "Rubik-regular": require("./assets/fonts/NotoSans-Medium.ttf"),
    "Rubik-extrabold": require("./assets/fonts/NotoSans-ExtraBold.ttf"),
    "Rubik-italic": require("./assets/fonts/NotoSans-Italic.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  function FishLife() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen component={FishLifeTextDemo} name="FishText" />
        <Tab.Screen component={LocationGallery} name="LocationGallery" />
      </Tab.Navigator>
    );
  }
  function MealsTab() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen component={Longvideos} name="Longs" />
        <Tab.Screen component={Dishes} name="dishes" />
        <Tab.Screen component={Shortvideos} name="shorties" />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Menu} />
          <Stack.Screen
            name="wholeSale"
            component={Wholesale}
            options={{
              headerStyle: { backgroundColor: GlobalStyles.Primary_yellow },
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="stats-chart"
                    color={"white"}
                    size={20}
                    style={styles.icon}
                  />
                  <View>
                    <Text style={[styles.sectionTitle, styles.whiteT]}>
                      Wholesale Direct
                    </Text>
                    <Text style={[styles.paragraph, styles.whiteT]}>
                      Bulk pricing for resellers,restaurants & businesses
                    </Text>
                  </View>
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="logis"
            component={Logis}
            options={{
              headerStyle: { backgroundColor: GlobalStyles.Tertiary_orange },
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="car"
                    color={"white"}
                    size={20}
                    style={styles.icon}
                  />
                  <View>
                    <Text style={[styles.sectionTitle, styles.whiteT]}>
                      Logistics
                    </Text>
                    <Text style={[styles.paragraph, styles.whiteT]}>
                      Fast,fresh Delivery network
                    </Text>
                  </View>
                </View>
              ),
            }}
          />

          <Stack.Screen name="product" component={Product} />
          <Stack.Screen name="Logistics" component={Logistics} />
          <Stack.Screen name="Communication" component={Communications} />
          <Stack.Screen
            name="fishLife"
            component={FishLife}
            options={{
              headerStyle: { backgroundColor: GlobalStyles.Tertiary_orange },
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="fish"
                    color={GlobalStyles.Primary_blue}
                    size={20}
                    style={styles.icon}
                  />
                  <View>
                    <Text style={[styles.sectionTitle, styles.whiteT]}>
                      Fish_life
                    </Text>
                    <Text style={[styles.paragraph, styles.whiteT]}>
                      Explore the fish's life
                    </Text>
                  </View>
                </View>
              ),
            }}
          />
          <Stack.Screen name="meals" component={MealsTab} />
          <Stack.Screen name="bookmarked" component={Bookmarked} />

          <Stack.Screen name="OurImpact" component={EnvironmentImpact} />
          <Stack.Screen name="description" component={MealDescription} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    maxWidth: "100%",
    fontFamily: "notoSans",
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
    marginHorizontal: 8,
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
