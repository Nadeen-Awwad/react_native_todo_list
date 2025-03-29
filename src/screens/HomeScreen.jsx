import { StyleSheet, Text, View } from "react-native";

import Task from "./components/Task";
function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.titleSection}>Todo List App</Text>
                <View style={styles.items}></View>
                <Task  text={'DKNF'}/>
                <Task  text={'DKNF'}/>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    items: {
        marginTop:20


    },
    titleSection: {
        fontSize: 24
    },
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'

    },
    tasksWrapper: {
        paddingHorizontal: 20,
        paddingTop: 90
    }
});

export default HomeScreen;