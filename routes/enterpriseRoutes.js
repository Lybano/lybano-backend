const express = require("express");
const axios = require("axios");
const router = express.Router();
const enterpriseController = require("../controllers/enterpriseController");

const enterprise = new enterpriseController();

router.post("/cnpj/:id", async (req, res) => {
  const cnpj = req.params.id;

  try {
    const data = await axios.get(
      `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
    );
    const enterprises = await enterprise.createEnterprise(data);
    if (enterprises) {
      res.json(enterprises);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar dados da empresa");
  }
});

module.exports = router;
