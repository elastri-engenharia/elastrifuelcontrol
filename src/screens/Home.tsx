import { HomeHeader } from "@components/HomeHeader";
import { VStack, HStack, Box, Text } from "native-base";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <VStack px={6}>
        <Text fontFamily="mono" fontSize="md" pt={8} pb={3}>
          Status sobre o armazenamento do seu comboio díario:
        </Text>

        <Box bg="gray.500" rounded="md" borderWidth={3} pt={3} px={3}>
          <HStack pb={3}>
            <Text flex={1} fontFamily="mono" fontSize="md">
              Anterior armazenado:
            </Text>
            <Text fontFamily="body" fontSize="md">
              6292
            </Text>
          </HStack>

          <HStack pb={3}>
            <Text flex={1} fontFamily="mono" fontSize="md">
              Abastecido:
            </Text>
            <Text fontFamily="body" fontSize="md">
              6000
            </Text>
          </HStack>

          <HStack pb={3}>
            <Text flex={1} fontFamily="mono" fontSize="md">
              Consumo (saída):
            </Text>
            <Text fontFamily="body" fontSize="md">
              5202
            </Text>
          </HStack>

          <HStack pb={3}>
            <Text flex={1} fontFamily="mono" fontSize="md">
              Armazenado p/ dia seguinte:
            </Text>
            <Text fontFamily="body" fontSize="md">
              7090
            </Text>
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
}
