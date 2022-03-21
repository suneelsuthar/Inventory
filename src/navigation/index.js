import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  AddItem,
  AddItemType,
  AddNewItem,
  AllItems,
  Filter,
  Item,
  ItemDetails,
  SelectItemType,
  AddItemWithHsn,
} from "./../screens";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="AddItemType" component={AddItemType} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="AddNewItem" component={AddNewItem} />
        <Stack.Screen name="AllItems" component={AllItems} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="SelectItemType" component={SelectItemType} />
        <Stack.Screen name="AddItemWithHsn" component={AddItemWithHsn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
