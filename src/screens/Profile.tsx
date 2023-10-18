import { useState } from "react";
import { TouchableOpacity } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import {
  Center,
  Heading,
  ScrollView,
  Text,
  VStack,
  useToast,
  Skeleton,
} from "native-base";

import userPhotoDefault from "@assets/images/userPhotoDefault.png";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/gabrieladrianofx.png"
  );

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma até 5MB.",
            placement: "top",
            bgColor: "red.500",
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" onPress={() => {}} />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.800"
              endColor="gray.500"
            />
          ) : (
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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
