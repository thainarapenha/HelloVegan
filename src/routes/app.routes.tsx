import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateAccount } from "@screens/CreateAccount";
import { Login } from "@screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

type StackNavigation = {
  login: undefined;
  account: undefined;
}

export type StackTypes =  NativeStackNavigationProp<StackNavigation>;

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="account"
        component={CreateAccount}
      />
    </Navigator>
  );
}

export default AppRoutes;