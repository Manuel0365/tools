import React, { useState } from "react";
import { FlatList, Box, VStack, HStack, Text, Icon, Image, Input, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import BaseLayout from "./BaseLayout";

const InventarioScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const productos = [
    {
      id: "1",
      titulo: "Martillo",
      precio: "$10.00",
      sku: "SKU12345",
      cantidad: 20,
      imagen: "https://via.placeholder.com/50",
    },
    {
      id: "2",
      titulo: "Taladro",
      precio: "$50.00",
      sku: "SKU54321",
      cantidad: 5,
      imagen: "https://via.placeholder.com/50",
    },
    {
      id: "3",
      titulo: "Llave Inglesa",
      precio: "$15.00",
      sku: "SKU67890",
      cantidad: 10,
      imagen: "https://via.placeholder.com/50",
    },
  ];

  // Filtra los productos según el texto de búsqueda
  const filteredProductos = productos.filter((producto) =>
    producto.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BaseLayout navigation={navigation} title="Inventario" showTabs={true}>
      {/* Barra de búsqueda */}
      <Box mb={4}>
        <Input
          placeholder="Buscar producto"
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

      {/* Lista de productos */}
      <FlatList
        data={filteredProductos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box bg="gray.100" p={4} borderRadius={8} mb={2}>
            <HStack alignItems="center" justifyContent="space-between">
              {/* Imagen del producto */}
              <Image
                source={{ uri: item.imagen }}
                alt={item.titulo}
                size="50px"
                borderRadius={8}
                mr={3}
              />

              {/* Información del producto */}
              <VStack flex={1}>
                <Text fontSize="lg" bold>
                  {item.titulo}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Precio: {item.precio}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  SKU: {item.sku}
                </Text>
              </VStack>

              {/* Cantidad */}
              <VStack alignItems="center">
                <Icon as={Ionicons} name="cube-outline" size="lg" color="orange.500" />
                <Text fontSize="sm" color="gray.500">
                  {item.cantidad}
                </Text>
              </VStack>
            </HStack>

            {/* Acciones */}
            <HStack justifyContent="space-between" mt={3}>
              {/* Ver detalles */}
              <Pressable onPress={() => console.log(`Ver detalles de ${item.titulo}`)}>
                <HStack alignItems="center">
                  <Icon as={Ionicons} name="eye" size="sm" color="blue.500" />
                  <Text color="blue.500" fontSize="sm" ml={2}>
                    Ver
                  </Text>
                </HStack>
              </Pressable>

              {/* Editar producto */}
              <Pressable onPress={() => console.log(`Editar ${item.titulo}`)}>
                <HStack alignItems="center">
                  <Icon as={Ionicons} name="create" size="sm" color="orange.500" />
                  <Text color="orange.500" fontSize="sm" ml={2}>
                    Editar
                  </Text>
                </HStack>
              </Pressable>

              {/* Eliminar producto */}
              <Pressable onPress={() => console.log(`Eliminar ${item.titulo}`)}>
                <HStack alignItems="center">
                  <Icon as={Ionicons} name="trash" size="sm" color="red.500" />
                  <Text color="red.500" fontSize="sm" ml={2}>
                    Eliminar
                  </Text>
                </HStack>
              </Pressable>
            </HStack>
          </Box>
        )}
        ListHeaderComponent={
          filteredProductos.length === 0 && search.length > 0 ? (
            <Text fontSize="md" mb={4} color="red.500" textAlign="center">
              No se encontraron productos con ese nombre.
            </Text>
          ) : (
            <Text fontSize="md" mb={4} color="gray.600">
              Lista de productos
            </Text>
          )
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </BaseLayout>
  );
};

export default InventarioScreen;
