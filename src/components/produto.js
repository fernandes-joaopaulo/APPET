import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Produto({nome, preco, image}){

    return(

        <View style={styles.destaque} >
            <TouchableOpacity style={styles.botaoProduto}>
                <Image source={require('../../assets/img/produto_01.png')} style={styles.image}/>
            </TouchableOpacity>

            <Text style={styles.nomeProduto}> {nome} </Text>
            <Text style={styles.precoProduto}> {preco} </Text>
        
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#FFF",
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    destaque:{
        marginBottom: 20,
        marginLeft: 50,
    },
    image:{
        width: 70,
        height: 100,
    },
    botaoProduto:{
        borderWidth: 0.5,
        borderRadius: 8,
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nomeProduto:{
        fontWeight: 'bold',
        fontSize: 12,
        width: 110,
    },
    precoProduto:{
        fontWeight: 'bold',
        color: '#49B637'
    },
});