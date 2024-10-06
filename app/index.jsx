import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push("/welcome")} />
    </ScreenWrapper>
  );
};
export default index;
