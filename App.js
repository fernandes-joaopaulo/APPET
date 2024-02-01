import { StatusBar } from "react-native";
import Routes from "./src/components/Routes";
import NavBar from "./src/components/navBar";

export default function App() {
  return <> 
    <StatusBar/>
    <NavBar/>
    <Routes/>
  </>
}
