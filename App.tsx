import React from "react";
import { StatusBar } from "react-native";

import { Box, Center, NativeBaseProvider } from "native-base";

import { Loading } from "@components/Loading";
import { loadFonts } from "@assets/fonts";

export default function App() {
  const { fontsLoaded } = loadFonts();

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="dark-content"
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
        <Loading />
      )}
    </NativeBaseProvider>
  );
}
