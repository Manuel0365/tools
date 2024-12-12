import React, { useState } from "react";
import { Box, VStack, Input, Button, Text, HStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "123") {
      setError("");
      navigation.replace("Main");
    } else {
      setError("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  return (
    <Box flex={1} bg="white" justifyContent="center" px={6}>
      {/* Logo */}
      <Box alignItems="center" mb={8}>
        <Icon as={Ionicons} name="hammer" size="2xl" color="orange.500" />
        <Text fontSize="2xl" bold color="orange.500">
          Administrador
        </Text>
      </Box>

      {/* Formulario */}
      <VStack space={4}>
        <Text fontSize="lg" bold>
          Iniciar Sesión
        </Text>

        {/* Input de contraseña */}
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          InputRightElement={
            <Icon
              as={Ionicons}
              name={showPassword ? "eye-off" : "eye"}
              size="sm"
              mr={2}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        {error ? (
          <Text color="red.500" fontSize="xs">
            {error}
          </Text>
        ) : null}

        <HStack justifyContent="flex-end">
          <Text fontSize="sm" color="blue.500" onPress={() => console.log("Forgot Password")}>
            Forgot Password?
          </Text>
        </HStack>

        {/* Botón de inicio de sesión */}
        <Button
          bg="orange.500"
          borderRadius="full"
          py={3}
          onPress={handleLogin}
          _pressed={{ bg: "orange.400" }}
          leftIcon={<Icon as={Ionicons} name="arrow-forward" size="sm" color="white" />}
        >
          Iniciar Sesión
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
