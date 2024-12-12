import React from "react";
import { Box, HStack, VStack, Text, Pressable, Icon } from "native-base"; // Asegúrate de importar todos los componentes necesarios
import { Ionicons } from "@expo/vector-icons";

const BaseLayout = ({ children, navigation, title, showTabs = true }) => {
  return (
    <Box flex={1}>
      {/* Header */}
      <Box bg="orange.500" py={4} px={4}>
        <HStack justifyContent="space-between" alignItems="center" marginTop={10}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Icon as={Ionicons} name="menu" size="38" color="white" />
          </Pressable>
          <Text color="white" fontSize="28" bold>
            {title}
          </Text>
          <Box width={6} /> {/* Placeholder para balancear */}
        </HStack>
      </Box>

      {/* Contenido principal */}
      <Box flex={1} p={4}>
        {children}
      </Box>

      {/* Tabs de navegación */}
      {showTabs && (
        <Box bg="white" borderTopWidth={1} borderTopColor="gray.200">
          <HStack justifyContent="space-around" alignItems="center" py={2}>
            <Pressable onPress={() => navigation.navigate("Inicio")}>
              <VStack alignItems="center">
                <Icon
                  as={Ionicons}
                  name="wallet"
                  size="lg"
                  color={
                    navigation.getState().index === 0 ? "orange.500" : "gray.500"
                  }
                />
                <Text
                  color={
                    navigation.getState().index === 0 ? "orange.500" : "gray.500"
                  }
                  fontSize="xs"
                >
                  Inicio
                </Text>
              </VStack>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Notificaciones")}>
              <VStack alignItems="center">
                <Icon
                  as={Ionicons}
                  name="notifications"
                  size="lg"
                  color={
                    navigation.getState().index === 1 ? "orange.500" : "gray.500"
                  }
                />
                <Text
                  color={
                    navigation.getState().index === 1 ? "orange.500" : "gray.500"
                  }
                  fontSize="xs"
                >
                  Notificaciones
                </Text>
              </VStack>
            </Pressable>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default BaseLayout;
