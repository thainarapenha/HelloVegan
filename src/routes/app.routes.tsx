import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateAccount } from "@screens/CreateAccount";
import { Dashboard } from "@screens/Dashboard";
import { Details } from "@screens/Details";
import { Login } from "@screens/Login";
import { UserAccount } from "@screens/UserAccount";

const { Navigator, Screen } = createNativeStackNavigator();

type StackNavigation = {
  login: undefined;
  account: undefined;
  dashboard: undefined;
  user: undefined;
  details: undefined;
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
      <Screen
        name="dashboard"
        component={Dashboard}
      />
      <Screen
        name="user"
        component={UserAccount}
      />
      <Screen
        name="details"
        component={Details}
      />
    </Navigator>
  );
}

export default AppRoutes;