import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList } from 'react-native'
import Colors from '../Constants/Colors'
import Card from '../Components/Card'
import TellText from '../Components/TellText'
import PrimaryButton from '../Components/PrimaryButton'
import GuessLogItem from '../Components/GuessLogItem'

let minNumber = 1;
let maxNumber = 100;

const getRandomNumber = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return getRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
};

const PlayGame = ({ userPickedNum, GameOverHandler }) => {
    let firstGuess = getRandomNumber(minNumber, maxNumber, userPickedNum);
    const [guessedNumber, setGuessedNumber] = useState(firstGuess);
    const [guessRounds, setGuessRounds] = useState([firstGuess]);

    const onEqualHandler = (rounds) => {
        Alert.alert(
            "Done",
            `Mobile found that number....`,
            [{ text: "OK", style: "cancel", onPress: () => GameOverHandler(rounds) }]
        );
    }


    useEffect(() => {
        if (userPickedNum === guessedNumber) {
            onEqualHandler(guessRounds.length);
        }
    }, [guessedNumber, userPickedNum, GameOverHandler])


    const nextNumberGuessHandler = direction => {
        if (
            (direction === 'lower' && guessedNumber < userPickedNum) ||
            (direction === 'higher' && guessedNumber > userPickedNum)
        ) {
            Alert.alert(
                "You lied",
                `You know it's wrong choice`,
                [
                    {
                        text: "Sorry",
                        style: "cancel"
                    },
                    { text: "OK" }
                ]
            );
            return;
        }

        if (direction === 'lower') {
            maxNumber = guessedNumber;
        } else {
            minNumber = guessedNumber + 1;
        }
        const newRndNumber = getRandomNumber(
            minNumber,
            maxNumber,
            guessedNumber,
        );
        setGuessedNumber(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
        const guessRoundListLength = guessRounds.length;
    };

    const guessRoundListLength = guessRounds.length;


    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.textStyle}>Mobile Guessed - {guessedNumber}</Text>
                <View>
                </View>
                <View style={styles.innerContainer2}>
                    <PrimaryButton onPress={nextNumberGuessHandler.bind(this, 'higher')}> + </PrimaryButton>
                    <PrimaryButton onPress={nextNumberGuessHandler.bind(this, 'lower')}> - </PrimaryButton>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    scrollEnabled={true}
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <GuessLogItem
                            roundNumber={guessRoundListLength - itemData.index}
                            guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default PlayGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        marginTop: 70,
    },

    innerContainer2: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
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
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: 30,
    },

    textStyle: {
        color: Colors.primaryWhite,
        textAlign: "center",
        fontSize: 20,
    },

    listContainer: {
        flex: 1,
        padding: 15,
    }
})