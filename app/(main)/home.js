import { View, Text, Alert } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Button from "../../components/Button";
import { useAuth } from "../../context/authContext";
import { supabase } from "../../lib/superbase";
const Home = () => {
  const { user, setAuthUser } = useAuth();
  console.log("🚀 ~ Home ~ user:", user);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Logout", error.message);
    }
  };
  return (
    <ScreenWrapper>
      <Text>{user?.name}</Text>
      <Button title="Logout" onPress={logout} />
    </ScreenWrapper>
  );
};
export default Home;
