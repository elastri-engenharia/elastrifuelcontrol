import { HStack, VStack, Text, Heading, Icon } from "native-base";
import { TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import userPhotoDefault from "@assets/images/userPhotoDefault.png";

import { UserPhoto } from "@components/UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="blue.900" pt={16} pb={5} px={6} alignItems="center">
      <UserPhoto
        size={16}
        source={userPhotoDefault}
        alt="Imagem do usuário"
        mr={4}
      />

      <VStack flex={1}>
        <Text color="white" fontSize="md">
          Olá,
        </Text>

        <Heading color="white" fontSize="md">
          Francisco José
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.500" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
