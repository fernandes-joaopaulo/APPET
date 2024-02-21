import { Text, StyleSheet, View, Image, ScrollView} from "react-native";
import dogHouse from "../../assets/img/002.png";
import Membro from "../components/membro.js";

export default function Membros(){

    return ( <>
        <View style={styles.container}>
          <Text style={styles.header}>Membros</Text>
          <Image source={dogHouse} style={styles.image}/>
        </View>
        <ScrollView style={styles.scroll}>
            <Membro/>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({

    container:{
      backgroundColor: "#FFF",  
    },
    header:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#FDB833",
        textAlign: "center",
        marginTop: 100,
        marginBottom: 10,
    },
    image:{
        width: 110,
        height: 110,
        alignSelf: "center",
    },
    scroll:{
        backgroundColor: "#FFF",
        marginBottom: 60,
    },
})