import { View, Text } from "react-native";

export default function Button({ content, style }) {
  return (
    <View>
      <Text style={[style, { alignContent: "center", textAlign: "center" }]}>
        {content}
      </Text>
    </View>
  );
}
