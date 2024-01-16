import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet,TouchableOpacity, FlatList } from "react-native"
import { Icon } from "react-native-elements";
import { useNavigation} from "@react-navigation/native";
import realm from "../store";

const NoteList = (props) => {
    const navigation = useNavigation();

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(realm.objects('Note'));
    }, []);

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
    return(
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Notes
                </Text>
            </View>
            <FlatList
                contentContainerStyle={styles.FlatListContainer}
                data={data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View style={styles.mainDataContainer}>
                            <TouchableOpacity
                                style={styles.noteButton}
                            >
                            <TouchableOpacity onPress={() => navigation.navigate('EditNote', {
                                noteData : item.id
                            })}>
                                <View style={styles.noteContainer}>
                                        <Text style={styles.noteText}>
                                            {item.note}
                                        </Text>
                                </View>
                            </TouchableOpacity>
                                
                                <Text style={styles.dateText}>
                                    {dateFormat(item.date)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <View style={styles.tombolContainer}>
                <TouchableOpacity 
                    style={styles.tomboltambah}
                    onPress={() => navigation.navigate('AddNote') }
                >
                    <Icon
                        name="plus"
                        type="antdesign"
                        size={24}
                        color={"white"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        padding: 8,
        backgroundColor: 'moccasin',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        padding: 8,
        fontWeight: 'bold'
    },
    tombolContainer: {
        position:'absolute',
        bottom: 16,
        right: 16,
    },
    tomboltambah: {
        backgroundColor: 'red',
        padding: 16,
        borderRadius: 100
    },
    FlatListContainer: {
        padding: 8
    },
    mainDataContainer: {
        margin: 8,
        backgroundColor:'whitesmoke',
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    noteButton: {
        flex: 1,
        padding: 8,
        margin: 8
    },
    noteButton: {
        maxHeight: 40,
        paddingBottom: 10
    },
    noteText: {
        textAlign: 'justify'
        
    },
    dateText: {
        fontSize: 12
    }
});

export default NoteList;
