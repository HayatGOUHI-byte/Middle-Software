import React, { useState, useEffect } from "react";
import axios from "axios";

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clients")
      .then((response) => setClients(response.data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div style={styles.container}>
           <div style={styles.grid}>
        {clients.map((client) => (
          <div key={client._id} style={styles.card}>
            <h3 style={styles.clientName}>{client.name}</h3>
            <p style={styles.clientEmail}>{client.email}</p>
            <p style={styles.clientPhone}>{client.phone}</p>
            <p style={styles.clientAddress}>{client.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  clientName: {
    color: "#2c3e50",
    fontSize: "18px",
    fontWeight: "bold",
  },
  clientEmail: {
    color: "#3498db",
    fontSize: "14px",
  },
  clientPhone: {
    color: "#27ae60",
    fontSize: "14px",
  },
  clientAddress: {
    color: "#7f8c8d",
    fontSize: "13px",
  },
};

export default ClientList;
