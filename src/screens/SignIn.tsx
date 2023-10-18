import { Center, Heading, Image, VStack } from "native-base";

import backgrounImg from "@assets/images/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack flex={1} px={6}>
      <Image
        source={backgrounImg}
        defaultSource={backgrounImg}
        alt="Logo Elastri"
        resizeMode="contain"
        position="absolute"
      />

      <Center flex={1}>
        <Heading color="white" fontSize="xl" mb={5}>
          Acesse sua conta
        </Heading>

        <Input
          placeholder="Matrícula"
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />
      </Center>
    </VStack>
  );
}
