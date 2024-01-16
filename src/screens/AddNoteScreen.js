import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { HeaderComponents, MainComponent } from "../components/NoteComponent";
import realm from "../store";

const AddNote = (props) => {
  const [tempNote, setTempNote] = useState('');
  const currentDate = getDate();

const saveNote = () => {
    if (tempNote.trim() !== '') {
        const allData = realm.objects('Note');
        const dataLength = allData.length;
        const lastIdFromRealm = dataLength !== 0 ? allData[dataLength - 1].id : 0;

    realm.write(() => {
        realm.create("Note", {
            id: dataLength === 0 ? 1 : lastIdFromRealm + 1,
            note: tempNote,
            date: new Date().toISOString(),
            });
        });
            Alert.alert('Success', 'Your data is saved.');
        } else {
            Alert.alert('Error', 'Empty note!');
        }
    };

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

return (
    <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <HeaderComponents title="create" onPress={saveNote} />
        </View>
        <MainComponent
            date={currentDate}
            onChangeText={(text) => setTempNote(text)}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    },
    headerContainer: {
    // Add styles for your header container if needed
    },
});

export default AddNote;

