import React, { useState } from "react";
import { FlatList, Box, VStack, HStack, Icon, Pressable, Input, Button, } from "native-base"; // Importar el componente Button
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BaseLayout from "./BaseLayout";
import { AppStyles } from "../styles/AppStyles"; // Importar los estilos
import App from "../App";

const ProveedoresScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const proveedores = [
    { id: "1", name: "Pablo Gómez", details: "Pinturas y herramientas" },
    { id: "2", name: "María González", details: "PVC y Arena" },
    { id: "3", name: "Carlos Pérez", details: "Cemento y Acero" },
  ];

  // Filtrar proveedores según el texto de búsqueda
  const filteredProveedores = proveedores.filter((proveedor) =>
    proveedor.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProveedor = () => {
    // Acción del botón
    console.log("Agregar un nuevo proveedor");
    // Puedes implementar una navegación o un modal aquí
  };

  return (
    <BaseLayout navigation={navigation} title="Proveedores" showTabs={true}>
      
      {/* Barra de búsqueda */}
      <Box mb={4}>
        <Input
          placeholder="Buscar proveedor"
          value={search}
          onChangeText={(text) => setSearch(text)}
          bg="gray.100"
          borderRadius={8}
          borderColor="gray.300"
          InputLeftElement={
            <Icon as={Ionicons} name="search" size="md" ml={2} color="gray.500" />
          }
          px={4}
          py={2}
        />
      </Box>

      
      {/* Lista de proveedores */}
      <FlatList
        data={filteredProveedores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => console.log(`Ver detalles de ${item.name}`)} // Puedes cambiar esto por una navegación
            bg="gray.100"
            p={4}
            borderRadius={8}
            mb={2}
          >
            <HStack justifyContent="space-between" alignItems="center">
              <HStack alignItems="center">
                <Icon
                  as={Ionicons}
                  name="person-circle"
                  size="lg"
                  color="orange.500"
                  mr={3}
                />
                <VStack>
                  <Text fontSize="lg" bold>
                    {item.name}
                  </Text>
                  <Text color="blue.500">{item.details}</Text>
                </VStack>
              </HStack>
              <Icon as={Ionicons} name="chevron-forward" size="sm" color="gray.500" />
            </HStack>
          </Pressable>
        )}
        ListHeaderComponent={
          filteredProveedores.length === 0 && search.length > 0 ? (
            <Text fontSize="md" mb={4} color="red.500" textAlign="center">
              No se encontraron proveedores con ese nombre.
            </Text>
          ) : (
            <Text fontSize="md" mb={4} color="gray.600">
              Lista de proveedores
            </Text>
          )
        }
        ListEmptyComponent={
          <Box py={10} alignItems="center">
            <Text fontSize="md" color="gray.500">
              No hay proveedores disponibles.
            </Text>
          </Box>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />

<     Button onPress={""} _pressed={{ bg: "gray.400" }} style={AppStyles.buttonAgregar} mb={5}>
        <Text fontSize="30" color="white">
              +
        </Text>
      </Button>
      
    </BaseLayout>
    
    
  );
};

export default ProveedoresScreen;
