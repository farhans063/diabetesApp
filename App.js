import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/screens/HomeScreen";
import CalendarScreen from "./src/components/screens/CalendarScreen";
import EducationScreen from "./src/components/screens/EducationScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations
  // State
  // Handlers
  // View
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={{ title: "Calendar" }}
        />
        <Stack.Screen
          name="EducationScreen"
          component={EducationScreen}
          options={{ title: "Learn about Diabetes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
