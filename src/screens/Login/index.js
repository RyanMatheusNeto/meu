import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.bemvindo}>Bem Vindo(a)</Text>


            <View style={styles.containerForm}>

            <Text style={styles.title}>Email</Text>
            <TextInput
            placeholder="Digite um email"
            style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
            placeholder="Digite sua senha"
            style={styles.input}
            />

            <TouchableOpacity style={styles.button}
            onPress={() => {navigation.navigate('Perfil')}}
            
            >
                <Text style={styles.buttontext}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',

    },
    containerForm:{
        backgroundColor:'#FFF',
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

        paddingStart: '5%',
        paddingEnd: '5%'
    },
    bemvindo:{
        fontSize: 28,
        fontWeight: "bold",
        color: '#FFF'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth:1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',

    },
    registerText:{
        color:'#a1a1a1'
    }

})