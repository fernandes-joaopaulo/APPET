import { Text, Image, StyleSheet, View, TouchableOpacity, ScrollView, Linking} from "react-native";

import dog from "../../assets/img/001.png";
import mapa from "../../assets/img/foto-contato.jpg"

import iconIg from "../../assets/img/icon-instagram.png";
import iconFb from "../../assets/img/icon-facebook.png";
import iconLk from "../../assets/img/icon-linkedin.png";
import iconTel from "../../assets/img/icon-phone.png";
import iconMail from "../../assets/img/icon-contato-black.png";
import iconLocal from "../../assets/img/icon-local.png";


export default function Contato(){
    return <>
    <View style={styles.topo}>
        <Image source={dog} style={styles.dogImage}/>
        <TouchableOpacity style={styles.botaoTopo}>
            <Text style={styles.textTopo}>Nos siga nas redes sociais!</Text>
        </TouchableOpacity>
    </View>
    <ScrollView style={styles.container}>
        
        <Text style={styles.header}>Redes sociais</Text>
        
        <View style={styles.media}>
            <Image source={iconIg} style={styles.icons} /> 
            <Text style={styles.mediaText} onPress={() => {Linking.openURL('https://instagram.com');}} > appet </Text>
        </View>
        <View style={styles.media}>
            <Image source={iconFb} style={styles.icons}/>
            <Text style={styles.mediaText} onPress={() => {Linking.openURL('https://facebook.com');}}>Appet Ltda</Text>
        </View>
        <View style={styles.media}>
            <Image source={iconLk}  style={styles.icons}/>
            <Text style={styles.mediaText} onPress={() => {Linking.openURL('https://linkedin.com');}}>Appet Ltda</Text>
        </View>

        <Text style={styles.header}>Contato</Text>

        <View style={styles.media}>
            <Image source={iconTel} style={styles.icons} /> 
            <Text style={styles.mediaText}> 0800 310 0002 </Text>
        </View>
        <View style={styles.media}>
            <Image source={iconMail} style={styles.icons}/>
            <Text style={styles.mediaText}> sac@appet.com.br</Text>
        </View>
        <View style={styles.media}>
            <Image source={iconLocal}  style={styles.icons}/>
            <Text style={styles.mediaText} >Avenida das Américas, 1400 - São Paulo, SP</Text>
        </View>

        <Image source={mapa} style={styles.mapa}/>
        <Text style={styles.descricao}>
            Fundada em 2024, a APPET Distrbuidora Ltda preza por um serviço 
            de qualidade e excelência aos seus clientes.
            Localizada em São Paulo, possui centros de distribuição por todo o país.  
         </Text>

    </ScrollView>
</>
}

const styles = StyleSheet.create({

    topo:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "#FFF",
    },
    dogImage:{
        width: 100,
        height: 100,
    },
    botaoTopo:{
        backgroundColor: "#5A97D6",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: "center",
        height: 80,
        marginTop: 10,
    },
    textTopo:{
        color: "#FFF",
        width: 150,
        textAlign: "center",
    },
    container:{
        backgroundColor: "#FFF",
    },
    header:{
        fontSize: 32,
        fontWeight: "bold",
        color: "#FDB833",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    media:{
        display: "flex",
        flexDirection: "row",
        padding: 18,
        borderWidth: 0.2,
        borderColor: "gray",
    },
    mediaText:{
        fontSize: 28,
        width: 300,
    },
    icons:{
        width: 40,
        height: 40,
        marginRight: 10,
    },
    mapa:{
        height: 300,
        alignSelf: "center",
    },
    descricao:{
        paddingBottom: 100,
        paddingTop: 20,
        paddingLeft: 10,
        backgroundColor: "#5A97D6"
    },
})