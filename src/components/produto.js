import { Text, StyleSheet, View, TouchableOpacity, Image, Modal, Dimensions } from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Produto({nome, preco, image, descricao}){

    const [modalVisible, setModalVisible] = useState(false);
    const [produtoAtual, setProdutoAtual] = useState([nome, preco, image, descricao]);

    return(<>

        <View style={styles.destaque} >
            <TouchableOpacity style={styles.botaoProduto} onPress={() => setModalVisible(!modalVisible)}>
                <Image 
                source={{uri: image}} 
                style={styles.image} 
                loadingIndicatorSource={{uri: "https://www.doutoresdoexcel.com.br/wp-content/uploads/2021/07/Loading-PNG.gif"}}
                />
            </TouchableOpacity>

            <Text style={styles.nomeProduto}> {nome} </Text>
            <Text style={styles.precoProduto}> {preco} </Text>
        
        </View>

        <Modal
        style={styles.modal}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
            <View style={{backgroundColor: '#fcfcfc'}}>
                <TouchableOpacity style={{width: 70, position: "absolute"}} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.goBack}>Voltar</Text>
                </TouchableOpacity>

                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: produtoAtual[2]}} style={styles.modalImage} resizeMode='contain'/>
                </View>

                <View style={styles.descricao}>
                    <Text style={styles.name}>{produtoAtual[0]}</Text>
                    <Text style={styles.preco}>{produtoAtual[1]}</Text>
                    <Text style={styles.txt}>{produtoAtual[3]}</Text>
                </View>

            </View>   

                <TouchableOpacity style={styles.botao}>

                    <Text style={styles.botaoTxt}>Adicionar ao carrinho</Text>
                    <MaterialCommunityIcons name="cart-variant" color={"#FFF"} size={60}/>

                </TouchableOpacity>
     
        </Modal>
        </>
    );
}

const height = Dimensions.get('screen').height;

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

    ////////////////////MODAL/////////////////////
    modal:{
        height: height,
    },
    goBack:{
        fontSize: 18,
        padding: 10,
        color: '#FDB833',
    },
    modalImage:{
        width: 300,
        height: 400,
    },
    descricao:{
        textAlign: 'left',
        backgroundColor: '#fff',
        height: height - 400,
    },
    name:{
        fontSize: 28,
        fontWeight: 'bold',
        padding: 15
    },
    preco:{
        fontSize: 26,
        padding: 15,
        fontWeight: 'bold',
        color: '#49B637'
    },
    txt:{
        fontSize: 18,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 5,
    },
    botao:{
        width: 220,
        height: 80,
        backgroundColor: "#49B637",
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        top: height - 200,
        position: 'absolute'
    },
    botaoTxt:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        width: 100,
    }
});