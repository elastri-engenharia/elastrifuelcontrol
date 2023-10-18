import { TouchableOpacity } from "react-native";

import { HStack, Heading, Icon, Image } from "native-base";

import logoScreenHeader from "@assets/images/logoScreenHeader.png";

import { MaterialIcons } from "@expo/vector-icons";

type ScreenHeaderProps = {
  title: string;
  onPress: () => void;
};

export function ScreenHeader({ title, onPress }: ScreenHeaderProps) {
  return (
    <HStack
      bg="blue.900"
      pt={16}
      pb={1}
      alignItems="center"
      justifyContent="space-around"
    >
      <TouchableOpacity onPress={onPress}>
        <Icon
          as={MaterialIcons}
          name="keyboard-arrow-left"
          size={9}
          color="white"
        />
      </TouchableOpacity>

      <Heading color="white" fontFamily="heading" fontSize="lg">
        {title}
      </Heading>

      <Image source={logoScreenHeader} alt="Logo do cabeçalho da tela" />
    </HStack>
  );
}
