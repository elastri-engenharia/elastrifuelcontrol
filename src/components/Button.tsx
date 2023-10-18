import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase w="full" h={14} bg="blue.900" rounded="sm" {...rest}>
      <Text color="white" fontFamily="heading" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
