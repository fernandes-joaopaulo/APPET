import { StyleSheet, View, Text } from "react-native";

export default function Login(){
    return ( <>
        <View style={styles.container}>
            <Text style={styles.title}>Olá</Text>
        </View>
    </>
    );
};

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#5A97D6",
        height: "100%",
    },
    title:{
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 80,        
    },
})