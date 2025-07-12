import { Pressable, Text } from "react-native";

export const MobileButton = ({ text="Hello world" }: any) => {
  return (
    <Pressable className="bg-red-400 p-4 rounded-full justify-center items-center">
      <Text className="text-white"> {text}
      </Text>
    </Pressable>
  );
};
