import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Possible unhandled"]); // Ignore log notification by message

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BudgetList"
          component={BudgetList}
          options={{
            headerTitle: "My Budgets",
            //headerLargeTitle: true,
          }}
        />
        <Stack.Screen
          name="BudgetDetail"
          component={Home}
          initialParams={{ name: "Personal Budget" }}
          options={({ route }) => ({
            headerTitle: route.params ? (route.params as any).name : "",
            headerLargeTitle: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BudgetList({ navigation, route, options, back }: any) {
  const budgets = ["Food", "Travel", "Family"];

  const deleteBudget = (name: string) => {};

  return (
    <ScrollView>
      {budgets.map((budgetName) => {
        return (
          <View key={budgetName}>
            <TouchableOpacity
              activeOpacity={0.7}
              onLongPress={() => deleteBudget(budgetName)}
              onPress={() =>
                navigation.push("BudgetDetail", { name: budgetName })
              }
            >
              <Text style={{ margin: 15, fontSize: 18 }}>{budgetName}</Text>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "#00000020" }} />
          </View>
        );
      })}
    </ScrollView>
  );
}
