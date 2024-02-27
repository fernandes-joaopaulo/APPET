import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import api from '../services/api.js';

export default function Produto(){
    
    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
        api.get('/produtos').then((response) => {
            const data = response.data;
            setProdutos(data); 
        }).catch(error => {
            console.error('Erro ao carregar produtos:', error);
        });
    }, []);
    
    return(

        <View style={styles.container}>
            
        {produtos.slice(0, 4).map((produto, index) => (

        <View style={styles.destaque} key={index}>

            <TouchableOpacity style={styles.botaoProduto}>
                <Image source={produto.url} style={styles.image}/>
            </TouchableOpacity>

            <Text style={styles.nomeProduto}> {produto.nome} </Text>
            <Text style={styles.precoProduto}> {produto.preco} </Text>
        
        </View>
        
        ))}

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