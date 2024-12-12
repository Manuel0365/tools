import React, { useState } from "react";
import { FlatList, Input, Box, VStack, HStack, Text, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import BaseLayout from "./BaseLayout";

const ClientesScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const clientes = [
    { id: "1", name: "Pablo Gómez", deuda: "$3000" },
    { id: "2", name: "María González", deuda: "$799" },
    { id: "3", name: "Carlos Pérez", deuda: "$560" },
  ];
  const filteredClientes = clientes.filter((cliente) =>
    cliente.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BaseLayout navigation={navigation} title="Clientes" showTabs={true}>
      <Input
        placeholder="Buscar cliente"
        value={search}
        onChangeText={setSearch}
        bg="gray.100"
        borderRadius={5}
        borderColor="gray.300"
        InputLeftElement={
          <Icon as={Ionicons} name="search" size="md" ml={2} color="gray.500" />
        }
        mb={4}
      />
      <FlatList
        data={filteredClientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HStack
            justifyContent="space-between"
            alignItems="center"
            p={4}
            bg="gray.100"
            borderRadius={8}
            mb={2}
          >
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
                <Text color="blue.500">Deuda de {item.deuda}</Text>
              </VStack>
            </HStack>
          </HStack>
        )}
      />
    </BaseLayout>
  );
};

export default ClientesScreen;
