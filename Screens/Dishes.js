import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useState } from "react";
export default function Dishes() {
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  function handleNavigate() {
    return navigation.navigate("description");
  }

  return (
    <>
      <View
        style={{
          backgroundColor: GlobalStyles.Primary_yellow,
          height: "100%",
          padding: 8,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            margin: 10,
            fontFamily: "Rubik-extrabold",
          }}
        ></View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                onLoad={() => {
                  setIsLoaded(true);
                }}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",

                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginVertical: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderTopEndRadius: 15,
                flex: "1",
                width: "45%",
                borderTopStartRadius: 15,
                minHeight: 130,
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 4, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                marginTop: 30,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../assets/Images/orangedish.jpg")}
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius: 100,
                  borderColor: GlobalStyles.Tertiary_orange,
                  borderWidth: 5,
                  left: 23,
                  top: -30,
                  zIndex: 100,
                }}
              />

              <View style={{ minHeight: 70 }}>
                <Pressable onPress={handleNavigate}>
                  <Text
                    style={{
                      fontFamily: "Rubik-bold",
                      alignSelf: "center",
                      top: -10,
                    }}
                  >
                    EstoVich fish{" "}
                    <Ionicons name="arrow-forward" size={16} color={"blue"} />
                  </Text>
                  <Text
                    style={{
                      fontFamily: "",
                      fontSize: 10,
                      bottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    carrots,onions.... view more
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: "white" },
});
