import { Image, View, Text, StyleSheet, ScrollView } from "react-native";

export default function LocationGallery() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Gallery</Text>
      <View style={styles.container}>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-1.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-2.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-3.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-4.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-5.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-6.jpg")}
            style={styles.sectionImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-1.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-2.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-3.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-4.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-5.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-6.jpg")}
            style={styles.sectionImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-1.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-2.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-3.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-4.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-5.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-6.jpg")}
            style={styles.sectionImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-1.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-2.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-3.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-4.jpg")}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            source={require("../assets/Images/image-5.jpg")}
            style={styles.sectionImage}
          />
          <Image
            source={require("../assets/Images/image-6.jpg")}
            style={styles.sectionImage}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: "column",
  },

  mainTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },

  revealImage: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginBottom: 16,
  },

  rowView: {
    flexDirection: "row",
    marginBottom: 2,
  },

  sectionImage: {
    height: 150,
    width: "50%",

    borderRadius: 4,
    alignSelf: "center",
    objectFit: "cover",
    marginRight: 2,
  },

  sectionText: {
    flex: 1,
    justifyContent: "center",
  },

  sectionTitle: {
    fontFamily: "Rubik-Extrabold",
    fontSize: 14,
    marginBottom: 4,
  },

  paragraph: {
    fontFamily: "Rubik-Light",
    fontSize: 12,
    lineHeight: 16,
  },
});
