import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="login"
        component={Login}
      />
      {/* <Screen
        name="dashboard"
        component={Home}
      /> */}
    </Navigator>
  );
}

export default AppRoutes;