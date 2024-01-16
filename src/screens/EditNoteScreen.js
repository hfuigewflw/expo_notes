import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { HeaderComponents, MainComponent } from "../components/NoteComponent";
import realm from "../store";
import MainNavigator from "../navigator/MainNavigator";


const EditNote = (props) => {
    const { route, navigation } = props;
    const [isEdit, setIsEdit] = useState(false);
    const id = route.params.noteData;
    const data = realm.objects('Note').filtered(`id = ${id}`);
    const dataToUpdate = data;
    const editNote = (value) => {
        setNewNote(value);
        setIsEdit(editStatus);
    };

    

    const dateFormat = (date) => {
        const months = [
            "January", "February",
            "March", "April", "May",
            "June", "July", "August",
            "September", "October",
            "November", "December"
        ];
        const noteDate = new Date(date);
        const dateOnly = noteDate.getDate();
        const monthOnly = noteDate.getMonth();
        const yearOnly = noteDate.getFullYear();

        return months[monthOnly] + '' + dateOnly + ', ' + yearOnly;
    };

    useEffect(() => {
        console.log('edit screen');
        console.log(dataToUpdate)
    }, [dataToUpdate]);

    return(
        <View style={styles.mainContainer}>
            <HeaderComponents
                title="Edit"
            />
            {
                dataToUpdate.length !== 0  ? 
                <MainComponent
                    date={dateFormat(dataToUpdate[0].date)}
                    value={isEdit ? EditNote : setIsEdit}
                    onChangeText={(text) => editNote(text, true) }
                />
                :
                null 
                    
            }
            
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default EditNote