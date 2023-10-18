import { TouchableOpacity } from "react-native";
import { Center, Heading, ScrollView, Text, VStack } from "native-base";

import userPhotoDefault from "@assets/images/userPhotoDefault.png";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

const PHOTO_SIZE = 33;

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" onPress={() => {}} />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          <UserPhoto
            source={userPhotoDefault}
            size={PHOTO_SIZE}
            alt="Foto do usuário"
          />

          <TouchableOpacity>
            <Text color="black" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input bg="gray.800" placeholder="Nome" />

          <Input
            bg="gray.500"
            placeholderTextColor="gray.900"
            placeholder="francisco12546"
            isDisabled
          />

          <Heading
            color="black"
            fontSize="md"
            alignSelf="flex-start"
            mb={2}
            mt={12}
          >
            Alterar senha
          </Heading>

          <Input bg="gray.800" placeholder="Senha antiga" secureTextEntry />

          <Input bg="gray.800" placeholder="Nova senha" secureTextEntry />

          <Input
            bg="gray.800"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
