import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";

// Importación de pantallas
import InicioScreen from "./components/InicioScreen";
import NotificacionesScreen from "./components/NotificacionesScreen";
import ProveedoresScreen from "./components/ProveedoresScreen";
import ClientesScreen from "./components/ClientesScreen";
import InventarioScreen from "./components/InventarioScreen";
import MenuLateral from "./components/MenuLateral";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  // Drawer Navigator
  const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <MenuLateral {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="Inicio" component={InicioScreen} />
    <Drawer.Screen name="Notificaciones" component={NotificacionesScreen} />
    <Drawer.Screen name="Proveedores" component={ProveedoresScreen} />
    <Drawer.Screen name="Clientes" component={ClientesScreen} />
    <Drawer.Screen name="Inventario" component={InventarioScreen} />
  </Drawer.Navigator>
);

  return (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
);
};

export default App;
