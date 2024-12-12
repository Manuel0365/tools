import React from "react";
import { Box, Text, Pressable } from "native-base";
import BaseLayout from "./BaseLayout";

const InicioScreen = ({ navigation }) => {
  return (
    <BaseLayout navigation={navigation} title="Inicio">
      {/* Sección superior con mensaje */}
      <Box bg="orange.100" p={4} mb={4} borderRadius="lg">
        <Text color="orange.600" fontSize="md" fontWeight="bold">
          Cada herramienta que vendes es un paso hacia la construcción de tus sueños.
          ¡Sigue adelante!
        </Text>
      </Box>

      {/* Sección con Ganancia Bruta */}
      <Box bg="gray.100" p={4} borderRadius="lg" mb={4}>
        <Text fontSize="lg" bold>
          Ganancia Bruto
        </Text>
        <Text fontSize="2xl" color="orange.500">
          $8500.00
        </Text>
      </Box>

      {/* Sección de operaciones */}
      <Pressable onPress={() => console.log("Operaciones de la semana")}>
        <Box bg="black" p={4} borderRadius="lg">
          <Text color="white" fontSize="md">
            Checa las operaciones de la semana
          </Text>
        </Box>
      </Pressable>
    </BaseLayout>
  );
};

export default InicioScreen;
