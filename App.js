import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.SignupTextContainer}>
                <Text style={styles.SignupText}>Sign up</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Username" />

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Email" />


                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                    placeholder="Password" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                    placeholder="Password again" />
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>You already have an account?</Text>
                <Text style={styles.LoginText}>Login</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 50
    },

    SignupText: {
        fontSize: 50,
        color: "#5100ad",

    },

    SignupTextContainer: {
        marginBottom: 30
    },

    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#5100ad",
        fontSize: 20,
        height: 50,
        marginTop: 20

    },


    buttonContainer: {
        height: 50,
        backgroundColor: "#5100ad",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 50
    },
    buttonText: {
        color: "white",
        fontSize: 25
    },

    noAccountContainer: {
        flexDirection: "row",
        justifyContent: "center"

    },

    noAccountText: {
        marginRight: 10,
        fontSize: 16
    },

    LoginText: {
        fontSize: 16,
        color: "#5100ad"
    }
})


