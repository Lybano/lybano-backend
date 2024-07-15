const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const users = new userController();

router.get("/user", async (req, res) => {
  const data = req.body.id;
  try {
    const user = await users.findUser(data);
    if (user) {
      res.json(user);
    } else {
      res.send("Usuário não encontrado");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar usuário");
  }
});

router.get("/users", async (req, res) => {
  try {
    const user = await users.findUsers();
    if (user) {
      res.json(user);
    } else {
      res.send("Usuários não encontrados");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar usuários");
  }
});

router.post("/user", async (req, res) => {
  const data = req.body;
  try {
    const user = await users.createUser(data);
    if (user) {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar usuário");
  }
});

router.put("/user", async (req, res) => {
  const data = req.body;
  try {
    const user = await users.updateUser(data);
    if (user) {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizars usuário");
  }
});

router.delete("/user", async (req, res) => {
  const data = req.body.id;
  try {
    const user = await users.deleteUser(data);
    if (user) {
      res.status(200).send("Usuário deletado com sucesso");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao deletar usuário");
  }
});

module.exports = router;
