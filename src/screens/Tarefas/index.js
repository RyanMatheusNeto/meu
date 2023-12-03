import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Tarefas = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const maxTime = 5 * 60; // 5 minutos em segundos

    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused && currentTask) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                if (seconds >= maxTime) {
                    clearInterval(interval);
                    setIsActive(false);
                    setCurrentTask(null);
                    setSeconds(0);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused, seconds, currentTask]);

    const handleStart = (task) => {
        setCurrentTask(task);
        setIsActive(true);
        setIsPaused(false);
        setSeconds(0);
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleStop = () => {
        setIsActive(false);
        setIsPaused(false);
        setCurrentTask(null);
        setSeconds(0);
    };

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs};`
    };

    const progress = seconds / maxTime;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/perfil.png')}/>
            </View>
            <View style={styles.objectives}>
                <Text style={styles.objectivesText}>Objetivos</Text>
            </View>
            <View style={styles.taskIconContainer}>
                <TouchableOpacity onPress={() => handleStart('meditation')} style={styles.taskButton}>
                    <Icon name="universal-access" size={30} color="#000" />
                    <Text style={styles.taskText}>Meditar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStart('yoga')} style={styles.taskButton}>
                    <Icon name="child" size={30} color="#000" />
                    <Text style={styles.taskText}>Yoga</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStart('reading')} style={styles.taskButton}>
                    <Icon name="book" size={30} color="#000" />
                    <Text style={styles.taskText}>Ler</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStart('stretching')} style={styles.taskButton}>
                    <Icon name="expand" size={30} color="#000" />
                    <Text style={styles.taskText}>Alongar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStart('breathing')} style={styles.taskButton}>
                    <Icon name="cloud" size={30} color="#000" />
                    <Text style={styles.taskText}>Respirar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStart('walking')} style={styles.taskButton}>
                    <Icon name="street-view" size={30} color="#000" />
                    <Text style={styles.taskText}>Caminhar</Text>
                </TouchableOpacity>
                
            </View>
            {currentTask && (
                <View style={styles.progressBarContainer}>
                    <Progress.Bar progress={progress} width={200} />
                    <Text style={styles.time}>{formatTime(maxTime - seconds)}</Text>
                </View>
            )}
            <View style={styles.controlButtons}>
                {isActive && (
                    <Button title={isPaused ? "Retomar" : "Pausar"} onPress={handlePause} />
                )}
                <Button title="Parar" onPress={handleStop} disabled={!isActive} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        borderRadius: 100,
        width: 200,
        height: 200,
    },
    objectives: {
        marginBottom: 30,
    },
    objectivesText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    taskIconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    taskButton: {
       borderRadius:800,
        width:90,
        borderColor: '#8DDCE5',
        backgroundColor: '#8DDCE5',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    taskText: {
        marginTop: 5,
        fontSize: 12,
    },
    controlButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    time: {
        fontSize: 20,
        color: '#333',
        marginTop: 10,
    },
});

export default Tarefas;