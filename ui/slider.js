import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import { GlobalStyles } from "../constants"; // Adjust path to your constants

export default function PriceSlider({
  label,
  min,
  max,
  step,
  half,
  value,
  setValue,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>
          {label}:{value}
        </Text>
      </View>

      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={(val) => setValue(val)}
        minimumTrackTintColor={GlobalStyles.Secondary_green}
        maximumTrackTintColor={GlobalStyles.Secondary_grey}
        thumbTintColor={GlobalStyles.Primary_yellow}
      />

      <View style={styles.rangeRow}>
        <Text style={styles.rangeText}>{min}</Text>
        <Text style={styles.rangeText}>{half}</Text>
        <Text style={styles.rangeText}>{max}+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontFamily: "Rubik-semibold",
    fontSize: 16,
    color: "black",
  },
  valueText: {
    fontFamily: "Rubik-bold",
    fontSize: 16,
    color: GlobalStyles.Secondary_green,
  },
  rangeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -5,
  },
  rangeText: {
    fontFamily: "Rubik-regular",
    fontSize: 12,
    color: "#888",
  },
});
