import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFA500",
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    color: "#FFA500",
    textAlign: "right",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#FFA500",
    borderRadius: 8,
    paddingVertical: 15,
  },
  errorText: {
  color: "red",
  fontSize: 14,
  marginBottom: 10,
},

});

export default styles;
