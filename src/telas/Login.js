import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({navigation}){
   
    const [hidePass, setHidePass] = useState(true);
    const [iconEye, setIconEye] = useState("eye");    

    function showPass(){
        
        setHidePass(!hidePass);

        if(iconEye == "eye"){
            setIconEye("eye-off");
        }else{
            setIconEye("eye");
        }
    }

    return ( <>
        <View style={styles.container}>
            <Text style={styles.title}>Faça login</Text>
            <View style={styles.card}>
                
                <Text style={styles.label} multiline={false}>Email</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input}/>
                </View>
                
                <Text style={styles.label}>Senha</Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} secureTextEntry={hidePass}/>
                    <TouchableOpacity onPress={showPass}>
                        <MaterialCommunityIcons name={iconEye} size={20}/>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('Gerenciamento')}>
                    <View style={styles.btn}>
                        <Text style={styles.textBtn}>Login</Text>
                        <MaterialCommunityIcons name="paw" size={30} color={"#FFF"}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </>
    );
};

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#5A97D6",
        height: "100%",
        justifyContent: "center",
    },
    title:{
        color: "#FFF",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",   
        marginBottom: 40,     
    },
    card:{
        borderWidth: 0.5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 30,
        alignSelf: "center",
        justifyContent: "center",
    },
    label:{
        color: "#FFF",
        fontWeight: "bold",
    },
    inputArea:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFF",
        width: 223,
        height: 34,
        borderWidth: 1,
        borderRadius: 8,
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
        borderColor: "gray",
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    input:{
        backgroundColor: "#FFF",
        width: "90%",
        height: 32,
    },
    btn:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FDB833",
        width: 168,
        height: 52,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    textBtn:{
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 30,
        paddingRight: 10,
    },
});