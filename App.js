import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BusinessScreen from "./src/screens/BusinessScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Business: BusinessScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);

export default createAppContainer(navigator);
