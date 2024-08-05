const { request, response } = require("express");
const { connection } = require("../connection/config-db");

const registrar = (req = request, res = response) => {
  const { NOMBRE, EDAD, PESO, RAZA } = req.body;
  const query =
    "INSERT INTO REGISTRO (NOMBRE, EDAD, PESO, RAZA) VALUES(?,?,?,?)";
  connection.query(
    query,
    [NOMBRE, EDAD, PESO, RAZA],
    (error, results, fields) => {
      if (error) {
        return res.status(500).json([]);
      } else {
        res.status(200).json({ mensaje: "Insertado correctamente" });
      }
    }
  );
};

const listar = (req = request, res = response) => {
  const query = "SELECT * FROM REGISTRO";
  connection.query(query, [], (error, results, fields) => {
    if (error) {
      return res.status(500).json([]);
    } else {
      res.status(200).json(results);
    }
  });
};

const id = (req = request, res = response) => {
  const { id } = req.params;
  const query = "SELECT * FROM REGISTRO WHERE ID = ?";
  connection.query(query, [id], (error, results, fields) => {
    if (error) {
      return res.status(500).json([]);
    } else {
      res.status(200).json(results);
    }
  });
};

const deletes = (req = request, res = response) => {
  const { id } = req.params;
  const query = "DELETE FROM REGISTRO WHERE ID = ?";
  connection.query(query, [id], (error, results, fields) => {
    if (error) {
      return res.status(500).json([]);
    } else {
      res
        .status(200)
        .json({ mensaje: "Se ha eliminado correctamente una fila" });
    }
  });
};
module.exports = { registrar, listar, id, deletes };
