import React from "react";
import { Table } from "semantic-ui-react";
import "./classify.css";
import { auth, db } from "../firebase";
import { UserOutlined, TrophyOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Input } from "@mui/material";

const RankingTable = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("c");
  const [score, setScore] = useState(0);

  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Score",
      accessor: "score",
      textAlign: "right",
    },
  ];

  useEffect(() => {
    db.collection("users")
      .orderBy("punteggio","desc")
      .limit(50)
      .onSnapshot((snapshot) => {
        setUser(snapshot.docs.map((doc) => doc.data()));
      });
    reload();
  }, []);

  function reload() {
    console.log(user);
    setName(user[0]?.author ? user[0].author : "Test");
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {user.map((author, index) => (
            <>
              <tr key={index}>
                <td>{author.author}</td>
                <td>{author.punteggio}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RankingTable;
