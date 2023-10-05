import React from "react";

import { Box, Center, NativeBaseProvider } from "native-base";

import { StatusBar, View } from "react-native";
import { loadFonts } from "@assets/fonts";

export default function App() {
  const { fontsLoaded } = loadFonts();

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? (
        <Center flex={1}>
          <Box
            _text={{
              fontFamily: "GeneralSans-Bold",
            }}
          >
            Hello world
          </Box>
        </Center>
      ) : (
        <View />
      )}
    </NativeBaseProvider>
  );
}
