import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [touchData, setTouchData] = useState(null);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setTouchData({ x: locationX.toFixed(2), y: locationY.toFixed(2) });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        {/* Initial Message */}
        {!touchData && <Text>Touch anywhere on the screen</Text>}
        {/* After touch */}
        {touchData && (
          <Text>
            You touched at coordinates: ({touchData.x}, {touchData.y})
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
