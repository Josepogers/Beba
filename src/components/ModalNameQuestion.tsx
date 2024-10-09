import { View, Text } from "react-native";

type ModalNameQuestionProps = {
  visible?: boolean;
};
const ModalNameQuestion = ({ visible = true }: ModalNameQuestionProps) => {
  if (!visible) {
    return;
  }
 
  return (
    <View>
      <Text>modal</Text>
    </View>
  );
};

export { ModalNameQuestion };
