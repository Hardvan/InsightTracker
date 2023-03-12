# InsightTracker

This is a React Native app that displays touch data on the screen. When you touch the screen, it will display the coordinates of your touch and the duration of your touch.

## Project Link

This project is hosted on Expo at [Expo Link](https://expo.dev/@hardvan/InsightTracker?serviceType=classic&distribution=expo-go)

## How it works

The app uses `useState` to keep track of the touch data. When you press down on the screen, it sets the start time using `setTouchData`. When you release your touch, it updates the state with the coordinates and duration of your touch using `handlePressOut`, which also updates the touchLogs state with the same information.

The app uses a `TouchableOpacity` component to handle touches. It displays an initial message when there is no touch data. Once there is touch data available, it displays the coordinates and duration of your touch.

The app uses `useFonts` from `expo-font` to load custom fonts. It checks if the fonts are loaded, and if not, it displays a message saying that the fonts are not loaded.
