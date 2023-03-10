/*
  ? To run:
  1) npx expo start

  ? To publish the latest changes to expo:
  1) expo publish

  ? Project Link:
  https://expo.dev/@hardvan/InsightTracker?serviceType=classic&distribution=expo-go
*/

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [touchData, setTouchData] = useState(null);

  const handlePressIn = (event) => {
    setTouchData({ startTime: new Date().getTime() });
  };

  const handlePressOut = (event) => {
    // Get the coordinates of the touch
    const { locationX, locationY } = event.nativeEvent;

    // Update the state with the touch data
    setTouchData((prevState) => ({
      ...prevState, // Keep the previous state

      // Touch Coordinates
      x: locationX.toFixed(2),
      y: locationY.toFixed(2),

      // Touch Duration
      duration: new Date().getTime() - prevState.startTime,
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {/* Initial Message */}
        {!touchData && (
          <Text style={styles.text}>Touch anywhere on the screen</Text>
        )}
        {/* Touch Data */}
        {touchData && touchData.x && touchData.y && (
          <View>
            {/* Touch Coordinates */}
            <Text style={styles.text}>
              You touched at coordinates: ({touchData.x}, {touchData.y})
            </Text>
            {/* Touch Duration */}
            <Text style={styles.text}>
              Touch duration: {touchData.duration}ms
            </Text>
          </View>
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a148c",
  },
});
