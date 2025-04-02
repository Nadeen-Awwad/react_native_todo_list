import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./components/Task";

function HomeScreen() {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);

    const handleTask = () => {
        if (task) {
            Keyboard.dismiss();
            setTaskItems([...taskItems, task]);
            setTask('');
        }
    };

    const completeTask = (index) => {
        const updatedTasks = taskItems.filter((_, i) => i !== index);
        setTaskItems(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.titleSection}>Todo List App</Text>
                <View style={styles.items}>
                    {taskItems.map((item, index) => (
                        <Task key={index} text={item} onDelete={() => completeTask(index)} />
                    ))}
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Write a task"
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={handleTask}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addTask}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    items: {
        marginTop: 20
    },
    titleSection: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'
    },
    tasksWrapper: {
        paddingHorizontal: 20,
        paddingTop: 90
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 60,
        backgroundColor: '#FFF'
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        alignItems: 'center'
    },
    addTask: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default HomeScreen;
