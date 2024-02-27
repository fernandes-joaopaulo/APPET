import { Image, TouchableHighlight, StyleSheet, View} from "react-native"
import logo from "../../assets/img/logo.png"
import iconConfig from "../../assets/img/icon-config.png";

export default function NavBar({ navigation }){

    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor={"#FFF"} onPress={() => navigation.navigate('Home')}>
              <Image source={logo}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.configButton} underlayColor={"#FFF"} onPress={() => navigation.navigate('Gerenciamento')} >
                <Image source={iconConfig} style={styles.imageButton}/>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFF"
    },
    configButton: {
        backgroundColor: "#FDB833",
        borderRadius: 1000,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginRight: 10,
    },
    imageButton: {
        width: 30,
        height: 30,
    },
  });
  