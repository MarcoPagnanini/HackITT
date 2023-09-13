import React, { useState, useEffect } from "react";
import { db } from "../firebase";

function TabellaFirebase() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ottieni il riferimento alla tabella del database
    const dbRef = db.ref("users");

    // Aggiungi un listener per gli eventi "value" del database
    dbRef.on("value", (snapshot) => {
      // Ottieni i dati dal database
      const newData = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        newData.push({
          nome: childData.nome,
          score: childData.score,
        });
      });
      setData(newData);
    });
  }, [db]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabellaFirebase;