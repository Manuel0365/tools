import React from "react";
import { Box, Text, VStack, HStack, Input, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import BaseLayout from "./BaseLayout";

const NotificacionesScreen = ({ navigation }) => {
  return (
    <BaseLayout navigation={navigation} title="Notificaciones">
      {/* Campo de búsqueda */}
      <Box px={4} py={2}>
        <Input
          placeholder="Buscar notificación"
          variant="filled"
          bg="gray.100"
          borderRadius="lg"
          InputLeftElement={
            <Icon as={<Ionicons name="search-outline" />} size={5} ml={2} color="gray.500" />
          }
        />
      </Box>

      {/* Lista de notificaciones */}
      <VStack space={4} px={4} py={2}>
        <Pressable onPress={() => console.log("Notificación 1 seleccionada")}>
          <HStack justifyContent="space-between" alignItems="center" borderBottomWidth={1} borderBottomColor="gray.200" pb={2}>
            <VStack>
              <Text color="red.600" fontWeight="bold">
                Faltan más brochas
              </Text>
              <Text color="gray.500">Solo quedan 1</Text>
            </VStack>
            <Ionicons name="chevron-forward" size={24} color="gray.500" />
          </HStack>
        </Pressable>

        <Pressable onPress={() => console.log("Notificación 2 seleccionada")}>
          <HStack justifyContent="space-between" alignItems="center" borderBottomWidth={1} borderBottomColor="gray.200" pb={2}>
            <VStack>
              <Text color="red.600" fontWeight="bold">
                Faltan más latas de pintura
              </Text>
              <Text color="gray.500">Actualmente no hay nada</Text>
            </VStack>
            <Ionicons name="chevron-forward" size={24} color="gray.500" />
          </HStack>
        </Pressable>
      </VStack>
    </BaseLayout>
  );
};

export default NotificacionesScreen;
