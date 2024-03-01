import { Text, StyleSheet, View, TouchableHighlight, Image } from "react-native";
import Produto from "../components/produto.js";
import React from "react";
import api from '../services/api.js';

export default function Home({navigation}){

    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
        api.get('/produtos').then((response) => {
            const data = response.data;
            setProdutos(data); 
        }).catch(error => {
            console.error('Erro ao carregar produtos:', error);
        });
    }, []);

    return ( <>
        <View style={styles.topo}>
            <TouchableHighlight style={styles.botaoTopo}>
                <Text style={styles.textTopo}>
                    Aqui você encontra os melhores produtos para 
                    o seu pet à distância de um clique.
                </Text>
            </TouchableHighlight>
            <Image source={require('../../assets/img/007.png')} style={styles.dogImage}/>
        </View>

        <Text style={styles.header}>Produtos em destaque</Text>

        <View style={styles.container}>
        
        {produtos.slice(0, 4).map((produto, index) => (

            <Produto nome={produto.nome} preco={produto.preco} image={produto.url} key={index}/>

        ))}
        
        </View>

        <View style={styles.bottomText}>
            <Text style={styles.header}>Outros produtos</Text> 
            <Text style={styles.textBtn}  onPress={() => navigation.navigate('Todos')}>Ver todos</Text>
        </View>
                    
    </>
    );
};

const styles = StyleSheet.create({

    topo:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFF",
    },
    dogImage:{
        width: 100,
        height: 100,
    },
    botaoTopo:{
        backgroundColor: "#5A97D6",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "center",
        height: 80,
        marginTop: 10,
    },
    textTopo:{
        color: "#FFF",
        width: 230,
        fontSize: 13,
        textAlign: "left",
        paddingLeft: 15,
    },
    header:{
        fontWeight: "bold",
        fontSize: 18,
        padding: 15,
        backgroundColor: "#FFF"
    },
    bottomText:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
    },
    textBtn:{
        color: "#FDB833",
        fontWeight: "bold",
        fontSize: 14,
        paddingRight: 10,
    },
    container:{
        backgroundColor: "#FFF",
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap'
    },
});