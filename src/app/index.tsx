import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Tipo de dato para los registros
interface Registro {
  id: string;
  numero: number;
  hora: string;
}

export default function App() {

  // Contador de clics
  const [contador, setContador] = useState<number>(0);

  // Registros de cada clic
  const [registros, setRegistros] = useState<Registro[]>([]);

  // Función para incrementar el contador
  const incrementarContador = () => {
    const nuevoContador = contador + 1;

    setContador(nuevoContador);

    // Obtener la hora actual
    const hora = new Date().toLocaleTimeString();

    // Guardar el registro del clic
    setRegistros((registrosAnteriores) => [
      ...registrosAnteriores,
      {
        id: Date.now().toString(),
        numero: nuevoContador,
        hora: hora
      }
    ]);
  };

  return (
    <View style={estilos.containerBox}>
      <Text style={estilos.counterBox}>{contador}</Text>

      {/* Botón disparador de eventos */}
      <TouchableOpacity
        style={estilos.btnClick}
        onPress={incrementarContador}
      >
        <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
      </TouchableOpacity>

      {/* Tabla de registros */}
      <View style={estilos.tableContainer}>
        {/* Cabecera de la tabla */}
        <View style={estilos.tableHeader}>
          <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
          <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
        </View>

        {/* Cuerpo de la tabla con scroll */}
        <ScrollView style={estilos.tableBody}>
          {registros.map((item, index) => (
            <View
              key={item.id}
              style={[
                estilos.tr,
                index % 2 === 0 ? estilos.trEven : null
              ]}
            >
              <Text style={[estilos.td, estilos.cellNumero]}>
                {item.numero}
              </Text>

              <Text style={[estilos.td, estilos.cellHora]}>
                {item.hora}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
  },

  containerBox: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    padding: 20,
    alignItems: "center",
  },

  counterBox: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
  },

  btnClick: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },

  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  tableContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },

  tr: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  trEven: {
    backgroundColor: "#fafafa",
  },

  th: {
    color: "#7f8c8d",
    fontWeight: "600",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },

  td: {
    color: "#333",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },

  cellNumero: {
    flex: 1,
  },

  cellHora: {
    flex: 1.5,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  tableBody: {
    maxHeight: 170,
  },

  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },

});
