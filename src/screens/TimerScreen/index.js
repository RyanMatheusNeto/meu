import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as Progress from 'react-native-progress';

const TimerScreen = ({ route }) => {
    const { task, imagePath } = route.params;
    const [seconds, setSeconds] = useState(5 * 60); // 5 minutos em segundos
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds > 0 ? seconds - 1 : 0);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused, seconds]);

    const handleStartResume = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleStop = () => {
        setIsActive(false);
        setIsPaused(false);
        setSeconds(5 * 60); // Reset para 5 minutos
    };

    const formatTime = () => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imagePath} />
            <Text style={styles.taskText}>{task}</Text>
            <Text style={styles.timerText}>{formatTime()}</Text>
            <Progress.Bar progress={(300 - seconds) / 300} width={200} />
            <View style={styles.buttonContainer}>
                <Button title="Resetar" onPress={handleStop} />
                <Button title={isActive && !isPaused ? "Pausar" : "Iniciar"} onPress={handleStartResume} />
                <Button title="Pausar" onPress={handlePause} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    taskText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    timerText: {
        fontSize: 30,
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
    },
    // Mais estilos conforme necessário
});

export default TimerScreen;