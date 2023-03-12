/*
  ? To run:
  1) npx expo start

  ? To publish the latest changes to expo:
  1) expo publish

  ? Project Link:
  https://expo.dev/@hardvan/InsightTracker?serviceType=classic&distribution=expo-go
*/

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [touchData, setTouchData] = useState(null);
  const [loaded] = useFonts({
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    MohaveRegular: require("./assets/fonts/Mohave-Regular.ttf"),
    MohaveBold: require("./assets/fonts/Mohave-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    // Side effect
  }, []);

  if (!loaded) {
    return <Text>Font not loaded</Text>;
  }

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
    <ImageBackground
      source={require("./assets/images/background.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.title}>InsightTracker</Text>

          {/* Initial Message */}
          {!touchData && (
            <Text style={styles.text}>Touch anywhere on the screen</Text>
          )}

          {/* Touch Data */}
          {touchData && touchData.x && touchData.y && (
            <View>
              {/* Touch Coordinates */}
              <Text style={styles.text}>
                Touch coordinates:{" "}
                <Text style={styles.data}>
                  ({touchData.x}, {touchData.y})
                </Text>
              </Text>

              {/* Touch Duration */}
              <Text style={styles.text}>
                Touch duration:{" "}
                <Text style={styles.data}>{touchData.duration}ms</Text>
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "MohaveBold",
    fontSize: 42,
    letterSpacing: 3,
    color: "#3A1078",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 20,
    color: "#2F58CD",
    textAlign: "center",
  },
  data: {
    fontFamily: "monospace",
    fontWeight: "bold",
  },
});
