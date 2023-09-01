// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constant from "../Constant";

import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import Icon from 'react-native-vector-icons/Ionicons'

const AppStack = createStackNavigator();
import { StatusBar } from "react-native";
import MovieDetail from "../components/MovieDetail";
import DiscoverMovie from "../screens/DiscoverMovie";
import Input from "../components/Input";
import SearchScreen from "../components/SearchScreen";

export default function Navigation({ colorScheme, }) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="white" />
      <AppStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} options={headerStyle} />
        <AppStack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
        <AppStack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />


      </AppStack.Navigator>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal

const headerStyle = {
  title: "Movie",
  headerStyle: { backgroundColor: Constant.baseColor },
  headerTitleStyle: { color: Constant.textColor },
  headerLeft: () => <Icon name="menu" size={34} color={Constant.textColor} />,
  headerRight: () => <Input />
}