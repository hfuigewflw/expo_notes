import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NoteList from "../screens/NoteListScreen";
import TryCode from "../screens/TryCodescreen";
import AddNote from "../screens/AddNoteScreen";
import EditNote from "../screens/EditNoteScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NoteList">
                <Stack.Screen
                    name="NoteList"
                    component={NoteList}
                    options={{
                        headerShown : false
                    }}
                />
                <Stack.Screen
                    name="AddNote"
                    component={AddNote}
                    options={{
                        headerShown : false
                    }}
                />  
                <Stack.Screen
                    name="EditNote"
                    component={EditNote}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigator;