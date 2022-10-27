import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import Colors from "../Constants/Colors"
import PrimaryButton from '../Components/PrimaryButton'
import Card from '../Components/Card'
import TellText from "../Components/TellText"




const Welcome = ({ onSubmitClick }) => {


    const [textBoxValue, setTextBoxValue] = useState()
    const { width, height } = useWindowDimensions()
    console.debug(width)
    console.debug(height)

    const onResetHandler = () => {
        setTextBoxValue('');
    }

    const onSubmitHandler = () => {
        const num = parseInt(textBoxValue)

        if (!num || num < 1 || num > 99) {
            Alert.alert(
                num === 0 ? "Wrong Number" : !num ? "Empty number feild" : null,
                "Enter a number between 1 - 10 ",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "OK", onPress: onResetHandler }
                ]
            );
        }
        onSubmitClick(num);
    }

    const inputHandler = (num) => {
        setTextBoxValue(num);
    }

    const marginTop = height < 415 ? 5 : 100
    const marginTopForCard = height < 415 ? 15 : 50

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.container, { marginTop: marginTop }]}>
                    <TellText>Let's Play</TellText>
                    <Card style={{ marginTop: marginTopForCard }} >
                        <View>
                            <Text style={styles.textStyle}>Enter a number</Text>
                            <TextInput
                                style={styles.TextInputNumber}
                                value={textBoxValue}
                                maxLength={2}
                                onChangeText={inputHandler}
                            />
                        </View>
                        <View style={styles.innerContainer2}>
                            <PrimaryButton onPress={onResetHandler}>reset</PrimaryButton>
                            <PrimaryButton onPress={onSubmitHandler}>Submit</PrimaryButton>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

export default Welcome;
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },

    innerContainer2: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        alignItems: "center",
    },
    TextInputNumber: {
        height: 50,
        width: 260,
        fontSize: 20,
        marginBottom: 20,
        borderBottomColor: Colors.primary1,
        borderBottomWidth: 1,
        color: Colors.primaryWhite,
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: 30,
    },

    textStyle: {
        color: Colors.primaryWhite,
        textAlign: "center",
        fontSize: 20,
    },
})