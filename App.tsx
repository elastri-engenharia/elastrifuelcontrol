import React from "react";
import { StatusBar } from "react-native";
import { Box, Center, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider isSSR>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Center flex={1}>
        <Box>Hello world</Box>
      </Center>
    </NativeBaseProvider>
  );
}
