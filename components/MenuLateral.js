import React from "react";
import { Image, Box, VStack, Text, Pressable, Icon, HStack } from "native-base";
import { StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const MenuLateral = ({ navigation }) => {
  return (
    <Box bg="white" flex={1} safeArea px={4}>
      {/* Botón "X" para cerrar el menú */}
      <HStack justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="xl" bold color="gray.700">
          Menú
        </Text>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <Icon as={Ionicons} name="close" size="lg" color="black" />
        </Pressable>
      </HStack>

      {/* Opciones del menú */}
      <VStack space={4}>
        <Pressable
          onPress={() => {
            navigation.navigate("Proveedores");
            setTimeout(() => navigation.closeDrawer(), 300); // Cierra el menú después de navegar
          }}
        >
        <Image 
          source={require('../assets/toolsmanager.png')} 
          style={styles.image} 
        />
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="lg" color="blue.600">
            Proveedores
          </Text>
            <Icon as={Ionicons} name="chevron-forward" size="sm" color="blue.600" />
          </HStack>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("Navegando a Clientes");
            navigation.navigate("Clientes");
            setTimeout(() => navigation.closeDrawer(), 300); // Cierra el menú después de navegar
          }}
        >
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" color="blue.600">
              Clientes
            </Text>
            <Icon as={Ionicons} name="chevron-forward" size="sm" color="blue.600" />
          </HStack>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("Navegando a Inventario");
            navigation.navigate("Inventario");
            setTimeout(() => navigation.closeDrawer(), 300); // Cierra el menú después de navegar
          }}
        >
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" color="blue.600">
              Inventario
            </Text>
            <Icon as={Ionicons} name="chevron-forward" size="sm" color="blue.600" />
          </HStack>
        </Pressable>
      </VStack>

      {/* Botón para cerrar sesión */}
      <Box mt="auto" mb={4}>
        <Pressable
          onPress={() => {
            console.log("Cerrando sesión");
            navigation.replace("Login");
            setTimeout(() => navigation.closeDrawer(), 300); // Cierra el menú después de cerrar sesión
          }}
        >
          <HStack
            alignItems="center"
            justifyContent="center"
            bg="blue.100"
            borderRadius="full"
            py={3}
            px={4}
          >
            <Icon as={Ionicons} name="exit-outline" size="sm" color="blue.600" />
            <Text ml={2} fontSize="md" bold color="blue.600">
              Cerrar Sesión
            </Text>
          </HStack>
        </Pressable>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 1500,
    height: 100,
    resizeMode: 'center', // Otros valores: 'contain', 'stretch', 'center'
    marginBottom: '50',
  },
});

export default MenuLateral;
